import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { Heart } from "lucide-react";

interface MilestoneProps {
    date: string;
    title: string;
    note: string;
    image: string;
    index: number;
}

export const MilestoneCard: React.FC<MilestoneProps> = ({
    date,
    title,
    note,
    image,
    index,
}) => {
    const isLeft = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className={cn(
                "flex flex-col md:flex-row items-center w-full mb-24 relative",
                isLeft ? "md:flex-row-reverse" : ""
            )}
        >
            {/* Spacer for line */}
            <div className="hidden md:block w-1/2" />

            {/* Center Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                <div className="w-12 h-12 bg-rose-500 rounded-full border-4 border-rose-100 flex items-center justify-center shadow-lg">
                    <Heart className="w-6 h-6 text-white fill-current" />
                </div>
            </div>

            {/* Content Card */}
            <div className={cn("w-full md:w-1/2 px-4 md:px-12", isLeft ? "text-right" : "text-left")}>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-rose-100 hover:shadow-2xl transition-shadow duration-300">
                    <span className="inline-block px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-sm font-semibold mb-3">
                        {date}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 font-serif">{title}</h3>

                    <div className="relative overflow-hidden rounded-lg mb-4 aspect-video shadow-md group">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <p className="text-gray-600 leading-relaxed italic">{note}</p>
                </div>
            </div>
        </motion.div>
    );
};
