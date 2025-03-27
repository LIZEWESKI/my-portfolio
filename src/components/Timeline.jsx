import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { timelineItems } from "../data/timelineItems"
export function Timeline() {
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
    <section className="py-6" id="timeline">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">My Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The path I've taken to become a full-stack developer.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-[2px] bg-primary/15" />

          <div className="relative">
            {timelineItems.map((item, index) => {

              return (
                <div key={index} className="mb-32 relative">
                  {isMobile && <div className="text-sm text-muted-foreground mb-2 text-center">{item.period}</div>}

                  {!isMobile && (
                    <div
                      className={`absolute top-[5px] ${
                        item.side === "left" ? "left-[calc(50%+32px)]" : "right-[calc(50%+32px)]"
                      } text-sm text-muted-foreground whitespace-nowrap`}
                    >
                      {item.period}
                    </div>
                  )}

                  <div className="absolute left-1/2 transform -translate-x-1/2 top-6 z-10">
                    <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className={`
                      ${
                        isMobile
                          ? "w-full mx-auto mt-16"
                          : item.side === "left"
                            ? "mr-auto pr-8 md:pr-16 text-right w-[calc(50%-20px)]"
                            : "ml-auto pl-8 md:pl-16 w-[calc(50%-20px)]"
                      }
                    `}
                  >
                    <div className="bg-card border border-border/50 rounded-lg p-6 hover:border-primary/30 transition-colors">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

