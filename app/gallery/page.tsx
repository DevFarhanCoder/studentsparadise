"use client";

import { motion } from "framer-motion";
import { Camera, Award } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function GalleryPage() {
  // PCL Images and regular gallery images
  const galleryImages = [
    { src: "/PCL 1.jpg", alt: "PCL Event 1", category: "Events" },
    { src: "/PCL 2.jpg", alt: "PCL Event 2", category: "Events" },
    { src: "/PCL 2026 Winner.jpg", alt: "PCL 2026 Winner", category: "Achievements" },
    { src: "/PCL 2026.jpg", alt: "PCL 2026", category: "Events" },
    { src: "/1.jpeg", alt: "Campus Life 1", category: "Campus" },
    { src: "/2.jpeg", alt: "Campus Life 2", category: "Campus" },
    { src: "/3.jpeg", alt: "Campus Life 3", category: "Campus" },
    { src: "/4.jpg", alt: "Campus Life 4", category: "Campus" },
    { src: "/5.jpg", alt: "Campus Life 5", category: "Campus" },
    { src: "/6.jpg", alt: "Campus Life 6", category: "Campus" },
    { src: "/7.jpg", alt: "Campus Life 7", category: "Campus" },
    { src: "/8.jpg", alt: "Campus Life 8", category: "Campus" },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] pt-20">
      {/* Gallery Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-red-500">
                Memories
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Glimpses of our vibrant learning environment, student achievements, and memorable
              events
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
              >
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center space-x-2 mb-1">
                      {image.category === "Achievements" ? (
                        <Award size={16} />
                      ) : (
                        <Camera size={16} />
                      )}
                      <span className="text-xs font-semibold uppercase tracking-wide">
                        {image.category}
                      </span>
                    </div>
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1d35]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Gallery{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-red-500 bg-clip-text text-transparent">
                Categories
              </span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Campus Life",
                description:
                  "Daily activities, classrooms, and infrastructure showcasing our modern learning environment.",
                icon: "🏫",
                count: 8,
              },
              {
                title: "Events & Celebrations",
                description:
                  "Special events, competitions, and celebrations that make learning fun and engaging.",
                icon: "🎉",
                count: 3,
              },
              {
                title: "Achievements",
                description:
                  "Proud moments of our students' success in academics, competitions, and placements.",
                icon: "🏆",
                count: 1,
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1a2942] p-8 rounded-xl border-2 border-yellow-500/30 hover:border-yellow-500 transition-all shadow-xl hover:shadow-2xl hover:shadow-yellow-500/20"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                  {category.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{category.description}</p>
                <div className="text-yellow-400 font-bold">
                  {category.count} {category.count === 1 ? "Photo" : "Photos"}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Be Part of Our Story</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              Join Students Paradise and create your own success story. Your journey to excellence
              starts here.
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
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
