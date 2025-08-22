import React, { useState, useEffect } from "react";
import {
  Target,
  Compass,
  Briefcase,
  RotateCcw,
  Users,
  TrendingUp,
  Clock,
  Check,
  Star,
  Brain,
  Code,
  Trophy,
  Award,
  BookOpen,
  Sparkles,
  Shield,
  Lamp as Lightning,
  CheckCircle,
} from "lucide-react";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import EnrollButton from "../../components/EnrollButton";
import axiosInstance from "../../utils/axios";
import Countdown from "../../components/Timer";
import news1 from "../../assets/news1.jpeg";
import news2 from "../../assets/news2.jpeg";
import news3 from "../../assets/news3.jpeg";
import news4 from "../../assets/news4.jpeg";
import professional_img from "../../assets/professionals.svg";
import logo from "/jpr-logo.png";
const GenAIWebinarLanding = () => {
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    try {
      const response = await axiosInstance.get(
        `/courses/genai-using-python-mastery-course`
      );
      console.log("Course response:", response.data);
      if (response.data.success) {
        setCourse(response.data.course);
      }
    } catch (error) {
      console.error("Failed to fetch course:", error);
    } finally {
      setLoading(false);
    }
  };

  const scheduledAt = course?.demoClasses?.[0]?.scheduledAt || null;
  // if (loading) {
  //   return <div>Loading...</div>;

  const offerings = [
    {
      id: 1,
      module: "Offering 1",
      title: "Career Switch Blueprint",
      duration: "4 weeks",
      subtitle: "1:1 Coaching",
      description:
        "Personalized roadmap to move from your current role into a GenAI position.",

      icon: Target,
    },
    {
      id: 2,
      module: "Offering 2",
      title: "Project Accelerator",
      duration: "2–4 weeks",
      subtitle: "Portfolio Builder",
      description:
        "Turn an idea into a portfolio-worthy GenAI project, with real use-case coaching, review sessions, and publishing support.",

      icon: BookOpen,
    },

    {
      id: 3,
      module: "Offering 3",
      title: "Mock Interviews & Resume Revamp",
      duration: "Flexible",
      subtitle: "Interview Mastery",
      description:
        "Real feedback from an insider's lens — improve your pitch, positioning, and profile.",

      icon: Users,
    },
    {
      id: 4,
      module: "Offering 4",
      title: "Group Sessions / Masterclasses",
      duration: "Cohort-based",
      subtitle: "Community Learning",
      description:
        "Cohort-based mini-programs focused on themes like: 'How to Think Like a GenAI Product Engineer' or 'Non-coders in GenAI: Where Do You Fit?'",

      icon: Users,
    },
  ];

  const features = [
    {
      icon: Target,
      title: "Career-Focused Approach",
      description:
        "Not another tutorial. Real-world career guidance on transitioning into GenAI roles that actually work in today's market.",
    },
    {
      icon: Compass,
      title: "Navigate the Industry",
      description:
        "Understand the landscape of GenAI opportunities - from product to research to engineering paths.",
    },
    {
      icon: Briefcase,
      title: "Portfolio That Resonates",
      description:
        "Learn how to build projects and presence that actually catch the attention of hiring teams.",
    },
    {
      icon: RotateCcw,
      title: "Smart Career Transitions",
      description:
        "Whether you're from mobile dev, QA, or traditional tech - discover your path into GenAI.",
    },
    {
      icon: Users,
      title: "Interactive Experience",
      description:
        "Live Q&A, real case studies, and personalized advice - not a one-way lecture.",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description:
        "Our methods have helped professionals transition from Flutter dev to GenAI Engineer, QA to AI Product Management.",
    },
  ];

  const testimonials = [
    {
      text: "I was a mobile application dev and stuck in routine work. Now I'm working on LLM app integrations at a Big Giant MNC, thanks to my Guru and coaching.",
      role: "Flutter Developer → GenAI Engineer at MNC",
      name: "Priya S.",
      company: "Tech MNC",
    },
    {
      text: "He didn't just teach — he helped me see the right role for my skills. That changed everything.",
      role: "QA → AI Product Management",
      name: "Rahul M.",
      company: "AI Startup",
    },
    {
      text: "More than just GenAI concepts — it's the career clarity that made this coaching powerful.",
      role: ".NET Developer → GenAI Solutions Architect",
      name: "Anjali K.",
      company: "Fortune 500",
    },
  ];

  const stats = [
    { number: "500+", label: "Career Transitions", icon: Trophy },
    { number: "85%", label: "Salary Increase", icon: TrendingUp },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "10+", label: "Partner Companies", icon: Briefcase },
  ];

  const FloatingShape = ({ className, delay = 0 }) => (
    <div
      className={`absolute rounded-full bg-gradient-to-br from-white/10 to-white/5 ${className}`}
      style={{
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );

  const PulsingDot = ({ className }) => (
    <div
      className={`absolute rounded-full bg-gradient-to-r from-pink-500 to-violet-500 ${className}`}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 animate-ping opacity-75"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <FloatingShape className="w-20 h-20 top-1/5 left-1/12" delay={0} />
        <FloatingShape className="w-32 h-32 top-3/5 right-1/6" delay={2} />
        <FloatingShape className="w-16 h-16 bottom-1/5 left-1/5" delay={4} />
        <PulsingDot className="w-3 h-3 top-1/4 right-1/4" />
        <PulsingDot className="w-2 h-2 top-3/4 left-1/3" />
      </div>
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <Link
              to="/"
              className="flex items-center group border-none outline-none">
              <img
                src={logo}
                alt="JPR Technosoft"
                className="w-[50px] group-hover:scale-105 transition-transform"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-purple-900/60 z-10" />

        {/* Animated Circuit Background */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='circuit' patternUnits='userSpaceOnUse' width='50' height='50'><path d='M10,10 L40,10 L40,40 L10,40 Z' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'/><circle cx='25' cy='25' r='2' fill='rgba(255,255,255,0.3)'/></pattern></defs><rect width='100%' height='100%' fill='url(%23circuit)'/></svg>")`,
              backgroundSize: "100px 100px",
              animation: "circuit-move 20s linear infinite",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center justify-center">
            {/* Hero Text */}
            <div className="text-left lg:text-left text-white space-y-5">
              <div className="inline-flex items-center bg-gradient-to-r mt-3 from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full px-4 py-2 text-yellow-400 text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4 mr-2 " />
                Limited Time Offer
              </div>

              <h1 className="text-5xl sm:text-4xl lg:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                  Shape Your Future in
                </span>
                <br />
                <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Generative AI
                </span>
              </h1>

              <p className="text-xl sm:text-2xl mb-8 italic text-blue-200 font-medium">
                "I don't teach tutorials. I shape transformations."
              </p>

              <p className="text-lg sm:text-xl leading-relaxed text-blue-100 max-w-2xl">
                Join industry experts for an exclusive webinar that will
                transform your career trajectory in the world of Generative AI.
                This isn't just another course - it's your gateway to real
                career transformation.
              </p>
            </div>

            {/* Registration Card */}
            <div className="bg-white/95 backdrop-blur-xl p-2 mb-8 sm:p-4 rounded-3xl shadow-2xl   border border-white/20">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider inline-flex items-center mb-4">
                <Target className="w-4 h-4 mr-2" />
                Exclusive Webinar
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
                From Tutorials to Transformation
              </h2>
              <p className="text-gray-600 mb-4 text-lg">
                Real-World GenAI Career Guidance by JPR Technosoft
              </p>

              {/* Timer */}
              <div className="bg-gradient-to-r from-red-500 to-orange-500  text-white p-6 rounded-2xl text-center mb-6 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/50 to-orange-600/50 animate-pulse" />

                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <Clock className="w-5 h-5 mr-2" />
                    <h3 className="text-lg font-bold uppercase tracking-wide">
                      Registration Closes In:
                    </h3>
                  </div>

                  {scheduledAt ? (
                    <Countdown scheduledAt={scheduledAt} />
                  ) : (
                    <p className="text-white/70">No demo class scheduled</p>
                  )}

                  <p className="text-sm opacity-90 font-semibold">
                    ⚡ Limited seats available!
                  </p>
                </div>
              </div>

              <EnrollButton
                route="/register/genai-using-python-mastery-course"
                className="w-full rounded-2xl text-lg py-4"
              />

              {/* <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  <span>Certificate Included</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  <span>Live Q&A</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm border-y border-white/10 mt-5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-black mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white py-20 relative overflow-hidden">
        {/* subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-12">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Learn from Industry Veterans
              </span>
            </h2>

            {/* Expert Card */}
            <div className="bg-white/10 backdrop-blur-xl p-4 sm:p-12 rounded-3xl border border-white/20 relative shadow-xl">
              {/* Badge */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold text-sm shadow-md">
                  INDUSTRY EXPERT
                </div>
              </div>

              {/* Big Years Highlight */}
              <div className="text-6xl sm:text-8xl font-black mt-6 mb-3 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                15+
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-100">
                Years of Industry Expertise in AI, ML & GenAI
              </h3>

              {/* Description */}
              <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-8">
                With over{" "}
                <span className="font-semibold text-yellow-400">15 years</span>{" "}
                of hands-on experience, our experts at{" "}
                <strong className="text-yellow-400">JPR Technosoft</strong>
                have built enterprise-scale solutions, real-time ML pipelines,
                and cutting-edge Generative AI applications.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-10">
                Unlike traditional tutorials, we provide{" "}
                <span className="font-semibold text-yellow-400">
                  real-world, career-focused coaching
                </span>
                — helping professionals transform their careers with practical
                mentorship.
              </p>

              {/* Expertise Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm sm:text-base">
                <div className="flex items-center justify-center gap-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span>Mentorship & Coaching</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Brain className="w-5 h-5 text-blue-400" />
                  <span>AI/ML Architecture</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Code className="w-5 h-5 text-green-400" />
                  <span>Production Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800">
              What You'll Get
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive career transformation programs designed to
              accelerate your journey into GenAI
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8 px-4 sm:px-6 lg:px-8">
            {offerings.map((offering, index) => {
              const IconComponent = offering.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-[1.02] ${
                    hoveredCard === offering.id
                      ? "shadow-2xl shadow-purple-500/20"
                      : ""
                  }`}
                  onMouseEnter={() => setHoveredCard(offering.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    borderLeft: "4px solid",
                    borderLeftColor:
                      index % 4 === 0
                        ? "#8b5cf6"
                        : index % 4 === 1
                        ? "#3b82f6"
                        : index % 4 === 2
                        ? "#10b981"
                        : "#f59e0b",
                  }}>
                  <div className="p-6 sm:p-8">
                    {/* Top Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                      {/* Left: Module + Icon + Title */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold text-center sm:text-left">
                          {offering.module}
                        </div>
                        <div className="flex items-center gap-3">
                          <IconComponent className="w-6 h-6 text-gray-700 shrink-0" />
                          <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                              {offering.title}
                            </h3>
                            <p className="text-gray-600 text-sm font-medium">
                              {offering.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Right: Duration */}
                      <div className="flex items-center gap-2 text-gray-600 bg-gray-100 px-3 py-2 rounded-lg self-start sm:self-center">
                        <Clock className="w-4 h-4 shrink-0" />
                        <span className="font-semibold">
                          {offering.duration}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                      {offering.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Ready to Transform Your Career?
              </h3>
              <p className="text-gray-600 mb-6">
                Join hundreds of professionals who've successfully transitioned
                into GenAI roles
              </p>

              <button
                onClick={() =>
                  navigate("/register/genai-using-python-mastery-course")
                }
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Start Your Journey Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-3 text-gray-800">
            What Makes This Program Different?
          </h2>
          <h3 className=" font-bold text-center  text-gray-800">
            Not a Tutorial. Not a Course
          </h3>
          <p className="text-center mb-6 text-gray-800">
            This is not about walking through code or tools that change every
            few weeks. This is practical, career-focused guidance on:
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center border-2 border-transparent hover:border-blue-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is this for Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-gray-800">
            Who is this program for?
          </h2>

          {/* 2-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Points */}
            <div>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✔</span>
                  Mid-level tech professionals looking to move into Generative
                  AI
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✔</span>
                  Software engineers, data scientists, product managers, or
                  designers
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✔</span>
                  Non-traditional backgrounds (QA, support, content) wanting to
                  find real roles in GenAI
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✔</span>
                  Anyone confused by the noise and wanting clarity & direction,
                  not just another “GPT-4 tutorial”
                </li>
              </ul>
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center">
              <img
                src={professional_img}
                alt="Professional"
                className="w-80 h-auto object-contain  "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            Success Stories
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-lg italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-white/20 pt-4">
                  <div className="font-bold text-yellow-400 mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-300 mb-2">
                    {testimonial.company}
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* NewPaper section */}
      <section className="bg-white py-15">
        <div className=" px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-xl text-center   text-gray-800">
            From Future of Jobs Report 2025
          </h2>
          <p className="text-2xl sm:text-5xl mb-8 font-bold  text-gray-800 text-center">
            <i>By WORLD ECONOMIC FORUM</i>
          </p>
          <div className=" mx-auto mb-10 text-center">
            <div className="overflow-hidden   transition-transform duration-300">
              <img
                src={news2}
                alt="news2"
                className="w-full lg:h-[450px] object-contain"
              />
            </div>
          </div>

          <div className="py-10">
            <h1 className="text-4xl font-bold  text-center">
              Why Gen AI Matters Today
            </h1>
            <p className="text-center mb-10 ">
              Read real-world reports and expert opinions on the rising
              importance of Generative AI.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="overflow-hidden border-2 border-s-black rounded-2xl shadow-lg transition-transform duration-300">
                <img
                  src={news1}
                  alt="news1"
                  className="w-full h-70 object-contain"
                />
              </div>

              <div className="overflow-hidden   border-2 border-s-black rounded-2xl shadow-lg  transition-transform duration-300">
                <img
                  src={news3}
                  alt="news3"
                  className="w-full h-70 object-contain"
                />
              </div>
              <div className="overflow-hidden  border-2 border-s-black rounded-2xl shadow-lg transition-transform duration-300">
                <img
                  src={news4}
                  alt="news4"
                  className="w-full h-70 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about the webinar
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Do I need any prior AI/ML experience?",
                answer:
                  "No prior AI/ML experience is required. This webinar is designed for professionals from all backgrounds looking to transition into GenAI careers.",
              },

              {
                question: "How interactive is this webinar?",
                answer:
                  "Very interactive! We'll have live Q&A sessions, polls, breakout discussions, and personalized career advice based on your background.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-3">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-11">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About JPR Technosoft */}
      <section className="bg-white py-20 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800">
            About JPR Technosoft
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            JPR Technosoft is a leading technology education company
            specializing in cutting-edge AI/ML training and career development.
            With over <strong>10</strong> years of industry experience, we've
            helped hundreds of professionals transition into high-paying AI
            careers.
          </p>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 max-w-4xl mx-auto lg:grid-cols-2 gap-10">
            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-3 rounded-lg">
                <Shield className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-gray-800 mb-2">
                  Trusted by Industry
                </h3>
                <p className="text-gray-600">
                  Our graduates work at top companies including Google,
                  Microsoft, Amazon, and leading AI startups.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-lg">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-gray-800 mb-2">Proven Results</h3>
                <p className="text-gray-600">
                  85% of our students see salary increases of 50-200% within 6
                  months of course completion.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Why Choose Us */}
          <div className="mt-16 max-w-xl mx-auto bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-300" />
                <span>Industry-Expert Instructors</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-300" />
                <span>Real-World Projects</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-300" />
                <span>Career Placement Support</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-300" />
                <span>Lifetime Community Access</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-300" />
                <span>Money-Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Don't Miss This Opportunity!
            </h2>

            <p className="text-xl sm:text-2xl mb-8 opacity-90">
              This webinar has limited seats and fills up fast. Register now to
              secure your spot and transform your career in GenAI.
            </p>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-yellow-300">⚡</div>
                  <div className="text-lg font-semibold">Limited Seats</div>
                  <div className="text-sm opacity-80">
                    Limited seats Available
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-300">🎯</div>
                  <div className="text-lg font-semibold">High Demand</div>
                  <div className="text-sm opacity-80">
                    Previous Sessions Sold Out
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-300">⏰</div>
                  <div className="text-lg font-semibold">Time Sensitive</div>
                  <div className="text-sm opacity-80">
                    Registration Closes Soon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='final-circuit' patternUnits='userSpaceOnUse' width='40' height='40'><path d='M10,10 L30,10 L30,30 L10,30 Z' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'/><circle cx='20' cy='20' r='1.5' fill='rgba(255,255,255,0.3)'/></pattern></defs><rect width='100%' height='100%' fill='url(%23final-circuit)'/></svg>")`,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                Ready to Transform Your Career?
              </span>
            </h2>

            <p className="text-xl sm:text-2xl mb-8 text-blue-100 leading-relaxed">
              Join thousands of professionals who have successfully transitioned
              into high-paying GenAI careers. Your future in AI starts with
              program.
            </p>

            <div className="space-y-6 flex flex-col justify-center items-center">
              <div className="flex items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>Secure Registration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lightning className="w-4 h-4 text-yellow-400" />
                  <span>Instant Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-400" />
                  <span>Certificate Included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <Footer />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes circuit-move {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100px 100px;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes ping {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default GenAIWebinarLanding;
