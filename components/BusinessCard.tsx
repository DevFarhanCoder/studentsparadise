"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Code2, Building2, LucideIcon } from "lucide-react";
import { Business } from "@/types";

interface BusinessCardProps {
  business: Business;
  index: number;
}

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Code2,
  Building2,
};

const BusinessCard = ({ business, index }: BusinessCardProps) => {
  const Icon = iconMap[business.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative"
    >
      <Link href={business.href}>
        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full">
          {/* Animated Gradient Background */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${business.theme.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
          />

          {/* Icon */}
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${business.theme.gradient} flex items-center justify-center mb-6 shadow-lg`}
          >
            <Icon size={32} className="text-white" />
          </motion.div>

          {/* Content */}
          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
            {business.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            {business.description}
          </p>

          {/* CTA */}
          <div className="flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors">
            <span>Explore</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={20} className="ml-2" />
            </motion.div>
          </div>

          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full" />
        </div>
      </Link>
    </motion.div>
  );
};

export default BusinessCard;
