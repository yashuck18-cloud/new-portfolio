import { Code2, Server, Database, Smartphone, Globe, Terminal, Cpu, Layout, Layers } from 'lucide-react';

export const personalInfo = {
  name: "Yashwantha C K",
  title: "BCA Student | Aspiring Cloud & Full-Stack Developer",
  tagline: "Building scalable web experiences and exploring cloud infrastructure.",
  bio: "I am a BCA student passionate about building interactive web applications and scalable cloud solutions. I have hands-on experience with AWS (EC2, S3, IAM), Linux, and Apache server deployment, along with frontend technologies like HTML, CSS, and JavaScript.\n\nI have deployed real-world projects including a portfolio website on AWS EC2 and worked with Git & GitHub for version control. I enjoy solving real-world problems and continuously improving my skills in Cloud and DevOps practices.",
  location: "India",
  email: "yashuck18@gmail.com",
  phone: "8660242733",
  github: "https://github.com/yashuck18-cloud",
  linkedin: "https://www.linkedin.com/in/yashwantha-c-k-028198396/",
  resume: "/assets/Yashwantha_CK_Resume.pdf",
};

export const skills = [
  {
    category: "Languages",
    icon: Code2,
    items: ["Python", "JavaScript", "Java (Basics)"]
  },
  {
    category: "Frontend",
    icon: Layout,
    items: ["React", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    category: "Backend / Database",
    icon: Database,
    items: ["MySQL", "MongoDB", "Python"]
  },
  {
    category: "Cloud & DevOps",
    icon: Server,
    items: ["AWS EC2", "AWS S3", "IAM", "Linux", "Docker"]
  },
  {
    category: "Tools",
    icon: Terminal,
    items: ["Git", "GitHub", "VS Code", "GitLab", "Antigravity (Claude)", "Lovable", "Google AI Studio"]
  }
];

export const projects = [
  {
    title: "AWS EC2 Portfolio Hosting",
    problem: "Needed a scalable and reliable way to host my web portfolio without relying on shared hosting.",
    role: "Cloud Architect",
    tech: ["AWS EC2", "Linux", "Nginx", "Domain DNS"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Full Stack Notes App",
    problem: "Created a centralized system for students to save, organize, and share their study notes securely.",
    role: "Full Stack Developer",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Service Finder Android App",
    problem: "Developed a platform connecting local service providers with users needing urgent assistance.",
    role: "Mobile Developer",
    tech: ["Java", "Android Studio", "Firebase", "Google Maps API"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "IAM Permissions Workflow",
    problem: "Implemented least-privilege access control across multiple AWS accounts to ensure security compliance.",
    role: "Security Engineer",
    tech: ["AWS IAM", "JSON Policies", "AWS CLI"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop",
  }
];

export const certifications = [
  {
    title: "Emerge 2026 Hackathon",
    issuer: "Jain Institute of Technology, Davangere",
    date: "25 March 2026",
    link: "#",
    image: "/assets/Emerge.jpeg",
    featured: true,
    badge: "Participant"
  },
  {
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    date: "Mar 04, 2026",
    link: "https://www.credly.com/badges/2edc9647-25ca-48e6-9f15-fbe8ab428c5a",
    image: "/assets/IBM.jpeg",
    featured: true,
  }
];

export const navLinks = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Certifications", href: "certifications" },
  { name: "Resume", href: "resume" },
  { name: "Contact", href: "contact" }
];
