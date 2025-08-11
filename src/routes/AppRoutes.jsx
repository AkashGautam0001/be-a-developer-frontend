import React, { Suspense } from "react";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import Enrollments from "../components/Enrollments";
import Courses from "../components/Courses";
import PaymentPending from "../components/PaymentPending";
import MonthlyReminders from "../components/MonthlyReminders";
import { Navigate, Route, Routes } from "react-router-dom";
const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/enrollments" element={<Enrollments />} />
        <Route path="/courses" element={<Courses />} />
        {/* <Route path="/courses/:slug/classes" element={<Classes />} /> */}
        <Route path="/payment-pending" element={<PaymentPending />} />
        <Route path="/monthly-reminders" element={<MonthlyReminders />} />
        <Route
          path="/admin"
          element={<Navigate to="/admin/dashboard" replace />}
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
