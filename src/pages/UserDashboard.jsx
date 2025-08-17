import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Users,
  CreditCard,
  ExternalLink,
  ChevronRight,
  Zap,
  BookOpen,
  AlertCircle,
  CheckCircle,
  Timer,
  MessageCircle,
  Menu,
  X,
  Home,
  GraduationCap,
  DollarSign,
  Settings,
} from "lucide-react";
import axiosInstance from "../utils/axios";

const UserDashboard = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [classesLoading, setClassesLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("classes");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Fetch user enrollments
  useEffect(() => {
    fetchEnrollments();
  }, []);

  // Auto-select first course when enrollments load
  useEffect(() => {
    if (enrollments.length > 0 && !selectedCourse) {
      const firstCourse = enrollments[0];
      setSelectedCourse(firstCourse);
      fetchClasses(firstCourse.course._id);
    }
  }, [enrollments, selectedCourse]);

  const fetchEnrollments = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/enrollments/my-enrollments");
      setEnrollments(response.data.enrollments || []);
    } catch (error) {
      console.error("Error fetching enrollments:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchClasses = async (courseId) => {
    try {
      setClassesLoading(true);
      const response = await axiosInstance.get(
        `/classes/my-classes/${courseId}`
      );
      const data = response.data;
      setClasses(data.classes || []);
    } catch (error) {
      console.error("Error fetching classes:", error);
    } finally {
      setClassesLoading(false);
    }
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    fetchClasses(course.course._id);
  };

  const getTimeUntilClass = (scheduledAt) => {
    const now = new Date();
    const classTime = new Date(scheduledAt);
    const diffInMs = classTime - now;

    if (diffInMs <= 0) {
      return { text: "Class Started", color: "text-green-400", isLive: true };
    }

    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays > 0) {
      return {
        text: `In ${diffInDays} day${diffInDays > 1 ? "s" : ""}`,
        color: "text-blue-400",
        isLive: false,
      };
    } else if (diffInHours > 0) {
      return {
        text: `In ${diffInHours} hour${diffInHours > 1 ? "s" : ""}`,
        color: "text-yellow-400",
        isLive: false,
      };
    } else {
      const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
      return {
        text: `In ${diffInMinutes} min${diffInMinutes > 1 ? "s" : ""}`,
        color: "text-orange-400",
        isLive: false,
      };
    }
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      PENDING_CONFIRMATION: {
        text: "Pending",
        color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      },
      CONFIRMED: {
        text: "Confirmed",
        color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      },
      ACTIVE: {
        text: "Active",
        color: "bg-green-500/20 text-green-400 border-green-500/30",
      },
      SUSPENDED: {
        text: "Suspended",
        color: "bg-red-500/20 text-red-400 border-red-500/30",
      },
      CANCELLED: {
        text: "Cancelled",
        color: "bg-gray-500/20 text-gray-400 border-gray-500/30",
      },
    };

    const config = statusConfig[status] || statusConfig["PENDING_CONFIRMATION"];
    return (
      <span className={`px-2 py-1 rounded-full text-xs border ${config.color}`}>
        {config.text}
      </span>
    );
  };

  const getPaymentInfo = (enrollment) => {
    if (!enrollment.paymentMethod) {
      return { text: "No Payment Selected", color: "text-gray-400" };
    }

    if (enrollment.paymentMethod === "FULL") {
      return enrollment.fullPaymentCompleted
        ? { text: "Full Payment Completed", color: "text-green-400" }
        : { text: "Full Payment Pending", color: "text-yellow-400" };
    }

    if (enrollment.paymentMethod === "MONTHLY") {
      const paidMonths =
        enrollment.monthlyPayments?.filter((p) => p.status === "PAID").length ||
        0;
      return {
        text: `Monthly (${paidMonths} months paid)`,
        color: "text-blue-400",
      };
    }

    return { text: "Unknown", color: "text-gray-400" };
  };

  const sidebarItems = [
    {
      id: "classes",
      icon: Calendar,
      label: "Classes & Schedule",
      badge: classes.length,
    },
    {
      id: "courses",
      icon: GraduationCap,
      label: "My Courses",
      badge: enrollments.length,
    },
    { id: "payments", icon: DollarSign, label: "Payment Info" },
    { id: "whatsapp", icon: MessageCircle, label: "WhatsApp Group" },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const renderClasses = () => (
    <div className="space-y-6 min-h-screen">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Upcoming Classes</h2>
        {selectedCourse && (
          <div className="text-sm text-gray-400">
            Course: {selectedCourse.course.title}
          </div>
        )}
      </div>

      {classesLoading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      ) : classes.length === 0 ? (
        <div className="text-center py-12 bg-gray-800 rounded-xl">
          <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-600" />
          <h3 className="text-xl font-semibold mb-2">No Classes Scheduled</h3>
          <p className="text-gray-400">
            Check back later for upcoming sessions
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {classes.map((classItem, index) => {
            const timeInfo = getTimeUntilClass(classItem.scheduledAt);
            return (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300 border border-gray-700">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                          classItem.type === "DEMO"
                            ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                            : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        }`}>
                        {classItem.type === "DEMO" ? (
                          <Zap className="w-3 h-3" />
                        ) : (
                          <BookOpen className="w-3 h-3" />
                        )}
                        <span>
                          {classItem.type === "DEMO"
                            ? "Workshop"
                            : "Regular Class"}
                        </span>
                      </div>
                      {timeInfo.isLive && (
                        <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full animate-pulse font-medium">
                          🔴 LIVE NOW
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {classItem.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        <span>
                          {new Date(classItem.scheduledAt).toLocaleDateString(
                            "en-US",
                            {
                              weekday: "short",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Clock className="w-4 h-4 text-green-400" />
                        <span>
                          {new Date(classItem.scheduledAt).toLocaleTimeString(
                            [],
                            { hour: "2-digit", minute: "2-digit" }
                          )}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Timer className="w-4 h-4 text-orange-400" />
                        <span>{classItem.duration} minutes</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div
                      className={`text-center px-4 py-2 rounded-lg bg-gray-700 ${timeInfo.color} font-medium`}>
                      {timeInfo.text}
                    </div>
                    <a
                      href={classItem.zoomLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-105">
                      Join Class
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-6 min-h-screen">
      <h2 className="text-2xl font-bold">My Courses</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {enrollments.map((enrollment, index) => (
          <div
            key={index}
            className={`bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300 cursor-pointer border-2 ${
              selectedCourse?._id === enrollment._id
                ? "border-blue-500"
                : "border-gray-700"
            }`}
            onClick={() => handleCourseSelect(enrollment)}>
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">
                  {enrollment.course?.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                  {enrollment.course?.description}
                </p>
                <div className="text-sm text-gray-500">
                  Duration: {enrollment.course?.duration}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              {getStatusBadge(enrollment.status)}
              <div className="text-sm text-gray-400">
                Enrolled:{" "}
                {new Date(enrollment.enrollmentDate).toLocaleDateString()}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700 rounded-lg p-3">
                <div className="text-xs text-gray-400 mb-1">Full Price</div>
                <div className="text-green-400 font-semibold">
                  ₹{enrollment.course?.price?.toLocaleString()}
                </div>
              </div>
              <div className="bg-gray-700 rounded-lg p-3">
                <div className="text-xs text-gray-400 mb-1">Monthly</div>
                <div className="text-blue-400 font-semibold">
                  ₹{enrollment.course?.monthlyPrice?.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPayments = () => (
    <div className="space-y-6 min-h-screen">
      <h2 className="text-2xl font-bold">Payment Information</h2>
      {selectedCourse ? (
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4">
            {selectedCourse.course.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-1">Payment Method</div>
              <div className={getPaymentInfo(selectedCourse).color}>
                {getPaymentInfo(selectedCourse).text}
              </div>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-1">Total Paid</div>
              <div className="text-green-400 font-semibold">
                ₹{selectedCourse.totalAmountPaid?.toLocaleString() || "0"}
              </div>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-1">Confirmation Fee</div>
              <div
                className={
                  selectedCourse.confirmationFeePaid
                    ? "text-green-400"
                    : "text-yellow-400"
                }>
                {selectedCourse.confirmationFeePaid
                  ? "Paid (₹99)"
                  : "Pending (₹99)"}
              </div>
            </div>
          </div>

          {selectedCourse.paymentMethod === "MONTHLY" && (
            <div className="bg-gray-700 rounded-lg p-4 mb-4">
              <h4 className="font-semibold mb-3">Monthly Payment History</h4>
              <div className="space-y-2">
                {selectedCourse.monthlyPayments?.map((payment, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-2 border-b border-gray-600 last:border-0">
                    <span className="text-sm">
                      Month {payment.month}, {payment.year}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">
                        ₹{payment.amount?.toLocaleString()}
                      </span>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          payment.status === "PAID"
                            ? "bg-green-500/20 text-green-400"
                            : payment.status === "PENDING"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-red-500/20 text-red-400"
                        }`}>
                        {payment.status}
                      </span>
                    </div>
                  </div>
                )) || []}
              </div>
            </div>
          )}

          <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-blue-400" />
              <span className="font-medium text-blue-400">Payment Policy</span>
            </div>
            <p className="text-sm text-gray-300">
              Don't worry about payment deadlines! We don't stop classes or
              workshops if fees are not paid. This information is just for your
              reference. You can choose to pay online or offline at your
              convenience.
            </p>
          </div>
        </div>
      ) : (
        <div className="text-center py-8 bg-gray-800 rounded-xl">
          <CreditCard className="w-16 h-16 mx-auto mb-4 text-gray-600" />
          <p className="text-gray-400">
            Select a course to view payment information
          </p>
        </div>
      )}
    </div>
  );

  const renderWhatsApp = () => (
    <div className="space-y-6 min-h-screen">
      <h2 className="text-2xl font-bold">WhatsApp Group</h2>
      <div className="bg-gray-800 rounded-xl p-6">
        <div className="text-center">
          <MessageCircle className="w-16 h-16 mx-auto mb-4 text-green-400" />
          <h3 className="text-xl font-semibold mb-3">
            Join Our WhatsApp Community
          </h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Stay updated with important announcements, class reminders, study
            materials, and connect with fellow students.
          </p>

          <div className="space-y-4 max-w-sm mx-auto">
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h4 className="font-medium text-green-400 mb-2">
                Benefits of Joining:
              </h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Class reminders and updates</li>
                <li>• Study materials and resources</li>
                <li>• Direct communication with instructors</li>
                <li>• Connect with classmates</li>
                <li>• Important announcements</li>
              </ul>
            </div>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors font-medium">
              <MessageCircle className="w-5 h-5" />
              Join WhatsApp Group
            </button>

            <p className="text-xs text-gray-500">
              You'll be added to the group within a few hours after clicking the
              button
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "classes":
        return renderClasses();
      case "courses":
        return renderCourses();
      case "payments":
        return renderPayments();
      case "whatsapp":
        return renderWhatsApp();
      default:
        return renderClasses();
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Mobile Header - Only show if no main navbar */}
      <div className="lg:hidden bg-gray-800 border-b border-gray-700 sticky top-0 z-30">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <h1 className="text-xl font-bold text-white">Dashboard</h1>
            {selectedCourse && (
              <div className="hidden sm:block">
                <span className="text-sm text-gray-400">•</span>
                <span className="text-sm text-blue-400 ml-2">
                  {selectedCourse.course.title}
                </span>
              </div>
            )}
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors text-gray-300 hover:text-white">
            {sidebarOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-72 bg-gray-800 border-r border-gray-700 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
          <div className="flex items-center justify-between p-4 border-b border-gray-700 lg:border-0">
            <h1 className="text-xl font-bold text-white">My Dashboard</h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 hover:bg-gray-700 rounded-lg transition-colors text-gray-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="p-4 space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                    activeTab === item.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "hover:bg-gray-700 text-gray-300 hover:text-white"
                  }`}>
                  <div className="flex items-center space-x-3">
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        activeTab === item.id
                          ? "bg-white/20 text-white"
                          : "bg-gray-600 text-gray-300"
                      }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Course selector in sidebar for mobile */}
          {enrollments.length > 1 && (
            <div className="p-4 border-t border-gray-700 lg:hidden">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Select Course:
              </label>
              <select
                value={selectedCourse?._id || ""}
                onChange={(e) => {
                  const course = enrollments.find(
                    (enr) => enr._id === e.target.value
                  );
                  if (course) handleCourseSelect(course);
                }}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                {enrollments.map((enrollment) => (
                  <option key={enrollment._id} value={enrollment._id}>
                    {enrollment.course.title}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          <div className="p-4 lg:p-8 max-w-7xl mx-auto">{renderContent()}</div>
        </div>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
