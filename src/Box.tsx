import {useRef} from 'react';
import {useLoader} from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import {useBox} from "@react-three/cannon";

const Box = (props) => {
  const [ref] = useBox(() => ({
    position: [0, 5, 0],
    mass: 0.5,
    ...props
  }))
  const [box1,] = useLoader(TextureLoader, [
    'texture1.jpeg',
  ])

  return (
      <mesh ref={ref}>
        <boxGeometry/>
        <meshStandardMaterial map={box1} />
      </mesh>
  );
};

export default Box;
