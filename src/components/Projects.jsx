import { motion } from "framer-motion"
import { Github, ExternalLink, Star} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import RickNdMortyMultiverse from "../assets/multiverse.png"
import NoirMockup from "../assets/NoirMockup.png"

export function Projects() {
  const featuredProject = {
    id: 4,
    title: "Noir",
    description:
      "A stylish and up-to-date hotel booking system that lets users log in, browse rooms, manage reservations, and process payments safely. Includes an admin dashboard for managing rooms, reservations, and users. This full-stack project shows that I can make full applications that are ready for production.",
    image: NoirMockup,
    technologies: ["Laravel", "Inertia.js", "React", "Tailwind CSS", "MySQL", "PayPal API"],
    demoLink: "https://noir.lizeweski.me",
    codeLink: "https://github.com/LIZEWESKI/noir",
    featured: true,
    type: "fullstack",
    isFeatured: true,
  }

  const growthProjects = [
    {
      title: "Rick and Morty Multiverse Cards",
      description:
        "A React application exhibit characters from the Rick and Morty universe. This is the redesigned version using modern UI libraries for better UX and developer workflow.",
      image: RickNdMortyMultiverse,
      technologies: ["React", "React Router", "Tailwind CSS", "shadcn/ui", "Framer Motion", "React Query"],
      demoLink: "https://multiverse.lizeweski.me/",
      codeLink: "https://github.com/LIZEWESKI/Rick-nd-Morty",
      type: "frontend",
      growthStage: 3,
    },
  ]

  return (
    <section id="projects" className="py-8 relative overflow-hidden">
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

        <div className="space-y-6">
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
                  <Badge className="bg-noir text-black font-semibold shadow-lg">
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
                  <Badge variant="outline" className="border-noir/50 text-noir mb-3">
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
                        className="bg-noir/10 text-noir border border-noir/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button asChild className="bg-noir hover:bg-noir text-black">
                    <a href={featuredProject.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-noir/30 hover:border-noir bg-transparent"
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
                    <Badge variant="outline" className="border-primary/50 text-primary mb-3">
                      Front-End Project
                    </Badge>
                      <h4 className="text-2xl lg:text-3xl font-bold mb-3">{project.title}</h4>
                      <p className="text-muted-foreground text-base mb-6 leading-relaxed">{project.description}</p>

                      <div className="mb-8">
                        <p className="text-sm font-semibold text-muted-foreground mb-3">Technologies</p>
                        <div className="flex flex-wrap gap-2"> 
                          {project.technologies.map((tech, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
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
          className="mt-6 pt-2 border-t border-border/40 text-center"
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
