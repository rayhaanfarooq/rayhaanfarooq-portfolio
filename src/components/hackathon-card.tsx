import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

interface Props {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  links?: readonly {
    icon: ReactNode;
    title: string;
    href: string;
  }[];
}

export function HackathonCard({
  title,
  description,
  dates,
  location,
  image,
  links,
}: Props) {
  return (
    <li className="section-shell soft-outline list-none p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border/80">
      <div className="flex gap-4">
        <Avatar className="size-12 rounded-2xl border border-border/60 bg-background shrink-0">
          <AvatarImage
            src={image}
            alt={title}
            className="object-contain p-1"
          />
          <AvatarFallback className="rounded-2xl text-sm font-medium">
            {title[0]}
          </AvatarFallback>
        </Avatar>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-base font-semibold leading-tight sm:text-lg">
                {title}
              </h3>
              {location ? (
                <p className="mt-1 text-sm text-muted-foreground">{location}</p>
              ) : null}
            </div>

            <p className="shrink-0 text-sm text-muted-foreground">{dates}</p>
          </div>

          {description ? (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
              {description}
            </p>
          ) : null}

          {links && links.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {links.map((link) =>
                link.href ? (
                  <Link
                    href={link.href}
                    key={link.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border/65 bg-white/70 px-3 py-2 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-white dark:bg-white/[0.05] dark:hover:bg-white/[0.08]"
                  >
                    {link.icon}
                    {link.title}
                    <ArrowUpRightIcon className="size-3.5" />
                  </Link>
                ) : (
                  <span
                    key={link.title}
                    className="inline-flex items-center gap-2 rounded-full border border-dashed border-border/80 px-3 py-2 text-xs font-medium text-muted-foreground"
                  >
                    {link.icon}
                    {link.title}
                  </span>
                )
              )}
            </div>
          ) : null}
        </div>
      </div>
    </li>
  );
}
