import { Navbar, Hero, About, Tech, Projects, Contact } from "./components";

export const App = () => {
    return (
        <div className="relative z-0 bg-primary">
            <div className="bg-hero bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
            </div>
            <About />
            <Tech />
            <Projects />
            <Contact />
        </div>
    );
};
