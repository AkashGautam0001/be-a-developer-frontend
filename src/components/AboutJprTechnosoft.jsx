import { Award, Check, Globe, Shield } from "lucide-react";
import React from "react";

const AboutJprTechnosoft = () => {
  return (
    <section className="bg-gray-900 py-20 text-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">
              About JPR Technosoft
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              JPR Technosoft is a leading technology education company
              specializing in cutting-edge AI/ML training and career
              development. With over 10 years of industry experience, we've
              helped hundreds of professionals transition into high-paying AI
              careers.
            </p>
          </div>
          <div className="lg:text-center">
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-300" />
                  <span className="text-gray-100">
                    Industry-Expert Instructors
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-300" />
                  <span className="text-gray-100">Real-World Projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-300" />
                  <span className="text-gray-100">
                    Career Placement Support
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-300" />
                  <span className="text-gray-100">
                    Lifetime Community Access
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-300" />
                  <span className="text-gray-100">Money-Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutJprTechnosoft;
