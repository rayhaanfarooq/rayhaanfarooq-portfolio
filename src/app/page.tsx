import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  MailIcon,
} from "lucide-react";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { Icons } from "@/components/icons";

const BLUR_FADE_DELAY = 0.04;

const skillCategories = [
  {
    label: "Languages",
    items: ["Typescript", "Javascript", "Golang", "Java", "Python", "Ruby", "SQL", "C", "C++", "Rust"],
  },
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "TailwindCSS", "HTML", "CSS"],
  },
  {
    label: "Backend & Data",
    items: ["Node.js", "Ruby on Rails", "PostgreSQL", "MongoDB", "Firebase", "Supabase"],
  },
  {
    label: "DevOps & Tools",
    items: ["Docker", "Git", "Jenkins", "Linux", "QNX", "GCP", "AWS", "Grafana"],
  },
  {
    label: "APIs & Services",
    items: ["Stripe", "OpenAI"],
  },
];

export default function Page() {
  const allEvents = [
    ...DATA.hackathons.map((h) => ({ ...h, _type: "hackathon" as const })),
    ...DATA.competitions.map((c) => ({ ...c, _type: "competition" as const })),
  ];

  return (
    <main className="flex flex-col min-h-[100dvh] relative overflow-hidden">
      <Analytics />

      {/* Page-level ambient blobs — stronger, denser coverage */}
      <div className="absolute top-[60vh] -right-40 w-[800px] h-[800px] bg-gradient-to-br from-violet-300/25 to-indigo-200/25 dark:from-violet-600/12 dark:to-indigo-500/12 rounded-full blur-[160px] animate-blob pointer-events-none" />
      <div className="absolute top-[130vh] -left-40 w-[750px] h-[750px] bg-gradient-to-br from-fuchsia-300/22 to-pink-200/22 dark:from-fuchsia-600/10 dark:to-pink-500/10 rounded-full blur-[160px] animate-blob animation-delay-4000 pointer-events-none" />
      <div className="absolute top-[200vh] right-[-5%] w-[700px] h-[700px] bg-gradient-to-br from-indigo-300/20 to-blue-200/20 dark:from-indigo-600/10 dark:to-blue-500/10 rounded-full blur-[160px] animate-blob animation-delay-6000 pointer-events-none" />
      <div className="absolute top-[280vh] -left-40 w-[800px] h-[800px] bg-gradient-to-br from-purple-300/22 to-violet-200/22 dark:from-purple-600/10 dark:to-violet-500/10 rounded-full blur-[160px] animate-blob animation-delay-2000 pointer-events-none" />
      <div className="absolute top-[360vh] -right-40 w-[750px] h-[750px] bg-gradient-to-br from-rose-300/20 to-pink-200/20 dark:from-rose-600/10 dark:to-pink-500/10 rounded-full blur-[160px] animate-blob pointer-events-none" />
      <div className="absolute top-[440vh] -left-40 w-[700px] h-[700px] bg-gradient-to-br from-violet-300/20 to-fuchsia-200/20 dark:from-violet-600/10 dark:to-fuchsia-500/10 rounded-full blur-[160px] animate-blob animation-delay-6000 pointer-events-none" />
      <div className="absolute top-[520vh] -right-40 w-[750px] h-[750px] bg-gradient-to-br from-indigo-300/20 to-violet-200/20 dark:from-indigo-600/10 dark:to-violet-500/10 rounded-full blur-[160px] animate-blob animation-delay-2000 pointer-events-none" />
      <div className="absolute top-[600vh] -left-40 w-[700px] h-[700px] bg-gradient-to-br from-fuchsia-300/18 to-rose-200/18 dark:from-fuchsia-600/8 dark:to-rose-500/8 rounded-full blur-[160px] animate-blob animation-delay-4000 pointer-events-none" />

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section
        id="hero"
        className="min-h-[100dvh] flex items-center relative overflow-hidden"
      >
        <div className="absolute top-[15%] -left-24 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 to-cyan-300/20 dark:from-blue-500/10 dark:to-cyan-400/10 rounded-full blur-[140px] animate-blob" />
        <div className="absolute top-[30%] -right-20 w-[450px] h-[450px] bg-gradient-to-br from-violet-400/15 to-fuchsia-300/15 dark:from-violet-500/10 dark:to-fuchsia-400/10 rounded-full blur-[140px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[20%] left-[30%] w-[400px] h-[400px] bg-gradient-to-br from-amber-300/15 to-orange-200/15 dark:from-amber-500/8 dark:to-orange-400/8 rounded-full blur-[140px] animate-blob animation-delay-4000" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <BlurFade delay={0.1}>
              <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] tracking-tight leading-[1.08]">
                <span className="font-light text-muted-foreground">
                  Hi, I&apos;m{" "}
                </span>
                <Avatar className="inline-flex size-[0.85em] align-[-0.1em] mx-0.5 border-2 border-border/60 shadow-lg">
                  <AvatarImage
                    alt={DATA.name}
                    src={DATA.avatarUrl}
                    className="object-cover"
                  />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
                <span className="font-bold"> Rayhaan!</span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.3}>
              <h2 className="text-[clamp(2.2rem,5.5vw,5rem)] tracking-tight leading-[1.08] mt-1">
                <span className="font-light text-muted-foreground">
                  I&apos;m a{" "}
                </span>
                <span className="font-bold">Software Engineer</span>
              </h2>
            </BlurFade>

            <BlurFade delay={0.5}>
              <h2 className="text-[clamp(2.2rem,5.5vw,5rem)] tracking-tight leading-[1.08] mt-1">
                <span className="font-light text-muted-foreground">
                  who{" "}
                </span>
                <span className="font-bold bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                  builds &amp; ships.
                </span>
              </h2>
            </BlurFade>

            <BlurFade delay={0.7}>
              <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Feel free to explore my portfolio and reach out — I&apos;d love
                to connect!
              </p>
            </BlurFade>

            <BlurFade delay={0.85}>
              <Link
                href={`mailto:${DATA.contact.email}`}
                className="inline-flex items-center gap-2.5 mt-6 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 dark:from-violet-500/15 dark:to-fuchsia-500/15 border border-violet-300/40 dark:border-violet-500/25 text-foreground hover:from-violet-500/20 hover:to-fuchsia-500/20 transition-all duration-300 text-sm font-medium shadow-sm"
              >
                <MailIcon className="size-4" />
                {DATA.contact.email}
              </Link>
            </BlurFade>

            <BlurFade delay={0.95}>
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-all duration-200 shadow-lg shadow-foreground/5"
                >
                  View My Work
                  <ArrowDownIcon className="size-4" />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border/60 text-sm font-medium hover:bg-accent transition-all duration-200"
                >
                  Get In Touch
                  <ArrowUpRightIcon className="size-4" />
                </Link>
              </div>
            </BlurFade>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="animate-bounce-gentle">
            <ArrowDownIcon className="size-5 text-muted-foreground/40" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════ ABOUT ═══════════════════════ */}
      <section id="about" className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 -top-32 -bottom-32 bg-gradient-to-b from-transparent via-secondary/40 to-transparent dark:via-secondary/25 pointer-events-none" />
        <div className="absolute top-[10%] right-[0%] w-[550px] h-[550px] bg-gradient-to-br from-violet-300/25 to-indigo-200/22 dark:from-violet-500/12 dark:to-indigo-400/10 rounded-full blur-[140px] animate-blob animation-delay-2000 pointer-events-none" />
        <div className="absolute bottom-[5%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-pink-300/20 to-rose-200/18 dark:from-pink-500/10 dark:to-rose-400/8 rounded-full blur-[140px] animate-blob animation-delay-6000 pointer-events-none" />
        <div className="absolute top-[50%] left-[40%] w-[400px] h-[400px] bg-gradient-to-br from-fuchsia-300/15 to-purple-200/12 dark:from-fuchsia-500/8 dark:to-purple-400/6 rounded-full blur-[140px] animate-blob animation-delay-4000 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[260px_1fr] gap-12 lg:gap-20 items-start">
            <BlurFade delay={BLUR_FADE_DELAY} inView>
              <Avatar className="size-56 md:size-64 mx-auto md:mx-0 rounded-full border-2 border-border/50 shadow-2xl">
                <AvatarImage
                  alt={DATA.name}
                  src={DATA.avatarUrl}
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl rounded-full">
                  {DATA.initials}
                </AvatarFallback>
              </Avatar>
            </BlurFade>
            <div>
              <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
                  A bit about me
                </h2>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 4} inView>
                <div className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  <p>{DATA.description}</p>
                  <p>{DATA.summary}</p>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ EXPERIENCE ═══════════════════════ */}
      <section id="experience" className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 -top-32 -bottom-32 bg-gradient-to-b from-transparent via-violet-100/20 to-transparent dark:via-violet-900/10 pointer-events-none" />
        <div className="absolute top-[10%] right-[-3%] w-[550px] h-[550px] bg-gradient-to-br from-indigo-300/22 to-violet-200/20 dark:from-indigo-500/10 dark:to-violet-400/8 rounded-full blur-[140px] animate-blob pointer-events-none" />
        <div className="absolute bottom-[5%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-fuchsia-300/22 to-pink-200/20 dark:from-fuchsia-500/10 dark:to-pink-400/8 rounded-full blur-[140px] animate-blob animation-delay-4000 pointer-events-none" />
        <div className="absolute top-[45%] left-[50%] w-[400px] h-[400px] bg-gradient-to-br from-purple-300/15 to-indigo-200/12 dark:from-purple-500/8 dark:to-indigo-400/6 rounded-full blur-[140px] animate-blob animation-delay-2000 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-3">
              Where I&apos;ve worked
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Shipping features at scale, from startups to global platforms.
            </p>
          </BlurFade>
          <div className="space-y-1">
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company + work.start}
                delay={BLUR_FADE_DELAY * 2 + id * 0.05}
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
      </section>

      {/* ═══════════════════════ EDUCATION ═══════════════════════ */}
      <section id="education" className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 -top-32 -bottom-32 bg-gradient-to-b from-transparent via-secondary/40 to-transparent dark:via-secondary/25 pointer-events-none" />
        <div className="absolute top-[15%] right-[-3%] w-[550px] h-[550px] bg-gradient-to-br from-indigo-300/25 to-violet-200/22 dark:from-indigo-500/12 dark:to-violet-400/10 rounded-full blur-[140px] animate-blob pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-fuchsia-300/20 to-pink-200/18 dark:from-fuchsia-500/10 dark:to-pink-400/8 rounded-full blur-[140px] animate-blob animation-delay-4000 pointer-events-none" />
        <div className="absolute top-[60%] right-[30%] w-[350px] h-[350px] bg-gradient-to-br from-rose-300/15 to-orange-200/12 dark:from-rose-500/8 dark:to-orange-400/6 rounded-full blur-[140px] animate-blob animation-delay-6000 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-12">
              Education
            </h2>
          </BlurFade>
          <div className="space-y-1">
            {DATA.education.map((edu, id) => (
              <BlurFade
                key={edu.school}
                delay={BLUR_FADE_DELAY * 2 + id * 0.05}
                inView
              >
                <ResumeCard
                  logoUrl={edu.logoUrl}
                  altText={edu.school}
                  title={edu.school}
                  subtitle={edu.degree}
                  href={edu.href}
                  period={`${edu.start} - ${edu.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SKILLS ═══════════════════════ */}
      <section id="skills" className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 -top-32 -bottom-32 bg-gradient-to-b from-transparent via-fuchsia-100/15 to-transparent dark:via-fuchsia-900/8 pointer-events-none" />
        <div className="absolute top-[10%] left-[-5%] w-[550px] h-[550px] bg-gradient-to-br from-purple-300/25 to-fuchsia-200/22 dark:from-purple-500/12 dark:to-fuchsia-400/10 rounded-full blur-[140px] animate-blob animation-delay-2000 pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-3%] w-[500px] h-[500px] bg-gradient-to-br from-cyan-300/20 to-blue-200/18 dark:from-cyan-500/10 dark:to-blue-400/8 rounded-full blur-[140px] animate-blob animation-delay-6000 pointer-events-none" />
        <div className="absolute top-[50%] left-[45%] w-[400px] h-[400px] bg-gradient-to-br from-violet-300/18 to-indigo-200/15 dark:from-violet-500/8 dark:to-indigo-400/6 rounded-full blur-[140px] animate-blob pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-14 text-center">
              Skills &amp; Technologies
            </h2>
          </BlurFade>
          <div className="space-y-10">
            {skillCategories.map((category, catIdx) => (
              <BlurFade
                key={category.label}
                delay={BLUR_FADE_DELAY * 2 + catIdx * 0.08}
                inView
              >
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                    {category.label}
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {category.items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="px-4 py-2 text-sm font-medium cursor-default hover:bg-accent hover:scale-[1.03] transition-all duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ PROJECTS ═══════════════════════ */}
      <section id="projects" className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 -top-32 -bottom-32 bg-gradient-to-b from-transparent via-secondary/40 to-transparent dark:via-secondary/25 pointer-events-none" />
        <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-violet-300/25 to-purple-200/22 dark:from-violet-500/12 dark:to-purple-400/10 rounded-full blur-[140px] animate-blob animation-delay-4000 pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-5%] w-[550px] h-[550px] bg-gradient-to-br from-pink-300/22 to-rose-200/20 dark:from-pink-500/10 dark:to-rose-400/8 rounded-full blur-[140px] animate-blob animation-delay-6000 pointer-events-none" />
        <div className="absolute top-[50%] left-[50%] w-[450px] h-[450px] bg-gradient-to-br from-indigo-300/18 to-blue-200/15 dark:from-indigo-500/8 dark:to-blue-400/6 rounded-full blur-[140px] animate-blob animation-delay-2000 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <BlurFade delay={BLUR_FADE_DELAY} inView>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
                Featured Projects
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                From AI-powered tools to full-stack applications — here are a
                few things I&apos;ve built.
              </p>
            </BlurFade>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 2 + id * 0.1}
                inView
              >
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CLUBS ═══════════════════════ */}
      <section id="clubs" className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 -top-32 -bottom-32 bg-gradient-to-b from-transparent via-indigo-100/15 to-transparent dark:via-indigo-900/8 pointer-events-none" />
        <div className="absolute top-[10%] right-[-3%] w-[550px] h-[550px] bg-gradient-to-br from-rose-300/25 to-pink-200/22 dark:from-rose-500/12 dark:to-pink-400/10 rounded-full blur-[140px] animate-blob animation-delay-2000 pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-violet-300/22 to-purple-200/20 dark:from-violet-500/10 dark:to-purple-400/8 rounded-full blur-[140px] animate-blob animation-delay-6000 pointer-events-none" />
        <div className="absolute top-[55%] right-[35%] w-[380px] h-[380px] bg-gradient-to-br from-fuchsia-300/15 to-indigo-200/12 dark:from-fuchsia-500/8 dark:to-indigo-400/6 rounded-full blur-[140px] animate-blob animation-delay-4000 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-3">
              Clubs &amp; Organizations
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Building communities and connections beyond the code.
            </p>
          </BlurFade>
          <div className="space-y-1">
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
      </section>

      {/* ═══════════════════════ HACKATHONS & COMPETITIONS ═══════════════════════ */}
      <section id="hackathons" className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 -top-32 -bottom-32 bg-gradient-to-b from-transparent via-secondary/40 to-transparent dark:via-secondary/25 pointer-events-none" />
        <div className="absolute top-[10%] right-[-5%] w-[550px] h-[550px] bg-gradient-to-br from-indigo-300/25 to-violet-200/22 dark:from-indigo-500/12 dark:to-violet-400/10 rounded-full blur-[140px] animate-blob animation-delay-2000 pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-orange-300/20 to-rose-200/18 dark:from-orange-500/10 dark:to-rose-400/8 rounded-full blur-[140px] animate-blob animation-delay-6000 pointer-events-none" />
        <div className="absolute top-[45%] left-[40%] w-[400px] h-[400px] bg-gradient-to-br from-purple-300/18 to-fuchsia-200/15 dark:from-purple-500/8 dark:to-fuchsia-400/6 rounded-full blur-[140px] animate-blob pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <BlurFade delay={BLUR_FADE_DELAY} inView>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
                Hackathons &amp; Competitions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Turning ideas into reality under pressure — from building at
                hackathons to pitching at competitions.
              </p>
            </BlurFade>
          </div>
          <ul className="space-y-2">
            {allEvents.map((item, id) => (
              <BlurFade
                key={item.title + item.dates}
                delay={BLUR_FADE_DELAY * 2 + id * 0.05}
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
      </section>

      {/* ═══════════════════════ CONTACT ═══════════════════════ */}
      <section id="contact" className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 -top-32 -bottom-32 bg-gradient-to-b from-transparent via-violet-100/15 to-transparent dark:via-violet-900/8 pointer-events-none" />
        <div className="absolute top-[10%] right-[0%] w-[550px] h-[550px] bg-gradient-to-br from-violet-300/25 to-fuchsia-200/22 dark:from-violet-500/12 dark:to-fuchsia-400/10 rounded-full blur-[140px] animate-blob pointer-events-none" />
        <div className="absolute bottom-[10%] left-[0%] w-[500px] h-[500px] bg-gradient-to-br from-indigo-300/22 to-blue-200/20 dark:from-indigo-500/10 dark:to-blue-400/8 rounded-full blur-[140px] animate-blob animation-delay-4000 pointer-events-none" />
        <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] bg-gradient-to-br from-pink-300/18 to-rose-200/15 dark:from-pink-500/8 dark:to-rose-400/6 rounded-full blur-[140px] animate-blob animation-delay-2000 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Let&apos;s build something
              <br />
              <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                together.
              </span>
            </h2>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Always open to new opportunities, interesting projects, and great
              conversations.
            </p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4} inView>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <Link
                href={DATA.contact.social.LinkedIn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-all duration-200 shadow-lg shadow-foreground/5"
              >
                <Icons.linkedin className="size-4" />
                Connect on LinkedIn
              </Link>
              <Link
                href={DATA.contact.social.GitHub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-border/60 text-sm font-medium hover:bg-accent transition-all duration-200"
              >
                <Icons.github className="size-4" />
                View GitHub
              </Link>
              <Link
                href={DATA.contact.social.email.url}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-border/60 text-sm font-medium hover:bg-accent transition-all duration-200"
              >
                <MailIcon className="size-4" />
                Send Email
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ═══════════════════════ FOOTER ═══════════════════════ */}
      <footer className="py-8 text-center text-sm text-muted-foreground">
        <div className="max-w-6xl mx-auto px-6">
          <p>
            &copy; {new Date().getFullYear()} {DATA.name}. Built with Next.js
            &amp; Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  );
}
