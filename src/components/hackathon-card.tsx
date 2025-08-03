import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, MapPinIcon } from "lucide-react";
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
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={image} alt={title} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-1 flex-col justify-start gap-1">
          <h2 className="font-semibold leading-none">{title}</h2>
          {dates && (
            <time className="text-xs text-muted-foreground flex items-center gap-1">
              <CalendarIcon className="size-3"/>
              {dates}
            </time>
          )}
          {description && (
            <span className="mt-1 prose dark:prose-invert text-sm text-muted-foreground">
              {description}
            </span>
          )}
        </div>
        {location && (
          <div><p className="text-sm text-muted-foreground flex items-center gap-1">
            <MapPinIcon className="size-3"/>
            <div>{location}</div>
          </p></div>
        )}
      </div>

      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx}>
              <Badge key={idx} title={link.title} className="flex gap-2 bg-[#689d6a]/20 text-[#689d6a] border-[#689d6a]/40 hover:bg-[#689d6a]/30 hover:text-[#458588] hover:border-[#689d6a] dark:bg-[#689d6a]/20 dark:text-[#8ec07c] dark:border-[#689d6a]/30 dark:hover:bg-[#689d6a]/30 dark:hover:text-[#a8cc8c] transition-colors duration-200" variant="outline">
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
