"use client";

import { motion } from "framer-motion";
import { BookOpen, CheckCircle } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export default function JEEMainSyllabus() {
  const subjects = [
    {
      name: "Physics",
      color: "blue",
      topics: [
        "Mechanics - Laws of Motion, Work Energy & Power, Rotational Motion",
        "Thermodynamics - Heat Transfer, Laws of Thermodynamics",
        "Electrostatics & Current Electricity - Coulomb's Law, Capacitors, Ohm's Law",
        "Magnetic Effects & Electromagnetic Induction - Biot-Savart Law, Faraday's Law",
        "Optics - Ray Optics, Wave Optics, Interference & Diffraction",
        "Modern Physics - Photoelectric Effect, Atoms, Nuclei",
        "Waves & Sound - Wave Motion, Doppler Effect",
        "Kinematics - Motion in 1D & 2D, Projectile Motion",
      ],
    },
    {
      name: "Chemistry",
      color: "green",
      topics: [
        "Physical Chemistry - Atomic Structure, Chemical Bonding, States of Matter",
        "Thermodynamics & Thermochemistry - Enthalpy, Entropy, Gibbs Energy",
        "Chemical Equilibrium - Le Chatelier's Principle, Ionic Equilibrium",
        "Electrochemistry - Nernst Equation, Electrolysis, Batteries",
        "Organic Chemistry - Hydrocarbons, Haloalkanes, Alcohols, Aldehydes, Ketones",
        "Inorganic Chemistry - Periodic Table, Chemical Bonding, Coordination Compounds",
        "Solutions & Colligative Properties - Raoult's Law, Osmosis",
        "Chemical Kinetics & Surface Chemistry - Rate Laws, Catalysis, Adsorption",
      ],
    },
    {
      name: "Mathematics",
      color: "purple",
      topics: [
        "Algebra - Quadratic Equations, Complex Numbers, Sequences & Series",
        "Trigonometry - Identities, Equations, Inverse Trigonometric Functions",
        "Coordinate Geometry - Straight Lines, Circles, Parabola, Ellipse, Hyperbola",
        "Calculus - Limits, Continuity, Differentiation, Integration, Differential Equations",
        "Vectors & 3D Geometry - Dot Product, Cross Product, Lines & Planes",
        "Probability & Statistics - Conditional Probability, Bayes Theorem, Mean, Variance",
        "Matrices & Determinants - Operations, Inverse, Properties",
        "Mathematical Reasoning - Statements, Logical Connectives",
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
            <div className="inline-block px-4 py-2 bg-yellow-500 text-[#0a1628] rounded-full text-sm font-bold mb-4">
              📚 Complete Syllabus Guide
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              JEE Main{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                Syllabus 2026
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete topic-wise syllabus for Physics, Chemistry & Mathematics
            </p>
          </motion.div>
        </div>
      </section>

      {/* Subjects Syllabus */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {subjects.map((subject, index) => (
            <AnimatedSection key={index}>
              <div className="bg-[#1a2942] rounded-2xl border border-yellow-500/30 overflow-hidden">
                <div
                  className={`bg-gradient-to-r ${
                    subject.color === "blue"
                      ? "from-blue-500 to-blue-600"
                      : subject.color === "green"
                        ? "from-green-500 to-green-600"
                        : "from-purple-500 to-purple-600"
                  } px-8 py-6`}
                >
                  <div className="flex items-center space-x-4">
                    <BookOpen className="w-8 h-8 text-white" />
                    <h2 className="text-3xl font-bold text-white">{subject.name}</h2>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid gap-4">
                    {subject.topics.map((topic, topicIndex) => (
                      <div
                        key={topicIndex}
                        className="flex items-start space-x-4 p-4 bg-[#0a1628] rounded-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-colors"
                      >
                        <CheckCircle
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            subject.color === "blue"
                              ? "text-blue-400"
                              : subject.color === "green"
                                ? "text-green-400"
                                : "text-purple-400"
                          }`}
                        />
                        <p className="text-gray-300 leading-relaxed">{topic}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-400 to-amber-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#0a1628] mb-6">Master the Complete Syllabus</h2>
          <p className="text-xl text-[#0a1628] mb-8">
            Join Students Paradise - Mira Road&apos;s #1 JEE Coaching with Expert Faculty
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
