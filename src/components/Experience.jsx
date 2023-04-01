import { CameraControls, Float, Html, PerspectiveCamera, Text3D, useTexture} from "@react-three/drei";
import { angleToRadians } from "../utils/angle";

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
                    <sphereGeometry args={[20, 20, 50,50]} />
                    <meshStandardMaterial color="#1ea3d8" {...sphinxTextures} />
                </mesh>

        

    </>
  );
};

export default Experience;
