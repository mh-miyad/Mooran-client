const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
// Here  MiddleWare
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Mooran Is Running .............  ");
});

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = process.env.URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const productCollection = await client
      .db("product")
      .collection("productDB");

    app.get("/products", async (req, res) => {
      const query = {};
      const result = await productCollection.find(query).toArray();
      res.send(result);
    });

    app.get("/category", async (req, res) => {
      const { categories } = req.query;

      try {
        let query = {};

        if (categories) {
          const categoryArray = Array.isArray(categories)
            ? categories
            : [categories];
          query = { category: { $in: categoryArray } };
          const products = await productCollection.find(query).toArray();

          res.status(200).json(products);
        } else {
          query = {};
          const products = await productCollection.find(query).toArray();

          res.status(200).json(products);
        }
      } catch (error) {
        console.error("Error retrieving products:", error);
        res.status(500).json({ error: "Failed to retrieve products" });
      }
    });

    app.get("/similarItems", async (req, res) => {
      const { ctgItem } = await req.query;

      // try {
      //   let query = {};

      //   if (ctgItem) {
      //     const categoryArray = Array.isArray(ctgItem) ? ctgItem : [ctgItem];
      //     query = { category: { $in: categoryArray } };
      //     const products = await productCollection.find(query).toArray();

      //     res.status(200).json(products);
      //   } else {
      //     query = {};
      //     const products = await productCollection.find(query).toArray();

      //     res.status(200).json(products);
      //   }
      // } catch (error) {
      //   console.error("Error retrieving products:", error);
      //   res.status(500).json({ error: "Failed to retrieve products" });
      // }
    });

    app.get("/details/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productCollection.findOne(query);

      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
