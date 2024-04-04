// Styles
import "./globals.css";

// Assets
import { SpaceGroteskLight } from "@/styles/fonts";

// Types
import type { Metadata } from "next";

// Components
import { Header, Footer, LayoutWrapper } from "@/components/layout";

export const metadata: Metadata = {
  title: "Artifarti.",
  description: "For the artsy side in you.",
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
        <LayoutWrapper>
          <Header />
          {children}
          <Footer />
        </LayoutWrapper>
      </body>
    </html>
  );
}
