
import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

const Box = (props) => {
    const ref = useRef();
  
    useFrame(() => {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }, []);
  
    return (
        <mesh rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25} ref={ref} {...props}>
        <boxBufferGeometry args={[70, 70, 70, 70]}/>
        <meshLambertMaterial color={0x9178e6} />
      </mesh>
    );

  };
  
  export default Box;