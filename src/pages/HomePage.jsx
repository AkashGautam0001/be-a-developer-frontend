import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-black flex flex-col justify-center px-6 py-12">
      <div className="max-w-6xl w-full mx-auto text-center">
        {/* Glass Card */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Branding */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Be A <span className="text-blue-400">Developer</span>
          </h1>
          <p className="text-blue-300 font-medium">Powered By</p>
          <p className="text-blue-400 text-xl md:text-2xl mt-1">
            JPR Technosoft
          </p>

          {/* Hero Text */}
          <h2 className="mt-8 text-2xl md:text-5xl font-bold text-white leading-snug">
            Learn New Skills with{" "}
            <span className="text-blue-400">Expert-Led Courses</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-blue-200 max-w-2xl mx-auto">
            Join thousands of students learning from industry experts. Choose
            from our wide range of courses and start your journey to become a
            skilled developer today.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate("/courses")}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold 
              hover:bg-blue-500 transition duration-300 shadow-lg transform hover:scale-105 w-full sm:w-auto">
              Explore Courses
            </button>
            <button
              onClick={() => navigate("/login")}
              className="border border-blue-400 text-blue-300 px-6 py-3 rounded-xl text-lg font-semibold 
              hover:bg-blue-800 hover:text-white transition duration-300 shadow-lg transform hover:scale-105 w-full sm:w-auto">
              Login / Sign Up
            </button>
          </div>

          {/* Tagline */}
          <p className="mt-10 text-blue-300 text-sm">
            🚀 Start your journey in web & app development with us
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
