import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { FlippedCard } from "./FlippedCard";

interface IServiceCardProps {
    service: { title: string; description: string; icon: string };
    index: number;
}

const ServiceCard: React.FC<IServiceCardProps> = ({ service, index }) => {
    // front side of the card
    const front = (
        <div className=" bg-tertiary border-2 green-pink-gradient py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 object-contain"
            />
            <h3 className="text-white text-[20px] font-bold text-center">
                {service.title}
            </h3>
        </div>
    );

    // back side of the card
    const back = (
        <div className="bg-tertiary green-pink-gradient border-2 py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <h3 className="text-white text-[20px] font-bold text-center">
                {service.description}
            </h3>
        </div>
    );

    return (
        <motion.div
            variants={fadeIn("right", "spring", index * 1, 0.75)}
            className="bg-primary w-full green-pink-gradient p-[1px] rounded-[20px]"
        >
            <FlippedCard front={front} back={back} />
        </motion.div>
    );
};

const AboutBase = () => {
    return (
        <div>
            <motion.div variants={fadeIn("", "", 0, 0)}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview</h2>
            </motion.div>

            <motion.p
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
                variants={fadeIn("", "", 0.1, 0.1)}
            >
                Welcome to my portfolio! I specialize in developing modern web
                applications with a focus on code quality and user experience.
                Here, you'll find information about my expertise in frontend and
                full-stack development, along with examples of my projects.
            </motion.p>

            <div className="max-md:grid-cols-1 max-md:w-full w-[70%] mt-20 grid grid-cols-2 gap-10">
                {services.map((service, index) => (
                    <ServiceCard
                        key={`serivice-${index}`}
                        index={index}
                        service={service}
                    />
                ))}
            </div>
        </div>
    );
};

export const About = SectionWrapper(AboutBase, "about");
