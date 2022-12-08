import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import  Box from "../../components/flower";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { Canvas } from '@react-three/fiber'


export const Home = () => {
    return (
      <Canvas style={{ position:"absolute", width: "100vw", height: "100vh", top:"0", overflow:"hidden"}}>
        <ambientLight intensity={1} />
        <pointLight intensity={0.75} position={[10, 10, 10]} />
        {/* <Box position={[200, 200, 0]} /> */}
        <Box position={[0, 105, 0]} />
        <Box position={[105, 70, 0]} />
        <Box position={[105, -45, 0]} />
        <Box position={[0, 0, 0]} />
        <Box position={[-105, 70, 0]} />
        <Box position={[-105, -45, 0]} />
        <Box position={[0, -105, 0]} />
        {/* <OrbitControls /> */}
        <OrthographicCamera
          makeDefault
          zoom={0.5}
          top={200}
          bottom={-200}
          left={300}
          right={-300}
          near={1}
          far={1500}
          position={[0, 0, 200]}
        />
    </Canvas>
    );
  };

