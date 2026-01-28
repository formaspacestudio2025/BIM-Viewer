// app/page.tsx
"use client";  // <- add this at the top

import dynamic from "next/dynamic";

const IFCViewer = dynamic(() => import("../components/IFCViewer"), {
  ssr: false,
});

export default function Page() {
  return <IFCViewer />;
}
