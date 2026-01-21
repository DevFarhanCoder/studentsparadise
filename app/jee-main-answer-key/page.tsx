"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle, FileText, X, Download } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

interface ShiftData {
  shift: string;
  physics: string | null;
  chemistry: string | null;
  maths: string | null;
}

interface PaperData {
  date: string;
  shifts: ShiftData[];
}

interface Document {
  _id: string;
  title: string;
  type: string;
  category: string;
  subject: string;
  year: string;
  session: string;
  shift: string;
  date: string;
  fileUrl: string;
  fileName: string;
}

export default function JEEMainAnswerKey() {
  const [selectedSession, setSelectedSession] = useState<"session1" | "session2">("session1");
  const [showDownloadForm, setShowDownloadForm] = useState(false);
  const [selectedPaper, setSelectedPaper] = useState<{ subject: string; url: string } | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [documents, setDocuments] = useState<Document[]>([]);

  // Fetch documents from backend
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const isLocalhost =
          typeof window !== "undefined" && window.location.hostname === "localhost";
        const API_URL = isLocalhost
          ? "http://localhost:5000/api/documents"
          : "https://studentsparadise-backend.onrender.com/api/documents";

        const response = await fetch(API_URL);
        const data = await response.json();

        // Filter for JEE Main Answer Keys
        const jeeDocuments = data.documents.filter(
          (doc: Document) => doc.category === "JEE Main" && doc.type === "Answer Key"
        );
        setDocuments(jeeDocuments);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchDocuments();
  }, []);

  // Helper function to get document URL for specific date, shift, and subject
  const getDocumentUrl = (date: string, shiftNumber: string, subject: string, session: string) => {
    const doc = documents.find(
      (d) =>
        d.date === date &&
        d.shift === shiftNumber &&
        d.subject.toLowerCase() === subject.toLowerCase() &&
        d.session === session
    );

    if (doc) {
      const isLocalhost = typeof window !== "undefined" && window.location.hostname === "localhost";
      const BASE_URL = isLocalhost
        ? "http://localhost:5000"
        : "https://studentsparadise-backend.onrender.com";
      return `${BASE_URL}${doc.fileUrl}`;
    }
    return null;
  };

  const session1Papers: PaperData[] = [
    {
      date: "21 January 2026",
      shifts: [
        {
          shift: "Shift 1 (9:00 AM – 12:00 PM)",
          physics: null,
          chemistry: null,
          maths: null,
        },
        {
          shift: "Shift 2 (3:00 PM – 6:00 PM)",
          physics: null,
          chemistry: null,
          maths: null,
        },
      ],
    },
    {
      date: "22 January 2026",
      shifts: [
        {
          shift: "Shift 1 (9:00 AM – 12:00 PM)",
          physics: null,
          chemistry: null,
          maths: null,
        },
        {
          shift: "Shift 2 (3:00 PM – 6:00 PM)",
          physics: null,
          chemistry: null,
          maths: null,
        },
      ],
    },
    {
      date: "23 January 2026",
      shifts: [
        {
          shift: "Shift 1 (9:00 AM – 12:00 PM)",
          physics: null,
          chemistry: null,
          maths: null,
        },
        {
          shift: "Shift 2 (3:00 PM – 6:00 PM)",
          physics: null,
          chemistry: null,
          maths: null,
        },
      ],
    },
    {
      date: "24 January 2026",
      shifts: [
        {
          shift: "Shift 1 (9:00 AM – 12:00 PM)",
          physics: null,
          chemistry: null,
          maths: null,
        },
        {
          shift: "Shift 2 (3:00 PM – 6:00 PM)",
          physics: null,
          chemistry: null,
          maths: null,
        },
      ],
    },
    {
      date: "28 January 2026",
      shifts: [
        {
          shift: "Shift 1 (9:00 AM – 12:00 PM)",
          physics: null,
          chemistry: null,
          maths: null,
        },
        {
          shift: "Shift 2 (3:00 PM – 6:00 PM)",
          physics: null,
          chemistry: null,
          maths: null,
        },
      ],
    },
    {
      date: "29 January 2026",
      shifts: [
        {
          shift: "Shift 1 (9:00 AM – 12:00 PM)",
          physics: null,
          chemistry: null,
          maths: null,
        },
        {
          shift: "Shift 2 (3:00 PM – 6:00 PM)",
          physics: null,
          chemistry: null,
          maths: null,
        },
      ],
    },
  ];

  const session2Papers: PaperData[] = [
    {
      date: "02 April 2026",
      shifts: [
        {
          shift: "Shift 1 (9:00 AM – 12:00 PM)",
          physics: null,
          chemistry: null,
          maths: null,
        },
        {
          shift: "Shift 2 (3:00 PM – 6:00 PM)",
          physics: null,
          chemistry: null,
          maths: null,
        },
      ],
    },
    {
      date: "03 April 2026",
      shifts: [
        {
          shift: "Shift 1 (9:00 AM – 12:00 PM)",
          physics: null,
          chemistry: null,
          maths: null,
        },
        {
          shift: "Shift 2 (3:00 PM – 6:00 PM)",
          physics: null,
          chemistry: null,
          maths: null,
        },
      ],
    },
    {
      date: "04 April 2026",
      shifts: [
        {
          shift: "Shift 1 (9:00 AM – 12:00 PM)",
          physics: null,
          chemistry: null,
          maths: null,
        },
        {
          shift: "Shift 2 (3:00 PM – 6:00 PM)",
          physics: null,
          chemistry: null,
          maths: null,
        },
      ],
    },
    {
      date: "06 April 2026",
      shifts: [
        {
          shift: "Shift 1 (9:00 AM – 12:00 PM)",
          physics: null,
          chemistry: null,
          maths: null,
        },
        {
          shift: "Shift 2 (3:00 PM – 6:00 PM)",
          physics: null,
          chemistry: null,
          maths: null,
        },
      ],
    },
    {
      date: "07 April 2026",
      shifts: [
        {
          shift: "Shift 1 (9:00 AM – 12:00 PM)",
          physics: null,
          chemistry: null,
          maths: null,
        },
        {
          shift: "Shift 2 (3:00 PM – 6:00 PM)",
          physics: null,
          chemistry: null,
          maths: null,
        },
      ],
    },
    {
      date: "08 April 2026",
      shifts: [
        {
          shift: "Shift 1 (9:00 AM – 12:00 PM)",
          physics: null,
          chemistry: null,
          maths: null,
        },
        {
          shift: "Shift 2 (3:00 PM – 6:00 PM)",
          physics: null,
          chemistry: null,
          maths: null,
        },
      ],
    },
    {
      date: "09 April 2026",
      shifts: [
        {
          shift: "Shift 1 (9:00 AM – 12:00 PM)",
          physics: null,
          chemistry: null,
          maths: null,
        },
        {
          shift: "Shift 2 (3:00 PM – 6:00 PM)",
          physics: null,
          chemistry: null,
          maths: null,
        },
      ],
    },
  ];

  const handleDownloadClick = (subject: string, url: string | null) => {
    if (!url) return;
    setSelectedPaper({ subject, url });
    setShowDownloadForm(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call to save user data
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Trigger download
    if (selectedPaper?.url) {
      window.open(selectedPaper.url, "_blank");
    }

    setIsSubmitting(false);
    setShowDownloadForm(false);
    setFormData({ name: "", email: "", phone: "" });
    setSelectedPaper(null);
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
            <div className="inline-block px-4 py-2 bg-red-500 text-white rounded-full text-sm font-bold mb-4 animate-pulse">
              🔥 Live Now - JEE Main 2026 Answer Keys
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              JEE Main 2026
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 mt-2">
                Answer Key & Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Download solved question papers, answer keys & detailed solutions for Session 1 &
              Session 2
            </p>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setSelectedSession("session1")}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${
                selectedSession === "session1"
                  ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-[#0a1628]"
                  : "bg-[#1a2942] text-gray-300 hover:bg-[#243654]"
              }`}
            >
              Session 1 (January 2026)
            </button>
            <button
              onClick={() => setSelectedSession("session2")}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${
                selectedSession === "session2"
                  ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-[#0a1628]"
                  : "bg-[#1a2942] text-gray-300 hover:bg-[#243654]"
              }`}
            >
              Session 2 (April 2026)
            </button>
          </div>
        </div>
      </section>

      {/* Answer Keys Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="bg-[#1a2942] rounded-2xl border border-yellow-500/30 overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-4">
                <h2 className="text-2xl font-bold text-[#0a1628]">
                  {selectedSession === "session1"
                    ? "Session 1 - January 2026"
                    : "Session 2 - April 2026"}
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-yellow-500/20">
                      <th className="px-6 py-4 text-left text-white font-bold">Date</th>
                      <th className="px-6 py-4 text-left text-white font-bold border-r border-yellow-500/20">
                        Shift
                      </th>
                      <th className="px-6 py-4 text-center text-white font-bold border-r border-yellow-500/20">
                        Physics
                      </th>
                      <th className="px-6 py-4 text-center text-white font-bold border-r border-yellow-500/20">
                        Chemistry
                      </th>
                      <th className="px-6 py-4 text-center text-white font-bold">Maths</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(selectedSession === "session1" ? session1Papers : session2Papers).map(
                      (paper, dateIndex) => (
                        <>
                          {paper.shifts.map((shift, shiftIndex) => {
                            // Extract shift number from "Shift 1 (9:00 AM – 12:00 PM)"
                            const shiftNumber = shift.shift.includes("Shift 1") ? "1" : "2";
                            const sessionNumber = selectedSession === "session1" ? "1" : "2";
                            
                            // Get document URLs for each subject
                            const physicsUrl = getDocumentUrl(paper.date, shiftNumber, "Physics", sessionNumber);
                            const chemistryUrl = getDocumentUrl(paper.date, shiftNumber, "Chemistry", sessionNumber);
                            const mathsUrl = getDocumentUrl(paper.date, shiftNumber, "Maths", sessionNumber);
                            
                            return (
                            <tr
                              key={`${dateIndex}-${shiftIndex}`}
                              className="border-b border-yellow-500/10"
                            >
                              {shiftIndex === 0 && (
                                <td
                                  rowSpan={paper.shifts.length}
                                  className="px-6 py-4 text-gray-300 font-semibold border-r border-yellow-500/20 bg-[#1a2942]"
                                >
                                  {paper.date}
                                </td>
                              )}
                              <td className="px-6 py-4 text-gray-300 border-r border-yellow-500/20">
                                {shift.shift}
                              </td>
                              <td className="px-6 py-4 text-center border-r border-yellow-500/20">
                                {physicsUrl ? (
                                  <button
                                    onClick={() => handleDownloadClick("Physics", physicsUrl)}
                                    className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors text-sm font-semibold inline-flex items-center space-x-2"
                                  >
                                    <Download size={16} />
                                    <span>Download</span>
                                  </button>
                                ) : (
                                  <span className="px-4 py-2 bg-gray-700/50 text-gray-500 rounded-lg text-sm font-semibold cursor-not-allowed">
                                    Available Soon
                                  </span>
                                )}
                              </td>
                              <td className="px-6 py-4 text-center border-r border-yellow-500/20">
                                {chemistryUrl ? (
                                  <button
                                    onClick={() =>
                                      handleDownloadClick("Chemistry", chemistryUrl)
                                    }
                                    className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors text-sm font-semibold inline-flex items-center space-x-2"
                                  >
                                    <Download size={16} />
                                    <span>Download</span>
                                  </button>
                                ) : (
                                  <span className="px-4 py-2 bg-gray-700/50 text-gray-500 rounded-lg text-sm font-semibold cursor-not-allowed">
                                    Available Soon
                                  </span>
                                )}
                              </td>
                              <td className="px-6 py-4 text-center">
                                {mathsUrl ? (
                                  <button
                                    onClick={() => handleDownloadClick("Mathematics", mathsUrl)}
                                    className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors text-sm font-semibold inline-flex items-center space-x-2"
                                  >
                                    <Download size={16} />
                                    <span>Download</span>
                                  </button>
                                ) : (
                                  <span className="px-4 py-2 bg-gray-700/50 text-gray-500 rounded-lg text-sm font-semibold cursor-not-allowed">
                                    Available Soon
                                  </span>
                                )}
                              </td>
                            </tr>
                          )})}
                        </>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How to Calculate Score */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1d35]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              How to Calculate Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                JEE Main Score?
              </span>
            </h2>

            <div className="bg-[#1a2942] rounded-2xl p-8 border border-yellow-500/30">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-bold mb-1">Correct Answer</h3>
                    <p className="text-gray-300">+4 marks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <AlertCircle className="text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-bold mb-1">Incorrect Answer</h3>
                    <p className="text-gray-300">-1 mark</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FileText className="text-gray-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-bold mb-1">Unanswered Question</h3>
                    <p className="text-gray-300">0 marks</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-yellow-500/10 border border-yellow-500 rounded-xl">
                <h4 className="text-yellow-400 font-bold text-lg mb-2">Formula</h4>
                <p className="text-white text-xl font-mono">
                  Total Score = (Correct × 4) - (Incorrect × 1)
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Steps to Challenge */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              How to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                Challenge Answer Key?
              </span>
            </h2>

            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Visit NTA Website",
                  description: "Go to jeemain.nta.nic.in and log in with your credentials",
                },
                {
                  step: 2,
                  title: "Navigate to Answer Key Challenge",
                  description: "Find and click on 'Answer Key Challenge' link",
                },
                {
                  step: 3,
                  title: "Select Questions",
                  description: "Choose the questions you want to challenge",
                },
                {
                  step: 4,
                  title: "Upload Supporting Documents",
                  description: "Provide valid references from textbooks or trusted sources",
                },
                {
                  step: 5,
                  title: "Pay Fee",
                  description: "₹200 per question through online payment",
                },
                {
                  step: 6,
                  title: "Submit Challenge",
                  description: "Review and submit your challenge before deadline",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 bg-[#1a2942] p-6 rounded-xl border border-yellow-500/30"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center flex-shrink-0 font-bold text-[#0a1628]">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-400 to-amber-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#0a1628] mb-6">Preparing for JEE 2027?</h2>
          <p className="text-xl text-[#0a1628] mb-8">
            Join Students Paradise - Mira Road&apos;s #1 JEE Coaching with Lowest Fees in Mumbai
          </p>
          <Link href="/jee-main">
            <button className="px-10 py-4 bg-[#0a1628] text-white rounded-xl font-bold shadow-2xl hover:scale-105 transition-transform">
              Explore Our JEE Program →
            </button>
          </Link>
        </div>
      </section>

      {/* Download Form Modal */}
      <AnimatePresence>
        {showDownloadForm && selectedPaper && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowDownloadForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#1a2942] rounded-2xl border border-yellow-500/30 max-w-md w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowDownloadForm(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <h3 className="text-2xl font-bold text-white mb-2">
                Download {selectedPaper.subject} Answer Key
              </h3>
              <p className="text-gray-400 mb-6">
                Please fill in your details to download the answer key
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a1628] border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a1628] border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a1628] border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
                    placeholder="Enter 10-digit mobile number"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-[#0a1628] font-bold rounded-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Downloading..." : "Download Answer Key"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
