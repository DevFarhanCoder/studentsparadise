"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap, Award, Clock, Users, Building, Briefcase } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { courses, studentsParadiseFeatures } from "@/data/studentsParadise";

const categories = [
  { id: "all", label: "All Programs" },
  { id: "School", label: "School (11th/12th)" },
  { id: "Competitive", label: "Competitive Exams" },
  { id: "Commerce", label: "Commerce" },
  { id: "IT", label: "IT & Computer" },
];

export default function StudentsParadise() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const iconMap: { [key: string]: any } = {
    Users,
    Building,
    Briefcase,
    Clock,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-white dark:from-gray-900 dark:via-purple-900/10 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 opacity-90" />

        {/* Animated Background Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mb-8 inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-lg rounded-lg hover:bg-white/30 transition-all"
            >
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </motion.button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center mb-6"
          >
            <GraduationCap size={64} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Students Paradise
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto"
          >
            Your Complete Education & Career Partner — From School to Competitive Exams to IT
            Excellence
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base"
          >
            <div className="px-4 py-2 bg-white/20 backdrop-blur-lg rounded-lg">
              11th & 12th Coaching
            </div>
            <div className="px-4 py-2 bg-white/20 backdrop-blur-lg rounded-lg">
              JEE • NEET • Foundation
            </div>
            <div className="px-4 py-2 bg-white/20 backdrop-blur-lg rounded-lg">
              Commerce Programs
            </div>
            <div className="px-4 py-2 bg-white/20 backdrop-blur-lg rounded-lg">
              IT & Computer Courses
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              More Than Just{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
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
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all border border-purple-200 dark:border-purple-900"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Programs
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Explore our comprehensive range of courses designed for your success
            </p>
          </AnimatedSection>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => {
              const courseSlug = course.title
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^\w-]/g, "");
              const hasDetailPage = [
                "jee-preparation",
                "neet-preparation",
                "web-development",
                "mern-stack",
                "python-ai-ml",
              ].includes(courseSlug);

              const CardContent = (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative p-6 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all border border-gray-200 overflow-hidden cursor-pointer"
                >
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full">
                    {course.category}
                  </div>

                  {/* Content */}
                  <div className="pt-8">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock size={16} className="mr-2" />
                        <span>{course.duration}</span>
                      </div>
                      {hasDetailPage && (
                        <span className="text-purple-600 text-sm font-semibold">
                          View Details →
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </motion.div>
              );

              return hasDetailPage ? (
                <Link key={course.title} href={`/courses/${courseSlug}`}>
                  {CardContent}
                </Link>
              ) : (
                CardContent
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Thousands of Successful Students
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed">
              Our students have achieved remarkable success in competitive exams, academic
              excellence, and launched thriving careers in the IT industry. Be part of the Students
              Paradise family.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold shadow-2xl hover:shadow-white/30 transition-all"
              >
                Enroll Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white rounded-xl font-semibold border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Gallery
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Glimpses of our vibrant learning environment and student achievements
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* PCL Images at the start */}
            {["PCL 1.jpg", "PCL 2.jpg", "PCL 2026 Winner.jpg", "PCL 2026.jpg"].map(
              (image, index) => (
                <motion.div
                  key={image}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/${image}`}
                    alt={`Gallery ${image}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )
            )}
            {/* Regular numbered images */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num, index) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 4) * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/${num}.${num <= 3 ? "jpeg" : "jpg"}`}
                  alt={`Gallery ${num}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              What Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Students Say
              </span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Award key={idx} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                  &quot;The teaching methodology and support from Students Paradise helped me
                  achieve my dream of cracking JEE Advanced. Highly recommended for serious
                  students!&quot;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Student Name</div>
                    <div className="text-sm text-gray-500">JEE Advanced Qualifier</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
