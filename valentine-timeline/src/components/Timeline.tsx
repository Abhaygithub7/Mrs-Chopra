import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { milestones } from "../data/milestones";
import { MilestoneCard } from "./MilestoneCard";

export const Timeline: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div ref={containerRef} className="relative w-full max-w-6xl mx-auto py-20 px-4">
            {/* Central Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-rose-200 transform -translate-x-1/2 origin-top rounded-full">
                <motion.div
                    style={{ scaleY }}
                    className="absolute top-0 left-0 w-full bg-rose-500 origin-top rounded-full h-full"
                />
            </div>

            <div className="space-y-12">
                {milestones.map((milestone, index) => (
                    <MilestoneCard
                        key={milestone.id}
                        index={index}
                        {...milestone}
                        // Update image path to assume they are in /assets if needed, or root. 
                        // The data file has absolute paths from generating images, we need to fix them to relative for Vite.
                        // But I will fix using replace_file_content or assume user fixes.
                        // Wait, I put them in public/assets. I should update local paths here or in data.
                        image={milestone.image.includes("assets") ? milestone.image : `/assets/${milestone.image.split("/").pop()}`}
                    />
                ))}
            </div>
        </div>
    );
};
