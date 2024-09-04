"use client";
import React, { useEffect, useState } from "react";
import Toolbar from "./toolbar";
import Sidebar from "./sidebar";

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  });

  if (!isMounted) {
    return null;
  }
  return (
    <div className="h-full">
      <Toolbar />
      <div className="flex h-[calc(100vh-40px)] ">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default LayoutPage;
