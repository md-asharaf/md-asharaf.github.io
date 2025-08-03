"use client";
import { GridBeamsBackground } from "@/components/ui/background-beams";
import { useCurrentTheme } from "@/hooks/use-theme";

export function ThemeAwareBackground() {
  const currentTheme = useCurrentTheme();
  
  return (
    <GridBeamsBackground 
      gridType={currentTheme === "dark" ? "normal" : "dot"} 
      className="fixed inset-0 -z-10"
    >
      <></>
    </GridBeamsBackground>
  );
}
