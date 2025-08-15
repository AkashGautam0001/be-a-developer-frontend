import React, { useState, useEffect } from "react";
import {
  Zap,
  Palette,
  Rocket,
  Wrench,
  Lightbulb,
  Target,
  Trophy,
  Clock,
  AlertTriangle,
  CreditCard,
  Gift,
  Smartphone,
  IndianRupee,
} from "lucide-react";

const ReactNative = () => {
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

  const handleEnrollClick = () => {
    alert(
      "🎉 Redirecting to registration form...\n\nIn a real implementation, this would redirect to your registration/payment form or trigger a conversion event for Meta ads tracking."
    );
  };

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description:
        "Learn advanced techniques to build lightning-fast React Native apps that deliver exceptional user experiences across iOS and Android platforms.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Modern UI/UX Patterns",
      description:
        "Discover the latest design patterns, navigation solutions, and animation techniques that make apps stand out in the marketplace.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Deployment Strategies",
      description:
        "Master app store deployment, CI/CD pipelines, and production-ready practices used by top tech companies worldwide.",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Expert Tools & Libraries",
      description:
        "Get hands-on with industry-standard tools, debugging techniques, and third-party integrations that streamline development.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Real-World Projects",
      description:
        "Work on actual case studies and projects based on 13+ years of industry experience building successful mobile applications.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Career Growth Tips",
      description:
        "Learn insider strategies for advancing your career, salary negotiation, and positioning yourself as a React Native expert.",
    },
  ];

  const FloatingParticle = ({ delay, size, left }) => (
    <div
      className={`absolute rounded-full bg-white/10 animate-bounce`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: "20s",
        animationIterationCount: "infinite",
      }}
    />
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">
        {/* Animated Background */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c)",
            backgroundSize: "400% 400%",
            animation: "gradientShift 15s ease infinite",
          }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <FloatingParticle delay={0} size={80} left={10} />
          <FloatingParticle delay={2} size={50} left={20} />
          <FloatingParticle delay={4} size={30} left={70} />
          <FloatingParticle delay={6} size={60} left={80} />
          <FloatingParticle delay={8} size={40} left={90} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="py-6 sm:py-8 text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-2">
              JPR Technosoft
            </div>
            <div className="text-white/80 text-base sm:text-lg">
              Empowering Developers Since 2010
            </div>
          </header>

          {/* Hero Content */}
          <div className="text-center py-12 sm:py-16 md:py-6">
            <div className="inline-block px-4 py-2 mb-8 bg-white/10 border border-white/20 rounded-full text-sm backdrop-blur-md animate-pulse">
              🚀 Exclusive Industry Expert Session
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Master React Native
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>App Development
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Join our intensive webinar led by industry experts with 13+ years
              of experience. Learn cutting-edge techniques, best practices, and
              insider secrets to build world-class mobile applications.
            </p>

            {/* Timer Section */}
            <div className="bg-black/30 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 backdrop-blur-3xl shadow-2xl mx-4 sm:mx-0">
              <div className="flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-red-400 font-bold">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-center">Registration Closes In:</span>
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

              <div className="bg-red-500/20 border border-red-500 rounded-xl p-3 sm:p-4 text-center">
                <strong className="text-sm sm:text-base text-red-400 animate-pulse flex items-center justify-center gap-2 flex-wrap">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-center">
                    Only 50 Seats Available - 73% Already Filled!
                  </span>
                </strong>
              </div>
            </div>

            <button
              onClick={handleEnrollClick}
              className="inline-block px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-red-500 to-orange-500 text-white text-base sm:text-lg md:text-xl font-bold uppercase tracking-wider rounded-full shadow-2xl hover:scale-105 hover:shadow-red-500/50 transition-all duration-300 relative overflow-hidden group mx-4 sm:mx-0">
              <span className="relative z-10">
                Enroll Now - Free Registration
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-gray-900 py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            What You'll Master
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:scale-105 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300 backdrop-blur-sm group cursor-pointer">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-red-400">
                  {feature.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Led by Industry Veterans
          </h2>

          <div className="bg-white/10 border border-white/20 rounded-3xl p-10 text-center backdrop-blur-3xl">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full font-bold text-lg mb-5">
              13+ Years Industry Experience
            </div>

            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              JPR Technosoft Expert Team
            </h3>

            <p className="text-lg text-justify md:text-xl  leading-relaxed mb-8 text-white/90">
              Our seasoned developers have built 200+ successful mobile
              applications for Fortune 500 companies, startups, and everything
              in between. They've witnessed the evolution of React Native from
              its early days to the powerful framework it is today, giving them
              unique insights into best practices, common pitfalls, and future
              trends.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl  font-bold mb-8 text-red-400">
            Don't Miss This Opportunity!
          </h2>
          <p className="text-2xl mb-12 text-white/80">
            Transform your React Native skills and accelerate your career with
            insights from industry veterans.
          </p>

          <button
            onClick={handleEnrollClick}
            className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 md:px-12 md:py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white text-lg md:text-2xl font-bold rounded-full shadow-2xl hover:scale-105 hover:shadow-red-500/50 transition-all duration-300 mb-6">
            <span>Secure Your Spot Now -</span>
            <div className="flex items-center ">
              <IndianRupee className="w-5 h-5 md:w-6 md:h-6" />
              <span>99 Free</span>
            </div>
          </button>

          <div className="flex items-center justify-center gap-8 text-white/60 flex-wrap">
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              No Credit Card Required
            </div>
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5" />
              Bonus Materials Included
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              Mobile-Optimized Content
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default ReactNative;
