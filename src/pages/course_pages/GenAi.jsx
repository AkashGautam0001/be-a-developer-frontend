import React, { useState, useEffect } from "react";
import {
  Target,
  Compass,
  Briefcase,
  RotateCcw,
  Users,
  TrendingUp,
  Clock,
  Rocket,
  Check,
  Star,
  Zap,
  IndianRupee,
  Brain,
  Code,
  Trophy,
  ArrowRight,
  Play,
  Award,
  BookOpen,
  MessageCircle,
  Calendar,
  MapPin,
  ChevronDown,
  Sparkles,
  Shield,
  Gift,
  Lamp as Lightning,
  Globe,
  Phone,
  Mail,
} from "lucide-react";
import AboutJprTechnosoft from "../../components/AboutJprTechnosoft";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import EnrollButton from "../../components/EnrollButton";

const GenAIWebinarLanding = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isVisible, setIsVisible] = useState({});
  const navigate = useNavigate();

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

  const curriculum = [
    {
      module: "Module 1",
      title: "GenAI Landscape & Career Opportunities",
      duration: "45 mins",
      topics: [
        "Industry Overview",
        "Role Types & Salaries",
        "Growth Trajectories",
        "Market Demand Analysis",
      ],
    },
    {
      module: "Module 2",
      title: "Building Your GenAI Portfolio",
      duration: "60 mins",
      topics: [
        "Project Selection",
        "GitHub Optimization",
        "Demo Creation",
        "Technical Writing",
      ],
    },
    {
      module: "Module 3",
      title: "Transition Strategies by Background",
      duration: "45 mins",
      topics: [
        "From Web Dev",
        "From Mobile Dev",
        "From QA/Testing",
        "From Traditional IT",
      ],
    },
    {
      module: "Module 4",
      title: "Interview Preparation & Networking",
      duration: "30 mins",
      topics: [
        "Technical Questions",
        "Portfolio Presentation",
        "LinkedIn Strategy",
        "Industry Connections",
      ],
    },
  ];

  const bonuses = [
    {
      icon: BookOpen,
      title: "GenAI Career Roadmap Guide",
      value: "₹2,999",
      description: "Step-by-step career transition blueprint",
    },
    {
      icon: MessageCircle,
      title: "1-Month Community Access",
      value: "₹1,999",
      description: "Exclusive Discord community with peers and mentors",
    },
    {
      icon: Award,
      title: "Completion Certificate",
      value: "₹999",
      description: "Industry-recognized certificate for your profile",
    },
    {
      icon: Lightning,
      title: "AI Tools Masterclass",
      value: "₹1,999",
      description: "Bonus session on essential AI tools and platforms",
    },
  ];

  const stats = [
    { number: "500+", label: "Career Transitions", icon: Trophy },
    { number: "85%", label: "Salary Increase", icon: TrendingUp },
    { number: "13+", label: "Years Experience", icon: Award },
    { number: "50+", label: "Partner Companies", icon: Briefcase },
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
            <div className="text-center lg:text-left text-white space-y-6">
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full px-4 py-2 text-yellow-400 text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Limited Time Offer
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight">
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
            <div className="bg-white/95 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/20">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider inline-flex items-center mb-6">
                <Target className="w-4 h-4 mr-2" />
                Exclusive Webinar
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
                From Tutorials to Transformation
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Real-World GenAI Career Guidance by JPR Technosoft
              </p>

              {/* Timer */}
              <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 rounded-2xl text-center mb-6 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/50 to-orange-600/50 animate-pulse" />

                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <Clock className="w-5 h-5 mr-2" />
                    <h3 className="text-lg font-bold uppercase tracking-wide">
                      Registration Closes In:
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-4">
                    {Object.entries(timeLeft).map(([unit, value]) => (
                      <div
                        key={unit}
                        className="text-center bg-white/15 border border-white/30 rounded-xl p-3 backdrop-blur-sm">
                        <span className="block text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
                          {value.toString().padStart(2, "0")}
                        </span>
                        <span className="text-xs text-white/80 uppercase tracking-widest">
                          {unit}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm opacity-90 font-semibold">
                    ⚡ Only 50 seats available!
                  </p>
                </div>
              </div>

              <EnrollButton
                route="/course/genai-using-python-mastery-course"
                className="w-full rounded-2xl text-lg py-4"
              />

              <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  <span>Instant Access</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  <span>Certificate Included</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  <span>Live Q&A</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm border-y border-white/10">
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Learn from Industry Veterans
              </span>
            </h2>

            <div className="bg-white/10 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-white/20 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-bold text-sm">
                  INDUSTRY EXPERT
                </div>
              </div>

              <div className="text-7xl sm:text-8xl font-black mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                13+
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                Years of Industry Expertise
              </h3>

              <p className="text-lg sm:text-xl leading-relaxed text-gray-200 mb-8">
                Our experts from{" "}
                <strong className="text-yellow-400">JPR Technosoft</strong> have
                been at the forefront of AI/ML innovation, working on
                enterprise-scale solutions, real-time ML pipelines, and
                cutting-edge GenAI applications.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <Brain className="w-5 h-5 text-blue-400" />
                  <span>AI/ML Architecture</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Code className="w-5 h-5 text-green-400" />
                  <span>Production Systems</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  <span>Team Leadership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800">
              What You'll Learn
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive curriculum designed to transform your career in
              just one intensive session
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {curriculum.map((module, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-l-4 border-gradient-to-b from-blue-500 to-purple-600">
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <div className="flex items-center gap-4 mb-4 sm:mb-0">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {module.module}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                        {module.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span className="font-semibold">{module.duration}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {module.topics.map((topic, topicIndex) => (
                      <div
                        key={topicIndex}
                        className="bg-gray-50 rounded-lg p-3 text-center">
                        <span className="text-sm font-medium text-gray-700">
                          {topic}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-800">
            What Makes This Webinar Different?
          </h2>

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

      {/* Bonuses Section */}
      {/* <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full font-bold text-sm mb-6">
              <Gift className="w-4 h-4 mr-2" />
              EXCLUSIVE BONUSES
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800">
              Get ₹7,996 Worth of Bonuses
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When you register today, you'll also receive these valuable
              bonuses absolutely FREE
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {bonuses.map((bonus, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-green-200 hover:border-green-400">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-br from-green-500 to-blue-500 text-white p-3 rounded-2xl">
                    <bonus.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-800">
                        {bonus.title}
                      </h3>
                      <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {bonus.value}
                      </span>
                    </div>
                    <p className="text-gray-600">{bonus.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-block bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-black text-gray-800 mb-2">
                Total Value:{" "}
                <span className="line-through text-gray-400">₹7,995</span>
              </div>
              <div className="text-4xl font-black bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                Your Price: FREE
              </div>
            </div>
          </div>
        </div>
      </section> */}

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

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
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
                question: "Is this webinar really free?",
                answer:
                  "Yes! This is a completely free webinar. We're offering it as a way to provide value to the community and showcase our teaching methodology.",
              },
              {
                question: "What if I miss the live session?",
                answer:
                  "All registered participants will receive a recording of the complete session within 24 hours of the webinar completion.",
              },
              {
                question: "Do I need any prior AI/ML experience?",
                answer:
                  "No prior AI/ML experience is required. This webinar is designed for professionals from all backgrounds looking to transition into GenAI careers.",
              },
              {
                question: "Will I get a certificate?",
                answer:
                  "Yes, all participants who complete the webinar will receive a certificate of completion from JPR Technosoft.",
              },
              {
                question: "How interactive is this webinar?",
                answer:
                  "Very interactive! We'll have live Q&A sessions, polls, breakout discussions, and personalized career advice based on your background.",
              },
              {
                question: "What's the catch? Why is it free?",
                answer:
                  "No catch! We believe in providing value first. This webinar is our way of helping professionals navigate the GenAI career landscape. At the end, we'll share information about our comprehensive paid course for those interested.",
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
      <AboutJprTechnosoft />

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
                  <div className="text-sm opacity-80">Only 50 Available</div>
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
              into high-paying GenAI careers. Your future in AI starts with this
              webinar.
            </p>

            <div className="space-y-6 flex flex-col justify-center items-center">
              <EnrollButton
                route="/course/genai-using-python-mastery-course"
                className="px-16 py-6 rounded-2xl text-2xl"
              />

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
