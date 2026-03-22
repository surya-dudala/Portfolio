import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaFigma, FaServer, FaCode, FaJava } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiGit, SiVite, SiMysql, SiPhp, SiCplusplus, SiPython } from 'react-icons/si';

export const personalInfo = {
  name: "Surya Dudala",
  roles: ["Full Stack Developer", "React Developer", "Problem Solver"],
  profileImage: "/assets/profile.png",
  aboutImage: "/assets/profile.png",
  aboutText:
    "I am a passionate Full Stack Developer skilled in building scalable web applications using modern technologies like React, Node.js, and PHP. I enjoy solving real-world problems and creating efficient, user-friendly solutions.",
  email: "suryadudala123@gmail.com",
  phone: "+91-7207707133",
  resume: "https://drive.google.com/file/d/1e8RTXK5fm5UO2C1f-3-S3YxUsRSCtU8z/view?usp=sharing",
  socials: {
    github: "https://github.com/surya-dudala",
    linkedin: "https://linkedin.com/in/surya-dudala",
    leetcode: "https://leetcode.com/u/surya-dudala/"
  }
};

export const leetcodeStats = {
  total: "150+",
  easy: 80,
  medium: 50,
  hard: 20
};

export const aboutCards = [
  {
    id: 1,
    title: "Problem Solving",
    description: "Solved 150+ problems on LeetCode with strong logical and analytical skills.",
    icon: FaCode
  },
  {
    id: 2,
    title: "Web Development",
    description: "Built full-stack applications using React, Node.js, PHP, and modern UI frameworks.",
    icon: FaReact
  },
  {
    id: 3,
    title: "Adaptability",
    description: "Quick learner, adaptable to new technologies and real-world development challenges.",
    icon: FaServer
  }
];

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "C++", icon: SiCplusplus, level: 85 },
      { name: "Java", icon: FaJava, level: 80 },
      { name: "Python", icon: SiPython, level: 75 },
      { name: "JavaScript", icon: SiJavascript, level: 90 },
      { name: "PHP", icon: SiPhp, level: 80 }
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: FaReact, level: 90 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 85 },
      { name: "HTML", icon: FaHtml5, level: 95 },
      { name: "CSS", icon: FaCss3Alt, level: 90 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, level: 85 },
      { name: "Express", icon: SiExpress, level: 80 },
      { name: "PHP", icon: SiPhp, level: 85 }
    ]
  },
  {
    category: "Database & Tools",
    items: [
      { name: "MongoDB", icon: SiMongodb, level: 80 },
      { name: "MySQL", icon: SiMysql, level: 85 },
      { name: "Git", icon: SiGit, level: 85 },
      { name: "GitHub", icon: SiGit, level: 90 }
    ]
  }
];

export const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Building responsive, modern, and high-performance web applications.",
    icon: FaReact
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Creating scalable APIs and server-side logic using Node.js and PHP.",
    icon: FaServer
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Designing clean and user-friendly interfaces with modern UI frameworks.",
    icon: FaFigma
  }
];

export const projects = [
  {
    id: 1,
    title: "LifeOS – Personal Analytics Dashboard",
    image: "/assets/project1.png",
    stack: ["React", "Node.js", "CSS", "JavaScript"],
    description:
      "Unified system to simplify daily planning and track activities with secure sessions and meaningful graphical insights.",
    github: "https://github.com/surya-dudala",
    liveDemo: "https://life-os-mern.vercel.app",
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Virtual Personal Trainer",
    image: "/assets/project2.png",
    stack: ["React", "Node.js", "Tailwind CSS"],
    description:
      "Web-based fitness platform with authentication, role-based access, and real-time workout tracking.",
    github: "https://github.com/surya-dudala",
    liveDemo: "https://virtual-personal-trainer.vercel.app/dashboard",
    category: "Full Stack"
  },
  {
    id: 3,
    title: "Seamless Agent Hiring Platform",
    image: "/assets/project3.png",
    stack: ["PHP", "JavaScript", "MySQL", "Tailwind"],
    description:
      "Full-stack hiring system with onboarding forms, backend logic, and interactive dashboard.",
    github: "https://github.com/surya-dudala",
    liveDemo: "#",
    category: "Full Stack"
  }
];

export const training = [
  {
    id: 1,
    title: "C++ Programming Training – CSE Pathshala",
    subtitle: "Live Summer Training",
    duration: "JUN 2025 – JUL 2025",
    description: "Learned OOP concepts, data structures, recursion, and problem-solving techniques with hands-on projects.",
    skills: ["C++", "OOPs", "Data Structures", "Algorithms"],
    image: "/assets/cpp-training.png",
    link: "https://drive.google.com/file/d/1xZtANN0q1fKhavbJYdsi9UkquJY1EW0Z/view?usp=sharing"
  }
];

export const certifications = [
  {
    id: 1,
    title: "TCP/IP and Advanced Networking",
    platform: "Coursera",
    date: "Nov 2024",
    description: "Course covering TCP/IP model and advanced networking concepts including protocols and architecture.",
    image: "/assets/certificate1.png",
    link: "https://www.coursera.org/account/accomplishments/certificate/0093P7279ZAU"
  },
  {
    id: 2,
    title: "The Bits and Bytes of Computer Networking",
    platform: "Google | Coursera",
    date: "Sep 2024",
    description: "Learned networking fundamentals, OSI model, routing, DNS, and real-world internet systems.",
    image: "/assets/certificate2.png",
    link: "https://www.coursera.org/account/accomplishments/certificate/F3YOVD4FT948"
  },
  {
    id: 3,
    title: "Responsive Web Design",
    platform: "FreeCodeCamp",
    date: "",
    description: "Built responsive web pages using HTML and CSS with modern layout techniques.",
    image: "/assets/certificate3.png",
    link: "https://www.freecodecamp.org/certification/fcc6a28c8e1-d2d9-4c53-80cd-cd9bc0870877/responsive-web-design"
  }
];

export const education = [
  {
    id: 1,
    institution: "Lovely Professional University",
    degree: "B.Tech – Computer Science",
    duration: "2023 – Present",
    location: "Punjab, India",
    grade: "CGPA 6.85",
    gradeColor: "bg-blue-500/10 text-blue-500 border border-blue-500/20",
    description: "Pursuing undergraduate degree focusing on core computer science subjects, software engineering, and modern web development.",
    icon: "FaGraduationCap",
    isActive: true
  },
  {
    id: 2,
    institution: "Sri Chaitanya",
    degree: "Intermediate",
    duration: "2021 – 2023",
    location: "India",
    grade: "80%",
    gradeColor: "bg-orange-500/10 text-orange-500 border border-orange-500/20",
    description: "Completed higher secondary education establishing a rigorous foundation in Mathematics, Physics, and analytical problem solving.",
    icon: "FaBook",
    isActive: false
  },
  {
    id: 3,
    institution: "Nath Vidyaniketan",
    degree: "School",
    duration: "2020 – 2021",
    location: "India",
    grade: "98%",
    gradeColor: "bg-green-500/10 text-green-500 border border-green-500/20",
    description: "Excelled in matriculation subjects, fostering an early passion for technology and continuous learning.",
    icon: "FaAward",
    isActive: false
  }
];

export const achievements = [
  { id: 1, title: "LeetCode Problems", count: 150, suffix: "+" },
  { id: 2, title: "Hackathon Rank", count: 18, suffix: " Top" },
  { id: 3, title: "Projects Built", count: 5, suffix: "+" }
];