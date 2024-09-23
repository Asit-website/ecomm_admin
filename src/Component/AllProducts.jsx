/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function AllProducts({
  token,
  setUpdateCategoryId,
  updateCategoryId,
  setSelectedItem,
  updateProductId,
  updateSubCategoryId,
  setUpdateProductId,
  setUpdateSubCategoryId,
}) {
  const [formData, setFormData] = useState({
    category: "",
    subCategory: "",
  });

  const [allCat, setAllCat] = useState(null);
  const [allSubCat, setAllSubCat] = useState(null);
  const [allProduct, setAllProduct] = useState([]);

  const handleCategoryChange = (event) => {
    // Update the category field in the formData state
    setFormData({
      ...formData,
      category: event.target.value,
    });
  };

  const handleSubCategoryChange = (event) => {
    // Update the category field in the formData state
    setFormData({
      ...formData,
      subCategory: event.target.value,
    });
  };

  const fetchAllCategory = async (e) => {
    try {
      const response = await fetch(
        "https://ecomm-backend-aopz.onrender.com/api/v1/showAllCategory",
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
        setAllCat(formattedResponse?.data);
      } else {
        toast.error(formattedResponse?.message);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const categorySetHandler = () => {
    if (formData.category === "") {
      formData.subCategory = "";
    } else {
      const catId = allCat?.find((cat) => cat?._id === formData?.category);
      formData.subCategory = catId?.subCategory[0]?._id;
      setAllSubCat(catId?.subCategory);
    }
  };

  useEffect(() => {
    categorySetHandler();
  }, [formData.category]);

  const productSetHandler = () => {
    if (formData.category !== "") {
      const catId = allCat?.find((cat) => cat?._id === formData?.category);
      const subCatId = catId?.subCategory?.find(
        (subCat) => subCat?._id === formData?.subCategory
      );
      setAllProduct(subCatId?.products);
    }
  };

  useEffect(() => {
    productSetHandler();
  }, [formData.subCategory]);

  //  for delete product
  const deleteProductHandler = async (id) => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await fetch(
        `https://ecomm-backend-aopz.onrender.com/api/v1/deleteProduct/${id}`,
        // `http://localhost:4000/api/v1/deleteProduct/${id}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const formattedResponse = await response.json();

      if (formattedResponse.success) {
        toast.success("successfuly delete the product");
        // fetchAllCategory();
        // categorySetHandler();
        // productSetHandler();
      } else {
        toast.error(formattedResponse?.message);
      }
    } catch (error) {
      console.log(`error in fetch api `, error);
    }
    toast.dismiss(toastId);
  };

  useEffect(() => {
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
    <div className="bg-[#f8f9fa]">
      <div className="w-full mx-auto p-4 md:p-8">
        <div className="flex flex-col justify-center items-center space-y-2">
          <h2 className="text-2xl font-[400] text-gray-700 text-center pt-2">
            All Products
          </h2>
        </div>

        {/* category */}
        <div className="mt-2 p-8 bg-white shadow-md">
          <div className="w-full md:flex md:flex-row justify-between">
            <div className="md:flex-1 md:mr-2 mb-4">
              <label
                htmlFor="category"
                className="block text-md text-gray-700 mb-1"
              >
                Choose a category:
              </label>

              <select
                name="category"
                onChange={handleCategoryChange}
                value={formData.category}
                id="category"
                className="w-full p-2 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-md"
              >
                <option value="">Select Category</option>
                {allCat?.length > 0 &&
                  allCat?.map((cat) => (
                    <option value={cat?._id} key={cat?._id}>
                      {cat?.title}
                    </option>
                  ))}
              </select>
            </div>

            {/* sub category */}
            <div className="md:flex-1 md:ml-2 mb-4">
              <label
                htmlFor="category"
                className="block text-md text-gray-700 mb-1"
              >
                Choose a Sub Category:
              </label>

              <select
                name="subCategory"
                value={formData.subCategory}
                onChange={handleSubCategoryChange}
                id="category"
                className="w-full p-2 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-md"
              >
                <option value="" selected disabled>
                  Select Sub Category
                </option>
                {allSubCat?.length > 0 &&
                  allSubCat.map((subcat) => (
                    <option value={subcat?._id} key={subcat?._id}>
                      {subcat?.title}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>

        {allProduct?.length > 0 ? (
          <div className="w-full mx-auto mt-6">
            <div class="relative overflow-x-auto shadow-md sm:rounded-sm">
              <table class="w-full text-sm text-left text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Product Description
                    </th>

                    <th scope="col" class="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Thumbnail
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Update
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Delete
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {allProduct.map((product, index) => (
                    <tr
                      key={index}
                      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {product?.title}
                      </th>
                      <td class="px-6 py-4">{product?.description}</td>

                      <td class="px-6 py-4">{product?.price}</td>
                      <td class="px-6 py-4">
                        <img
                          src={product?.thumbnail}
                          className="max-w-[100px] max-h-[50px]"
                          alt=""
                        />
                      </td>
                      <td class="px-6 py-4">
                        <button
                          onClick={() => {
                            sessionStorage.setItem(
                              "ecommAdmin_productId",
                              product?._id
                            );
                            setSelectedItem("createProduct");
                          }}
                          type="button"
                          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                          Update
                        </button>{" "}
                      </td>
                      <td class="px-6 py-4">
                        <button
                          onClick={() => deleteProductHandler(product?._id)}
                          type="button"
                          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-center mt-10">
            <span className="text-lg font-semibold">No product found.</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllProducts;
