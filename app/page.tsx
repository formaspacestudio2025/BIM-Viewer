import React from "react";
import IFCViewer from "../components/IFCViewer";

export default function HomePage() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <IFCViewer modelPath="/models/sample.ifc" />
    </div>
  );
}
