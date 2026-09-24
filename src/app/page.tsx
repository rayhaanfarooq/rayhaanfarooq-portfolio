import { Icons } from "@/components/icons";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import BlurFade from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { MagicCard } from "@/components/magicui/magic-card";
import { Marquee } from "@/components/magicui/marquee";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { WordRotate } from "@/components/magicui/word-rotate";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  DownloadIcon,
  GraduationCapIcon,
  MailIcon,
  MapPinIcon,
  SearchIcon,
  SparklesIcon,
  TrophyIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  SiDocker,
  SiElixir,
  SiGo,
  SiGooglecloud,
  SiGraphql,
  SiKubernetes,
  SiNextdotjs,
  SiOpensearch,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRubyonrails,
  SiTypescript,
} from "react-icons/si";

const BLUR_FADE_DELAY = 0.04;
const resumeFile = "/documents/Rayhaan_Farooq_Resume_F26.pdf";

const rotatingWords = [
  "AI agents.",
  "search engines.",
  "full-stack products.",
  "developer tools.",
] as const;

const stats = [
  { value: 3.95, decimals: 2, prefix: "", suffix: "", label: "CGPA at Carleton" },
  { value: 3, decimals: 0, prefix: "", suffix: "×", label: "SWE internships" },
  { value: 3, decimals: 0, prefix: "", suffix: "×", label: "Hackathons won" },
  { value: 110, decimals: 0, prefix: "$", suffix: "K+", label: "Raised for hackathons" },
];

const companies = [
  { name: "Fullscript", logo: "/fullscript.png" },
  { name: "Shopify", logo: "/shopify.png" },
  { name: "Ross Video", logo: "/ross.png.webp" },
  { name: "Carleton University", logo: "/carleton.PNG" },
  { name: "cuHacking", logo: "/cuhacking.png" },
  { name: "Hack the Hill", logo: "/hackthehill.jpg" },
];

const skillCategories = [
  {
    label: "Languages",
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Go",
      "Java",
      "Ruby",
      "Elixir",
      "C++",
      "C",
      "SQL",
      "Haskell",
      "Rust",
    ],
  },
  {
    label: "Frameworks",
    items: [
      "React.js",
      "Next.js",
      "Node.js",
      "Ruby on Rails",
      "Phoenix",
      "TailwindCSS",
      "GraphQL",
    ],
  },
  {
    label: "Data & Cloud",
    items: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Kafka",
      "AWS",
      "GCP",
      "Kubernetes",
      "OpenSearch",
      "Turbopuffer",
      "Elasticsearch",
    ],
  },
  {
    label: "Tooling",
    items: [
      "Docker",
      "Git",
      "Jenkins",
      "Linux",
      "QNX",
      "Grafana",
      "OpenTelemetry",
      "Langfuse",
      "Stripe",
    ],
  },
];

const coursework = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "Systems Programming",
  "Design & Analysis of Algorithms",
  "Linear Algebra",
  "Probability & Statistics",
];

function splitSentences(text: string) {
  return text
    .split(/(?<=\.)\s+(?=[A-Z])/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

function SectionHeader({
  kicker,
  title,
  accent,
  description,
  className,
}: {
  kicker: string;
  title: string;
  accent?: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <span className="section-kicker">{kicker}</span>
      <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-balance sm:text-5xl">
        {title}{" "}
        {accent ? (
          <span className="accent-word pr-1">{accent}</span>
        ) : null}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function BentoCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <MagicCard className={cn("rounded-3xl", className)}>{children}</MagicCard>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[0.68rem] text-muted-foreground">
      {children}
    </span>
  );
}

export default function Page() {
  const education = DATA.education[0];
  const [featuredProject, ...otherProjects] = DATA.projects;
  const events = [...DATA.hackathons, ...DATA.competitions];

  return (
    <main className="relative overflow-x-clip">
      <Analytics />

      {/* Hero */}
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 pb-16 pt-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <FlickeringGrid
            className="absolute inset-0 mask-radial"
            squareSize={3}
            gridGap={7}
            color="rgb(160, 160, 170)"
            maxOpacity={0.22}
            flickerChance={0.12}
          />
          <div className="absolute left-1/2 top-[18%] h-[26rem] w-[44rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-500/15" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <BlurFade delay={0.05}>
            <Link
              href="#experience"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-background/60 py-1 pl-1 pr-4 text-sm backdrop-blur-md transition-colors hover:border-foreground/20"
            >
              <span className="relative flex size-6 items-center justify-center overflow-hidden rounded-full bg-white">
                <Image
                  src="/fullscript.png"
                  alt="Fullscript"
                  width={24}
                  height={24}
                  className="size-6 object-contain"
                />
              </span>
              <AnimatedShinyText className="inline-flex items-center gap-1.5">
                Software Engineer Intern @ Fullscript
                <ArrowRightIcon className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </Link>
          </BlurFade>

          <BlurFade delay={0.15}>
            <h1 className="mt-8 text-[clamp(2.75rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
              <span className="block">Hi, I&apos;m Rayhaan.</span>
              <span className="mt-2 block text-muted-foreground">
                I build{" "}
                <WordRotate
                  words={rotatingWords}
                  duration={2600}
                  className="accent-word"
                />
              </span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.25}>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Software engineer and Computer Science student at Carleton
              University. I&apos;ve shipped agent infrastructure, search, and
              internal platforms at{" "}
              <span className="text-foreground">Fullscript</span>,{" "}
              <span className="text-foreground">Shopify</span>, and{" "}
              <span className="text-foreground">Ross Video</span>.
            </p>
          </BlurFade>

          <BlurFade delay={0.35}>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
              <ShimmerButton
                href="#projects"
                background="linear-gradient(135deg, #18181b, #09090b)"
                shimmerColor="#93c5fd"
                className="gap-2 px-7 py-3.5 text-sm font-medium shadow-[0_0_40px_-12px_rgba(59,130,246,0.5)]"
              >
                See my work
                <ArrowRightIcon className="size-4" />
              </ShimmerButton>
              <a
                href={resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-7 py-3.5 text-sm font-medium backdrop-blur-md transition-colors hover:bg-secondary"
              >
                <DownloadIcon className="size-4" />
                Resume
              </a>
            </div>
          </BlurFade>

          <BlurFade delay={0.45}>
            <div className="mt-8 flex items-center gap-5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPinIcon className="size-3.5" />
                Toronto, Canada
              </span>
              <span className="size-1 rounded-full bg-border" />
              <span className="inline-flex items-center gap-2">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                Building AI agents at Fullscript
              </span>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.55} className="mt-20 w-full max-w-5xl">
          <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-border bg-card/50 backdrop-blur-md md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={cn(
                  "px-6 py-7 text-center",
                  i % 2 === 1 && "border-l border-border",
                  i >= 2 && "border-t border-border md:border-t-0",
                  i === 2 && "md:border-l",
                )}
              >
                <p className="text-4xl font-semibold tracking-tight sm:text-5xl">
                  {stat.prefix ? (
                    <span className="accent-word">{stat.prefix}</span>
                  ) : null}
                  <NumberTicker
                    value={stat.value}
                    decimalPlaces={stat.decimals}
                    delay={0.6}
                  />
                  <span className="accent-word">{stat.suffix}</span>
                </p>
                <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </BlurFade>
      </section>

      {/* Logos */}
      <section className="px-6 pb-8">
        <p className="text-center font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
          Where I&apos;ve built & led
        </p>
        <div className="mx-auto mt-6 max-w-5xl mask-fade-x">
          <Marquee pauseOnHover className="[--duration:32s] [--gap:3rem]">
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex items-center gap-3 opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              >
                <span className="flex size-9 items-center justify-center overflow-hidden rounded-xl border border-border bg-white">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={36}
                    height={36}
                    className="size-9 object-contain"
                  />
                </span>
                <span className="whitespace-nowrap text-lg font-medium tracking-tight">
                  {company.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* About bento */}
      <section id="about" className="scroll-mt-24 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <BlurFade inView>
            <SectionHeader
              kicker="About"
              title="Engineer by craft,"
              accent="builder by nature."
            />
          </BlurFade>

          <div className="mt-14 grid auto-rows-[minmax(0,auto)] gap-4 md:grid-cols-6">
            <BlurFade
              inView
              delay={BLUR_FADE_DELAY}
              className="md:col-span-2 md:row-span-2"
            >
              <div className="group relative h-full min-h-[28rem] overflow-hidden rounded-3xl border border-border">
                <Image
                  src={DATA.avatarUrl}
                  alt={DATA.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover object-[60%_55%] transition-transform duration-700 group-hover:scale-[1.03]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-black/40 p-4 text-white backdrop-blur-xl">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/60">
                    Currently
                  </p>
                  <p className="mt-1.5 text-base font-medium">
                    AI Agents & Search @ Fullscript
                  </p>
                  <p className="mt-1 text-sm text-white/65">
                    Prev. Shopify, Ross Video
                  </p>
                </div>
                <BorderBeam
                  size={160}
                  duration={8}
                  colorFrom="#3b82f6"
                  colorTo="#94a3b8"
                  borderWidth={1.5}
                />
              </div>
            </BlurFade>

            <BlurFade
              inView
              delay={BLUR_FADE_DELAY * 2}
              className="md:col-span-4"
            >
              <BentoCard className="h-full">
                <div className="flex h-full flex-col justify-between gap-8 p-8">
                  <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    <p className="text-xl leading-snug tracking-tight text-foreground sm:text-2xl">
                      I like finding the bottleneck, cleaning up the workflow,
                      and shipping software people genuinely want to keep
                      using.
                    </p>
                    <p>{DATA.summary}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "AI agents",
                      "Search & retrieval",
                      "Full-stack product",
                      "Internal tools",
                      "Observability",
                      "Working with people",
                    ].map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
              </BentoCard>
            </BlurFade>

            <BlurFade
              inView
              delay={BLUR_FADE_DELAY * 3}
              className="md:col-span-2"
            >
              <BentoCard className="h-full">
                <div className="flex h-full flex-col p-7">
                  <div className="flex items-center justify-between">
                    <GraduationCapIcon className="size-5 text-brand" />
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                      {education.start.split(" ")[1]} –{" "}
                      {education.end.split(" ")[1]}
                    </span>
                  </div>
                  <p className="mt-6 text-5xl font-semibold tracking-tight">
                    3.95
                    <span className="text-2xl text-muted-foreground">/4</span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Honours Computer Science, AI/ML concentration at{" "}
                    <span className="text-foreground">{education.school}</span>
                    . Fourth-year standing.
                  </p>
                </div>
              </BentoCard>
            </BlurFade>

            <BlurFade
              inView
              delay={BLUR_FADE_DELAY * 4}
              className="md:col-span-2"
            >
              <BentoCard className="h-full">
                <div className="flex h-full flex-col p-7">
                  <SearchIcon className="size-5 text-brand" />
                  <p className="mt-6 text-lg font-medium tracking-tight">
                    Obsessed with search
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Ranking, retrieval, and recommendation systems, from Top-K
                    pipelines to personalization at scale.
                  </p>
                </div>
              </BentoCard>
            </BlurFade>

            <BlurFade
              inView
              delay={BLUR_FADE_DELAY * 5}
              className="md:col-span-3"
            >
              <BentoCard className="h-full">
                <div className="flex h-full flex-col p-7">
                  <TrophyIcon className="size-5 text-brand" />
                  <p className="mt-6 text-lg font-medium tracking-tight">
                    $110K+ raised, 1,400+ hackers
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Led sponsorship for cuHacking and Hack the Hill, two of
                    Ottawa&apos;s largest hackathons, with a team of 50+.
                  </p>
                </div>
              </BentoCard>
            </BlurFade>

            <BlurFade
              inView
              delay={BLUR_FADE_DELAY * 6}
              className="md:col-span-3"
            >
              <BentoCard className="h-full">
                <div className="flex h-full flex-col p-7">
                  <SparklesIcon className="size-5 text-brand" />
                  <p className="mt-6 text-lg font-medium tracking-tight">
                    Off the keyboard
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    The gym, hiking and being outdoors, skincare, perfumes, and
                    tasting different kinds of honey.
                  </p>
                </div>
              </BentoCard>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-24 px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <BlurFade inView>
            <div className="lg:sticky lg:top-32">
              <SectionHeader
                kicker="Experience"
                title="Where I've"
                accent="shipped."
                description="Internships and teaching roles where I turned manual workflows into real software, shipped across the stack, and used AI where it actually saves time."
              />
              <div className="mt-10 rounded-3xl border border-border bg-card p-6">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Relevant coursework
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {coursework.map((course) => (
                    <Tag key={course}>{course}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </BlurFade>

          <ol className="relative space-y-4">
            <div className="absolute bottom-6 left-[1.6rem] top-6 w-px bg-gradient-to-b from-brand/60 via-border to-transparent sm:left-[1.85rem]" />
            {DATA.work.map((job, index) => (
              <BlurFade
                key={job.company + job.start}
                inView
                delay={BLUR_FADE_DELAY * (index + 1)}
              >
                <li className="relative pl-16 sm:pl-[4.5rem]">
                  <Link
                    href={job.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute left-0 top-6 flex size-[3.25rem] items-center justify-center overflow-hidden rounded-2xl border border-border bg-white shadow-sm sm:size-[3.75rem]"
                  >
                    <Image
                      src={job.logoUrl}
                      alt={job.company}
                      width={60}
                      height={60}
                      className="size-full object-contain p-1.5"
                    />
                  </Link>
                  <MagicCard className="rounded-3xl">
                    <div className="p-6 sm:p-7">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                        <div>
                          <h3 className="text-lg font-semibold tracking-tight">
                            {job.company}
                            {index === 0 ? (
                              <span className="ml-2.5 inline-flex -translate-y-0.5 items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 align-middle font-mono text-[0.6rem] uppercase tracking-[0.14em] text-emerald-500">
                                Current
                              </span>
                            ) : null}
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {job.title}
                          </p>
                        </div>
                        <p className="shrink-0 font-mono text-xs text-muted-foreground">
                          {job.start} — {job.end}
                        </p>
                      </div>
                      <ul className="mt-5 space-y-2.5">
                        {splitSentences(job.description).map((point) => (
                          <li
                            key={point}
                            className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                          >
                            <span className="mt-2 size-1 shrink-0 rounded-full bg-brand" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </MagicCard>
                </li>
              </BlurFade>
            ))}
          </ol>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <BlurFade inView>
            <SectionHeader
              kicker="Projects"
              title="Things I've"
              accent="built."
              description="Side projects, hackathon builds, and product experiments across AI, backend systems, and full-stack web apps."
            />
          </BlurFade>

          <BlurFade inView delay={BLUR_FADE_DELAY * 2} className="mt-14">
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card">
              <div className="grid lg:grid-cols-2">
                <div className="flex flex-col justify-between gap-10 p-8 sm:p-10">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-brand px-2.5 py-1 font-mono text-[0.62rem] font-medium uppercase tracking-[0.16em] text-white dark:text-zinc-950">
                        Featured
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {featuredProject.dates}
                      </span>
                    </div>
                    <h3 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                      {featuredProject.title}
                    </h3>
                    <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
                      {featuredProject.description}
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.technologies.map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                    </div>
                    {featuredProject.href ? (
                      <Link
                        href={featuredProject.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                      >
                        Visit site
                        <ArrowUpRightIcon className="size-4" />
                      </Link>
                    ) : null}
                  </div>
                </div>

                <div className="relative min-h-[22rem] overflow-hidden border-t border-border bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.18),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(148,163,184,0.12),transparent_60%)] lg:border-l lg:border-t-0">
                  <FlickeringGrid
                    className="absolute inset-0 mask-radial"
                    squareSize={3}
                    gridGap={6}
                    color="rgb(96, 165, 250)"
                    maxOpacity={0.25}
                    flickerChance={0.2}
                  />
                  <div className="absolute inset-8 flex flex-col justify-center gap-3 sm:inset-12">
                    {[
                      { t: "NVDA", p: "+4.21%", up: true, n: "Earnings beat, guidance raised" },
                      { t: "AAPL", p: "-0.84%", up: false, n: "Supply chain note flagged" },
                      { t: "MSFT", p: "+1.37%", up: true, n: "Bullish · 0.92 confidence" },
                    ].map((row) => (
                      <div
                        key={row.t}
                        className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white backdrop-blur-xl"
                      >
                        <div>
                          <p className="font-mono text-sm font-medium">
                            {row.t}
                          </p>
                          <p className="mt-0.5 text-xs text-white/55">
                            {row.n}
                          </p>
                        </div>
                        <span
                          className={cn(
                            "font-mono text-sm",
                            row.up ? "text-emerald-400" : "text-rose-400",
                          )}
                        >
                          {row.p}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <BorderBeam
                size={260}
                duration={10}
                colorFrom="#3b82f6"
                colorTo="#94a3b8"
                borderWidth={1.5}
              />
            </div>
          </BlurFade>

          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => {
              const link = project.links.find((l) => l.href) ?? null;
              return (
                <BlurFade
                  key={project.title}
                  inView
                  delay={BLUR_FADE_DELAY * (index + 3)}
                  className="h-full"
                >
                  <MagicCard className="h-full rounded-3xl">
                    <div className="flex h-full flex-col">
                      <div className="relative m-2 h-44 overflow-hidden rounded-[1.25rem] border border-border bg-secondary">
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.28),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(148,163,184,0.2),transparent_55%)]">
                            <span className="text-5xl font-semibold tracking-[-0.04em] text-foreground/90">
                              {project.title}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-1 flex-col p-6 pt-4">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="text-lg font-semibold tracking-tight">
                            {project.title}
                          </h3>
                          <span className="font-mono text-[0.68rem] text-muted-foreground">
                            {project.dates}
                          </span>
                        </div>
                        <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-muted-foreground">
                          {project.description}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 5).map((tech) => (
                            <Tag key={tech}>{tech}</Tag>
                          ))}
                        </div>
                        <div className="mt-auto pt-6">
                          {link ? (
                            <Link
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-brand"
                            >
                              {link.type === "Github" ? "View source" : "Visit site"}
                              <ArrowUpRightIcon className="size-3.5" />
                            </Link>
                          ) : (
                            <span className="text-sm text-muted-foreground">
                              Coming soon
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </MagicCard>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section id="skills" className="scroll-mt-24 px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <BlurFade inView>
            <SectionHeader
              kicker="Stack"
              title="Tools I reach for"
              accent="every day."
              description="From Elixir agent pipelines and Rails platforms to React frontends, search infrastructure, and observability."
            />
            <div className="mt-10 space-y-6">
              {skillCategories.map((category) => (
                <div key={category.label}>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {category.label}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border bg-card px-3 py-1.5 text-sm transition-colors hover:border-brand/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </BlurFade>

          <BlurFade inView delay={BLUR_FADE_DELAY * 2}>
            <div className="relative mx-auto flex h-[21rem] w-full items-center justify-center overflow-hidden sm:h-[32rem]">
            <div className="relative flex size-[32rem] shrink-0 scale-[0.64] items-center justify-center sm:scale-100">
              <div className="absolute size-40 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="relative z-10 size-24 shrink-0 overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
                <Image
                  src={DATA.avatarUrl}
                  alt={DATA.name}
                  fill
                  sizes="96px"
                  className="object-cover object-[60%_38%] scale-[1.35]"
                />
              </div>
              <OrbitingCircles iconSize={44} radius={110} duration={24}>
                <OrbitIcon icon={<SiElixir className="size-5 text-[#9b6bc1]" />} />
                <OrbitIcon icon={<SiTypescript className="size-5 text-[#3178c6]" />} />
                <OrbitIcon icon={<SiRubyonrails className="size-5 text-[#d30001]" />} />
                <OrbitIcon icon={<SiReact className="size-5 text-[#61dafb]" />} />
              </OrbitingCircles>
              <OrbitingCircles
                iconSize={48}
                radius={200}
                duration={36}
                reverse
              >
                <OrbitIcon icon={<SiPython className="size-5 text-[#3776ab]" />} />
                <OrbitIcon icon={<SiGo className="size-6 text-[#00add8]" />} />
                <OrbitIcon icon={<SiPostgresql className="size-5 text-[#4169e1]" />} />
                <OrbitIcon icon={<SiOpensearch className="size-5 text-[#005eb8]" />} />
                <OrbitIcon icon={<SiDocker className="size-5 text-[#2496ed]" />} />
                <OrbitIcon icon={<SiKubernetes className="size-5 text-[#326ce5]" />} />
                <OrbitIcon icon={<SiGraphql className="size-5 text-[#e10098]" />} />
                <OrbitIcon icon={<SiNextdotjs className="size-5" />} />
                <OrbitIcon icon={<SiGooglecloud className="size-5 text-[#4285f4]" />} />
              </OrbitingCircles>
            </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="scroll-mt-24 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <BlurFade inView>
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card">
              <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                <div className="flex flex-col justify-between gap-10 p-8 sm:p-10">
                  <SectionHeader
                    kicker="Resume"
                    title="The one-pager,"
                    accent="up to date."
                    description="Scroll, zoom, and read the PDF right here, or grab a copy for later."
                  />
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={resumeFile}
                      download
                      className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                    >
                      <DownloadIcon className="size-4" />
                      Download
                    </a>
                    <a
                      href={resumeFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                    >
                      Open full view
                      <ArrowUpRightIcon className="size-4" />
                    </a>
                  </div>
                </div>
                <div className="border-t border-border bg-secondary/40 p-3 lg:border-l lg:border-t-0">
                  <iframe
                    src={`${resumeFile}#toolbar=0&navpanes=0&view=FitH`}
                    title="Rayhaan Farooq Resume PDF"
                    className="h-[34rem] w-full rounded-[1.5rem] border border-border bg-white sm:h-[42rem]"
                  />
                </div>
              </div>
              <BorderBeam
                size={220}
                duration={12}
                colorFrom="#3b82f6"
                colorTo="#94a3b8"
                borderWidth={1.5}
              />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Community + Hackathons */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <BlurFade inView>
            <SectionHeader
              kicker="Community"
              title="Beyond the"
              accent="day job."
              description="Running hackathons, leading sponsorship, and building under pressure with great teams."
            />
          </BlurFade>

          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            <BlurFade inView delay={BLUR_FADE_DELAY}>
              <div className="h-full rounded-3xl border border-border bg-card p-3">
                <p className="px-4 pb-2 pt-4 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Leadership
                </p>
                <ul>
                  {DATA.clubs.map((club) => (
                    <li key={club.name + club.start}>
                      <Link
                        href={club.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex gap-4 rounded-2xl p-4 transition-colors hover:bg-secondary/70"
                      >
                        <span className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-white">
                          <Image
                            src={club.logoUrl}
                            alt={club.name}
                            width={44}
                            height={44}
                            className="size-11 object-contain"
                          />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-baseline justify-between gap-3">
                            <p className="truncate font-medium">{club.name}</p>
                            <span className="shrink-0 font-mono text-[0.68rem] text-muted-foreground">
                              {club.start.split(" ")[1]} –{" "}
                              {club.end === "Present"
                                ? "Now"
                                : club.end.split(" ")[1]}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {club.position}
                          </p>
                          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground/80">
                            {club.description}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </BlurFade>

            <BlurFade inView delay={BLUR_FADE_DELAY * 2}>
              <div className="h-full rounded-3xl border border-border bg-card p-3">
                <p className="px-4 pb-2 pt-4 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Hackathons & competitions
                </p>
                <ul>
                  {events.map((event) => {
                    const source = event.links.find((l) => l.href);
                    const Wrapper = source ? Link : "div";
                    return (
                      <li key={event.title + event.dates}>
                        <Wrapper
                          href={source?.href ?? ""}
                          target={source ? "_blank" : undefined}
                          rel={source ? "noopener noreferrer" : undefined}
                          className="group flex gap-4 rounded-2xl p-4 transition-colors hover:bg-secondary/70"
                        >
                          <span className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-secondary">
                            <Image
                              src={
                                event.image.startsWith("/")
                                  ? event.image
                                  : `/${event.image}`
                              }
                              alt={event.title}
                              width={44}
                              height={44}
                              className="size-11 object-cover"
                            />
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-baseline justify-between gap-3">
                              <p className="flex items-center gap-1.5 truncate font-medium">
                                {event.title}
                                {source ? (
                                  <ArrowUpRightIcon className="size-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                ) : null}
                              </p>
                              <span className="shrink-0 font-mono text-[0.68rem] text-muted-foreground">
                                {event.dates}
                              </span>
                            </div>
                            <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                              {event.description}
                            </p>
                          </div>
                        </Wrapper>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 px-6 pb-16 pt-24 sm:pt-32">
        <BlurFade inView>
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-border bg-card px-6 py-20 text-center sm:px-12 sm:py-28">
            <FlickeringGrid
              className="absolute inset-0 mask-radial"
              squareSize={3}
              gridGap={7}
              color="rgb(160, 160, 170)"
              maxOpacity={0.25}
              flickerChance={0.15}
            />
            <div className="absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-[100px]" />
            <div className="relative">
              <span className="section-kicker justify-center">Contact</span>
              <h2 className="mx-auto mt-6 max-w-3xl text-5xl font-semibold leading-[1] tracking-[-0.045em] text-balance sm:text-7xl">
                Let&apos;s build something{" "}
                <span className="accent-word pr-2">
                  great.
                </span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                I&apos;m always open to good teams, interesting product work,
                and technical problems worth caring about.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ShimmerButton
                  href={DATA.contact.social.email.url}
                  background="linear-gradient(135deg, #18181b, #09090b)"
                  shimmerColor="#93c5fd"
                  className="gap-2 px-7 py-3.5 text-sm font-medium shadow-[0_0_40px_-12px_rgba(59,130,246,0.5)]"
                >
                  <MailIcon className="size-4" />
                  {DATA.contact.email}
                </ShimmerButton>
                <div className="flex gap-2">
                  <Link
                    href={DATA.contact.social.LinkedIn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex size-12 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur-md transition-colors hover:bg-secondary"
                  >
                    <Icons.linkedin className="size-4" />
                  </Link>
                  <Link
                    href={DATA.contact.social.GitHub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="inline-flex size-12 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur-md transition-colors hover:bg-secondary"
                  >
                    <Icons.github className="size-4" />
                  </Link>
                  <a
                    href={resumeFile}
                    download
                    aria-label="Download resume"
                    className="inline-flex size-12 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur-md transition-colors hover:bg-secondary"
                  >
                    <DownloadIcon className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>

        <footer className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {DATA.name}
          </p>
          <p className="font-mono text-xs">
            Designed & built in Toronto · Next.js + Magic UI
          </p>
        </footer>
      </section>
    </main>
  );
}

function OrbitIcon({ icon }: { icon: ReactNode }) {
  return (
    <div className="flex size-full items-center justify-center rounded-full border border-border bg-card shadow-lg">
      {icon}
    </div>
  );
}
