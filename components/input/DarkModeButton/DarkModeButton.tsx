"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/shadcn/ui";

/**
 * A button component that toggles between light and dark mode.
 */
export function DarkModeButton() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      size="icon"
      className="h-14 w-14 rounded-full"
      id="dark-mode-button"
      onClick={
        theme === "light" ? () => setTheme("dark") : () => setTheme("light")
      }
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
