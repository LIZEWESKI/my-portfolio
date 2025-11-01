import { useState } from "react"
import { motion } from "framer-motion"
import { FileDown, Github, Linkedin, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const [isHovering, setIsHovering] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const handleDownloadCV = () => {
    setIsDownloading(true)

    const cvPath = "/badr-cv-resume.pdf"
    const link = document.createElement("a")
    link.href = cvPath
    link.download = "BadrNoukh-CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setTimeout(() => {
      setIsDownloading(false)
    }, 1000)
  }

  return (
    <footer className="py-12 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.button
            onClick={scrollToTop}
            className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary/30 transition-colors"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>

          <div className="max-w-4xl w-full mx-auto bg-card/30 backdrop-blur-sm px-8 py-6 rounded-2xl border border-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="font-bold text-xl mb-2">Badr Noukh <small className="text-sm text-muted-foreground">(Lizeweski)</small></div>
              <p className="text-sm text-muted-foreground">© {currentYear} All rights reserved</p>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Button
                className="relative overflow-hidden group flex items-center gap-2 cursor-pointer"
                size="lg"
                onClick={handleDownloadCV}
                disabled={isDownloading}
              >
                {isDownloading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Downloading...
                  </>
                ) : (
                  <>
                    <FileDown size={18} />
                    <span>Download CV</span>
                  </>
                )}

                {isHovering && !isDownloading && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full bg-primary-foreground"
                        initial={{
                          opacity: 0,
                          x: 0,
                          y: 0,
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          x: Math.random() > 0.5 ? [0, -10 - Math.random() * 10] : [0, 10 + Math.random() * 10],
                          y: [-5, -20 - Math.random() * 10],
                        }}
                        transition={{
                          duration: 0.8 + Math.random() * 0.5,
                          ease: "easeOut",
                          delay: Math.random() * 0.2,
                        }}
                        style={{
                          left: `${10 + Math.random() * 80}%`,
                          top: "50%",
                        }}
                      />
                    ))}
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-6">
            <a
              href="https://github.com/LIZEWESKI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/badr-lizeweski"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <code className="mt-6 text-xs text-muted-foreground">I have no coffee, and I must code.</code>
        </div>
      </div>
    </footer>
  )
}

