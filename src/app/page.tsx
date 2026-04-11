import { HackathonCard } from "@/components/hackathon-card";
import { Icons } from "@/components/icons";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  BriefcaseIcon,
  DownloadIcon,
  ExternalLinkIcon,
  FileTextIcon,
  GraduationCapIcon,
  MailIcon,
  MoveRightIcon,
  SearchIcon,
  SparklesIcon,
  TrophyIcon,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const BLUR_FADE_DELAY = 0.04;

const skillCategories = [
  {
    label: "Languages",
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "Golang",
      "C",
      "C++",
      "Rust",
      "SQL",
      "HTML / CSS",
    ],
  },
  {
    label: "Frameworks / Platforms",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Ruby on Rails",
      "Express.js",
      "GraphQL",
      "Tailwind CSS",
      "Bootstrap",
      "Firebase",
      "Supabase",
      "Cloudflare Workers",
    ],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    label: "Developer Tools / Infra",
    items: [
      "Docker",
      "Git",
      "Jenkins",
      "Linux",
      "QNX",
      "Grafana",
      "AWS",
      "GCP",
      "Stripe",
    ],
  },
  {
    label: "AI / Data / Systems",
    items: [
      "OpenAI",
      "RAG pipelines",
      "Vector DB / embeddings",
      "BigQuery",
      "Slurm",
    ],
  },
];

const heroStats = [
  {
    value: "3.95",
    label: "CGPA",
    detail: "Computer Science (AI/ML) with a Statistics minor.",
  },
  {
    value: "$100k+",
    label: "raised",
    detail: "Across cuHacking and Hack the Hill sponsorship work.",
  },
  {
    value: "3x",
    label: "SWE Intern",
    detail: "Shopify, Ross Video, and Fullscript.",
  },
];

const highlightCards = [
  {
    icon: SearchIcon,
    title: "Interests",
    description:
      "I'm especially interested in learning more about search and recommendation systems, from ranking and retrieval to personalization at scale.",
    highlighted: true,
  },
  {
    icon: TrophyIcon,
    title: "$100k+ raised",
    description:
      "Raised across cuHacking and Hack the Hill through sponsorship and partner outreach.",
  },
  {
    icon: BriefcaseIcon,
    title: "3x Software Engineer Intern",
    description:
      "Experience across Fullscript, Shopify, and Ross Video working on product and internal tooling.",
  },
  {
    icon: GraduationCapIcon,
    title: "3.95 CGPA",
    description:
      "Computer Science (AI/ML) at Carleton University with a minor in Statistics.",
  },
  {
    icon: SparklesIcon,
    title: "Hobbies",
    description:
      "Outside of code, I'm into the gym, hiking and being outdoors, skincare, perfumes, and tasting different kinds of honey.",
  },
];

const coursework = [
  "Data Structures & Algorithms",
  "Systems Programming",
  "Operating Systems",
  "Design & Analysis of Algorithms",
  "Discrete Mathematics",
  "Linear Algebra",
  "Probability & Statistics",
];

const resumeFile = "/documents/Rayhaan_Farooq_Resume_F26.pdf";

function SectionHeading({
  kicker,
  title,
  description,
  centered = false,
  inverted = false,
}: {
  kicker: string;
  title: string;
  description?: string;
  centered?: boolean;
  inverted?: boolean;
}) {
  return (
    <div className={cn("space-y-4", centered && "text-center")}>
      <span
        className={cn(
          "section-kicker",
          inverted && "border-white/15 bg-white/[0.06] text-white/70",
        )}
      >
        {kicker}
      </span>
      <div className="space-y-3">
        <h2
          className={cn(
            "font-display text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl",
            inverted ? "text-white" : "text-foreground",
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "max-w-2xl text-base leading-relaxed sm:text-lg",
              inverted ? "text-white/72" : "text-muted-foreground",
              centered && "mx-auto",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function MetricCard({
  value,
  label,
  detail,
}: {
  value: string;
  label: string;
  detail: string;
}) {
  return (
    <div className="section-shell soft-outline p-5">
      <p className="font-display text-4xl leading-none text-foreground">
        {value}
      </p>
      <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {detail}
      </p>
    </div>
  );
}

function HighlightCard({
  icon: Icon,
  title,
  description,
  highlighted = false,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={cn(
        "section-shell p-6",
        highlighted &&
          "border-[#cf6a34]/25 bg-[linear-gradient(135deg,rgba(210,117,62,0.12),rgba(255,255,255,0.82))] shadow-[0_24px_80px_-40px_rgba(207,106,52,0.4)] dark:bg-[linear-gradient(135deg,rgba(210,117,62,0.18),rgba(255,255,255,0.05))]",
      )}
    >
      {highlighted ? (
        <span className="mb-4 inline-flex rounded-full border border-[#cf6a34]/20 bg-white/70 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#b85c2d] dark:bg-white/[0.06] dark:text-[#ffcf9b]">
          Currently exploring
        </span>
      ) : null}
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "flex size-11 items-center justify-center rounded-2xl bg-[rgba(223,117,56,0.12)] text-[#cf6a34] dark:bg-[rgba(255,183,123,0.12)] dark:text-[#ffcf9b]",
            highlighted &&
              "bg-[#cf6a34] text-white dark:bg-[#ffcf9b] dark:text-slate-900",
          )}
        >
          <Icon className="size-5" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
        {description}
      </p>
    </div>
  );
}

function ContactLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/70 px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:bg-white dark:bg-white/[0.05] dark:hover:bg-white/[0.08]"
    >
      {icon}
      {label}
    </Link>
  );
}

export default function Page() {
  const allEvents = [
    ...DATA.hackathons.map((h) => ({ ...h, _type: "hackathon" as const })),
    ...DATA.competitions.map((c) => ({ ...c, _type: "competition" as const })),
  ];

  const education = DATA.education[0];
  const featuredProject = DATA.projects[0];
  const supportingProjects = DATA.projects.slice(1);
  const currentRole = DATA.work[0];

  return (
    <main className="relative overflow-hidden pb-12">
      <Analytics />

      <div className="hero-orb -left-24 top-16 h-72 w-72 bg-[#ec8c52]/25" />
      <div className="hero-orb right-0 top-32 h-80 w-80 bg-[#0f8a7a]/20 animation-delay-2000" />
      <div className="hero-orb left-1/3 top-[48rem] h-96 w-96 bg-[#f0c272]/20 animation-delay-4000" />
      <div className="hero-orb -right-16 top-[120rem] h-80 w-80 bg-[#d66853]/20 animation-delay-6000" />

      <section className="relative px-6 pb-20 pt-28 sm:pt-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative z-10">
              <BlurFade delay={0.1}>
                <h1 className="max-w-4xl font-display text-[clamp(2.9rem,6vw,5.4rem)] leading-[0.95] tracking-[-0.04em] text-balance">
                  I love to build.
                </h1>
              </BlurFade>

              <BlurFade delay={0.2}>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                  I&apos;m {DATA.name}, a software engineer from Toronto.
                  I&apos;ve worked across full-stack product development,
                  internal tools, and AI-focused systems at places like Shopify
                  and Ross Video.
                </p>
              </BlurFade>

              <BlurFade delay={0.36}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95"
                  >
                    See selected work
                    <MoveRightIcon className="size-4" />
                  </Link>
                  <Link
                    href={`mailto:${DATA.contact.email}`}
                    className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/70 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:bg-white dark:bg-white/[0.05] dark:hover:bg-white/[0.08]"
                  >
                    <MailIcon className="size-4" />
                    Get in touch
                  </Link>
                  <a
                    href={resumeFile}
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/70 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:bg-white dark:bg-white/[0.05] dark:hover:bg-white/[0.08]"
                  >
                    <DownloadIcon className="size-4" />
                    Download resume
                  </a>
                </div>
              </BlurFade>

              <BlurFade delay={0.44}>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ContactLink
                    href={DATA.contact.social.LinkedIn.url}
                    icon={<Icons.linkedin className="size-4" />}
                    label="LinkedIn"
                  />
                  <ContactLink
                    href={DATA.contact.social.GitHub.url}
                    icon={<Icons.github className="size-4" />}
                    label="GitHub"
                  />
                  <ContactLink
                    href={DATA.contact.social.email.url}
                    icon={<MailIcon className="size-4" />}
                    label={DATA.contact.email}
                  />
                </div>
              </BlurFade>

              <BlurFade delay={0.54}>
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {heroStats.map((stat) => (
                    <MetricCard
                      key={stat.label}
                      value={stat.value}
                      label={stat.label}
                      detail={stat.detail}
                    />
                  ))}
                </div>
              </BlurFade>
            </div>

            <div className="relative space-y-4 lg:pl-6">
              <BlurFade delay={0.24}>
                <div className="section-shell p-4 sm:p-5">
                  <div className="relative overflow-hidden rounded-[1.75rem] border border-white/40 bg-[#d6d0c7] dark:border-white/10 dark:bg-[#1d2638]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,176,111,0.35),transparent_28%),radial-gradient(circle_at_left_center,rgba(20,136,122,0.2),transparent_30%)]" />
                    <Image
                      src={DATA.avatarUrl}
                      alt={DATA.name}
                      width={920}
                      height={1200}
                      priority
                      className="h-[34rem] w-full object-cover object-top sm:h-[40rem]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,23,42,0.76)] via-transparent to-transparent" />

                    <div className="absolute left-4 top-4 flex max-w-[calc(100%-2rem)] flex-wrap gap-2">
                      <div className="rounded-full border border-white/35 bg-[rgba(11,20,38,0.35)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                        Incoming @ {currentRole.company}
                      </div>
                      <div className="rounded-full border border-white/35 bg-[rgba(11,20,38,0.35)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                        Prev. @ Shopify, Ross Video
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 glass-panel p-5 text-white dark:bg-[rgba(8,14,24,0.52)]">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                        Currently
                      </p>
                      <p className="mt-2 text-lg font-semibold leading-snug">
                        Fullscript, Search Engine team.
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-white/75">
                        Currently contributing to the Search Team at Fullscript.
                        Working on both the Search Engine and the tooling for
                        it.
                      </p>
                    </div>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 sm:block">
          <div className="animate-bounce-gentle text-muted-foreground/50">
            <ArrowDownIcon className="size-5" />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-28 px-6 py-14 sm:scroll-mt-32 sm:py-20"
      >
        <div className="mx-auto grid max-w-6xl items-start gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <div className="section-shell h-full p-8 sm:p-10">
              <SectionHeading
                kicker="About"
                title="I care about building useful software and shipping it well."
                description={DATA.description}
              />
              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>{DATA.summary}</p>
                <p>
                  Most of my experience so far has been in full-stack product
                  work, internal tools, and AI systems. I like figuring out the
                  bottleneck, cleaning up the workflow, and shipping something
                  people want to keep using. I also think one of my biggest
                  strengths is working well with people, whether that means
                  collaborating across teams, building relationships, or helping
                  others feel comfortable working through hard problems.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {[
                  "Full-stack product work",
                  "Internal tools",
                  "AI systems",
                  "People skills",
                  "Performance",
                  "Systems thinking",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/70 bg-background/70 px-3 py-2 text-sm text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </BlurFade>

          <div className="grid auto-rows-max content-start gap-4">
            {highlightCards.map((card, index) => (
              <BlurFade
                key={card.title}
                delay={BLUR_FADE_DELAY * 2 + index * 0.08}
                inView
              >
                <HighlightCard {...card} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="scroll-mt-28 px-6 py-14 sm:scroll-mt-32 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
            <BlurFade delay={BLUR_FADE_DELAY} inView>
              <div className="lg:sticky lg:top-28">
                <SectionHeading
                  kicker="Experience"
                  title="Where I've worked."
                  description="Internships, teaching, and engineering roles that shaped how I think about product work, systems, and execution."
                />

                <div className="mt-8 section-shell p-6">
                  <div className="flex items-center gap-3">
                    <BriefcaseIcon className="size-5 text-[#cf6a34]" />
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                      Common threads
                    </p>
                  </div>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    <p>Turning manual workflows into real software.</p>
                    <p>
                      Shipping across the stack, from UI to backend to data.
                    </p>
                    <p>Using AI where it saves real time for a team.</p>
                  </div>
                </div>
              </div>
            </BlurFade>

            <div className="space-y-4">
              {DATA.work.map((work, id) => (
                <BlurFade
                  key={work.company + work.start}
                  delay={BLUR_FADE_DELAY * 2 + id * 0.06}
                  inView
                >
                  <ResumeCard
                    logoUrl={work.logoUrl}
                    altText={work.company}
                    title={work.company}
                    subtitle={work.title}
                    href={work.href}
                    badges={work.badges}
                    period={`${work.start} - ${work.end ?? "Present"}`}
                    description={work.description}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="education"
        className="scroll-mt-28 px-6 py-10 sm:scroll-mt-32 sm:py-14"
      >
        <div className="mx-auto max-w-6xl">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <div className="section-shell p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div className="space-y-4">
                  <span className="section-kicker">Education</span>
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[rgba(15,138,122,0.12)] text-[#0f8a7a] dark:bg-[rgba(123,231,216,0.12)] dark:text-[#9fe4da]">
                      <GraduationCapIcon className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl leading-tight sm:text-3xl">
                        {education.school}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {education.degree}
                      </p>
                      <p className="mt-3 text-sm font-medium text-muted-foreground">
                        {education.start} - {education.end}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                    Relevant coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {coursework.map((course) => (
                      <Badge
                        key={course}
                        variant="secondary"
                        className="rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-xs"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                    My coursework has given me a strong foundation in
                    algorithms, systems, operating systems, mathematics, and
                    statistics, and it continues to shape the way I think about
                    building reliable software.
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <section
        id="resume"
        className="scroll-mt-28 px-6 py-12 sm:scroll-mt-32 sm:py-16"
      >
        <div className="mx-auto max-w-6xl">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <div className="section-shell overflow-hidden p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
                <div className="space-y-5">
                  <SectionHeading
                    kicker="Resume"
                    title="A quick interactive look at my resume."
                    description="You can scroll, zoom, and inspect the PDF directly here, or download the latest version."
                  />

                  <div className="glass-panel p-5">
                    <div className="flex items-start gap-3">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[rgba(15,138,122,0.12)] text-[#0f8a7a] dark:bg-[rgba(123,231,216,0.12)] dark:text-[#9fe4da]">
                        <FileTextIcon className="size-5" />
                      </div>
                      <div>
                        <p className="text-base font-semibold">My Resume! :)</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Latest PDF version with experience, projects, and
                          technical background.
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <a
                        href={resumeFile}
                        download
                        className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95"
                      >
                        <DownloadIcon className="size-4" />
                        Download resume
                      </a>
                      <a
                        href={resumeFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/70 px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:bg-white dark:bg-white/[0.05] dark:hover:bg-white/[0.08]"
                      >
                        <ExternalLinkIcon className="size-4" />
                        Open full view
                      </a>
                    </div>
                  </div>
                </div>

                <div className="section-shell overflow-hidden border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(248,246,241,0.78))] p-3 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
                  <div className="flex items-center justify-between rounded-[1.4rem] border border-border/60 bg-background/80 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="size-2.5 rounded-full bg-[#cf6a34]" />
                      <span className="size-2.5 rounded-full bg-[#f0c272]" />
                      <span className="size-2.5 rounded-full bg-[#0f8a7a]" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      Interactive PDF
                    </p>
                  </div>

                  <div className="mt-3 overflow-hidden rounded-[1.5rem] border border-border/60 bg-white shadow-[0_24px_80px_-40px_rgba(15,23,42,0.28)] dark:bg-slate-950">
                    <iframe
                      src={`${resumeFile}#toolbar=1&navpanes=0&view=FitH`}
                      title="Rayhaan Farooq Resume PDF"
                      className="h-[34rem] w-full sm:h-[46rem]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <section
        id="projects"
        className="scroll-mt-28 px-6 py-14 sm:scroll-mt-32 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <SectionHeading
              kicker="Projects"
              title="Projects I've built."
              description="Side projects, hackathon builds, and product ideas across AI, backend systems, and full-stack web apps."
            />
          </BlurFade>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
              <article className="section-shell h-full p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="section-kicker">Featured build</span>
                  <span className="text-sm text-muted-foreground">
                    {featuredProject.dates}
                  </span>
                </div>

                <div className="mt-6 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <h3 className="font-display text-3xl leading-tight sm:text-4xl">
                      {featuredProject.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                      {featuredProject.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {featuredProject.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {featuredProject.links.map((link) =>
                        link.href ? (
                          <Link
                            key={link.type}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/70 px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-white dark:bg-white/[0.05] dark:hover:bg-white/[0.08]"
                          >
                            {link.icon}
                            {link.type}
                            <ArrowUpRightIcon className="size-3.5" />
                          </Link>
                        ) : (
                          <span
                            key={link.type}
                            className="inline-flex items-center gap-2 rounded-full border border-dashed border-border/80 px-4 py-2 text-sm font-medium text-muted-foreground"
                          >
                            {link.icon}
                            {link.type}
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-[1.75rem] border border-border/60 bg-[linear-gradient(145deg,rgba(18,38,63,0.96),rgba(11,20,38,0.88))] p-6 text-white">
                    <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-[#f29c64]/30 blur-3xl" />
                    <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#0f8a7a]/25 blur-3xl" />
                    <div className="relative">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
                        Built around
                      </p>
                      <p className="mt-5 font-display text-4xl leading-[0.95] tracking-[-0.04em] sm:text-5xl">
                        AST
                        <br />
                        Test
                        <br />
                        Generation
                      </p>
                      <div className="mt-8 space-y-3 text-sm text-white/75">
                        <p>
                          Targets untested functions instead of regenerating
                          everything.
                        </p>
                        <p>Cuts token spend by being more selective.</p>
                        <p>Gives faster feedback when a repo changes.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </BlurFade>

            <div className="grid gap-6">
              {supportingProjects.slice(0, 2).map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 3 + id * 0.08}
                  inView
                >
                  <ProjectCard
                    href={project.href}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    eyebrow={
                      project.title === "Herb" ? "Selected Build" : undefined
                    }
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {supportingProjects.slice(2).map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 5 + id * 0.06}
                inView
              >
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  eyebrow={
                    project.title === "Herb" ? "Selected Build" : undefined
                  }
                  image={project.image}
                  video={project.video}
                  links={project.links}
                  className="h-full"
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="scroll-mt-28 px-6 py-14 sm:scroll-mt-32 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <div className="section-shell overflow-hidden bg-[linear-gradient(145deg,rgba(17,32,54,0.96),rgba(10,18,32,0.94))] p-8 text-white sm:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(242,156,100,0.22),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(15,138,122,0.18),transparent_24%)]" />
              <div className="relative">
                <SectionHeading
                  kicker="Stack"
                  title="Tools I've used across internships, classes, and side projects."
                  description="From frontend work to backend systems, infra, and AI tooling."
                  inverted
                />

                <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {skillCategories.map((category, index) => (
                    <BlurFade
                      key={category.label}
                      delay={BLUR_FADE_DELAY * 2 + index * 0.06}
                      inView
                    >
                      <div className="rounded-[1.6rem] border border-white/12 bg-white/[0.06] p-5 backdrop-blur-md">
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/55">
                          {category.label}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {category.items.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full border border-white/12 bg-white/[0.08] px-3 py-2 text-sm text-white/82"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </BlurFade>
                  ))}
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <section className="px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <div className="section-shell p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[rgba(15,138,122,0.12)] text-[#0f8a7a] dark:bg-[rgba(123,231,216,0.12)] dark:text-[#9fe4da]">
                  <BriefcaseIcon className="size-5" />
                </div>
                <div>
                  <p className="section-kicker">Community</p>
                  <h3 className="mt-3 font-display text-2xl leading-tight sm:text-3xl">
                    Community and student leadership.
                  </h3>
                </div>
              </div>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                I&apos;ve spent a lot of time helping run hackathons and student
                groups, especially on the sponsorship side.
              </p>

              <div className="mt-6 space-y-3">
                {DATA.clubs.map((club, id) => (
                  <BlurFade
                    key={club.name}
                    delay={BLUR_FADE_DELAY * 2 + id * 0.05}
                    inView
                  >
                    <ResumeCard
                      logoUrl={club.logoUrl}
                      altText={club.name}
                      title={club.name}
                      subtitle={club.position}
                      href={club.href}
                      period={`${club.start} - ${club.end ?? "Present"}`}
                      description={club.description}
                    />
                  </BlurFade>
                ))}
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
            <div className="section-shell p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[rgba(223,117,56,0.12)] text-[#cf6a34] dark:bg-[rgba(255,183,123,0.12)] dark:text-[#ffcf9b]">
                  <TrophyIcon className="size-5" />
                </div>
                <div>
                  <p className="section-kicker">Competitions</p>
                  <h3 className="mt-3 font-display text-2xl leading-tight sm:text-3xl">
                    Hackathons and competitions.
                  </h3>
                </div>
              </div>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                I like the pace of building under pressure and the chance to
                test ideas quickly with a team.
              </p>

              <ul className="mt-6 space-y-3">
                {allEvents.map((item, id) => (
                  <BlurFade
                    key={item.title + item.dates}
                    delay={BLUR_FADE_DELAY * 3 + id * 0.05}
                    inView
                  >
                    <HackathonCard
                      title={item.title}
                      description={item.description}
                      location={item.location}
                      dates={item.dates}
                      image={item.image}
                      links={item.links}
                    />
                  </BlurFade>
                ))}
              </ul>
            </div>
          </BlurFade>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-28 px-6 py-16 sm:scroll-mt-32 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <div className="section-shell overflow-hidden bg-[linear-gradient(145deg,rgba(18,38,63,0.97),rgba(9,17,31,0.96))] px-8 py-10 text-white sm:px-12 sm:py-14">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(242,156,100,0.22),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(15,138,122,0.22),transparent_24%)]" />
              <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <span className="section-kicker border-white/15 bg-white/[0.06] text-white/70">
                    Contact
                  </span>
                  <h2 className="mt-5 font-display text-4xl leading-[0.96] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
                    Interested in working together?
                  </h2>
                  <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/72 sm:text-lg">
                    I&apos;m always open to good teams, interesting product
                    work, and technical problems worth caring about.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <Link
                    href={DATA.contact.social.email.url}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <MailIcon className="size-4" />
                    {DATA.contact.email}
                  </Link>
                  <a
                    href={resumeFile}
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.1]"
                  >
                    <DownloadIcon className="size-4" />
                    Download resume
                  </a>
                  <Link
                    href={DATA.contact.social.LinkedIn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.1]"
                  >
                    <Icons.linkedin className="size-4" />
                    Connect on LinkedIn
                    <ArrowUpRightIcon className="size-4" />
                  </Link>
                  <Link
                    href={DATA.contact.social.GitHub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.1]"
                  >
                    <Icons.github className="size-4" />
                    View GitHub
                    <ArrowUpRightIcon className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <footer className="px-6 pb-10 pt-2">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {DATA.name}
          </p>
          <p>Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  );
}
