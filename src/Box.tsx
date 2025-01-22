import React from 'react';

const Box = ({position}: {position: number[]}) => {
  return (
      <mesh position={position}>
        <boxGeometry/>
        <meshStandardMaterial color='blue'/>
      </mesh>
  );
};

export default Box;
