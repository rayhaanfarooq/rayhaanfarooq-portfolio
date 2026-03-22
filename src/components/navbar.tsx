"use client";

import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { PenLineIcon } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.replace("#", ""));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-2xl border-b border-border/40 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-lg tracking-tight hover:opacity-70 transition-opacity duration-200"
        >
          RF
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[13px] font-medium transition-all duration-200 relative",
                activeSection === item.href.replace("#", "")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
              {activeSection === item.href.replace("#", "") && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-foreground" />
              )}
            </Link>
          ))}
          <Link
            href="/blog"
            className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-all duration-200 inline-flex items-center gap-1.5"
          >
            <PenLineIcon className="size-3.5" />
            Blog
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {Object.entries(DATA.contact.social)
            .filter(([_, social]) => social.navbar)
            .map(([name, social]) => (
              <Link
                key={name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <social.icon className="size-[18px]" />
              </Link>
            ))}
          <div className="w-px h-4 bg-border/60" />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
