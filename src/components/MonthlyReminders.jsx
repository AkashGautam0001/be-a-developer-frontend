import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";
import { Bell } from "lucide-react";

const MonthlyReminders = () => {
  const [reminders, setReminders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReminders();
  }, []);

  const fetchReminders = async () => {
    try {
      const response = await axiosInstance.get("/admin/monthly-reminders");
      if (response.data.success) {
        setReminders(response.data.reminders);
      }
    } catch (error) {
      console.error("Error fetching reminders:", error);
    } finally {
      setLoading(false);
    }
  };

  const sendReminder = async (enrollmentId) => {
    try {
      await axiosInstance.post(`/admin/send-reminder/${enrollmentId}`);
      alert("Reminder sent successfully!");
      fetchReminders();
    } catch (error) {
      console.error("Error sending reminder:", error);
      alert("Failed to send reminder");
    }
  };

  const sendBulkReminders = async () => {
    try {
      await axiosInstance.post("/admin/send-bulk-reminders");
      alert("Bulk reminders sent successfully!");
      fetchReminders();
    } catch (error) {
      console.error("Error sending bulk reminders:", error);
      alert("Failed to send bulk reminders");
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
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Monthly Reminders</h1>
        <button
          onClick={sendBulkReminders}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
          <Bell className="mr-2 h-4 w-4" />
          Send All Reminders
        </button>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Students Due for Monthly Payment ({reminders.length})
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Send payment reminders to students with upcoming or overdue monthly
            payments.
          </p>
        </div>
        <ul className="divide-y divide-gray-200">
          {reminders.map((enrollment) => (
            <li key={enrollment._id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Bell className="h-5 w-5 text-blue-600" />
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
                      Next Payment:{" "}
                      {enrollment.nextPaymentDate
                        ? new Date(
                            enrollment.nextPaymentDate
                          ).toLocaleDateString()
                        : "N/A"}
                    </div>
                    {enrollment.lastReminderSent && (
                      <div className="text-xs text-gray-400">
                        Last reminder:{" "}
                        {new Date(
                          enrollment.lastReminderSent
                        ).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    ₹{enrollment.course?.monthlyPrice || 0}
                  </span>
                  <button
                    onClick={() => sendReminder(enrollment._id)}
                    className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                    Send Reminder
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {reminders.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No reminders to send at this time
          </div>
        )}
      </div>
    </div>
  );
};

export default MonthlyReminders;
