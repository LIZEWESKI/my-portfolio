"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { skills } from "../data/skills"
// Since you didn't provide the skills data, I'll create a placeholder
// You can replace this with your actual skills data import
// const skills = [
//   { name: "JavaScript", icon: "JS" },
//   { name: "React", icon: "⚛️" },
//   { name: "React Router", icon: "🔀" },
//   { name: "Tailwind", icon: "🌬️" },
//   { name: "Git", icon: "🔄" },
//   { name: "PHP", icon: "🐘" },
//   { name: "MySQL", icon: "🗄️" },
//   { name: "Laravel", icon: "🔺" },
//   { name: "InertiaJs", icon: "⚡" },
// ]

export function Skills() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-background">
          <div className="grid md:grid-cols-3 grid-cols-2 border border-border">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`flex items-center justify-center h-40 border border-border col-span-2 md:col-span-3`}
            >
              <h2 className="text-4xl font-bold text-[#ededed] px-4 text-center">
                Technologies and tools I've mastered
              </h2>
            </motion.div>

            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center justify-center h-40 border border-border cursor-pointer hover:bg-card"
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="cursor-pointer">{skill.icon}</TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

