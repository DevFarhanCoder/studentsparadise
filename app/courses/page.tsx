"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, GraduationCap } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { courses } from "@/data/studentsParadise";

const categories = [
  { id: "all", label: "All Programs" },
  { id: "School", label: "School (11th/12th)" },
  { id: "Competitive", label: "Competitive Exams" },
  { id: "Commerce", label: "Commerce" },
  { id: "IT", label: "IT & Computer" },
];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0a1628] pt-20">
      {/* Courses Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Explore Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-red-500">
                Programs
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose from our wide range of courses tailored to meet your educational needs
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
                className={`px-6 py-3 rounded-lg font-bold transition-all border-2 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-[#0a1628] border-amber-500 shadow-xl"
                    : "bg-[#1a2942] text-yellow-400 border-yellow-500/30 hover:border-yellow-500"
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>

          {/* Course Count */}
          <div className="text-center mb-8">
            <p className="text-lg text-gray-400">
              Showing{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                {filteredCourses.length}
              </span>{" "}
              courses
            </p>
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => {
              const courseSlug = course.title
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^\w-]/g, "");

              return (
                <Link key={course.title} href={`/students-paradise/courses/${courseSlug}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group relative p-6 rounded-xl bg-[#1a2942] shadow-xl hover:shadow-2xl hover:shadow-yellow-500/20 transition-all border-2 border-yellow-500/30 hover:border-yellow-500 overflow-hidden cursor-pointer"
                  >
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-red-400 to-red-500 text-white text-xs font-bold rounded-full shadow-lg">
                      {course.category}
                    </div>

                    {/* Content */}
                    <div className="pt-8">
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-amber-500 transition-all">
                        {course.title}
                      </h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">{course.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock size={16} className="mr-2" />
                          <span>{course.duration}</span>
                        </div>
                        <span className="text-yellow-400 text-sm font-bold">Learn More →</span>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-red-400/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* No courses message */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-400">
                No courses found in this category. Please select a different category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0d1d35] via-[#0a1628] to-[#1a2942]">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Contact us to discuss your specific learning needs and we'll create a customized
              program for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold shadow-2xl hover:shadow-white/30 transition-all"
              >
                Contact Us
              </motion.a>
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white rounded-xl font-semibold border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                Learn More About Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
