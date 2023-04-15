import { CameraControls, PerspectiveCamera, useHelper, useTexture} from "@react-three/drei";
import { angleToRadians } from "../utils/angle";
import { useRef } from "react";
import { SpotLightHelper, PointLightHelper, RectAreaLight } from "three";


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

  const spotLightRef = useRef(null)
  useHelper(spotLightRef, SpotLightHelper)

  const pointLightRef = useRef(null)
  useHelper(pointLightRef, PointLightHelper)

  const rectAreaLightRef = useRef(null)
  useHelper(rectAreaLightRef, RectAreaLight)

  return (

    
    <>
          {/* Camera */}
          <PerspectiveCamera makeDefault position={[-100, 5, 0]} />
          <CameraControls   />
          <ambientLight args={["#ffffff", 0.25]}/>

            {/* Spotlight light */}
           <spotLight ref={spotLightRef} args={["#ffffff", 1.5, 7, angleToRadians(45), 0]} position={[-3, 15, 0]} castShadow />


         {/* hemisphereLight light */}
         <hemisphereLight args={["#ff7f50", "#444444", 0.2]} castShadow />

          {/* PointLight */}
          <pointLight ref={pointLightRef} color="#ffdc5d" intensity={2} position={[10, 10, 10]} distance={50} />

          {/* RectAreaLight */}
          <rectAreaLight ref={rectAreaLightRef} color={"#ffffff"} args={[1,1,10,10]} intensity={2} position={[-10, 10, 10]}  />         
            {/* cube */}
            <mesh rotation={[-(angleToRadians(90)), 0, 0]} receiveShadow>
                    <boxGeometry args={[20, 20, 20, 20]} />
                    <meshStandardMaterial color="#1ea3d8" {...sphinxTextures} />
                </mesh>

    </>
  );
};

export default Experience;
