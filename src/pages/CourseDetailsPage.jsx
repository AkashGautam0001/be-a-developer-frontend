import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import { AlertCircle, Clock } from "lucide-react";
import axiosInstance from "../utils/axios";

const CourseDetailsPage = () => {
  const { slug } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourse();
  }, [slug]);

  const fetchCourse = async () => {
    try {
      const response = await axiosInstance.get(`/courses/${slug}`);
      if (response.data.success) {
        setCourse(response.data.course);
      }
    } catch (error) {
      console.error("Failed to fetch course:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGetSubscription = () => {
    if (user) {
      navigate("/login");
      return;
    }
    navigate(`/register/${slug}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!course) {
    return <div className="text-center py-12">Course not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {course.image && (
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-64 object-cover"
          />
        )}

        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {course.title}
          </h1>
          <p className="text-lg text-gray-600 mb-6">{course.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Full Payment
              </h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                ₹{course.price}
              </div>
              <p className="text-blue-700">Pay once and get lifetime access</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                Monthly Plan
              </h3>
              <div className="text-3xl font-bold text-green-600 mb-2">
                ₹{course.monthlyPrice}/month
              </div>
              <p className="text-green-700">Flexible monthly payments</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Course Information
            </h3>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-gray-600">{course.duration}</span>
              </div>
            </div>
          </div>

          {course.demoClasses && course.demoClasses.length > 0 && (
            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-4">
                Demo Classes Available
              </h3>
              <p className="text-green-700">
                Get access to demo classes after confirmation payment
              </p>
            </div>
          )}

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <div className="flex">
              <AlertCircle className="h-5 w-5 text-yellow-400 mr-2" />
              <div>
                <h4 className="text-yellow-800 font-semibold">
                  Confirmation Fee Required
                </h4>
                <p className="text-yellow-700">
                  Pay ₹99 confirmation fee to show your interest and unlock demo
                  classes.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleGetSubscription}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Get Subscription
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
