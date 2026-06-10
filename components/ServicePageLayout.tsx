import { FAQ, FaqSchema, PageSchema } from "@/components/PageBlocks";
import {
  AlternatingFeatureBlock,
  HeroBanner,
  LeadFormSection,
  MasonryGallery,
  ProcessSteps,
  RelatedServices,
  VideoIntroSection
} from "@/components/MarketingComponents";
import { PageData } from "@/lib/pages";

const serviceDetails: Record<string, { image: string; positioning: string; outcome: string; gallery: Array<{ title: string; image: string }> }> = {
  "smart-home-automation": {
    image: "/images/morning-routine-wo-text.png",
    positioning: "Effortless living and one-touch routines for the moments your household repeats every day.",
    outcome: "One-touch routines for mornings, evenings, entertaining, away mode, and comfort.",
    gallery: sceneGallery()
  },
  "motorized-shades": {
    image: "/images/smart-shades.jpg",
    positioning: "Style, privacy, comfort, and natural light control without daily adjustment.",
    outcome: "Natural light, privacy, glare, and heat control designed around the architecture.",
    gallery: sceneGallery("/images/smart-shades.jpg")
  },
  "home-audio-video-media-rooms": {
    image: "/images/home-theater.jpg",
    positioning: "Cinematic family entertainment at home with clean controls and discreet equipment planning.",
    outcome: "Media rooms, whole-home audio, outdoor listening, and simple control for everyday entertainment.",
    gallery: sceneGallery("/images/home-theater.jpg", "/images/audio-video.jpg")
  },
  "smart-security-cameras": {
    image: "/images/smart-security.jpg",
    positioning: "Peace of mind from anywhere with useful camera visibility, alerts, and access awareness.",
    outcome: "Security planning that makes arrivals, gates, driveways, packages, and away mode easier to understand.",
    gallery: sceneGallery("/images/smart-security.jpg", "/images/away-mode.jpg")
  },
  "smart-lighting-control": {
    image: "/images/smart-lighting.jpg",
    positioning: "Mood, ambiance, and indoor/outdoor living scenes that make the home feel composed.",
    outcome: "Lighting scenes for arrivals, evenings, entertaining, travel, and outdoor living.",
    gallery: sceneGallery("/images/smart-lighting.jpg", "/images/Entertaining-wo-text.png")
  },
  "home-wifi-networking": {
    image: "/images/networking-wifi.jpg",
    positioning: "Reliable connectivity in every corner for work, cameras, streaming, guests, and smart systems.",
    outcome: "A stronger foundation for every connected system in the home.",
    gallery: sceneGallery("/images/networking-wifi.jpg", "/images/home-office-wo-text.png")
  }
};

export function ServicePageLayout({ page }: { page: PageData }) {
  const details = serviceDetails[page.slug] ?? {
    image: page.image,
    positioning: page.intro,
    outcome: page.intro,
    gallery: sceneGallery(page.image)
  };

  return (
    <>
      <FaqSchema faqs={page.faqs} path={`/${page.slug}`} />
      <PageSchema page={page} />
      <HeroBanner
        eyebrow={`${page.eyebrow} Orange County`}
        title={page.h1}
        copy={details.positioning}
        image={details.image}
        imageAlt={page.imageAlt}
        primary="Call Us"
        secondary="Schedule a Call"
      />
      <VideoIntroSection
        title={`A calmer way to plan ${page.eyebrow.toLowerCase()}`}
        copy="We begin with the homeowner experience: what should happen, which rooms matter most, which vendors need to coordinate, and what will be easy to support later."
        image={details.image}
      />
      <section className="section bg-ivory">
        <div className="container-pad grid gap-8 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="eyebrow">Why It Matters</p>
            <h2 className="section-title mt-4">{details.outcome}</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {page.sections.map((section) => (
              <article key={section.title} className="rounded-lg bg-white p-6 shadow-soft">
                <h3 className="font-display text-xl font-black uppercase leading-none">{section.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink/62">{section.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <MasonryGallery items={details.gallery} />
      <AlternatingFeatureBlock image={details.image} title="Designed Around Daily Life" copy={details.outcome} />
      <ProcessSteps />
      <LeadFormSection image={details.image} />
      <RelatedServices currentHref={`/${page.slug}`} />
      <FAQ faqs={page.faqs} />
    </>
  );
}

function sceneGallery(primary = "/images/morning-routine-wo-text.png", secondary = "/images/movie-night-wo-text.png") {
  return [
    { title: "Lifestyle Scene", image: primary },
    { title: "Morning Routine", image: "/images/morning-routine-wo-text.png" },
    { title: "Movie Night", image: secondary },
    { title: "Away Mode", image: "/images/Away-Mode-wo-text.png" },
    { title: "Entertaining", image: "/images/Entertaining-wo-text.png" },
    { title: "Work From Home", image: "/images/home-office-wo-text.png" },
    { title: "Smart Lighting", image: "/images/smart-lighting.jpg" },
    { title: "Network Foundation", image: "/images/networking-wifi.jpg" }
  ];
}
