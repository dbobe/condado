"use client";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

export default function TopOrSideNav() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // Initial check
    updateScreenSize();

    // Add resize listener
    window.addEventListener("resize", updateScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return <>{isLargeScreen ? <SideBar /> : <Navbar />}</>;
}
