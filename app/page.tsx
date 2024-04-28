"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CursorContext } from "@/context/CursorContext";
import { PROJECTS } from "@/lib/projects";
import { motion } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";

export default function Home() {
  const { setIsHovered } = useContext(CursorContext);

  return (
    <>
      <Hero />
      <About />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-40"
      >
        <div className="space-y-5">
          <h3 className="text-2xl font-bold md:text-4xl">Personal Work</h3>
          <Separator />
        </div>
      </motion.div>
      {PROJECTS.map((project, i) => (
        <Projects
          key={i}
          title={project.title}
          description={project.description}
          image={project.image}
          tools={project.tools}
          link={project.link}
        />
      ))}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-24 grid md:grid-cols-2"
      >
        <Link
          href={"https://github.com/HamzaKhan-HK"}
          target="_blank"
          onMouseOver={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="flex items-center gap-1 hover:underline w-fit h-fit md:col-start-2"
        >
          <p>View all projects</p>
          <SquareArrowOutUpRight className="size-4" />
        </Link>
      </motion.div>
      <Contact />
    </>
  );
}
