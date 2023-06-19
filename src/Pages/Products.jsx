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
              <div className=''>
                <button
                  className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                  type='button'
                  data-drawer-target='drawer-contact'
                  data-drawer-show='drawer-contact'
                  aria-controls='drawer-contact'>
                  Filter Products
                </button>
              </div>

              <div
                id='drawer-contact'
                className='fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800'
                tabindex='-1'
                aria-labelledby='drawer-contact-label'>
                <h5
                  id='drawer-label'
                  className='inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400'>
                  <svg
                    className='w-5 h-5 mr-2'
                    aria-hidden='true'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fill-rule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                      clip-rule='evenodd'></path>
                  </svg>
                  Filter Products By
                </h5>
                <button
                  type='button'
                  data-drawer-hide='drawer-contact'
                  aria-controls='drawer-contact'
                  className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'>
                  <svg
                    aria-hidden='true'
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fill-rule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clip-rule='evenodd'></path>
                  </svg>
                  <span className='sr-only'>Close menu</span>
                </button>

                <div>
                  <div className='my-10'>
                    Choose Your Category
                    <form className='space-y-4'>
                      <div className='flex items-center'>
                        <input
                          id='filter-size-1'
                          value='women'
                          name='category'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                          checked={selectedCategories.includes("women")}
                          onChange={handleCheckboxChange}
                        />
                        <label
                          htmlFor='filter-size-1'
                          className='ml-3 text-sm text-gray-600'>
                          Women
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='filter-size-2'
                          value='men'
                          name='category'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                          checked={selectedCategories.includes("men")}
                          onChange={handleCheckboxChange}
                        />
                        <label
                          htmlFor='filter-size-2'
                          className='ml-3 text-sm text-gray-600'>
                          Men
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='filter-size-3'
                          value='fragrances'
                          name='category'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                          checked={selectedCategories.includes("fragrances")}
                          onChange={handleCheckboxChange}
                        />
                        <label
                          htmlFor='filter-size-3'
                          className='ml-3 text-sm text-gray-600'>
                          Fragrances
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='filter-size-4'
                          value='womens-shoes'
                          name='category'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                          checked={selectedCategories.includes("womens-shoes")}
                          onChange={handleCheckboxChange}
                        />
                        <label
                          htmlFor='filter-size-4'
                          className='ml-3 text-sm text-gray-600'>
                          Women's Shoes
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='filter-size-5'
                          value='mens-shirts'
                          name='category'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                          checked={selectedCategories.includes("mens-shirts")}
                          onChange={handleCheckboxChange}
                        />
                        <label
                          htmlFor='filter-size-5'
                          className='ml-3 text-sm text-gray-600'>
                          Men's Shirts
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          id='filter-size-6'
                          value='sunglasses'
                          name='category'
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                          checked={selectedCategories.includes("sunglasses")}
                          onChange={handleCheckboxChange}
                        />
                        <label
                          htmlFor='filter-size-6'
                          className='ml-3 text-sm text-gray-600'>
                          Sunglasses
                        </label>
                      </div>
                    </form>
                  </div>
                  <div>
                    Choose Your Price Range
                    <div>
                      <Label htmlFor='default-range' value={priceValue} />

                      <RangeSlider
                        id='default-range'
                        max={100000}
                        min={20}
                        onChange={(e) => setPriceValue(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
