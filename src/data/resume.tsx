import { Icons } from "@/components/icons";
import { FaRegNewspaper } from "react-icons/fa";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Rayhaan Farooq",
  initials: "RF",
  url: "https://rayhaanfarooq.netlify.app",
  location: "Toronto, CA",
  locationLink: "https://www.google.com/maps/place/toronto",
  description:
    "Software engineer building full-stack products, internal tools, and AI systems. I've shipped code at Fullscript, Shopify, and Ross Video and care a lot about clean execution.",
  summary:
    "I'm studying Computer Science with an AI/ML concentration at Carleton University, currently in fourth-year standing with a 3.95 CGPA. Most of my work has been across Elixir, React, Rails, TypeScript, and AI agent systems. Lately I've been especially interested in search, agent infrastructure, and building products people genuinely want to use. Outside of coding, I'm usually hiking or working on side projects.",

  avatarUrl: "/mainhero.jpg",

  skills: [
    "TypeScript",
    "JavaScript",
    "Golang",
    "Java",
    "Python",
    "Ruby",
    "Elixir",
    "SQL",
    "C",
    "C++",
    "Haskell",
    "Rust",
    "HTML",
    "CSS",
    "React.js",
    "Node.js",
    "Next.js",
    "TailwindCSS",
    "Bootstrap",
    "Express.js",
    "GraphQL",
    "Cloudflare Workers",
    "Firebase",
    "Supabase",
    "Ruby on Rails",
    "Phoenix",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "OpenSearch",
    "Elasticsearch",
    "Turbopuffer",
    "Docker",
    "Git",
    "Jenkins",
    "QNX",
    "Linux",
    "Kubernetes",
    "Kafka",
    "Stripe",
    "OpenTelemetry",
    "Langfuse",
    "Grafana",
    "GCP",
    "AWS",
    "OpenAI",
    "RAG Pipelines",
    "Vector DB / embeddings",
    "BigQuery",
    "Slurm",
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
      title: "Software Engineer Intern: AI Agents & Search Engine",
      logoUrl: "/fullscript.png",
      start: "May 2026",
      end: "December 2026",
      description:
        "Led the design and implementation of Storefront Protocols, integrating AI capabilities into a marketing tool used by 125,000 practitioners by defining product requirements, designing workflows, and partnering across engineering. Built an end-to-end clinical research pipeline for Assist using Elixir, NatMed APIs, concurrent retrieval, and Top-K ranking, reducing clinical evidence tokens by 80% and follow-up research latency by 5s. Architected reusable agentic infrastructure with synthetic prompts, scoped skills and tools, and reachability guards, supporting 2 onboarding workflows with deterministic, context-aware agent behavior. Replaced a verbose MCP tool with an OpenSearch-backed search interface, reducing biomarker tool payloads by 95%. Expanded LLM observability by instrumenting 3 untracked generation workflows with OpenTelemetry and Langfuse, enabling cost attribution, token analytics, and production tracing across 15+ telemetry attributes per request.",
    },
    {
      company: "Shopify",
      href: "https://shopify.com",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer Intern: Talent Engineering",
      logoUrl: "/shopify.png",
      start: "September 2025",
      end: "December 2025",
      description:
        "Reduced administrative workload by 10× by building a full-stack Rails platform that replaced 15+ Excel spreadsheets with automated workflows, dashboards, and centralized data, supporting 300+ interns and 40+ Early Careers staff. Designed relational data models and integrated BigQuery to centralize 2,000+ intern records, enabling scalable analytics and data access for 75+ managers and 200+ mentors. Implemented a Gale–Shapley stable matching engine that automated 80% of intern-to-team allocations, reducing manual assignment time from 4 weeks to under 10 minutes.",
    },
    {
      company: "Ross Video",
      href: "https://rossvideo.com",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer Intern: AI Tools & Test Automation",
      logoUrl: "/ross.png.webp",
      start: "May 2025",
      end: "August 2025",
      description:
        "Built an internal RAG AI chatbot using React, TypeScript, Express.js, and PostgreSQL, reducing deployment and environment setup time by over 80% through containerized deployments on a custom VM. Built an automated RAG ingestion pipeline in Python and Java with Jenkins, processing 100+ documents into embeddings stored in AWS S3, reducing manual document processing by over 90%. Collaborated with cross-functional engineering teams to deploy the chatbot across departments, improving access to internal documentation for 20+ employees and reducing onboarding time by up to 50%.",
    },
    {
      company: "Carleton University",
      href: "https://carleton.ca",
      badges: [],
      location: "Ottawa, ON",
      title: "Teaching Assistant: Abstract Data Structures & Algorithms",
      logoUrl: "/carleton.PNG",
      start: "September 2024",
      end: "April 2026",
      description:
        "Led tutorials and mentorship for 200+ students in Java, OOP, and algorithms across September 2024–April 2025 and January 2026–April 2026, boosting average exam scores by 20% and assignment performance by up to 25% through targeted problem design and structured feedback.",
    },
  ],
  education: [
    {
      school: "Carleton University",
      href: "https://carleton.ca",
      degree:
        "Honours BSc Computer Science | Concentration: AI/ML | CGPA: 3.95/4.00 | Co-op | Fourth-Year Standing",
      logoUrl: "/carleton.PNG",
      start: "September 2023",
      end: "April 2028",
    },
  ],
  projects: [
    {
      title: "WhatsUpMarket",
      href: "https://whatsupmarket.netlify.app",
      dates: "September 2026",
      active: true,
      description:
        "Built a market intelligence platform serving 1,000+ users with real-time trading data and news via the Alpha Vantage API. Built Python ML classifiers for financial news and integrated Cloudflare Workers and Discord webhooks for alerts.",
      technologies: [
        "Python",
        "Alpha Vantage API",
        "Discord Webhooks",
        "Cloudflare",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Live Website",
          href: "https://whatsupmarket.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
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
        "Built a job alert system detecting postings and delivering Discord alerts, growing a 1000+ member community. Engineered a self-hosted backend on a Raspberry Pi using Go and Cloudflare Workers for alert delivery.",
      technologies: ["Golang", "Cloudflare Workers", "Discord API"],
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
      start: "November 2023",
      end: "November 2025",
      description:
        "Raised $110K+ from 20+ sponsors across cuHacking and Hack The Hill, leading two of Ottawa’s largest hackathons with 1,400+ attendees and driving end-to-end execution and sponsor success while leading a team of 50+ people.",
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
      location: "Toronto, Ontario",
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
      location: "Toronto, Ontario",
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
      location: "Toronto, Ontario",
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
      location: "Toronto, Ontario",
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
      location: "Toronto, Ontario",
      description:
        "Further built out MonsTerra, an app to reimburse consumers and companies for purchasing environmentally friendly products",
      image: "dreamlaunch.JPG",
      links: [],
    },
  ],
} as const;
