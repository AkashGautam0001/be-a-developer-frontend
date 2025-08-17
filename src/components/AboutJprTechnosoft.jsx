import { Award, Check, Globe, Shield } from "lucide-react";
import React from "react";

const AboutJprTechnosoft = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-800">
              About JPR Technosoft
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              JPR Technosoft is a leading technology education company
              specializing in cutting-edge AI/ML training and career
              development. With over 13 years of industry experience, we've
              helped hundreds of professionals transition into high-paying AI
              careers.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-2 rounded-lg">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    Trusted by Industry
                  </h3>
                  <p className="text-gray-600">
                    Our graduates work at top companies including Google,
                    Microsoft, Amazon, and leading AI startups.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-lg">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Global Reach</h3>
                  <p className="text-gray-600">
                    Students from 25+ countries have benefited from our training
                    programs and career guidance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-2 rounded-lg">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    Proven Results
                  </h3>
                  <p className="text-gray-600">
                    85% of our students see salary increases of 50-200% within 6
                    months of course completion.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:text-center">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>

              <div className="space-y-4">
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
        </div>
      </div>
    </section>
  );
};

export default AboutJprTechnosoft;
