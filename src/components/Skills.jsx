import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { skills } from "../data/skills"

export function Skills() {
  const containerRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [containerWidth, setContainerWidth] = useState(0)
  const [contentWidth, setContentWidth] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth)
      setContentWidth(containerRef.current.scrollWidth)
    }

    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
        setContentWidth(containerRef.current.scrollWidth)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const distance = contentWidth - containerWidth

  return (
    <section className="px-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold text-center">My Tech Stack</h2>
        <p className="text-muted-foreground text-center mt-4 max-w-2xl mx-auto">
          Technologies and tools I've mastered throughout my development journey.
        </p>
      </div>

      <div 
        ref={containerRef} 
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left gradient shade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
        
        {/* Right gradient shade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
        
        <motion.div 
          className="flex items-center py-8 px-16"
          animate={{
            x: isHovered ? 0 : [-distance, 0]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }
          }}
        >
          {/* First set of skills */}
          {skills.map((skill, index) => (
            <div 
              key={`skill-${index}`} 
              className="flex flex-col items-center justify-center mx-8"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-3">
                {skill.icon}
              </div>
            </div>
          ))}
          
          {/* Duplicate set for seamless looping */}
          {skills.map((skill, index) => (
            <div 
              key={`skill-duplicate-${index}`} 
              className="flex flex-col items-center justify-center mx-8"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-3">
                {skill.icon}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
