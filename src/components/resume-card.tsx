"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
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

  return (
    <div
      className="group flex gap-4 p-5 rounded-2xl border border-transparent hover:border-border/50 hover:bg-accent/50 transition-all duration-300 cursor-pointer"
      onClick={() => description && setIsExpanded(!isExpanded)}
    >
      <Avatar className="size-12 rounded-xl border shrink-0 bg-background">
        <AvatarImage
          src={logoUrl}
          alt={altText}
          className="object-contain"
        />
        <AvatarFallback className="rounded-xl text-sm font-medium">
          {altText[0]}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-x-2">
          <h3 className="inline-flex items-center gap-2 font-semibold text-sm sm:text-base leading-none">
            {title}
            {badges &&
              badges.map((badge, index) => (
                <Badge
                  variant="secondary"
                  className="text-[10px] sm:text-xs"
                  key={index}
                >
                  {badge}
                </Badge>
              ))}
            {description && (
              <ChevronRightIcon
                className={cn(
                  "size-4 text-muted-foreground transition-transform duration-300 opacity-0 group-hover:opacity-100",
                  isExpanded ? "rotate-90" : "rotate-0"
                )}
              />
            )}
          </h3>
          <span className="text-xs sm:text-sm tabular-nums text-muted-foreground whitespace-nowrap">
            {period}
          </span>
        </div>
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        )}
        {description && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="overflow-hidden"
          >
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              {description}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
