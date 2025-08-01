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
    "I began my studies in 2023 at [Carleton University with a degree in Computer Science and a specialization in AI/ML](/#education). Currently maintaining a CGPA of 3.95/4.00 with a minor in Statistics. [I have a knack for entrepreneurship and hackathons and regularly participate in them](/#hackathons). I'm also very active on campus and I am apart of various clubs such as [cuHacking, Hack the Hill and many more](/#clubs).",

  avatarUrl: "/me.HEIC",

  skills: [
    "Typescript",
    "Javascript",
    "Golang",
    "Java",
    "Python",
    "Ruby",
    "SQL",
    "C",
    "C++",
    "React.js",
    "Node.js",
    "Next.js",
    "TailwindCSS",
    "Firebase",
    "Supabase",
    "AWS",
    "Ruby on Rails",
    "PostgreSQL",
    "Docker",
    "Git",
    "Github",
    "Gitlab",
    "Jenkins",
    "Jira",
    "QNX",
    "Linux",
    "Vim",
    "Stripe",
    "OpenAI",
    "Grafana",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#", icon: CodeIcon, label: "Projects" },
  ],
  contact: {
    email: "rayhaanfarooq@outlook.com",
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
        url: "mailto:rayhaanfarooq@outlook.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Shopify",
      href: "https://shopify.com",
      badges: [],
      location: "Ottawa, ON",
      title: "Software Engineer Intern",
      logoUrl: "/shopify.png",
      start: "September 2025",
      end: "December 2025",
      description:
        "Incoming Software Engineer Intern at Shopify for Fall 2025.",
    },
    {
      company: "Ross Video",
      href: "https://rossvideo.com",
      badges: [],
      location: "Ottawa, ON",
      title: "Software Developer Intern: Internal AI Tools",
      logoUrl: "/ross.png",
      start: "May 2025",
      end: "August 2025",
      description:
        "Developed a full-stack RAG-powered AI chatbot using React + Vite, Express.js, and PostgreSQL, fully containerized with Docker deployed on a custom configured virtual machine. Developed an automated AI RAG Pipeline using Python, transforming various documents and files into clean text, triggered via Jenkins and uploaded to AWS S3 to be ingested into a vector database. Partnered with internal teams to launch the chatbot across departments, enhancing access to engineering knowledge for 20+ employees and reducing technical support overhead contributing to onboarding time savings of up to 50%.",
    },
    {
      company: "Carleton University",
      href: "https://carleton.ca",
      badges: [],
      location: "Ottawa, ON",
      title: "Teaching Assistant: Abstract Data Structures & Algorithms",
      logoUrl: "/carleton.PNG",
      start: "January 2025",
      end: "April 2025",
      description:
        "Led weekly tutorials and held regular office hours for 200+ students, resulting in a measurable 20% improvement in average course exam scores through hands-on concept reinforcement. Provided targeted mentorship in algorithms and problem-solving strategies, helping over 200 students improve assignment performance by up to 25% through structured walkthroughs and feedback. Assisted students with advanced Java debugging techniques, code structure improvements, and runtime optimization, leading to a 30% increase in code execution efficiency and project quality.",
    },
  ],
  education: [
    {
      school: "Carleton University",
      href: "https://carleton.ca",
      degree:
        "Honours Bachelor's Degree of Computer Science (AI/ML) | Minor: Statistics | CGPA: 3.95/4.00 | Co-op",
      logoUrl: "/carleton.PNG",
      start: "2023",
      end: "2028",
    },
  ],
  projects: [
    {
      title: "RavenHaven",
      href: "",
      dates: "March 2025 - Present",
      active: true,
      description:
        "Architected a campus event discovery app using React.JS and Tailwind CSS for clubs at Carleton University. Implemented backend APIs with Ruby on Rails and PostgreSQL for event data management and event updates. Hosted the application on AWS, using EC2 for scalable hosting and RDS for managed database services.",
      technologies: [
        "React.JS",
        "Tailwind CSS",
        "Ruby on Rails",
        "PostgreSQL",
        "Docker",
        "AWS",
      ],
      links: [
        {
          type: "Coming Soon",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ravenhaven.png",
      video: "",
    },
    {
      title: "Herb",
      href: "",
      dates: "January 2025",
      active: true,
      description:
        "Captained a 4-person team to 3rd at uOttaHack7, developing Herb, an innovative disaster response solution. Engineered a remote controlled rover by integrating QNX with Raspberry Pi hardware architecture. Implemented motion control algorithms in Python, enabling navigation and movement using remote control.",
      technologies: ["Python", "QNX", "Bash", "Vim", "Raspberry Pi"],
      links: [
        {
          type: "Coming Soon",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/herb.png",
      video: "",
    },
    {
      title: "Flash.AI",
      href: "https://flashaii.netlify.app",
      dates: "September 2024 - December 2024",
      active: true,
      description:
        "Developed an AI flashcard generator that is open source using the Open AI API resulting in 10+ users. Designed the front-end using React.JS and Tailwind CSS for scalability and simplicity. Constructed a back-end stack utilizing Firebase and Javascript with Stripe as the payment provider.",
      technologies: [
        "React.JS",
        "Tailwind CSS",
        "Firebase",
        "Next.JS",
        "Open AI API",
        "Stripe API",
      ],
      links: [
        {
          type: "Website",
          href: "https://flashaii.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/flashcards.png",
      video: "",
    },
  ],

  clubs: [
    {
      name: "cuHacking",
      position: "Sponsorship Coordinator",
      href: "https://cuhacking.com",
      logoUrl: "/cuhacking.png",
      start: "November 2024",
      end: "Present",
      description:
        "Managed sponsorship team communication and task tracking through Notion, resulting in 40% faster response times. Established partnerships with companies securing $20,000+ in funding and growing membership visibility by 3x. Presented 5+ compelling sponsorship proposals, highlighting mutual benefits to attract and onboard 8+ partners.",
    },
    {
      name: "Hack the Hill",
      position: "Sponsorship Coordinator and Software Developer",
      href: "https://2024.hackthehill.com",
      logoUrl: "/hackthehill.jpg",
      start: "November 2023",
      end: "November 2024",
      description:
        "Spearheaded sponsorship initiatives with Open Project, securing key partnerships and $90,000+ in funding. Aided in the development of key features using JavaScript, HTML, and CSS, improving user engagement by 30%. Initiated cold outreach to 50+ potential sponsors, securing 5+ new partnerships for Hack the Hill II.",
    },
  ],

  hackathons: [
    {
      title: "uOttaHack 7",
      dates: "January 2025",
      location: "Ottawa, Ontario",
      description:
        "Won 3rd place with Herb, an innovative disaster response solution using QNX and Raspberry Pi.",
      image: "uottahack.png",
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
      dates: "October 2024",
      location: "Ottawa, Ontario",
      description:
        "Participated in the 2024 hosting of Discover Technata Hacks",
      image: "discover2023.JPG",
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
      dates: "October 2023",
      location: "Ottawa, Ontario",
      description:
        "Developed MonsTerra, an app to reimburse consumers and companies for purchasing environmentally friendly products",
      image: "discover2023.JPG",
      links: [
        {
          title: "Source",
          icon: <FaRegNewspaper className="h-4 w-4" />,
          href: "https://www.kanatanetworker.com/students-win-gold-with-green-tech-pitch-at-knba-hackathon/",
        },
      ],
    },
  ],

  competitions: [
    {
      title: "IEEE SPAC Pitch Competition",
      dates: "November 2024",
      location: "Ottawa, Ontario",
      description:
        "Participated in the IEEE SPAC Pitch Competition where I pitched Jodi, a plug and play rebate system for businesses",
      image: "ieee.png",
      links: [
        {
          title: "Source",
          icon: <FaRegNewspaper className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/ieee-canada-entrepreneurship_the-ieee-canada-entrepreneurship-would-like-activity-7258464309536550912-UIPj?utm_source=share&utm_medium=member_desktop",
        },
      ],
    },
    {
      title: "ENGCOMM x MONTREAL",
      dates: "October 2024",
      location: "Montreal, Quebec",
      description:
        "Participated in ENGCOMM x MONTREAL where my team and I participated in a case competition",
      image: "engcomm.png",
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
        "Further built out MonsTerra, an app to reimburse consumers and companies for purchasing environmentally friendly products",
      image: "dreamlaunch.JPG",
      links: [],
    },
  ],
} as const;
