"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { IfcViewerAPI } from "web-ifc-viewer";

interface IFCViewerProps {
  modelPath: string;
}

const IFCViewer: React.FC<IFCViewerProps> = ({ modelPath }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize viewer
    const viewer = new IfcViewerAPI({
      container: containerRef.current,
      backgroundColor: new THREE.Color(0xffffff),
      wasmPath: "/" // Must match /public/web-ifc.wasm
    });

    viewer.grid.setGrid();
    viewer.axes.setAxes();

    // Load IFC file
    (async () => {
      try {
        await viewer.IFC.loadIfcUrl(modelPath);
        console.log("IFC model loaded:", modelPath);

        // Fit camera to model
        viewer.context.camera.cameraControls.fitToFrame();
      } catch (err) {
        console.error("Error loading IFC:", err);
      }
    })();

    return () => viewer.dispose();
  }, [modelPath]);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
};

export default IFCViewer;
