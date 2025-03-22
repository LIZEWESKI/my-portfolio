import { Button } from "@/components/ui/button"
import { Background } from "./components/Background"

const App = () => {
  return (
    <div className="min-h-screen">
      {/* Background stays fixed during scroll */}
      <Background />
      
      {/* Content that can scroll */}
      <div className="relative z-10 px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">My Content</h1>
        
        {/* Add lots of content to enable scrolling */}
        <div className="space-y-8">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <h2 className="text-2xl text-white mb-4">Section {i + 1}</h2>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
              </p>
              <Button className="mt-4">Click me</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default App
