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
    "Software Engineer passionate about building elegant digital experiences. I've shipped production code at companies like Shopify and Ross Video — always focused on craft, performance, and user impact.",
  summary:
    "I'm pursuing a Computer Science degree (AI/ML specialization) at Carleton University with a minor in Statistics, maintaining a 3.95 CGPA. My technical range spans frontend frameworks like React, Next.js, and TailwindCSS to backend systems with Ruby on Rails, Node.js, and Golang. I'm actively expanding into cloud infrastructure, AI/ML technologies, and entrepreneurship. When I'm not coding, you'll find me on hiking trails exploring the outdoors.",

  avatarUrl: "/hero.jpg",

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
    "Rust",
    "HTML",
    "CSS",
    "React.js",
    "Node.js",
    "Next.js",
    "TailwindCSS",
    "Firebase",
    "Supabase",
    "Ruby on Rails",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Git",
    "Jenkins",
    "QNX",
    "Linux",
    "Stripe",
    "OpenAI",
    "Grafana",
    "GCP",
    "AWS",
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
      company: "Fullscript",
      href: "https://fullscript.com",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer Intern: Search Engine",
      logoUrl: "/fullscript.png",
      start: "May 2026",
      end: "August 2026",
      description:
        "Incoming Software Engineer Intern on the Search Engine team.",
    },
    {
      company: "Carleton University",
      href: "https://carleton.ca",
      badges: [],
      location: "Ottawa, ON",
      title: "Teaching Assistant",
      logoUrl: "/carleton.PNG",
      start: "January 2026",
      end: "May 2026",
      description:
        "Teaching Assistant at Carleton University.",
    },
    {
      company: "Shopify",
      href: "https://shopify.com",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer Intern: Matching Engine",
      logoUrl: "/shopify.png",
      start: "September 2025",
      end: "December 2025",
      description:
        "Reduced administrative workload by 10× by building a full-stack Rails platform that replaced 15+ Excel spreadsheets with automated workflows, dashboards, and centralized data, supporting 300+ interns and 40+ Early Careers staff. Improved data accessibility and analytics by designing ERDs, prototyping intuitive interfaces in Figma, and integrating BigQuery to centralize 2,000+ intern records, enabling insights for 75+ managers and 200+ mentors. Accelerated intern-to-team allocations by implementing a Gale–Shapley–based matching engine that automated 80% of assignments, reducing manual allocation time from 4 weeks to under 10 minutes.",
    },
    {
      company: "Ross Video",
      href: "https://rossvideo.com",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer Intern: AI Tools",
      logoUrl: "/ross.png.webp",
      start: "May 2025",
      end: "August 2025",
      description:
        "Reduced deployment and environment setup time by over 80% by shipping a full-stack RAG AI chatbot using React + TypeScript, Express.js, and PostgreSQL, containerized with Docker and deployed on a custom VM. Reduced manual document processing by over 90% by building an automated RAG AI pipeline in Python with Jenkins, uploading hundreds of document embeddings to AWS S3 for vector DB ingestion. Enhanced access to internal engineering knowledge for 20+ employees by partnering with cross-functional teams to roll out the chatbot across departments, reducing support overhead and cutting onboarding time by up to 50%.",
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
        "Led weekly tutorials and held regular office hours for 200+ students, reinforcing core OOP and Java concepts, reviewing assignments, and providing targeted practice, resulting in a 20% increase in average exam scores. Provided one-on-one mentorship in Java and algorithmic problem-solving, offering structured guidance, code review, and problem breakdowns, helping students improve assignment performance by up to 25%. Created and curated practice problems focused on data structures, algorithms, and OOP design patterns, designing exercises that strengthened coding proficiency and prepared students for technical interviews.",
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
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Forge",
      href: "",
      dates: "January 2026",
      active: true,
      description:
        "Accelerated development cycles by 50% and cut bugs via AI-powered test generation in Python. Implemented AST-based incremental tests for untested functions cutting AI token costs by 60-80%. Built a React + TypeScript dashboard with SQLite tracking, providing fast feedback and clear repository insights.",
      technologies: [
        "Python",
        "OpenAI API",
        "React.JS",
        "TypeScript",
        "SQLite",
        "AWS",
      ],
      links: [
        {
          type: "Coming Soon",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Jobber",
      href: "",
      dates: "November 2025",
      active: true,
      description:
        "Built a real-time job alert system detecting new postings in seconds, driving rapid applications and more interviews. Implemented a serverless JavaScript backend on Cloudflare Workers, achieving 99.9% uptime. Integrated the Discord API to deliver instant alerts, growing a 100+ member community.",
      technologies: [
        "Golang",
        "Cloudflare Workers",
        "Discord API",
      ],
      links: [
        {
          type: "Coming Soon",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
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
          type: "Github",
          href: "https://github.com/Ariz-Kazani/uOttaHack7",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/herb.jpg",
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
    {
      title: "DermAI",
      href: "https://dermai.netlify.app",
      dates: "January 2025 - Present",
      active: true,
      description:
        "Developed a full-stack AI-powered dermatology diagnosis tool using React.JS and Tailwind CSS for scalability and simplicity. Constructed a back-end stack utilizing Firebase and Javascript with Stripe as the payment provider.",
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
          href: "https://dermai.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/dermai.png",
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
        "Raised over $110,000 by crafting tailored proposals and managing long-term partner relationships. Organized two hackathons with a combined 1400+ attendees, ensuring sponsor satisfaction and seamless execution. Optimized workflows in Notion and led outreach to 50+ companies, reducing response times by 40%.",
    },
    {
      name: "Carleton Computer Science Society",
      position: "Software Developer",
      href: "https://carleton.ca/csclub/",
      logoUrl: "/css.jpg",
      start: "September 2024",
      end: "Present",
      description:
        "Helped organize and host events for the Carleton Computer Science Society",
    },
    {
      name: "IEEE SPAC",
      position: "Volunteer",
      href: "https://ieee.ca/spac",
      logoUrl: "/ieee.webp",
      start: "October 2024",
      end: "October 2024",
      description:
        "Helped organize and host the flagship event known as IEEE SPAC",
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
      image: "/uottahack7.png",
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
      image: "/ieee.webp",
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
