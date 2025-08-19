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
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 text-white p-5">
      <h1 className="text-2xl font-bold text-white">All Enrollments</h1>
      <div className="bg-zinc-800/50 border border-zinc-700 shadow-lg overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-zinc-700">
          {enrollments.map((enrollment) => (
            <li key={enrollment._id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-zinc-700 flex items-center justify-center">
                      <Users className="h-5 w-5 text-zinc-400" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-white">
                      {enrollment.user?.name || "N/A"}
                    </div>
                    <div className="text-sm text-zinc-400">
                      {enrollment.user?.email || "N/A"} •{" "}
                      {enrollment.user?.phone || "N/A"}
                    </div>
                    <div className="text-sm text-zinc-400">
                      Course: {enrollment.course?.title || "N/A"}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      enrollment.confirmationFeePaid
                        ? "bg-green-900/30 text-green-400 border border-green-500/50"
                        : "bg-red-900/30 text-red-400 border border-red-500/50"
                    }`}>
                    {enrollment.confirmationFeePaid
                      ? "Confirmation Paid"
                      : "Confirmation Pending"}
                  </span>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      enrollment.status === "ACTIVE"
                        ? "bg-green-900/30 text-green-400 border border-green-500/50"
                        : "bg-yellow-900/30 text-yellow-400 border border-yellow-500/50"
                    }`}>
                    {enrollment.status || "PENDING"}
                  </span>
                  {enrollment.paymentMethod && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/30 text-blue-400 border border-blue-500/50">
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
          <div className="text-sm text-zinc-400">
            Showing {(currentPage - 1) * pagination.limit + 1} to{" "}
            {Math.min(currentPage * pagination.limit, pagination.total)} of{" "}
            {pagination.total} results
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm bg-zinc-700 text-zinc-300 rounded disabled:opacity-50 hover:bg-zinc-600 transition-colors">
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
              className="px-3 py-1 text-sm bg-zinc-700 text-zinc-300 rounded disabled:opacity-50 hover:bg-zinc-600 transition-colors">
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Enrollments;
