import { ReactNode, useState } from "react";

interface IFlippedCardProps {
    front: ReactNode;
    back: ReactNode;
}

export const FlippedCard: React.FC<IFlippedCardProps> = ({ front, back }) => {
    const [flipped, setFlipped] = useState<boolean>(false);

    return (
        <div
            className="relative min-h-[280px] w-full perspective-1000 cursor-pointer"
            onClick={() => setFlipped(!flipped)}
        >
            <div
                className={`w-full h-full transition-transform duration-500 transform-style-3d ${
                    flipped ? "rotate-y-180" : ""
                }`}
            >
                <div className="absolute w-full h-full backface-hidden">
                    {front}
                </div>
                <div className="absolute w-full h-full backface-hidden rotate-y-180">
                    {back}
                </div>
            </div>
        </div>
    );
};
