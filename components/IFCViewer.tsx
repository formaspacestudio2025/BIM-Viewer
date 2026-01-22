"use client";

import React, { useEffect, useRef } from "react";
// @ts-ignore
import { Viewer as IFCViewer } from "web-ifc-viewer/dist/index.js";
import * as THREE from "three";

interface IFCViewerProps {
  modelPath: string;
}

const IFCViewerComponent: React.FC<IFCViewerProps> = ({ modelPath }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const viewer = new IFCViewer({
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

export default IFCViewerComponent;
