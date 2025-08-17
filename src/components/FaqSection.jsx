import React from "react";

const FaqSection = () => {
  return (
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
  );
};

export default FaqSection;
