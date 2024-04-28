"use client";

import { TOOLS } from "@/lib/tools";
import { Separator } from "./ui/separator";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="mt-40">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-5"
      >
        <h3 className="text-2xl font-bold md:text-4xl">About Me</h3>
        <Separator />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 mt-24 md:grid-cols-2"
      >
        <p className="font-semibold leading-normal col-start-1 md:col-start-2">
          My journey in tech began with my curiosity about how apps and websites
          transform ideas into reality. This curiosity turned into a passion as
          I delved into coding, eventually leading me to pursue formal education
          in the field.
          <br />
          <br />
          During my studies, I&apos;ve had the opportunity to work on a variety
          of projects, from developing sleek web applications to creating
          efficient algorithms that solve complex problems. I thrive in
          environments that challenge me to learn and grow, and I&apos;m always
          on the lookout for opportunities to apply my skills in real-world
          scenarios.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="font-semibold grid grid-cols-1 mt-24 md:grid-cols-2"
      >
        <p className="leading-normal col-start-1 md:col-start-2">
          I am always open and eager to learn new technologies, frameworks and
          libraries but my current tech stack consists of —
        </p>
        <div className="mt-12 flex flex-wrap gap-2 md:col-start-2">
          {TOOLS.map((tool, i) => (
            <div
              key={i}
              className="border border-secondary rounded-full px-4 py-2"
            >
              <p className="whitespace-nowrap text-sm">{tool}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
