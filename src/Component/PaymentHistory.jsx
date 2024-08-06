/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

function PaymentHistory({ token }) {
  const [allPayment, setAllPayment] = useState([]);

  const fetchAllPayments = async () => {
    try {
      const response = await fetch(
        "https://ecomm-backend-aopz.onrender.com/api/v1/payment/fetchAllPayments",
        {
          method: "GET",

          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const formattedResponse = await response.json();

      if (formattedResponse.success) {
        setAllPayment(formattedResponse?.allPayments);
      }
    } catch (error) {
      console.log(error);
      alert("internal server error , please try again");
    }
  };

  useEffect(() => {
    fetchAllPayments();
  }, []);

  return (
    <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <h2 className="text-center text-2xl font-semibold text-gray-800 py-4 bg-gray-100">
        Payment History
      </h2>

      {allPayment.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full bg-[#ffffff">
            <thead className="bg-gray-200 border-b-2 border-gray-300">
              <tr>
                <th className="p-4 text-left text-sm font-semibold text-gray-600">
                  #
                </th>
                <th className="p-4 text-left text-sm font-semibold text-gray-600">
                  USERNAME
                </th>
                <th className="p-4 text-left text-sm font-semibold text-gray-600">
                  RAZORPAY PAYMENT ID
                </th>
                <th className="p-4 text-left text-sm font-semibold text-gray-600">
                  RAZORPAY ORDER ID
                </th>
                {/* <th scope="col" class="px-6 py-3">
                    razorpaySignature
                </th> */}
              </tr>
            </thead>
            <tbody>
              {allPayment.map((payment, index) => (
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="p-4 text-gray-700">{index + 1}</td>
                  <td className="p-4 text-gray-700">
                    {payment?.user?.firstName} {payment?.user?.lastName}
                  </td>
                  <td className="p-4 text-gray-700">
                    {payment?.razorpay_payment_id}
                  </td>
                  <td className="p-4 text-gray-700">
                    {payment?.razorpay_order_id}
                  </td>

                  {/* <td class="px-6 py-4">
                   {payment?.razorpay_signature}
                    </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <span className="text-white font-[600] mx-auto text-[3rem]">
          no payment left{" "}
        </span>
      )}
    </div>
  );
}
export default PaymentHistory;
