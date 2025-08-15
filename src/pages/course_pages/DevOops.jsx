import React, { useState, useEffect } from "react";
import {
  Server,
  Cloud,
  Settings,
  Shield,
  GitBranch,
  Container,
  Monitor,
  Zap,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Play,
  Clock,
  BookOpen,
  Target,
  Rocket,
  TrendingUp,
  Code,
  Database,
  Lock,
  Activity,
  Cpu,
  HardDrive,
  Network,
  Layers,
  Terminal,
  Globe,
  Mail,
  Phone,
  MapPin,
  Star,
  Download,
  Calendar,
  Users2,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function DevOpsCourseLanding() {
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

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleEnroll = () => {
    alert(
      "🚀 Ready to start your DevOps journey!\n\nContact us:\n📧 info@jprtechnosoft.com\n📱 +91 9540472951"
    );
  };

  const tools = [
    {
      name: "Docker",
      icon: Container,
      color: "text-blue-400",
      bg: "from-blue-500 to-blue-600",
    },
    {
      name: "Kubernetes",
      icon: Settings,
      color: "text-purple-400",
      bg: "from-purple-500 to-purple-600",
    },
    {
      name: "AWS",
      icon: Cloud,
      color: "text-orange-400",
      bg: "from-orange-500 to-orange-600",
    },
    {
      name: "Jenkins",
      icon: GitBranch,
      color: "text-green-400",
      bg: "from-green-500 to-green-600",
    },
    {
      name: "Terraform",
      icon: Layers,
      color: "text-violet-400",
      bg: "from-violet-500 to-violet-600",
    },
    {
      name: "Monitoring",
      icon: Activity,
      color: "text-red-400",
      bg: "from-red-500 to-red-600",
    },
    {
      name: "Linux",
      icon: Terminal,
      color: "text-yellow-400",
      bg: "from-yellow-500 to-yellow-600",
    },
    {
      name: "Security",
      icon: Shield,
      color: "text-cyan-400",
      bg: "from-cyan-500 to-cyan-600",
    },
  ];

  const features = [
    {
      icon: Users2,
      title: "Expert Instructors",
      desc: "Learn from industry professionals with 10+ years experience",
    },
    {
      icon: Award,
      title: "Industry Certification",
      desc: "Get certified and boost your career prospects",
    },
    {
      icon: Rocket,
      title: "Hands-on Projects",
      desc: "Build real-world DevOps pipelines and infrastructure",
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      desc: "Self-paced with live sessions and recorded content",
    },
    {
      icon: Target,
      title: "Job Placement",
      desc: "Career guidance and job placement assistance",
    },
    {
      icon: Download,
      title: "Resources Included",
      desc: "Complete toolkit, templates, and documentation",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "DevOps Engineer at Netflix",
      image: "S",
      text: "This course transformed my career. The hands-on approach and real-world projects prepared me for senior DevOps roles.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Site Reliability Engineer at Google",
      image: "M",
      text: "Comprehensive curriculum covering all modern DevOps tools. The instructors are knowledgeable and supportive.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Cloud Architect at Amazon",
      image: "E",
      text: "Best investment in my career. Went from junior developer to DevOps lead in 6 months after completing this course.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}

      {/* Hero Section */}
      <section id="hero" className="relative z-10 px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible.hero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
                <Zap className="w-5 h-5 text-yellow-400 animate-pulse" />
                <span className="text-blue-300 font-medium">
                  Most Comprehensive DevOps Course
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Master
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  {" "}
                  DevOps
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your career with our industry-leading DevOps course.
                Learn from experts who've built systems at scale for Fortune 500
                companies. Master the tools, practices, and mindset that drive
                modern software delivery.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => scrollToSection("enroll")}
                  className="group bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center space-x-2">
                  <Rocket className="w-5 h-5 group-hover:animate-pulse" />
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-green-400" />
                  <span>5,000+ Students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-purple-400" />
                  <span>Industry Certified</span>
                </div>
              </div>
            </div>

            {/* Course Preview Card */}
            <div
              className={`bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 transition-all duration-1000 delay-300 ${
                isVisible.hero
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}>
              <div className="text-center mb-6">
                <div className="inline-flex items-center space-x-2 bg-red-500/20 border border-red-500/30 rounded-full px-4 py-2 mb-4">
                  <Clock className="w-5 h-5 text-red-400 animate-pulse" />
                  <span className="text-red-300 font-medium">
                    Early Bird Ends In:
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2 mb-6">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="text-center">
                      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-3">
                        <span className="text-2xl font-bold text-white">
                          {value.toString().padStart(2, "0")}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400 mt-1 capitalize">
                        {unit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={handleEnroll}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                  Get Early Bird Discount
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section
        id="tools"
        className="relative z-10 px-4 sm:px-6 py-16 sm:py-20 bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible.tools
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}>
            Master{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Industry-Standard
            </span>{" "}
            Tools
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {tools.map((tool, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 text-center ${
                  isVisible.tools
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}>
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${tool.bg} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:animate-pulse group-hover:shadow-lg`}>
                  <tool.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3
                  className={`font-semibold ${tool.color} group-hover:text-white transition-colors duration-300`}>
                  {tool.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="relative z-10 px-4 sm:px-6 py-16 sm:py-20 bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible.features
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}>
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Course?
            </span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 text-center ${
                  isVisible.features
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="relative z-10 px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible.testimonials
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}>
            Student{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 ${
                  isVisible.testimonials
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-blue-300 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-300 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section
        id="enroll"
        className="relative z-10 px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border-y border-white/20">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible.enroll
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}>
            <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-6">
              <Zap className="w-5 h-5 text-green-400" />
              <span className="text-green-300 font-medium">
                Limited Time Offer{" "}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Transform
              </span>{" "}
              Your Career?
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of successful DevOps engineers who started their
              journey with us. Get job-ready skills and industry recognition.
            </p>

            <Link
              to="/course/devops-mastery-bootcamp"
              className="inline-flex items-center justify-center bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300">
              Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
