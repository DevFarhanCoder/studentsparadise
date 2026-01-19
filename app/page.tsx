"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Clock, Award, Users, Building, Briefcase } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import StatsCounter from "@/components/StatsCounter";
import EnquiryModal from "@/components/EnquiryModal";
import { courses, studentsParadiseFeatures } from "@/data/studentsParadise";
import { slugify } from "@/lib/slugify";

const categories = [
  { id: "all", label: "All Programs" },
  { id: "School", label: "School (11th/12th)" },
  { id: "Competitive", label: "Competitive Exams" },
  { id: "Commerce", label: "Commerce" },
  { id: "IT", label: "IT & Computer" },
];

export default function Home() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  const iconMap: { [key: string]: any } = {
    Users,
    Building,
    Briefcase,
    Clock,
  };

  const stats = [
    { value: 500, label: "Students Enrolled", suffix: "+" },
    { value: 95, label: "Success Rate", suffix: "%" },
    { value: 15, label: "Expert Faculty", suffix: "+" },
    { value: 20, label: "Courses Offered", suffix: "+" },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-[#0a1628] via-[#0d1d35] to-[#1a2942]">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-amber-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Shows first on mobile */}
            <div className="text-white order-1 lg:order-1">
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
              >
                Transform Your Future with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-red-500">
                  Students Paradise
                </span>
              </motion.h1>

              {/* Image - Shows second on mobile, but on right side on desktop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="lg:hidden mb-8 relative"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-red-500/20 rounded-3xl transform rotate-3"></div>
                  <div className="relative rounded-3xl overflow-hidden border-4 border-yellow-500/40 shadow-2xl">
                    <img
                      src="/Founder & Co-Founder.jpg"
                      alt="Founder & Co-Founder"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent"></div>
                  </div>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
              >
                Your Complete Education & Career Partner — From School Excellence to Competitive
                Exam Success to IT Mastery
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-[#0a1628] rounded-xl font-bold shadow-xl hover:shadow-2xl hover:shadow-yellow-500/30 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Explore Courses</span>
                  <ArrowRight size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsEnquiryOpen(true)}
                  className="px-8 py-4 bg-transparent text-red-400 rounded-xl font-bold border-2 border-red-400 hover:bg-red-500 hover:text-white transition-all"
                >
                  Enquiry Now
                </motion.button>
              </motion.div>
            </div>

            {/* Right Content - Founder Image (Desktop only) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block relative order-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-red-500/20 rounded-3xl transform rotate-3"></div>
                <div className="relative rounded-3xl overflow-hidden border-4 border-yellow-500/40 shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300">
                  <img
                    src="/Founder & Co-Founder.jpg"
                    alt="Founder & Co-Founder"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1d35]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 via-amber-500 to-red-500 text-[#0a1628] rounded-2xl text-sm font-extrabold mb-4 border-2 border-yellow-300 shadow-2xl shadow-yellow-500/50 animate-gradient uppercase tracking-wider">
              WHY CHOOSE US
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              More Than Just{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-red-500">
                Education
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Students Paradise is a comprehensive education platform offering academic excellence
              for school students, intensive preparation for competitive exams like JEE and NEET,
              commerce programs including BBA, and cutting-edge IT & Computer courses to prepare you
              for the future of technology.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentsParadiseFeatures.map((feature, index) => {
              const Icon = iconMap[feature.icon] || Award;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="p-6 rounded-2xl bg-[#1a2942] shadow-xl hover:shadow-2xl hover:shadow-yellow-500/20 transition-all border-2 border-yellow-500/30 hover:border-yellow-500"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center mb-4 shadow-lg">
                    <Icon size={28} className="text-[#0a1628]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm font-bold mb-4 border border-red-500/30">
              OUR PROGRAMS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Discover Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-red-500">
                Courses
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Explore our comprehensive range of courses designed for your success
            </p>
            <Link href="/courses">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-[#0a1628] rounded-xl font-bold shadow-lg hover:shadow-xl hover:shadow-yellow-500/30 transition-all"
              >
                View All Courses →
              </motion.button>
            </Link>
          </AnimatedSection>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              return (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-bold transition-all border-2 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-yellow-400 to-amber-500 border-amber-500 text-[#0a1628] shadow-xl"
                      : "bg-[#1a2942] border-yellow-500/30 text-yellow-400 hover:border-yellow-500"
                  }`}
                >
                  {category.label}
                </motion.button>
              );
            })}
          </div>

          {/* Course Cards - Show limited */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.slice(0, 6).map((course, index) => {
              const courseSlug = slugify(course.title);

              return (
                <Link key={course.title} href={`/students-paradise/courses/${courseSlug}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -10 }}
                    className="group relative p-6 rounded-2xl bg-[#1a2942] shadow-xl hover:shadow-2xl hover:shadow-yellow-500/20 transition-all border-2 border-yellow-500/30 hover:border-yellow-500 overflow-hidden cursor-pointer"
                  >
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-red-400 to-red-500 text-white text-xs font-bold rounded-full shadow-lg">
                      {course.category}
                    </div>

                    {/* Content */}
                    <div className="pt-8">
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-gray-400 mb-4 leading-relaxed line-clamp-2">
                        {course.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500 font-medium">
                          <Clock size={16} className="mr-2" />
                          <span>{course.duration}</span>
                        </div>
                        <span className="text-purple-600 text-sm font-bold group-hover:translate-x-2 transition-transform">
                          Learn More →
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1d35]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm font-bold mb-4 border border-red-500/30">
              OUR ACHIEVEMENTS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Success in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-red-500">
                Numbers
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Building excellence through dedicated teaching and student success
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const colors = [
                "from-yellow-400 to-amber-500",
                "from-red-400 to-red-500",
                "from-amber-400 to-yellow-500",
                "from-yellow-500 to-red-400",
              ];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-[#1a2942] p-8 rounded-2xl text-center border border-yellow-500/20 shadow-xl hover:shadow-2xl hover:shadow-yellow-500/20 hover:border-yellow-500/40 transition-all"
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${colors[index]} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    {index === 0 && (
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    )}
                    {index === 3 && (
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    )}
                  </div>
                  <StatsCounter value={stat.value} label={stat.label} suffix={stat.suffix} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-bold mb-4 border border-yellow-500/30">
              CAMPUS LIFE
            </span>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-red-500">
                Gallery
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Glimpses of our vibrant learning environment and student achievements
            </p>
            <Link href="/gallery">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-[#0a1628] rounded-xl font-bold shadow-lg hover:shadow-xl hover:shadow-yellow-500/30 transition-all"
              >
                View Full Gallery →
              </motion.button>
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "PCL 1.jpg",
              "PCL 2.jpg",
              "PCL 2026 Winner.jpg",
              "PCL 2026.jpg",
              "1.jpeg",
              "2.jpeg",
              "3.jpeg",
              "4.jpg",
            ].map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-yellow-500/20 transition-all group border-2 border-yellow-500/30 hover:border-yellow-500"
              >
                <img
                  src={`/${image}`}
                  alt={`Gallery ${image}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0d1d35] via-[#0a1628] to-[#1a2942] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-red-500">
                Success Story?
              </span>
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join thousands of successful students who have achieved their dreams with Students
              Paradise. Your journey to excellence starts here!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsEnquiryOpen(true)}
                className="px-10 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-[#0a1628] rounded-xl font-bold shadow-2xl hover:shadow-yellow-500/50 transition-all text-lg"
              >
                Enroll Now
              </motion.button>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-transparent text-red-400 rounded-xl font-bold border-2 border-red-400 hover:bg-red-500 hover:text-white transition-all text-lg"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        businessName="Students Paradise"
      />
    </div>
  );
}
