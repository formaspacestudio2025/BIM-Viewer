"use client";

import React, { useEffect, useRef } from "react";
import Viewer from "web-ifc-viewer"; // <- default import
import * as THREE from "three";

interface IFCViewerProps {
  modelPath: string;
}

const IFCViewer: React.FC<IFCViewerProps> = ({ modelPath }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const viewer = new Viewer({
      container: containerRef.current,
      backgroundColor: new THREE.Color(0xffffff),
    });

    viewer.IFC.loadIfcUrl(modelPath).then(() => {
      viewer.axes.setAxes();
      viewer.grid.setGrid();
      console.log("IFC model loaded:", modelPath);
    });

    return () => viewer.dispose();
  }, [modelPath]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

export default IFCViewer;
