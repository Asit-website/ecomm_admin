/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

function CreateCategory({
  setSelectedItem,
  token,
  updateCategoryId,
  setUpdateCategoryId,
  updateProductId,
  setUpdateSubCategoryId,
  setUpdateProductId,
  updateSubCategoryId,
}) {
  const [formData, setFormData] = useState({
    title: "",
    thumbnail: "",
  });

  useEffect(() => {
    if (sessionStorage.getItem("ecommAdmin_CategoryId")) {
      setUpdateCategoryId(sessionStorage.getItem("ecommAdmin_CategoryId"));
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

  // Handle Form Submission
  const submitHandler = async (e) => {
    const toastId = toast.loading("Loading...");

    try {
      const formToSendData = new FormData();
      formToSendData.append("title", formData.title);
      formToSendData.append("thumbnail", formData.thumbnail);

      const response = await axios.post(
        "https://ecomm-backend-aopz.onrender.com/api/v1/createCategory",
        formToSendData,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);

      if (response.data.success) {
        toast.success("Successfully created the category");
        setSelectedItem("category");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(`Error in Axios API call `, error);
      toast.error(error.message);
    }

    toast.dismiss(toastId);
  };

  const fetchCategoryDetailById = async () => {
    try {
      const response = await fetch(
        `https://ecomm-backend-aopz.onrender.com/api/v1/categoryPageDetails/${updateCategoryId}`,
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
          title: formattedResponse?.categoryDetails?.title,
        }));
      }
    } catch (error) {
      console.log(`error in fetch api `, error);
    }
  };

  const updateHandler = async (e) => {
    const toastId = toast.loading("Loading...");
    try {
      const formToSendData = new FormData();
      formToSendData.append("thumbnail", formData.thumbnail);
      formToSendData.append("title", formData.title);

      const response = await fetch(
        `https://ecomm-backend-aopz.onrender.com/api/v1/updateCategory/${updateCategoryId}`,
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
        toast.success("successfuly updated the category");
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
    if (updateCategoryId) {
      fetchCategoryDetailById();
    }
  }, [updateCategoryId]);

  return (
    <div className="bg-[#f8f9fa]">
      <div className="w- full mx-auto p-4 md:p-8 h-screen">
        <div className="flex flex-col justify-center items-center space-y-2">
          <h2 className="text-2xl font-[400] text-gray-700 text-center pt-2">
            Category Information
          </h2>
          <p className="text-md font-[400] text-gray-700 pb-2">
            Information to help define a category.
          </p>
        </div>

        <div className="mt-2 p-4 md:p-8 bg-white shadow-md">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              updateCategoryId !== null ? updateHandler() : submitHandler();
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
                placeholder="Enter Category Title"
                required
              />
            </div>

            {/* thumbnail */}

            <div className="flex items-center justify-center w-full mb-4">
              <label
                for="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 "
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
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
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
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
                {updateCategoryId !== null ? "Update" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateCategory;
