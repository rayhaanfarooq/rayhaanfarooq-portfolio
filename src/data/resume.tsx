import { Icons } from "@/components/icons";
import { FaRegNewspaper } from "react-icons/fa";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Rayhaan Farooq",
  initials: "RF",
  url: "https://dillion.io",
  location: "Ottawa, CA",
  locationLink: "https://www.google.com/maps/place/ottawa",
  description:
    "I'm a Software Developer with a keen interest in the power of AI and it's various applications. I believe AI is the future and I want to be a pioneer in this field",
  summary:
  "I began my studies in 2023 at [Carleton University with a degree in Computer Science and a specialization in AI/ML](/#education). [I have a knack for entrepreneurship and hackathons and regulary participate in them](/#hackathons). I'm also very active on campus and I am apart of various clubs such as [Carleton Paksitan Student Association, Hack the Hill and many more](/#clubs).",
  
  avatarUrl: "/me.HEIC",

  skills: [
    "Reac.js",
    "Typescript",
    "Node.js",
    "Python",
    "Java",
    "TailwindCSS",
    "Next.js",
    "Firebase",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#", icon: CodeIcon, label: "Projects" },
    // { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "rayhaan2004@hotmail.com",
    telephone: "705-970-7294",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rayhaanfarooq",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rayhaanfarooq/",
        icon: Icons.linkedin,

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
      company: "Carleton University Teaching Assistant",
      href: "https://carleton.ca",
      badges: [],
      location: "In-Person",
      title: "Teaching Assistant",
      logoUrl: "/carleton.PNG",
      start: "September 2024",
      end: "December 2024",
      description:
        "Working as a TA for the course COMP1406(Introduction to Computer Science II). I hold office hours, grade assignments and help students with their code",
    },
    {
      company: "Headstarter Ai",
      href: "https://app.theheadstarter.com",
      badges: [],
      location: "Remote",
      title: "Fellow",
      logoUrl: "/headstarter.jpg",
      start: "July 2024",
      end: "September 2024",
      description:
        "Joined a fellowship where I am working on multiple projects, doing interviews and competing in hackathons weekly. This fellowship is led from engineers from leading tech companies",
    },
    {
      company: "Hack the Hill",
      href: "https://2024.hackthehill.com",
      badges: [],
      location: "Remote",
      title: "Development Coordinator",
      logoUrl: "/hackthehill.jpg",
      start: "October 2023",
      end: "December 2023",
      description:
        "Worked on the homepage of the main Hack the Hill website and implemented parallax scrolling.",
    },
  ],
  education: [
    {
      school: "Carleton University",
      href: "https://carleton.ca",
      degree: "Honours Bachelor's Degree of Computer Science(AI/ML)",
      logoUrl: "/carleton.PNG",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      // title: "Netflix CLone",
      // href: "https://chatcollect.com",
      // dates: "Jan 2024 - Feb 2024",
      // active: true,
      // description:
      //   "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      // technologies: [
      //   "Next.js",
      //   "Typescript",
      //   "PostgreSQL",
      //   "Prisma",
      //   "TailwindCSS",
      //   "Stripe",
      //   "Shadcn UI",
      //   "Magic UI",
      // ],
      // links: [
      //   {
      //     type: "Website",
      //     href: "https://chatcollect.com",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      // ],
      // image: "",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    
  ],

  clubs: [
    {
      name: "Carleton Pakistan Student Association",
      position: "Member",
      href: "https://www.instagram.com/cpsa.carleton/",
      logoUrl: "/psa.JPG",
      start: "2023",
      end: "Present",
      description:
        "I am a member of the Carleton Pakistan Student Association. We host events and socials for students to come together and celebrate Pakistani culture",
    },
    {
      name: "Hack the Hill",
      position: "Sponsorship & Development Coordinator",
      href: "https://2024.hackthehill.com",
      logoUrl: "/hackthehill.jpg",
      start: "2023",
      end: "Present",
      description:
        "I am responsible for reaching out to sponsors and developing Hack the Hill technology",
    },
    {
      name: "Carleton Muslim Student Association",
      position: "Admin Member",
      href: "https://cumsa.ca",
      logoUrl: "/msa.PNG",
      start: "2023",
      end: "Present",
      description:
        "I am an admin member of the Carleton Muslim Student Association. We host events and socials for students to come together and celebrate Islam. I work on the website and also spread the word of any future events",
    },

    {
      name: "Carleton Computer Science Society",
      position: "Member",
      href: "https://ccss.carleton.ca",
      logoUrl: "/css.JPG",
      start: "2023",
      end: "Present",
      description:
        "I'm a general member of the Carleton CSS. I attend events and help spread the word of upcoming events",
    }

  ],

  hackathons: [
    {
      title: "DreamLaunch Hackathon",
      dates: "November 2023",
      location: "Ottawa, Ontario",
      description:
        "Further built out MonsTerra",
      image:
        "/dreamlaunch.JPG",
      links: [
       
      ],
    },
    {
      title: "Discover Technata Hacks",
      dates: "October, 2023",
      location: "Ottawa, Ontario",
      description:
        "Developed MonsTerra, an app to reimburse consumers and companies for purchasing environmentally friendly products",
      image:
        "discover2023.JPG",
      links: [
        {
          title: "Source",
          icon: <FaRegNewspaper className="h-4 w-4" />,
          href: "https://www.kanatanetworker.com/students-win-gold-with-green-tech-pitch-at-knba-hackathon/",
        },
      ],
    },
  ],
} as const;
