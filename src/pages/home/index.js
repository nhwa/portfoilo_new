  import React,{ useEffect, useRef, useState } from "react";
  import "./style.css";
  import { Helmet, HelmetProvider } from "react-helmet-async";
  // import Typewriter from "typewriter-effect";
  import { introdata, meta } from "../../content_option";
  import  Box from "../../components/flower";
  import { EffectComposer, DepthOfField ,
    Noise} from '@react-three/postprocessing';
  import { BlendFunction } from "postprocessing";
  import { OrbitControls, OrthographicCamera} from "@react-three/drei";
  import { Canvas } from '@react-three/fiber'
  import { Container } from "react-bootstrap";

export const Home = (event) => {
  const magicRef = useRef(null);
  const [isClicked,setisClicked] =useState(0);
  let [coords, setCoords] = useState({x: 0, y: 0});


  useEffect(() => {
    const handleWindowMouseMove = (e) => {
      setCoords({ x: e.clientX - magicRef.current.offsetWidth / 2, y: e.clientY - magicRef.current.offsetWidth / 2});
    };
    window.addEventListener('mousemove', handleWindowMouseMove);
    return () => {
      window.removeEventListener( 'mousemove', handleWindowMouseMove,);
    };
  }, []);

    return (
      <div className="scene" onClick= {() =>{setisClicked(1)}}>
        <h1>Find your Color</h1>
        { 
          isClicked 
          ? <div className="magic" ref={magicRef} style={ {display :'none' }}></div>
          : <div className="scene_wrapper"><div className="magic" ref={magicRef} style={ { left: coords.x, top :coords.y}}></div></div> 
        }
      </div>
    );
  };

