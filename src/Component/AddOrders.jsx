import React, { useState } from "react";
// import { Link } from "react-router-dom";

const AddOrders = () => {
  const [isExistingCustomer, setIsExistingCustomer] = useState(false);
  const [isShowBilling, setIsShowBilling] = useState(false);
  const [isShowCustom, setIsShowCustom] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckboxChange = (e) => {
    if (e.target.id === "checked-checkbox") {
      setIsExistingCustomer(true);
    } else if (e.target.id === "default-checkbox") {
      setIsExistingCustomer(false);
    }
  };

  const handleBillingChange = (e) => {
    if (e.target.id === "checked-checkbox") {
      setIsShowBilling(true);
    } else if (e.target.id === "default-checkbox") {
      setIsShowBilling(false);
    }
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // const handleTextClick = () => {
  //   setIsShowCustom(!isShowCustom);
  // };

  return (
    <div className="bg-[#f8f9fa] overflow-x-auto">
      <div className="w-[1000px] md:w-full mx-auto p-4 md:p-8">
        <div className="flex justify-start items-start">
          <h2 className="text-3xl font-[300] text-gray-700 text-start pl-3">
            Add an order
          </h2>
        </div>

        <div className="mt-4 p-4 ps-6">
          <ol className="flex items-center">
            <li className="relative w-full mb-6">
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
              <div className="mt-3">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Customer Info
                </h3>
              </div>
            </li>
            <li className="relative w-full mb-6">
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
            <li className="relative w-full mb-6">
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
            <li className="relative w-full mb-6">
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

        <div className="mt-2 p-4">
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
                    <option selected>Select an option</option>
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

          <div className="container">
            <h1 className="text-2xl font-[500] text-gray-700 mb-2">
              Add products
            </h1>
            <div className="mt-2 py-4 px-10 bg-white border mb-6">
              <div className="w-full flex flex-col">
                <div className="flex flex-row mb-[2px]">
                  <label
                    htmlFor="search"
                    className="block text-md font-[400] text-gray-700 mt-1 mr-2"
                  >
                    Search
                  </label>
                  <input
                    type="search"
                    className="w-full p-[6px] text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-sm"
                    placeholder="Search by product name"
                  />
                </div>

                {/* <!-- Modal toggle --> */}
                <button
                  onClick={toggleModal}
                  className="text-blue-600 hover:text-blue-800 text-start ps-14"
                  type="button"
                >
                  Add a custom product
                </button>

                {/* <!-- Main modal --> */}
                {isModalOpen && (
                  <div
                    id="crud-modal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
                  >
                    <div className="relative p-4 w-full max-w-2xl max-h-full">
                      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Customize
                          </h3>
                          <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={toggleModal}
                          >
                            <svg
                              className="w-3 h-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 14"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                              />
                            </svg>
                            <span className="sr-only">Close modal</span>
                          </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <form className="p-4 md:p-5">
                          <div className="flex flex-col">
                            <div className="ms-12">
                              <div className="flex items-center mb-6">
                                <label
                                  htmlFor="email"
                                  className="block text-md font-[400] text-gray-700 mb-1 mr-2"
                                >
                                  Name
                                </label>
                                <input
                                  type="email"
                                  className="w-96 p-1 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-sm"
                                  required
                                />
                              </div>
                              <div className="flex items-center mb-6">
                                <label
                                  htmlFor="email"
                                  className="block text-md font-[400] text-gray-700 mb-1 mr-2"
                                >
                                  SKU
                                </label>
                                <input
                                  type="email"
                                  className="w-96 p-1 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-sm"
                                  required
                                />
                              </div>
                            </div>
                            <p className="mb-2 ps-6">Item Price</p>
                            <div className="flex flex-col ms-20">
                              <div class="flex items-center mb-4">
                                <input
                                  disabled
                                  id="disabled-radio-1"
                                  type="radio"
                                  value=""
                                  name="disabled-radio"
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="disabled-radio-1"
                                  class="ms-2 text-md font-medium text-gray-800 dark:text-gray-500"
                                >
                                  Use current store pricing
                                </label>
                              </div>
                              <div class="flex items-center">
                                <input
                                  checked
                                  id="disabled-radio-2"
                                  type="radio"
                                  value=""
                                  name="disabled-radio"
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="disabled-radio-2"
                                  class="ms-2 text-md font-medium text-gray-800 dark:text-gray-500"
                                >
                                  Manually set the price for this item
                                </label>
                              </div>
                              <div className="flex items-center my-6 ms-4">
                                <label
                                  htmlFor="text"
                                  className="block text-md font-[400] text-gray-700 mb-1 mr-2"
                                ></label>
                                <input
                                  type="text"
                                  className="w-20 p-1 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-sm"
                                  placeholder="0.00"
                                  required
                                />
                              </div>
                            </div>
                            <div className="flex items-center mb-6 ms-8">
                              <label
                                htmlFor="email"
                                className="block text-md font-[400] text-gray-700 mb-1 mr-2"
                              >
                                Quantity
                              </label>
                              <input
                                type="email"
                                className="w-25 p-1 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-sm"
                                required
                              />
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="text-white inline-flex bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ms-14"
                          >
                            Add Item
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-2 bg-white border mb-6">
            <table className="w-full border ">
              <thead className="bg-gray-200 border-b border-gray-300">
                <tr>
                  <th className="p-2 text-left text-md font-[500] text-gray-800">
                    Products
                  </th>
                  <th className="p-2 text-left text-md font-[500] text-gray-800">
                    Description
                  </th>
                  <th className="p-2 text-left text-md font-[500] text-gray-800">
                    Qty
                  </th>
                  <th className="p-2 text-left text-md font-[500] text-gray-800">
                    Price
                  </th>
                  <th className="p-2 text-left text-md font-[500] text-gray-800">
                    Total
                  </th>
                  <th className="p-2 text-left text-md font-[500] text-gray-800">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="p-2 text-md font-[400] text-gray-700 border">
                    Image
                  </td>
                  <td className="p-2 text-md font-[400] text-gray-700 border">
                    Kurta Pajama
                  </td>
                  <td className="p-2 text-md font-[400] text-gray-700 border">
                    1
                  </td>
                  <td className="p-2 text-md font-[400] text-gray-700 border">
                    20.00
                  </td>
                  <td className="p-2 text-md font-[400] text-gray-700 border">
                    $20.00
                  </td>
                  <td className="p-2 text-md font-[400] text-gray-700 border">
                    ...
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-end">
            <h2 className="p-2 border bg-slate-500 rounded-md text-xl font-[500] text-white inline-block">
              Subtotal : $20.00
            </h2>
          </div>

          <h1 className="text-2xl font-[500] text-gray-700 mb-2">
            Fulfillment
          </h1>
          <div className="mt-2 py-4 px-4  bg-white border mb-6">
            <h2 className="text-md font-[500] text-gray-700">Destination</h2>
            <hr />
            <div className="flex items-center space-x-4 mt-4 ps-32 mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="checked-checkbox"
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
                  checked={isShowBilling}
                  onChange={handleBillingChange}
                />
                <label htmlFor="checked-checkbox" className="ml-2">
                  Billing address specified
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="default-checkbox"
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
                  checked={!isShowBilling}
                  onChange={handleBillingChange}
                />
                <label htmlFor="default-checkbox" className="ml-2">
                  New address
                </label>
              </div>
            </div>
            {isShowBilling ? (
              <>
                <h2 className="text-md font-[500] text-gray-700">
                  Billing address
                </h2>
                <table className="table-auto border-collapse w-full mb-6">
                  <tbody>
                    <tr>
                      <td className="p-1 font-bold text-end mr-2">Name</td>
                      <td className="p-1">John Doe</td>
                    </tr>
                    <tr>
                      <td className="p-1 font-bold text-end mr-2">Address</td>
                      <td className="p-1">123 Main St, Cityville</td>
                    </tr>
                    <tr>
                      <td className="p-1 font-bold text-end mr-2">City</td>
                      <td className="p-1">New York</td>
                    </tr>
                    <tr>
                      <td className="p-1 font-bold text-end mr-2">Phone</td>
                      <td className="p-1">(123) 456-7890</td>
                    </tr>
                    <tr>
                      <td className="p-1 font-bold text-end mr-2">State</td>
                      <td className="p-1">Stateville</td>
                    </tr>
                    <tr>
                      <td className="p-1 font-bold text-end mr-2">Country</td>
                      <td className="p-1">Countryland</td>
                    </tr>
                    <tr>
                      <td className="p-1 font-bold text-end mr-2">
                        ZIP/Postcode
                      </td>
                      <td className="p-1">000000</td>
                    </tr>
                  </tbody>
                </table>
              </>
            ) : (
              <>
                <h2 className="text-md font-[500] text-gray-700">
                  Shipping address
                </h2>
                <hr />
                <div className="mt-2 py-4 px-10 bg-white mb-6">
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
                          Choose a country :
                        </label>
                        <select
                          id="countries"
                          className="w-96 p-1 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-sm"
                          required
                        >
                          <option selected>Select an option</option>
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
                            className="w-5 h-5 ms-24 text-blue-600  border-gray-300 rounded"
                          />
                          <label htmlFor="offers-checkbox" className="ml-2">
                            Save to customer's address book
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </>
            )}

            <h2 className="text-md font-[500] text-gray-700">
              Shipping method
            </h2>
            <hr />

            <div className="mt-6">
              <p className="mb-4 ps-10">Choose a provider: </p>
              <div className="flex flex-col space-y-2 ps-32 mb-4">
                <div className="flex items-center">
                  <label
                    htmlFor="none"
                    className={`cursor-pointer ${
                      !isShowCustom ? "font-[500] text-gray-600" : ""
                    }`}
                    onClick={() => setIsShowCustom(false)}
                  >
                    None
                  </label>
                </div>

                <div className="flex items-center">
                  <label
                    htmlFor="custom"
                    className={`cursor-pointer ${
                      isShowCustom ? "font-bold text-gray-600" : ""
                    }`}
                    onClick={() => setIsShowCustom(true)}
                  >
                    Custom
                  </label>
                </div>
              </div>

              {isShowCustom && (
                <table className="table-auto border-collapse w-1/2 mb-6 ms-11">
                  <tbody>
                    <tr>
                      <td className="p-1 font-bold text-end mr-2">
                        <label
                          htmlFor="text"
                          className="block text-md font-[400] text-gray-700 mb-1 md:mr-2"
                        >
                          Shipping method
                        </label>
                      </td>
                      <td className="p-1">
                        <input
                          type="text"
                          className="w-full p-1 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-sm"
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-1 font-bold text-end mr-2">
                        <label
                          htmlFor="text"
                          className="block text-md font-[400] text-gray-700 mb-1 md:mr-2"
                        >
                          Cost
                        </label>
                      </td>
                      <td className="p-1">
                        <input
                          type="text"
                          className="w-30 p-1 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-sm"
                          placeholder="0.00"
                          required
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
          </div>

          <div className="mt-2  mb-6 flex justify-between space-x-4">
            <div className="w-full">
              <h1 className="text-2xl font-[500] text-gray-700 mb-2">
                Customer billing details
              </h1>
              <div className="mt-2 mb-6 border bg-white">
                <h2 className="text-md font-[500] text-gray-700 ps-4 mt-4">
                  Billing to :
                </h2>
                <table className="table-auto border-collapse w-full mb-6">
                  <tbody>
                    <tr>
                      <td className="p-1 font-bold text-end mr-2">Name</td>
                      <td className="p-1">John Doe</td>
                    </tr>
                    <tr>
                      <td className="p-1 font-bold text-end mr-2">Address</td>
                      <td className="p-1">123 Main St, Cityville</td>
                    </tr>
                    <tr>
                      <td className="p-1 font-bold text-end mr-2">City</td>
                      <td className="p-1">New York</td>
                    </tr>
                    <tr>
                      <td className="p-1 font-bold text-end mr-2">Phone</td>
                      <td className="p-1">(123) 456-7890</td>
                    </tr>
                    <tr>
                      <td className="p-1 font-bold text-end mr-2">State</td>
                      <td className="p-1">Stateville</td>
                    </tr>
                    <tr>
                      <td className="p-1 font-bold text-end mr-2">Country</td>
                      <td className="p-1">Countryland</td>
                    </tr>
                    <tr>
                      <td className="p-1 font-bold text-end mr-2">
                        ZIP/Postcode
                      </td>
                      <td className="p-1">000000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h1 className="text-2xl font-[500] text-gray-700 mb-2">
                Fulfillment details: items 1 - 1 of 1
              </h1>
              <div className="mt-2 mb-6 border bg-white">
                <h2 className="text-md font-[500] text-gray-700 ps-4 mt-4">
                  Shipping to :
                </h2>
                <table className="table-auto border-collapse w-full mb-6">
                  <tbody>
                    <tr>
                      <td className="p-1 font-bold text-end mr-2">Name</td>
                      <td className="p-1">John Doe</td>
                    </tr>
                    <tr>
                      <td className="p-1 font-bold text-end mr-2">Address</td>
                      <td className="p-1">123 Main St, Cityville</td>
                    </tr>
                    <tr>
                      <td className="p-1 font-bold text-end mr-2">City</td>
                      <td className="p-1">New York</td>
                    </tr>
                    <tr>
                      <td className="p-1 font-bold text-end mr-2">Phone</td>
                      <td className="p-1">(123) 456-7890</td>
                    </tr>
                    <tr>
                      <td className="p-1 font-bold text-end mr-2">State</td>
                      <td className="p-1">Stateville</td>
                    </tr>
                    <tr>
                      <td className="p-1 font-bold text-end mr-2">Country</td>
                      <td className="p-1">Countryland</td>
                    </tr>
                    <tr>
                      <td className="p-1 font-bold text-end mr-2">
                        ZIP/Postcode
                      </td>
                      <td className="p-1">000000</td>
                    </tr>
                  </tbody>
                </table>
                <div>
                  <h2 className="text-md font-[500] text-gray-700 ps-4 mt-4">
                    Shipping method :
                  </h2>
                  <p className="text-sm font-[400] text-gray-600 ps-4 mt-2">
                    None : 0.00
                  </p>
                  <p className="text-sm font-[400] text-gray-600 ps-4 mt-2">
                    Custom : 0.00
                  </p>
                </div>
                <div className="p-4">
                  <table className="w-full border ">
                    <thead className="bg-gray-200 border-b border-gray-300">
                      <tr>
                        <th className="p-2 text-left text-sm font-[500] text-gray-800">
                          Products
                        </th>
                        <th className="p-2 text-left text-sm font-[500] text-gray-800">
                          Products shipped to Dhoop SIngh Nagar, Panipat,
                          102103, Haiti
                        </th>
                        <th className="p-2 text-left text-sm font-[500] text-gray-800">
                          Qty
                        </th>
                        <th className="p-2 text-left text-sm font-[500] text-gray-800">
                          Price
                        </th>
                        <th className="p-2 text-left text-sm font-[500] text-gray-800">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="">
                        <td className="p-2 text-md font-[400] text-gray-700 border">
                          Image
                        </td>
                        <td className="p-2 text-md font-[400] text-gray-700 border">
                          Kurta Pajama
                        </td>
                        <td className="p-2 text-md font-[400] text-gray-700 border">
                          1
                        </td>
                        <td className="p-2 text-md font-[400] text-gray-700 border">
                          $20.00
                        </td>
                        <td className="p-2 text-md font-[400] text-gray-700 border">
                          $20.00
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="w-full mb-10">
                <h1 className="text-2xl font-[500] text-gray-700 mb-2">
                  Payment
                </h1>
                <div className="p-1 border bg-white">
                  <div className="flex-1 p-4 mb-4">
                    <select
                      className="w-full p-1 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-sm"
                      value={selectedOption}
                      onChange={handleOptionChange}
                    >
                      <option value="">Select....</option>
                      <option value="test">Test payment provider</option>
                      <option value="manual">Manual payment</option>
                      <option value="create">Create draft order</option>
                    </select>
                  </div>
                  {selectedOption === "test" && (
                    <>
                      <div className="">
                        <div className="p-4 mb-1">
                          <label htmlFor="cardholder" className="mb-1">
                            Cardholder's Name:
                          </label>
                          <input
                            type="text"
                            className="w-full p-1 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-sm"
                          />
                        </div>
                        <div className="p-4 mb-1">
                          <label htmlFor="cardholder" className="mb-1">
                            Card type:
                          </label>
                          <select className="w-full p-1 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-sm">
                            <option>American Express</option>
                            <option>Mastercard</option>
                            <option>Visa</option>
                          </select>
                        </div>
                        <div className="p-4 mb-1">
                          <label htmlFor="cardholder" className="mb-1">
                            Credit Card No:
                          </label>
                          <input
                            type="text"
                            className="w-full p-1 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-sm"
                          />
                        </div>
                        <div className="p-4">
                          <label htmlFor="cardholder" className="mb-1">
                            Expiration Date:
                          </label>
                          <select className="w-full mb-2 p-1 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-sm">
                            <option>Jan</option>
                            <option>Feb</option>
                            <option>Mar</option>
                            <option>Apr</option>
                            <option>May</option>
                            <option>Jun</option>
                            <option>Jul</option>
                            <option>Aug</option>
                            <option>Sep</option>
                            <option>Oct</option>
                            <option>Nov</option>
                            <option>Dec</option>
                          </select>
                          <select className="w-full p-1 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-sm">
                            <option>2024</option>
                            <option>2025</option>
                            <option>2026</option>
                            <option>2027</option>
                            <option>2028</option>
                            <option>2029</option>
                            <option>2030</option>
                            <option>2031</option>
                            <option>2032</option>
                            <option>2033</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  {selectedOption === "manual" && (
                    <div>
                      <div className="p-4 mb-1">
                        <label htmlFor="cardholder" className="mb-1">
                          Description:
                        </label>
                        <input
                          type="text"
                          className="w-full p-1 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-sm"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full ">
                <h1 className="text-2xl font-[500] text-gray-700 mb-2">
                  Summary
                </h1>
                <div className="p-4 border bg-white">
                  <div className="flex justify-between border-b mb-2 p-2">
                    <h1 className="text-md font-[500] text-gray-800">
                      Subtotal
                    </h1>
                    <p>$1000.00</p>
                  </div>
                  <div className="flex justify-between border-b mb-2 p-2">
                    <h1 className="text-md font-[500] text-gray-800">
                      Shipping
                    </h1>
                    <p>$10.00</p>
                  </div>
                  <div className="flex justify-between mb-2 p-2">
                    <h1 className="text-md font-[500] text-gray-800">
                      Grand total
                    </h1>
                    <p className="text-md font-[500] text-gray-800">$1010.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end fixed bottom-0 right-10 z-50">
          <button
            type="button"
            className="text-blue-500 hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 mb-2 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            Cancel
          </button>
          <button
            type="button"
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 cursor-not-allowed font-medium rounded-sm text-sm px-5 py-1.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            disabled
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
