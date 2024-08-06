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
    <div className="w-full max-w-3xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-3xl text-center text-white font-bold mb-8">
        Sub Category
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateSubCategoryId !== null ? updateHandler() : submitHandler();
        }}
        class="space-y-6"
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
            placeholder="Enter title"
            required
          />
        </div>

        <div>
          <label for="title" class="block text-sm font-medium text-gray-300">
            Select Category{" "}
          </label>
          <select
            required
            name="category"
            onChange={changeHandler}
            className="w-full mt-2 p-3 bg-gray-900 border border-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            id=""
          >
            <option value="selectCategory" disabled selected>
              Select Category
            </option>
            {allCategory?.map((category) => (
              <option value={`${category?._id}`} key={category?._id}>
                {category?.title}
              </option>
            ))}
          </select>
        </div>

        {/* thumbnail */}
        <div>
          <label
            htmlFor="thumbnail"
            className="block text-sm font-medium text-gray-300"
          >
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
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
          >
            {" "}
            {updateSubCategoryId !== null ? "Update" : "Submit"}{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateSubCategory;
