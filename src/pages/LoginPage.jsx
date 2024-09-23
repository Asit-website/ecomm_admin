import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Form Submission
  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://ecomm-backend-aopz.onrender.com/api/v1/adminLogin",
      // "http://localhost:4000/api/v1/adminLogin",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        // the body will send like this to backend
        body: JSON.stringify(formData),
      }
    );

    const formattedResponse = await response.json();

    if (!formattedResponse.success) {
      alert(formattedResponse.message);
    } else {
      toast.success(formattedResponse.message);
      localStorage.setItem("ecomm_token", formattedResponse.token);
      navigate("/dashboard");
    }
  };

  return (
    <div className="container min-h-screen bg-[#ffffff] flex justify-center items-center">
      <div className="max-w-md w-full m-5 rounded-md shadow-xl flex flex-col items-center justify-center border border-t-1">
        <h2 className="font-[600] text-3xl text-[#0a0908] mt-8 self-start lg:ml-8 ml-3.5">
          Login{" "}
        </h2>

        <form
          onSubmit={submitHandler}
          class="max-w-sm mx-auto w-full my-10 lg:p-0 p-2.5"
        >
          <div class="mb-5">
            <label
              for="email"
              className="block mb-2 text-md font-lg text-gray-700 dark:text-white"
            >
              Email Address
            </label>
            <input
              onChange={changeHandler}
              name="email"
              value={formData.email}
              type="email"
              id="email"
              className="bg-[#ffffff] border border-gray-300 text-gray-900 text-md rounded-md outline-none hover:border-blue-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="password"
              className="block mb-2 text-md font-lg text-gray-700 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              name="password"
              onChange={changeHandler}
              id="password"
              className="bg-[#ffffff] border border-gray-300 text-gray-900 text-md rounded-md outline-none hover:border-blue-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center justify-center h-8 w-8 hover:bg-blue-100">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded-sm hover:bg-blue-100 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="remember"
              className="mt-1 text-md text-gray-700 dark:text-gray-300"
            >
              Keep me sign in
            </label>
          </div>
          <button
            type="submit"
            class="text-white bg-[#42a5f5] hover:bg-[#2196f3] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-md w-full px-5 py-2 text-center dark:bg-[#42a5f5] dark:hover:bg-[#2196f3] dark:focus:ring-blue-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
