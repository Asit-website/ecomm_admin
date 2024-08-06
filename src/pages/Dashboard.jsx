import { useEffect, useState } from "react";
import CreateCategory from "../Component/CreateCategory";
import AllProducts from "../Component/AllProducts";
import CreateProduct from "../Component/CreateProduct";
import AllUsers from "../Component/AllUsers";
import ProductDashboard from "../Component/ProductDashboard";
import AllCategory from "../Component/AllCategory";
import PaymentHistory from "../Component/PaymentHistory";
import CreateSubCategory from "../Component/CreateSubCategory";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaUsers, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [openProduct, setOpenProduct] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);

  const [selectedItem, setSelectedItem] = useState("dashboard");

  const [updateCategoryId, setUpdateCategoryId] = useState(null);

  const [updateSubCategoryId, setUpdateSubCategoryId] = useState(null);

  const [updateProductId, setUpdateProductId] = useState(null);

  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("ecomm_token"));
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("ecommAdmin_CategoryId")) {
      setUpdateCategoryId(sessionStorage.getItem("ecommAdmin_CategoryId"));
    }
    if (sessionStorage.getItem("ecommAdmin_productId")) {
      setUpdateProductId(sessionStorage.getItem("ecommAdmin_productId"));
    }
  }, [setSelectedItem]);

  const logoutHandler = () => {
    const toastId = toast.loading("Loading...");
    try {
      localStorage.removeItem("ecomm_token");

      toast.success("Succesfuly logout");

      navigate("/");
    } catch (error) {
      toast.error("internal server error");
    }

    toast.dismiss(toastId);
  };

  return (
    <div className="w-full min-h-[100vh]">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <header className="w-full h-16 flex items-center ps-6 pt-1 bg-[#273a8a]">
          <Link to="#" onClick={() => setSelectedItem("dashboard")}>
            <span className="text-md font-[600] text-[#ffffff]">DASHBOARD</span>
          </Link>
        </header>

        <div className="w-full h-auto bg-[#273a8a]">
          <div className="flex flex-col ps-6 mb-3">
            <h3 className="text-lg font-[400] text-[#ffffff]">Username</h3>
            <p className="text-sm font-[400] text-[#ffffff]">
              Trial Plan Store
            </p>
          </div>

          {/* All Users */}
          <div className="h-full pt-2 overflow-y-auto bg-[#273a8a]">
            <ul className="">
              <li onClick={() => setSelectedItem("users")}>
                <Link
                  to="#"
                  className="flex items-center ps-6 p-[8px] text-sm font-thin text-[#b7c6fe] hover:text-[#d7d6d9] bg-transparent hover:bg-[#3b51ab] group"
                >
                  <FaUsers className="flex-shrink-0 w-5 h-5 transition duration-75 " />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    All Users
                  </span>
                  <FaArrowUpRightFromSquare />
                </Link>
              </li>

              <li onClick={() => setSelectedItem("dashboard")}>
                <Link
                  to="#"
                  className={`flex items-center ps-5 p-[8px] text-md font-thin ${
                    selectedItem === "dashboard"
                      ? "text-white bg-[#15276f]"
                      : "text-[#b7c6fe] hover:text-[#d7d6d9] hover:bg-[#3b51ab]"
                  } group transition duration-75`}
                >
                  <IoMdHome className="flex-shrink-0 w-6 h-6 transition duration-75 " />
                  <span className="flex-1 ms-2 whitespace-nowrap">Home</span>
                </Link>
              </li>

              {/* Search Bar */}
              <li>
                <div className="flex items-center ps-5 p-[8px] text-md font-thin text-[#b7c6fe] hover:text-[#d7d6d9] hover:bg-[#3b51ab] group">
                  <IoSearchSharp className="flex-shrink-0 w-6 h-6 transition duration-75" />
                  <input
                    type="text"
                    placeholder="Search or navigate to..."
                    className="flex-1 ms-2 bg-transparent border-none text-sm focus:outline-none placeholder-[#b7c6fe] hover:placeholder-[#d7d6d9]"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-full py-4 overflow-y-auto bg-[#34313f]">
          <ul className="">
            {/* Payment */}
            <li
              onClick={() => setSelectedItem("paymentHistory")}
              className="text-sm font-[600]"
            >
              <Link
                to="#"
                className={`flex items-center pl-4 py-1 font-thin ${
                  selectedItem === "paymentHistory"
                    ? "text-white bg-[#2a2731]"
                    : "text-[#d7d6d9] hover:bg-[#585466]"
                } group transition duration-75`}
              >
                <span className="flex-1 p-2">Payment History</span>
                <MdKeyboardArrowRight class="flex-shrink-0 w-7 h-7 pr-2 transition-transform duration-200 transform group-hover:translate-x-1" />
              </Link>
            </li>

            {/* products  */}

            <li className="text-sm font-[600]">
              <Link
                onClick={() => setOpenProduct((prev) => !prev)}
                to="#"
                className="flex items-center pl-4 py-1 font-thin text-[#d7d6d9] hover:bg-[#585466] group"
              >
                <span className="flex-1 p-2">Products</span>
                <MdKeyboardArrowRight className="flex-shrink-0 w-7 h-7 pr-2 transition-transform duration-200 transform group-hover:translate-x-1" />
              </Link>
              {openProduct && (
                <ul className="font-thin">
                  <li onClick={() => setSelectedItem("products")}>
                    <Link
                      to="#"
                      className={`flex items-center pl-4 py-1 font-thin ${
                        selectedItem === "products"
                          ? "text-white bg-[#2a2731]"
                          : "text-[#d7d6d9] hover:bg-[#585466]"
                      } group transition duration-75`}
                    >
                      <MdArrowForward className="flex-shrink-0 ms-3 w-7 h-7 pr-2 transition-transform duration-200 transform group-hover:translate-x-1" />
                      <span className="flex-1 p-[6px]">View Products</span>
                    </Link>
                  </li>

                  <li onClick={() => setSelectedItem("createProduct")}>
                    <Link
                      to="#"
                      className={`flex items-center pl-4 py-1 font-thin ${
                        selectedItem === "createProduct"
                          ? "text-white bg-[#2a2731]"
                          : "text-[#d7d6d9] hover:bg-[#585466]"
                      } group transition duration-75`}
                    >
                      <MdArrowForward className="flex-shrink-0 ms-3 w-7 h-7 pr-2 transition-transform duration-200 transform group-hover:translate-x-1" />
                      <span className="flex-1 p-[6px]">Create Product</span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* category  */}
            <li className="text-sm font-[600]">
              <Link
                onClick={() => setOpenCategory((prev) => !prev)}
                to="#"
                className="flex items-center pl-4 py-1 font-thin text-[#d7d6d9] hover:bg-[#585466] group"
              >
                <span className="flex-1 p-2">Categories</span>
                <MdKeyboardArrowRight className="flex-shrink-0 w-7 h-7 pr-2 transition-transform duration-200 transform group-hover:translate-x-1" />
              </Link>
              {openCategory && (
                <ul className="font-thin">
                  <li onClick={() => setSelectedItem("createSubCategory")}>
                    <Link
                      to="#"
                      className={`flex items-center pl-4 py-1 font-thin ${
                        selectedItem === "createSubCategory"
                          ? "text-white bg-[#2a2731]"
                          : "text-[#d7d6d9] hover:bg-[#585466]"
                      } group transition duration-75`}
                    >
                      <MdArrowForward className="flex-shrink-0 ms-3 w-7 h-7 pr-2 transition-transform duration-200 transform group-hover:translate-x-1" />
                      <span className="flex-1 p-[6px]">
                        Create Sub Category
                      </span>
                    </Link>
                  </li>

                  <li onClick={() => setSelectedItem("createCategory")}>
                    <Link
                      to="#"
                      className={`flex items-center pl-4 py-1 font-thin ${
                        selectedItem === "createCategory"
                          ? "text-white bg-[#2a2731]"
                          : "text-[#d7d6d9] hover:bg-[#585466]"
                      } group transition duration-75`}
                    >
                      <MdArrowForward className="flex-shrink-0 ms-3 w-7 h-7 pr-2 transition-transform duration-200 transform group-hover:translate-x-1" />
                      <span className="flex-1 p-[6px]">Create Category</span>
                    </Link>
                  </li>

                  <li onClick={() => setSelectedItem("category")}>
                    <Link
                      to="#"
                      className={`flex items-center pl-4 py-1 font-thin ${
                        selectedItem === "category"
                          ? "text-white bg-[#2a2731]"
                          : "text-[#d7d6d9] hover:bg-[#585466]"
                      } group transition duration-75`}
                    >
                      <MdArrowForward className="flex-shrink-0 ms-3 w-7 h-7 pr-2 transition-transform duration-200 transform group-hover:translate-x-1" />
                      <span className="flex-1 p-[6px] whitespace-nowrap">
                        View Category
                      </span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li onClick={logoutHandler}>
              <Link
                to="#"
                className="flex items-center pl-4 py-1 font-thin text-[#d7d6d9] hover:bg-[#585466] group"
              >
                <span className="flex-1 pl-[9px] p-[6px] whitespace-nowrap">
                  Log out
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64  min-h-[100vh]">
        {selectedItem === "dashboard" && (
          <ProductDashboard
            updateProductId={updateProductId}
            setUpdateProductId={setUpdateProductId}
            updateCategoryId={updateCategoryId}
            setUpdateCategoryId={setUpdateCategoryId}
            setUpdateSubCategoryId={setUpdateSubCategoryId}
            updateSubCategoryId={updateSubCategoryId}
            token={token}
            setToken={setToken}
            setSelectedItem={setSelectedItem}
          />
        )}
        {selectedItem === "createProduct" && (
          <CreateProduct
            updateProductId={updateProductId}
            setUpdateProductId={setUpdateProductId}
            updateCategoryId={updateCategoryId}
            setUpdateCategoryId={setUpdateCategoryId}
            setUpdateSubCategoryId={setUpdateSubCategoryId}
            updateSubCategoryId={updateSubCategoryId}
            token={token}
            setSelectedItem={setSelectedItem}
          />
        )}

        {selectedItem === "createCategory" && (
          <CreateCategory
            updateProductId={updateProductId}
            setUpdateProductId={setUpdateProductId}
            setUpdateCategoryId={setUpdateCategoryId}
            updateCategoryId={updateCategoryId}
            setUpdateSubCategoryId={setUpdateSubCategoryId}
            updateSubCategoryId={updateSubCategoryId}
            token={token}
            setSelectedItem={setSelectedItem}
          />
        )}

        {selectedItem === "products" && (
          <AllProducts
            updateProductId={updateProductId}
            setUpdateProductId={setUpdateProductId}
            updateCategoryId={updateCategoryId}
            setUpdateCategoryId={setUpdateCategoryId}
            setUpdateSubCategoryId={setUpdateSubCategoryId}
            updateSubCategoryId={updateSubCategoryId}
            token={token}
            setSelectedItem={setSelectedItem}
          />
        )}

        {selectedItem === "users" && (
          <AllUsers
            updateProductId={updateProductId}
            setUpdateProductId={setUpdateProductId}
            updateCategoryId={updateCategoryId}
            setUpdateCategoryId={setUpdateCategoryId}
            setUpdateSubCategoryId={setUpdateSubCategoryId}
            updateSubCategoryId={updateSubCategoryId}
            token={token}
            setSelectedItem={setSelectedItem}
          />
        )}
        {selectedItem === "category" && (
          <AllCategory
            updateProductId={updateProductId}
            setUpdateProductId={setUpdateProductId}
            updateCategoryId={updateCategoryId}
            setUpdateCategoryId={setUpdateCategoryId}
            setUpdateSubCategoryId={setUpdateSubCategoryId}
            updateSubCategoryId={updateSubCategoryId}
            token={token}
            setSelectedItem={setSelectedItem}
          />
        )}
        {selectedItem === "paymentHistory" && (
          <PaymentHistory
            updateProductId={updateProductId}
            setUpdateProductId={setUpdateProductId}
            updateCategoryId={updateCategoryId}
            setUpdateCategoryId={setUpdateCategoryId}
            setUpdateSubCategoryId={setUpdateSubCategoryId}
            updateSubCategoryId={updateSubCategoryId}
            token={token}
            setSelectedItem={setSelectedItem}
          />
        )}
        {selectedItem === "createSubCategory" && (
          <CreateSubCategory
            updateProductId={updateProductId}
            setUpdateProductId={setUpdateProductId}
            updateCategoryId={updateCategoryId}
            setUpdateCategoryId={setUpdateCategoryId}
            setUpdateSubCategoryId={setUpdateSubCategoryId}
            updateSubCategoryId={updateSubCategoryId}
            token={token}
            setSelectedItem={setSelectedItem}
          />
        )}
      </div>
    </div>
  );
}
export default Dashboard;
