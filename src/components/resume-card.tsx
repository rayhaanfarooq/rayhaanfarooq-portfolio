"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRightIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const expandable = Boolean(description);

  return (
    <article
      className={cn(
        "section-shell soft-outline p-5 transition-all duration-300",
        expandable
          ? "cursor-pointer hover:-translate-y-0.5 hover:border-border/80"
          : "hover:border-border/80"
      )}
      onClick={() => expandable && setIsExpanded(!isExpanded)}
    >
      <div className="flex gap-4">
        <Avatar className="size-12 rounded-2xl border border-border/60 bg-background shrink-0">
          <AvatarImage
            src={logoUrl}
            alt={altText}
            className="object-contain p-1"
          />
          <AvatarFallback className="rounded-2xl text-sm font-medium">
            {altText[0]}
          </AvatarFallback>
        </Avatar>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                {href ? (
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-base font-semibold leading-tight transition-opacity duration-200 hover:opacity-75 sm:text-lg"
                    onClick={(event) => event.stopPropagation()}
                  >
                    {title}
                    <ArrowUpRightIcon className="size-4 shrink-0 text-muted-foreground" />
                  </Link>
                ) : (
                  <h3 className="text-base font-semibold leading-tight sm:text-lg">
                    {title}
                  </h3>
                )}

                {expandable ? (
                  <ChevronRightIcon
                    className={cn(
                      "size-4 shrink-0 text-muted-foreground transition-transform duration-300",
                      isExpanded ? "rotate-90" : "rotate-0"
                    )}
                  />
                ) : null}
              </div>

              {subtitle ? (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {subtitle}
                </p>
              ) : null}
            </div>

            <p className="shrink-0 text-sm tabular-nums text-muted-foreground">
              {period}
            </p>
          </div>

          {badges && badges.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <Badge
                  key={badge}
                  variant="secondary"
                  className="rounded-full border border-border/60 bg-background/70 px-3 py-1 text-[11px]"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          ) : null}

          {description ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{
                duration: 0.35,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="overflow-hidden"
            >
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                {description}
              </p>
            </motion.div>
          ) : null}
        </div>
      </div>
    </article>
  );
};
