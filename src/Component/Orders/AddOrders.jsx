import React, { useState } from "react";
import Items from "./Items";
import Fulfillment from "./Fulfillment";
import Payment from "./Payment";

const AddOrders = () => {
  const [isExistingCustomer, setIsExistingCustomer] = useState(false);

  const handleCheckboxChange = (e) => {
    if (e.target.id === "checked-checkbox") {
      setIsExistingCustomer(true);
    } else if (e.target.id === "default-checkbox") {
      setIsExistingCustomer(false);
    }
  };

  // const handleTextClick = () => {
  //   setIsShowCustom(!isShowCustom);
  // };

  return (
    <div className="bg-[#f8f9fa] overflow-x-auto">
      <div className="w-[1000px] md:w-full mx-auto p-4 md:p-6">
        <div className="flex justify-start items-start">
          <h2 className="text-3xl font-[300] text-gray-700 text-start pl-2">
            Add an order
          </h2>
        </div>
        <div className="ms-4 p-2 mt-4">
          <ol className="flex items-center">
            <li className="relative w-full">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full dark:bg-blue-900 dark:ring-gray-900 shrink-0">
                  <span class="flex items-center justify-center w-8 h-8 text-white border rounded-full shrink-0 dark:border-blue-500">
                    1
                  </span>
                  <svg
                    className="w-2.5 h-2.5 text-blue-100 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </div>
                <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>

              <div className="mt-2">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Customer Info
                </h3>
              </div>
            </li>
            <li className="relative w-full">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full dark:bg-blue-900 dark:ring-gray-900 shrink-0">
                  <span class="flex items-center justify-center w-8 h-8 text-white border rounded-full shrink-0 dark:border-blue-500 ">
                    2
                  </span>
                  <svg
                    className="w-2.5 h-2.5 text-blue-100 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </div>
                <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Items
                </h3>
              </div>
            </li>
            <li className="relative w-full">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full dark:bg-blue-900 dark:ring-gray-900 shrink-0">
                  <span class="flex items-center justify-center w-8 h-8 text-white border rounded-full shrink-0 dark:border-blue-500 ">
                    3
                  </span>
                  <svg
                    className="w-2.5 h-2.5 text-blue-100 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </div>
                <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Fulfillment
                </h3>
              </div>
            </li>
            <li className="relative w-full">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full dark:bg-blue-900 dark:ring-gray-900 shrink-0">
                  <span class="flex items-center justify-center w-8 h-8 text-white border rounded-full shrink-0 dark:border-blue-500 ">
                    4
                  </span>
                  <svg
                    className="w-2.5 h-2.5 text-blue-100 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-3">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Payment
                </h3>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div className="p-8">
        <h1 className="text-2xl font-[500] text-gray-700 mb-2">
          Customer information
        </h1>
        <div className="mt-2 py-4 px-10 bg-white border mb-4">
          <form>
            <div className="flex items-center space-x-4 mb-4">
              <span className="mr-4">Order For</span>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="checked-checkbox"
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
                  checked={isExistingCustomer}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="checked-checkbox" className="ml-2">
                  Existing customer
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="default-checkbox"
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
                  checked={!isExistingCustomer}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="default-checkbox" className="ml-2">
                  New customer
                </label>
              </div>
            </div>
            <div className="w-full flex flex-col">
              {isExistingCustomer ? (
                <div className="flex items-center mb-4">
                  <label
                    htmlFor="search"
                    className="block text-md font-[400] text-gray-700 mb-1 mr-2"
                  >
                    Search
                  </label>
                  <input
                    type="search"
                    className="w-full p-[6px] text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-sm"
                    placeholder="Search by customer name, email address or company"
                  />
                </div>
              ) : (
                <>
                  <div className="flex items-center mb-6">
                    <label
                      htmlFor="email"
                      className="block text-md font-[400] text-gray-700 mb-1 mr-2"
                    >
                      Email Address :
                    </label>
                    <input
                      type="email"
                      className="w-96 p-1 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-sm"
                      required
                    />
                  </div>
                  <div className="flex items-center mb-6">
                    <label
                      htmlFor="password"
                      className="block text-md font-[400] text-gray-700 mb-1 mr-[6px]"
                    >
                      Password :
                    </label>
                    <input
                      type="password"
                      className="w-96 p-1 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-sm"
                      required
                    />
                  </div>
                  <div className="flex items-center mb-6">
                    <label
                      htmlFor="confirm-password"
                      className="block text-md font-[400] text-gray-700 mb-1 mr-[6px]"
                    >
                      Confirm Password :
                    </label>
                    <input
                      type="password"
                      className="w-96 p-1 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-sm"
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="mr-4">Exclusive Offers :</span>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="offers-checkbox"
                        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
                      />
                      <label htmlFor="offers-checkbox" className="ml-2">
                        I would like to receive updates and offers.
                      </label>
                    </div>
                  </div>
                </>
              )}
            </div>
          </form>
        </div>

        <h1 className="text-2xl font-[500] text-gray-700 mb-2">
          Billing information
        </h1>
        <div className="mt-2 py-4 px-10 bg-white border mb-6">
          <form>
            <div className="w-full md:flex md:flex-col">
              <div className="md:flex md:items-center mb-4">
                <label
                  htmlFor="text"
                  className="block text-md font-[400] text-gray-700 mb-1 md:mr-2"
                >
                  First Name :
                </label>
                <input
                  type="text"
                  className="w-96 p-1 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-sm"
                  required
                />
              </div>
              <div className="md:flex md:items-center mb-4">
                <label
                  htmlFor="text"
                  className="block text-md font-[400] text-gray-700 mb-1 md:mr-2"
                >
                  Last Name :
                </label>
                <input
                  type="text"
                  className="w-96 p-1 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-sm"
                  required
                />
              </div>
              <div className="md:flex md:items-center mb-4">
                <label
                  htmlFor="text"
                  className="block text-md font-[400] text-gray-700 mb-1 md:mr-2"
                >
                  Address :
                </label>
                <input
                  type="text"
                  className="w-96 p-1 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-sm"
                  required
                />
              </div>
              <div className="md:flex md:items-center mb-4">
                <label
                  htmlFor="text"
                  className="block text-md font-[400] text-gray-700 mb-1 md:mr-2"
                >
                  City :
                </label>
                <input
                  type="text"
                  className="w-96 p-1 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-sm"
                  required
                />
              </div>
              <div className="md:flex md:items-center mb-4">
                <label
                  for="countries"
                  className="block text-md font-[400] text-gray-700 mb-1 md:mr-2"
                >
                  Choose a country
                </label>
                <select
                  id="countries"
                  className="w-96 p-1 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-sm"
                  required
                >
                  <option value="" selected>
                    Select an option
                  </option>
                </select>
              </div>

              <div className="md:flex md:items-center mb-4">
                <label
                  htmlFor="text"
                  className="block text-md font-[400] text-gray-700 mb-1 md:mr-2"
                >
                  State :
                </label>
                <input
                  type="text"
                  className="w-96 p-1 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-sm"
                  required
                />
              </div>
              <div className="md:flex md:items-center mb-4">
                <label
                  htmlFor="text"
                  className="block text-md font-[400] text-gray-700 mb-1 md:mr-2"
                >
                  ZIP/Postcode :
                </label>
                <input
                  type="text"
                  className="w-96 p-1 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-sm"
                  required
                />
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="offers-checkbox"
                    className="w-5 h-5 ms-24 text-blue-600 bg-gray-100 border-gray-300 rounded"
                  />
                  <label htmlFor="offers-checkbox" className="ml-2">
                    Save to customer's address book
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Items />
      <Fulfillment />
      <Payment />
      <div className="w-full border-t-2 bg-white h-14 fixed bottom-0">
        <div className="flex justify-end fixed bottom-0 right-10 z-50">
          <button
            type="button"
            className="text-blue-500 hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 mb-2 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            Cancel
          </button>
          <button
            type="button"
            className="text-gray-700 hover:text-gray-700 border border-gray-600 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 cursor-not-allowed font-medium rounded-sm text-sm px-5 py-1.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            Back
          </button>

          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddOrders;
