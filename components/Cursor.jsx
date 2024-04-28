"use client";

import { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { CursorContext } from "@/context/CursorContext";

export default function Cursor() {
  const { isHovered } = useContext(CursorContext);

  const mouse = useRef({ x: 0, y: 0 });
  const circles = useRef([]);
  const size = isHovered ? 100 : 30;
  const delay = isHovered ? 0.065 : 0.03;

  const colors = ["#c32d27", "#f5c63f", "#457ec4", "#356fdb"];

  const delayedMouse = useRef({
    x: 0,
    y: 0,
  });

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;

    mouse.current = {
      x: clientX,
      y: clientY,
    };
  };

  const moveCircle = (x, y) => {
    circles.current.forEach((circle, i) =>
      gsap.set(circle, { x, y, xPercent: -50, yPercent: -50 })
    );
  };

  const animate = () => {
    const { x, y } = delayedMouse.current;

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    };

    moveCircle(delayedMouse.current.x, delayedMouse.current.y);
    window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <>
      {colors.map((color, i, array) => (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          ref={(ref) => (circles.current[i] = ref)}
          key={i}
          style={{
            backgroundColor: color,
            width: size,
            height: size,
            filter: `blur(${isHovered ? 5 : 2}px)`,
            transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out, transform ${
              (array.length - i) * delay
            }s ease-out`,
          }}
          className="top-0 left-0 fixed rounded-full -z-10 mix-blend-difference pointer-events-none hidden md:block"
        />
      ))}
    </>
  );
}
