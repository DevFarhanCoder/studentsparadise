"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Clock, Award, Target, CheckCircle, Play } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export default function JEEMainMockTests() {
  const [selectedLevel, setSelectedLevel] = useState<"beginner" | "intermediate" | "advanced">(
    "intermediate"
  );

  const mockTests = {
    beginner: [
      { name: "Foundation Test 1 - Basic Concepts", duration: "180 min", questions: 90 },
      { name: "Foundation Test 2 - Easy to Medium", duration: "180 min", questions: 90 },
      { name: "Foundation Test 3 - Concept Building", duration: "180 min", questions: 90 },
    ],
    intermediate: [
      { name: "Mock Test 1 - JEE Main Pattern", duration: "180 min", questions: 90 },
      { name: "Mock Test 2 - Mixed Difficulty", duration: "180 min", questions: 90 },
      { name: "Mock Test 3 - Previous Year Level", duration: "180 min", questions: 90 },
      { name: "Mock Test 4 - Full Length", duration: "180 min", questions: 90 },
      { name: "Mock Test 5 - Advanced Practice", duration: "180 min", questions: 90 },
    ],
    advanced: [
      { name: "Advanced Mock Test 1 - Challenging", duration: "180 min", questions: 90 },
      { name: "Advanced Mock Test 2 - High Difficulty", duration: "180 min", questions: 90 },
      { name: "Advanced Mock Test 3 - JEE Advanced Level", duration: "180 min", questions: 90 },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0a1628] pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0d1d35] via-[#0a1628] to-[#1a2942]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-green-500 text-white rounded-full text-sm font-bold mb-4 animate-pulse">
              🎯 Free Mock Tests
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              JEE Main{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                Mock Tests 2026
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Practice with full-length mock tests designed exactly like JEE Main exam
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1d35]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Take Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                Mock Tests?
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Exact Pattern",
                  desc: "Tests designed exactly like JEE Main exam pattern",
                  color: "blue",
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "Timed Tests",
                  desc: "3-hour time limit to simulate real exam pressure",
                  color: "green",
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Instant Results",
                  desc: "Get detailed analysis and solutions immediately",
                  color: "purple",
                },
                {
                  icon: <BookOpen className="w-8 h-8" />,
                  title: "Topic-wise Analysis",
                  desc: "Know your strong and weak areas in each subject",
                  color: "yellow",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#1a2942] p-6 rounded-xl border border-yellow-500/30 text-center hover:border-yellow-500/50 transition-all"
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                      feature.color === "blue"
                        ? "bg-blue-500/20 text-blue-400"
                        : feature.color === "green"
                          ? "bg-green-500/20 text-green-400"
                          : feature.color === "purple"
                            ? "bg-purple-500/20 text-purple-400"
                            : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mock Tests Selection */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Choose Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                Difficulty Level
              </span>
            </h2>

            {/* Level Selector */}
            <div className="flex justify-center space-x-4 mb-12">
              {(["beginner", "intermediate", "advanced"] as const).map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-6 py-3 rounded-xl font-bold transition-all ${
                    selectedLevel === level
                      ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-[#0a1628]"
                      : "bg-[#1a2942] text-gray-400 hover:text-white border border-yellow-500/30"
                  }`}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>

            {/* Mock Tests Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockTests[selectedLevel].map((test, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1a2942] rounded-2xl border border-yellow-500/30 overflow-hidden hover:border-yellow-500/50 transition-all group"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
                    <h3 className="text-white font-bold text-lg">{test.name}</h3>
                  </div>

                  <div className="p-6">
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-gray-300">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm">Duration</span>
                        </div>
                        <span className="font-semibold">{test.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-gray-300">
                        <div className="flex items-center space-x-2">
                          <BookOpen className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm">Questions</span>
                        </div>
                        <span className="font-semibold">{test.questions}</span>
                      </div>
                    </div>

                    <button
                      disabled
                      className="w-full px-6 py-3 bg-gray-700/50 text-gray-500 rounded-xl font-bold cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      <Play size={20} />
                      <span>Coming Soon</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Test Instructions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1d35]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Test{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                Instructions
              </span>
            </h2>

            <div className="bg-[#1a2942] rounded-2xl border border-yellow-500/30 p-8">
              <div className="space-y-4">
                {[
                  "Each test contains 90 questions - 30 from each subject (Physics, Chemistry, Mathematics)",
                  "Total duration is 3 hours (180 minutes)",
                  "Each correct answer gives +4 marks, incorrect answer gives -1 mark",
                  "There are 20 MCQs and 10 Numerical questions in each subject",
                  "For Numerical questions, there is no negative marking",
                  "You can review and change answers before submitting",
                  "After submission, you'll get instant results with detailed solutions",
                  "Your performance will be analyzed topic-wise and subject-wise",
                ].map((instruction, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{instruction}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-400 to-amber-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#0a1628] mb-6">
            Want Personalized Mock Test Analysis?
          </h2>
          <p className="text-xl text-[#0a1628] mb-8">
            Join Students Paradise for expert guidance and detailed performance analysis
          </p>
          <Link href="/courses/jee-main-advanced-course-mumbai">
            <button className="px-10 py-4 bg-[#0a1628] text-white rounded-xl font-bold shadow-2xl hover:scale-105 transition-transform">
              Enroll in JEE Program →
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
