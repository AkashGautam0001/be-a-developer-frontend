import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";
import { Calendar, CreditCard } from "lucide-react";

const PaymentPending = () => {
  const [pendingData, setPendingData] = useState({
    pendingConfirmation: [],
    pendingSubscription: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPendingPayments();
  }, []);

  const fetchPendingPayments = async () => {
    try {
      const response = await axiosInstance.get("/admin/payment-pending");
      if (response.data.success) {
        setPendingData(response.data);
      }
    } catch (error) {
      console.error("Error fetching pending payments:", error);
    } finally {
      setLoading(false);
    }
  };

  const markConfirmationPaid = async (enrollmentId) => {
    try {
      await axiosInstance.put(
        `/admin/enrollments/${enrollmentId}/confirmation-paid`
      );
      fetchPendingPayments();
    } catch (error) {
      console.error("Error updating confirmation payment:", error);
    }
  };

  const markSubscriptionPaid = async (enrollmentId) => {
    try {
      await axiosInstance.put(
        `/admin/enrollments/${enrollmentId}/subscription-paid`
      );
      fetchPendingPayments();
    } catch (error) {
      console.error("Error updating subscription payment:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Payment Pending</h1>

      {/* Confirmation Fee Pending */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Confirmation Fee Pending ({pendingData.pendingConfirmation.length})
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Students who haven't paid the confirmation fee yet.
          </p>
        </div>
        <ul className="divide-y divide-gray-200">
          {pendingData.pendingConfirmation.map((enrollment) => (
            <li key={enrollment._id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-red-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {enrollment.user?.name || "N/A"}
                    </div>
                    <div className="text-sm text-gray-500">
                      {enrollment.user?.email || "N/A"} •{" "}
                      {enrollment.user?.phone || "N/A"}
                    </div>
                    <div className="text-sm text-gray-500">
                      Course: {enrollment.course?.title || "N/A"}
                    </div>
                    <div className="text-sm text-gray-500">
                      Enrolled:{" "}
                      {new Date(enrollment.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    ₹999 Pending
                  </span>
                  <button
                    onClick={() => markConfirmationPaid(enrollment._id)}
                    className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700">
                    Mark Paid
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {pendingData.pendingConfirmation.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No pending confirmation fees
          </div>
        )}
      </div>

      {/* Subscription Payment Pending */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Subscription Payment Pending (
            {pendingData.pendingSubscription.length})
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Students with monthly subscriptions who have pending payments.
          </p>
        </div>
        <ul className="divide-y divide-gray-200">
          {pendingData.pendingSubscription.map((enrollment) => (
            <li key={enrollment._id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-yellow-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {enrollment.user?.name || "N/A"}
                    </div>
                    <div className="text-sm text-gray-500">
                      {enrollment.user?.email || "N/A"} •{" "}
                      {enrollment.user?.phone || "N/A"}
                    </div>
                    <div className="text-sm text-gray-500">
                      Course: {enrollment.course?.title || "N/A"}
                    </div>
                    <div className="text-sm text-gray-500">
                      Next Payment Due:{" "}
                      {enrollment.nextPaymentDate
                        ? new Date(
                            enrollment.nextPaymentDate
                          ).toLocaleDateString()
                        : "N/A"}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    ₹{enrollment.course?.monthlyPrice || 0} Due
                  </span>
                  <button
                    onClick={() => markSubscriptionPaid(enrollment._id)}
                    className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700">
                    Mark Paid
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {pendingData.pendingSubscription.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No pending subscription payments
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPending;
