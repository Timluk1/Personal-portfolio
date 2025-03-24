import { styles } from "../styles";
import classnames from "classnames";
import { ComputerCanvas } from "./canvas";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div
                className={classnames(
                    styles.paddingX,
                    "mx-auto absolute inset-0 top-[120px] max-w-7xl flex flex-row items-start gap-5",
                )}
            >
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915eff]" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col justify-center items-start"
                >
                    <h1
                        className={classnames(
                            styles.heroHeadText,
                            "text-white",
                        )}
                    >
                        Hi, I am <span className="text-[#915eff]">Timur</span>
                    </h1>
                    <p
                        className={classnames(
                            styles.heroSubText,
                            "mt-2 text-white-100",
                        )}
                    >
                        I am frontend developer
                        <br className="sm:block hidden" />
                        creating interfaces and web applications
                    </p>
                </motion.div>
            </div>

            <ComputerCanvas />
            <a href="#about">
                <div className="absolute xs:bottom-10 bottom-0 w-full flex justify-center items-center">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2">
                        <motion.div
                            className="w-3 h-3 rounded-full bg-secondary z-2"
                            animate={{ y: [0, 24, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                        />
                    </div>
                </div>
            </a>
        </section>
    );
};
