import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
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
    <li className="flex gap-4 p-5 rounded-2xl hover:bg-accent/50 transition-all duration-300 list-none">
      <Avatar className="size-12 rounded-xl border shrink-0 bg-background">
        <AvatarImage src={image} alt={title} className="object-contain" />
        <AvatarFallback className="rounded-xl text-sm font-medium">
          {title[0]}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-sm sm:text-base leading-tight">
            {title}
          </h3>
          <span className="text-xs text-muted-foreground whitespace-nowrap shrink-0">
            {dates}
          </span>
        </div>
        {location && (
          <p className="text-xs text-muted-foreground mt-1">{location}</p>
        )}
        {description && (
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            {description}
          </p>
        )}
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {links.map((link, idx) => (
              <Link href={link.href} key={idx} target="_blank">
                <Badge variant="secondary" className="gap-1.5 text-xs">
                  {link.icon}
                  {link.title}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}
