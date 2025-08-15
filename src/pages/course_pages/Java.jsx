import React, { useState, useEffect } from 'react';
import {
    Briefcase,
    GraduationCap,
    Wrench,
    Rocket,
    Target,
    Clock,
    Users,
    Sparkles,
    CheckCircle,
    Code,
    Database,
    Shield,
    Layers,
    IndianRupee
} from 'lucide-react';

const JavaSpringBootWebinar = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const [isCardFloating, setIsCardFloating] = useState(false);

    useEffect(() => {
        const updateCountdown = () => {
            const targetDate = new Date();
            targetDate.setDate(targetDate.getDate() + 3);
            targetDate.setHours(23, 59, 59, 999);

            const now = new Date().getTime();
            const difference = targetDate.getTime() - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
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
        const floatingInterval = setInterval(() => {
            setIsCardFloating(true);
            setTimeout(() => setIsCardFloating(false), 1000);
        }, 3000);

        return () => clearInterval(floatingInterval);
    }, []);

    const enrollNow = () => {
        alert("Registration form will open here! Add your Meta lead form or registration URL.");
    };

    const features = [
        { icon: <Code className="w-5 h-5" />, text: "Advanced SpringBoot Architecture & Best Practices" },
        { icon: <Layers className="w-5 h-5" />, text: "Microservices Design Patterns" },
        { icon: <Shield className="w-5 h-5" />, text: "RESTful API Development & Security" },
        { icon: <Database className="w-5 h-5" />, text: "Database Integration & JPA Mastery" },
        { icon: <Target className="w-5 h-5" />, text: "Live Coding Session with Real Projects" }
    ];

    const experts = [
        {
            name: "Rajesh Sharma",
            title: "Senior Architect - 13+ Years",
            company: "IBM",
            initials: "RS",
            gradient: "from-blue-500 to-blue-700"
        },
        {
            name: "Priya Kumar",
            title: "Lead Developer - 13+ Years",
            company: "INFOSYS",
            initials: "PK",
            gradient: "from-purple-500 to-purple-700"
        },
        {
            name: "Arjun Mehta",
            title: "Principal Engineer - 13+ Years",
            company: "AMAZON",
            initials: "AM",
            gradient: "from-orange-500 to-orange-700"
        }
    ];

    const benefits = [
        {
            icon: <Briefcase className="w-8 h-8" />,
            title: "Career Advancement",
            description: "Boost your career with in-demand SpringBoot skills that top companies are looking for"
        },
        {
            icon: <GraduationCap className="w-8 h-8" />,
            title: "Expert Knowledge",
            description: "Learn directly from professionals who've built large-scale systems at Fortune 500 companies"
        },
        {
            icon: <Wrench className="w-8 h-8" />,
            title: "Hands-on Experience",
            description: "Get practical knowledge through live coding sessions and real-world project examples"
        },
        {
            icon: <Rocket className="w-8 h-8" />,
            title: "Industry Insights",
            description: "Discover the latest trends and best practices used by leading tech companies"
        }
    ];

    const FloatingDots = () => (
        <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-white/10 animate-pulse"
                    style={{
                        width: `${Math.random() * 4 + 2}px`,
                        height: `${Math.random() * 4 + 2}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${Math.random() * 3 + 2}s`
                    }}
                />
            ))}
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 text-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                <FloatingDots />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Hero Text */}
                        <div className="space-y-6 mb-6 lg:space-y-8 animate-fade-in-up order-2 lg:order-1">
                            <div className="inline-flex items-center ml-5 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                                <Sparkles className="w-4 h-4 mr-2" />
                                <span className="text-sm font-semibold">JPR Technosoft Presents</span>
                            </div>

                            <h1 className="text-3xl ml-2 sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
                                Master{' '}
                                <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent animate-pulse">
                                    Java SpringBoot
                                </span>{' '}
                                Backend Development
                            </h1>

                            <p className="text-lg sm:text-xl text-white/90 max-w-xl">
                                Learn from Industry Experts with 13+ years of experience from IBM, Infosys & Amazon
                            </p>

                            <ul className="space-y-3 ">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-base sm:text-lg font-medium">
                                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                                        <span className="hidden sm:inline">{feature.text}</span>
                                        <span className="sm:hidden">{feature.text.split(' ').slice(0, 4).join(' ')}...</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Registration Card */}
                        <div className="order-1 lg:order-2">
                            <div
                                className={`bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-white/30 relative overflow-hidden transition-transform duration-1000 ${isCardFloating ? '-translate-y-2' : 'translate-y-0'}`}
                            >
                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                                <div className="relative z-10">
                                    <div className="text-center mb-6">
                                        <h2 className="text-2xl sm:text-3xl font-black text-gray-800 mb-2">
                                            🚀 Free Registration
                                        </h2>
                                        <p className="text-gray-600 text-lg">Limited Seats Available</p>
                                    </div>

                                    {/* Countdown Timer */}
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6">
                                        {Object.entries(timeLeft).map(([unit, value]) => (
                                            <div
                                                key={unit}
                                                className="text-center bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-xl p-2 sm:p-4 shadow-lg"
                                            >
                                                <span className="block text-lg sm:text-2xl lg:text-3xl font-black">
                                                    {value.toString().padStart(2, '0')}
                                                </span>
                                                <span className="block text-[10px] sm:text-xs md:text-sm uppercase tracking-wide">
                                                    {unit}
                                                </span>
                                            </div>
                                        ))}
                                    </div>


                                    <button
                                        onClick={enrollNow}
                                        className="w-full flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white py-4 sm:py-5 px-6 text-lg sm:text-xl font-bold rounded-xl uppercase tracking-wide shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-pulse"
                                    >
                                        <span>Enroll Now -</span>
                                        <div className="flex justify-center items-center ">
                                            <IndianRupee className="w-5 h-5 sm:w-6 sm:h-6" />
                                            <span>99 FREE</span></div>
                                    </button>


                                    {/* <div className="text-center mt-4 text-gray-600">
                    <div className="flex items-center justify-center gap-2">
                      <Users className="w-4 h-4" />
                      <strong>500+ developers</strong> already registered
                    </div>
                  </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experts Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center text-gray-800 mb-12 lg:mb-16">
                        Learn from Industry Veterans
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {experts.map((expert, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600" />

                                <div className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${expert.gradient} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white text-2xl sm:text-3xl font-black group-hover:scale-110 transition-transform duration-300`}>
                                    {expert.initials}
                                </div>

                                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                                    {expert.name}
                                </h3>
                                <p className="text-gray-600 mb-4 font-medium">
                                    {expert.title}
                                </p>
                                <div className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-sm font-semibold">
                                    {expert.company}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gray-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center text-white mb-12 lg:mb-16">
                        What You'll Gain
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="text-center p-6 group">
                                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-16 sm:py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
                        Don't Miss This Opportunity!
                    </h2>


                    <button
                        onClick={enrollNow}
                        className="inline-block bg-gradient-to-r from-emerald-500 to-green-500 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-xl uppercase tracking-wide shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    >
                        Secure Your Spot Now
                    </button>
                </div>
            </section>

            {/* Custom Styles */}
            <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
        </div>
    );
};

export default JavaSpringBootWebinar;