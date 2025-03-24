import { useProgress } from "@react-three/drei";
import { Html } from "@react-three/drei";

export const Loader = () => {
    const { progress } = useProgress();
    return (
        <Html
            as="div"
            center
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginTop: "100px",
            }}
        >
            <span className="canvas-loader"></span>
            <p
                style={{
                    fontSize: 14,
                    color: "#F1F1F1",
                    fontWeight: 800,
                    marginTop: 40,
                }}
            >
                {progress.toFixed(0)}%
            </p>
        </Html>
    );
};
