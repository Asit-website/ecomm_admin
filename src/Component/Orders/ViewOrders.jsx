import { useState } from "react";
import { Link } from "react-router-dom";

const ViewOrders = () => {
  const [activeLink, setActiveLink] = useState("All Orders");

  const handleSetActiveLink = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <div className="bg-[#f8f9fa] overflow-x-auto">
      <div className="w-[1000px] md:w-full h-screen mx-auto p-8">
        <div className=" flex justify-start items-start">
          <h2 className="text-3xl font-[300] text-gray-700 text-start pl-3">
            View orders
          </h2>
        </div>

        <div className="mt-6 items-center justify-between w-full p-2">
          <ul className="flex mt-2 font-[400] flex-row space-x-8 border-b-2">
            <li
              className={
                activeLink === "All Orders" ? "border-b-2 border-blue-500" : ""
              }
            >
              <Link
                to="#"
                className={`block py-1 px-2 text-gray-500 hover:text-gray-800 ${
                  activeLink === "All Orders"
                    ? "border-b-2 border-blue-500"
                    : ""
                }`}
                onClick={() => handleSetActiveLink("All Orders")}
              >
                All Orders
              </Link>
            </li>
            <li
              className={
                activeLink === "Awaiting Payment"
                  ? "border-b-2 border-blue-500"
                  : ""
              }
            >
              <Link
                to="#"
                className={`block py-1 px-2 text-gray-500 hover:text-gray-800 ${
                  activeLink === "Awaiting Payment"
                    ? "border-b-2 border-blue-500"
                    : ""
                }`}
                onClick={() => handleSetActiveLink("Awaiting Payment")}
              >
                Awaiting Payment
              </Link>
            </li>
            <li
              className={
                activeLink === "Awaiting Fulfillment"
                  ? "border-b-2 border-blue-500"
                  : ""
              }
            >
              <Link
                to="#"
                className={`block py-1 px-2 text-gray-500 hover:text-gray-800 ${
                  activeLink === "Awaiting Fulfillment"
                    ? "border-b-2 border-blue-500"
                    : ""
                }`}
                onClick={() => handleSetActiveLink("Awaiting Fulfillment")}
              >
                Awaiting Fulfillment
              </Link>
            </li>
            <li
              className={
                activeLink === "Awaiting Shipment"
                  ? "border-b-2 border-blue-500"
                  : ""
              }
            >
              <Link
                to="#"
                className={`block py-1 px-2 text-gray-500 hover:text-gray-800 ${
                  activeLink === "Awaiting Shipment"
                    ? "border-b-2 border-blue-500"
                    : ""
                }`}
                onClick={() => handleSetActiveLink("Awaiting Shipment")}
              >
                Awaiting Shipment
              </Link>
            </li>
            <li
              className={
                activeLink === "Pre Orders" ? "border-b-2 border-blue-500" : ""
              }
            >
              <Link
                to="#"
                className={`block py-1 px-2 text-gray-500 hover:text-gray-800 ${
                  activeLink === "Pre Orders"
                    ? "border-b-2 border-blue-500"
                    : ""
                }`}
                onClick={() => handleSetActiveLink("Pre Orders")}
              >
                Pre Orders
              </Link>
            </li>
            <li
              className={
                activeLink === "Shipped" ? "border-b-2 border-blue-500" : ""
              }
            >
              <Link
                to="#"
                className={`block py-1 px-2 text-gray-500 hover:text-gray-800 ${
                  activeLink === "Shipped" ? "border-b-2 border-blue-500" : ""
                }`}
                onClick={() => handleSetActiveLink("Shipped")}
              >
                Shipped
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ViewOrders;
