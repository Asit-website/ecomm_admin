/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

function AllUsers({
  token,
  setUpdateCategoryId,
  updateCategoryId,
  updateProductId,
  setUpdateProductId,
  updateSubCategoryId,
  setUpdateSubCategoryId,
}) {
  const [users, setUsers] = useState([]);

  const fetchAllUsers = async () => {
    try {
      const response = await fetch(
        // `https://ecomm-backend-aopz.onrender.com/api/v1/getAllUsers`,
        `http://localhost:4000/api/v1/getAllUsers`,
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
        setUsers(formattedResponse.data);
      }
    } catch (error) {
      console.log(`error in fetch api `, error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
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
    <div className="w-full mx-auto bg-gray-100 overflow-hidden p-4 md:p-8">
      <h2 className="text-center text-2xl font-[400] text-gray-700 pb-4">
        User Information
      </h2>

      <div className="overflow-x-auto rounded-sm shadow-sm">
        <table className="w-full bg-[#ffffff]">
          <thead className="bg-gray-200 border-b-2 border-gray-300">
            <tr>
              <th className="p-3 text-left text-sm font-[600] text-gray-800">
                #
              </th>
              <th className="p-3 text-left text-sm font-[600] text-gray-800">
                Name
              </th>
              <th className="p-3 text-left text-sm font-[600] text-gray-800">
                Contact Number
              </th>
              <th className="p-3 text-left text-sm font-[600] text-gray-800">
                Email Address
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr
                key={user?.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="p-3 text-sm font-[400] text-gray-700">
                  {index + 1}
                </td>
                <td className="p-3 text-sm font-[400] text-gray-700">
                  {user?.firstName} {user?.lastName}
                </td>
                <td className="p-3 text-sm font-[400] text-gray-700">
                  {user?.phoneNumber}
                </td>
                <td className="p-3 text-sm font-[400] text-gray-700">
                  {user?.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllUsers;
