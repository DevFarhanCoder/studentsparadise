export interface CourseDetail {
  slug: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  fullDescription: string;
  eligibility: string;
  syllabus: string[];
  highlights: string[];
  careerOpportunities: string[];
  founderMessage: string;
  founderName: string;
  fees: string;
}

export const courseDetails: { [key: string]: CourseDetail } = {
  "jee-preparation": {
    slug: "jee-preparation",
    title: "JEE Main & Advanced Preparation",
    category: "Competitive",
    duration: "1-2 Years",
    description: "Intensive preparation for India's premier engineering entrance exam with mock tests, doubt sessions, and expert mentorship.",
    fullDescription: "Our JEE preparation program is designed to help students crack one of India's toughest engineering entrance exams. With experienced faculty, comprehensive study material, regular mock tests, and personalized doubt-clearing sessions, we ensure that every student gets the support they need to succeed.",
    eligibility: "Students in 11th, 12th, or 12th Pass",
    syllabus: [
      "Physics: Mechanics, Thermodynamics, Electrodynamics, Modern Physics",
      "Chemistry: Physical Chemistry, Organic Chemistry, Inorganic Chemistry",
      "Mathematics: Algebra, Calculus, Coordinate Geometry, Trigonometry",
      "Regular Mock Tests and Previous Year Papers",
      "Doubt Clearing Sessions",
      "Comprehensive Study Material"
    ],
    highlights: [
      "Experienced Faculty with 10+ years of JEE coaching",
      "Small batch sizes for personalized attention",
      "Regular mock tests following actual JEE pattern",
      "Comprehensive study material and notes",
      "Daily doubt clearing sessions",
      "Performance analysis and tracking",
      "Previous year papers and solutions"
    ],
    careerOpportunities: [
      "B.Tech/BE from IITs, NITs, and other premier institutions",
      "Software Engineering and Development",
      "Mechanical, Electrical, Civil Engineering",
      "Research and Development",
      "Higher studies (M.Tech, MS, PhD)"
    ],
    founderMessage: "JEE is not just an exam—it's a gateway to your engineering dreams. Our program is designed to build strong fundamentals while developing problem-solving skills that will serve you throughout your career.",
    founderName: "Rajesh Kumar, Founder",
    fees: "Contact for details"
  },
  "neet-preparation": {
    slug: "neet-preparation",
    title: "NEET Preparation",
    category: "Competitive",
    duration: "1-2 Years",
    description: "Comprehensive medical entrance coaching covering Biology, Physics, and Chemistry with focus on conceptual clarity.",
    fullDescription: "Our NEET program provides comprehensive preparation for aspiring medical students. With expert faculty, extensive practice, and regular assessments, we help students achieve their dream of becoming doctors.",
    eligibility: "Students in 11th, 12th, or 12th Pass",
    syllabus: [
      "Physics: Mechanics, Optics, Thermodynamics, Modern Physics",
      "Chemistry: Physical, Organic, and Inorganic Chemistry",
      "Biology: Botany and Zoology (detailed coverage)",
      "Regular practice with NEET pattern questions",
      "Mock tests and assessments"
    ],
    highlights: [
      "Specialized faculty for Biology, Physics, and Chemistry",
      "Focus on NCERT and conceptual understanding",
      "Regular NEET pattern mock tests",
      "Extensive question bank",
      "Doubt clearing sessions",
      "Performance tracking"
    ],
    careerOpportunities: [
      "MBBS from top medical colleges",
      "BDS, BAMS, BHMS",
      "Veterinary Science",
      "Medical Research",
      "Super-specialization opportunities"
    ],
    founderMessage: "Medicine is a noble profession. Our NEET program not only prepares you for the exam but also instills the dedication and discipline required to become an excellent doctor.",
    founderName: "Priya Sharma, Co-Founder",
    fees: "Contact for details"
  },
  "full-stack-web-development": {
    slug: "full-stack-web-development",
    title: "Full Stack Web Development",
    category: "IT",
    duration: "6 Months",
    description: "Master HTML, CSS, JavaScript, React, Node.js, MongoDB and build complete web applications from scratch.",
    fullDescription: "Transform into a professional full-stack web developer with our comprehensive program covering frontend, backend, and database technologies. Build real-world projects and get placement assistance.",
    eligibility: "12th Pass or Graduate, Basic Computer Knowledge",
    syllabus: [
      "HTML5, CSS3, and Responsive Design",
      "JavaScript (ES6+) and DOM Manipulation",
      "React.js and Modern Frontend Development",
      "Node.js and Express.js Backend",
      "MongoDB Database",
      "REST APIs and Authentication",
      "Git, GitHub, and Deployment",
      "Real-world Projects"
    ],
    highlights: [
      "Industry-relevant curriculum",
      "Hands-on project-based learning",
      "Build 5+ real-world projects",
      "Placement assistance",
      "Industry expert sessions",
      "Job-ready portfolio",
      "Lifetime access to course materials"
    ],
    careerOpportunities: [
      "Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "Freelancing opportunities",
      "Start your own web development agency",
      "Remote work opportunities"
    ],
    founderMessage: "The web development industry offers limitless opportunities. Our program ensures you gain practical skills that companies are actively looking for.",
    founderName: "Rajesh Kumar, Founder",
    fees: "₹45,000 (Installment options available)"
  },
  "mern-stack-development": {
    slug: "mern-stack-development",
    title: "MERN Stack Development",
    category: "IT",
    duration: "4 Months",
    description: "Specialized training in MongoDB, Express.js, React, and Node.js to become a professional full-stack developer.",
    fullDescription: "Master the MERN stack and become job-ready with hands-on projects, industry mentorship, and placement support.",
    eligibility: "Basic programming knowledge recommended",
    syllabus: [
      "MongoDB - Database Design and Operations",
      "Express.js - Backend Framework",
      "React.js - Frontend Library",
      "Node.js - Server-side JavaScript",
      "State Management with Redux",
      "Authentication and Authorization",
      "RESTful APIs and GraphQL",
      "Deployment and DevOps basics"
    ],
    highlights: [
      "Intensive 4-month program",
      "Build production-ready applications",
      "Industry mentorship",
      "Interview preparation",
      "Resume building",
      "Placement support"
    ],
    careerOpportunities: [
      "MERN Stack Developer",
      "Full Stack JavaScript Developer",
      "React Developer",
      "Node.js Developer",
      "Technical Lead roles"
    ],
    founderMessage: "MERN stack is one of the most sought-after skill sets in the industry. We ensure you become proficient enough to handle real-world challenges.",
    founderName: "Priya Sharma, Co-Founder",
    fees: "₹40,000"
  },
  "python-aiml": {
    slug: "python-aiml",
    title: "Python & AI/ML",
    category: "IT",
    duration: "5 Months",
    description: "Learn Python programming, data science, machine learning, and artificial intelligence with hands-on projects.",
    fullDescription: "Dive into the world of AI and Machine Learning with Python. Learn from basics to advanced concepts with real-world projects.",
    eligibility: "12th Pass or Graduate",
    syllabus: [
      "Python Programming Fundamentals",
      "Data Structures and Algorithms",
      "NumPy, Pandas, Matplotlib",
      "Machine Learning Algorithms",
      "Deep Learning with TensorFlow/PyTorch",
      "Natural Language Processing",
      "Computer Vision",
      "ML Project Development"
    ],
    highlights: [
      "Comprehensive Python training",
      "Hands-on ML projects",
      "Industry case studies",
      "Kaggle competitions",
      "Research paper implementation",
      "Portfolio development"
    ],
    careerOpportunities: [
      "Machine Learning Engineer",
      "Data Scientist",
      "AI Research Engineer",
      "Python Developer",
      "Data Analyst"
    ],
    founderMessage: "AI and ML are shaping the future. Our program equips you with skills that are in high demand across all industries.",
    founderName: "Rajesh Kumar, Founder",
    fees: "₹50,000"
  },
  "11th-12th-science": {
    slug: "11th-12th-science",
    title: "11th & 12th Science",
    category: "School",
    duration: "2 Years",
    description: "Complete coaching for Physics, Chemistry, Mathematics and Biology with experienced faculty and comprehensive study material.",
    fullDescription: "Our 11th & 12th Science program provides comprehensive coaching for PCMB (Physics, Chemistry, Mathematics, Biology) with focus on both board exams and competitive exam preparation. Expert faculty with proven track record ensure conceptual clarity and problem-solving skills.",
    eligibility: "Students in 11th or 12th Standard",
    syllabus: [
      "Physics: Mechanics, Thermodynamics, Waves, Optics, Modern Physics",
      "Chemistry: Physical, Organic, and Inorganic Chemistry",
      "Mathematics: Calculus, Algebra, Vectors, 3D Geometry",
      "Biology: Botany and Zoology (Optional)",
      "Regular Tests and Assessments",
      "Board Exam Preparation"
    ],
    highlights: [
      "Experienced faculty for all subjects",
      "Small batch sizes for personal attention",
      "Regular doubt clearing sessions",
      "Comprehensive study material",
      "Mock tests and practice papers",
      "Board exam focused preparation",
      "Competitive exam foundation"
    ],
    careerOpportunities: [
      "Engineering (JEE, BITSAT)",
      "Medical (NEET)",
      "BSc in various specializations",
      "Research careers",
      "Higher education opportunities"
    ],
    founderMessage: "11th and 12th are crucial years that shape your future. We focus on building strong fundamentals while preparing you for board exams and beyond.",
    founderName: "MD. RIZWAN, Founder",
    fees: "₹60,000 per year"
  },
  "11th-12th-commerce": {
    slug: "11th-12th-commerce",
    title: "11th & 12th Commerce",
    category: "School",
    duration: "2 Years",
    description: "Expert guidance for Accountancy, Business Studies, Economics with practical knowledge and exam-focused preparation.",
    fullDescription: "Our Commerce program provides in-depth coverage of Accountancy, Business Studies, Economics, and Mathematics with practical examples and case studies. Perfect for students aiming for CA, CS, or BBA.",
    eligibility: "Students in 11th or 12th Standard (Commerce Stream)",
    syllabus: [
      "Accountancy: Financial Statements, Partnership, Company Accounts",
      "Business Studies: Business Environment, Management, Marketing",
      "Economics: Microeconomics and Macroeconomics",
      "Mathematics: Statistics, Calculus, Linear Programming",
      "Board Exam Pattern Practice",
      "Practical Case Studies"
    ],
    highlights: [
      "Commerce specialist faculty",
      "Practical approach to concepts",
      "Regular practice sessions",
      "Board exam preparation",
      "Career counseling for CA/CS",
      "Industry insights",
      "Mock exams"
    ],
    careerOpportunities: [
      "Chartered Accountancy (CA)",
      "Company Secretary (CS)",
      "BBA and MBA",
      "Banking and Finance",
      "Business Management"
    ],
    founderMessage: "Commerce is the backbone of business. We prepare you not just for exams but for real-world business challenges.",
    founderName: "MD. FARHAN, Co-Founder",
    fees: "₹50,000 per year"
  },
  "jee-main-advanced": {
    slug: "jee-main-advanced",
    title: "JEE Main & Advanced",
    category: "Competitive",
    duration: "1-2 Years",
    description: "Intensive preparation for India's premier engineering entrance exam with mock tests, doubt sessions, and expert mentorship.",
    fullDescription: "Crack JEE Main & Advanced with our comprehensive program designed by IIT alumni. We focus on concept clarity, problem-solving techniques, and exam strategy to help you secure a top rank.",
    eligibility: "Students in 11th, 12th, or 12th Pass",
    syllabus: [
      "Physics: Mechanics, Thermodynamics, Electromagnetism, Modern Physics",
      "Chemistry: Physical, Organic, Inorganic Chemistry",
      "Mathematics: Calculus, Algebra, Coordinate Geometry, Trigonometry",
      "Advanced Problem Solving",
      "JEE Main and Advanced Pattern Tests",
      "Previous Years' Question Analysis"
    ],
    highlights: [
      "IIT alumni faculty",
      "Daily practice problems (DPPs)",
      "Regular mock tests",
      "Doubt clearing sessions",
      "Study material from top publishers",
      "Online test platform",
      "Rank prediction analysis"
    ],
    careerOpportunities: [
      "B.Tech from IITs, NITs",
      "Software Engineering",
      "Core Engineering fields",
      "Research and Development",
      "Higher studies abroad"
    ],
    founderMessage: "JEE requires dedication and smart preparation. Our proven methodology has helped hundreds of students achieve their IIT dreams.",
    founderName: "MD. RIZWAN, Founder",
    fees: "₹80,000"
  },
  "foundation-courses": {
    slug: "foundation-courses",
    title: "Foundation Courses",
    category: "Competitive",
    duration: "1-2 Years",
    description: "Early preparation for competitive exams starting from 9th and 10th standard to build strong fundamentals.",
    fullDescription: "Start your competitive exam preparation early with our foundation courses. Build strong conceptual understanding in 9th and 10th to excel in future competitive exams like JEE and NEET.",
    eligibility: "Students in 9th or 10th Standard",
    syllabus: [
      "Mathematics: Advanced problem solving and logical reasoning",
      "Science: Physics, Chemistry, Biology fundamentals",
      "Aptitude and Reasoning",
      "Olympiad preparation",
      "Regular assessments",
      "Competitive mindset development"
    ],
    highlights: [
      "Early start advantage",
      "Olympiad preparation included",
      "Strong foundation building",
      "Age-appropriate teaching methods",
      "Regular parent-teacher meetings",
      "Scholarship opportunities",
      "Career guidance"
    ],
    careerOpportunities: [
      "Strong base for JEE/NEET",
      "Olympiad medals and recognition",
      "Scholarship programs",
      "Top tier colleges",
      "Research opportunities"
    ],
    founderMessage: "Early preparation gives you a head start. Our foundation courses ensure you develop the right approach and skills for competitive exams.",
    founderName: "MD. RIZWAN, Founder",
    fees: "₹40,000 per year"
  },
  "bba-program-support": {
    slug: "bba-program-support",
    title: "BBA Program Support",
    category: "Commerce",
    duration: "3 Years",
    description: "Comprehensive support for Bachelor of Business Administration students with industry-oriented curriculum.",
    fullDescription: "Get comprehensive support for your BBA journey with our industry-aligned curriculum. We cover core business subjects, practical case studies, and soft skills development to make you industry-ready.",
    eligibility: "BBA Students or Aspiring BBA Students",
    syllabus: [
      "Business Management Principles",
      "Marketing and Sales Strategies",
      "Financial Management",
      "Human Resource Management",
      "Operations Management",
      "Business Law and Ethics",
      "Entrepreneurship Development",
      "Industry Projects"
    ],
    highlights: [
      "Industry expert faculty",
      "Real business case studies",
      "Internship assistance",
      "Soft skills training",
      "Guest lectures from industry",
      "Project-based learning",
      "Placement guidance"
    ],
    careerOpportunities: [
      "MBA from top B-schools",
      "Business Analyst",
      "Marketing Manager",
      "HR Manager",
      "Entrepreneur"
    ],
    founderMessage: "BBA is your gateway to the business world. We ensure you're not just academically sound but also industry-ready.",
    founderName: "MD. FARHAN, Co-Founder",
    fees: "₹45,000 per year"
  },
  "business-management": {
    slug: "business-management",
    title: "Business Management",
    category: "Commerce",
    duration: "6 Months",
    description: "Practical business management skills including marketing, finance, operations, and strategic planning.",
    fullDescription: "Learn essential business management skills through our intensive 6-month program. Cover all aspects of running a business from marketing to finance, with practical assignments and case studies.",
    eligibility: "Graduates or Working Professionals",
    syllabus: [
      "Strategic Management",
      "Marketing Management",
      "Financial Planning and Analysis",
      "Operations and Supply Chain",
      "Leadership and Team Management",
      "Business Communication",
      "Project Management",
      "Digital Business Strategies"
    ],
    highlights: [
      "Practical approach to learning",
      "Industry case studies",
      "Weekend batches available",
      "Working professional friendly",
      "Certificate upon completion",
      "Networking opportunities",
      "Career counseling"
    ],
    careerOpportunities: [
      "Business Manager",
      "Operations Manager",
      "Strategy Consultant",
      "Entrepreneur",
      "Department Head"
    ],
    founderMessage: "Modern businesses need versatile managers. Our program develops both strategic thinking and practical execution skills.",
    founderName: "MD. FARHAN, Co-Founder",
    fees: "₹35,000"
  },
  "data-science-analytics": {
    slug: "data-science-analytics",
    title: "Data Science & Analytics",
    category: "IT",
    duration: "6 Months",
    description: "Master data analysis, visualization, statistical modeling, and predictive analytics using industry tools.",
    fullDescription: "Become a data science professional with our comprehensive program covering statistical analysis, machine learning, data visualization, and big data tools. Work on real-world datasets and build a strong portfolio.",
    eligibility: "12th Pass or Graduate, Basic Computer Knowledge",
    syllabus: [
      "Python for Data Science",
      "Statistics and Probability",
      "Data Visualization (Matplotlib, Seaborn, Tableau)",
      "SQL and Database Management",
      "Machine Learning Algorithms",
      "Big Data Tools (Hadoop, Spark)",
      "Business Intelligence",
      "Capstone Projects"
    ],
    highlights: [
      "Hands-on with real datasets",
      "Industry-standard tools",
      "Statistical modeling expertise",
      "Portfolio building",
      "Interview preparation",
      "Kaggle competitions",
      "Job placement support"
    ],
    careerOpportunities: [
      "Data Scientist",
      "Data Analyst",
      "Business Intelligence Analyst",
      "Machine Learning Engineer",
      "Analytics Consultant"
    ],
    founderMessage: "Data is the new oil. Our program transforms you into a skilled data professional who can extract insights and drive business decisions.",
    founderName: "MD. FARHAN, Co-Founder",
    fees: "₹55,000"
  },
  "cloud-computing-awsazure": {
    slug: "cloud-computing-awsazure",
    title: "Cloud Computing (AWS/Azure)",
    category: "IT",
    duration: "3 Months",
    description: "Comprehensive cloud computing training covering AWS, Azure, deployment, DevOps, and cloud architecture.",
    fullDescription: "Master cloud computing with hands-on training in AWS and Azure. Learn cloud architecture, deployment, monitoring, and DevOps practices to become a certified cloud professional.",
    eligibility: "IT Students or Working Professionals",
    syllabus: [
      "Cloud Computing Fundamentals",
      "AWS Services (EC2, S3, Lambda, RDS)",
      "Azure Services and Architecture",
      "Cloud Security and Compliance",
      "DevOps and CI/CD Pipelines",
      "Infrastructure as Code (Terraform)",
      "Cloud Cost Optimization",
      "Certification Preparation"
    ],
    highlights: [
      "AWS and Azure hands-on labs",
      "Real cloud deployments",
      "Industry certification prep",
      "DevOps integration",
      "Cost optimization techniques",
      "Security best practices",
      "Project portfolio"
    ],
    careerOpportunities: [
      "Cloud Engineer",
      "DevOps Engineer",
      "Cloud Architect",
      "Site Reliability Engineer",
      "Cloud Consultant"
    ],
    founderMessage: "Cloud computing is the future of IT infrastructure. Get certified and join the fastest-growing tech domain.",
    founderName: "MD. FARHAN, Co-Founder",
    fees: "₹40,000"
  },
  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    category: "IT",
    duration: "4 Months",
    description: "Build native and cross-platform mobile applications using React Native, Flutter, or native technologies.",
    fullDescription: "Learn to build professional mobile applications for iOS and Android. Master cross-platform frameworks like React Native and Flutter, or dive into native development with practical projects.",
    eligibility: "Basic programming knowledge preferred",
    syllabus: [
      "Mobile App Development Fundamentals",
      "React Native/Flutter Framework",
      "UI/UX for Mobile Apps",
      "API Integration and Backend",
      "State Management",
      "Mobile App Testing",
      "App Store Deployment",
      "Real-world App Projects"
    ],
    highlights: [
      "Cross-platform development",
      "Build portfolio apps",
      "App store publishing",
      "Industry mentorship",
      "Live projects",
      "UI/UX best practices",
      "Placement assistance"
    ],
    careerOpportunities: [
      "Mobile App Developer",
      "React Native Developer",
      "Flutter Developer",
      "iOS/Android Developer",
      "Freelance App Developer"
    ],
    founderMessage: "Mobile apps are everywhere. Learn to create the apps that millions will use and start your journey as a mobile developer.",
    founderName: "MD. FARHAN, Co-Founder",
    fees: "₹45,000"
  },
  "uiux-design": {
    slug: "uiux-design",
    title: "UI/UX Design",
    category: "IT",
    duration: "3 Months",
    description: "Learn user interface and experience design using Figma, Adobe XD with design thinking methodology.",
    fullDescription: "Master the art of UI/UX design with industry-standard tools. Learn design thinking, wireframing, prototyping, and user research to create beautiful and functional digital experiences.",
    eligibility: "No prior experience required",
    syllabus: [
      "Design Thinking Fundamentals",
      "User Research and Personas",
      "Wireframing and Prototyping",
      "Figma and Adobe XD Mastery",
      "Visual Design Principles",
      "Interaction Design",
      "Usability Testing",
      "Portfolio Development"
    ],
    highlights: [
      "Industry-standard tools",
      "Real client projects",
      "Portfolio building",
      "Design critique sessions",
      "Industry best practices",
      "Freelancing guidance",
      "Job placement support"
    ],
    careerOpportunities: [
      "UI/UX Designer",
      "Product Designer",
      "Visual Designer",
      "UX Researcher",
      "Freelance Designer"
    ],
    founderMessage: "Great design is invisible but impactful. Learn to create experiences that users love and businesses value.",
    founderName: "MD. FARHAN, Co-Founder",
    fees: "₹30,000"
  },
  "bcamcabsc-it-support": {
    slug: "bcamcabsc-it-support",
    title: "BCA/MCA/BSc IT Support",
    category: "IT",
    duration: "Ongoing",
    description: "Academic support and career guidance for computer science degree programs with industry-relevant skills.",
    fullDescription: "Get comprehensive support for your BCA, MCA, or BSc IT degree with our academic coaching and industry-aligned skill development. We bridge the gap between academics and industry requirements.",
    eligibility: "BCA/MCA/BSc IT Students",
    syllabus: [
      "Core CS subjects support",
      "Programming Languages (C, C++, Java, Python)",
      "Database Management Systems",
      "Operating Systems and Networks",
      "Data Structures and Algorithms",
      "Software Engineering",
      "Project Development",
      "Placement Preparation"
    ],
    highlights: [
      "Academic subject coaching",
      "Project guidance",
      "Assignment help",
      "Exam preparation",
      "Industry skills training",
      "Placement training",
      "Internship assistance"
    ],
    careerOpportunities: [
      "Software Developer",
      "System Analyst",
      "Database Administrator",
      "Network Engineer",
      "IT Consultant"
    ],
    founderMessage: "Your degree is just the beginning. We ensure you have both academic excellence and industry-ready skills.",
    founderName: "MD. FARHAN, Co-Founder",
    fees: "₹25,000 per semester"
  }
};
