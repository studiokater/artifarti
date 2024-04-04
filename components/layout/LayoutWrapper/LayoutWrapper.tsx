// "use client";

// Providers
import { ThemeProvider } from "@/components/theme-provider";
// import { Lenis } from "@studio-freight/react-lenis";

// Types
import { LayoutWrapperProps } from "./LayoutWrapper.type";

export const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  return (
    // <Lenis>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
    // </Lenis>
  );
};
