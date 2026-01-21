"use client";

import { motion } from "framer-motion";
import { FileText, Download, Calendar } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export default function JEEMainPreviousPapers() {
  const years = [
    {
      year: "2026",
      sessions: [
        { name: "Session 1 - January 2026", papers: 16 },
        { name: "Session 2 - April 2026", papers: 16 },
      ],
    },
    {
      year: "2025",
      sessions: [
        { name: "Session 1 - January 2025", papers: 16 },
        { name: "Session 2 - April 2025", papers: 16 },
      ],
    },
    {
      year: "2024",
      sessions: [
        { name: "Session 1 - January 2024", papers: 16 },
        { name: "Session 2 - April 2024", papers: 16 },
      ],
    },
    {
      year: "2023",
      sessions: [
        { name: "Session 1 - January 2023", papers: 16 },
        { name: "Session 2 - April 2023", papers: 16 },
      ],
    },
    {
      year: "2022",
      sessions: [
        { name: "Session 1 - June 2022", papers: 16 },
        { name: "Session 2 - July 2022", papers: 16 },
      ],
    },
    {
      year: "2021",
      sessions: [
        { name: "Session 1 - February 2021", papers: 16 },
        { name: "Session 2 - March 2021", papers: 16 },
        { name: "Session 3 - July 2021", papers: 16 },
        { name: "Session 4 - August 2021", papers: 16 },
      ],
    },
  ];

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
            <div className="inline-block px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-bold mb-4">
              📝 Previous Year Papers
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              JEE Main{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                Previous Papers
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Download previous year JEE Main question papers with solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Practice Previous Papers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1d35]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Practice{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                Previous Papers?
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "📊",
                  title: "Understand Pattern",
                  desc: "Get familiar with exam pattern and difficulty level",
                },
                {
                  icon: "⏱️",
                  title: "Time Management",
                  desc: "Practice solving papers within 3-hour time limit",
                },
                {
                  icon: "🎯",
                  title: "Important Topics",
                  desc: "Identify frequently asked topics and concepts",
                },
                {
                  icon: "💪",
                  title: "Build Confidence",
                  desc: "Boost confidence by solving real exam papers",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-[#1a2942] p-6 rounded-xl border border-yellow-500/30 text-center"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-white font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Previous Papers by Year */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Download{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
              Previous Papers
            </span>
          </h2>

          <div className="space-y-8">
            {years.map((yearData, index) => (
              <AnimatedSection key={index}>
                <div className="bg-[#1a2942] rounded-2xl border border-yellow-500/30 overflow-hidden">
                  <div className="bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-[#0a1628]">
                        JEE Main {yearData.year}
                      </h3>
                      <Calendar className="w-6 h-6 text-[#0a1628]" />
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      {yearData.sessions.map((session, sessionIndex) => (
                        <div
                          key={sessionIndex}
                          className="bg-[#0a1628] p-6 rounded-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all group"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h4 className="text-white font-bold text-lg mb-2">{session.name}</h4>
                              <p className="text-gray-400 text-sm">
                                {session.papers} Question Papers Available
                              </p>
                            </div>
                            <FileText className="w-8 h-8 text-yellow-400" />
                          </div>

                          <div className="space-y-3">
                            <button
                              disabled
                              className="w-full px-4 py-3 bg-gray-700/50 text-gray-500 rounded-lg font-semibold flex items-center justify-center space-x-2 cursor-not-allowed"
                            >
                              <Download size={18} />
                              <span>Coming Soon</span>
                            </button>
                            <button
                              disabled
                              className="w-full px-4 py-3 bg-gray-700/50 text-gray-500 rounded-lg font-semibold flex items-center justify-center space-x-2 cursor-not-allowed"
                            >
                              <FileText size={18} />
                              <span>Coming Soon</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1d35]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              How to Use{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                Previous Papers?
              </span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Simulate Exam Conditions",
                  desc: "Solve papers in 3 hours with no breaks, just like the actual exam",
                },
                {
                  step: "2",
                  title: "Analyze Your Performance",
                  desc: "Check answers, calculate score, and identify weak areas",
                },
                {
                  step: "3",
                  title: "Review Solutions",
                  desc: "Study detailed solutions for questions you got wrong",
                },
                {
                  step: "4",
                  title: "Track Progress",
                  desc: "Maintain a log of scores to track improvement over time",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-6 bg-[#1a2942] p-6 rounded-xl border border-yellow-500/30"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-[#0a1628] font-bold text-xl">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-400 to-amber-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#0a1628] mb-6">Need Expert Guidance?</h2>
          <p className="text-xl text-[#0a1628] mb-8">
            Join Students Paradise for comprehensive JEE preparation with previous year paper
            analysis
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
