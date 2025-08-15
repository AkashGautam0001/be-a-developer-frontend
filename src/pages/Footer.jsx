import { useState } from "react";
import {
  Search,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ChevronUp,
} from "lucide-react";

const Footer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Search query:", searchQuery);
      // Add your search logic here
    }
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email.trim()) {
      console.log("Newsletter signup:", email);
      setEmail("");
      // Add your newsletter signup logic here
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info & Search */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                  LearnZone
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Empowering minds through innovative learning experiences. Join
                  thousands of learners worldwide.
                </p>
              </div>

              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSearch(e)}
                      placeholder="Search courses, topics..."
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-700/50 border border-slate-600 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, href: "#", color: "hover:text-blue-400" },
                  { icon: Twitter, href: "#", color: "hover:text-sky-400" },
                  { icon: Instagram, href: "#", color: "hover:text-pink-400" },
                  { icon: Linkedin, href: "#", color: "hover:text-blue-500" },
                  { icon: Youtube, href: "#", color: "hover:text-red-400" },
                ].map(({ icon: Icon, href, color }, index) => (
                  <a
                    key={index}
                    href={href}
                    className={`p-2 bg-slate-700/50 rounded-lg text-gray-400 ${color} transition-all duration-200 hover:bg-slate-600/50 hover:scale-110`}>
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {[
                  "All Courses",
                  "Featured",
                  "Categories",
                  "Instructors",
                  "Pricing",
                  "About Us",
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 text-sm hover:text-blue-400 transition-colors duration-200 flex items-center group">
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
              <ul className="space-y-2">
                {[
                  "Help Center",
                  "Contact Us",
                  "FAQ",
                  "Community",
                  "Privacy Policy",
                  "Terms of Service",
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 text-sm hover:text-blue-400 transition-colors duration-200 flex items-center group">
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Stay Connected
              </h3>

              {/* Newsletter */}
              <div className="mb-6">
                <p className="text-gray-300 text-sm mb-3">
                  Get updates on new courses and features
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={handleNewsletter}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-300 text-sm">
                  <Mail className="w-4 h-4 mr-3 text-blue-400" />
                  support@learnzone.com
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <Phone className="w-4 h-4 mr-3 text-blue-400" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                  San Francisco, CA
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()} LearnZone. All rights reserved.
                Made with ❤️ for learners worldwide.
              </div>

              <div className="flex items-center gap-6">
                <div className="flex gap-4 text-sm">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    Privacy
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    Terms
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    Cookies
                  </a>
                </div>

                {/* Back to Top Button */}
                <button
                  onClick={scrollToTop}
                  className="p-2 bg-slate-700/50 rounded-lg text-gray-400 hover:text-white hover:bg-slate-600/50 transition-all duration-200 hover:scale-110"
                  aria-label="Back to top">
                  <ChevronUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
