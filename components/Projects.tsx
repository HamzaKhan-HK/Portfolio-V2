"use client";

import { CursorContext } from "@/context/CursorContext";
import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description?: string;
  image: string;
  tools?: string[];
  link: string;
}

export default function Projects({
  title,
  description,
  image,
  tools,
  link,
}: ProjectProps) {
  const { setIsHovered } = useContext(CursorContext);

  return (
    <section>
      <div className="mt-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 font-semibold"
        >
          <Link
            href={link}
            target="_blank"
            className="flex items-center gap-1 hover:underline w-fit h-fit"
            onMouseOver={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            <h4>{title}</h4>
            <SquareArrowOutUpRight className="size-4" />
          </Link>
          <div className="space-y-6 mt-8 md:mt-0">
            <p>{description}</p>
            <div className="w-full flex items-center flex-wrap gap-2">
              {tools?.map((tool, i) => (
                <div
                  key={i}
                  className="border border-secondary rounded-full px-4 py-2"
                >
                  <p className="whitespace-nowrap text-sm">{tool}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src={image}
            alt={title}
            width={1986}
            height={1117}
            className="mt-20 rounded-md"
          />
        </motion.div>
      </div>
    </section>
  );
}
