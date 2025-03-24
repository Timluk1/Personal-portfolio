import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";
import classnames from "classnames";
import { navLinks } from "../constants";

export const Navbar = () => {
    const [active, setActive] = useState<string>("");
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleClickLink = () => {
        setActive("");
        window.scrollTo(0, 0);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav
            className={classnames(
                styles.paddingX,
                "w-full flex items-center py-5 fixed top-0 z-20 bg-primary",
            )}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={handleClickLink}
                >
                    <img
                        src={logo}
                        alt="logo"
                        className="w-12 h-12 object-contain"
                    />
                    <p className="text-white text-[18px] font-bold cursor-pointer flex gap-2">
                        Timur{" "}
                        <span className="sm:block hidden">
                            - Frontend portfolio
                        </span>
                    </p>
                </Link>

                {/* Десктопное меню */}
                <ul className="hidden sm:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>

                {/* Мобильное меню */}
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={isMenuOpen ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={toggleMenu}
                    />
                </div>

                <div
                    className={`sm:hidden p-6 black-gradient absolute top-20 right-4 w-[200px] z-10 rounded-xl ${isMenuOpen ? "flex" : "hidden"}`}
                >
                    <ul className="list-none flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <li
                                key={`list-${link.id}`}
                                className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                                onClick={() => {
                                    setActive(link.title);
                                    setIsMenuOpen(false);
                                }}
                            >
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
