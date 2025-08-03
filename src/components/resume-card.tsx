"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
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
  location?: string;
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
  location
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Card className="flex bg-transparent transition-all duration-300 hover:shadow-md hover:shadow-[#ff6188]/5 backdrop-blur-sm" >
      <div className="flex-none">
        <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
          <AvatarImage
            src={logoUrl}
            alt={altText}
            className="object-contain"
          />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-grow ml-4 items-center flex-col group cursor-pointer" onClick={handleClick}>
        <CardHeader>
          <div className="flex items-center justify-between gap-x-2 text-base">
            <div>
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                <Link href={href} className="hover:underline" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer">
                  {title}
                </Link>
                {badges && (
                  <span className="ml-2 inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="outline"
                        className="px-2 py-0.5 align-middle text-xs bg-transparent text-black border-black/30 hover:text-[#ff6188] hover:border-[#ff6188] dark:text-white dark:border-white/30 dark:hover:text-[#ff6188] dark:hover:border-[#ff6188] transition-colors duration-200"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}

                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
            </div>
            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
              <div>{period}</div>
              <div className="text-muted-foreground text-xs">{location}</div>
            </div>
          </div>
        </CardHeader>
        {description && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,

              height: isExpanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-2 text-xs sm:text-sm"
          >
            {description}
          </motion.div>
        )}
      </div>
    </Card>
  );
};
