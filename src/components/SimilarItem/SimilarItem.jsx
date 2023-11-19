import React, { useEffect } from "react";
import SimilarCard from "./similarCard";
import { useSelector } from "react-redux";
import axios from "axios";

const SimilarItem = () => {
  const similarProduct = useSelector((state) => state.similarItem.text);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/similarItems`, {
          params: { ctgItem: similarProduct },
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [similarProduct]);
  return (
    <div className=" ">
      <h2 className="text-slate-700 font-extrabold my-6 border-2 w-1/2 text-center p-2 bg-gray-100 drop-shadow-md rounded-lg border-gray-300 sm:text-2xl capitalize lg:text-4xl">
        <span className="drop-shadow-md"> You Should Try This</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        <SimilarCard />
        <SimilarCard />
        <SimilarCard />
        <SimilarCard />
        <SimilarCard />
        <SimilarCard />
      </div>
    </div>
  );
};

export default SimilarItem;
