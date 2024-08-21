/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function AllCategory({
  token,
  setSelectedItem,
  setUpdateCategoryId,
  updateSubCategoryId,
  setUpdateSubCategoryId,
  updateCategoryId,
  updateProductId,
  setUpdateProductId,
}) {
  const [allCategory, setAllCategory] = useState([]);

  const [subCategory, setSubCategory] = useState(null);

  const fetchAllCategory = async () => {
    try {
      const response = await fetch(
        // `https://ecomm-backend-aopz.onrender.com/api/v1/showAllCategory`,
        `http://localhost:4000/api/v1/showAllCategory`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const formattedResponse = await response.json();

      if (formattedResponse.success) {
        setAllCategory(formattedResponse.data);
        setSubCategory(formattedResponse.data[0]?.subCategory);
      }
    } catch (error) {
      console.log(`error in fetch api `, error);
    }
  };

  useEffect(() => {
    fetchAllCategory();
    if (updateCategoryId !== null) {
      sessionStorage.removeItem("ecommAdmin_CategoryId");
      setUpdateCategoryId(null);
    }
    if (updateSubCategoryId !== null) {
      sessionStorage.removeItem("ecommAdmin_subCategoryId");
      setUpdateSubCategoryId(null);
    }

    if (updateProductId !== null) {
      sessionStorage.removeItem("ecommAdmin_productId");
      setUpdateProductId(null);
    }
  }, []);

  const deleteCategory = async (categoryId) => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await fetch(
        // `https://ecomm-backend-aopz.onrender.com/api/v1//deleteCategory/${categoryId}`,
        `http://localhost:4000/api/v1/deleteCategory/${categoryId}`,
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
        toast.success("successfully delete the category");
        fetchAllCategory();
      } else {
        toast.error(formattedResponse?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
    toast.dismiss(toastId);
  };

  const deleteSubCategory = async (subCatId) => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await fetch(
        // `https://ecomm-backend-aopz.onrender.com/api/v1//deleteSubCategory/${subCatId}`,
        `http://localhost:4000/api/v1/deleteSubCategory/${subCatId}`,
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
        toast.success("Successfuly deleted the subCategory");
        fetchAllCategory();
      } else {
        toast.error(formattedResponse?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong please try again ");
    }

    toast.dismiss(toastId);
  };

  return (
    <>
      <div className="w-full mx-auto bg-gray-100 overflow-hidden p-4 md:p-8">
        <h2 className="text-center text-2xl font-[400] text-gray-700 pb-4">
          All Category
        </h2>

        {allCategory?.length > 0 && (
          <div class="overflow-x-auto rounded-sm shadow-sm">
            <table class="w-full bg-[#ffffff]">
              <thead class="bg-gray-200 border-b-2 border-gray-300">
                <tr>
                  <th
                    scope="col"
                    class="p-3 text-left text-sm font-[700] text-gray-800"
                  >
                    Category Name
                  </th>

                  <th
                    scope="col"
                    class="p-3 text-left text-sm font-[700] text-gray-800"
                  >
                    Category Image
                  </th>

                  <th
                    scope="col"
                    class="p-3 text-left text-sm font-[700] text-gray-800"
                  >
                    Update
                  </th>
                  <th
                    scope="col"
                    class="p-3 text-left text-sm font-[700] text-gray-800"
                  >
                    Delete
                  </th>
                </tr>
              </thead>

              <tbody>
                {allCategory.map((category, index) => (
                  <tr
                    key={index}
                    onClick={() => setSubCategory(category?.subCategory)}
                    class="cursor-pointer border-b border-gray-300 hover:bg-gray-200 transition-all duration-75 bg-white"
                  >
                    <th
                      scope="row"
                      class="p-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-left"
                    >
                      {category?.title}
                    </th>

                    <td class="p-4">
                      <img
                        src={category?.images}
                        className="max-w-[100px] max-h-[50px]"
                        alt="category-img"
                      />
                    </td>
                    <td class="p-4">
                      <button
                        type="button"
                        onClick={() => {
                          sessionStorage.setItem(
                            "ecommAdmin_CategoryId",
                            category?._id
                          );
                          setSelectedItem("createCategory");
                        }}
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      >
                        Update
                      </button>
                    </td>
                    <td class="p-4">
                      <button
                        onClick={() => deleteCategory(category?._id)}
                        type="button"
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* sub category start  */}
        <div className="mt-10">
          <h2 className="text-center text-2xl font-[400] text-gray-700 pb-4">
            Sub Category{" "}
          </h2>

          {subCategory?.length > 0 && (
            <div className="overflow-x-auto rounded-sm shadow-sm">
              <table class="w-full bg-[#ffffff]">
                <thead class="bg-gray-200 border-b-2 border-gray-300">
                  <tr>
                    <th
                      scope="col"
                      class="p-3 text-left text-sm font-[700] text-gray-800"
                    >
                      Sub Category Name
                    </th>

                    <th
                      scope="col"
                      class="p-3 text-left text-sm font-[700] text-gray-800"
                    >
                      Sub Category Image
                    </th>

                    <th
                      scope="col"
                      class="p-3 text-left text-sm font-[700] text-gray-800"
                    >
                      Update
                    </th>
                    <th
                      scope="col"
                      class="p-3 text-left text-sm font-[700] text-gray-800"
                    >
                      Delete
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {subCategory.map((subCat, index) => (
                    <tr
                      key={index}
                      class="border-b border-gray-300 hover:bg-gray-200 transition-all duration-75 bg-white"
                    >
                      <th
                        scope="row"
                        class="p-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-left"
                      >
                        {subCat?.title}
                      </th>

                      <td class="p-4">
                        <img
                          src={subCat?.images}
                          className="max-w-[100px] max-h-[50px]"
                          alt=""
                        />
                      </td>

                      <td class="p-4">
                        <button
                          type="button"
                          onClick={() => {
                            sessionStorage.setItem(
                              "ecommAdmin_subCategoryId",
                              subCat?._id
                            );
                            setSelectedItem("createSubCategory");
                          }}
                          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                          Update
                        </button>
                      </td>

                      <td class="p-4">
                        <button
                          type="button"
                          onClick={() => deleteSubCategory(subCat._id)}
                          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AllCategory;
