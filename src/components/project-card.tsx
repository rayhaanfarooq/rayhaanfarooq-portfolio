import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

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
    icon: React.ReactNode;
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
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "group rounded-2xl border border-border/50 bg-card overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-border h-full flex flex-col",
        className
      )}
    >
      <Link href={href || "#"} className="block overflow-hidden">
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-52 object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : image ? (
          <Image
            src={image}
            alt={title}
            width={800}
            height={500}
            className="w-full h-52 object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-52 bg-gradient-to-br from-violet-100 via-fuchsia-50 to-indigo-100 dark:from-violet-950 dark:via-fuchsia-950 dark:to-indigo-950 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
            <span className="text-4xl font-bold bg-gradient-to-br from-violet-400 to-fuchsia-400 bg-clip-text text-transparent select-none">
              {title.charAt(0)}
            </span>
          </div>
        )}
      </Link>
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-base sm:text-lg leading-tight">
            {title}
          </h3>
          <span className="text-xs text-muted-foreground whitespace-nowrap mt-0.5 shrink-0">
            {dates}
          </span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>
        <div className="mt-auto space-y-3">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <Badge
                  variant="secondary"
                  className="text-[10px] sm:text-xs"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {links.map((link, idx) => (
                <Link href={link.href} key={idx} target="_blank">
                  <Badge className="gap-1.5 text-[10px] sm:text-xs">
                    {link.icon}
                    {link.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
