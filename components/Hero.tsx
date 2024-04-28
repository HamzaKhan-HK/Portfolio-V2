"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { CursorContext } from "@/context/CursorContext";
import { useContext } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const { setIsHovered } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-start justify-end h-[calc(100vh-9rem)] gap-y-8"
    >
      <h1 className="text-3xl font-bold max-w-4xl md:text-5xl">
        Creating modern and innovative websites for a unique digital experience.
      </h1>
      <div className="space-x-4">
        <Link
          href={"mailto:hamzak1738@gmail.com"}
          target="_blank"
          onMouseOver={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <Button className="text-foreground font-semibold bg-transparent border border-secondary rounded-full p-6 hover:border-transparent hover:bg-transparent transition-all duration-300">
            Send a message
          </Button>
        </Link>
        <Link
          href={"https://linkedin.com/in/hamza--khan"}
          target="_blank"
          onMouseOver={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <Button className="text-foreground font-semibold bg-transparent border border-secondary rounded-full p-6 hover:border-transparent hover:bg-transparent transition-all duration-300">
            Let&apos;s connect
          </Button>
        </Link>
      </div>
    </motion.section>
  );
}
