import { motion } from "framer-motion"
import { Github, ExternalLink, TrendingUp } from "lucide-react"
import CarthsNoah from "../assets/carths-noah.png"
import RickNdMortyMultiverse from "../assets/multiverse.png"
import RickNdMortyCards from "../assets/rick-nd-morty-cards.png"
import Noir from "../assets/noir.png"

export function Projects() {

  const featuredProject = {
    id: 4,
    title: "Noir",
    description:
      "A modern, elegant hotel booking system with user authentication, room browsing, reservation management, and secure payment processing. Features an admin dashboard to manage rooms, reservations, and users. This full-stack project showcases my ability to build complete, production-ready applications.",
    image: Noir,
    technologies: ["Laravel", "Inertia.js", "React", "Tailwind CSS", "MySQL", "PayPal API"],
    demoLink: "https://noir.lizeweski.me",
    codeLink: "https://github.com/LIZEWESKI/noir",
    featured: true,
    type: "fullstack",
    isFeatured: true,
  }

  const growthProjects = [
    {
      id: 1,
      title: "Carths Noah",
      description:
        "My very first Rick and Morty character explorer built with vanilla HTML, JavaScript, and CSS. This foundational project showcases my initial understanding of web development and DOM manipulation without any frameworks or libraries.",
      image: CarthsNoah,
      technologies: ["HTML", "Vanilla JavaScript", "CSS", "Rick & Morty API"],
      demoLink: "https://darthnoah.lizeweski.me/",
      codeLink: "https://github.com/LIZEWESKI/darthsnoah",
      featured: false,
      type: "frontend",
      isOriginal: true,
      growthStage: 1,
    },
    {
      id: 2,
      title: "Rick and Morty Cards",
      description:
        "The second iteration of my Rick and Morty explorer built with React and React Router. This version demonstrates my growth in using component-based architecture and client-side routing while maintaining custom styling with pure CSS.",
      image: RickNdMortyCards,
      technologies: ["React", "React Router", "Pure CSS", "Context API"],
      demoLink: "https://darth-ram.netlify.app/",
      codeLink: "https://github.com/LIZEWESKI/Rick-nd-Morty/tree/main",
      featured: false,
      type: "frontend",
      isOriginal: true,
      growthStage: 2,
    },
    {
      id: 3,
      title: "Rick and Morty Multiverse Cards",
      description:
        "A feature-rich React application showcasing characters from the Rick and Morty universe. This is the redesigned version using modern UI libraries for enhanced user experience and developer workflow.",
      image: RickNdMortyMultiverse,
      technologies: ["React", "React Router", "Tailwind CSS", "shadcn/ui", "Framer Motion", "React Query"],
      demoLink: "https://multiversecards.vercel.app/",
      codeLink: "https://github.com/LIZEWESKI/Rick-nd-Morty",
      featured: true,
      type: "frontend",
      hasOriginal: true,
      growthStage: 3,
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my skills through real-world applications
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-16">
          <div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative overflow-hidden rounded-xl border-2 border-yellow-500/50 bg-card hover:border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-yellow-500/20 hover:shadow-2xl"
              onMouseEnter={() => setActiveProject(featuredProject.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="absolute top-4 left-4 z-20 flex gap-2">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/50 tracking-wider">
                  Featured
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Full Stack
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent md:bg-gradient-to-t md:from-black/80 md:via-black/60 md:to-transparent" />
                </div>

                <div className="relative p-6 md:p-8 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{featuredProject.title}</h3>

                  <p className="text-muted-foreground mb-4 flex-grow text-lg">{featuredProject.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full bg-yellow-500/10 text-yellow-200 border border-yellow-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={featuredProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-4 py-2 rounded-md bg-yellow-500 text-black hover:bg-yellow-400 transition-colors font-semibold"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>

                    <a
                      href={featuredProject.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-4 py-2 rounded-md bg-card border border-yellow-500/50 hover:border-yellow-400 hover:bg-card/80 transition-colors"
                    >
                      <Github size={16} />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Growth Journey</h3>
              </div>
              <p className="text-muted-foreground">
                Watch my progression as a developer through three iterations of the same project, showcasing my evolving
                skills and understanding of modern web development.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-12">
              {growthProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative overflow-hidden rounded-xl border border-border/40 bg-card hover:border-primary/20 transition-all duration-300 ${
                    project.isOriginal ? "md:ml-12" : ""
                  }`}
                  onMouseEnter={() => setActiveProject(project.id)}
                  onMouseLeave={() => setActiveProject(null)}
                >
                  <div className="absolute top-4 left-4 z-20 flex gap-2 items-center">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 border border-primary/30 text-xs font-bold text-primary">
                      {project.growthStage}
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        project.type === "frontend"
                          ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                          : "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                      }`}
                    >
                      {project.type === "frontend" ? "Frontend" : "Full Stack"}
                    </span>
                  </div>

                  {project.isOriginal && (
                    <div className="absolute -top-12 left-8 h-12 w-0.5 bg-primary/50 hidden md:block"></div>
                  )}
                  {project.isOriginal && (
                    <div className="absolute -top-6 left-8 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                      <div className="bg-card border border-primary/50 rounded-full p-1">
                        <span className="text-primary">→</span>
                      </div>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative aspect-video md:aspect-auto overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent md:bg-gradient-to-t md:from-black/80 md:via-black/60 md:to-transparent" />
                    </div>

                    <div className="relative p-6 md:p-8 flex flex-col">
                      <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>

                      <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs rounded-full bg-primary/10 border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-4">
                        {project.demoLink && (
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                          >
                            <ExternalLink size={16} />
                            <span>Live Demo</span>
                          </a>
                        )}

                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-4 py-2 rounded-md bg-card border border-border hover:bg-card/80 hover:border-primary/30 transition-colors"
                        >
                          <Github size={16} />
                          <span>View Code</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {project.growthStage === 1 && (
                    <div className="px-6 py-3 bg-card border-t border-border/40 text-sm text-muted-foreground">
                      <span className="font-medium text-primary">Stage 1 - Foundation:</span> Pure HTML, JavaScript, and
                      CSS without frameworks.
                    </div>
                  )}

                  {project.growthStage === 2 && (
                    <div className="px-6 py-3 bg-card border-t border-border/40 text-sm text-muted-foreground">
                      <span className="font-medium text-primary">Stage 2 - React Era:</span> Introduction of React and
                      React Router for component-based architecture.
                    </div>
                  )}

                  {project.growthStage === 3 && (
                    <div className="px-6 py-3 bg-card border-t border-border/40 text-sm text-muted-foreground">
                      <span className="font-medium text-primary">Stage 3 - Modern Tooling:</span> Advanced React with
                      Tailwind CSS, shadcn/ui, and other modern libraries.
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/LIZEWESKI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card hover:bg-card/80 border border-border hover:border-primary/30 transition-colors"
          >
            <Github size={18} />
            <span>View More on GitHub</span>
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
