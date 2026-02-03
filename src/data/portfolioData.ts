export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  client?: string;
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
}

export interface Employment {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  logo?: string;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
  industry: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Management Platform",
    description: "A full stack platform to manage portfolios using Java, Spring Boot & React. Features include user authentication, project management, and analytics dashboard.",
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL"],
    client: "LogiSync",
  },
  {
    id: "2",
    title: "Client Collaboration App",
    description: "An Angular application for seamless client communication and project tracking. Real-time messaging and file sharing capabilities.",
    technologies: ["Angular", "TypeScript", "Node.js", "Firebase"],
    client: "WebMetrics",
  },
  {
    id: "3",
    title: "Finance Tracker",
    description: "A web application for tracking expenses and budgeting built with React & Chart.js. Features beautiful visualizations and reporting.",
    technologies: ["React", "Chart.js", "TypeScript", "Firebase"],
    client: "StartupTech",
  },
  {
    id: "4",
    title: "E-commerce Website",
    description: "A modern e-commerce platform with shopping cart, payment integration, and inventory management.",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    client: "WebMetrics",
  },
  {
    id: "5",
    title: "Blogging Platform",
    description: "A feature-rich blogging platform with markdown support, comments, and user profiles.",
    technologies: ["TypeScript", "Node.js", "Next.js", "PostgreSQL"],
    client: "StartupTech",
  },
  {
    id: "6",
    title: "API Analytics Dashboard",
    description: "Real-time API monitoring and analytics dashboard with performance metrics and error tracking.",
    technologies: ["React", "D3.js", "Spring Boot", "Redis"],
    client: "LogiSync",
  },
];

export const skills: Skill[] = [
  { name: "Java", level: 95, category: "Backend", color: "#f89820" },
  { name: "Spring Boot", level: 90, category: "Backend", color: "#6db33f" },
  { name: "React", level: 85, category: "Frontend", color: "#61dafb" },
  { name: "Angular", level: 80, category: "Frontend", color: "#dd0031" },
  { name: "TypeScript", level: 88, category: "Language", color: "#3178c6" },
  { name: "PostgreSQL", level: 82, category: "Database", color: "#336791" },
  { name: "Node.js", level: 78, category: "Backend", color: "#68a063" },
  { name: "Firebase", level: 75, category: "Cloud", color: "#ffca28" },
  { name: "Docker", level: 70, category: "DevOps", color: "#2496ed" },
  { name: "AWS", level: 65, category: "Cloud", color: "#ff9900" },
  { name: "Git", level: 90, category: "Tools", color: "#f05032" },
  { name: "REST APIs", level: 92, category: "Backend", color: "#00bcd4" },
];

export const employments: Employment[] = [
  {
    id: "1",
    company: "TechCorp",
    role: "Senior Software Engineer",
    period: "2019 - Present",
    description: "Leading development of enterprise web applications using Spring Boot and React. Mentoring junior developers and implementing best practices.",
  },
  {
    id: "2",
    company: "WebSolutions",
    role: "Frontend Developer",
    period: "2017 - 2019",
    description: "Built interactive web applications with React and TypeScript. Collaborated with design team to implement responsive UI components.",
  },
  {
    id: "3",
    company: "InnovateTech",
    role: "Software Engineer Intern",
    period: "2016",
    description: "Developed core components for a machine learning platform. Gained experience in agile methodologies and version control.",
  },
];

export const clients: Client[] = [
  { id: "1", name: "Google", logo: "", industry: "Technology" },
  { id: "2", name: "Amazon", logo: "", industry: "E-commerce" },
  { id: "3", name: "Microsoft", logo: "", industry: "Technology" },
  { id: "4", name: "OpenAI", logo: "", industry: "AI/ML" },
  { id: "5", name: "LogiSync", logo: "", industry: "Software" },
  { id: "6", name: "WebMetrics", logo: "", industry: "Analytics" },
];

export const certifications: Certification[] = [
  { id: "1", name: "AWS Certified Developer", issuer: "Amazon Web Services", date: "2023" },
  { id: "2", name: "Spring Boot Workshop", issuer: "Pivotal", date: "2022" },
  { id: "3", name: "React Advanced Course", issuer: "Meta", date: "2022" },
];

// Mock analytics data
export const skillActivityData = [
  { month: "Jan", Java: 80, React: 65, Angular: 40 },
  { month: "Feb", Java: 85, React: 70, Angular: 45 },
  { month: "Mar", Java: 82, React: 75, Angular: 50 },
  { month: "Apr", Java: 90, React: 78, Angular: 48 },
  { month: "May", Java: 88, React: 82, Angular: 52 },
  { month: "Jun", Java: 92, React: 85, Angular: 55 },
];

export const apiUsageData = [
  { name: "GET /projects", requests: 3006, percentage: 25.6 },
  { name: "GET /skills", requests: 2500, percentage: 21.3 },
  { name: "POST /auth/login", requests: 1824, percentage: 15.5 },
  { name: "GET /clients", requests: 1500, percentage: 12.8 },
  { name: "GET /stats", requests: 1200, percentage: 10.2 },
];

export const skillUsageByProject = [
  { project: "Portfolio Management", skills: 16 },
  { project: "Client Collaboration", skills: 14 },
  { project: "Finance Tracker", skills: 15 },
  { project: "E-commerce", skills: 12 },
];
