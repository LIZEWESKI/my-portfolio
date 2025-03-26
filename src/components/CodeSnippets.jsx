import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code, Terminal, FileCode, Copy, Check, ChevronRight, ChevronDown } from "lucide-react"
import { snippets } from "../data/snippets"
import Prism from "prismjs"
import "prismjs/components/prism-markup-templating"
import "prismjs/plugins/line-numbers/prism-line-numbers"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import "prismjs/components/prism-css"
import "prismjs/components/prism-clike"
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-php"

export function CodeSnippets() {
  const [activeTab, setActiveTab] = useState("algorithm")
  const [activeLanguage, setActiveLanguage] = useState("javascript")
  const [copiedSnippet, setCopiedSnippet] = useState(null)

  const copyToClipboard = (code, snippetId) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedSnippet(snippetId)
      setTimeout(() => setCopiedSnippet(null), 2000)
    })
  }

  const tabs = [
    { id: "algorithm", label: "Algorithms", icon: <Terminal size={16} /> },
    { id: "dataStructure", label: "Data Structures", icon: <Code size={16} /> },
    { id: "utility", label: "Utility Functions", icon: <FileCode size={16} /> },
  ]

  const languages = [
    { id: "javascript", label: "JavaScript" },
    { id: "php", label: "PHP" },
  ]

  const activeSnippet = snippets[activeTab]

  useEffect(() => {
    // Apply syntax highlighting
    setTimeout(() => {
      Prism.highlightAll()
    }, 0)
  }, [activeLanguage, activeTab, activeSnippet])
  return (
    <section className="py-2">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Code Snippets</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card hover:bg-card/80 border border-border hover:border-primary/30"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-background border border-border rounded-lg overflow-hidden shadow-xl"
          >
            <div className="border-b border-border bg-card p-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{activeSnippet.title}</h3>
                  <p className="text-sm text-muted-foreground">{activeSnippet.description}</p>
                </div>

                <div className="flex items-center gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.id}
                      onClick={() => setActiveLanguage(lang.id)}
                      className={`px-3 py-1 text-sm rounded-md transition-colors duration-300 ${
                        activeLanguage === lang.id
                          ? "bg-primary/10 text-primary border"
                          : "bg-background border border-border"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {/* Code Content */}
            <div className="relative bg-gradient-to-t from-background to-transparent">
              <pre
                className={`p-4 text-sm font-mono line-numbers max-h-[400px] overflow-hidden`}
              >
                <code className={`language-${activeLanguage}`}>{activeSnippet[activeLanguage].trim()}</code>
              </pre>

              <button
                onClick={() => copyToClipboard(activeSnippet[activeLanguage], activeTab)}
                className="absolute top-4 right-4 p-2 cursor-pointer rounded-md bg-background hover:bg-background/20 border border-border transition-colors"
                aria-label="Copy code"
              >
                {copiedSnippet === activeTab ? (
                  <Check size={16} className="text-green-400" />
                ) : (
                  <Copy size={16} className="text-gray-300" />
                )}
              </button>
            </div>

            <div className="border-t border-border bg-card p-3 text-xs text-muted-foreground flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 rounded bg-background border border-border">
                  {activeLanguage === "javascript" ? "ES6+" : "PHP 8+"}
                </span>
                <span>
                  Time Complexity:{" "}
                  {activeTab === "algorithm"
                    ? "O(log n)"
                    : activeTab === "dataStructure"
                      ? "Varies by operation"
                      : "O(n)"}
                </span>
              </div>
              <div>
                <span className="text-primary">Efficiency focused</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            key={`${activeTab}-explanation`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mt-6 bg-background border border-border rounded-lg p-4"
          >
            <div className="flex items-start gap-3">
              <div className="bg-primary/20 p-2 rounded-md">
                <ChevronDown size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="text-md font-medium mb-2">Approach Explained</h4>
                {activeTab === "algorithm" && (
                  <p className="text-sm text-muted-foreground">
                    This binary search implementation divides the search space in half with each iteration, making it
                    significantly faster than linear search for large datasets. The algorithm maintains left and right
                    pointers to track the current search range, and calculates the middle index to determine which half
                    to search next.
                  </p>
                )}
                {activeTab === "dataStructure" && (
                  <p className="text-sm text-muted-foreground">
                    This linked list implementation uses a node-based approach where each node contains a value and a
                    reference to the next node. The implementation includes methods for appending (adding to the end),
                    prepending (adding to the beginning), and deleting nodes. The list maintains references to both the
                    head and tail nodes for O(1) insertions at either end.
                  </p>
                )}
                {activeTab === "utility" && (
                  <p className="text-sm text-muted-foreground">
                    The deep clone function recursively copies nested objects and arrays, ensuring that the cloned
                    object has completely separate references from the original. It handles various data types including
                    primitives, dates, arrays, and objects. This is useful when you need to create a true copy of
                    complex data structures without reference relationships.
                  </p>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-center"
          >
            <a
              href="https://github.com/LIZEWESKI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background hover:bg-background/20 border border-border hover:border-primary/30 transition-colors"
            >
              <Code size={18} />
              <span>View More Code Examples</span>
              <ChevronRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

