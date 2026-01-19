import { Course, Service } from "@/types";

export const courses: Course[] = [
  // School Programs
  {
    title: "11th & 12th Science",
    description:
      "Complete coaching for Physics, Chemistry, Mathematics and Biology with experienced faculty and comprehensive study material.",
    duration: "2 Years",
    category: "School",
  },
  {
    title: "11th & 12th Commerce",
    description:
      "Expert guidance for Accountancy, Business Studies, Economics with practical knowledge and exam-focused preparation.",
    duration: "2 Years",
    category: "School",
  },
  // Competitive Exams
  {
    title: "JEE Main & Advanced",
    description:
      "Intensive preparation for India's premier engineering entrance exam with mock tests, doubt sessions, and expert mentorship.",
    duration: "1-2 Years",
    category: "Competitive",
  },
  {
    title: "NEET Preparation",
    description:
      "Comprehensive medical entrance coaching covering Biology, Physics, and Chemistry with focus on conceptual clarity.",
    duration: "1-2 Years",
    category: "Competitive",
  },
  {
    title: "Foundation Courses",
    description:
      "Early preparation for competitive exams starting from 9th and 10th standard to build strong fundamentals.",
    duration: "1-2 Years",
    category: "School",
  },
  // Commerce Programs
  {
    title: "BBA Program Support",
    description:
      "Comprehensive support for Bachelor of Business Administration students with industry-oriented curriculum.",
    duration: "3 Years",
    category: "Commerce",
  },
  {
    title: "Business Management",
    description:
      "Practical business management skills including marketing, finance, operations, and strategic planning.",
    duration: "6 Months",
    category: "Commerce",
  },
  // IT & Computer
  {
    title: "Full Stack Web Development",
    description:
      "Master HTML, CSS, JavaScript, React, Node.js, MongoDB and build complete web applications from scratch.",
    duration: "6 Months",
    category: "IT",
  },
  {
    title: "MERN Stack Development",
    description:
      "Specialized training in MongoDB, Express.js, React, and Node.js to become a professional full-stack developer.",
    duration: "4 Months",
    category: "IT",
  },
  {
    title: "Python & AI/ML",
    description:
      "Learn Python programming, data science, machine learning, and artificial intelligence with hands-on projects.",
    duration: "5 Months",
    category: "IT",
  },
  {
    title: "Data Science & Analytics",
    description:
      "Master data analysis, visualization, statistical modeling, and predictive analytics using industry tools.",
    duration: "6 Months",
    category: "IT",
  },
  {
    title: "Cloud Computing (AWS/Azure)",
    description:
      "Comprehensive cloud computing training covering AWS, Azure, deployment, DevOps, and cloud architecture.",
    duration: "3 Months",
    category: "IT",
  },
  {
    title: "Mobile App Development",
    description:
      "Build native and cross-platform mobile applications using React Native, Flutter, or native technologies.",
    duration: "4 Months",
    category: "IT",
  },
  {
    title: "UI/UX Design",
    description:
      "Learn user interface and experience design using Figma, Adobe XD with design thinking methodology.",
    duration: "3 Months",
    category: "IT",
  },
  {
    title: "BCA/MCA/BSc IT Support",
    description:
      "Academic support and career guidance for computer science degree programs with industry-relevant skills.",
    duration: "Ongoing",
    category: "IT",
  },
];

export const studentsParadiseFeatures: Service[] = [
  {
    title: "Expert Faculty",
    description:
      "Learn from experienced educators and industry professionals with proven track records.",
    icon: "Users",
  },
  {
    title: "Modern Infrastructure",
    description:
      "State-of-the-art classrooms, labs, and learning facilities for optimal education experience.",
    icon: "Building",
  },
  {
    title: "Placement Support",
    description:
      "Dedicated placement cell for IT courses with industry connections and career guidance.",
    icon: "Briefcase",
  },
  {
    title: "Flexible Learning",
    description:
      "Choose from regular, weekend, and online batches to suit your schedule and preferences.",
    icon: "Clock",
  },
];
