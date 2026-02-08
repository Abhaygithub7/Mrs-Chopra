import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart } from "lucide-react";

export const Finale: React.FC = () => {
    const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
    const [yesClicked, setYesClicked] = useState(false);

    const handleNoHover = () => {
        // Calculate random position within some bounds
        const x = (Math.random() - 0.5) * 300;
        const y = (Math.random() - 0.5) * 300;
        setNoBtnPosition({ x, y });
    };

    const handleYesClick = () => {
        setYesClicked(true);
        const duration = 15 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => {
            return Math.random() * (max - min) + min;
        };

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            });
        }, 250);
    };

    if (yesClicked) {
        return (
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8 bg-white/50 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-rose-200"
            >
                <h1 className="text-5xl md:text-7xl font-bold text-rose-600 mb-6 font-handwriting">
                    Yay! I knew it! ❤️
                </h1>
                <p className="text-xl text-gray-700 max-w-lg mb-8">
                    You've made me the happiest person in the world, Mrs. Chopra.
                    Here's to a lifetime of home workouts, brownies, and kisses.
                </p>
                <div className="flex gap-4">
                    <Heart className="w-16 h-16 text-rose-500 fill-current animate-pulse" />
                    <Heart className="w-16 h-16 text-rose-500 fill-current animate-bounce delay-100" />
                    <Heart className="w-16 h-16 text-rose-500 fill-current animate-pulse delay-200" />
                </div>
            </motion.div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-12 font-serif">
                Will you be my Valentine?
            </h2>

            <div className="relative flex flex-col md:flex-row gap-8 items-center justify-center h-40 w-full max-w-md">
                <button
                    onClick={handleYesClick}
                    className="px-8 py-4 bg-rose-600 text-white text-xl font-bold rounded-full shadow-lg hover:bg-rose-700 hover:scale-110 transition-all duration-300 z-10"
                >
                    Yes, Obviously! 💖
                </button>

                <motion.button
                    animate={{ x: noBtnPosition.x, y: noBtnPosition.y }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onMouseEnter={handleNoHover}
                    onTouchStart={handleNoHover}
                    className="px-8 py-4 bg-gray-200 text-gray-600 text-xl font-bold rounded-full shadow-md hover:bg-gray-300 absolute md:static"
                >
                    No 🏃‍♂️
                </motion.button>
            </div>
        </div>
    );
};
