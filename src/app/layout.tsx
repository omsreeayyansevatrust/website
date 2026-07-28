import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Om Sree Ayyan Seva Trust",
  description: "Serving Humanity with Compassion, Dignity and Hope",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}