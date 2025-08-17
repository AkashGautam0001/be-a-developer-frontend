import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";
import { Link } from "react-router-dom";
import { Calendar, CheckCircle } from "lucide-react";

const Dashboard = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [selectedEnrollment, setSelectedEnrollment] = useState(null);
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchEnrollments();
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
  }, []);

  useEffect(() => {
    if (selectedEnrollment) {
      fetchClasses(selectedEnrollment.course._id);
    }
  }, [selectedEnrollment]);

  const fetchEnrollments = async () => {
    try {
      const response = await axiosInstance.get("/enrollments/my-enrollments");
      console.log("Enrollments:", response.data.enrollments);
      if (response.data.success) {
        setEnrollments(response.data.enrollments);
        if (response.data.enrollments.length > 0) {
          setSelectedEnrollment(response.data.enrollments[0]);
        }
      }
    } catch (error) {
      console.error("Failed to fetch enrollments:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchClasses = async (courseId) => {
    try {
      const response = await axiosInstance.get(
        `/classes/my-classes/${courseId}`
      );
      console.log("Classes:", response.data.classes);
      if (response.data.success) {
        setClasses(response.data.classes);
      }
    } catch (error) {
      console.error("Failed to fetch classes:", error);
    }
  };

  const handlePayment = async (method) => {
    setPaymentLoading(true);
    setMessage("");

    try {
      const response = await axiosInstance.post(
        "/payments/create-course-order",
        {
          enrollmentId: selectedEnrollment._id,
          paymentMethod: method,
        }
      );

      if (response.data.success) {
        const options = {
          key: response.data.key,
          amount: response.data.order.amount,
          currency: response.data.order.currency,
          name: "CourseHub",
          description: `${
            method === "full" ? "Full Payment" : "Monthly Payment"
          }`,
          order_id: response.data.order.id,
          handler: async function (response) {
            try {
              const verifyResponse = await axiosInstance.post(
                "/payments/verify-course-payment",
                {
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                }
              );

              if (verifyResponse.data.success) {
                setMessage("Payment successful! Course unlocked.");
                fetchEnrollments(); // Refresh enrollments
              }
            } catch (error) {
              setMessage("Payment verification failed");
            }
          },
          prefill: {
            name: "Akash",
            email: "akashgautam01.in@gmail.com",
            contact: "9354502139",
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
      setPaymentLoading(false);
    }
  };

  const getTimeUntilClass = (scheduledAt) => {
    const now = new Date();
    const classTime = new Date(scheduledAt);
    const timeDiff = classTime.getTime() - now.getTime();

    if (timeDiff <= 0) {
      return "Class has started";
    }

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    if (hours > 24) {
      const days = Math.floor(hours / 24);
      return `${days} day${days > 1 ? "s" : ""} remaining`;
    }

    return `${hours}h ${minutes}m remaining`;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (enrollments.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            No Enrollments Found
          </h2>
          <p className="text-gray-600 mb-6">
            You haven't enrolled in any courses yet.
          </p>
          <Link
            to="/courses"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Browse Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Course Selection Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              My Courses
            </h2>
            <div className="space-y-3">
              {enrollments.map((enrollment) => (
                <button
                  key={enrollment._id}
                  onClick={() => setSelectedEnrollment(enrollment)}
                  className={`w-full text-left p-3 rounded-lg transition duration-300 ${
                    selectedEnrollment?._id === enrollment._id
                      ? "bg-blue-100 border-2 border-blue-500"
                      : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                  }`}>
                  <div className="font-medium text-gray-900">
                    {enrollment.course.title}
                  </div>
                  <div
                    className={`text-sm ${
                      enrollment.status === "active"
                        ? "text-green-600"
                        : enrollment.status === "confirmed"
                        ? "text-yellow-600"
                        : "text-gray-500"
                    }`}>
                    {enrollment.status.charAt(0).toUpperCase() +
                      enrollment.status.slice(1)}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {selectedEnrollment && (
            <>
              {/* Classes Section */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {selectedEnrollment.status === "confirmed" &&
                  !selectedEnrollment.paymentMethod
                    ? "Demo Classes"
                    : "Classes"}
                </h3>

                {classes.length === 0 ? (
                  <div className="text-center py-8">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">No classes scheduled yet.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {classes.map((classItem) => (
                      <div
                        key={classItem._id}
                        className="border rounded-lg p-4 hover:shadow-md transition duration-300">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-2">
                              {classItem.title}
                            </h4>
                            <div className="flex items-center text-gray-600 mb-2">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span>
                                {new Date(
                                  classItem.scheduledAt
                                ).toLocaleString()}
                              </span>
                            </div>
                            <div className="flex items-center text-gray-600 mb-4">
                              <Clock className="h-4 w-4 mr-2" />
                              <span>{classItem.duration} minutes</span>
                            </div>

                            {classItem.type === "demo" && (
                              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                                Demo Class
                              </span>
                            )}
                          </div>

                          <div className="text-right ml-4">
                            <div className="text-sm text-gray-500 mb-2">
                              {getTimeUntilClass(classItem.scheduledAt)}
                            </div>
                            {classItem.zoomLink && (
                              <a
                                href={classItem.zoomLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                                <Play className="h-4 w-4 mr-2" />
                                Join Class
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Course Status Card */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {selectedEnrollment.course.title}
                    </h2>
                    <p className="text-gray-600 mt-2">
                      Status:
                      <span
                        className={`ml-2 px-3 py-1 rounded-full text-sm ${
                          selectedEnrollment.status === "active"
                            ? "bg-green-100 text-green-800"
                            : selectedEnrollment.status === "confirmed"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                        }`}>
                        {selectedEnrollment.status.charAt(0).toUpperCase() +
                          selectedEnrollment.status.slice(1)}
                      </span>
                    </p>
                  </div>
                  {selectedEnrollment.confirmationFeePaid && (
                    <div className="text-right">
                      <CheckCircle className="h-8 w-8 text-green-500" />
                      <p className="text-sm text-green-600">
                        Confirmation Paid
                      </p>
                    </div>
                  )}
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

                {/* Payment Options */}
                {selectedEnrollment.confirmationFeePaid &&
                  !selectedEnrollment.paymentMethod && (
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Choose Payment Method
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-900 mb-2">
                            Full Payment
                          </h4>
                          <div className="text-2xl font-bold text-blue-600 mb-2">
                            ₹{selectedEnrollment.course.price}
                          </div>
                          <p className="text-blue-700 text-sm mb-4">
                            One-time payment with lifetime access
                          </p>
                          <button
                            onClick={() => handlePayment("full")}
                            disabled={paymentLoading}
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50">
                            {paymentLoading
                              ? "Processing..."
                              : "Pay Full Amount"}
                          </button>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-900 mb-2">
                            Monthly Plan
                          </h4>
                          <div className="text-2xl font-bold text-green-600 mb-2">
                            ₹{selectedEnrollment.course.monthlyPrice}/month
                          </div>
                          <p className="text-green-700 text-sm mb-4">
                            Flexible monthly payments
                          </p>
                          <button
                            onClick={() => handlePayment("monthly")}
                            disabled={paymentLoading}
                            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300 disabled:opacity-50">
                            {paymentLoading
                              ? "Processing..."
                              : "Choose Monthly"}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
