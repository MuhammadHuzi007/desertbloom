import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2);

  return (
    <article className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <Badge variant="secondary" className="mb-4">{post.category}</Badge>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
          <span className="flex items-center gap-1"><User className="w-4 h-4" />{post.author}</span>
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{post.date}</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime}</span>
        </div>

        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden mb-10">
          <Image src={post.image} alt={post.title} fill className="object-cover" sizes="768px" priority />
        </div>

        <div className="prose prose-lg max-w-none text-foreground">
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">{post.excerpt}</p>
          <p className="leading-relaxed mb-6">
            Bahawalpur&apos;s unique semi-arid climate presents both challenges and opportunities for gardeners
            and farmers. With temperatures reaching 48°C in summer and mild winters, plant selection and
            water management are critical to success. Our team has spent years studying which varieties
            thrive in these conditions and how to optimize growing environments.
          </p>
          <p className="leading-relaxed mb-6">
            The key to successful horticulture in this region lies in understanding the soil composition —
            predominantly sandy loam with alkaline pH — and adapting irrigation schedules to the extreme
            seasonal variation. Drip irrigation, mulching, and shade structures can dramatically improve
            plant survival rates during peak summer months.
          </p>
          <p className="leading-relaxed">
            Whether you&apos;re establishing a home garden or managing a commercial orchard, the principles
            remain the same: choose climate-adapted varieties, invest in efficient irrigation, and maintain
            a consistent care schedule. Our consultants are always available to provide personalized advice
            for your specific situation.
          </p>
        </div>

        {related.length > 0 && (
          <div className="mt-16 pt-10 border-t border-border">
            <h3 className="text-xl font-bold mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link key={p.id} href={`/blog/${p.slug}`} className="group flex gap-4 p-4 rounded-xl border border-border hover:border-primary/30 transition-all">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                    <Image src={p.image} alt={p.title} fill className="object-cover" sizes="80px" />
                  </div>
                  <div>
                    <p className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-2">{p.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{p.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
