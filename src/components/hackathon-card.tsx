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
              <CalendarIcon className="size-3" />
              {dates}
            </time>
          )}

        </div>
        {location && (
          <div><p className="text-sm text-muted-foreground flex items-center gap-1">
            <MapPinIcon className="size-3" />
            <div>{location}</div>
          </p></div>
        )}
      </div>
      {description && (
        <span className="mt-1 prose dark:prose-invert text-sm text-muted-foreground">
          {description}
        </span>
      )}
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx}>
              <Badge key={idx} title={link.title} className="flex gap-2 px-3 py-2 text-xs font-semibold bg-transparent text-black border-black/50 hover:text-green-500 hover:border-green-500 dark:text-white dark:border-white/50 dark:hover:text-green- dark:hover:border-green-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105" variant="outline">
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
