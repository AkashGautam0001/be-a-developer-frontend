import React, { useState, useEffect } from "react";
import {
  Clock,
  Star,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Palette,
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
  Figma,
  Layers,
  Eye,
  MousePointer,
  Pen,
  Grid,
  Target,
  Lightbulb,
} from "lucide-react";
import AboutJprTechnosoft from "../../components/AboutJprTechnosoft";
import Footer from "../../components/Footer";
import ContactSection from "../../components/ContactSection";
import EnrollButton from "../../components/EnrollButton";

export default function UIUXCourseLanding() {
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
    alert(
      "🎉 Redirecting to registration form...\n\nContact: info@designmastery.com"
    );
  };

  const features = [
    "Design Thinking & User Research",
    "Wireframing & Prototyping Fundamentals",
    "User Interface Design Principles",
    "User Experience & Usability Testing",
    "Figma & Adobe Creative Suite Mastery",
    "Information Architecture & Navigation",
    "Color Theory & Typography Design",
    "Mobile & Responsive Design Patterns",
    "Design Systems & Component Libraries",
    "Portfolio Development & Presentation",
    "Client Communication & Design Handoffs",
    "Accessibility & Inclusive Design",
  ];

  const experts = [
    {
      title: "Senior UX Designer",
      company: "Ex-APPLE",
      experience: "8+ Years",
      icon: Eye,
      gradient: "from-pink-500 to-rose-500",
      description:
        "Expert in user research, design systems, and creating intuitive interfaces for millions of users",
      color: "text-pink-400",
    },
    {
      title: "Lead Product Designer",
      company: "Ex-NETFLIX",
      experience: "6+ Years",
      icon: Palette,
      gradient: "from-purple-500 to-indigo-500",
      description:
        "Specializes in visual design, prototyping, and creating engaging user experiences",
      color: "text-purple-400",
    },
    {
      title: "Design Director",
      company: "Ex-AIRBNB",
      experience: "7+ Years",
      icon: Lightbulb,
      gradient: "from-amber-500 to-orange-500",
      description:
        "Expert in design strategy, team leadership, and building world-class design teams",
      color: "text-amber-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-pink-900 to-purple-900 text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-80 sm:w-96 h-80 sm:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/3 w-48 sm:w-64 h-48 sm:h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 left-1/4 w-40 sm:w-56 h-40 sm:h-56 bg-rose-500/15 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 sm:w-48 h-32 sm:h-48 bg-amber-500/15 rounded-full blur-3xl animate-pulse delay-300"></div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative z-10 px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Countdown Timer */}
          <div className="bg-black/30 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 backdrop-blur-3xl shadow-2xl mx-4 sm:mx-0">
            <div className="flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-pink-400 font-bold">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-center">
                Design Your Future - Enrollment Ends In:
              </span>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div
                  key={unit}
                  className="text-center bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 min-w-16 sm:min-w-24">
                  <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
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
            <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              {" "}
              UI/UX Design
            </span>
            <br />
            <span className="text-2xl sm:text-4xl md:text-6xl">
              Create Beautiful Experiences
            </span>
          </h2>

          <p
            className={`text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4 transition-all duration-1000 delay-400 ${
              isVisible.hero
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}>
            Learn from design leaders at{" "}
            <span className="text-pink-400 font-semibold">APPLE</span>,
            <span className="text-purple-400 font-semibold"> NETFLIX</span>, and
            <span className="text-amber-400 font-semibold"> AIRBNB</span> in
            this comprehensive UI/UX masterclass with{" "}
            <span className="text-rose-400 font-semibold">21+ years</span> of
            combined design expertise
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
              className="group bg-gradient-to-r from-pink-500 to-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/25 w-full sm:w-auto">
              <span className="flex items-center justify-center space-x-2">
                <Palette className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
                <span>Start Your Design Journey</span>
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
              <div className="text-2xl sm:text-3xl font-bold text-pink-400">
                21+
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
                Design Experts
              </div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-indigo-400">
                15
              </div>
              <div className="text-gray-400 text-sm sm:text-base">
                Design Projects
              </div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-rose-400">
                100%
              </div>
              <div className="text-gray-400 text-sm sm:text-base">
                Portfolio Ready
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
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Design Masters
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
            <span className="bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Master
            </span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className={`flex items-start space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-pink-500/30 group ${
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

      {/* Design Tools Section */}
      <section
        id="tools"
        className="relative z-10 px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <h3
            className={`text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible.tools
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}>
            Master Industry{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Tools
            </span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Grid,
                title: "Figma",
                desc: "Design & prototyping",
                color: "from-purple-500 to-pink-500",
                textColor: "text-purple-400",
              },
              {
                icon: Palette,
                title: "Adobe XD",
                desc: "UI/UX design suite",
                color: "from-pink-500 to-rose-500",
                textColor: "text-pink-400",
              },
              {
                icon: Pen,
                title: "Sketch",
                desc: "Interface design",
                color: "from-amber-500 to-orange-500",
                textColor: "text-amber-400",
              },
              {
                icon: MousePointer,
                title: "InVision",
                desc: "Prototyping & testing",
                color: "from-indigo-500 to-purple-500",
                textColor: "text-indigo-400",
              },
            ].map((tool, index) => (
              <div
                key={index}
                className={`text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 group ${
                  isVisible.tools
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}>
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${tool.color} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:animate-bounce`}>
                  <tool.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h4
                  className={`text-lg sm:text-xl font-bold mb-2 ${tool.textColor}`}>
                  {tool.title}
                </h4>
                <p className="text-gray-300 text-sm sm:text-base">
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section
        id="projects"
        className="relative z-10 px-4 sm:px-6 py-16 sm:py-20 bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <h3
            className={`text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible.projects
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}>
            Build Your{" "}
            <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "E-commerce App",
                desc: "Complete mobile shopping experience",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "SaaS Dashboard",
                desc: "Analytics and data visualization",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "Banking App",
                desc: "Secure financial interface design",
                gradient: "from-green-500 to-teal-500",
              },
              {
                title: "Social Platform",
                desc: "Community-driven user experience",
                gradient: "from-orange-500 to-red-500",
              },
              {
                title: "Healthcare App",
                desc: "Patient management system",
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                title: "Travel Booking",
                desc: "End-to-end booking experience",
                gradient: "from-yellow-500 to-orange-500",
              },
            ].map((project, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 ${
                  isVisible.projects
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}>
                <div
                  className={`h-32 bg-gradient-to-r ${project.gradient} rounded-xl mb-4 opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-300 text-sm sm:text-base">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Features */}
      <section
        id="bonus"
        className="relative z-10 px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 backdrop-blur-sm border-y border-white/10">
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
                desc: "All course materials forever",
              },
              {
                icon: Download,
                title: "Design Resources",
                desc: "Templates & UI kits",
              },
              {
                icon: Users,
                title: "Designer Community",
                desc: "Network with peers",
              },
              {
                icon: Calendar,
                title: "Portfolio Reviews",
                desc: "Monthly feedback sessions",
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
        className="relative z-10 px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-r from-pink-600/20 to-purple-600/20 backdrop-blur-sm border-y border-white/20">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`inline-flex items-center space-x-2 bg-pink-500/20 border border-pink-500/30 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${
              isVisible["enroll-section"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}>
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />
            <span className="text-pink-300 font-medium text-sm sm:text-base">
              Limited Seats - Designer Special
            </span>
          </div>

          <h3
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 delay-200 ${
              isVisible["enroll-section"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}>
            Ready to Design Your{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Dream Career?
            </span>
          </h3>

          <p
            className={`text-lg sm:text-xl text-gray-300 mb-8 px-4 transition-all duration-1000 delay-400 ${
              isVisible["enroll-section"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}>
            Join thousands of designers who have transformed their careers and
            created amazing user experiences
          </p>

          <EnrollButton
            route="/course/ui-ux-design-master-course"
            className="w-full rounded-2xl text-lg py-4"
            variant="primary"
          />
        </div>
      </section>

      <AboutJprTechnosoft />
      <ContactSection />
      <Footer />
    </div>
  );
}
