/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

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
      formToSendData.append("thumbnail", formData.thumbnail);
      formToSendData.append("title", formData.title);

      const response = await fetch(
        "https://ecomm-backend-aopz.onrender.com/api/v1/createCategory",
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
        toast.success("successfuly created the category");
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
    <div className="w-full max-w-3xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-3xl text-center text-white font-bold mb-8">
        Category
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateCategoryId !== null ? updateHandler() : submitHandler();
        }}
        className="space-y-6"
      >
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
          >
            Title{" "}
          </label>
          <input
            type="text"
            value={formData.title}
            name="title"
            onChange={changeHandler}
            id="title"
            className="w-full mt-2 p-3 bg-gray-900 border border-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter Title"
            required
          />
        </div>

        {/* thumbnail */}
        <div>
          <label htmlFor="" className="block text-sm font-medium text-gray-300">
            Choose Image:
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full mt-2 p-3 bg-gray-900 border border-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
          >
            {" "}
            {updateCategoryId !== null ? "Update" : "Submit"}{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateCategory;
