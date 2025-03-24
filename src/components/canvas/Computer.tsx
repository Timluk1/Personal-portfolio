import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { isMobile } from "react-device-detect";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Suspense } from "react";
import { Loader } from "../Loader";

export const ComputerCanvas = () => {
    return (
        <Canvas
            frameloop="demand"
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<Loader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computer />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

const Computer = () => {
    const computer = useLoader(GLTFLoader, "./desktop_pc/scene.gltf");
    return (
        <mesh>
            <hemisphereLight intensity={0.15} />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <directionalLight position={[5, 5, 5]} intensity={2} />
            <ambientLight intensity={0.5} />
            <pointLight intensity={1} />
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.7 : 0.75}
                position={isMobile ? [0, -3.5, -2.2] : [0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    );
};
