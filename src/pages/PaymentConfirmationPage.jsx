import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../utils/axios";
import {
  CheckCircle,
  CreditCard,
  Sparkles,
  Coffee,
  Hamburger as Burger,
} from "lucide-react";
import AboutJprTechnosoft from "../components/AboutJprTechnosoft";
import Footer from "../components/Footer";
import logo from "../../public/jpr-logo.png";

const PaymentConfirmationPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchCourse();
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [slug]);

  const fetchCourse = async () => {
    try {
      const response = await axiosInstance.get(`/courses/${slug}`);
      if (response.data.success) setCourse(response.data.course);
    } catch (error) {
      console.error("Failed to fetch course:", error);
    }
  };

  const handlePayment = async () => {
    setLoading(true);
    setMessage("");
    try {
      const enrollmentId = localStorage.getItem("enrollmentId");
      if (!enrollmentId) {
        setMessage("No enrollment found. Please start registration again.");
        setLoading(false);
        return;
      }
      const response = await axiosInstance.post(
        "/payments/create-confirmation-order",
        { enrollmentId }
      );
      if (response.data.success) {
        const options = {
          key: response.data.key,
          amount: response.data.order.amount,
          currency: response.data.order.currency,
          name: "JPR Technosoft",
          description: "Confirmation Fee",
          order_id: response.data.order.id,
          handler: async function (resp) {
            try {
              const verifyResponse = await axiosInstance.post(
                "/payments/verify-confirmation-payment",
                {
                  razorpay_order_id: resp.razorpay_order_id,
                  razorpay_payment_id: resp.razorpay_payment_id,
                  razorpay_signature: resp.razorpay_signature,
                }
              );
              if (verifyResponse.data.success) {
                setMessage("Payment successful! Redirecting to dashboard...");
                localStorage.removeItem("enrollmentId");
                setTimeout(() => navigate("/dashboard"), 1500);
              }
            } catch {
              setMessage("Payment verification failed");
            }
          },
          theme: { color: "#2563eb" },
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
      }
    } catch (error) {
      setMessage(error?.response?.data?.message || "Payment failed");
    } finally {
      setLoading(false);
    }
  };

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-900 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link
              to="/"
              className="flex items-center group border-none outline-none">
              <img
                src={logo}
                alt="JPR Technosoft"
                className="w-[50px] group-hover:scale-105 transition-transform"
              />
            </Link>
            <span className="text-sm text-green-400 font-medium">
              Registration Complete!
            </span>
          </div>
        </div>
      </header>

      {/* Two-column layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {/* LEFT: Course + Value */}
          <section className="bg-gray-800 border order-2 md:order-1 border-gray-700 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-2">Generative AI Webinar</h2>
            <p className="text-gray-400 mb-6">
              The most comprehensive and practical GenAI learning experience 🚀
            </p>

            <div className="h-px w-full bg-gray-700 mb-6" />

            <h3 className="text-lg font-semibold mb-3">Why should you join?</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <Coffee className="h-4 w-4 mr-2 text-gray-400" />
                <span>Coffee: ₹120/day</span>
              </li>
              <li className="flex items-center">
                <Burger className="h-4 w-4 mr-2 text-gray-400" />
                <span>Burger: ₹100</span>
              </li>
            </ul>

            <p className="mt-5 text-gray-200 font-medium">
              For less than your daily coffee ☕, you can invest in a program
              that has the power to{" "}
              <span className="text-white font-semibold">
                transform your career and future
              </span>
              .
            </p>

            <div className="mt-8 bg-gray-700/60 border border-gray-600 rounded-lg p-4">
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-semibold text-gray-200">Note: </span>
                This is{" "}
                <span className="text-white font-semibold">
                  not the full course fee
                </span>
                . It’s a small confirmation amount to secure your seat in our
                upcoming webinar. Only those who are truly interested in
                learning how Generative AI can
                <span className="text-white font-semibold">
                  {" "}
                  dramatically improve their skills, career, and life
                </span>{" "}
                will get access.
              </p>
            </div>
          </section>

          {/* RIGHT: Congrats + Payment */}
          <section className="bg-gray-800 border order-1 md:order-2 border-gray-700 rounded-xl p-6 md:p-8">
            <div className="flex flex-col items-center text-center">
              <CheckCircle className="h-10 w-10 text-green-500 mb-3" />
              <h2 className="text-2xl font-bold mb-2">🎉 Congratulations!</h2>
              <p className="text-gray-400 mb-6">
                Your registration was successful. Complete your payment below to
                confirm your seat and unlock instant access.
              </p>
            </div>

            <div className="bg-gray-700 rounded-lg p-5 border border-gray-600 mb-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-400">Course</p>
                  <p className="font-semibold text-white">{course.title}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Amount</p>
                  <p className="font-semibold text-white">₹99</p>
                </div>
              </div>
            </div>

            {message && (
              <div
                className={`p-3 rounded-md mb-4 text-sm ${
                  message.toLowerCase().includes("success")
                    ? "bg-green-900/40 text-green-300 border border-green-700"
                    : "bg-red-900/40 text-red-300 border border-red-700"
                }`}>
                {message}
              </div>
            )}

            <button
              onClick={handlePayment}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-base font-medium transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-sm">
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                  Processing...
                </>
              ) : (
                <>
                  <CreditCard className="h-5 w-5 mr-2" />
                  Confirm & Pay ₹99
                </>
              )}
            </button>

            <div className="mt-6 text-sm text-gray-400 text-center leading-relaxed">
              ✅ Once your payment is confirmed, you’ll instantly receive a
              <span className="text-white font-semibold">
                {" "}
                confirmation email{" "}
              </span>
              and be added to our
              <span className="text-white font-semibold">
                {" "}
                exclusive WhatsApp group{" "}
              </span>
              for direct updates, resources, and community support. 🚀
            </div>
          </section>
        </div>
      </main>

      <AboutJprTechnosoft />
      <Footer />
    </div>
  );
};

export default PaymentConfirmationPage;
