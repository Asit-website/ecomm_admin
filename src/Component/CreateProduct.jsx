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
    <div className="w-full max-w-3xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-3xl text-center text-white font-bold mb-8">
        Add New Product
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          updateProductId !== null ? updateProductHandler() : submitHandler();
        }}
        className="space-y-6"
      >
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-300"
          >
            Product title
          </label>
          <input
            onChange={changeHandler}
            type="text"
            name="title"
            value={formData.title}
            id="title"
            className="w-full mt-2 p-3 bg-gray-900 border border-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter product title"
            required
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-300"
          >
            Product Description
          </label>
          <input
            onChange={changeHandler}
            type="text"
            id="description"
            value={formData.description}
            name="description"
            className="w-full mt-2 p-3 bg-gray-900 border border-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter product description"
            required
          />
        </div>

        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-300"
          >
            Product price
          </label>
          <input
            onChange={changeHandler}
            type="number"
            id="price"
            name="price"
            value={formData.price}
            className="w-full mt-2 p-3 bg-gray-900 border border-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter product price"
            required
          />
        </div>

        {/* category */}
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-300"
          >
            Choose a category:
          </label>

          <select
            onChange={handleSelectChange}
            id="category"
            className="w-full mt-2 p-3 bg-gray-900 border border-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
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
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-300"
          >
            Choose a Sub Category:
          </label>

          <select
            onChange={handleSubSelectChange}
            value={formData.subCategory}
            name="subCategory"
            id="category"
            className="w-full mt-2 p-3 bg-gray-900 border border-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
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

        {/* thumbnail */}
        <div>
          <label
            htmlFor="thumbnail"
            className="block text-sm font-medium text-gray-300"
          >
            Choose Thumbnail:
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
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
