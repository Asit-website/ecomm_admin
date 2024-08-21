import { useState } from "react";

const Items = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="p-8">
      <div className="container">
        <h1 className="text-2xl font-[500] text-gray-700 mb-2">Add products</h1>
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
              <td className="p-2 text-md font-[400] text-gray-700 border">1</td>
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
    </div>
  );
};

export default Items;
