import { SectionWrapper } from "../hoc";
import { EarthCanvas } from "./canvas";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { styles } from "../styles";
import { contacts } from "../constants";
import { Tilt } from "react-tilt";
import React from "react";

const EarthCanvas = React.lazy(() => import("./canvas/Earth"));

const ContactBase = () => {
    return (
        <div>
            <motion.div variants={fadeIn("", "", 0, 1)}>
                <p className={styles.sectionSubText}>Send me a message</p>
                <h2 className={styles.sectionHeadText}>Contact</h2>
            </motion.div>

            <div className="h-full flex flex-wrap max-md:items-center max-md:justify-center mt-10">
                <div className="h-[400px] w-[65%] max-md:h-[250px]">
                    <EarthCanvas />
                </div>

                <div className="flex flex-col justify-between max-md:h-[250px]">
                    <ul className="grid grid-cols-2 gap-5">
                        {contacts.map((contact, index) => (
                            <Tilt key={`contact-${index}`}>
                                <li className="flex justify-center items-center rounded-2xl bg-tertiary w-20 h-20 gap-5">
                                    <a href={contact.link}>
                                        <img
                                            src={contact.icon}
                                            alt={contact.icon}
                                            className="w-14 h-14"
                                        />
                                    </a>
                                </li>
                            </Tilt>
                        ))}
                    </ul>
                    <div className="mt-10 w-full flex justify-end">
                        <p>© Timur Lukmanov, 2025</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Contact = SectionWrapper(ContactBase, "contact");
