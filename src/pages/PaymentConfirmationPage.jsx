import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../utils/axios";
import { CheckCircle, CreditCard } from "lucide-react";

const PaymentConfirmationPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchCourse();
    // Load Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [courseId]);

  const fetchCourse = async () => {
    try {
      const response = await axiosInstance.get(`/courses/${courseId}`);
      if (response.data.success) {
        setCourse(response.data.course);
      }
    } catch (error) {
      console.error("Failed to fetch course:", error);
    }
  };

  const handlePayment = async () => {
    setLoading(true);
    setMessage("");

    try {
      const enrollmentId =
        localStorage.getItem("enrollmentId") || "689841578d7650ef37feb509"; // Use courseId if enrollmentId not found
      const response = await axiosInstance.post(
        "/payments/create-confirmation-order",
        {
          enrollmentId,
        }
      );

      if (response.data.success) {
        const options = {
          key: response.data.key,
          amount: response.data.order.amount,
          currency: response.data.order.currency,
          name: "CourseHub",
          description: "Confirmation Fee",
          order_id: response.data.order.id,
          handler: async function (response) {
            try {
              const verifyResponse = await axiosInstance.post(
                "/payments/verify-confirmation-payment",
                {
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                }
              );

              if (verifyResponse.data.success) {
                setMessage("Payment successful! Redirecting to dashboard...");
                localStorage.removeItem("enrollmentId");
                setTimeout(() => {
                  navigate("/dashboard");
                }, 2000);
              }
            } catch (error) {
              setMessage("Payment verification failed");
            }
          },
          prefill: {
            name: "",
            email: "",
            contact: "",
          },
          theme: {
            color: "#2563eb",
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Payment failed");
    } finally {
      setLoading(false);
    }
  };

  if (!course) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Registration Successful!
        </h2>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-blue-900">{course.title}</h3>
          <p className="text-blue-700 mt-2">
            Please pay the confirmation fee to proceed
          </p>
        </div>

        <div className="text-center mb-6">
          <div className="text-3xl font-bold text-blue-600">₹99</div>
          <p className="text-gray-600">Confirmation Fee</p>
        </div>

        {message && (
          <div
            className={`p-3 rounded mb-4 ${
              message.includes("successful")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}>
            {message}
          </div>
        )}

        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 disabled:opacity-50 flex items-center justify-center">
          {loading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
          ) : (
            <CreditCard className="h-5 w-5 mr-2" />
          )}
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
};

export default PaymentConfirmationPage;
