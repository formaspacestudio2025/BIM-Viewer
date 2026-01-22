"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
// Import the correct class
import { IfcViewerAPI } from "web-ifc-viewer";

interface IFCViewerProps {
  modelPath: string;
}

const IFCViewer: React.FC<IFCViewerProps> = ({ modelPath }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize the viewer
    const viewer = new IfcViewerAPI({
      container: containerRef.current,
      backgroundColor: new THREE.Color(0xffffff),
      wasmPath: "C:\Users\Formaspace Studio\bim-viewer\public\web-ifc.wasm",  // <-- add this line
    });

    // Optional: Add grid and axes
    viewer.grid.setGrid();
    viewer.axes.setAxes();

    // Load the IFC model
    viewer.IFC.loadIfcUrl(modelPath).then(() => {
      console.log("IFC model loaded", modelPath);
    });

    // Cleanup
    return () => viewer.dispose();
  }, [modelPath]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

export default IFCViewer;
