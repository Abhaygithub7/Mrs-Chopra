import React, { useState } from "react";
import { Music } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const MusicPlayer: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        className="mb-4 shadow-2xl rounded-xl overflow-hidden"
                    >
                        <iframe
                            style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/track/1WN4uNclrDuczTO3bCr8s1?utm_source=generator"
                            width="300"
                            height="152"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-rose-500 hover:bg-rose-600 text-white p-4 rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center"
            >
                <Music className={isOpen ? "animate-spin" : ""} />
                <span className="ml-2 font-semibold">{isOpen ? "Close Music" : "Play Our Song"}</span>
            </button>
        </div>
    );
};
