import React, { useState } from "react";

const AddOrders = () => {
  const [isExistingCustomer, setIsExistingCustomer] = useState(false);

  const handleCheckboxChange = (e) => {
    if (e.target.id === "checked-checkbox") {
      setIsExistingCustomer(true);
    } else if (e.target.id === "default-checkbox") {
      setIsExistingCustomer(false);
    }
  };

  return (
    <div className="bg-[#f8f9fa] overflow-x-auto">
      <div className="w-[1000px] md:w-full mx-auto p-4 md:p-8">
        <div className="flex justify-start items-start">
          <h2 className="text-3xl font-[300] text-gray-700 text-start pl-3">
            Add an order
          </h2>
        </div>

        <div className="mt-2 p-8 border">
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
                        className="w-96 p-[6px] text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-sm"
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
                        className="w-96 p-[6px] text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-sm"
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
                        className="w-96 p-[6px] text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-sm"
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
                    className="w-96 p-2 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-md"
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
                    className="w-96 p-2 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-md"
                    required
                  />
                </div>
                <div className="md:flex md:items-center mb-4">
                  <label
                    htmlFor="text"
                    className="block text-md font-[400] text-gray-700 mb-1 md:mr-2"
                  >
                    Company Name :
                  </label>
                  <input
                    type="text"
                    className="w-96 p-2 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-md"
                    required
                  />
                </div>
                <div className="md:flex md:items-center mb-4">
                  <label
                    htmlFor="text"
                    className="block text-md font-[400] text-gray-700 mb-1 md:mr-2"
                  >
                    Phone Number :
                  </label>
                  <input
                    type="tel"
                    className="w-96 p-2 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-md"
                    required
                  />
                </div>
                <div className="md:flex md:items-center mb-4">
                  <label
                    htmlFor="text"
                    className="block text-md font-[400] text-gray-700 mb-1 md:mr-2"
                  >
                    Address Line 1 :
                  </label>
                  <input
                    type="text"
                    className="w-96 p-2 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-md"
                    required
                  />
                </div>
                <div className="md:flex md:items-center mb-4">
                  <label
                    htmlFor="text"
                    className="block text-md font-[400] text-gray-700 mb-1 md:mr-2"
                  >
                    Address Line 2 :
                  </label>
                  <input
                    type="text"
                    className="w-96 p-2 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-md"
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
                    className="w-96 p-2 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-md"
                    required
                  />
                </div>
                <div className="md:flex md:items-center mb-4">
                  <label
                    for="countries"
                    class="block text-md font-[400] text-gray-700 mb-1 md:mr-2"
                  >
                    Select an option :
                  </label>
                  <select
                    id="countries"
                    className="w-96 p-2 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-md"
                    required
                  >
                    <option selected>Choose a country</option>
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
                    className="w-96 p-2 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-md"
                    required
                  />
                </div>
                <div className="md:flex md:items-center mb-4">
                  <label
                    htmlFor="text"
                    className="block text-md font-[400] text-gray-700 mb-1 md:mr-2"
                  >
                    Zip/Postcode :
                  </label>
                  <input
                    type="text"
                    className="w-96 p-2 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-md"
                    required
                  />
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="offers-checkbox"
                      className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
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
      </div>
    </div>
  );
};

export default AddOrders;
