import { Code, FileCode, Database, Cloud } from "lucide-react"
export const timelineItems = [
    {
      period: "Apr 2023",
      title: "Foundations of HTML and CSS",
      description: "Learned the fundamentals of HTML, CSS, and responsive design.",
      icon: <FileCode className="w-5 h-5" />,
      side: "left",
    },
    {
      period: "May 2023 – Jun 2024",
      title: "Mastery of JavaScript",
      description: "Mastered Git version control, algorithms, problem-solving strategies, and JavaScript ES6+.",
      icon: <Code className="w-5 h-5" />,
      side: "right",
    },
    {
      period: "Aug 2024 – Nov 2024",
      title: "Frontend Development",
      description:
      "Learned ShadCN UI, Tailwind CSS, React, and React Router. Centered on state management, routing, component-based architecture, and contemporary styling techniques.",
      icon: <FileCode className="w-5 h-5" />,
      side: "left",
    },
    {
      period: "Nov 2024 – Feb 2025",
      title: "Backend Development",
      description:
        "Learned PHP, MySQL, and Laravel (with Inertia.js). Focused on backend development, authentication systems, database management, and full-stack concepts.",
      icon: <Database className="w-5 h-5" />,
      side: "right",
    },
    {
      period: "Mar 2025 – Aug 2025",
      title: "Full-Stack Projects",
      description:
        "Building full-stack projects that integrate backend and frontend technologies. Developing entire web applications, from conception to implementation.",
      icon: <Code className="w-5 h-5" />,
      side: "left",
    },
    {
      period: "Aug 2025 – Present",
      title: "DevOps & Cloud Deployment",
      description:
        "Mastered containerization with Docker, deployed full-stack applications on Heroku, implemented CI/CD pipelines for automated testing and deployment. Configured cloud storage solutions using S3 with DigitalOcean and integrated Brevo for transactional email services.",
      icon: <Cloud className="w-5 h-5" />,
      side: "right",
    },
  ]