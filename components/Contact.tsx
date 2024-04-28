"use client";

import Link from "next/link";
import { Separator } from "./ui/separator";
import { SquareArrowOutUpRight } from "lucide-react";
import { useContext } from "react";
import { CursorContext } from "@/context/CursorContext";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Contact() {
  const { setIsHovered } = useContext(CursorContext);

  return (
    <section className="mt-40">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-5"
      >
        <h3 className="text-2xl font-bold md:text-4xl">Contact</h3>
        <Separator />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-24 font-semibold grid grid-cols-1 md:grid-cols-2"
      >
        <div className="md:col-start-2 space-y-12">
          <div className="flex flex-col gap-4">
            <p>
              Let&apos;s get in touch. The best way to contact me is by email:
            </p>
            <Link
              href={"mailto:hamzak1738@gmail.com"}
              target="_blank"
              className="flex items-center gap-1 hover:underline w-fit"
              onMouseOver={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
            >
              <p>hamzak1738@gmail.com</p>
              <SquareArrowOutUpRight className="size-4" />
            </Link>
          </div>
          <div className="flex flex-col gap-4 font-semibold">
            <p>You can also find me on:</p>
            <div className="flex items-center gap-8">
              <Link
                href={"https://github.com/HamzaKhan-HK"}
                target="_blank"
                className="flex items-center gap-1 hover:underline"
                onMouseOver={() => {
                  setIsHovered(true);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                }}
              >
                <p>GitHub</p>
                <SquareArrowOutUpRight className="size-4" />
              </Link>
              <Link
                href={"https://linkedin.com/in/hamza--khan"}
                target="_blank"
                className="flex items-center gap-1 hover:underline"
                onMouseOver={() => {
                  setIsHovered(true);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                }}
              >
                <p>LinkedIn</p>
                <SquareArrowOutUpRight className="size-4" />
              </Link>
              <Link
                href={"https://read.cv/hamza_dev"}
                target="_blank"
                className="flex items-center gap-1 hover:underline"
                onMouseOver={() => {
                  setIsHovered(true);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                }}
              >
                <p>ReadCV</p>
                <SquareArrowOutUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        <Button
          className="mt-24 w-fit md:col-start-2 text-foreground font-semibold bg-transparent border border-secondary rounded-full p-6 hover:border-transparent hover:bg-transparent transition-all duration-300 "
          onMouseOver={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          onClick={() => {
            document.querySelector("#top")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Back to top
        </Button>
      </motion.div>
    </section>
  );
}
