import './App.css'
import { Canvas } from "@react-three/fiber";
import Box from "./Box.tsx";
import {Suspense} from "react";
import Floor from "./Floor.tsx";
import {Physics} from "@react-three/cannon";

function App() {

  return (
    <div className="App">
      <Suspense fallback={null}>
        <Canvas>
          <Physics>
            <ambientLight intensity={0.3}/>
            <pointLight position={[10, 10, 10]}/>
            <Box position={[2, 1, 0]}/>
            <Box position={[0, 2, 0]}/>
            <Floor/>
          </Physics>
        </Canvas>
      </Suspense>
    </div>
  )
}

export default App
