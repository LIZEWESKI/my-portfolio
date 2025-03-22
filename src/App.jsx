import { Button } from "@/components/ui/button"
import { Background } from "./components/Background"

const App = () => {
  return (
    <div className="min-h-screen">
      {/* Background stays fixed during scroll */}
      <Background />
    </div>
  )
}
export default App
