import { IndianRupee, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EnrollButton = ({ route, className = "", variant = "primary" }) => {
  const navigate = useNavigate();

  const enrollNow = () => {
    navigate(route);
  };

  const baseClasses =
    "group relative overflow-hidden font-bold uppercase tracking-wide transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-2";

  const variantClasses =
    variant === "primary"
      ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
      : "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white";

  return (
    <button
      onClick={enrollNow}
      className={`${baseClasses} ${variantClasses} ${className} cursor-pointer`}>
      <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
      <div className="flex items-center gap-2 relative z-10">
        <Rocket className="w-5 h-5" />
        <div>
          <div>Enroll Now</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center"><IndianRupee className="w-4 h-4" />
          <div>99</div>
          </div>
          <span> FREE</span>
        </div>
      </div>
    </button>
  );
};

export default EnrollButton;
