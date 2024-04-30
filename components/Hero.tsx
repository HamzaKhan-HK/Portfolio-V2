"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { CursorContext } from "@/context/CursorContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";

export default function Hero() {
  const { setIsHovered } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-start justify-end h-[calc(100vh-9rem)] gap-y-8 max-w-7xl m-auto px-12"
    >
      <h1 className="text-3xl font-bold max-w-4xl md:text-5xl">
        Creating modern and innovative websites for a unique digital experience.
      </h1>
      <div className="font-semibold flex items-center gap-16">
        <Link
          href={"mailto:hamzak1738@gmail.com"}
          target="_blank"
          onMouseOver={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="flex items-center gap-1 hover:underline w-fit h-fit"
        >
          Send a message
          <SquareArrowOutUpRight className="size-4" />
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
          className="flex items-center gap-1 hover:underline w-fit h-fit"
        >
          Let&apos;s connect
          <SquareArrowOutUpRight className="size-4" />
        </Link>
      </div>
    </motion.section>
  );
}
