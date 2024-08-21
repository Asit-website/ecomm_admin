import { useState } from "react";

const Fulfillment = () => {
  const [isShowBilling, setIsShowBilling] = useState(false);
  const [isShowCustom, setIsShowCustom] = useState(false);

  const handleBillingChange = (e) => {
    if (e.target.id === "checked-checkbox") {
      setIsShowBilling(true);
    } else if (e.target.id === "default-checkbox") {
      setIsShowBilling(false);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-[500] text-gray-700 mb-2">Fulfillment</h1>
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
                  <td className="p-1 font-bold text-end mr-2">ZIP/Postcode</td>
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

        <h2 className="text-md font-[500] text-gray-700">Shipping method</h2>
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
    </div>
  );
};

export default Fulfillment;
