import React, { useState, useEffect } from "react";
import {
  Clock,
  Star,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Code,
  Zap,
  Trophy,
  BookOpen,
  Play,
  Shield,
  Download,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Smartphone,
  Layers,
  Globe,
  Database,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import AboutJprTechnosoft from "../../components/AboutJprTechnosoft";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";

export default function FlutterCourseLanding() {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState({});

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

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToEnroll = () => {
    document
      .getElementById("enroll-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleEnroll = () => {
    navigate("/course/flutter-development-mastery-course");
  };

  const features = [
    "Flutter Fundamentals & Dart Programming",
    "Widget Architecture & Custom UI Design",
    "State Management (Provider, Bloc, Riverpod)",
    "Navigation & Routing Strategies",
    "Firebase Integration & Cloud Services",
    "REST API Integration & HTTP Requests",
    "Local Database with SQLite & Hive",
    "App Store & Play Store Deployment",
    "Performance Optimization & Testing",
    "Cross-platform Development Best Practices",
    "Animation & Custom Paint Widgets",
    "Platform-specific Code Integration",
  ];

  const experts = [
    {
      title: "Senior Flutter Engineer",
      company: "Ex-GOOGLE",
      experience: "6+ Years",
      icon: Smartphone,
      gradient: "from-blue-500 to-cyan-500",
      description:
        "Expert in Flutter architecture, performance optimization, and Google Play Console best practices",
      color: "text-cyan-400",
    },
    {
      title: "Mobile App Architect",
      company: "Ex-MICROSOFT",
      experience: "5+ Years",
      icon: Layers,
      gradient: "from-purple-500 to-pink-500",
      description:
        "Specializes in cross-platform development, state management, and enterprise mobile solutions",
      color: "text-purple-400",
    },
    {
      title: "Lead Flutter Developer",
      company: "Ex-UBER",
      experience: "4+ Years",
      icon: Globe,
      gradient: "from-green-500 to-teal-500",
      description:
        "Expert in Flutter ecosystem, real-time apps, and scalable mobile architecture",
      color: "text-green-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-80 sm:w-96 h-80 sm:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/3 w-48 sm:w-64 h-48 sm:h-64 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 left-1/4 w-40 sm:w-56 h-40 sm:h-56 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative z-10 px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Countdown Timer */}
          <div className="bg-black/30 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 backdrop-blur-3xl shadow-2xl mx-4 sm:mx-0">
            <div className="flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-orange-400 font-bold">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-center">Early Bird Ends In:</span>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div
                  key={unit}
                  className="text-center bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 min-w-16 sm:min-w-24">
                  <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    {value.toString().padStart(2, "0")}
                  </span>
                  <span className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">
                    {unit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <h2
            className={`text-3xl sm:text-5xl md:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight transition-all duration-1000 delay-200 ${
              isVisible.hero
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}>
            Master
            <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              {" "}
              Flutter
            </span>
            <br />
            <span className="text-2xl sm:text-4xl md:text-6xl">
              Build Amazing Mobile Apps
            </span>
          </h2>

          <p
            className={`text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4 transition-all duration-1000 delay-400 ${
              isVisible.hero
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}>
            Learn from industry veterans from{" "}
            <span className="text-cyan-400 font-semibold">GOOGLE</span>,
            <span className="text-purple-400 font-semibold"> MICROSOFT</span>,
            and
            <span className="text-green-400 font-semibold"> UBER</span> in this
            comprehensive Flutter masterclass with{" "}
            <span className="text-yellow-400 font-semibold">15+ years</span> of
            combined mobile development expertise
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16 transition-all duration-1000 delay-600 ${
              isVisible.hero
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}>
            <button
              onClick={scrollToEnroll}
              className="group bg-gradient-to-r from-blue-500 to-cyan-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 w-full sm:w-auto">
              <span className="flex items-center justify-center space-x-2">
                <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
                <span>Start Learning Flutter</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-800 ${
              isVisible.hero
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400">
                15+
              </div>
              <div className="text-gray-400 text-sm sm:text-base">
                Years Experience
              </div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400">
                3
              </div>
              <div className="text-gray-400 text-sm sm:text-base">
                Expert Instructors
              </div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-green-400">
                12
              </div>
              <div className="text-gray-400 text-sm sm:text-base">
                Real Projects
              </div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400">
                24/7
              </div>
              <div className="text-gray-400 text-sm sm:text-base">
                Support Access
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section
        id="experts"
        className="relative z-10 px-4 sm:px-6 py-16 sm:py-20 bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <h3
            className={`text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible.experts
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}>
            Learn from{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Flutter Experts
            </span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {experts.map((expert, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  isVisible.experts
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}>
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${expert.gradient} rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:animate-pulse group-hover:shadow-lg group-hover:shadow-current/50`}>
                  <expert.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-center">
                  <h4 className="text-xl sm:text-2xl font-bold mb-2">
                    {expert.title}
                  </h4>
                  <p
                    className={`${expert.color} font-semibold mb-4 text-sm sm:text-base`}>
                    {expert.company} | {expert.experience}
                  </p>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {expert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section
        id="curriculum"
        className="relative z-10 px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <h3
            className={`text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible.curriculum
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}>
            What You'll{" "}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Master
            </span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className={`flex items-start space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-blue-500/30 group ${
                  isVisible.curriculum
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}>
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 mt-0.5 group-hover:animate-pulse" />
                <span className="text-gray-200 text-sm sm:text-base leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section
        id="highlights"
        className="relative z-10 px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-r from-blue-600/10 to-teal-600/10 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <h3
            className={`text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible.highlights
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}>
            Course{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Highlights
            </span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Code,
                title: "12 Real Projects",
                desc: "Build production-ready apps",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Database,
                title: "Backend Integration",
                desc: "Firebase & REST APIs",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Smartphone,
                title: "Cross Platform",
                desc: "iOS & Android deployment",
                color: "from-green-500 to-teal-500",
              },
              {
                icon: Zap,
                title: "Performance Focus",
                desc: "Optimization techniques",
                color: "from-yellow-500 to-orange-500",
              },
            ].map((highlight, index) => (
              <div
                key={index}
                className={`text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 group ${
                  isVisible.highlights
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}>
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${highlight.color} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:animate-bounce`}>
                  <highlight.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold mb-2 text-white">
                  {highlight.title}
                </h4>
                <p className="text-gray-300 text-sm sm:text-base">
                  {highlight.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Features */}
      <section
        id="bonus"
        className="relative z-10 px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-r from-cyan-600/10 to-purple-600/10 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <h3
            className={`text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible.bonus
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Bonus
            </span>{" "}
            Features
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Shield,
                title: "Lifetime Access",
                desc: "Course + future updates",
              },
              {
                icon: Download,
                title: "Complete Source Code",
                desc: "All 12 project files",
              },
              {
                icon: Users,
                title: "Community Access",
                desc: "Private Discord server",
              },
              {
                icon: Calendar,
                title: "Monthly Live Sessions",
                desc: "Q&A with instructors",
              },
            ].map((bonus, index) => (
              <div
                key={index}
                className={`text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 group ${
                  isVisible.bonus
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:animate-bounce">
                  <bonus.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold mb-2 text-yellow-400">
                  {bonus.title}
                </h4>
                <p className="text-gray-300 text-sm sm:text-base">
                  {bonus.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section
        id="enroll-section"
        className="relative z-10 px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-r from-blue-600/20 to-teal-600/20 backdrop-blur-sm border-y border-white/20">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`inline-flex items-center space-x-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${
              isVisible["enroll-section"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}>
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
            <span className="text-orange-300 font-medium text-sm sm:text-base">
              Early Bird Special - 50% Off
            </span>
          </div>

          <h3
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 delay-200 ${
              isVisible["enroll-section"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}>
            Ready to Build Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Flutter Empire?
            </span>
          </h3>

          <p
            className={`text-lg sm:text-xl text-gray-300 mb-8 px-4 transition-all duration-1000 delay-400 ${
              isVisible["enroll-section"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}>
            Join thousands of developers who have built successful mobile apps
            with Flutter
          </p>

          <div
            className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 mb-8 transition-all duration-1000 delay-600 ${
              isVisible["enroll-section"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
              <span className="text-xl sm:text-2xl font-bold">
                Course Details
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 text-left">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-cyan-400 mr-3" />
                  <div>
                    <span className="text-cyan-400 font-semibold">
                      Duration:
                    </span>
                    <span className="text-gray-300 ml-2 block sm:inline">
                      8 Weeks Intensive
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Play className="w-5 h-5 text-purple-400 mr-3" />
                  <div>
                    <span className="text-purple-400 font-semibold">
                      Format:
                    </span>
                    <span className="text-gray-300 ml-2 block sm:inline">
                      Video Lessons + Live Coding
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-yellow-400 mr-3" />
                  <div>
                    <span className="text-yellow-400 font-semibold">
                      Certificate:
                    </span>
                    <span className="text-gray-300 ml-2 block sm:inline">
                      Flutter Developer Certificate
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-green-400 mr-3" />
                  <div>
                    <span className="text-green-400 font-semibold">
                      Support:
                    </span>
                    <span className="text-gray-300 ml-2 block sm:inline">
                      1-on-1 Mentorship
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 transition-all duration-1000 delay-800 ${
              isVisible["enroll-section"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}>
            <button
              onClick={handleEnroll}
              className={`group bg-gradient-to-r from-cyan-500 to-purple-600 px-8 sm:px-12 py-4 sm:py-6 rounded-2xl text-xl sm:text-2xl font-bold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 mb-6 w-full sm:w-auto ${
                isVisible["enroll-section"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "800ms" }}>
              <span className="flex items-center justify-center space-x-3">
                <Zap className="w-5 h-5 sm:w-7 sm:h-7 group-hover:animate-pulse" />
                <span>ENROLL NOW</span>
                <ArrowRight className="w-5 h-5 sm:w-7 sm:h-7 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
          </div>

          <p
            className={`text-xs sm:text-sm text-gray-400 px-4 transition-all duration-1000 delay-1000 ${
              isVisible["enroll-section"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}>
            🔒 Secure enrollment• Limited early bird spots
          </p>
        </div>
      </section>

      <AboutJprTechnosoft />
      <ContactSection />
      <Footer />
    </div>
  );
}
