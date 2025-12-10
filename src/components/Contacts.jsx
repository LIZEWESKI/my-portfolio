import { useState, useRef } from "react"
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion"
import { Send, MessageSquare, Github, Linkedin, Check, Sparkles, Star, X, Mail, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast, Toaster } from "sonner"

export function Contacts() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [copied, setCopied] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [activeTab, setActiveTab] = useState("form")
  const formRef = useRef(null)

  // Mouse follow effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }
  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true)
    const formData = new FormData(event.target);

    formData.append("access_key", "ec4d297c-f861-4aa6-96e0-20c22c65ce50");
    formData.append("replyto", "badrnoukh@gmail.com");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
      if (res.success) {
        setIsSubmitting(false)
        setShowSuccess(true)
        setTimeout(() => {
          setShowSuccess(false)
          setFormState({ name: "", email: "", message: "" })
        }, 3000)
      }
    }catch(e) {
      console.error("Error:", e);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("badrnoukh@gmail.com")
    setCopied(true)

    toast("Email copied to clipboard",{
      description: "You can now paste it into your email client",
    })

    setTimeout(() => setCopied(false), 2000)
  }

  const SuccessConfetti = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3"
            initial={{
              opacity: 1,
              x: "50%",
              y: "50%",
              scale: 0,
            }}
            animate={{
              opacity: 0,
              x: `${50 + (Math.random() * 60 - 30)}%`,
              y: `${50 + (Math.random() * 60 - 30)}%`,
              scale: Math.random() * 0.8 + 0.2,
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: 0.8 + Math.random() * 0.5,
              ease: "easeOut",
            }}
          >
            {i % 3 === 0 ? (
              <Sparkles className="text-primary" size={12} />
            ) : i % 3 === 1 ? (
              <Star className="text-yellow-400" size={12} />
            ) : (
              <div className="w-full h-full rounded-full bg-primary" />
            )}
          </motion.div>
        ))}
      </div>
    )
  }

  return (
    <section className="py-6 relative" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to connect? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
            <div className="bg-card border border-border/40 rounded-xl p-6 h-full">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                  {/* Email */}
                  <div className="group">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                        <Mail size={18} />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Email</h4>
                        <div className="flex items-center gap-2">
                          <p className="text-foreground">badrnoukh [at] gmail [dot] com</p>
                          <button
                            onClick={copyEmail}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Copy email"
                          >
                            {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                        <MessageSquare size={18} />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-3">Social Profiles</h4>
                        <div className="flex flex-wrap gap-3">
                          <a
                            href="https://github.com/LIZEWESKI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card/80 border border-border hover:border-primary/30 hover:bg-card/60 transition-colors"
                          >
                            <Github size={16} />
                            <span>GitHub</span>
                          </a>
                          <a
                            href="https://www.linkedin.com/in/lizewesk-badr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card/80 border border-border hover:border-primary/30 hover:bg-card/60 transition-colors"
                          >
                            <Linkedin size={16} />
                            <span>LinkedIn</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                

                  <div className="pt-4 border-t border-border/40">
                    <h4 className="text-sm font-medium mb-2">Current Availability</h4>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                      <p className="text-sm text-muted-foreground">Available for freelance projects</p>
                    </div>
                  </div>

                  <div className="bg-card/50 rounded-lg p-4 border border-border/40">
                    <h4 className="text-sm font-medium mb-2">Response Time</h4>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
                      <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-primary rounded-full"></div>
                      </div>
                    </div>
                  </div>
              
              </div>
            </div>
            </motion.div>


            <motion.div
              className="lg:col-span-3 relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              ref={formRef}
            >
              <div
                className="bg-card border border-border/40 rounded-xl p-6 h-full relative overflow-hidden"
                onMouseMove={handleMouseMove}
              >
                <motion.div
                  className="absolute -inset-[100px] opacity-30 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
                    x: useTransform(mouseX, [0, 500], [-100, 100]),
                    y: useTransform(mouseY, [0, 500], [-100, 100]),
                  }}
                />

                <div className="flex mb-6 border border-border/40 rounded-lg p-1 bg-card/50 w-fit">
                  <button
                    onClick={() => setActiveTab("form")}
                    className={`px-4 py-2 text-sm rounded-md transition-colors ${
                      activeTab === "form" ? "bg-primary text-primary-foreground" : "hover:bg-card/80"
                    }`}
                  >
                    Contact Form
                  </button>
                  <button
                    onClick={() => setActiveTab("quick")}
                    className={`px-4 py-2 text-sm rounded-md transition-colors ${
                      activeTab === "quick" ? "bg-primary text-primary-foreground" : "hover:bg-card/80"
                    }`}
                  >
                    Quick Message
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {activeTab === "form" ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>

                      <form onSubmit={onSubmit} className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Your Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleInputChange}
                            placeholder="Lizeweski Noah"
                            required
                            className="bg-card/50 border-border/40"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email Address
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleInputChange}
                            placeholder="lizeweski@example.com"
                            required
                            className="bg-card/50 border-border/40"
                          />
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Your Message
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleInputChange}
                            placeholder="Hello, I'd like to talk about..."
                            required
                            className="min-h-[120px] bg-card/50 border-border/40"
                          />
                        </div>

                        <div className="pt-2">
                          <Button
                            type="submit"
                            className="w-full relative overflow-hidden group"
                            disabled={isSubmitting || showSuccess}
                          >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                              {isSubmitting ? (
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
                                  Sending...
                                </>
                              ) : showSuccess ? (
                                <>
                                  <Check size={16} />
                                  Message Sent!
                                </>
                              ) : (
                                <>
                                  <Send size={16} />
                                  Send Message
                                </>
                              )}
                            </span>

                            <motion.span
                              className="absolute inset-0 translate-y-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent"
                              animate={{ translateY: [100, -100] }}
                              transition={{
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "loop",
                                duration: 2,
                                repeatDelay: 1,
                              }}
                            />
                          </Button>
                        </div>
                      </form>

                      <AnimatePresence>
                        {showSuccess && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute inset-0 flex items-center justify-center bg-card/95 backdrop-blur-sm rounded-xl"
                          >
                            <div className="text-center relative">
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: [0, 1.2, 1] }}
                                transition={{ duration: 0.5 }}
                                className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mx-auto mb-4"
                              >
                                <Check size={32} className="text-primary" />
                              </motion.div>
                              <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                              <p className="text-muted-foreground">
                                Thank you for reaching out. I'll get back to you soon.
                              </p>

                              <SuccessConfetti />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="quick"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-bold mb-6">Quick Connect</h3>

                      <div className="space-y-4">
                        <p className="text-muted-foreground">Choose a platform to send a direct message:</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <a
                              href="https://www.linkedin.com/in/lizewesk-badr"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 p-4 rounded-lg bg-card/80 border border-border hover:border-primary/30 hover:bg-card/60 transition-colors"
                            >
                              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                                <Linkedin size={18} />
                              </div>
                              <div>
                                <h4 className="font-medium">LinkedIn</h4>
                                <p className="text-sm text-muted-foreground">Professional network</p>
                              </div>
                            </a>

                            <a
                              href="https://github.com/LIZEWESKI"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 p-4 rounded-lg bg-card/80 border border-border hover:border-primary/30 hover:bg-card/60 transition-colors"
                            >
                              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                                <Github size={18} />
                              </div>
                              <div>
                                <h4 className="font-medium">GitHub</h4>
                                <p className="text-sm text-muted-foreground">Code collaboration</p>
                              </div>
                            </a>

                            <div className="flex items-center gap-3 p-4 rounded-lg bg-card/80 border border-border">
                              <div className="w-10 h-10 rounded-full bg-gray-700/50 border border-gray-600 flex items-center justify-center text-gray-400 shrink-0">
                                <X size={18} />
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-400">Discord</h4>
                                <p className="text-sm text-gray-500">Coming soon</p>
                              </div>
                            </div>
                        </div>

                        <div className="pt-4 mt-4 border-t border-border/40">
                          <h4 className="font-medium mb-3">Preferred Contact Method</h4>
                          <p className="text-sm text-muted-foreground">
                            For professional inquiries, LinkedIn or email are the fastest ways to reach me. For
                            code-related discussions, GitHub is preferred.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
          <Toaster/>
        </div>
      </div>
    </section>
  )
}

