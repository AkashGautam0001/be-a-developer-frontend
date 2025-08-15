import React, { useState, useEffect } from "react";
import {
  Target,
  Compass,
  Briefcase,
  RefreshCw,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  Zap,
  Award,
  Brain,
  Code,
  TestTube,
  Bot,
  Shield,
  Layers,
  Database,
  Monitor,
  Settings,
  BookOpen,
  Star,
  Play,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowRight,
  Download,
  Video,
  FileText,
  Lightbulb,
  Building,
  GraduationCap,
  Rocket,
  Search,
} from "lucide-react";

const QAWebinar = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + 3);
      targetDate.setHours(23, 59, 59, 999);

      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);
  const enrollNow = () => {
    alert(
      "🎉 Redirecting to registration form...\n\nFor immediate enrollment, contact: 9540472951"
    );
  };

  const AnimatedBackground = () => (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900"></div>

      {/* Floating geometric shapes */}
      <div
        className="absolute top-10 left-5 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-white/10 to-white/5 rounded-full animate-bounce opacity-70"
        style={{ animationDelay: "0s", animationDuration: "6s" }}></div>
      <div
        className="absolute top-32 right-10 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-cyan-400/20 to-blue-400/10 rounded-full animate-bounce opacity-60"
        style={{ animationDelay: "2s", animationDuration: "8s" }}></div>
      <div
        className="absolute top-1/2 left-1/4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-green-400/20 to-teal-400/10 rounded-full animate-bounce opacity-50"
        style={{ animationDelay: "4s", animationDuration: "7s" }}></div>
      <div
        className="absolute bottom-32 right-1/4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-purple-400/15 to-indigo-400/5 rounded-full animate-bounce opacity-60"
        style={{ animationDelay: "1s", animationDuration: "9s" }}></div>
      <div
        className="absolute bottom-20 left-10 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-400/20 to-red-400/10 rounded-full animate-bounce opacity-70"
        style={{ animationDelay: "3s", animationDuration: "5s" }}></div>

      {/* Moving particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}></div>
        ))}
      </div>

      {/* Animated gradient waves */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-y-6 animate-pulse"
          style={{ animationDuration: "4s" }}></div>
        <div
          className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-transparent transform skew-y-3 animate-pulse"
          style={{ animationDelay: "2s", animationDuration: "6s" }}></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-8 sm:py-12 md:py-16">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-20 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Hero Text */}
            <div className="text-white order-2 lg:order-1 text-center lg:text-left">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide mb-4 sm:mb-6">
                <TestTube className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                QA Excellence Program
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Master Modern QA Testing
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  & Career Excellence
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl italic mb-6 sm:mb-8 text-blue-100 font-medium">
                "Quality is not an act, it's a habit - Elevate your QA career to
                the next level"
              </p>
              <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 text-blue-50 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Join the most comprehensive QA training program designed for
                modern software testing. Learn cutting-edge automation
                techniques, advanced testing methodologies, and career
                acceleration strategies from industry experts at JPR Technosoft.
              </p>

              {/* Key Benefits Preview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 max-w-2xl mx-auto lg:mx-0">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-4 sm:py-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-white">
                    Live Hands-on Training
                  </span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-4 sm:py-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-white">
                    Industry Certification
                  </span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-4 sm:py-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-white">
                    Career Guidance
                  </span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-4 sm:py-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-white">
                    Job Placement Support
                  </span>
                </div>
              </div>
            </div>

            {/* Registration Card */}
            <div className="bg-white/95 backdrop-blur-lg p-6 sm:p-8 lg:p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-none">
              <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide mb-4 sm:mb-6">
                <Target className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                Premium QA Webinar
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
                QA Career Mastery Program
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Transform your testing skills with advanced QA methodologies and
                automation frameworks
              </p>

              {/* Webinar Details */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 rounded-2xl mb-4 sm:mb-6 border border-blue-100">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="flex items-center justify-center">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2" />
                    <div>
                      <div className="text-xs sm:text-sm font-medium text-gray-600">
                        Date
                      </div>
                      <div className="text-sm sm:text-base font-bold text-gray-800">
                        Nov 25, 2024
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2" />
                    <div>
                      <div className="text-xs sm:text-sm font-medium text-gray-600">
                        Duration
                      </div>
                      <div className="text-sm sm:text-base font-bold text-gray-800">
                        3 Hours
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 sm:p-6 rounded-2xl text-center mb-4 sm:mb-6 shadow-lg">
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wide">
                    Registration Closes In:
                  </h3>
                </div>
                <div className="flex justify-around">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold">
                      {timeLeft.hours.toString().padStart(2, "0")}
                    </div>
                    <div className="text-xs uppercase tracking-wide mt-1">
                      Hours
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold">
                      {timeLeft.minutes.toString().padStart(2, "0")}
                    </div>
                    <div className="text-xs uppercase tracking-wide mt-1">
                      Minutes
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold">
                      {timeLeft.seconds.toString().padStart(2, "0")}
                    </div>
                    <div className="text-xs uppercase tracking-wide mt-1">
                      Seconds
                    </div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm mt-3">
                  Limited seats - Only 50 professionals!
                </p>
              </div>

              <button
                onClick={enrollNow}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-full font-bold text-base sm:text-lg uppercase tracking-wide shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group mb-4">
                <div className="flex items-center justify-center">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Enroll Now - Free
                </div>
                <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              </button>

              <div className="text-center text-xs sm:text-sm text-gray-600 space-y-2">
                <div className="flex items-center justify-center space-x-4">
                  <span className="flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                    <span>Instant Access</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                    <span>Certificate</span>
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <span className="flex items-center space-x-1">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                    <span>Live QA Session</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Download className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                    <span>Resources</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              About JPR Technosoft
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Leading the way in software quality assurance training and
              consulting for over a decade
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center mb-12 lg:mb-16">
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-3xl border border-blue-100">
                <Building className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                  Our Mission
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  To empower QA professionals with cutting-edge skills,
                  methodologies, and tools that enable them to excel in their
                  careers and contribute to building higher quality software
                  products.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 sm:p-8 rounded-3xl border border-purple-100">
                <Target className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600 mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                  Our Vision
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  To be the premier destination for QA education and career
                  development, creating a community of world-class quality
                  assurance professionals who drive innovation in software
                  testing.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 sm:p-8 rounded-3xl shadow-lg">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-3">
                  13+
                </div>
                <div className="text-sm sm:text-base lg:text-lg font-semibold">
                  Years of Excellence
                </div>
              </div>
              <div className="text-center bg-gradient-to-br from-green-500 to-green-600 text-white p-6 sm:p-8 rounded-3xl shadow-lg">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-3">
                  500+
                </div>
                <div className="text-sm sm:text-base lg:text-lg font-semibold">
                  QA Professionals Trained
                </div>
              </div>
              <div className="text-center bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 sm:p-8 rounded-3xl shadow-lg">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-3">
                  95%
                </div>
                <div className="text-sm sm:text-base lg:text-lg font-semibold">
                  Job Placement Rate
                </div>
              </div>
              <div className="text-center bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 sm:p-8 rounded-3xl shadow-lg">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-3">
                  50+
                </div>
                <div className="text-sm sm:text-base lg:text-lg font-semibold">
                  Corporate Clients
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              Comprehensive QA Training Curriculum
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Master every aspect of modern software testing with our
              industry-leading curriculum designed by experts with decades of
              experience
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Manual Testing Fundamentals */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-blue-500 group">
              <TestTube className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">
                Manual Testing Mastery
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Complete foundation in manual testing methodologies, test case
                design, and execution strategies.
              </p>
              <ul className="text-xs sm:text-sm text-gray-500 space-y-1">
                <li>• Test Planning & Strategy</li>
                <li>• Test Case Design Techniques</li>
                <li>• Defect Management</li>
                <li>• Risk-Based Testing</li>
              </ul>
            </div>

            {/* Automation Testing */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-green-500 group">
              <Code className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">
                Automation Excellence
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Advanced automation frameworks using Selenium, TestNG, and
                modern testing tools.
              </p>
              <ul className="text-xs sm:text-sm text-gray-500 space-y-1">
                <li>• Selenium WebDriver</li>
                <li>• TestNG & JUnit</li>
                <li>• Page Object Model</li>
                <li>• CI/CD Integration</li>
              </ul>
            </div>

            {/* Performance Testing */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-purple-500 group">
              <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">
                Performance Testing
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Load, stress, and performance testing using JMeter and modern
                performance tools.
              </p>
              <ul className="text-xs sm:text-sm text-gray-500 space-y-1">
                <li>• JMeter Proficiency</li>
                <li>• Load Testing Strategy</li>
                <li>• Performance Monitoring</li>
                <li>• Bottleneck Analysis</li>
              </ul>
            </div>

            {/* API Testing */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-orange-500 group">
              <Database className="w-10 h-10 sm:w-12 sm:h-12 text-orange-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">
                API Testing
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Comprehensive API testing with REST, SOAP, and GraphQL using
                Postman and RestAssured.
              </p>
              <ul className="text-xs sm:text-sm text-gray-500 space-y-1">
                <li>• REST API Testing</li>
                <li>• Postman Mastery</li>
                <li>• RestAssured Framework</li>
                <li>• API Security Testing</li>
              </ul>
            </div>

            {/* Mobile Testing */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-red-500 group">
              <Monitor className="w-10 h-10 sm:w-12 sm:h-12 text-red-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">
                Mobile Testing
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                iOS and Android testing strategies, tools, and best practices
                for mobile applications.
              </p>
              <ul className="text-xs sm:text-sm text-gray-500 space-y-1">
                <li>• Appium Framework</li>
                <li>• Device Testing</li>
                <li>• Mobile Automation</li>
                <li>• App Store Guidelines</li>
              </ul>
            </div>

            {/* Security Testing */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-indigo-500 group">
              <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">
                Security Testing
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Web application security testing, vulnerability assessment, and
                security best practices.
              </p>
              <ul className="text-xs sm:text-sm text-gray-500 space-y-1">
                <li>• OWASP Top 10</li>
                <li>• Vulnerability Scanning</li>
                <li>• Penetration Testing</li>
                <li>• Security Automation</li>
              </ul>
            </div>

            {/* Test Management */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-cyan-500 group">
              <Settings className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">
                Test Management
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Advanced test management using JIRA, TestRail, and modern
                project management methodologies.
              </p>
              <ul className="text-xs sm:text-sm text-gray-500 space-y-1">
                <li>• Test Planning & Estimation</li>
                <li>• JIRA Integration</li>
                <li>• TestRail Management</li>
                <li>• Agile/Scrum Processes</li>
              </ul>
            </div>

            {/* Career Development */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-pink-500 group">
              <Rocket className="w-10 h-10 sm:w-12 sm:h-12 text-pink-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">
                Career Advancement
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Professional development, interview preparation, and career
                growth strategies for QA professionals.
              </p>
              <ul className="text-xs sm:text-sm text-gray-500 space-y-1">
                <li>• Resume Building</li>
                <li>• Interview Preparation</li>
                <li>• Industry Networking</li>
                <li>• Salary Negotiation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              Learn from Industry Experts
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our instructors are seasoned professionals with decades of
              real-world QA experience
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-12 lg:mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-3xl text-center shadow-lg border border-blue-100">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
                15+ Years Experience
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Expert instructors with extensive industry experience across
                various domains and technologies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 sm:p-8 rounded-3xl text-center shadow-lg border border-green-100">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
                Certified Trainers
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Industry-certified professionals with proven track records in
                training and mentoring QA teams.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 sm:p-8 rounded-3xl text-center shadow-lg border border-purple-100">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
                Personalized Mentorship
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                One-on-one guidance and career counseling to help you achieve
                your professional goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Webinar Agenda */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
              Webinar Agenda
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              A comprehensive 3-hour session covering the latest trends and
              opportunities in QA testing
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/20">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                      Session 1: QA Industry Overview (45 min)
                    </h3>
                    <ul className="text-sm sm:text-base text-blue-100 space-y-1 sm:space-y-2">
                      <li>• Current market trends in software testing</li>
                      <li>• Career opportunities and growth paths</li>
                      <li>• Salary benchmarks and expectations</li>
                      <li>• Skills gap analysis and demand</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/20">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="bg-gradient-to-br from-blue-400 to-cyan-500 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                      Session 2: Modern Testing Techniques (60 min)
                    </h3>
                    <ul className="text-sm sm:text-base text-blue-100 space-y-1 sm:space-y-2">
                      <li>• AI-powered testing approaches</li>
                      <li>• Shift-left and shift-right testing</li>
                      <li>• DevOps integration strategies</li>
                      <li>• Cloud-based testing solutions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/20">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="bg-gradient-to-br from-green-400 to-emerald-500 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                      Session 3: Career Mastery Strategies (60 min)
                    </h3>
                    <ul className="text-sm sm:text-base text-blue-100 space-y-1 sm:space-y-2">
                      <li>• Building a standout QA portfolio</li>
                      <li>• Interview preparation and techniques</li>
                      <li>• Networking and professional branding</li>
                      <li>• Freelancing and consulting opportunities</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/20">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="bg-gradient-to-br from-purple-400 to-pink-500 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                      Session 4: Live Q&A & Networking (15 min)
                    </h3>
                    <ul className="text-sm sm:text-base text-blue-100 space-y-1 sm:space-y-2">
                      <li>• Interactive Q&A with experts</li>
                      <li>• Career guidance and advice</li>
                      <li>• Networking opportunities</li>
                      <li>• Resource sharing and takeaways</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              Success Stories
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from our alumni who have transformed their careers with our
              QA training programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed italic">
                "The comprehensive curriculum and hands-on approach at JPR
                Technosoft completely transformed my testing skills. Within 3
                months of completion, I landed a senior QA role with a 40%
                salary increase!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white font-bold text-sm sm:text-base">
                    PK
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm sm:text-base">
                    Priya Kumari
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Senior QA Engineer at TechCorp
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed italic">
                "The automation testing modules were incredibly detailed and
                practical. The instructors' industry experience really showed.
                I'm now leading automation initiatives at my company!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white font-bold text-sm sm:text-base">
                    RS
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm sm:text-base">
                    Rajesh Singh
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    QA Automation Lead at InnovateTech
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed italic">
                "From manual testing to performance testing expert - this
                program covered everything! The career guidance helped me
                transition into a leadership role. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white font-bold text-sm sm:text-base">
                    AM
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm sm:text-base">
                    Anjali Mehta
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    QA Manager at GlobalSoft
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Registration */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Transform Your QA Career?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8">
              Join thousands of professionals who have accelerated their careers
              with our comprehensive QA training programs
            </p>

            <button
              onClick={enrollNow}
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white py-4 sm:py-5 px-8 sm:px-12 rounded-full font-bold text-lg sm:text-xl uppercase tracking-wide shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 mb-8 sm:mb-12">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              Register for Free Webinar
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3" />
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-sm sm:text-base">
                        Call Us
                      </div>
                      <div className="text-blue-100 text-sm sm:text-base">
                        +91 9540472951
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-sm sm:text-base">
                        Email Us
                      </div>
                      <div className="text-blue-100 text-sm sm:text-base">
                        info@jprtechnosoft.com
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-sm sm:text-base">
                        Visit Website
                      </div>
                      <div className="text-blue-100 text-sm sm:text-base">
                        www.jprtechnosoft.com
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-sm sm:text-base">
                        Office Location
                      </div>
                      <div className="text-blue-100 text-sm sm:text-base">
                        Sector 63, Noida
                        <br />
                        Uttar Pradesh, India
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Benefits */}
            <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/20">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                What You Get
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    Comprehensive 6-month training program
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    Hands-on projects and real-world scenarios
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    Industry-recognized certification
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    100% job placement assistance
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    Lifetime access to course materials
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    Personalized career mentoring
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    Alumni network and community support
                  </span>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl border border-yellow-400/30">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                  <span className="font-bold text-sm sm:text-base">
                    Special Offer
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-blue-100">
                  Register now and get <strong>20% early bird discount</strong>{" "}
                  on our full QA certification program!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                JPR Technosoft
              </h3>
              <p className="text-sm sm:text-base text-gray-400">
                Empowering QA Professionals Since 2010
              </p>
            </div>

            <div className="border-t border-gray-700 pt-4 sm:pt-6">
              <p className="text-xs sm:text-sm text-gray-500">
                © 2024 JPR Technosoft. All rights reserved. |
                <span className="ml-1">
                  Transforming careers through quality education.
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QAWebinar;
