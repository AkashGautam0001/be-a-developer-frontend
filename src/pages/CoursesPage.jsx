import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";
import { Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

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
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mx-auto bg-gray-900 text-white">
      <Navbar />
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-900 text-white">
        <div className="text-left mb-12 mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Available <span className="text-blue-400">Courses</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Unlock your potential with our{" "}
            <span className="text-blue-400 font-semibold">
              expert-curated courses
            </span>
            . Whether you're starting your journey or advancing your skills, our
            training programs are designed to guide you every step of the way.
          </p>

          <p className="mt-3 text-sm md:text-base text-gray-500 italic">
            “Learning today for a better tomorrow.”
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course._id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 border border-gray-700">
              {course.image && (
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {course.description}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-2xl font-bold text-blue-400">
                      ₹{course.price}
                    </span>
                    <span className="text-sm text-gray-400 ml-2">
                      Full Payment
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-green-400">
                      ₹{course.monthlyPrice}/month
                    </div>
                    <span className="text-sm text-gray-400">Monthly Plan</span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <Clock className="h-4 w-4 mr-1 text-gray-300" />
                  <span>{course.duration} duration</span>
                </div>
                <Link
                  to={`/courses/${course.slug}`}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300 block text-center">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
