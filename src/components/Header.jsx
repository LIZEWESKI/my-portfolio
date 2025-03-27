import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function Header() {
  const [activeTab, setActiveTab] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)
  const tabs = [
    { id: "hero", label: "About" },
    { id: "timeline", label: "Journey" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    const handleScrollForActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3
      // Get all sections
      const sections = tabs.map((tab) => {
        const element = document.getElementById(tab.id)
        if (!element) return { id: tab.id, top: 0, bottom: 0 }

        const rect = element.getBoundingClientRect()
        return {
          id: tab.id,
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
        }
      })

      // Find the current active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (scrollPosition >= section.top) {
          setActiveTab(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("scroll", handleScrollForActiveSection)

    // Initial check for active section
    handleScrollForActiveSection()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("scroll", handleScrollForActiveSection)
    }
  }, [tabs])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      })
      setActiveTab(sectionId)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-center">
        <nav className="flex space-x-1 bg-card/30 backdrop-blur-sm px-2 py-1 rounded-full border border-border/50">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`relative px-6 py-2 text-sm rounded-full transition-colors ${
                activeTab === tab.id ? "text-foreground" : "text-muted-foreground hover:text-foreground/80"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-card rounded-full"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

