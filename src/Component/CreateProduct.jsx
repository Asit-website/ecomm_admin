/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

function CreateProduct({
  setSelectedItem,
  token,
  setUpdateCategoryId,
  updateSubCategoryId,
  setUpdateSubCategoryId,
  updateCategoryId,
  updateProductId,
  setUpdateProductId,
}) {
  const [allCategory, setAllCategory] = useState([]);

  const [chooseSubCat, setChooseSubCat] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    thumbnail: "",
    description: "",
    price: "",
    category: "",
    subCategory: "",
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    setFormData({
      ...formData,
      thumbnail: file,
    });
  };
  const changeHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const fetchAllCategory = async () => {
    const response = await fetch(
      "https://ecomm-backend-aopz.onrender.com/api/v1/showAllCategory",
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    );

    const formattedResponse = await response.json();

    if (!formattedResponse.success) {
      toast.error(formattedResponse.message);
    } else {
      setAllCategory(formattedResponse?.data);
      setChooseSubCat(formattedResponse?.data[0]?.subCategory);
    }
  };

  const handleSelectChange = (event) => {
    // Update the category field in the formData state
    setFormData({
      ...formData,
      category: event.target.value,
    });
  };

  const handleSubSelectChange = (event) => {
    // Update the category field in the formData state
    setFormData({
      ...formData,
      subCategory: event.target.value,
    });
  };

  useEffect(() => {
    fetchAllCategory();

    if (sessionStorage.getItem("ecommAdmin_productId")) {
      setUpdateProductId(sessionStorage.getItem("ecommAdmin_productId"));
    }

    if (updateCategoryId !== null) {
      sessionStorage.removeItem("ecommAdmin_CategoryId");
      setUpdateCategoryId(null);
    }
    if (updateSubCategoryId !== null) {
      sessionStorage.removeItem("ecommAdmin_subCategoryId");
      setUpdateSubCategoryId(null);
    }
  }, []);

  const fetchProductDetailById = async () => {
    try {
      try {
        const response = await fetch(
          `https://ecomm-backend-aopz.onrender.com/api/v1/getProductById/${updateProductId}`,
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
          setFormData((prev) => ({
            ...prev,
            title: formattedResponse?.data?.title,
            thumbnail: formattedResponse?.data?.thumbnail,
            description: formattedResponse?.data?.description,
            price: formattedResponse?.data?.price,
            category: formattedResponse?.data?.category,
          }));
        }
      } catch (error) {
        console.log(`error in fetch api `, error);
      }
    } catch (error) {}
  };

  useEffect(() => {
    const foundObj = allCategory.find((obj) => obj._id === formData.category);
    setChooseSubCat(foundObj?.subCategory);
  }, [formData.category]);

  useEffect(() => {
    if (updateProductId) {
      fetchProductDetailById();
    }
  }, [updateProductId]);

  // Handle Form Submission
  const submitHandler = async () => {
    const loadingId = toast.loading("Loading...");

    try {
      const formToSendData = new FormData();
      formToSendData.append("thumbnail", formData.thumbnail);
      formToSendData.append("title", formData.title);
      formToSendData.append("price", formData.price);
      formToSendData.append("description", formData.description);
      formToSendData.append("subCategoryId", formData.subCategory);

      const response = await fetch(
        "https://ecomm-backend-aopz.onrender.com/api/v1/createProduct",
        {
          method: "POST",

          headers: {
            Authorization: `Bearer ${token}`,
          },
          // the body will send like this to backend
          body: formToSendData,
        }
      );

      const formattedResponse = await response.json();

      if (formattedResponse.success) {
        toast.success("successfuly created the product");
        setSelectedItem("products");
      } else {
        toast.error(formattedResponse?.message);
      }
    } catch (error) {
      console.log(`error in fetch api `, error);
      toast.error(error);
    }

    toast.dismiss(loadingId);
  };

  const updateProductHandler = async () => {
    const toastId = toast.loading("Loading...");
    try {
      const formToSendData = new FormData();
      formToSendData.append("thumbnail", formData.thumbnail);
      formToSendData.append("title", formData.title);
      formToSendData.append("price", formData.price);
      formToSendData.append("description", formData.description);
      formToSendData.append("subCategoryId", formData.subCategory);

      const response = await fetch(
        `https://ecomm-backend-aopz.onrender.com/api/v1/updateProduct/${updateProductId}`,
        {
          method: "PUT",

          headers: {
            Authorization: `Bearer ${token}`,
          },
          // the body will send like this to backend
          body: formToSendData,
        }
      );

      const formattedResponse = await response.json();

      if (formattedResponse.success) {
        toast.success("successfuly updated the product");
        setSelectedItem("products");
      } else {
        toast.error(formattedResponse?.message);
      }
    } catch (error) {
      toast.error(error);
    }

    toast.dismiss(toastId);
  };

  return (
    <div className="bg-[#f8f9fa]">
      <div className="w-full mx-auto p-4 md:p-8">
        <div className="flex flex-col justify-center items-center space-y-2">
          <h2 className="text-2xl font-[400] text-gray-700 text-center pt-2">
            Product Information
          </h2>
          <p className="text-md font-[400] text-gray-700 pb-2">
            Information to help define a product.
          </p>
        </div>

        <div className="mt-2 p-8 bg-white shadow-md">
          <h1 className="text-2xl font-[400] text-gray-700 mb-6">
            Basic Information
          </h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();

              updateProductId !== null
                ? updateProductHandler()
                : submitHandler();
            }}
          >
            <div className="w-full md:flex md:flex-row justify-between">
              <div className="md:flex-1 md:mr-2 mb-4">
                <label
                  htmlFor="title"
                  className="block text-md font-[400] text-gray-700 mb-1"
                >
                  Product Title
                </label>
                <input
                  onChange={changeHandler}
                  type="text"
                  name="title"
                  value={formData.title}
                  id="title"
                  className="w-full p-2 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-md"
                  placeholder="Sample Product Title"
                  required
                />
              </div>
              <div className="md:flex-1 md:ml-2 mb-4">
                <label
                  htmlFor="price"
                  className="block text-md font-[400] text-gray-700 mb-1"
                >
                  Product price
                </label>
                <input
                  onChange={changeHandler}
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  className="w-full p-2 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-md"
                  placeholder="Enter Product Price"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-md font-[400] text-gray-700 mb-1"
              >
                Product Description
              </label>
              <textarea
                onChange={changeHandler}
                type="text"
                id="description"
                value={formData.description}
                name="description"
                className="w-full p-2 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-md"
                placeholder="Enter Product Description"
                required
              />
            </div>

            {/* category */}
            <div className="w-full md:flex md:flex-row justify-between">
              <div className="md:flex-1 md:mr-2 mb-4">
                <label
                  htmlFor="category"
                  className="block text-md font-[400] text-gray-700 mb-1"
                >
                  Choose a Category:
                </label>

                <select
                  onChange={handleSelectChange}
                  id="category"
                  className="w-full p-2 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-md"
                >
                  <option value="" selected disabled>
                    Select Category
                  </option>

                  {allCategory?.length > 0 &&
                    allCategory.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.title}
                      </option>
                    ))}
                </select>
              </div>
              {/* sub category */}
              <div className="md:flex-1 md:ml-2 mb-4">
                <label
                  htmlFor="category"
                  className="block text-md font-[400] text-gray-700 mb-1"
                >
                  Choose a Sub Category:
                </label>

                <select
                  onChange={handleSubSelectChange}
                  value={formData.subCategory}
                  name="subCategory"
                  id="category"
                  className="w-full p-2 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-md"
                >
                  <option value="" selected disabled>
                    Select Sub Category
                  </option>
                  {chooseSubCat?.length > 0 &&
                    chooseSubCat.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.title}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            {/* thumbnail */}

            <div class="flex items-center justify-center w-full mb-4">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>

            {/* <div className="">
              <label
                htmlFor="thumbnail"
                className="block text-md font-[400] text-gray-700 mb-1"
              ></label>

              <input
                type="file"
                className="w-full p-2 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-md"
              />
            </div> */}

            {/* Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-2 text-white font-[500] bg-blue-600 hover:bg-blue-700 rounded-md border focus:border-blue-800"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
