import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentSections, CTA, FAQ, FaqSchema, InternalLinks, PageHero, PageSchema } from "@/components/PageBlocks";
import { ServiceImagePage } from "@/components/ServiceImagePage";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { allPages, getPage } from "@/lib/pages";
import { serviceImagePages } from "@/lib/serviceImageContent";

export function generateStaticParams() {
  return allPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return {};
  const serviceImage = serviceImagePages[page.slug];
  const image = serviceImage?.image ?? page.image;
  const imageAlt = serviceImage?.imageAlt ?? page.imageAlt;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
    keywords: [
      page.eyebrow,
      `${page.eyebrow} Orange County`,
      "Orange County smart home consultant",
      "managed smart home technology",
      "home Wi-Fi networking",
      "smart lighting control"
    ],
    openGraph: {
      title: page.title,
      description: page.description,
      url: `/${page.slug}`,
      siteName: "Elegant Home Automation",
      type: "website",
      images: [{ url: image, alt: imageAlt }]
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [image]
    }
  };
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();

  if (serviceImagePages[page.slug]) {
    return <ServiceImagePage page={page} content={serviceImagePages[page.slug]} />;
  }

  if (page.kind === "service") {
    return <ServicePageLayout page={page} />;
  }

  return (
    <>
      <FaqSchema faqs={page.faqs} path={`/${page.slug}`} />
      <PageSchema page={page} />
      <PageHero page={page} />
      <ContentSections page={page} />
      {page.slug === "smart-home-budget-estimator" && <EstimatorBlock />}
      {page.slug === "blog-learning-center" && <LearningBlock />}
      {page.slug === "reviews-project-gallery" && <GalleryBlock />}
      <InternalLinks links={page.links} />
      <FAQ faqs={page.faqs} />
      <CTA />
    </>
  );
}

function EstimatorBlock() {
  const rows = [
    ["Foundation", "Wi-Fi, network cleanup, documentation"],
    ["Comfort", "Lighting scenes, shades, climate coordination"],
    ["Security", "Camera placement, access, alerts, vendor alignment"],
    ["Entertainment", "Media room, distributed audio, clean controls"],
    ["Support", "Managed plan, checkups, priority consultation"]
  ];
  return (
    <section className="section bg-ivory">
      <div className="container-pad grid gap-8 lg:grid-cols-[0.75fr_1fr]">
        <div>
          <p className="eyebrow">Planning Tool</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink">Use these categories to frame the first budget conversation.</h2>
          <p className="mt-4 text-base leading-8 text-ink/60">This is intentionally simple for v1. Replace it with a calculator later if you want interactive ranges.</p>
        </div>
        <div className="grid gap-3">
          {rows.map(([title, copy]) => (
            <div key={title} className="grid gap-2 rounded-lg border border-ink/10 bg-white p-5 sm:grid-cols-[0.35fr_1fr]">
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm leading-7 text-ink/60">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningBlock() {
  const topics = [
    "What to plan before a smart home remodel",
    "Why reliable Wi-Fi matters more than more devices",
    "How to think about camera placement without over-alerting",
    "Lighting scenes that make a home feel calmer",
    "When managed smart home support is worth it"
  ];
  return (
    <section className="section bg-ivory">
      <div className="container-pad">
        <p className="eyebrow">Future Articles</p>
        <h2 className="section-title mt-4">Recommended first posts for launch month.</h2>
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {topics.map((topic) => (
            <div key={topic} className="rounded-lg border border-ink/10 bg-white p-5 text-sm font-semibold">{topic}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryBlock() {
  return (
    <section className="section bg-ivory">
      <div className="container-pad">
        <div className="rounded-lg border border-dashed border-ink/20 bg-white p-8 text-center">
          <p className="eyebrow">Honest Launch Placeholder</p>
          <h2 className="mt-4 text-3xl font-semibold">Project Gallery Coming Soon</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-ink/60">Replace this section with client-approved project photography, verified review snippets, and real customer feedback when those assets are available.</p>
        </div>
      </div>
    </section>
  );
}
