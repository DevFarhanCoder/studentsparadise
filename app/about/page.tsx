"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Award, Target, Eye, Heart, Users, Briefcase, BookOpen, GraduationCap } from "lucide-react";
import { companyTimeline, founders } from "@/data/founders";

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Excellence in Education",
      description: "We deliver top-quality education with experienced faculty and proven teaching methodologies.",
    },
    {
      icon: Heart,
      title: "Student-Centric Approach",
      description: "Every student is unique. We provide personalized attention and support to help them succeed.",
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "We foster a community where students learn from each other and grow together.",
    },
    {
      icon: Briefcase,
      title: "Career Development",
      description: "Beyond academics, we prepare students for successful careers with practical skills and guidance.",
    },
  ];

  const achievements = [
    {
      icon: GraduationCap,
      stat: "500+",
      label: "Students Trained",
    },
    {
      icon: Award,
      stat: "95%",
      label: "Success Rate",
    },
    {
      icon: Users,
      stat: "15+",
      label: "Expert Faculty",
    },
    {
      icon: BookOpen,
      stat: "20+",
      label: "Courses Offered",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] pt-20">
      {/* Hero Section */}
      <section className="relative py-28 bg-gradient-to-br from-[#0a1628] via-[#0d1d35] to-[#1a2942] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img 
                src="/Students Paradise Logo.png" 
                alt="Students Paradise" 
                className="h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 relative z-10 drop-shadow-2xl"
              />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-red-500">Students Paradise</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Your Complete Education & Career Partner — Transforming Dreams into Reality
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1d35]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-red-500">Story</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Students Paradise was founded with a vision to create a comprehensive education platform
                  that caters to students at every stage of their academic and professional journey. 
                </p>
                <p>
                  From school coaching for 11th and 12th standard students to intensive preparation for
                  competitive exams like JEE and NEET, from commerce programs to cutting-edge IT courses,
                  we offer a complete spectrum of educational services under one roof.
                </p>
                <p>
                  What sets us apart is our commitment to quality education, experienced faculty, modern
                  infrastructure, and a student-centric approach. We don't just teach subjects; we nurture
                  talent, build confidence, and prepare students for successful careers.
                </p>
                <p>
                  Today, Students Paradise is recognized as a trusted name in education, with hundreds of
                  successful students who have achieved their dreams through our guidance and support.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-red-500 rounded-2xl opacity-20 blur-xl"></div>
                <img
                  src="/1.jpeg"
                  alt="Students Paradise Campus"
                  className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover border-2 border-yellow-500/30"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="bg-[#1a2942] p-8 rounded-2xl shadow-xl border-2 border-yellow-500/30 hover:border-yellow-500 transition-all">
                <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  To empower students with quality education, practical skills, and career guidance that
                  enables them to excel in their academic pursuits and professional endeavors. We are
                  committed to making education accessible, engaging, and outcome-oriented for every student.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-[#1a2942] p-8 rounded-2xl shadow-xl border-2 border-red-500/30 hover:border-red-500 transition-all">
                <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  To be the most trusted education partner for students, recognized for excellence in
                  teaching, innovation in learning methodologies, and success in producing competent
                  professionals who contribute positively to society and industry.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1d35]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-red-500">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide our teaching and student support
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-[#1a2942] p-6 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-yellow-500/20 transition-all border-2 border-yellow-500/30 hover:border-yellow-500"
                >
                  <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0a1628] via-[#0d1d35] to-[#1a2942]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-red-500">Achievements</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const colors = [
                'from-yellow-400 to-amber-500',
                'from-red-400 to-red-500',
                'from-amber-400 to-yellow-500',
                'from-yellow-500 to-red-400'
              ];
              return (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1a2942] p-8 rounded-xl text-center border-2 border-yellow-500/30 hover:border-yellow-500 transition-all shadow-xl hover:shadow-2xl hover:shadow-yellow-500/20"
                >
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${colors[index]} rounded-full flex items-center justify-center shadow-lg`}>
                      <span className="text-3xl">{['🎓', '⭐', '👨‍🏫', '📚'][index]}</span>
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 mb-2">{achievement.stat}</div>
                  <div className="text-gray-400 text-lg">{achievement.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1d35]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-red-500">Offer</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "School Coaching",
                description: "Comprehensive coaching for 11th & 12th standard Science and Commerce students with focus on board exams.",
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Competitive Exams",
                description: "Intensive preparation for JEE Main/Advanced, NEET, and Foundation courses with expert faculty.",
              },
              {
                title: "Commerce Programs",
                description: "BBA support and business management courses with industry-oriented curriculum.",
              },
              {
                title: "IT & Computer",
                description: "Full Stack Development, Python, AI/ML, Data Science, Cloud Computing, and more.",
              }
            ].map((offer, index) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1a2942] p-6 rounded-xl shadow-xl border-2 border-yellow-500/30 hover:border-yellow-500 transition-all"
              >
                <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">{offer.title}</h3>
                <p className="text-gray-400 leading-relaxed">{offer.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Campus <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-red-500">Life</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Glimpses of our vibrant learning environment
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['1.jpeg', '2.jpeg', '3.jpeg', '4.jpg'].map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={`/${image}`}
                  alt={`Campus ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline/Roadmap */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1d35]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-bold mb-4 border border-yellow-500/30">SINCE 2021</span>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-red-500">Journey</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From a single vision to a multi-sector educational powerhouse
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 via-amber-500 to-red-500 hidden md:block opacity-30" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {companyTimeline.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Content Card */}
                  <div className="flex-1 md:text-right md:pr-8 md:pl-0 md:odd:text-left md:odd:pl-8 md:odd:pr-0">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-[#1a2942] p-8 rounded-2xl shadow-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all"
                    >
                      <div className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${
                        index % 3 === 0 ? 'from-yellow-400 to-amber-500' :
                        index % 3 === 1 ? 'from-amber-400 to-red-500' :
                        'from-red-400 to-yellow-500'
                      } mb-3`}>
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 border-4 border-[#0d1d35] shadow-lg shadow-yellow-500/50 z-10" />

                  {/* Empty Space for Alternate Layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Founders */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-red-500">Founders</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Visionary leaders dedicated to transforming education and creating winners
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-[#1a2942] rounded-2xl overflow-hidden shadow-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all hover:shadow-2xl hover:shadow-yellow-500/20">
                  {/* Founder Image */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2942] via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Founder Info */}
                  <div className="p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {founder.name}
                    </h3>
                    <p className="text-yellow-400 font-bold text-lg mb-4 uppercase tracking-wide">
                      {founder.role}
                    </p>
                    
                    {/* Message Quote */}
                    <div className="relative">
                      <div className="text-5xl text-yellow-400/20 absolute -top-2 -left-2 leading-none">"</div>
                      <p className="text-gray-300 italic leading-relaxed pl-6 text-sm md:text-base">
                        {founder.message}
                      </p>
                      <div className="text-5xl text-yellow-400/20 absolute -bottom-6 right-0 leading-none rotate-180">"</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-400 via-amber-500 to-red-500">
        <div className="max-w-7xl mx-auto text-center text-[#0a1628]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              Join Students Paradise today and take the first step towards a successful academic and professional career.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.a
                href="/courses"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#0a1628] text-white rounded-xl font-bold shadow-2xl hover:shadow-[#0a1628]/30 transition-all"
              >
                Explore Courses
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/20 backdrop-blur-lg text-[#0a1628] rounded-xl font-bold border-2 border-[#0a1628]/30 hover:bg-white/30 transition-all"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
