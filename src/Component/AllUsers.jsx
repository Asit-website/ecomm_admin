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
        `https://ecomm-backend-aopz.onrender.com/api/v1/getAllUsers`,
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
    <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <h2 className="text-center text-2xl font-semibold text-gray-800 py-4 bg-gray-100">
        User Information
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full bg-[#ffffff]">
          <thead className="bg-gray-200 border-b-2 border-gray-300">
            <tr>
              <th className="p-4 text-left text-sm font-semibold text-gray-600">
                #
              </th>
              <th className="p-4 text-left text-sm font-semibold text-gray-600">
                Name
              </th>
              <th className="p-4 text-left text-sm font-semibold text-gray-600">
                Contact Number
              </th>
              <th className="p-4 text-left text-sm font-semibold text-gray-600">
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
                <td className="p-4 text-gray-700">{index + 1}</td>
                <td className="p-4 text-gray-700">
                  {user?.firstName} {user?.lastName}
                </td>
                <td className="p-4 text-gray-700">{user?.phoneNumber}</td>
                <td className="p-4 text-gray-700">{user?.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllUsers;
