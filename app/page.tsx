// app/page.tsx
import React from "react";
import IFCViewer from "../components/IFCViewer";

export default function HomePage() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <IFCViewer />
    </div>
  );
}
