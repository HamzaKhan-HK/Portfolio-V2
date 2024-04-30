"use client";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { useContext } from "react";
import { CursorContext } from "@/context/CursorContext";

export default function Header() {
  const { setIsHovered } = useContext(CursorContext);

  return (
    <header className="flex items-center justify-between font-semibold px-12 pt-12 max-w-7xl m-auto">
      <Link
        href={"/"}
        onMouseOver={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <h2>Hamza Khan</h2>
      </Link>
      <ModeToggle />
    </header>
  );
}
