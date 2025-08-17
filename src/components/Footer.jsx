import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              JPR Technosoft
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Empowering professionals to build successful careers in AI and
              emerging technologies through expert training and mentorship.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <div className="space-y-2 text-gray-400">
              <div className="hover:text-white cursor-pointer transition-colors">
                About Us
              </div>
              <div className="hover:text-white cursor-pointer transition-colors">
                Courses
              </div>
              <div className="hover:text-white cursor-pointer transition-colors">
                Success Stories
              </div>
              <div className="hover:text-white cursor-pointer transition-colors">
                Contact
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <div>📧 support@jprtechnosoft.com</div>
              <div>📞 +91 9876543210</div>
              <div>🌐 www.jprtechnosoft.com</div>
              <div>📍 Gurugram, Haryana, India</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 JPR Technosoft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
