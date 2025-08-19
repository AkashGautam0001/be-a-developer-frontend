import React, { useState } from "react";
import Sidebar from "./Sidebar";
import AppRoutes from "../routes/AppRoutes";

const Layout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSidebarToggle = (collapsed) => {
    setSidebarCollapsed(collapsed);
  };

  return (
    <div className="flex flex-row h-screen bg-zinc-900 text-white">
      <Sidebar onToggleCollapse={handleSidebarToggle} />
      <div
        className={`flex-1 overflow-hidden transition-all duration-300 font-heading ${
          sidebarCollapsed ? "ml-20" : "ml-64"
        }`}>
        <div className="overflow-y-auto h-[calc(100vh)]  bg-zinc-800">
          <AppRoutes />
        </div>
      </div>
    </div>
  );
};

export default Layout;
