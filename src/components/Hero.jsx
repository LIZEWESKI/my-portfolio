import { motion } from "framer-motion"
import Zarbadar from "../assets/Zarbadar.jpeg"
export function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center pt-20 mb-10" id="hero">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-48 h-48 mx-auto rounded-full border border-border overflow-hidden">
            <img src={Zarbadar} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-center"
        >
          Badr Noukh <small className="text-sm text-muted-foreground">(Lizeweski)</small>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl font-medium text-primary mb-4"
        >
          Full-Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          Passionate about building elegant, performant web applications with modern technologies. Specializing in
          backend and full-stack development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <a
            href="https://github.com/LIZEWESKI/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md bg-card border border-border hover:bg-card/80 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/badr-noukh-lizeweski/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  )
}

