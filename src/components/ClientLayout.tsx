"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="flex flex-col h-screen lg:flex-row">
      {isMobile ? <Navbar /> : <SideBar />}
      <main className="flex-1">{children}</main>
    </div>
  );
}
