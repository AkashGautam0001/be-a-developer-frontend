import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import axiosInstance from "../utils/axios";
import { BookOpen, LogOut, User, Menu, X, User2 } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await axiosInstance.post("/auth/logout");
      logout();
      navigate("/");
      setMobileMenuOpen(false);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-800 relative">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors outline-none"
              onClick={closeMobileMenu}>
              Be a Developer
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {user ? (
              <>
                <Link
                  to="/courses"
                  className="text-gray-300 hover:text-blue-400 flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  <BookOpen className="h-4 w-4" />
                  <span>Courses</span>
                </Link>
                <Link
                  to="/dashboard"
                  className="text-gray-300 hover:text-blue-400 flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  <User className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
                <div className="text-gray-300 px-3 py-2 border-l border-gray-700 ml-2">
                  Hi,{" "}
                  <span className="text-blue-400 font-medium">{user.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-red-400 hover:text-red-300 px-3 py-2 rounded-lg hover:bg-red-500/10 transition-colors ml-2">
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/courses"
                  className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  Courses
                </Link>
                <Link
                  to="/login"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Login
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-blue-400 p-2 rounded-lg hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu">
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <User2 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-gray-900 border-t border-gray-800 shadow-xl z-50 transform transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-2 invisible"
        }`}>
        <div className="px-4 py-3 space-y-1">
          {user ? (
            <>
              {/* User greeting */}
              <div className="px-4 py-3 text-gray-300 border-b border-gray-800 mb-2">
                <span className="text-sm text-gray-400">Welcome back,</span>
                <div className="text-blue-400 font-medium text-lg">
                  {user.name}
                </div>
              </div>

              <Link
                to="/courses"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 hover:bg-gray-800 px-4 py-3 rounded-lg transition-colors"
                onClick={closeMobileMenu}>
                <BookOpen className="h-5 w-5" />
                <span className="font-medium">Courses</span>
              </Link>

              <Link
                to="/dashboard"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 hover:bg-gray-800 px-4 py-3 rounded-lg transition-colors"
                onClick={closeMobileMenu}>
                <User className="h-5 w-5" />
                <span className="font-medium">Dashboard</span>
              </Link>

              <div className="pt-2 border-t border-gray-800 mt-2">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 px-4 py-3 rounded-lg transition-colors text-left">
                  <LogOut className="h-5 w-5" />
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/courses"
                className="block text-gray-300 hover:text-blue-400 hover:bg-gray-800 px-4 py-3 rounded-lg transition-colors font-medium"
                onClick={closeMobileMenu}>
                Courses
              </Link>

              <div className="pt-2">
                <Link
                  to="/login"
                  className="block bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
                  onClick={closeMobileMenu}>
                  Login
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMobileMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
