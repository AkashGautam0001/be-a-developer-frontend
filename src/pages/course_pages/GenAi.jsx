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
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const GenAIWebinarLanding = () => {
  const navigate = useNavigate();
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
    navigate("/course/genai-using-python-mastery-course");
  };

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
    },
    {
      text: "He didn't just teach — he helped me see the right role for my skills. That changed everything.",
      role: "QA → AI Product Management",
    },
    {
      text: "More than just GenAI concepts — it's the career clarity that made this coaching powerful.",
      role: ".NET Developer → GenAI Solutions Architect",
    },
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 overflow-x-hidden relative">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <FloatingShape className="w-20 h-20 top-1/5 left-1/12" delay={0} />
        <FloatingShape className="w-30 h-30 top-3/5 right-1/6" delay={2} />
        <FloatingShape className="w-15 h-15 bottom-1/5 left-1/5" delay={4} />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'><defs><pattern id='circuit' patternUnits='userSpaceOnUse' width='100' height='100'><path d='M20,20 L80,20 L80,80 L20,80 Z' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='2'/><circle cx='50' cy='50' r='3' fill='rgba(255,255,255,0.2)'/></pattern></defs><rect width='100%' height='100%' fill='url(%23circuit)'/></svg>")`,
            backgroundSize: "cover",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid lg:grid-cols-2 gap-8 mt-4 lg:gap-16 items-center">
            {/* Hero Text */}
            <div className="text-center lg:text-left text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Shape Your Future in Generative AI
              </h1>
              <p className="text-xl sm:text-2xl mb-8 italic text-blue-100 font-medium">
                "I don't teach tutorials. I shape transformations."
              </p>
              <p className="text-lg sm:text-xl mb-8 text-blue-50 leading-relaxed">
                Join industry experts for an exclusive webinar that will
                transform your career trajectory in the world of Generative AI.
                This isn't just another course - it's your gateway to real
                career transformation.
              </p>
            </div>

            {/* Registration Card */}
            <div className="bg-white/95 backdrop-blur-lg p-5 mb-4 sm:p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider inline-flex items-center mb-6">
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
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-2xl text-center mb-6 shadow-lg">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 mr-2" />
                  <h3 className="text-lg font-bold uppercase tracking-wide">
                    Registration Closes In:
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:flex sm:justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <div
                      key={unit}
                      className="text-center bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 min-w-16 sm:min-w-24">
                      <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                        {value.toString().padStart(2, "0")}
                      </span>
                      <span className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">
                        {unit}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-sm opacity-90">Limited seats available!</p>
              </div>

              <button
                onClick={enrollNow}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full text-base sm:text-xl font-bold uppercase tracking-wide hover:from-green-600 hover:to-green-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 group relative overflow-hidden p-3 sm:p-4">
                {/* Hover ripple effect */}
                <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />

                {/* Rocket icon + text */}
                <div className="flex items-center gap-1 sm:gap-2 relative z-10">
                  <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>Enroll Now -</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-1 relative z-10">
                  <IndianRupee className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>99 FREE</span>
                </div>
              </button>

              <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-1" />
                  <span>Instant Access</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-1" />
                  <span>Certificate Included</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-1" />
                  <span>Live Q&A</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Section */}
      <section className="bg-gray-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12">
            Learn from Industry Veterans
          </h2>

          <div className="bg-white/10 backdrop-blur-lg p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto border-2 border-white/20">
            <div className="text-6xl sm:text-7xl font-black mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              13+
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              Years of Industry Expertise
            </h3>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-200">
              Our experts from{" "}
              <strong className="text-yellow-400">JPR Technosoft</strong> have
              been at the forefront of AI/ML innovation, working on
              enterprise-scale solutions, real-time ML pipelines, and
              cutting-edge GenAI applications. This isn't theoretical knowledge
              - it's battle-tested industry wisdom.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-800">
            What Makes This Webinar Different?
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center border-2 border-transparent hover:border-indigo-500 group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
            Success Stories
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-4">
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
                <div className="text-yellow-400 font-bold">
                  — {testimonial.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
      `}</style>
    </div>
  );
};

export default GenAIWebinarLanding;
