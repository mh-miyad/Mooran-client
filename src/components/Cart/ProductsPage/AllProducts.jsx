import React, { useEffect, useState } from "react";
import Cart from "../Cart";
import { Pagination, Select } from "flowbite-react";
import ProductFilter from "./ProductFilter";

const AllProducts = () => {
  const [data, setData] = useState([]);

  const [isdata, setIsData] = useState(false);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((resData) => setData(resData));
  }, []);
  //   useEffect(() => {
  //     fetch("https://dummyjson.com/products/category/mens-shirts")
  //       .then((res) => res.json())
  //       .then((resData) => setData1(resData));
  //   }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const items = data?.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    if (items.length === 0) {
      setIsData(!isdata);
      setCurrentPage(1);
    }
  }, [data, items.length]);

  return (
    <div>
      <p className='text-2xl font-bold my-10 md:text-4xl lg:text-6xl text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500 via-indigo-600   '>
        {" "}
        Our latest Products{" "}
      </p>
      {isdata ? (
        <div className=''>
          <ProductFilter />
          <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5  '>
              {items?.map((ele) => {
                return (
                  <Cart
                    key={ele.id}
                    img={ele.image}
                    brand={ele.category}
                    title={ele.title}
                    price={ele.price}
                    rating={ele.rating.rate}
                    // description={ele.description}
                  />
                );
              })}
            </div>
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
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                </Select>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default AllProducts;
