import React from 'react';
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import {usePlane} from "@react-three/cannon";

const Floor = () => {
  const [floorTexture] = useLoader(TextureLoader, [
    'floor.jpg'
  ])

  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [-0, -2, -2]
  }))

  return (
    <mesh ref={ref}>
      <planeGeometry args={[10, 10]}/>
      <meshStandardMaterial map={floorTexture} />
    </mesh>
  );
};

export default Floor;
