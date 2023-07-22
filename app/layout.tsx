// Styles
import "./globals.css";

// Types
import type { Metadata } from "next";

// Components
import { ThemeProvider } from "@/components/themeprovider";

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
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
