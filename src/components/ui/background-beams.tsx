"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

export const GridBackground = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center",
        className
      )}
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
};

export const GridSmallBackground = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "min-h-screen w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center",
        className
      )}
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
};

export const DotBackground = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "min-h-screen w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center",
        className
      )}
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
};

export const GridBeamsBackground = ({
  children,
  className,
  gridType = "normal",
}: {
  children: React.ReactNode;
  className?: string;
  gridType?: "normal" | "small" | "dot";
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const beams = [
    // Left half (8 beams: 0-50vw)
    {
      initialX: "3vw",
      translateX: "3vw",
      duration: 5.6, // 20% faster (7 * 0.8)
      repeatDelay: 5,
      delay: 2,
    },
    {
      initialX: "9vw",
      translateX: "9vw",
      duration: 3.2, // fast
      repeatDelay: 6,
      delay: 1,
      className: "h-8",
    },
    {
      initialX: "15vw",
      translateX: "15vw",
      duration: 2.4, // 20% faster (3 * 0.8) - fast
      repeatDelay: 8,
      delay: 4,
    },
    {
      initialX: "21vw",
      translateX: "21vw",
      duration: 6.4, // medium-slow
      repeatDelay: 4,
      delay: 3,
      className: "h-10",
    },
    {
      initialX: "27vw",
      translateX: "27vw",
      duration: 5.6, // 20% faster (7 * 0.8) - medium
      repeatDelay: 3,
      className: "h-6",
    },
    {
      initialX: "33vw",
      translateX: "33vw",
      duration: 8.8, // 20% faster (11 * 0.8) - slow
      repeatDelay: 9,
      delay: 4,
      className: "h-20",
    },
    {
      initialX: "39vw",
      translateX: "39vw",
      duration: 3.2, // 20% faster (4 * 0.8) - fast
      repeatDelay: 4,
      className: "h-12",
    },
    {
      initialX: "45vw",
      translateX: "45vw",
      duration: 4.8, // 20% faster (6 * 0.8) - medium
      repeatDelay: 7,
      delay: 2,
      className: "h-6",
    },
    // Right half (8 beams: 51-97vw)
    {
      initialX: "51vw",
      translateX: "51vw",
      duration: 2.4, // 20% faster (3 * 0.8) - fast
      repeatDelay: 6,
      delay: 1,
      className: "h-8",
    },
    {
      initialX: "57vw",
      translateX: "57vw",
      duration: 5.6, // medium
      repeatDelay: 5,
      delay: 3,
      className: "h-14",
    },
    {
      initialX: "63vw",
      translateX: "63vw",
      duration: 6.4, // medium-slow
      repeatDelay: 5,
      delay: 3,
      className: "h-10",
    },
    {
      initialX: "69vw",
      translateX: "69vw",
      duration: 3.6, // fast
      repeatDelay: 4,
      delay: 5,
      className: "h-4",
    },
    {
      initialX: "75vw",
      translateX: "75vw",
      duration: 8.8, // slow
      repeatDelay: 8,
      delay: 2,
      className: "h-20",
    },
    {
      initialX: "81vw",
      translateX: "81vw",
      duration: 4.8, // medium
      repeatDelay: 6,
      delay: 1,
      className: "h-12",
    },
    {
      initialX: "87vw",
      translateX: "87vw",
      duration: 2.4, // fast
      repeatDelay: 6,
      delay: 4,
      className: "h-14",
    },
    {
      initialX: "93vw",
      translateX: "93vw",
      duration: 5.6, // medium
      repeatDelay: 7,
      delay: 1,
      className: "h-8",
    },
  ];

  const getGridClass = () => {
    switch (gridType) {
      case "small":
        return "dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]";
      case "dot":
        return "dark:bg-dot-white/[0.2] bg-dot-black/[0.2]";
      default:
        return "dark:bg-grid-white/[0.2] bg-grid-black/[0.2]";
    }
  };

  return (
    <div
      ref={parentRef}
      className={cn(
        "min-h-screen w-full relative flex items-center justify-center overflow-hidden",
        className
      )}
    >
      {/* Your custom Gruvbox gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f2e5bc] via-[#ebdbb2] to-[#d5c4a1] dark:from-[#282828] dark:via-[#32302f] dark:to-[#3c3836]"></div>
      
      {/* Grid/Dot pattern overlay - subtle but visible */}
      <div 
        className={cn(
          "absolute inset-0",
          getGridClass()
        )}
        style={{ opacity: 0.5 }}
      ></div>
      
      {/* Beams */}
      {beams.map((beam) => (
        <CollisionMechanism
          key={beam.initialX + "beam-idx"}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}

      {children}
      
      {/* Collision target */}
      <div
        ref={containerRef}
        className="absolute bottom-0 w-full inset-x-0 pointer-events-none h-4"
      ></div>
    </div>
  );
};

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const beams = [
    {
      initialX: 10,
      translateX: 10,
      duration: 7,
      repeatDelay: 3,
      delay: 2,
    },
    {
      initialX: 600,
      translateX: 600,
      duration: 3,
      repeatDelay: 3,
      delay: 4,
    },
    {
      initialX: 100,
      translateX: 100,
      duration: 7,
      repeatDelay: 7,
      className: "h-6",
    },
    {
      initialX: 400,
      translateX: 400,
      duration: 5,
      repeatDelay: 14,
      delay: 4,
    },
    {
      initialX: 800,
      translateX: 800,
      duration: 11,
      repeatDelay: 2,
      className: "h-20",
    },
    {
      initialX: 1000,
      translateX: 1000,
      duration: 4,
      repeatDelay: 2,
      className: "h-12",
    },
    {
      initialX: 1200,
      translateX: 1200,
      duration: 6,
      repeatDelay: 4,
      delay: 2,
      className: "h-6",
    },
  ];

  return (
    <div
      ref={parentRef}
      className={cn(
        "min-h-screen w-full bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 relative flex items-center justify-center overflow-hidden",
        className
      )}
    >
      {beams.map((beam) => (
        <CollisionMechanism
          key={beam.initialX + "beam-idx"}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}

      {children}
      <div
        ref={containerRef}
        className="absolute bottom-0 bg-neutral-100 w-full inset-x-0 pointer-events-none"
        style={{
          boxShadow:
            "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
        }}
      ></div>
    </div>
  );
};

const CollisionMechanism = React.forwardRef<
  HTMLDivElement,
  {
    containerRef: React.RefObject<HTMLDivElement>;
    parentRef: React.RefObject<HTMLDivElement>;
    beamOptions?: {
      initialX?: number | string;
      translateX?: number | string;
      initialY?: number;
      translateY?: number;
      rotate?: number;
      className?: string;
      duration?: number;
      delay?: number;
      repeatDelay?: number;
    };
  }
>(({ parentRef, containerRef, beamOptions = {} }, ref) => {
  const beamRef = useRef<HTMLDivElement>(null);
  const [collision, setCollision] = useState<{
    detected: boolean;
    coordinates: { x: number; y: number } | null;
  }>({
    detected: false,
    coordinates: null,
  });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

  useEffect(() => {
    const checkCollision = () => {
      if (
        beamRef.current &&
        containerRef.current &&
        parentRef.current &&
        !cycleCollisionDetected
      ) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        if (beamRect.bottom >= containerRect.top) {
          const relativeX =
            beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;

          setCollision({
            detected: true,
            coordinates: {
              x: relativeX,
              y: relativeY,
            },
          });
          setCycleCollisionDetected(true);
        }
      }
    };

    const animationInterval = setInterval(checkCollision, 50);

    return () => clearInterval(animationInterval);
  }, [cycleCollisionDetected, containerRef]);

  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
      }, 2000);

      setTimeout(() => {
        setBeamKey((prevKey) => prevKey + 1);
      }, 2000);
    }
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{
          translateY: beamOptions.initialY || "-200px",
          translateX: beamOptions.initialX || "0px",
          rotate: beamOptions.rotate || 0,
        }}
        variants={{
          animate: {
            translateY: beamOptions.translateY || "1800px",
            translateX: beamOptions.translateX || "0px",
            rotate: beamOptions.rotate || 0,
          },
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        className={cn(
          "absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent",
          beamOptions.className
        )}
      />
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            className=""
            style={{
              left: `${collision.coordinates.x}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
});

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  const spans = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
      ></motion.div>
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
          }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"
        />
      ))}
    </div>
  );
};
