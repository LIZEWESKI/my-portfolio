import { Background } from "./components/Background.jsx"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Timeline } from "./components/Timeline"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"
import { Mentors } from "./components/Mentors.jsx"
import { Contacts } from "./components/Contacts.jsx"
import { Footer } from "./components/Footer.jsx"
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <div className="min-h-svh ">
      <Background />
      <Header />
      <main className="space-y-2 md:px-20 px-4">
        <Hero />
        <Timeline />
        <Skills/>
        <Projects/>
        <Mentors/>
        <Contacts />
        <Footer />
      </main>
      <Analytics />
    </div>
  )
}

export default App