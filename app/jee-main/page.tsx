"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  FileText,
  BookOpen,
  Award,
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import EnquiryModal from "@/components/EnquiryModal";

export default function JEEMainHub() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const importantDates = [
    { event: "Online Application", session1: "31 Oct - 27 Nov 2025", session2: "February 2026" },
    { event: "Admit Card Release", session1: "3 days before exam", session2: "3 days before exam" },
    { event: "Exam Date", session1: "21-29 January 2026", session2: "02-09 April 2026" },
    { event: "Answer Key Release", session1: "February 2026", session2: "April 2026" },
    { event: "Result Declaration", session1: "By 12 February 2026", session2: "April 2026" },
  ];

  const quickLinks = [
    {
      title: "JEE Main Answer Key 2026",
      description: "Download answer keys and solutions for Session 1 & 2",
      icon: FileText,
      link: "/jee-main-answer-key",
      color: "from-yellow-400 to-amber-500",
      badge: "Live Now",
    },
    {
      title: "Exam Pattern & Syllabus",
      description: "Complete syllabus breakdown and exam pattern",
      icon: BookOpen,
      link: "/jee-main-syllabus",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Previous Year Papers",
      description: "Download solved papers from 2020-2025",
      icon: Download,
      link: "/jee-main-previous-papers",
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "Mock Tests",
      description: "Practice with our full-length mock tests",
      icon: Award,
      link: "/jee-main-mock-tests",
      color: "from-green-400 to-green-600",
    },
  ];

  const stats = [
    { value: "500+", label: "Students Enrolled", icon: Users },
    { value: "95%", label: "Success Rate", icon: TrendingUp },
    { value: "₹60,000", label: "Lowest Fees in Mumbai", icon: Award },
    { value: "15+", label: "Expert Faculty", icon: CheckCircle },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full text-sm font-bold mb-4 animate-pulse">
              🔥 JEE Main 2026 Session 1 - January 21-29, 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white">
              JEE Main 2026
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-red-500 mt-2">
                Complete Guide & Resources
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Get admission to IITs, NITs, IIITs & CFTIs | Students Paradise - Mira Road&apos;s #1
              JEE Coaching with Lowest Fees in Mumbai
            </p>

            {/* Alert Box */}
            <div className="max-w-3xl mx-auto bg-yellow-500/10 border-2 border-yellow-500 rounded-xl p-4 mb-8">
              <div className="flex items-start space-x-3">
                <AlertCircle className="text-yellow-400 mt-1 flex-shrink-0" size={24} />
                <div className="text-left">
                  <h3 className="font-bold text-yellow-400 mb-1">Latest Update</h3>
                  <p className="text-gray-300 text-sm">
                    JEE Main 2026 Session 1 started on January 21, 2026. Download answer keys,
                    solutions & paper analysis below!
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsEnquiryOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-[#0a1628] rounded-xl font-bold shadow-xl hover:shadow-2xl hover:shadow-yellow-500/50 transition-all text-lg"
              >
                Enroll for JEE 2027 Batch
              </motion.button>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-bold hover:bg-white hover:text-[#0a1628] transition-all text-lg"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#1a2942] p-6 rounded-xl border border-yellow-500/30 text-center"
                >
                  <Icon className="text-yellow-400 mx-auto mb-3" size={32} />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1d35]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Quick Access to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                JEE Main Resources
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Everything you need for JEE Main 2026 preparation
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link key={index} href={link.link}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="relative group bg-[#1a2942] p-8 rounded-2xl border-2 border-yellow-500/30 hover:border-yellow-500 transition-all cursor-pointer overflow-hidden"
                  >
                    {link.badge && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                        {link.badge}
                      </div>
                    )}
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center mb-4`}
                    >
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{link.description}</p>
                    <div className="flex items-center text-yellow-400 font-semibold group-hover:translate-x-2 transition-transform">
                      Access Now <ArrowRight size={20} className="ml-2" />
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              JEE Main 2026{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                Important Dates
              </span>
            </h2>
          </AnimatedSection>

          <div className="bg-[#1a2942] rounded-2xl border border-yellow-500/30 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-yellow-400 to-amber-500">
                    <th className="px-6 py-4 text-left text-[#0a1628] font-bold">Event</th>
                    <th className="px-6 py-4 text-left text-[#0a1628] font-bold">
                      Session 1 (January)
                    </th>
                    <th className="px-6 py-4 text-left text-[#0a1628] font-bold">
                      Session 2 (April)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {importantDates.map((date, index) => (
                    <tr
                      key={index}
                      className="border-t border-yellow-500/20 hover:bg-yellow-500/5 transition-colors"
                    >
                      <td className="px-6 py-4 text-white font-semibold">{date.event}</td>
                      <td className="px-6 py-4 text-gray-300">{date.session1}</td>
                      <td className="px-6 py-4 text-gray-300">{date.session2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Students Paradise */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1d35]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                Students Paradise?
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Best JEE Coaching in Mira Road with Lowest Fees in Mumbai
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Lowest Fees in Mumbai",
                description:
                  "₹60,000 for complete JEE Main & Advanced preparation - 40% less than competitors",
                icon: Award,
              },
              {
                title: "Expert Faculty",
                description: "IIT/NIT alumni with 10+ years of JEE coaching experience",
                icon: Users,
              },
              {
                title: "Personalized Attention",
                description: "Small batch sizes (max 25 students) for individual focus",
                icon: CheckCircle,
              },
              {
                title: "Daily Practice Problems",
                description: "DPPs covering all difficulty levels with detailed solutions",
                icon: BookOpen,
              },
              {
                title: "Regular Mock Tests",
                description: "JEE Main pattern tests every week with rank prediction",
                icon: Award,
              },
              {
                title: "Doubt Clearing Sessions",
                description: "Daily doubt clearing sessions and one-on-one mentorship",
                icon: Clock,
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#1a2942] p-6 rounded-xl border border-yellow-500/30"
                >
                  <Icon className="text-yellow-400 mb-4" size={40} />
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-400 via-amber-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-6">
              Start Your IIT Journey Today!
            </h2>
            <p className="text-xl text-[#0a1628] mb-8">
              Join Mumbai&apos;s most affordable JEE coaching with proven results
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsEnquiryOpen(true)}
                className="px-10 py-4 bg-[#0a1628] text-white rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all text-lg"
              >
                Enroll Now - Limited Seats!
              </button>
              <Link href="/contact">
                <button className="px-10 py-4 bg-white text-[#0a1628] rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all text-lg">
                  Visit Our Center
                </button>
              </Link>
            </div>
            <p className="mt-6 text-[#0a1628] font-semibold">
              📍 A-105, Golden Palace, Govind Nagar, Mira Road East | 📞 +91 77389 87445
            </p>
          </motion.div>
        </div>
      </section>

      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        businessName="Students Paradise"
        courseName="JEE Main & Advanced 2027"
      />
    </div>
  );
}
