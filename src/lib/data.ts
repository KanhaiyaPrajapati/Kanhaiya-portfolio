import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiRedux,
  SiGit,
  SiGithub,
  SiPostman,
  SiHtml5,
  SiCss3,
  SiSass,
  SiBootstrap,
  SiMui,
  SiExpress,
  SiJest,
  SiVsco,
  SiGooglechrome,
  SiShadcnui,
  SiMysql,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const personalInfo = {
  name: "Kanhaiya Prajapati",
  title: "Frontend Engineer",
  tagline: "Building responsive UIs and Apps with React, Next.js & React Native",
  email: "kanhaiyaprajapati756@gmail.com",
  phone: "+91 8849931533",
  location: "Surat, Gujarat, India",
  origin: "Surat, Gujarat",
  linkedin: "https://www.linkedin.com/in/kanhaiya-prajapati-a59b7a157/",
  github: "https://github.com/KanhaiyaPrajapati",
  bio: `I'm a passionate Frontend Engineer based in Surat, specializing in crafting
    pixel-perfect, responsive web applications. With expertise in React.js, Next.js, React Native and
    the modern JavaScript ecosystem, I transform complex requirements into elegant,
    performant user interfaces. I thrive in Agile environments, collaborating closely with
    cross-functional teams to deliver exceptional digital experiences.`,
};

export const education = {
  degree: "Bachelor of Computer Applications (B.C.A)",
  university: "Veer Narmad South Gujarat University (VNSGU)",
  duration: "April 2015 - March 2018",
  cgpa: "8.1",
  location: "Surat, Gujarat",
};

export const experience = [
  {
    role: "React.js Developer / Frontend Developer",
    company: "Koli Infotech Pvt. Ltd.",
    location: "Surat, Gujarat",
    duration: "Jan 2024 - Present",
    achievements: [
      "Designed and developed responsive web applications and admin dashboards using React.js, Next.js, and Material UI, delivering seamless user experiences across devices.",
      "Built reusable, maintainable UI components leveraging React Hooks and integrated RESTful APIs for dynamic data rendering.",
      "Developed cross-platform mobile applications with React Native, implementing Redux for state management and React Navigation for routing.",
      "Collaborated closely with backend engineers working on Node.js/MongoDB in Agile sprints, ensuring efficient feature delivery and code quality.",
    ],
  },
];

export const projects = [
  {
    title: "JobVob App",
    description:
      "A comprehensive job search mobile application (similar to Apna) enabling users to discover job listings, manage applications, and receive real-time notifications.",
    longDescription:
      "Built a full-featured job search mobile app with user authentication, job listing feeds, application tracking, and push notifications for new opportunities.",
    tech: ["React Native", "JavaScript", "Redux", "REST APIs"],
    features: [
      "Job listings with advanced filters",
      "User login & profile management",
      "Push notifications for new jobs",
      "Application tracking dashboard",
    ],
    github: "https://github.com/kanhaiya-prajapati/jobvob-app",
    live: "https://play.google.com/store/apps/details?id=cnxt.com.jobvob&pcampaignid=web_share",
    image: "/projects/jobvob.png",
    category: "Mobile App",
  },
  {
    title: "IMS Project",
    description:
      "Government exam preparation portal for competitive exams like NTPC and GUJCET, featuring practice tests, study materials, and progress tracking.",
    longDescription:
      "Developed an exam preparation web portal helping students prepare for government competitive examinations with structured courses, mock tests, and performance analytics.",
    tech: ["React.js", "Node.js", "REST API", "Git"],
    features: [
      "Practice tests for NTPC, GUJCET",
      "Study material management",
      "Student progress tracking",
      "Admin panel for content management",
    ],
    github: "https://github.com/kanhaiya-prajapati/ims-project",
    live: "#",
    image: "/projects/ims.png",
    category: "Web App",
  },
  {
    title: "IT Futurz",
    description:
      "Feature-rich admin dashboard built with Next.js and Material UI, featuring server-side rendering for optimal performance and SEO.",
    longDescription:
      "Created a comprehensive admin site panel with SSR capabilities, seamless API integration, and an intuitive Material UI interface for efficient data management.",
    tech: ["Next.js", "Material UI", "API Integration", "SSR"],
    features: [
      "Server-side rendering for SEO",
      "Dynamic data tables & charts",
      "Role-based access control",
      "Responsive dashboard layout",
    ],
    github: "https://github.com/kanhaiya-prajapati/it-futurz-admin",
    live: "https://itfuturz.in/#/home",
    image: "/projects/itfuturz.png",
    category: "Web App",
  },
  {
    title: "RubiQRide",
    description:
      "Passenger & Driver App ,featuring real-time GPS tracking, Razorpay payments, and 25,000+ lines of TypeScript.",
    longDescription:
      "Built a complete ride-sharing platform from scratch with real-time Socket.IO GPS tracking, Razorpay payment integration, Twilio OTP authentication, and Firebase push notifications. Architected for 10,000+ concurrent rides.",
    tech: ["React Native", "TypeScript", "Redux Toolkit", "Socket.IO", "Google Maps", "Razorpay"],
    features: [
      "Real-time GPS tracking with <100ms latency",
      "Razorpay payments (UPI/Cards/Wallets)",
      "Driver heatmap with 500+ driver clustering",
      "Twilio OTP with 3-layer fallback",
    ],
    github: "https://github.com/KanhaiyaPrajapati/rubiqride",
    live: "#",
    image: "/projects/rubiqride.png",
    category: "Mobile App",
  },
  {
    title: "Koli Infotech Website",
    description:
      "15+ page corporate IT services platform built from scratch with Next.js 14, Tailwind CSS, and Framer Motion. Achieved 100/100 Lighthouse score and production deployed on Vercel.",
    longDescription:
      "Built a complete corporate website for an IT services firm featuring SSR, ISR, Nodemailer contact forms, Twilio phone verification, scroll-triggered animations, dark/light mode, and SEO with schema.org structured data.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Nodemailer", "Twilio"],
    features: [
      "100/100 Lighthouse performance score",
      "15+ pages with custom animations",
      "Nodemailer & Twilio form integrations",
      "SEO optimized with JSON-LD schemas",
    ],
    github: "https://github.com/KanhaiyaPrajapati/koliinfotech",
    live: "#",
    image: "/projects/koliinfotech.png",
    category: "Web App",
  },
  {
    title: "Turing AI Workflow Debugging",
    description:
      "Specialized in debugging and optimizing AI-generated code workflows, ensuring code quality and performance standards are met.",
    longDescription:
      "Worked on debugging AI-generated code, identifying issues in React components, JavaScript logic, and CSS styling to ensure production-ready quality output.",
    tech: ["React.js", "JavaScript", "HTML", "CSS"],
    features: [
      "AI code review & debugging",
      "Performance optimization",
      "Code quality assurance",
      "Cross-browser compatibility fixes",
    ],
    github: "https://github.com/kanhaiya-prajapati/turing-ai-debug",
    live: "#",
    image: "/projects/turing.png",
    category: "AI/Debug",
  },
];

export const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript ES6+", icon: SiJavascript, color: "#F7DF1E", level: 90 },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 80 },
      { name: "SQL", icon: null, color: "#336791", level: 65 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB", level: 92 },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: 85 },
      { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB", level: 80 },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26", level: 95 },
      { name: "CSS3", icon: SiCss3, color: "#1572B6", level: 92 },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 88 },
      { name: "Material UI", icon: SiMui, color: "#007FFF", level: 85 },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", level: 85 },
      { name: "SCSS/SASS", icon: SiSass, color: "#CC6699", level: 82 },
      { name: "shadcn/ui", icon: SiShadcnui, color: "#000000", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 70 },
      { name: "Express.js", icon: SiExpress, color: "#000000", level: 68 },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 65 },
      { name: "MySQL", icon: SiMysql, color: "#4479A1", level: 65 },
    ],
  },
  {
    title: "State Management",
    skills: [
      { name: "Redux", icon: SiRedux, color: "#764ABC", level: 85 },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC", level: 83 },
      { name: "Context API", icon: SiReact, color: "#61DAFB", level: 88 },
      { name: "Zustand", icon: null, color: "#433D37", level: 75 },
    ],
  },
  {
    title: "Tools & Testing",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032", level: 88 },
      { name: "GitHub", icon: SiGithub, color: "#181717", level: 87 },
      { name: "VS Code", icon: SiVsco, color: "#007ACC", level: 92 },
      { name: "Postman", icon: SiPostman, color: "#FF6C37", level: 82 },
      { name: "Chrome DevTools", icon: SiGooglechrome, color: "#4285F4", level: 85 },
      { name: "Jest", icon: SiJest, color: "#C21325", level: 70 },
    ],
  },
];

export const certifications = [
  {
    title: "UI Development",
    issuer: "Durga Solutions",
    description: "Comprehensive training in modern UI development practices and frameworks.",
  },
  {
    title: "React.js Development",
    issuer: "Oscar Career Point",
    description: "In-depth certification covering React.js ecosystem and best practices.",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];
