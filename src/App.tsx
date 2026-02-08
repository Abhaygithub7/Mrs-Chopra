import { motion, useScroll, useTransform } from "framer-motion";
import { Timeline } from "./components/Timeline";
import { Finale } from "./components/Finale";
import { MusicPlayer } from "./components/MusicPlayer";
import { Heart } from "lucide-react";

function App() {
    // const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll();
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <div className="min-h-screen bg-rose-50 overflow-hidden relative">
            <MusicPlayer />

            {/* Decorative Background Elements */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 pointer-events-none opacity-30 z-0"
            >
                <Heart className="absolute top-20 left-10 w-24 h-24 text-rose-200 -rotate-12" />
                <Heart className="absolute top-40 right-20 w-32 h-32 text-rose-200 rotate-12" />
                <Heart className="absolute bottom-1/4 left-1/3 w-40 h-40 text-rose-200 rotate-45" />
            </motion.div>

            {/* Hero Section */}
            <header className="relative h-screen flex flex-col items-center justify-center text-center px-4 snap-start">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="z-10"
                >
                    <span className="text-xl md:text-2xl text-rose-600 font-serif tracking-widest uppercase mb-4 block">
                        Our Love Story
                    </span>
                    <h1 className="text-5xl md:text-8xl font-bold text-gray-900 font-handwriting mb-6">
                        Mr. & Mrs. Chopra
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        A journey through time, laughter, brownies, and love. <br />
                        Scroll down to walk down memory lane...
                    </p>
                </motion.div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 text-rose-400"
                >
                    <p className="text-sm font-semibold mb-2">Scroll to Begin</p>
                    <div className="w-6 h-10 border-2 border-rose-400 rounded-full mx-auto flex justify-center p-1">
                        <div className="w-1 h-2 bg-rose-400 rounded-full animate-bounce" />
                    </div>
                </motion.div>
            </header>

            {/* Main Timeline */}
            <main className="relative z-10 pb-32">
                <Timeline />
                <Finale />
            </main>

            {/* Footer */}
            <footer className="text-center py-8 text-rose-400 text-sm">
                Made with ❤️ for my forever Valentine
            </footer>
        </div>
    );
}

export default App;
