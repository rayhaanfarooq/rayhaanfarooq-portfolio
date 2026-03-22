import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="min-h-[100dvh] pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            Blog
          </h1>
          <p className="text-muted-foreground mb-12">
            Thoughts on software engineering, building products, and things
            I&apos;m learning along the way.
          </p>
        </BlurFade>

        {posts.length === 0 && (
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <p className="text-muted-foreground">
              No posts yet — check back soon!
            </p>
          </BlurFade>
        )}

        <div className="space-y-1">
          {posts
            .sort((a, b) =>
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
                ? -1
                : 1
            )
            .map((post, id) => (
              <BlurFade
                delay={BLUR_FADE_DELAY * 2 + id * 0.05}
                key={post.slug}
              >
                <Link
                  className="group flex items-center justify-between gap-4 py-4 px-4 -mx-4 rounded-xl hover:bg-accent/50 transition-colors duration-200"
                  href={`/blog/${post.slug}`}
                >
                  <div className="min-w-0">
                    <p className="font-medium tracking-tight group-hover:text-foreground transition-colors">
                      {post.metadata.title}
                    </p>
                    {post.metadata.summary && (
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                        {post.metadata.summary}
                      </p>
                    )}
                  </div>
                  <time className="text-sm text-muted-foreground whitespace-nowrap shrink-0">
                    {new Date(post.metadata.publishedAt).toLocaleDateString(
                      "en-US",
                      { month: "short", day: "numeric", year: "numeric" }
                    )}
                  </time>
                </Link>
              </BlurFade>
            ))}
        </div>
      </div>
    </main>
  );
}
