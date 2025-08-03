"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useCurrentTheme() {
  const { theme, systemTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const resolvedTheme = theme === "system" ? systemTheme : theme;
    setCurrentTheme(resolvedTheme === "dark" ? "dark" : "light");
  }, [theme, systemTheme]);

  return currentTheme;
}
