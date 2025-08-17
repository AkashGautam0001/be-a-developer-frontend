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
  ChevronRight,
  Sparkles,
  Trophy,
  Timer,
  BookMarked,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import ContactSection from "../../components/ContactSection";
import EnrollButton from "../../components/EnrollButton";
import AboutJprTechnosoft from "../../components/AboutJprTechnosoft";
import Footer from "../../components/Footer";

const QAWebinar = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
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

  const enrollNow = () => {
    navigate("/course/qa-testing-master-course");
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      {/* <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <TestTube className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">JPR Technosoft</span>
            </div>
            <button
              onClick={enrollNow}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2 rounded-full font-semibold text-sm hover:scale-105 transition-transform">
              Join Webinar
            </button>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
              animation: "float 20s infinite linear",
            }}></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700 mb-8">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-sm font-medium">Free Masterclass</span>
            <div className="w-2 h-2 bg-red-500 rounded-full ml-3 animate-pulse"></div>
            <span className="text-xs text-red-400 ml-1">LIVE</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Master QA Testing
            </span>
            <br />
            <span className="text-white">in 2024</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join 500+ professionals who transformed their careers with our
            expert-led training program
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button
              onClick={enrollNow}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25">
              <Play className="w-5 h-5 inline mr-2" />
              Enroll Now
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">13+</div>
              <div className="text-sm text-gray-500">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">500+</div>
              <div className="text-sm text-gray-500">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400">95%</div>
              <div className="text-sm text-gray-500">Job Success</div>
            </div>
          </div>
        </div>

        {/* Floating registration card */}
        {/* <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
          <div className="bg-gray-900/90 backdrop-blur-xl p-6 rounded-3xl border border-gray-700 w-80 shadow-2xl">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 rounded-2xl text-center mb-4">
              <Timer className="w-6 h-6 mx-auto mb-2" />
              <div className="text-sm font-semibold">
                Registration Closes In:
              </div>
              <div className="flex justify-center space-x-4 mt-2">
                <div>
                  <div className="text-2xl font-bold">
                    {timeLeft.hours.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs">HRS</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    {timeLeft.minutes.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs">MIN</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    {timeLeft.seconds.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs">SEC</div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-bold mb-4">QA Career Mastery</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm">
                <Calendar className="w-4 h-4 text-cyan-400 mr-3" />
                <span>Nov 25, 2024</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="w-4 h-4 text-purple-400 mr-3" />
                <span>3 Hours Duration</span>
              </div>
              <div className="flex items-center text-sm">
                <Users className="w-4 h-4 text-pink-400 mr-3" />
                <span>Limited to 50 Seats</span>
              </div>
            </div>

            <button
              onClick={enrollNow}
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
              Secure My Spot
            </button>
          </div>
        </div> */}
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Why Choose Us?
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to excel in QA testing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Instructors</h3>
              <p className="text-gray-400">
                Learn from industry veterans with 15+ years of experience
              </p>
            </div>

            <div className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Career Growth</h3>
              <p className="text-gray-400">
                95% of our graduates land jobs within 3 months
              </p>
            </div>

            <div className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Certification</h3>
              <p className="text-gray-400">
                Industry-recognized certificates to boost your profile
              </p>
            </div>

            <div className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-gray-400">
                Join a thriving network of QA professionals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Master These Skills
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Comprehensive training across all QA domains
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-colors">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <TestTube className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Manual Testing</h3>
                </div>
                <p className="text-gray-400">
                  Master test planning, execution, and defect management
                </p>
              </div>

              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-colors">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Automation Testing</h3>
                </div>
                <p className="text-gray-400">
                  Selenium, TestNG, and modern automation frameworks
                </p>
              </div>

              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-colors">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Performance Testing</h3>
                </div>
                <p className="text-gray-400">
                  Load testing with JMeter and performance optimization
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-colors">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">API Testing</h3>
                </div>
                <p className="text-gray-400">
                  REST, SOAP, GraphQL testing with Postman & RestAssured
                </p>
              </div>

              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition-colors">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Security Testing</h3>
                </div>
                <p className="text-gray-400">
                  OWASP guidelines and vulnerability assessment
                </p>
              </div>

              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-pink-500/50 transition-colors">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-600 rounded-xl flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Mobile Testing</h3>
                </div>
                <p className="text-gray-400">
                  iOS & Android testing with Appium automation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Real results from real students
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-800">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">PK</span>
                </div>
                <div>
                  <div className="font-bold">Priya Kumari</div>
                  <div className="text-sm text-gray-400">
                    Senior QA Engineer
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-300 italic">
                "Landed a senior role with 40% salary increase within 3 months.
                The hands-on training was incredible!"
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-800">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">RS</span>
                </div>
                <div>
                  <div className="font-bold">Rajesh Singh</div>
                  <div className="text-sm text-gray-400">
                    QA Automation Lead
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-300 italic">
                "Now leading automation initiatives at my company. The
                instructors' expertise really shows!"
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-800">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">AM</span>
                </div>
                <div>
                  <div className="font-bold">Anjali Mehta</div>
                  <div className="text-sm text-gray-400">QA Manager</div>
                </div>
              </div>
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-300 italic">
                "From manual testing to leadership role. The career guidance was
                invaluable!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Ready to Transform Your Career?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the next batch of QA professionals who will dominate the
            testing industry
          </p>

          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 max-w-md mx-auto mb-8">
            <div className="text-red-400 font-bold mb-4">
              Registration Closes In:
            </div>
            <div className="flex justify-center space-x-6 mb-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">
                  {timeLeft.hours.toString().padStart(2, "0")}
                </div>
                <div className="text-sm text-gray-400">Hours</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">
                  {timeLeft.minutes.toString().padStart(2, "0")}
                </div>
                <div className="text-sm text-gray-400">Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">
                  {timeLeft.seconds.toString().padStart(2, "0")}
                </div>
                <div className="text-sm text-gray-400">Seconds</div>
              </div>
            </div>
            <p className="text-sm text-gray-400">Only 50 seats available!</p>
          </div>

          <button
            onClick={enrollNow}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 px-12 py-6 rounded-2xl font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-500/25 mb-8">
            <Zap className="w-6 h-6 inline mr-3" />
            Join Webinar Now
          </button>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-400">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span>100% Free Registration</span>
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 text-yellow-400 mr-2" />
              <span>Certificate Included</span>
            </div>
            <div className="flex items-center">
              <Download className="w-4 h-4 text-cyan-400 mr-2" />
              <span>Resources & Materials</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <ContactSection />
      <AboutJprTechnosoft />
      <Footer />
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <TestTube className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">JPR Technosoft</div>
                <div className="text-sm text-gray-400">
                  Empowering QA Excellence
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 9540472951</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@jprtechnosoft.com</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            © 2024 JPR Technosoft. All rights reserved. | Transforming careers
            through quality education.
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateX(0) translateY(0);
          }
          100% {
            transform: translateX(-100px) translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
};

export default QAWebinar;
