import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Youtube, Code, BookOpen, Database, Twitter } from "lucide-react"
import Simon from "../assets/Simon.jpg";
import BobZiroll from "../assets/BobZiroll.jpg";
import JeffreyWay from "../assets/JeffreyWay.jpg";
export function Mentors() {
  const [activeMentor, setActiveMentor] = useState(null)

  const mentors = [
    {
      id: "simon",
      name: "Simon",
      organization: "SuperSimpleDev",
      image: Simon,
      expertise: ["JavaScript", "Algorithms", "Problem-Solving", "Git"],
      description:
        "Simon's methodical approach to teaching JavaScript fundamentals and problem-solving techniques laid the groundwork for my development journey. His emphasis on clean code and version control practices continues to influence my work today.",
      icon: <Code className="w-5 h-5" />,
      color: "green",
      links: [
        { icon: <Youtube className="w-4 h-4" />, url: "https://www.youtube.com/c/supersimpledev", label: "YouTube" },
        { icon: <Github className="w-4 h-4" />, url: "https://github.com/SuperSimpleDev", label: "GitHub" },
        { icon: <Twitter className="w-4 h-4" />, url: "https://x.com/SuperSimpleDev", label: "X" },
        { icon: <ExternalLink className="w-4 h-4" />, url: "https://supersimple.dev/", label: "Website" },
    ],
    },
    {
        id: "bob",
        name: "Bob Ziroll",
        organization: "Scrimba",
        image: BobZiroll,
        expertise: ["React", "React Router", "Frontend Development"],
        description:
            "Bob's engaging teaching style made learning React an enjoyable experience. His project-based approach helped me understand component architecture and state management in a practical context, accelerating my growth as a frontend developer.",
        icon: <BookOpen className="w-5 h-5" />,
        color: "purple",
        links: [
            { icon: <Twitter className="w-4 h-4" />, url: "https://x.com/bobziroll", label: "X" },
            { icon: <ExternalLink className="w-4 h-4" />, url: "https://scrimba.com/home", label: "Website" },
        ],
    },
    {
      id: "jeffrey",
      name: "Jeffrey Way",
      organization: "Laracasts",
      image: JeffreyWay,
      expertise: ["Laravel", "PHP", "MySQL", "Inertia.js"],
      description:
        "Jeffrey's comprehensive approach to teaching backend development transformed my understanding of server-side programming. His Laravel tutorials and emphasis on testing and best practices have been instrumental in my growth as a full-stack developer.",
      icon: <Database className="w-5 h-5" />,
      color: "red",
      links: [
        { icon: <Twitter className="w-4 h-4" />, url: "https://x.com/jeffrey_way", label: "Twitter" },
        { icon: <ExternalLink className="w-4 h-4" />, url: "https://laracasts.com/", label: "Laracasts" },
      ],
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">My Mentors</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The guides who shaped my development journey and inspired my growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setActiveMentor(mentor.id)}
              onMouseLeave={() => setActiveMentor(null)}
            >
              <div className={`relative overflow-hidden rounded-xl border border-border/40 bg-card  transition-all duration-300 h-full flex flex-col ${
                      mentor.color === "green"
                        ? "hover:border-green-500/20"
                        : mentor.color === "purple"
                          ? "hover:border-purple-500/20"
                          : "hover:border-red-500/20"
                    }`}>
                <div className="p-6 flex flex-col items-center text-center border-b border-border/40">
                  <div className="w-24 h-24 mb-4 rounded-full border border-border overflow-hidden">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105`}
                    />
                  </div>

                  <div className="mb-3">
                    <h3 className="text-xl font-bold">{mentor.name}</h3>
                    <p className="text-sm text-muted-foreground">{mentor.organization}</p>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mb-2
                    ${
                      mentor.color === "green"
                        ? "bg-green-500/20 text-green-300 border border-green-500/30"
                        : mentor.color === "purple"
                          ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                          : "bg-red-500/20 text-red-300 border border-red-500/30"
                    }`}
                  >
                    {mentor.icon}
                  </div>

                  <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {mentor.expertise.slice(0, 2).map((skill, i) => (
                      <span
                        key={i}
                        className={`px-2 py-1 text-xs font-medium rounded-full 
                        ${
                          mentor.color === "green"
                            ? "bg-green-500/20 text-green-300 border border-green-500/30"
                            : mentor.color === "purple"
                              ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                              : "bg-red-500/20 text-red-300 border border-red-500/30"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 flex-grow">
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {mentor.expertise.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm">{mentor.description}</p>
                  </div>
                </div>

                {/* Mentor Links */}
                <div className="p-4 border-t border-border/40 mt-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {mentor.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label={link.label}
                        >
                          {link.icon}
                        </a>
                      ))}
                    </div>
                    <span
                      className={`text-xs font-medium 
                      ${
                        mentor.color === "green"
                          ? "text-green-400"
                          : mentor.color === "purple"
                            ? "text-purple-400"
                            : "text-red-400"
                      }`}
                    >
                      Mentor
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <blockquote className="relative p-8 bg-card/50 border border-border/40 rounded-xl">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-background p-2">
              <span className="text-4xl text-primary">"</span>
            </div>
            <blockquote className="mt-6 border-l-2 pl-6 text-lg italic text-muted-foreground mb-4">
                If I have seen further, it is by standing on the shoulders of giants. The knowledge and guidance from
                these mentors has been instrumental in my development journey.
            </blockquote>
            <footer className="text-sm text-primary">— Inspired by Sir Isaac Newton</footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}

