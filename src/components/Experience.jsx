import { CameraControls, Float, Html, PerspectiveCamera, Text3D, useTexture} from "@react-three/drei";
import { angleToRadians } from "../utils/angle";
import { Sphinx } from "./Sphinx";
import { useEffect, useRef } from "react";
import * as dat from 'dat.gui'
import { Fox } from "./Fox";
const Experience = () => {
  const fox = useRef(null);
  /**Fonts and text options */
  const textOptions = {
    size: 1,
    height: 0.5,
    curveSegments: 6,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.05,
    bevelOffset: 0,
    bevelSegments: 3
	}

  const fPath = "../../public/fonts/"

    /** Textures*/
    const tPath = "../../public/textures/"

    const sphinxTextures = useTexture({
      map: tPath+"Wall_Stone_Hieroglyphs_001_basecolor.jpg",
      aoMap: tPath+"Wall_Stone_Hieroglyphs_001_ambientOcclusion.jpg",
      roughnessMap: tPath+"Wall_Stone_Hieroglyphs_001_roughness.jpg",
      displacementMap: tPath+"Wall_Stone_Hieroglyphs_001_height.png",
      normalMap: tPath+"Wall_Stone_Hieroglyphs_001_normal.jpg"
    })
  /**Debugging */
  const sphinx = useRef(null)
  const text = useRef(null)

  const gui = new dat.GUI( {width: 400})
  useEffect(()=>{
    const debugFox = {
      position: {
        x: 0,
        y: 0,
        z: 0
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0
      },
      scale:{
        x: 1,
        y: 1,
        z: 1
      }
    }

    gui.add(debugFox.position, 'x').min(-4).max(4).name("Posición en eje x").onChange(() => { fox.current.position.x = debugFox.position.x })
    gui.add(debugFox.position, 'y').min(-4).max(4).name("Posición en eje y").onChange(() => { fox.current.position.y = debugFox.position.y })
    gui.add(debugFox.position, 'z').min(-4).max(4).name("Posición en eje z").onChange(() => { fox.current.position.z = debugFox.position.z })
    gui.add(debugFox.rotation, 'x').min(-4).max(4).name("Rotación en eje x").onChange(() => { fox.current.rotation.x = debugFox.rotation.x })
    gui.add(debugFox.rotation, 'y').min(-4).max(4).name("Rotación en eje y").onChange(() => { fox.current.rotation.y = debugFox.rotation.y })
    gui.add(debugFox.rotation, 'z').min(-4).max(4).name("Rotación en eje z").onChange(() => { fox.current.rotation.z = debugFox.rotation.z })
    gui.add(debugFox.scale, 'x').min(0).max(100).name("Escala en eje x").onChange(() => { fox.current.scale.x = debugFox.scale.x })
    gui.add(debugFox.scale, 'y').min(0).max(100).name("Escala en eje y").onChange(() => { fox.current.scale.y = debugFox.scale.y })
    gui.add(debugFox.scale, 'z').min(0).max(100).name("Escala en eje z").onChange(() => { fox.current.scale.z = debugFox.scale.z })
    
   
    /*
    const debugText = {
      position: {
        x: -3,
        y: 2,
        z: 0
      },
      rotation: {
        x: 0,
        y: -90,
        z: 0
      },

    }

    gui.add(debugText.position, 'x').min(-4).max(4).onChange(()=>{text.current.position.x = debugText.position.x})
    gui.add(debugText.position, 'y').min(-4).max(4).onChange(()=>{text.current.position.y = debugText.position.y})
    gui.add(debugText.position, 'z').min(-15).max(4).onChange(()=>{text.current.position.z = debugText.position.z})
    gui.add(debugText.rotation, 'x').min(-180).max(180).onChange(()=>{text.current.rotation.x = angleToRadians(debugText.rotation.x)})
    gui.add(debugText.rotation, 'y').min(-180).max(180).onChange(()=>{text.current.rotation.y = angleToRadians(debugText.rotation.y)})
    gui.add(debugText.rotation, 'z').min(-180).max(180).onChange(()=>{text.current.rotation.z = angleToRadians(debugText.rotation.z)})
    */
    /*
  const debugSphinx = {
    position: {
      x: 0,
      y: 0,
      z: 0
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0
    },
    scale:{
      x: 1,
      y: 1,
      z: 1
    }
  }
  gui.add(debugSphinx.position, 'x').min(-4).max(4).onChange(()=>{sphinx.current.position.x = debugSphinx.position.x})
  gui.add(debugSphinx.position, 'y').min(-4).max(4).onChange(()=>{sphinx.current.position.y = debugSphinx.position.y})
  gui.add(debugSphinx.position, 'z').min(-4).max(4).onChange(()=>{sphinx.current.position.z = debugSphinx.position.z})
  gui.add(debugSphinx.rotation, 'x').min(-4).max(4).onChange(()=>{sphinx.current.rotation.x = debugSphinx.rotation.x})
  gui.add(debugSphinx.rotation, 'y').min(-4).max(4).onChange(()=>{sphinx.current.rotation.y = debugSphinx.rotation.y})
  gui.add(debugSphinx.rotation, 'z').min(-4).max(4).onChange(()=>{sphinx.current.rotation.z = debugSphinx.rotation.z})
  gui.add(debugSphinx.scale, 'x').min(0).max(100).onChange(() => {sphinx.current.scale.x = debugSphinx.scale.x})
  gui.add(debugSphinx.scale, 'y').min(0).max(100).onChange(() => {sphinx.current.scale.y = debugSphinx.scale.y})
  gui.add(debugSphinx.scale, 'z').min(0).max(100).onChange(() => {sphinx.current.scale.z = debugSphinx.scale.z})
*/


  return () => {gui.destroy()}  
  }, [])
  return (
    <>
          {/* Camera */}
          <PerspectiveCamera makeDefault position={[-16, 5, 0]} />
          <CameraControls  minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(80)} />
      
          <ambientLight args={["#ffffff", 0.25]}/>
           {/* Spotlight light */}
           <spotLight args={["#ffffff", 1.5, 7, angleToRadians(45), 0.4]} position={[-3, 5, 0]} castShadow />

      
            {/* Floor */}
            <mesh rotation={[-(angleToRadians(90)), 0, 0]} receiveShadow>
                    <planeGeometry args={[20, 20]} />
                    <meshStandardMaterial color="#1ea3d8" {...sphinxTextures} />
                </mesh>

          {/* Sphinx */}
          <group  ref={sphinx} rotation={[0,-1.5,0]} scale={[50,50,50]} position={[-2,0,-1]}>
          <Sphinx castShadow/>
          </group>


          {/** Fox*/}
          
          <group  ref={fox} rotation={[0,-1.5,0]} scale={[0.01, 0.01, 0.01]} position={[-2,0.3,-2]}>
          <Fox/>
          <Html
          Center
          wrapperClass="label"
          distanceFactor={6}
          occlude={[sphinx]}
          >
            <h1>Not a Sphinx Cat</h1>
          </Html>
          </group>

          {/**Text3d */}
          <Float
  speed={1} // Animation speed, defaults to 1
  rotationIntensity={0.3} // XYZ rotation intensity, defaults to 1
  floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
  floatingRange={[0,0.5]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
>
          <Text3D ref={text} font={fPath+"Beachfly Free Trial_Regular.json"} {...textOptions} position={[-1.9, 3.8, -11]} rotation={[0, -(angleToRadians(90)), 0]}>
          Sphinx judging your bad taste
        <meshNormalMaterial/>
        </Text3D>
        </Float>

    </>
  );
};

export default Experience;
