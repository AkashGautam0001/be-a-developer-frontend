import { Menu } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

// Header Component
const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const { admin } = useAuth();

  return (
    <header className="bg-white shadow-sm lg:static lg:overflow-y-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
          <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
            <div className="flex-shrink-0 flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 rounded-md text-gray-400 lg:hidden">
                <Menu size={24} />
              </button>
            </div>
          </div>

          <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
            <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
              <div className="w-full">
                <h1 className="text-lg font-semibold text-gray-900">
                  Welcome back, {admin?.username}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
