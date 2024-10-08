/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function ProductDashboard({
  updateCategoryId,
  setUpdateCategoryId,
  setUpdateSubCategoryId,
  updateSubCategoryId,
  updateProductId,
  setUpdateProductId,
}) {
  const [totalUsers, setTotalUsers] = useState("");

  const [totalProduct, setTotalProduct] = useState("");

  const [totalCategory, setTotalCategory] = useState("");

  const token = localStorage.getItem("ecomm_token");

  const fetchAllUsers = async () => {
    try {
      const response = await fetch(
        `https://ecomm-backend-aopz.onrender.com/api/v1/getAllUsers`,
        // `http://localhost:4000/api/v1/getAllUsers`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const formattedResponse = await response.json();

      if (formattedResponse.success) {
        setTotalUsers(formattedResponse.data.length);
      } else {
        toast.error(formattedResponse?.message);
      }
    } catch (error) {
      console.log(`error in fetch api `, error);
    }
  };
  const fetchAllProduct = async () => {
    try {
      const response = await fetch(
        `https://ecomm-backend-aopz.onrender.com/api/v1/totalProduct`,
        // `http://localhost:4000/api/v1/totalProduct`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const formattedResponse = await response.json();

      if (formattedResponse.success) {
        setTotalProduct(formattedResponse?.AllProduct?.length);
      } else {
        toast.error(formattedResponse?.message);
      }
    } catch (error) {
      console.log(`error in fetch api `, error);
    }
  };
  const fetchAllCategory = async () => {
    try {
      const response = await fetch(
        `https://ecomm-backend-aopz.onrender.com/api/v1/showAllCategory`,
        // `http://localhost:4000/api/v1/showAllCategory`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const formattedResponse = await response.json();

      if (formattedResponse.success) {
        setTotalCategory(formattedResponse?.data.length);
      } else {
        toast.error(formattedResponse?.message);
      }
    } catch (error) {
      console.log(`error in fetch api `, error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
    fetchAllProduct();
    fetchAllCategory();

    if (updateCategoryId !== null) {
      sessionStorage.removeItem("ecommAdmin_CategoryId");
      setUpdateCategoryId(null);
    }
    if (updateProductId !== null) {
      sessionStorage.removeItem("ecommAdmin_productId");
      setUpdateProductId(null);
    }
    if (updateSubCategoryId !== null) {
      sessionStorage.removeItem("ecommAdmin_subCategoryId");
      setUpdateSubCategoryId(null);
    }
  }, []);
  return (
    <div className="w-full flex flex-col gap-10">
      <h2 className="mx-auto text-gray-800 text-3xl font-semibold">
        Dashboard
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            Total Users
          </h3>
          <p className="text-gray-700 dark:text-gray-400">{totalUsers}</p>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            Total Categories
          </h3>
          <p className="text-gray-700 dark:text-gray-400">{totalCategory}</p>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            Total Products
          </h3>
          <p className="text-gray-700 dark:text-gray-400">{totalProduct}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDashboard;
