import './App.css'
import { Canvas } from "@react-three/fiber";
import Box from "./Box.tsx";

function App() {

  return (
    <div className="App">
      <Canvas>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} />
        <Box position={[2, 1, 0]} />
      </Canvas>
    </div>
  )
}

export default App
