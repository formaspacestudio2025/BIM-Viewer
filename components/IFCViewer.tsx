// components/IFCViewer.tsx
"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { IfcViewerAPI } from "web-ifc-viewer";

interface IFCViewerProps {
  modelPath?: string; // optional, default to sample.ifc
}

const IFCViewer: React.FC<IFCViewerProps> = ({ modelPath = "/models/sample.ifc" }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize the viewer
    const viewer = new IfcViewerAPI({
      container: containerRef.current,
      backgroundColor: new THREE.Color(0xffffff),
      wasmPath: "/wasm/web-ifc.wasm", // Correct path to your wasm
    });

    // Add grid and axes
    viewer.grid.setGrid();
    viewer.axes.setAxes();

    // Load IFC model
    viewer.IFC.loadIfcUrl(modelPath)
      .then(() => {
        console.log("IFC model loaded successfully:", modelPath);
      })
      .catch((err) => {
        console.error("Error loading IFC:", err);
      });

    // Cleanup on unmount
    return () => {
      viewer.dispose();
    };
  }, [modelPath]);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100vh" }}
    />
  );
};

export default IFCViewer;
