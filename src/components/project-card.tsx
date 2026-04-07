import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  const hasPrimaryLink = Boolean(href?.trim());
  const primaryIsExternal = href?.startsWith("http");

  const media = video ? (
    <video
      src={video}
      autoPlay
      loop
      muted
      playsInline
      className="h-60 w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
    />
  ) : image ? (
    <Image
      src={image}
      alt={title}
      width={900}
      height={620}
      className="h-60 w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
    />
  ) : (
    <div className="relative h-60 overflow-hidden bg-[linear-gradient(145deg,rgba(18,38,63,0.98),rgba(11,20,38,0.9))]">
      <div className="absolute -right-8 top-0 h-36 w-36 rounded-full bg-[#f29c64]/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-[#0f8a7a]/20 blur-3xl" />
      <div className="relative flex h-full flex-col justify-between p-6 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
          Selected build
        </p>
        <div>
          <p className="font-display text-5xl leading-none tracking-[-0.04em]">
            {title.charAt(0)}
          </p>
          <p className="mt-3 text-sm text-white/72">{dates}</p>
        </div>
      </div>
    </div>
  );

  const mediaWrapperClassName = "block overflow-hidden rounded-[1.5rem]";

  return (
    <article
      className={cn(
        "group section-shell soft-outline flex h-full flex-col p-3",
        className
      )}
    >
      {hasPrimaryLink ? (
        <Link
          href={href!}
          target={primaryIsExternal ? "_blank" : undefined}
          rel={primaryIsExternal ? "noopener noreferrer" : undefined}
          className={mediaWrapperClassName}
        >
          {media}
        </Link>
      ) : (
        <div className={mediaWrapperClassName}>{media}</div>
      )}

      <div className="flex flex-1 flex-col px-3 pb-3 pt-5 sm:px-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold leading-tight">{title}</h3>
              {hasPrimaryLink ? (
                <ArrowUpRightIcon className="size-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              ) : null}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{dates}</p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground line-clamp-4">
          {description}
        </p>

        <div className="mt-5 space-y-4">
          {tags.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge
                  variant="secondary"
                  className="rounded-full border border-border/60 bg-background/70 px-3 py-1.5 text-[11px]"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          ) : null}

          {links && links.length > 0 ? (
            <div className="mt-auto flex flex-wrap gap-2">
              {links.map((link) =>
                link.href ? (
                  <Link
                    href={link.href}
                    key={link.type}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border/65 bg-white/70 px-3 py-2 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-white dark:bg-white/[0.05] dark:hover:bg-white/[0.08]"
                  >
                    {link.icon}
                    {link.type}
                    <ArrowUpRightIcon className="size-3.5" />
                  </Link>
                ) : (
                  <span
                    key={link.type}
                    className="inline-flex items-center gap-2 rounded-full border border-dashed border-border/80 px-3 py-2 text-xs font-medium text-muted-foreground"
                  >
                    {link.icon}
                    {link.type}
                  </span>
                )
              )}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
