import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEPATU",
  description: "For fresh feet.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
