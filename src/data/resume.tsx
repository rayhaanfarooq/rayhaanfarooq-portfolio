import { Icons } from "@/components/icons";
import { FaRegNewspaper } from "react-icons/fa";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Rayhaan Farooq",
  initials: "RF",
  url: "https://rayhaanfarooq.netlify.app",
  location: "Ottawa, CA",
  locationLink: "https://www.google.com/maps/place/ottawa",
  description:
    "I'm a Software Developer with a keen interest in the power of AI and it's various applications. I believe AI is the future and I want to be a pioneer in this field",
  summary:
  "I began my studies in 2023 at [Carleton University with a degree in Computer Science and a specialization in AI/ML](/#education). [I have a knack for entrepreneurship and hackathons and regulary participate in them](/#hackathons). I'm also very active on campus and I am apart of various clubs such as [Carleton Paksitan Student Association, Hack the Hill and many more](/#clubs).",
  
  avatarUrl: "/me.HEIC",

  skills: [
    "React.js",
    "Typescript",
    "Node.js",
    "Python",
    "Java",
    "TailwindCSS",
    "Next.js",
    "Firebase",
    "C",
    "C++",
    "OpenAI"

    
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
      title: "OpenGround",
      href: "",
      dates: "August 2024 - Present",
      active: true,
      description:
      "The premium versions of AI are currently unaccesible. I wish to change that. Will provide more info when finished.",
       
      technologies: [
        "Next.js",
        "React.js",
        "Firebase",
        "Tailwind CSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
        "Vercel AI SDK",
      ],
      links: [
        {
          
          type: "Coming Soon",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/openground.png",
      video: ""
       
    },

    {
      title: "Flash.AI",
      href: "",
      dates: "August 2024 - Present",
      active: true,
      description:
      "Developed and deployed an AI powered flashcard generator that uses the OpenAI API to generate flashcards for students to use. For now, I've made the product free",
       
      technologies: [
        "Next.js",
        "React.js",
        "Firebase",
        "Tailwind CSS",
        "Open AI",
      ],

      links: [
        {
          
          type: "Website",
          href: "https://flashaii.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/flashcards.png",
      video: ""
       
    },

    {
      title: "DermAI",
      href: "",
      dates: "August 2024 - Present",
      active: true,
      description:
      "Worked in a team of 4 to develop a chatbot using the OpenAI API. Tailored the chatbot to be a AI dermatologist to be able to handle any inquries regarding the skin. Being an advent user of skincare the confusing ingredients always bothered me, so I decided to develop a chatbot specifically for skincare",
      
       
      technologies: [
        "Next.js",
        "React.js",
        "Firebase",
        "Tailwind CSS",
        "Open AI",

       
      ],
      links: [
        {
          
          type: "Website",
          href: "https://derm-ai-kappa.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/dermai.png",
      video: ""
       
    },

    {
      title: "Raven Haven",
      href: "",
      dates: "August 2024 - Present",
      active: true,
      description:
      "Developing a software for current residents and future residents to use for information regarding residence",
       
      technologies: [
        "Next.js",
        "React.js",
        "Firebase",
        "Tailwind CSS",
        "Shadcn UI",

       
      ],
      links: [
        {
          type: "",
          href: "",
          icon: "",
        },
      ],
      image: "/ravenhaven.png",
      video: ""
       
    },

    

    {
      title: "Pantry Tracker",
      href: "",
      dates: "August 2024 - Present",
      active: true,
      description:
      "Working on developing a SaaS that uses the OpenAI API to generate flashcards for students to use",
       
      technologies: [
        "Next.js",
        "React.js",
        "Firebase",
        "Tailwind CSS",
      ],

      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/pantrytracker.png",
      video: ""
       
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
      title: "ENGCOMM x MONTREAL",
      dates: "October, 2024",
      location: "Montreal, Ontario",
      description:
        "Participated in ENGCOMM x MONTREAL where my team and I participated in a case competition",
      image:
        "engcomm.png",
      links: [
        {
          title: "Source",
          icon: <FaRegNewspaper className="h-4 w-4" />,
          href: "",
        },
      ],
    },

    {
      title: "Discover Technata Hacks",
      dates: "October, 2024",
      location: "Ottawa, Ontario",
      description:
        "Participated in the 2024 hosting of Discover Technata Hacks",
      image:
        "discover2023.JPG",
      links: [
        {
          title: "Source",
          icon: <FaRegNewspaper className="h-4 w-4" />,
          href: "",
        },
      ],
    },
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
