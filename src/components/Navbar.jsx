import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import axiosInstance from "../utils/axios";
import { BookOpen, LogOut, User } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  console.log("Navbar user:", user);

  const handleLogout = async () => {
    try {
      await axiosInstance.post("/auth/logout");
      logout();
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-600">
              CourseHub
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  to="/courses"
                  className="text-gray-700 hover:text-blue-600 flex items-center space-x-1">
                  <BookOpen className="h-4 w-4" />
                  <span>Courses</span>
                </Link>
                <Link
                  to="/dashboard"
                  className="text-gray-700 hover:text-blue-600 flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
                <span className="text-gray-700">Hi, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-red-600 hover:text-red-700">
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/courses"
                  className="text-gray-700 hover:text-blue-600">
                  Courses
                </Link>
                <Link
                  to="/login"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
