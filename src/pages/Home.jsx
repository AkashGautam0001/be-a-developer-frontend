import React, { useState, useEffect, useRef } from "react";
import {
  BookOpen,
  Users,
  Clock,
  Star,
  Award,
  Play,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  CheckCircle,
  Quote
} from "lucide-react";

const Home = () => {
  const [isVisible, setIsVisible] = useState({
    courses: false,
    reviews: false,
    contact: false,
  });

  const coursesRef = useRef();
  const reviewsRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.dataset.section]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = [
      { ref: coursesRef, name: 'courses' },
      { ref: reviewsRef, name: 'reviews' },
      { ref: contactRef, name: 'contact' }
    ];

    sections.forEach(({ ref, name }) => {
      if (ref.current) {
        ref.current.dataset.section = name;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const courses = [
    {
      id: 1,
      title: "Web Development Masterclass",
      description: "Learn HTML, CSS, JavaScript, React, and Node.js from scratch to build modern web applications.",
      instructor: "John Smith",
      duration: "12 weeks",
      students: "2,500+",
      rating: 4.8,
      price: "$199",
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
    },
    {
      id: 2,
      title: "Java",
      description: "Master SEO, Social Media Marketing, PPC, Email Marketing and Analytics to grow any business online.",
      instructor: "Sarah Johnson",
      duration: "8 weeks",
      students: "1,800+",
      rating: 4.9,
      price: "$149",
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      skills: ["SEO", "Social Media", "PPC", "Email Marketing", "Analytics"]
    },
    {
      id: 3,
      title: "Data Science & Analytics",
      description: "Learn Python, SQL, Machine Learning, and Data Visualization to become a data-driven professional.",
      instructor: "Dr. Michael Chen",
      duration: "16 weeks",
      students: "3,200+",
      rating: 4.7,
      price: "$299",
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      skills: ["Python", "SQL", "Machine Learning", "Tableau", "Statistics"]
    },
    {
      id: 4,
      title: "UI/UX Design Complete",
      description: "Master user interface and user experience design with Figma, Adobe XD, and design principles.",
      instructor: "Emma Wilson",
      duration: "10 weeks",
      students: "1,500+",
      rating: 4.8,
      price: "$179",
      image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems"]
    },
    {
      id: 5,
      title: "Mobile App Development",
      description: "Build native mobile apps for iOS and Android using React Native and Flutter frameworks.",
      instructor: "Alex Rodriguez",
      duration: "14 weeks",
      students: "2,100+",
      rating: 4.6,
      price: "$249",
      image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"]
    },
    {
      id: 6,
      title: "React Native",
      description: "Learn ethical hacking, network security, and cyber defense to protect digital assets.",
      instructor: "David Kim",
      duration: "12 weeks",
      students: "1,200+",
      rating: 4.7,
      price: "$219",
      image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      skills: ["Ethical Hacking", "Network Security", "Penetration Testing", "Risk Assessment"]
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Jennifer Martinez",
      course: "Web Development Masterclass",
      rating: 5,
      comment: "This course completely transformed my career! The instructor explains complex concepts in a way that's easy to understand. I landed my first developer job within 3 months of completing the course.",
      avatar: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      name: "Robert Taylor",
      course: "Digital Marketing Bootcamp",
      rating: 5,
      comment: "Outstanding content and practical exercises. I was able to increase my company's online presence by 300% using the strategies learned in this course. Highly recommended!",
      avatar: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      name: "Lisa Wang",
      course: "Data Science & Analytics",
      rating: 5,
      comment: "The most comprehensive data science course I've taken. Dr. Chen's teaching style is exceptional, and the hands-on projects really helped me build a strong portfolio.",
      avatar: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 4,
      name: "Mark Thompson",
      course: "UI/UX Design Complete",
      rating: 5,
      comment: "Emma's design course is pure gold! The projects are industry-relevant, and I learned design thinking that I use every day in my job. Worth every penny!",
      avatar: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    }
  ];

  const CourseCard = ({ course, delay = 0 }) => (
    <div
      className={`transform transition-all duration-700 ${isVisible.courses
          ? "translate-y-0 opacity-100"
          : "translate-y-20 opacity-0"
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">

        {/* Image Section */}
        <div
          className="relative overflow-hidden h-40 sm:h-48 md:h-56 bg-cover bg-center"
          style={{ backgroundImage: `url(${course.image})` }}
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />

          <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm font-semibold text-white">
              {course.price}
            </div>
          </div>

          <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-cyan-300 transition-colors">
              {course.title}
            </h3>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-6">
          <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
            {course.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
            {course.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Duration, Students, Rating */}
          <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="flex items-center">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                {course.duration}
              </div>
              <div className="flex items-center">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                {course.students}
              </div>
            </div>
            <div className="flex items-center">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400 mr-1" />
              {course.rating}
            </div>
          </div>

          {/* Instructor */}
          <div className="flex items-center justify-between mb-4 sm:mb-6 text-xs sm:text-sm">
            <span className="text-gray-300">by {course.instructor}</span>
          </div>

          {/* Button */}
          <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-1 sm:space-x-2 group text-sm sm:text-base">
            <span>Enroll Now</span>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );


  const ReviewCard = ({ review, delay = 0 }) => (
    <div
      className={`transform transition-all duration-700 ${isVisible.reviews ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
        <div className="flex items-start space-x-4 mb-4">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
            style={{ backgroundImage: review.avatar }}
          >
            {review.name.charAt(0)}
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-white">{review.name}</h4>
            <p className="text-sm text-gray-400">{review.course}</p>
            <div className="flex items-center mt-1">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
        <Quote className="w-6 h-6 text-purple-400 mb-2" />
        <p className="text-gray-300 leading-relaxed">
          {review.comment}
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-8 pb-10  sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-5 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
              Master New Skills
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Transform Your Career Today
            </h2>
          </div>

          <div className="animate-fade-in-up animation-delay-200">
            <p className="text-xl text-justify sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed drop-shadow-lg">
              Join thousands of students worldwide in our comprehensive online courses. Learn from industry experts,
              build real projects, and advance your career with practical skills that matter.
            </p>
          </div>

          <div className="animate-fade-in-up animation-delay-400">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-cyan-400" />
                <span className="text-lg">12,000+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-purple-400" />
                <span className="text-lg">Expert Instructors</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-lg">Lifetime Access</span>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up  animation-delay-600">
            <button className="group lg:p-4 lg:px-6 lg-gap-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-5 py-2 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 flex items-center justify-center  mx-auto">
              <BookOpen className="w-8 h-8 lg:mr-2" />
              <span>Start Learning Today</span>
              <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-10  sm:px-6 lg:px-8 relative" ref={coursesRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
               Courses
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our carefully crafted courses designed by industry professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard
                key={course.id}
                course={course}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-10  sm:px-6 lg:px-8 relative" ref={reviewsRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center  mb-10">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our students who transformed their careers with our courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <ReviewCard
                key={review.id}
                review={review}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10  sm:px-6 lg:px-8 relative" ref={contactRef}>
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-12 transform transition-all duration-700 ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions? We're here to help you choose the right course for your goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div
              className={`transform transition-all duration-700 ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8">

                {/* Title */}
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                  Contact Information
                </h3>

                {/* Contact Items */}
                <div className="space-y-4 sm:space-y-6">

                  {/* Phone */}
                  <div className="flex gap-6 sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white font-semibold text-sm sm:text-base">Phone</p>
                      <p className="text-gray-300 text-xs sm:text-base break-all sm:break-normal">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-6 sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white font-semibold text-sm sm:text-base">Email</p>
                      <p className="text-gray-300 text-xs sm:text-base break-all sm:break-normal">
                        info@courseplatform.com
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex gap-6 sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white font-semibold text-sm sm:text-base">Address</p>
                      <p className="text-gray-300 text-xs sm:text-base break-words sm:break-normal">
                        123 Learning Street, Education City, EC 12345
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-6 text-center sm:mt-8">
                  <h4 className="text-sm sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                    Follow Us
                  </h4>
                  <div className="flex justify-center gap-2 sm:gap-4">
                    {[
                      { icon: Facebook, label: 'Facebook' },
                      { icon: Twitter, label: 'Twitter' },
                      { icon: Instagram, label: 'Instagram' },
                      { icon: Linkedin, label: 'LinkedIn' }
                    ].map((social, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                        aria-label={social.label}
                      >
                        <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>


            {/* Contact Form */}
            <div
              className={`transform transition-all duration-700 ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="bg-white/5 w-full backdrop-blur-sm border border-white/10 rounded-2xl p-3 lg:p-7">
                <h3 className="text-2xl  text-white mb-5 lg:mb-8 lg:font-semibold">Send us a Message</h3>

                <div className="space-y-5 lg:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 lg:space-y-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 lg:space-y-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 lg:space-y-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />

                  <textarea
                    placeholder="Your Message"
                    rows="3"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 lg:space-y-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  ></textarea>

                  <button
                    onClick={() => alert('Thank you for your message! We will get back to you soon.')}
                    className="w-full p-2 lg:p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 "
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



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
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}
      </style>
    </div>
  );
};

export default Home;