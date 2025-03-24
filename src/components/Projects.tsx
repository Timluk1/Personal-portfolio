import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { Tilt } from "react-tilt";
import { github } from "../assets";
import classNames from "classnames";

interface IProject {
    name: string;
    description: string;
    tags: { name: string; color: string }[];
    image: string;
    source_code_link: string;
    index: number;
}

const ProjectCard: React.FC<IProject> = ({
    name,
    description,
    image,
    tags,
    source_code_link,
    index,
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 1, 2)}>
            <Tilt
                options={{ scale: 1 }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full"
            >
                <a href={source_code_link}>
                    <div className="relative w-full">
                        <img
                            className="w-full object-cover rounded-2xl"
                            src={image}
                            alt={name}
                        />

                        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                            <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                                <img
                                    className="w-1/2 h-1/2 object-contain"
                                    src={github}
                                    alt="github"
                                />
                            </div>
                        </div>

                        <div className="mt-5">
                            <h3 className="text-white font-bold text-[24px]">
                                {name}
                            </h3>
                            <p className="mt-2 text-secondary text-[14px]">
                                {description}
                            </p>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <p
                                    className={classNames(
                                        "text-[14px]",
                                        tag.color,
                                    )}
                                    key={`tag-${index}`}
                                >
                                    #{tag.name}
                                </p>
                            ))}
                        </div>
                    </div>
                </a>
            </Tilt>
        </motion.div>
    );
};

const ProjectsBase = () => {
    return (
        <>
            <motion.div variants={textVariant(0)}>
                <p className={styles.sectionSubText}>My work</p>
                <h2 className={styles.sectionHeadText}>Projects</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                    variants={fadeIn("", "", 0.1, 1)}
                >
                    Here are some of my projects, where I have implemented modern web solutions using cutting-edge technologies. From easy landing pages and content management systems to clones of popular ai services—each project showcases my skills in development and optimization.
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        {...project}
                        index={index}
                    />
                ))}
            </div>
        </>
    );
};

export const Projects = SectionWrapper(ProjectsBase, "projects");
