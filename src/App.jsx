import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import RegistrationPage from "./pages/RegistrationPage";
import PaymentConfirmationPage from "./pages/PaymentConfirmationPage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import AdminLogin from "./pages/Admin/AdminLogin";
import Layout from "./components/Layout";
import ReactNative from "./pages/course_pages/ReactNative";
import FlutterCourseLanding from "./pages/course_pages/Flutter";
import GenAIWebinarLanding from "./pages/course_pages/GenAi";
import JavaSpringBootWebinar from "./pages/course_pages/Java";
import QAWebinar from "./pages/course_pages/QApage";
import ReactWebinarLanding from "./pages/course_pages/React";
import UIUXCourseLanding from "./pages/course_pages/UiUxPage";
import DevOpsCourseLanding from "./pages/course_pages/DevOops";
import UserDashboard from "./pages/UserDashboard";
import { Toaster } from "react-hot-toast";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return user ? children : <Navigate to="/login" />;
};

const AdminProtectedRoute = ({ children }) => {
  const { admin, loading } = useAuth();
  console.log("admin", admin);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return admin ? children : <Navigate to="/admin-login" />;
};

// Main App Component
const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#27272a",
              color: "#fff",
              border: "1px solid #3f3f46",
            },
            success: {
              iconTheme: {
                primary: "#10b981",
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route
              path="/courses/devops-mastery-bootcamp"
              element={<DevOpsCourseLanding />}
            />
            <Route
              path="/courses/flutter-development-mastery-course"
              element={<FlutterCourseLanding />}
            />
            <Route
              path="/courses/genai-using-python-mastery-course"
              element={<GenAIWebinarLanding />}
            />
            <Route
              path="/courses/java-spring-boot-master-course"
              element={<JavaSpringBootWebinar />}
            />
            <Route
              path="/courses/qa-testing-master-course"
              element={<QAWebinar />}
            />
            <Route
              path="/courses/react-js-master-course"
              element={<ReactWebinarLanding />}
            />
            <Route
              path="/courses/react-native-master-course"
              element={<ReactNative />}
            />
            <Route
              path="/courses/ui-ux-design-master-course"
              element={<UIUXCourseLanding />}
            />

            <Route path="/course/:slug" element={<CourseDetailsPage />} />
            <Route path="/register/:slug" element={<RegistrationPage />} />
            <Route
              path="/payment-confirmation/:slug"
              element={<PaymentConfirmationPage />}
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  {/* <Dashboard /> */}
                  <Navbar />
                  <UserDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route
              path="/admin/*"
              element={
                <AdminProtectedRoute>
                  <Layout />
                </AdminProtectedRoute>
              }
            />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
