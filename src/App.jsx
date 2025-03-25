import { Background } from "./components/Background.jsx"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Skills } from "./components/Skills.jsx"
import { Timeline } from "./components/Timeline"

const App = () => {
  return (
    <div className="min-h-svh ">
      <Background />
      <Header />
      <main>
        <Hero />
        <Timeline />
        <Skills/>
      </main>
    </div>
  )
}

export default App