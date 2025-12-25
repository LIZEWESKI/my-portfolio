import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, ArrowRight } from "lucide-react"
import Rick from "../assets/rick.jpg"

export function Hero() {

  return (
    <section
      className="min-h-[90vh] flex flex-col justify-center items-center pt-20 mb-12 relative overflow-hidden"
      id="hero"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-20 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 w-fit"
            >
              <Badge variant="outline" className="border-primary/30 text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Available for opportunities
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2">Badr Noukh</h1>
              <p className="text-lg text-muted-foreground mb-4">
                <span className="text-xs text-primary">@Lizeweski</span>
              </p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl md:text-3xl font-medium text-primary mb-6"
            >
              Full-Stack Web Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground text-base md:text-lg max-w-xl mb-8 leading-relaxed"
            >
              Just a stutter who lacks communication skills but found comfort in coding - diving deep into my thoughts to find ways to solve people's problems through building websites :)
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild className="group">
                <a href="https://github.com/LIZEWESKI/" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button asChild variant="outline">
                <a href="https://www.linkedin.com/in/badr-aurelius/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-border/40 flex gap-8"
            >
              <div>
                <p className="text-2xl font-bold text-primary">2+</p>
                <p className="text-sm text-muted-foreground">Years Learning</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">Projects Built</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">3</p>
                <p className="text-sm text-muted-foreground">Languages</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:flex items-center justify-center relative h-[60vh]"
          >
            <div className="relative w-80 h-80">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-primary/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-primary/10"
              />

              <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl">
                <img src={Rick} alt="Badr Noukh" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
