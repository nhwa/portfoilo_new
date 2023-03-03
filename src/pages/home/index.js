  import React,{ useEffect, useRef, useState } from "react";
  import "./style.css";
  import { Helmet, HelmetProvider } from "react-helmet-async";
  // import Typewriter from "typewriter-effect";
  import { introdata, meta } from "../../content_option";
  import { Link } from "react-router-dom";
  import  Box from "../../components/flower";
  import { EffectComposer, DepthOfField ,
    Noise} from '@react-three/postprocessing';
  import { BlendFunction } from "postprocessing";
  import { OrbitControls, OrthographicCamera} from "@react-three/drei";
  import { Canvas } from '@react-three/fiber'
  import { Container } from "react-bootstrap";

const Effects = () =>{
  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={0}
        focalLength={0.06}
        bokehScale={5}
        height={600}
        blendFunction={BlendFunction.Screen}
        blur={true}
      />
      <Noise opacity={0.25} />
    </EffectComposer>
)};


export const Home = (event) => {
  const magicRef = useRef(null);
  const [isClicked,setisClicked] =useState(0);
  let [coords, setCoords] = useState({x: 0, y: 0});


  useEffect(() => {
    const handleWindowMouseMove = event => {
      setCoords({ x: event.clientX - magicRef.current.offsetWidth / 2, y: event.clientY - magicRef.current.offsetWidth / 2});
    };
    window.addEventListener('mousemove', handleWindowMouseMove);
    
    console.log("width", magicRef.current.offsetWidth)
    console.log("xy", coords);
    return () => {
      window.removeEventListener( 'mousemove', handleWindowMouseMove,);
    };
  }, []);

    return (
    <>
      <div className="scene" onClick= {() =>{setisClicked(1)}}>
        <h1>Simple magic!</h1>
        { isClicked 
        ? <div className="magic" ref={magicRef} style={ {display :'none' }}></div>
        : <div className="scene_wrapper"><div className="magic" ref={magicRef} style={ { left: coords.x, top :coords.y}}></div></div> }
        <p className="check-out">Check out my other <a href="https://codepen.io/suez/public/" target="_blank">pens</a></p>
      </div>
      </>    
      // <Canvas></Canvas>
    //   <Canvas style={{ position:"absolute", width: "100vw", height: "100vh", top:"0", overflow:"hidden"}}>
    //     <ambientLight intensity={1} />
    //     <pointLight intensity={0.75} position={[10, 10, 10]} />
    //     <Box position={[-105, -45, 0]} />
    //     {/* <OrbitControls /> */}
    //     {/* <Effects /> */}
        
    //     <OrthographicCamera
    //       makeDefault
    //       zoom={1}
    //       top={200}
    //       bottom={-200}
    //       left={300}
    //       right={-300}
    //       near={1}
    //       far={1500}
    //       position={[0, 0, 200]}
    //     />
    // </Canvas>
    );
  };

