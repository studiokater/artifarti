// Styles
import "./globals.css";

// Assets
import { SpaceGroteskLight } from "@/styles/fonts";

// Types
import type { Metadata } from "next";

// Components
import { ThemeProvider } from "@/components/themeprovider";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Artifarti.",
  description: "Everyone's an artist.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${SpaceGroteskLight.className} flex min-h-screen flex-col px-24`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
