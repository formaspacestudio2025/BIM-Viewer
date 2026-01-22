// app/layout.tsx
import React from "react";

export const metadata = {
  title: "BIM Viewer",
  description: "Next.js App Router BIM Viewer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
