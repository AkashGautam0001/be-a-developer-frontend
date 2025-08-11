import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";
import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axiosInstance.get("/admin/courses");
      if (response.data.success) {
        setCourses(response.data.courses);
      }
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Available Courses</h1>
        <p className="mt-4 text-lg text-gray-600">
          Choose from our premium course collection
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            {course.image && (
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {course.description}
              </p>

              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-2xl font-bold text-blue-600">
                    ₹{course.price}
                  </span>
                  <span className="text-sm text-gray-500 ml-2">
                    Full Payment
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-green-600">
                    ₹{course.monthlyPrice}/month
                  </div>
                  <span className="text-sm text-gray-500">Monthly Plan</span>
                </div>
              </div>

              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock className="h-4 w-4 mr-1" />
                <span>{course.duration} duration</span>
              </div>

              <Link
                to={`/course/${course.slug}`}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 block text-center">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
