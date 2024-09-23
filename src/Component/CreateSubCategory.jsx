/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function CreateSubCategory({
  setSelectedItem,
  updateSubCategoryId,
  token,
  setUpdateCategoryId,
  setUpdateProductId,
  updateProductId,
  updateCategoryId,
  setUpdateSubCategoryId,
}) {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    thumbnail: "",
  });

  const [allCategory, setAllCategory] = useState([]);

  // Function to handle file selection
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
        setAllCategory(formattedResponse?.data);
      } else {
        toast.error(formattedResponse?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong , please try again");
    }
  };

  const submitHandler = async () => {
    const toastId = toast.loading("Loading...");

    try {
      const formToSendData = new FormData();
      formToSendData.append("thumbnail", formData.thumbnail);
      formToSendData.append("title", formData.title);
      formToSendData.append("categoryId", formData.category);

      const response = await fetch(
        "https://ecomm-backend-aopz.onrender.com/api/v1/createSubCategory",
        // "http://localhost:4000/api/v1/createSubCategory",
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
        toast.success("Successfuly created");
        setSelectedItem("category");
      } else {
        toast.error(formattedResponse?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong , please try again");
    }

    toast.dismiss(toastId);
  };

  const updateHandler = async (e) => {
    const toastId = toast.loading("Loading...");
    try {
      const formToSendData = new FormData();
      formToSendData.append("thumbnail", formData.thumbnail);
      formToSendData.append("title", formData.title);
      formToSendData.append("category", formData.category);

      const response = await fetch(
        `https://ecomm-backend-aopz.onrender.com/api/v1/updateSubCategory/${updateSubCategoryId}`,
        // `http://localhost:4000/api/v1/updateSubCategory/${updateSubCategoryId}`,
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
        toast.success("Sucessfuly updated");
        setSelectedItem("category");
      } else {
        toast.error(formattedResponse?.message);
      }
    } catch (error) {
      console.log(`error in fetch api `, error);
      toast.error(error);
    }

    toast.dismiss(toastId);
  };

  useEffect(() => {
    fetchAllCategory();

    if (sessionStorage.getItem("ecommAdmin_subCategoryId")) {
      setUpdateSubCategoryId(
        sessionStorage.getItem("ecommAdmin_subCategoryId")
      );
    }

    if (updateProductId !== null) {
      sessionStorage.removeItem("ecommAdmin_productId");
      setUpdateProductId(null);
    }

    if (updateCategoryId !== null) {
      sessionStorage.removeItem("ecommAdmin_CategoryId");
      setUpdateCategoryId(null);
    }
  }, []);

  const fetchSubCategoryDetailById = async () => {
    try {
      const response = await fetch(
        `https://ecomm-backend-aopz.onrender.com/api/v1/subCategoryPageDetails/${updateSubCategoryId}`,
        // `http://localhost:4000/api/v1/subCategoryPageDetails/${updateSubCategoryId}`,
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
          title: formattedResponse?.selectedSubCategory?.title,
          thumbnail: formattedResponse?.selectedSubCategory?.images,
        }));
      }
    } catch (error) {
      console.log(`error in fetch api `, error);
    }
  };

  useEffect(() => {
    if (updateSubCategoryId) {
      fetchSubCategoryDetailById();
    }
  }, [updateSubCategoryId]);

  return (
    <div className="bg-[#f8f9fa]">
      <div className="w-full mx-auto p-4 md:p-8 h-screen">
        <div className="flex flex-col justify-center items-center space-y-2">
          <h2 className="text-2xl font-[400] text-gray-700 text-center pt-2">
            SubCategory Information
          </h2>
          <p className="text-md font-[400] text-gray-700 pb-2">
            Information to help define a Subcategory.
          </p>
        </div>

        <div className="mt-2 p-4 md:p-8 bg-white shadow-md">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              updateSubCategoryId !== null ? updateHandler() : submitHandler();
            }}
          >
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-md font-[400] text-gray-700 mb-1"
              >
                Title
              </label>
              <input
                type="text"
                value={formData.title}
                name="title"
                onChange={changeHandler}
                id="title"
                className="w-full p-2 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-md"
                placeholder="Enter Sub Category title"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlfor="category"
                className="block text-md font-[400] text-gray-700 mb-1"
              >
                Choose a Category:
              </label>
              <select
                onChange={changeHandler}
                id="category"
                required
                name="category"
                className="w-full p-2 text-gray-800 border border-gray-200 hover:border-gray-500 outline-none focus:border-blue-600 rounded-md"
              >
                <option value="selectCategory">Select Category</option>
                {allCategory?.map((category) => (
                  <option value={`${category?._id}`} key={category?._id}>
                    {category?.title}
                  </option>
                ))}
              </select>
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

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-2 text-white font-[500] bg-blue-600 hover:bg-blue-700 rounded-md border focus:border-blue-800"
              >
                {" "}
                {updateSubCategoryId !== null ? "Update" : "Submit"}{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateSubCategory;
