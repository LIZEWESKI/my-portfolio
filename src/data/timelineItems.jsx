import { Code, FileCode, Database } from "lucide-react"
export const timelineItems = [
    {
      period: "Apr 2023",
      title: "HTML & CSS Foundations",
      description: "Learned HTML & CSS basics and responsive design principles.",
      icon: <FileCode className="w-5 h-5" />,
      side: "left",
    },
    {
      period: "May 2023 – Jun 2024",
      title: "JavaScript Mastery",
      description: "Mastered JavaScript ES6+, algorithms, problem-solving techniques, and Git version control.",
      icon: <Code className="w-5 h-5" />,
      side: "right",
    },
    {
      period: "Aug 2024 – Nov 2024",
      title: "Frontend Development",
      description:
        "Learned React, React Router, Tailwind CSS, and ShadCN UI. Focused on component-based architecture, state management, routing, and modern styling approaches.",
      icon: <FileCode className="w-5 h-5" />,
      side: "left",
    },
    {
      period: "Nov 2024 – Feb 2025",
      title: "Backend Development",
      description:
        "Learned PHP, MySQL, and Laravel with Inertia.js. Focused on backend development, authentication systems, database management, and full-stack concepts.",
      icon: <Database className="w-5 h-5" />,
      side: "right",
    },
    {
      period: "Mar 2025 – Present",
      title: "Full-Stack Projects",
      description:
        "Building full-stack projects that combine frontend and backend technologies. Creating complete web applications from concept to deployment.",
      icon: <Code className="w-5 h-5" />,
      side: "left",
    },
  ]