import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Md Asharaf",
  initials: "MA",
  url: "https://md-asharaf.dev",
  location: "Bhubaneswar, Odisha",
  locationLink: "https://www.google.com/maps/place/bhubaneswar",
  description:
    "Backend-focused Software Engineer. I love building scalable systems and solving complex problems.",
  summary:
    "A backend-focused developer with deep experience in the Node.js ecosystem, specializing in creating secure and high-performance APIs, authentication systems, and database architectures. I leverage my full-stack knowledge of Next.js and React to build cohesive applications, but my primary focus is on engineering the robust server-side solutions that power them.",
  avatarUrl: "https://ik.imagekit.io/yzxrxw4ib5/profile_2QzwM9QJt?updatedAt=1753862646104",
  skills: [
    "React",
    "Next.js",
    "Node.js",
    "Nest.js",
    "Express.js",
    "GraphQL",
    "Kafka",
    "Redis",
    "Postgres",
    "MongoDB",
    "Docker",
    "Typescript",
    "Python",
    "Java",
    "C++",
    "Go",
    // "Kubernetes",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mdasharaf.dev@gmail.com",
    tel: "+916202377537",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/md-asharaf",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/md-asharaf/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Discord:{
        name: "Discord",
        url: "https://discord.com/users/791172205609746433",
        icon: Icons.discord,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/_md_asharaf",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Techsolace",
      href: "https://techsolace.com",
      badges: [],
      location: "Remote",
      title: "Backend Developer (Intern)",
      logoUrl: "https://ik.imagekit.io/yzxrxw4ib5/techsolace.jpg?updatedAt=1753858721765",
      start: "June 2024",
      end: "Present",
      description:
        "Developing scalable backend systems and APIs. Working with modern technologies including Node.js, TypeScript, and cloud infrastructure to build robust applications.",
    },
    {
      company: "NazraSoft",
      badges: [],
      href: "https://www.nazrasoftware.com",
      location: "Remote",
      title: "Software Developer (Intern)",
      logoUrl: "https://ik.imagekit.io/yzxrxw4ib5/nazrasoft.png?updatedAt=1753858703718",
      start: "October 2024",
      end: "March 2025",
      description:
        "Developed automation tools and database management systems. Worked with Go, MySQL, and Kubernetes to create scalable solutions for internal development teams.",
    }
  ],
  education: [
    {
      school: "Konark Institute of Science and Technology",
      href: "https://kist.ac.in/",
      degree: "B.Tech in Computer Science and Engineering",
      logoUrl: "https://ik.imagekit.io/yzxrxw4ib5/kist.jpeg?updatedAt=1753858736541",
      start: "2022",
      end: "present",
    }
  ],
  projects: [
    {
      title: "TubeX",
      href: "https://github.com/md-asharaf/tubeX",
      dates: "Mar 2024 - Present",
      active: true,
      description:
        "A comprehensive video streaming platform with AI-powered features. Built with modern web technologies and cloud infrastructure for scalable video processing and real-time interactions.",
      technologies: [
        "React",
        "Express",
        "Redux",
        "MongoDB",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "S3",
        "Lambda",
        "ECS",
        "SQS",
        "EC2",
        "Redis",
        "Whisper AI",
        "Gemini AI",
        "Assembly AI",
        "Docker",
        "FFmpeg",
        "Kafka",
      ],
      links: [
        {
          type: "Website",
          href: "https://shot-tube.live",
          icon: <Icons.globe className="size-3" />,
        },{
          type: "Source",
          href: "https://github.com/md-asharaf/tubeX",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "https://ik.imagekit.io/yzxrxw4ib5/2025-07-30-131021_hyprshot.png?updatedAt=1753861312344",
      video:
        "",
    },
    {
      title: "Shopper Website",
      href: "https://ecommerce-next-sanity-ivory.vercel.app",
      dates: "Apr 2024 - May 2024",
      active: true,
      description:
        "A full-stack eCommerce platform with modern authentication, payment processing, and content management. Features responsive design and real-time state management.",
      technologies: [
        "Next.js",
        "Sanity CMS",
        "Zustand",
        "Razorpay",
        "Clerk",
        "TypeScript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://ecommerce-next-sanity-ivory.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/md-asharaf/ecommerce-next-sanity",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Mystery Message",
      href: "https://next-mystery-message.vercel.app",
      dates: "July 2024 - Aug 2024",
      active: true,
      description:
        "An anonymous messaging platform where users can send and receive messages through unique usernames. Features AI-powered message suggestions and secure authentication.",
      technologies: [
        "Next.js",
        "NextAuth",
        "MongoDB",
        "Gemini AI",
        "TypeScript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://next-mystery-message.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/md-asharaf/next-mystery-message",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://ik.imagekit.io/yzxrxw4ib5/2025-07-30-130948_hyprshot.png?updatedAt=1753861311382",
      video: "",
    },
    {
      title: "Restaurant Table Booking System",
      href: "https://restaurant-table-booking-jq1q.onrender.com/api/docs",
      dates: "Apr 2024 - Apr 2024",
      active: false,
      description:
        "A RESTful backend system for restaurant table reservations with role-based access control, JWT authentication, and multi-device session management.",
      technologies: [
        "Nest.js",
        "PostgreSQL",
        "Prisma",
        "Passport",
        "JWT",
        "TypeScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://restaurant-table-booking-jq1q.onrender.com/api/docs",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/md-asharaf/nestjs-restaurant-table-booking",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://ik.imagekit.io/yzxrxw4ib5/2025-07-30-132146_hyprshot.png?updatedAt=1753861940113",
      video: "",
    }
  ],
  hackathons: [
    {
      title: "Infosys Global Hackathon",
      dates: "November 11th - 12th, 2024",
      location: "Bhubaneswar, Odisha",
      description:
        "Developed a web application promoting rural tourism in India by connecting local artisans with tourists. The app allows users to book tours, buy local handicrafts, and learn about the culture and traditions of rural India.",
      image:
        "https://ik.imagekit.io/yzxrxw4ib5/infosys-hackathon.jpg?updatedAt=1753859094911",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    }
  ],
} as const;
