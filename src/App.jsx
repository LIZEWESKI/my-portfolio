import { Background } from "./components/Background.jsx"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Timeline } from "./components/Timeline"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"
import { CodeSnippets } from "./components/CodeSnippets.jsx"

const App = () => {
  return (
    <div className="min-h-svh ">
      <Background />
      <Header />
      <main className="space-y-2">
        <Hero />
        <Timeline />
        <Skills/>
        <Projects/>
        <CodeSnippets />
      </main>
    </div>
  )
}

export default App