import { Business, Feature, Stat } from "@/types";

export const businesses: Business[] = [
  {
    id: "students-paradise",
    title: "Students Paradise",
    description: "Comprehensive education platform offering coaching for 11th-12th, competitive exams like JEE & NEET, commerce programs, and cutting-edge IT & computer courses.",
    icon: "GraduationCap",
    href: "/students-paradise",
    theme: {
      gradient: "from-purple-600 via-pink-500 to-purple-700",
      color: "#c084fc",
    },
  },
  {
    id: "nexora-it-solutions",
    title: "Nexora IT Solutions",
    description: "Full-stack IT development and solutions provider specializing in web development, mobile apps, UI/UX design, cloud deployment, and custom software solutions.",
    icon: "Code2",
    href: "/nexora-it-solutions",
    theme: {
      gradient: "from-blue-600 via-cyan-500 to-blue-700",
      color: "#3b82f6",
    },
  },
  {
    id: "ar-construction",
    title: "AR Construction",
    description: "Premium construction and real estate development company delivering residential and commercial projects with excellence in design, planning, and execution.",
    icon: "Building2",
    href: "/ar-construction",
    theme: {
      gradient: "from-orange-500 via-yellow-500 to-orange-600",
      color: "#f59e0b",
    },
  },
];

export const features: Feature[] = [
  {
    title: "Quality Delivery",
    description: "We ensure exceptional quality in every project, meeting the highest standards of excellence and exceeding client expectations.",
    icon: "Award",
  },
  {
    title: "Trusted Brand",
    description: "Built on trust and reliability, NexoraGroups has established itself as a credible partner across multiple industries.",
    icon: "Shield",
  },
  {
    title: "Professional Team",
    description: "Our expert teams across all verticals bring years of experience and dedication to deliver outstanding results.",
    icon: "Users",
  },
  {
    title: "Growth & Vision",
    description: "We focus on continuous growth and innovation, staying ahead of industry trends to provide cutting-edge solutions.",
    icon: "TrendingUp",
  },
  {
    title: "Multi-Industry Expertise",
    description: "With presence in technology, education, and construction, we offer diverse expertise under one trusted brand.",
    icon: "Layers",
  },
  {
    title: "Client Support",
    description: "Dedicated support teams ensure smooth collaboration and communication throughout your journey with us.",
    icon: "Headphones",
  },
];

export const stats: Stat[] = [
  {
    value: 5000,
    label: "Students Trained",
    suffix: "+",
  },
  {
    value: 250,
    label: "Projects Delivered",
    suffix: "+",
  },
  {
    value: 8,
    label: "Years of Excellence",
    suffix: "+",
  },
  {
    value: 98,
    label: "Client Satisfaction",
    suffix: "%",
  },
];
