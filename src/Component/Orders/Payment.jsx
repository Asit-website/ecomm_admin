import { useState } from "react";

const Payment = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="p-8">
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
                  <td className="p-1 font-bold text-end mr-2">ZIP/Postcode</td>
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
                  <td className="p-1 font-bold text-end mr-2">ZIP/Postcode</td>
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
                      Products shipped to Dhoop SIngh Nagar, Panipat, 102103,
                      Haiti
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
            <h1 className="text-2xl font-[500] text-gray-700 mb-2">Payment</h1>
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
            <h1 className="text-2xl font-[500] text-gray-700 mb-2">Summary</h1>
            <div className="p-4 border bg-white">
              <div className="flex justify-between border-b mb-2 p-2">
                <h1 className="text-md font-[500] text-gray-800">Subtotal</h1>
                <p>$1000.00</p>
              </div>
              <div className="flex justify-between border-b mb-2 p-2">
                <h1 className="text-md font-[500] text-gray-800">Shipping</h1>
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
  );
};

export default Payment;
