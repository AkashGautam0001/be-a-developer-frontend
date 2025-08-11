import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Package,
  Layers,
  Folder,
  FileUp,
  Truck,
  BarChart3,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Menu,
  LogOut,
} from "lucide-react";

// Custom color theme
const colors = {
  primary: "#1c5539", // Dark green
  secondary: "#63b044", // Light green
  accent: "#fdcc32", // Yellow
  white: "#ffffff",
  black: "#111111",
};

const Sidebar = ({ onToggleCollapse }) => {
  const location = useLocation();
  const [openItems, setOpenItems] = useState({});
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check for active route
  const isActive = (path) => location.pathname === path;

  const isGroupActive = (items) => {
    if (!items) return false;
    return items.some((item) => {
      if (item.path && isActive(item.path)) return true;
      if (item.subItems) return isGroupActive(item.subItems);
      return false;
    });
  };

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
      icon: <Layers size={20} />,
      path: "/admin/payment-pending",
    },
  ];

  // Filter menu items based on user role
  const filteredMenuItems = allMenuItems;

  const handleToggle = (text) => {
    setOpenItems((prev) => ({
      ...prev,
      [text]: !prev[text],
    }));
  };

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
            ? "bg-opacity-15 text-white font-medium relative overflow-hidden"
            : "text-black/80 hover:bg-opacity-10 hover:text-black"
        }`}
        style={{
          backgroundColor: active ? `${colors.primary}20` : "transparent",
          boxShadow: active ? "0 0 0 1px rgba(99, 176, 68, 0.15)" : "none",
        }}>
        {active && (
          <span
            className="absolute left-0 top-0 h-full w-1 rounded-r"
            style={{ backgroundColor: colors.accent }}
          />
        )}
        <span
          className={`${
            active ? "text-opacity-100" : "text-opacity-80"
          } transition-colors`}
          style={{ color: active ? colors.secondary : "" }}>
          {item.icon}
        </span>
        {!collapsed && (
          <span
            className="transition-colors font-medium"
            style={{ color: active ? colors.primary : "" }}>
            {item.text}
          </span>
        )}
      </Link>
    );
  };

  // Render menu group (with submenu)
  const renderMenuGroup = (item) => {
    const isOpen = openItems[item.text];
    const groupActive = isGroupActive(item.subItems);
    return (
      <div key={item.text} className="mb-1 font-heading">
        <button
          onClick={() => handleToggle(item.text)}
          className={`w-full flex justify-between items-center px-4 py-3 my-1 rounded-lg transition-all duration-200 ${
            groupActive
              ? "font-medium relative overflow-hidden"
              : "text-black/80 hover:bg-opacity-10"
          }`}
          style={{
            backgroundColor: groupActive
              ? `${colors.primary}15`
              : "transparent",
            boxShadow: groupActive
              ? "0 0 0 1px rgba(99, 176, 68, 0.15)"
              : "none",
          }}>
          {groupActive && (
            <span
              className="absolute left-0 top-0 h-full w-1 rounded-r"
              style={{ backgroundColor: colors.accent }}
            />
          )}
          <div className="flex items-center gap-3">
            <span
              className="transition-colors"
              style={{ color: groupActive ? colors.secondary : "" }}>
              {item.icon}
            </span>
            {!collapsed && (
              <span
                className="transition-colors font-medium text-wrap text-left"
                style={{ color: groupActive ? colors.primary : "" }}>
                {item.text}
              </span>
            )}
          </div>
          {!collapsed && (
            <span style={{ color: groupActive ? colors.primary : "" }}>
              {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </span>
          )}
        </button>
        {isOpen && !collapsed && (
          <div
            className="ml-9 pl-3 my-1 py-1 border-l"
            style={{ borderColor: `${colors.secondary}40` }}>
            {item.subItems.map((subItem) => (
              <Link
                to={subItem.path}
                key={subItem.text}
                className={`block px-3 py-2 my-1 rounded-md text-sm transition-all ${
                  isActive(subItem.path)
                    ? "font-medium"
                    : "text-black/70 hover:text-black"
                }`}
                style={{
                  backgroundColor: isActive(subItem.path)
                    ? `${colors.secondary}15`
                    : "transparent",
                  color: isActive(subItem.path) ? colors.primary : "",
                }}>
                {subItem.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-64"
      } bg-white flex flex-col h-screen transition-all duration-300 fixed font-sans`}
      style={{
        boxShadow: "0 0 20px rgba(0,0,0,0.05)",
        borderRight: "1px solid rgba(0,0,0,0.05)",
      }}>
      {/* Header */}
      <div
        className="sticky z-10 top-0 flex items-center p-3 border-b-2"
        style={{
          borderBottom: "1px solid rgba(0,0,0,0.05)",
        }}>
        {!collapsed && (
          <div className="ml-3 text-lg font-bold text-black font-body tracking-wide">
            BIZISUL
          </div>
        )}
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={toggleCollapse}
            className="text-black hover:text-black p-2 rounded-4xl border border-white/30 hover:border-white/50 transition-colors">
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>
      </div>
      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto py-6 px-3 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-300">
        <div className="space-y-1">
          {filteredMenuItems.map((item) =>
            item.subItems ? renderMenuGroup(item) : renderMenuItem(item)
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
