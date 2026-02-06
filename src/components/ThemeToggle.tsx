import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useCallback, useRef } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isAnimating = useRef(false);

  const toggleTheme = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const nextTheme = theme === "dark" ? "light" : "dark";
    const isDarkToLight = nextTheme === "light";

    // Create overlay
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      z-index: 9999;
      pointer-events: none;
      background: ${isDarkToLight ? "hsl(220, 30%, 98%)" : "hsl(230, 25%, 5%)"};
      clip-path: ${isDarkToLight ? "inset(100% 0 0 0)" : "inset(0 0 100% 0)"};
      transition: clip-path 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    `;
    document.body.appendChild(overlay);

    // Trigger animation
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        overlay.style.clipPath = "inset(0 0 0 0)";
      });
    });

    // Switch theme mid-animation, then reveal
    setTimeout(() => {
      setTheme(nextTheme);
      requestAnimationFrame(() => {
        overlay.style.transition = "opacity 0.3s ease-out";
        overlay.style.opacity = "0";
        setTimeout(() => {
          overlay.remove();
          isAnimating.current = false;
        }, 300);
      });
    }, 400);
  }, [theme, setTheme]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-9 w-9"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
