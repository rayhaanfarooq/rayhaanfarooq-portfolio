"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon, PenLineIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = "";
      for (const item of navItems) {
        const element = document.getElementById(item.href.replace("#", ""));
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 180) {
          current = item.href.replace("#", "");
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border px-3 py-2 transition-all duration-500",
          scrolled
            ? "border-border/70 bg-background/82 shadow-[0_24px_60px_-35px_rgba(15,23,42,0.42)] backdrop-blur-2xl"
            : "border-border/45 bg-white/45 backdrop-blur-xl dark:bg-black/15"
        )}
      >
        <Link
          href="/"
          className="rounded-full px-3 py-2 transition-opacity duration-200 hover:opacity-75"
        >
          <span className="hidden font-display text-xl leading-none sm:block">
            Rayhaan Farooq
          </span>
          <span className="font-display text-xl leading-none sm:hidden">RF</span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-border/60 bg-background/60 p-1.5 backdrop-blur-xl lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  isActive
                    ? "bg-foreground text-background shadow-sm"
                    : "text-muted-foreground hover:bg-background/80 hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Link
            href="/blog"
            className="hidden items-center gap-2 rounded-full border border-border/60 bg-background/60 px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-background hover:text-foreground md:inline-flex"
          >
            <PenLineIcon className="size-4" />
            Journal
          </Link>

          {Object.entries(DATA.contact.social)
            .filter(([_, social]) => social.navbar)
            .map(([name, social]) => (
              <Link
                key={name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border/60 bg-background/60 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-background hover:text-foreground"
                aria-label={social.name}
              >
                <social.icon className="size-[17px]" />
              </Link>
            ))}

          <div className="pl-1">
            <ModeToggle />
          </div>

          <Link
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-all duration-300 hover:opacity-95 xl:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRightIcon className="size-4" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
