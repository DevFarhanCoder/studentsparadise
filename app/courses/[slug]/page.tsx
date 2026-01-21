"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ChevronRight, Star, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import EnquiryModal from "@/components/EnquiryModal";
import { courseDetails } from "@/data/courseDetails";

export default function CourseDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const course = courseDetails[slug];
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    if (course) {
      document.title = `${course.title} - Admission Open | Students Paradise`;
    } else if (slug) {
      // Course not found, redirect to courses page after showing error
      console.error(`Course not found for slug: ${slug}`);
      console.log("Available slugs:", Object.keys(courseDetails));
    }
  }, [course, slug]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-[#0a1628]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Course Not Found</h1>
          <p className="text-gray-400 mb-6">The course &quot;{slug}&quot; could not be found.</p>
          <Link
            href="/courses"
            className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-[#0a1628] rounded-lg font-bold"
          >
            View All Courses
          </Link>
          <Link href="/courses" className="text-yellow-600 hover:underline">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const moreDetails = [
    "Expert Faculty: Learn from experienced teachers with proven track records in helping students achieve top ranks and scores.",
    "Comprehensive Study Material: Receive detailed modules, practice problems, and study guides to cover every topic thoroughly.",
    "Regular Mock Tests: Participate in weekly mock tests designed to simulate real exam conditions and identify areas for improvement.",
    "Interactive Learning: Engage in concept-driven activities, group discussions, and doubt-clearing sessions for better understanding.",
    "Performance Tracking: Regular assessments with detailed report cards to monitor progress and tackle weak areas effectively.",
    "Parent Dashboard: Parents can track student progress, attendance, and performance in real-time via dedicated portal.",
    "Personalized Attention: Small batch sizes ensure every student gets individual attention and customized learning support.",
    "Modern Infrastructure: Study in well-equipped classrooms with smart boards, library access, and comfortable learning environment.",
    "Career Guidance: Benefit from counseling sessions, college application support, and career planning assistance.",
    `Flexible Payment: ${course.fees} with installment options available. Contact us for scholarship opportunities.`,
  ];

  const faqs = [
    {
      q: "What are the admission requirements?",
      a: `Admission requirements: ${course.eligibility}. Students should have basic understanding of the subject matter and be committed to their learning journey.`,
    },
    {
      q: "What is the course duration?",
      a: `This course runs for ${course.duration}. Classes are scheduled regularly with comprehensive coverage of all topics.`,
    },
    {
      q: "Do you provide study materials?",
      a: "Yes, comprehensive study materials, practice papers, and online resources are provided to all enrolled students.",
    },
    {
      q: "What is the fee structure?",
      a: `Course fees: ${course.fees}. We offer flexible payment options and installment plans for your convenience.`,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-yellow-600 transition-colors">
              <Home size={16} />
            </Link>
            <ChevronRight size={16} />
            <Link href="/courses" className="hover:text-yellow-600 transition-colors">
              {course.category}
            </Link>
            <ChevronRight size={16} />
            <span className="text-gray-900 font-medium">{course.title}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Header */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-900">{course.category}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>Duration: {course.duration}</span>
                </div>
              </div>
            </div>

            {/* JEE Main Resources - Only show for JEE related courses */}
            {(slug === "jee-main-advanced-course-mumbai" ||
              slug === "jee-preparation-course-mumbai") && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 md:p-8 shadow-sm border-2 border-blue-200"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">JEE Main 2026 Resources</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Exam dates, answer keys, syllabus & more
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Link href="/jee-main">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer border border-blue-100"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">JEE Main Hub</h4>
                          <p className="text-sm text-gray-600">
                            Exam dates, pattern, syllabus, eligibility & preparation tips
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </Link>

                  <Link href="/jee-main-answer-key">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer border border-green-100"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">Answer Key 2026</h4>
                          <p className="text-sm text-gray-600">
                            Download answer keys, solved papers & estimate your score
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </div>

                <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-yellow-700">🔥 Latest Update:</span> JEE Main
                    2026 Session 1 is happening from 21-29 January 2026. Get answer keys & solutions
                    right after your exam!
                  </p>
                </div>
              </motion.div>
            )}

            {/* Tabs */}
            <div className="border-b border-gray-200">
              <div className="flex space-x-8">
                <button
                  onClick={() => setActiveTab("about")}
                  className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
                    activeTab === "about" ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  About
                  {activeTab === "about" && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("details")}
                  className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
                    activeTab === "details" ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  More Details
                  {activeTab === "details" && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    />
                  )}
                </button>
              </div>
            </div>

            {/* About the Batch */}
            {activeTab === "about" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg p-6 md:p-8 shadow-sm"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Batch</h2>
                <div className="space-y-4">
                  {course.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                          <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* More Details */}
            {activeTab === "details" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg p-6 md:p-8 shadow-sm"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">More Details</h2>
                <div className="space-y-6">
                  {moreDetails.map((detail, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <span className="flex-shrink-0 text-gray-400 font-medium text-lg">
                        {String(index + 1).padStart(2, "0")}.
                      </span>
                      <p className="text-gray-700 leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* FAQ Section */}
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          openFAQ === index ? "transform rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-4 pb-4 text-gray-600"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {/* Course Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Course Image Placeholder */}
                <div className="bg-gradient-to-br from-yellow-400 via-amber-500 to-red-500 h-48 flex items-center justify-center relative">
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded text-xs font-bold">
                    OFFLINE
                  </div>
                  <div className="text-center text-white">
                    <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                    <div className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1">
                      <span className="text-sm">{course.category}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 text-gray-600 text-sm mb-2">
                      <span>{course.category}</span>
                    </div>
                    <div className="text-gray-600 text-sm">
                      <span>Duration: {course.duration}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsEnquiryOpen(true)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">Course Info</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-600">Duration:</span>
                    <p className="text-gray-900 font-medium mt-1">{course.duration}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Mode:</span>
                    <p className="text-gray-900 font-medium mt-1">Offline Classes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        businessName="Students Paradise"
        courseName={course.title}
      />
    </div>
  );
}
