import { Canvas } from "@react-three/fiber";
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from "@react-three/drei";
import { Suspense } from "react";
import { Loader } from "../Loader";

interface IBallProps {
    icon: string;
    color: string;
}

export const BallCanvas: React.FC<IBallProps> = ({ icon, color }) => {
    return (
        <Canvas
            shadows
            frameloop="demand"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<Loader />}>
                <OrbitControls enableZoom={false} />
                <Ball icon={icon} color={color} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

const Ball: React.FC<IBallProps> = ({ icon, color }) => {
    const texture = useTexture(icon);

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color={color}
                    flatShading
                    polygonOffset
                    polygonOffsetFactor={-5}
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    map={texture}
                    scale={1}
                />
            </mesh>
        </Float>
    );
};
