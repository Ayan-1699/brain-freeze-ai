"use client";

import ThemeToggle from "../shared/ThemeToggle";

export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b px-8">
      <h2 className="text-xl font-semibold">
        Dashboard
      </h2>

      <div className="flex items-center gap-4">
        <ThemeToggle />

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
          A
        </div>
      </div>
    </header>
  );
}