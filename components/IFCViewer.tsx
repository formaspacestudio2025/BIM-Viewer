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

    const viewer = new IfcViewerAPI({
      container: containerRef.current,
      backgroundColor: new THREE.Color(0xffffff),
      wasmPath: "/web-ifc.wasm", // relative to public folder
    });

    viewer.grid.setGrid();
    viewer.axes.setAxes();

    viewer.IFC.loadIfcUrl(modelPath).then(() => {
      console.log("IFC model loaded", modelPath);
    });

    // Cleanup
    return () => viewer.dispose();
  }, [modelPath]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

export default IFCViewer;
