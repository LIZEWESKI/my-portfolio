import { motion } from "framer-motion"
import { Github, ExternalLink, Star, TrendingUp, Code2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import CarthsNoah from "../assets/carths-noah.png"
import RickNdMortyMultiverse from "../assets/multiverse.png"
import RickNdMortyCards from "../assets/rick-nd-morty-cards.png"
import Noir from "../assets/noir.png"

export function Projects() {
  const featuredProject = {
    id: 4,
    title: "Noir",
    description:
      "A stylish and up-to-date hotel booking system that lets users log in, browse rooms, manage reservations, and process payments safely. Includes an admin dashboard for managing rooms, reservations, and users. This full-stack project shows that I can make full applications that are ready for production.",
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
        "This is the first Rick and Morty character explorer I made using only HTML, JavaScript, and CSS. This basic project shows what I knew about web development and DOM manipulation before I learned about any frameworks or libraries.",
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
        "This is the second version of my Rick and Morty explorer that was built using React and React Router. This version shows how I've improved my use of client-side routing and component-based architecture while preserving unique styling using only CSS.",
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
        "The Rick and Morty universe. This is the redesigned version using modern UI libraries for better UX and developer workflow.",
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
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground text-lg">
            Showcasing my skills through real-world applications, from foundational experiments to production-ready
            systems.
          </p>
        </motion.div>

        <div className="space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid lg:grid-cols-2 gap-0 lg:gap-8 items-stretch">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative overflow-hidden rounded-xl lg:rounded-2xl h-96 lg:h-auto order-2 lg:order-1"
              >
                <img
                  src={featuredProject.image || "/placeholder.svg"}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute top-6 right-6 z-10"
                >
                  <Badge className="bg-yellow-500 text-black font-semibold shadow-lg">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Featured
                  </Badge>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col justify-center order-1 lg:order-2 lg:pl-8"
              >
                <div className="mb-6">
                  <Badge variant="outline" className="border-yellow-500/50 text-yellow-300 mb-3">
                    Full-Stack Project
                  </Badge>
                  <h3 className="text-4xl lg:text-5xl font-bold mb-4">{featuredProject.title}</h3>
                </div>

                <p className="text-muted-foreground text-lg mb-6 leading-relaxed max-w-lg">
                  {featuredProject.description}
                </p>

                <div className="mb-8">
                  <p className="text-sm font-semibold text-muted-foreground mb-3">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-yellow-500/10 text-yellow-300 border border-yellow-500/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button asChild className="bg-yellow-500 hover:bg-yellow-400 text-black">
                    <a href={featuredProject.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-yellow-500/30 hover:border-yellow-400 bg-transparent"
                  >
                    <a href={featuredProject.codeLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12 max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-5 h-5 text-primary" />
                <Badge variant="outline">Growth Journey</Badge>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">Developer Evolution</h3>
              <p className="text-muted-foreground">
                Three iterations of the same project, showcasing my progression from vanilla JavaScript to modern
                frameworks.
              </p>
            </div>

            <div className="space-y-16">
              {growthProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-0 lg:gap-8 items-stretch ${
                      index % 2 === 0 ? "lg:auto-cols-auto" : "lg:auto-cols-auto"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                      className={`relative overflow-hidden rounded-lg h-80 lg:h-96 ${
                        index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                      <motion.div
                        animate={{ rotate: [0, 5, 0] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                        className="absolute top-4 left-4"
                      >
                        <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-lg font-bold text-primary shadow-lg">
                          {project.growthStage}
                        </div>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                      className={`flex flex-col justify-center py-6 lg:py-0 ${
                        index % 2 === 1 ? "lg:order-1 lg:pr-8" : "lg:order-2 lg:pl-8"
                      }`}
                    >
                      <div className="mb-4 flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-muted-foreground">
                          {project.growthStage === 1
                            ? "Stage 1: Foundation"
                            : project.growthStage === 2
                              ? "Stage 2: React Era"
                              : "Stage 3: Modern Tooling"}
                        </span>
                      </div>

                      <h4 className="text-2xl lg:text-3xl font-bold mb-3">{project.title}</h4>
                      <p className="text-muted-foreground text-base mb-6 leading-relaxed">{project.description}</p>

                      <div className="mb-6 flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Button asChild size="sm">
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                        <Button asChild size="sm" variant="outline">
                          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/10"
                  >
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-primary">
                        {project.growthStage === 1
                          ? "Pure Web Fundamentals"
                          : project.growthStage === 2
                            ? "Component Architecture"
                            : "Modern Development"}
                      </span>
                      {project.growthStage === 1 &&
                        ": Built with vanilla HTML, JavaScript, and CSS to understand DOM manipulation and core web concepts."}
                      {project.growthStage === 2 &&
                        ": Introduced React and routing for better code organization and component reusability."}
                      {project.growthStage === 3 &&
                        ": Advanced with modern libraries, animation frameworks, and state management solutions."}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-12 border-t border-border/40 text-center"
        >
          <p className="text-muted-foreground mb-6">Want to see more of my work?</p>
          <Button asChild size="lg" variant="outline">
            <a href="https://github.com/LIZEWESKI" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View More on GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
