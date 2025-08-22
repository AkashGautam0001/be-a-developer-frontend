import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Layers,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const Sidebar = ({ onToggleCollapse }) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check for active route
  const isActive = (path) => location.pathname === path;

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setCollapsed(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Main navigation items with icons
  const allMenuItems = [
    {
      text: "Dashboard",
      path: "/admin/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      text: "Enrollments",
      path: "/admin/enrollments",
      icon: <Users size={20} />,
    },
    {
      text: "Courses",
      path: "/admin/courses",
      icon: <ShoppingCart size={20} />,
    },
    {
      text: "Payment Pending",
      path: "/admin/payment-pending",
      icon: <Layers size={20} />,
    },
  ];

  const toggleCollapse = () => {
    const newCollapsedState = !collapsed;
    setCollapsed(newCollapsedState);
    if (onToggleCollapse) {
      onToggleCollapse(newCollapsedState);
    }
  };

  // Render single menu item
  const renderMenuItem = (item) => {
    const active = isActive(item.path);
    return (
      <Link
        to={item.path}
        key={item.text}
        className={`flex font-heading items-center gap-3 px-4 py-3 my-1 rounded-lg transition-all duration-200 ${
          active
            ? "bg-zinc-800 text-green-400 font-medium relative overflow-hidden"
            : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
        }`}>
        {active && (
          <span className="absolute left-0 top-0 h-full w-1 rounded-r bg-yellow-400" />
        )}
        <span className={active ? "text-green-400" : "text-zinc-400"}>
          {item.icon}
        </span>
        {!collapsed && (
          <span className={active ? "text-green-400" : "text-zinc-200"}>
            {item.text}
          </span>
        )}
      </Link>
    );
  };

  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-64"
      } bg-zinc-900 flex flex-col h-screen transition-all duration-300 fixed font-sans`}>
      {/* Header */}
      <div className="sticky z-10 top-0 flex items-center p-3 border-b border-zinc-800">
        {!collapsed && (
          <div className="ml-3 text-lg font-bold text-white font-body tracking-wide">
            JPR Technosoft
          </div>
        )}
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={toggleCollapse}
            className="text-zinc-400 hover:text-zinc-200 p-2 rounded-4xl border border-zinc-800 hover:border-zinc-700 transition-colors">
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto py-6 px-3 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-zinc-700">
        <div className="space-y-1">
          {allMenuItems.map((item) => renderMenuItem(item))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
