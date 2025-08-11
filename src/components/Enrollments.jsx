import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";
import { Users } from "lucide-react";

const Enrollments = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchEnrollments(currentPage);
  }, [currentPage]);

  const fetchEnrollments = async (page = 1) => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(
        `/admin/enrollments?page=${page}&limit=10`
      );
      if (response.data.success) {
        setEnrollments(response.data.enrollments);
        setPagination(response.data.pagination);
      }
    } catch (error) {
      console.error("Error fetching enrollments:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading && currentPage === 1) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">All Enrollments</h1>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {enrollments.map((enrollment) => (
            <li key={enrollment._id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                      <Users className="h-5 w-5 text-gray-600" />
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
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      enrollment.confirmationFeePaid
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}>
                    {enrollment.confirmationFeePaid
                      ? "Confirmation Paid"
                      : "Confirmation Pending"}
                  </span>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      enrollment.status === "ACTIVE"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                    {enrollment.status || "PENDING"}
                  </span>
                  {enrollment.paymentMethod && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {enrollment.paymentMethod}
                    </span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Pagination */}
      {pagination.pages > 1 && (
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-700">
            Showing {(currentPage - 1) * pagination.limit + 1} to{" "}
            {Math.min(currentPage * pagination.limit, pagination.total)} of{" "}
            {pagination.total} results
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded disabled:opacity-50">
              Previous
            </button>
            <span className="px-3 py-1 text-sm bg-indigo-600 text-white rounded">
              {currentPage}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, pagination.pages))
              }
              disabled={currentPage === pagination.pages}
              className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded disabled:opacity-50">
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Enrollments;
