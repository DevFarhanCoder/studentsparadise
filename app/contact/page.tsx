"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", course: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "A - 105, Golden Palace Building",
        "Govind Nagar, Mira Road East",
        "Mumbai, Maharashtra, India",
      ],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 77389 87445", "Mon-Sat: 9:00 AM - 9:00 PM", "Sun: 11:00 AM - 7:00 PM"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["studentsparadise07@gmail.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Monday - Saturday: 9:00 AM - 9:00 PM",
        "Sunday: 11:00 AM - 7:00 PM",
        "Holidays: Closed",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] pt-20">
      {/* Contact Information Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Get In{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-red-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Reach out to us through any of these channels
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const gradients = [
                "from-yellow-400 to-amber-500",
                "from-red-400 to-red-500",
                "from-amber-500 to-yellow-500",
                "from-yellow-500 to-red-400",
              ];
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1a2942] p-6 rounded-xl shadow-xl border border-yellow-500/20 hover:shadow-2xl hover:shadow-yellow-500/20 hover:border-yellow-500/40 transition-all"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${gradients[index]} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-400 text-sm mb-1">
                      {detail}
                    </p>
                  ))}
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <div className="bg-[#1a2942] p-8 rounded-2xl shadow-xl border border-yellow-500/20">
                <h3 className="text-3xl font-bold mb-6 text-white">
                  Send Us a{" "}
                  <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-red-500 bg-clip-text text-transparent">
                    Message
                  </span>
                </h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-10 h-10 text-yellow-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Thank You!</h4>
                    <p className="text-gray-400">We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-300 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#0d1d35] border border-yellow-500/20 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all text-white placeholder-gray-500"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-300 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#0d1d35] border border-yellow-500/20 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all text-white placeholder-gray-500"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-300 mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#0d1d35] border border-yellow-500/20 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all text-white placeholder-gray-500"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="course"
                        className="block text-sm font-semibold text-gray-300 mb-2"
                      >
                        Course Interest
                      </label>
                      <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0d1d35] border border-yellow-500/20 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all text-white"
                      >
                        <option value="">Select a course</option>
                        <option value="school">11th & 12th Coaching</option>
                        <option value="jee">JEE Preparation</option>
                        <option value="neet">NEET Preparation</option>
                        <option value="foundation">Foundation Courses</option>
                        <option value="commerce">Commerce Programs</option>
                        <option value="webdev">Web Development</option>
                        <option value="python">Python & AI/ML</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-300 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-[#0d1d35] border border-yellow-500/20 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all resize-none text-white placeholder-gray-500"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-[#0a1628] rounded-lg font-bold shadow-lg hover:shadow-xl hover:shadow-yellow-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Map & Additional Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                {/* Map Placeholder */}
                <div className="bg-[#1a2942] p-8 rounded-2xl shadow-xl border border-yellow-500/20">
                  <h3 className="text-2xl font-bold mb-4 text-white">Find Us</h3>
                  <div className="aspect-video bg-[#0d1d35] rounded-lg flex items-center justify-center border border-yellow-500/10">
                    <div className="text-center">
                      <MapPin size={48} className="text-gray-500 mx-auto mb-2" />
                      <p className="text-gray-400">Map will be integrated here</p>
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="bg-gradient-to-br from-yellow-400 via-amber-500 to-red-500 p-8 rounded-2xl shadow-xl text-[#0a1628]">
                  <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    {[
                      "Expert Faculty with Years of Experience",
                      "Modern Infrastructure & Facilities",
                      "Personalized Attention to Every Student",
                      "Proven Track Record of Success",
                      "Flexible Learning Options",
                      "Placement Assistance for IT Courses",
                    ].map((point, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <svg
                          className="w-5 h-5 text-[#0a1628] mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1d35]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-red-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              {
                q: "What are the admission requirements?",
                a: "Admission requirements vary by course. For school coaching, students should be in or entering 11th/12th standard. For IT courses, basic computer knowledge is preferred but not mandatory.",
              },
              {
                q: "Do you offer online classes?",
                a: "Yes, we offer both online and offline classes for most courses. You can choose the mode that suits your schedule and preferences.",
              },
              {
                q: "What is the batch size?",
                a: "We maintain small batch sizes (15-20 students) to ensure personalized attention and better learning outcomes.",
              },
              {
                q: "Do you provide study materials?",
                a: "Yes, comprehensive study materials, practice papers, and online resources are provided to all enrolled students.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1a2942] p-6 rounded-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all"
              >
                <h4 className="text-lg font-bold text-white mb-2">{faq.q}</h4>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
