import { OrbitControls, PerspectiveCamera, useTexture} from "@react-three/drei";
import { angleToRadians } from "../utils/angle";
import { Sphinx } from "./Sphinx";
import { useEffect, useRef } from "react";
import * as dat from 'dat.gui'
const Experience = () => {
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
  const gui = new dat.GUI( {width: 400})
  useEffect(()=>{
    console.log(sphinx)
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

  return () => {gui.destroy()}  
  }, [])
  return (
    <>
          {/* Camera */}
          <PerspectiveCamera makeDefault position={[-6, 1, 0]} />
          <OrbitControls  minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(80)} />
      
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
          <Sphinx />
          </group>
    </>
  );
};

export default Experience;
