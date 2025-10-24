import { motion } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { skills } from "../data/skills"
export function Skills() {
  return (
    <section id="skills">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Tools & Technologies</h2>
          <p className="text-muted-foreground text-lg">
            A collection of technologies and tools I've mastered through hands-on experience and continuous learning.
          </p>
        </motion.div>
        <div className="max-w-5xl mx-auto bg-background">

          <div className="grid md:grid-cols-3 grid-cols-2 border border-border">
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

