import dynamic from "next/dynamic";

const IFCViewer = dynamic(() => import("../components/IFCViewer"), {
  ssr: false,
});

export default function Page() {
  return <IFCViewer />;
}
