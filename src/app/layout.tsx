import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Planet Viewer",
  description: "A website about viewing information about planets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
