import React, { useEffect, useState } from "react";
import Cart from "./../components/Cart/Cart";
import {
  Label,
  Pagination,
  RangeSlider,
  Select,
  Spinner,
} from "flowbite-react";
import axios from "axios";
import CartSkeleton from "../components/Cart/CartSkeleton";

const Products = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [data, setData] = useState([]);
  const [priceValue, setPriceValue] = useState(null);
  const [isdata, setIsData] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("https://mooran.vercel.app/products")
      .then((res) => res.json())
      .then((resData) => setData(resData));
    setLoading(false);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const items = data?.slice(indexOfFirstItem, indexOfLastItem);
  useEffect(() => {
    if (items.length === 0) {
      setIsData(false); // Update to true
      setCurrentPage(1);
    }
  }, [data, items.length]);

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    if (selectedCategories.includes(value)) {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== value),
      );
    } else {
      setSelectedCategories([...selectedCategories, value]);
    }
  };
  useEffect(() => {
    // Retrieve products based on selected categories
    if (selectedCategories.length > 0) {
      setLoading(true);
      axios
        .get("http://localhost:5000/category", {
          params: { categories: selectedCategories },
        })
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error retrieving products:", error);
        });
    }
  }, [selectedCategories]);

  return (
    <div>
      <div>
        <p className='text-2xl font-bold my-10 md:text-4xl lg:text-6xl text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500 via-indigo-600   '>
          {" "}
          Our latest Products{" "}
        </p>
        {isdata ? (
          <div className=''>
            <div>
              {!loading ? (
                <>
                  <div className='grid grid-cols-1 md:grid-cols-2 items-center lg:grid-cols-4  gap-5  '>
                    {items?.map((ele) => {
                      return (
                        <Cart
                          key={ele.id}
                          img={ele.thumbnail}
                          brand={ele.category}
                          title={ele.title}
                          price={ele.price}
                          rating={ele.rating.rate}
                          // description={ele.description}
                        />
                      );
                    })}
                  </div>
                </>
              ) : (
                <>
                  <div className='text-center '>
                    <div className='grid grid-cols-1 md:grid-cols-2 items-center lg:grid-cols-4  gap-5  '>
                      <CartSkeleton />
                      <CartSkeleton />
                      <CartSkeleton />
                      <CartSkeleton />
                      <CartSkeleton />
                      <CartSkeleton />
                      <CartSkeleton />
                      <CartSkeleton />
                      <CartSkeleton />
                      <CartSkeleton />
                      <CartSkeleton />
                    </div>
                  </div>
                </>
              )}
              <div className='flex items-center flex-col-reverse md:flex-row  justify-center gap-10 my-10'>
                <Pagination
                  className='text-center  '
                  currentPage={currentPage}
                  onPageChange={(page) => {
                    setCurrentPage(page);
                  }}
                  totalPages={30}
                />{" "}
                <div className=''>
                  {" "}
                  <span> Par Page Show </span>
                  <Select
                    id='itemsPerPage'
                    defaultValue={5}
                    onClick={(e) => setItemsPerPage(e.target.value)}>
                    <option value={4}>4</option>
                    <option value={6}>8</option>
                    <option value={12}>12</option>
                    <option value={16}>16</option>
                    <option value={20}>20</option>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className='my-8'>
              <p className='text-2xl font-bold my-10 md:text-4xl lg:text-6xl text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-700 via-yellow-300   '>
                {" "}
                More Products Added Soon
              </p>
              <div className='text-center '>
                <button
                  className='bg-gradient-to-r from-cyan-500 to-sky-600 via-blue-500 px-6 py-3 text-white font-bold  rounded-3xl'
                  onClick={() => setIsData(true)}>
                  {" "}
                  Show Available Products
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
