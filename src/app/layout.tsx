import React from "react";
import { Providers } from "@/store/providers";
import MyApp from "./app";
import "./global.css";


export const metadata = {
  title: "Spike Demo",
  description: "Spike kit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <MyApp session={undefined}>{children}</MyApp>
        </Providers>
      </body>
    </html>
  );
}
