"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  const getSectionHref = (hash: string) =>
    pathname === "/" ? hash : `/${hash}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      let current = "";
      for (const item of navItems) {
        const element = document.getElementById(item.href.slice(1));
        if (element && element.getBoundingClientRect().top <= 200) {
          current = item.href.slice(1);
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={cn(
          "flex w-full max-w-5xl items-center justify-between gap-2 rounded-full border py-1.5 pl-2 pr-1.5 transition-all duration-500",
          scrolled
            ? "border-border bg-background/70 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5 rounded-full py-1 pl-1 pr-3"
        >
          <span className="relative size-8 shrink-0 overflow-hidden rounded-full ring-1 ring-border">
            <Image
              src={DATA.avatarUrl}
              alt={DATA.name}
              fill
              sizes="32px"
              className="object-cover object-[60%_38%] scale-[1.35]"
              priority
            />
          </span>
          <span className="hidden text-sm font-medium tracking-tight sm:block">
            {DATA.name}
          </span>
        </Link>

        <div className="hidden items-center md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <Link
                key={item.href}
                href={getSectionHref(item.href)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors duration-300",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-secondary"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/blog"
            className={cn(
              "rounded-full px-4 py-2 text-sm transition-colors duration-300",
              pathname.startsWith("/blog")
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            Blog
          </Link>
        </div>

        <div className="flex items-center gap-1">
          {Object.entries(DATA.contact.social)
            .filter(([, social]) => social.navbar)
            .map(([name, social]) => (
              <Link
                key={name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors duration-300 hover:bg-secondary hover:text-foreground"
                aria-label={social.name}
              >
                <social.icon className="size-4" />
              </Link>
            ))}
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
