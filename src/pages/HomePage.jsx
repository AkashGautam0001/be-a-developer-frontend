import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
            Learn New Skills with
            <span className="text-blue-600"> Expert Courses</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of students learning from industry experts. Choose
            from our wide range of courses and start your learning journey
            today.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <button
              onClick={() => navigate("/courses")}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
              Explore Courses
            </button>
            <button
              onClick={() => navigate("/login")}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition duration-300">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
