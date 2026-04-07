"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="size-10 rounded-full border border-border/60 bg-background/60 backdrop-blur-xl hover:bg-background"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] text-muted-foreground dark:hidden" />
      <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] text-muted-foreground dark:block" />
    </Button>
  );
}
