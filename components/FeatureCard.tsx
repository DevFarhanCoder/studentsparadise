"use client";

import { motion } from "framer-motion";
import { Award, Shield, Users, TrendingUp, Layers, Headphones, LucideIcon } from "lucide-react";
import { Feature } from "@/types";

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const iconMap: Record<string, LucideIcon> = {
  Award,
  Shield,
  Users,
  TrendingUp,
  Layers,
  Headphones,
};

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const Icon = iconMap[feature.icon];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotate: 1 }}
      className="group p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4 shadow-lg"
      >
        <Icon size={28} className="text-white" />
      </motion.div>
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
        {feature.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
