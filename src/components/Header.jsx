import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function Header() {
  const [activeTab, setActiveTab] = useState("about")
  const [isScrolled, setIsScrolled] = useState(false)

  const tabs = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
              onClick={() => setActiveTab(tab.id)}
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

