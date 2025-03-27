import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink, Play, Pause, ChevronRight, X, ArrowRight } from "lucide-react"
import RickNdMorty from "../assets/rick-nd-morty.png"
import RickNdMortyOriginal from "../assets/rick-nd-morty-original.png"
import Noir from "../assets/noir.png"
import NoirVideo from "../assets/noir.mp4"
export function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const [videoModal, setVideoModal] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: "Rick and Morty Multiverse Cards (Redesigned)",
      description:
        "A React application exhibit characters from the Rick and Morty universe. This is the redesigned version using modern UI libraries for bettered user experience and developer workflow.",
      image: RickNdMorty,
      technologies: ["React", "React Router", "Tailwind CSS", "shadcn/ui", "Framer Motion", "React Query"],
      demoLink: "https://multiversecards.vercel.app/",
      codeLink: "https://github.com/LIZEWESKI/Rick-nd-Morty",
      featured: true,
      type: "frontend",
      hasOriginal: true,
    },
    {
      id: 2,
      title: "Rick and Morty Explorer (Original)",
      description:
        "The original version of my Rick and Morty character explorer built with React and pure CSS. This project express my foundational skills in React development and custom CSS styling without relying on UI libraries.",
      image: RickNdMortyOriginal,
      technologies: ["React", "React Router", "Pure CSS", "Context API"],
      demoLink: "https://darth-ram.netlify.app/",
      codeLink: "https://github.com/LIZEWESKI/Rick-nd-Morty",
      featured: false,
      type: "frontend",
      isOriginal: true,
    },
    {
      id: 3,
      title: "Noir Hotel Booking System",
      description:
        "A modern, elegant hotel booking system with user authentication, room browsing, reservation management, and secure payment processing. Features an admin dashboard to manage rooms, reservations, and users.",
      image: Noir,
      technologies: ["Laravel", "Inertia.js", "React", "Tailwind CSS", "MySQL", "PayPal API"],
      videoDemo: true,
      codeLink: "https://github.com/LIZEWESKI/noir",
      featured: true,
      type: "fullstack",
    },
  ]

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const openVideoModal = () => {
    setVideoModal(true)
    // When modal opens, we'll auto-play the video
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }, 300)
  }

  const closeVideoModal = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
    setVideoModal(false)
  }

  return (
    <section className="py-20" id="projects">
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

        <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
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
              
              <div className="absolute top-4 left-4 z-20">
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${
                    project.type === "frontend"
                      ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                      : "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                  }`}
                >
                  {project.type === "frontend" ? "Frontend" : "Full Stack"}
                </span>

                {project.isOriginal && (
                  <span className="ml-2 px-3 py-1 text-xs font-medium rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Original Version
                  </span>
                )}

                {project.hasOriginal && (
                  <span className="ml-2 px-3 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-300 border border-green-500/30">
                    Redesigned
                  </span>
                )}
              </div>

              
              {project.isOriginal && (
                <div className="absolute -top-12 left-8 h-12 w-0.5 bg-primary/50 hidden md:block"></div>
              )}

              
              {project.isOriginal && (
                <div className="absolute -top-6 left-8 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                  <div className="bg-card border border-primary/50 rounded-full p-1">
                    <ArrowRight size={16} className="text-primary" />
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-0">
                
                <div className="relative aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent md:bg-gradient-to-t md:from-black/80 md:via-black/60 md:to-transparent" />

                  
                  {project.videoDemo && (
                    <button
                      onClick={openVideoModal}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-primary/80 text-primary-foreground hover:bg-primary transition-colors z-10 group"
                    >
                      <Play size={24} className="ml-1" />
                      <span className="absolute inset-0 rounded-full border-4 border-primary/50 animate-ping opacity-75"></span>
                    </button>
                  )}
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

                    {project.videoDemo && (
                      <button
                        onClick={openVideoModal}
                        className="flex items-center gap-1 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                      >
                        <Play size={16} />
                        <span>Watch Demo</span>
                      </button>
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

              {project.hasOriginal && (
                <div className="px-6 py-3 bg-card border-t border-border/40 text-sm text-muted-foreground">
                  <span className="font-medium text-primary">Evolution Note:</span> This is a redesigned version of my
                  original Rick and Morty project, showcasing my growth in using modern UI libraries and improved
                  architecture.
                </div>
              )}

              {project.isOriginal && (
                <div className="px-6 py-3 bg-card border-t border-border/40 text-sm text-muted-foreground">
                  <span className="font-medium text-primary">Evolution Note:</span> This original version demonstrates
                  my foundational skills with React and custom CSS, before adopting modern UI libraries.
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/LIZEWESKI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card hover:bg-card/80 border border-border hover:border-primary/30 transition-colors"
          >
            <Github size={18} />
            <span>View More on GitHub</span>
            <ChevronRight size={16} />
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {videoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-card rounded-xl overflow-hidden"
            >
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
              >
                <X size={18} />
              </button>

              <div className="aspect-video relative">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src={NoirVideo}
                  poster={Noir}
                  controls={false}
                  onEnded={() => setIsPlaying(false)}
                >
                  Your browser does not support the video tag.
                </video>

                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={toggleVideoPlay}
                    className={`w-16 h-16 flex items-center justify-center rounded-full bg-primary/80 text-primary-foreground hover:bg-primary transition-colors ${isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"}`}
                  >
                    {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
                  </button>
                </div>

                
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center justify-between">
                    <button onClick={toggleVideoPlay} className="flex items-center gap-2 text-white">
                      {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                      <span>{isPlaying ? "Pause" : "Play"}</span>
                    </button>

                    <div className="text-white/80 text-sm">Noir Hotel Booking System Demo</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

