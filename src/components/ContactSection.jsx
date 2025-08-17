import { Mail, MessageCircle, Phone } from "lucide-react";
import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Have Questions? We're Here to Help!
          </h2>
          <p className="text-xl text-gray-300">
            Get in touch with our team for any queries about the webinar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-2">Phone Support</h3>
            <p className="text-gray-300">+91 9876543210</p>
            <p className="text-sm text-gray-400 mt-2">Mon-Fri 9AM-6PM IST</p>
          </div>

          <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-2">Email Support</h3>
            <p className="text-gray-300">support@jprtechnosoft.com</p>
            <p className="text-sm text-gray-400 mt-2">24/7 Support</p>
          </div>

          <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-2">Live Chat</h3>
            <p className="text-gray-300">Instant Support</p>
            <p className="text-sm text-gray-400 mt-2">Available on website</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
