// components/IFCViewer.tsx
"use client"; // <-- Add this line at the very top

import React, { useEffect, useRef } from "react";

interface IFCViewerProps {
  modelPath: string;
}

const IFCViewer: React.FC<IFCViewerProps> = ({ modelPath }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    console.log("Load IFC model:", modelPath);
    // TODO: Load your IFC model with three.js or web-ifc-viewer
  }, [modelPath]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

export default IFCViewer;
