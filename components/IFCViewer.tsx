"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { IfcViewerAPI } from "web-ifc-viewer";

export default function IFCViewer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const viewer = new IfcViewerAPI({
      container: containerRef.current,
      backgroundColor: new THREE.Color(0xffffff),
    });

    // 🔑 THIS IS THE CRITICAL LINE
    viewer.IFC.setWasmPath("/wasm/");

    viewer.grid.setGrid();
    viewer.axes.setAxes();

    viewer.IFC.loadIfcUrl("/models/sample.ifc")
      .then(() => {
        console.log("✅ IFC loaded");
      })
      .catch(console.error);

    return () => viewer.dispose();
  }, []);

  return <div ref={containerRef} style={{ width: "100vw", height: "100vh" }} />;
}
