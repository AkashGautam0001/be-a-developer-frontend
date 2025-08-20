import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Calendar,
  Clock,
  Users,
  Sparkles,
  ArrowRight,
  Star,
} from "lucide-react";
import axiosInstance from "../utils/axios";
import AboutJprTechnosoft from "../components/AboutJprTechnosoft";
import Footer from "../components/Footer";
import logo from "../../public/jpr-logo.png";

const RegistrationPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axiosInstance.post(
        "/enrollments/create-enrollment",
        {
          ...formData,
          slug: slug,
        }
      );

      if (response.data.success) {
        localStorage.setItem("enrollmentId", response.data.enrollmentId);
        navigate(`/payment-confirmation/${slug}`);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const formatWebinarDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatWebinarTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-900 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const webinar = course.demoClasses?.find((demo) => demo.type === "WEBINAR");

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 sm:py-4">
            <Link
              to="/"
              className="flex items-center group border-none outline-none">
              <img src={logo} alt="JPR Technosoft" className="w-[50px]" />
            </Link>
            <div className="flex items-center">
              <span className="text-xs sm:text-sm text-gray-300">
                🔥 Limited Seats
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column - Course Info */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white">
              <div className="flex items-center mb-3 sm:mb-4">
                <Star className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-semibold text-sm sm:text-base">
                  PREMIUM WEBINAR
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
                {course.title}
              </h2>
              {/* <p className="text-blue-100 text-base sm:text-lg">
                {course.description}
              </p> */}
            </div>

            {webinar && (
              <div className="bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-700">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mr-2" />
                  Upcoming Live Webinar
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center text-gray-300 text-sm sm:text-base">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                    <span className="break-words">
                      {formatWebinarDate(webinar.scheduledAt)}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-300 text-sm sm:text-base">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                    <span>
                      {formatWebinarTime(webinar.scheduledAt)} •{" "}
                      {webinar.duration} minutes
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-700">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3">
                What will be in the Webinar?
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li className="flex items-center">
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 mr-2 flex-shrink-0" />
                  How to learn GenAI effectively.
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 mr-2 flex-shrink-0" />
                  How you can implement GenAI in real-world projects.
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 mr-2 flex-shrink-0" />
                  What you need to know about GenAI.
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 mr-2 flex-shrink-0" />
                  What we will be providing regarding GenAI.
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 mr-2 flex-shrink-0" />
                  How to leverage GenAI for your projects.
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 mr-2 flex-shrink-0" />
                  How we can help you in your GenAI journey.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Registration Form */}
          <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700 order-1 lg:order-2">
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Secure Your Spot Now!
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                Join thousands learning GenAI
              </p>
            </div>

            <div className="rounded-lg p-4 mb-4 sm:mb-6 border border-green-500/30">
              <div className="flex items-center text-white gap-3">
                {/* <div className="text-xl sm:text-4xl font-bold text-white">
                  ₹99
                </div> */}
                <div className="">
                  <div className="text-xs sm:text-base font-semibold text-green-400">
                    Are you want to increase your career growth or want to
                    <i className="bg-white/10 text-white px-1 mx-1 rounded">
                      {" "}
                      buy burger, coffee, cold drinks and snacks
                    </i>{" "}
                    with ₹99 ?
                  </div>
                  {/* <div className="text-xs text-amber-300 sm:text-xs mt-2">
                    <span className="font-bold text-amber-300 pr-1 "> ₹99</span>
                    This is not the complete course fee, it's a confirmation fee
                    to secure your spot.
                  </div> */}
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                  Phone Number * (important for Whatsapp group and
                  notifications)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Enter your phone number"
                  maxLength="10"
                  required
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              {message && (
                <div className="p-3 rounded-lg bg-red-900/50 text-red-300 border border-red-700 text-sm">
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg text-base sm:text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    Secure My Spot
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-4 sm:mt-6 text-center">
              <p className="text-xs text-gray-400">
                🔒 Your information is secure and encrypted
              </p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}

        <AboutJprTechnosoft />
        <Footer />
      </div>
    </div>
  );
};

export default RegistrationPage;
