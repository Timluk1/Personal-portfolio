import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const TechBase = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((tech, index) => (
                <div className="w-28 h-28" key={`ball-${index}`}>
                    <BallCanvas icon={tech.icon} color="#fff8eb" />
                </div>
            ))}
        </div>
    );
};

export const Tech = SectionWrapper(TechBase, "technologies");
