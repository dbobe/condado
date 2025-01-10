"use client";

import { SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex flex-col p-4">
        <h1 className="text-3xl font-bold text-primary-foreground">
          Dashboard
        </h1>
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  const icon =
    resolvedTheme === "dark" ? <MoonIcon size={24} /> : <SunIcon size={24} />;

  return (
    <div className="flex flex-col p-4">
      <h1 className="text-3xl font-bold text-primary-foreground">Dashboard</h1>

      <div>
        <p>Theme setting: {theme}</p>
        <p>Actual theme: {resolvedTheme}</p>
        {icon}
        <button
          onClick={() => {
            if (theme === "light") setTheme("dark");
            else if (theme === "dark") setTheme("system");
            else setTheme("light");
          }}
        >
          {theme === "system" ? "System" : theme}
        </button>
      </div>
    </div>
  );
}
