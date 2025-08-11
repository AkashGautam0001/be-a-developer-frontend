import React, { useState } from "react";
import Sidebar from "./Sidebar";
import AppRoutes from "../routes/AppRoutes";

const Layout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // This function will be passed to Sidebar component
  const handleSidebarToggle = (collapsed) => {
    setSidebarCollapsed(collapsed);
  };

  return (
    <div className="flex flex-row h-screen bg-background">
      <Sidebar onToggleCollapse={handleSidebarToggle} />
      <div
        className={`flex-1 overflow-hidden transition-all duration-300 font-heading ${
          sidebarCollapsed ? "ml-20" : "ml-64"
        }`}>
        <div className="overflow-y-auto h-[calc(100vh-57px)]">
          <AppRoutes />
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Layout;
