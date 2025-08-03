"use client";

import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

export function RealTimeClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-IN', { 
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setTime(timeString);
    };

    // Update immediately
    updateTime();
    
    // Update every second
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Badge variant="outline" className="flex items-center gap-1 hover:border-[#d79921] transition-colors group cursor-pointer border-[#928374] dark:border-[#665c54]">
      <svg className="size-3 transition-colors group-hover:text-[#d79921]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
        <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="currentColor"/>
      </svg>
      <span className="tabular-nums transition-colors group-hover:text-[#d79921]">
        {time} IST
      </span>
    </Badge>
  );
}
