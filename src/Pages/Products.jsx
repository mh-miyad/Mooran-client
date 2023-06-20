import React, { useEffect, useState } from "react";
import Cart from "./../components/Cart/Cart";
import {
  Dropdown,
  Label,
  Pagination,
  RangeSlider,
  Select,
  Spinner,
} from "flowbite-react";
import axios from "axios";
import CartSkeleton from "../components/Cart/CartSkeleton";
import Banner from "../components/Slider/Banner";

const Products = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [data, setData] = useState([]);
  const [priceValue, setPriceValue] = useState(null);
  const [isdata, setIsData] = useState(true);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  useEffect(() => {
    setLoading(true);
    fetch("https://mooran.vercel.app/products")
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        setLoading(false);
      });
  }, []);

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
    // Retrieve products based on selected categories and price range
    setLoading(true);
    axios
      .get("https://mooran.vercel.app/category", {
        params: {
          categories: selectedCategories,
        },
      })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error retrieving products:", error);
      });
  }, [selectedCategories, priceValue]);

  const handleRangeSliderChange = (event) => {
    const { value } = event.target;
    setPriceValue(value);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const items = data?.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    if (items.length === 0) {
      setIsData(false);
      setCurrentPage(1);
    }
  }, [items.length, selectedCategories]);
  return (
    <div>
      <div className='my-10'>
        <Banner />
      </div>
      <div>
        <p className='text-2xl font-bold my-10 md:text-4xl lg:text-6xl text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500 via-indigo-600   '>
          {" "}
          Our latest Products{" "}
        </p>

        {isdata ? (
          <div className=' container mx-auto '>
            <div>
              <div>
                <Dropdown
                  label='Filter By '
                  gradientDuoTone='purpleToBlue'
                  className=''>
                  <div className='p-10'>
                    <div>
                      <div>
                        <div className='my-10'>
                          Choose Your Category
                          <form className='space-y-4'>
                            <div className='flex items-center'>
                              <input
                                id='filter-size-1'
                                value='womens-dresses'
                                name='category'
                                type='checkbox'
                                className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                checked={selectedCategories.includes(
                                  "womens-dresses",
                                )}
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
                                value='mens-shirts'
                                name='category'
                                type='checkbox'
                                className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                checked={selectedCategories.includes(
                                  "mens-shirts",
                                )}
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
                                checked={selectedCategories.includes(
                                  "fragrances",
                                )}
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
                                checked={selectedCategories.includes(
                                  "womens-shoes",
                                )}
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
                                value='mens-shoes'
                                name='category'
                                type='checkbox'
                                className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                checked={selectedCategories.includes(
                                  "mens-shoes",
                                )}
                                onChange={handleCheckboxChange}
                              />
                              <label
                                htmlFor='filter-size-5'
                                className='ml-3 text-sm text-gray-600'>
                                Men's Shoes
                              </label>
                            </div>
                            <div className='flex items-center'>
                              <input
                                id='filter-size-6'
                                value='sunglasses'
                                name='category'
                                type='checkbox'
                                className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                checked={selectedCategories.includes(
                                  "sunglasses",
                                )}
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
                              onChange={handleRangeSliderChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dropdown>
              </div>
            </div>

            <div>
              {!loading ? (
                <>
                  <div className='grid grid-cols-1 md:grid-cols-2 items-center lg:grid-cols-4  gap-5 my-10 '>
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
