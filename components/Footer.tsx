"use client";

import Clock from "react-live-clock";

export default function Footer() {
  return (
    <footer className="mt-40 px-12 pb-12 flex justify-between font-semibold max-w-7xl m-auto">
      <p>© 2024</p>
      <div>
        <Clock format={"h:mm:ssa"} ticking={true} />
      </div>
    </footer>
  );
}
