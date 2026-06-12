import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const metaDescription =
  "Looking for a smart home installer in Irvine? Elegant Home Automation designs and installs premium smart lighting, shades, audio, security, networking, and home automation systems across Irvine and Orange County.";

const faqItems = [
  ["How much does smart home installation cost in Irvine?", "Cost depends on the size of the home, the systems being installed, and the level of integration required. A focused lighting, shade, or audio project may be smaller in scope, while a whole-home automation system requires more design, wiring, equipment, and programming. We recommend starting with a consultation so we can understand your home and goals."],
  ["Can you automate an existing Irvine home?", "Yes. Many Irvine homeowners add smart lighting, motorized shades, audio, networking, security, and control systems to existing homes. Some projects require wiring, while others can be completed with a thoughtful retrofit approach."],
  ["What smart home systems do you install?", "We design and install smart lighting, motorized shades, whole-home audio, home theater, security, access control, networking, and integrated control systems."],
  ["Do I need a complete home remodel to add automation?", "No. A remodel can be an ideal time to plan deeper integration, but many smart home upgrades can be added to existing homes without a full renovation."],
  ["Can smart lighting and motorized shades work together?", "Yes. Lighting and shades can be integrated into scenes that adjust throughout the day, support privacy, reduce glare, and create a more comfortable living environment."],
  ["How long does a smart home installation take?", "Timeline depends on project scope. Smaller upgrades may take less time, while full-home systems require planning, equipment coordination, installation, and programming."],
  ["Do you work with builders and interior designers?", "Yes. We can collaborate with builders, architects, designers, and homeowners to plan technology early and ensure the final installation supports the design of the home."],
  ["What areas near Irvine do you serve?", "We serve Irvine and surrounding Orange County communities, including Newport Beach, Newport Coast, Costa Mesa, Tustin, Laguna Beach, Mission Viejo, Laguna Niguel, and Dana Point."]
];

const trustItems = [
  ["Thoughtful Design", "Technology should enhance your home, not complicate it."],
  ["Professional Installation", "Clean, organized installations with attention to detail."],
  ["Seamless Integration", "Lighting, audio, security, networking, and control working together."],
  ["Local Orange County Service", "Serving Irvine and surrounding Orange County communities."]
];

const services = [
  ["Smart Lighting Control", "Scene-based lighting, scheduling, and effortless control.", "/smart-lighting-control-orange-county"],
  ["Motorized Shades", "Privacy, comfort, energy efficiency, and elegant automation.", "/motorized-shades-orange-county"],
  ["Whole Home Audio", "Beautiful sound throughout your home without clutter.", "/home-audio-video-media-rooms"],
  ["Home Theater", "Immersive entertainment designed around the room.", "/home-audio-video-media-rooms"],
  ["Security & Access Control", "Smart locks, cameras, video doorbells, and access control.", "/smart-security-cameras"],
  ["Home Networking", "Reliable Wi-Fi and networking infrastructure for connected homes.", "/whole-home-wifi-installation-orange-county"]
];

const neighborhoods = ["Great Park", "Orchard Hills", "Portola Springs", "Woodbury", "Turtle Rock", "Shady Canyon", "Quail Hill"];

const planningChecklist = [
  "Low-voltage prewire",
  "Lighting design",
  "Shade planning",
  "Audio distribution",
  "Security planning",
  "Equipment placement"
];

const differentiators = [
  ["Design First", "Technology should support the beauty of your home, not distract from it."],
  ["Simplicity Matters", "One-touch control and intuitive experiences instead of dozens of apps and remotes."],
  ["Built for Reliability", "Systems engineered for performance, stability, and everyday use."],
  ["Long-Term Partnership", "We are here long after installation with service, support, and ongoing care."]
];

const cityLinks = [
  ["Newport Beach", "/smart-home-automation-newport-beach"],
  ["Costa Mesa", "/costa-mesa-smart-home-automation"],
  ["Newport Coast", "/newport-coast-smart-home-automation"],
  ["Laguna Beach", "/laguna-beach-smart-home-automation"],
  ["Tustin", "/tustin-smart-home-automation"],
  ["Mission Viejo", "/blog-learning-center"]
];

export const metadata: Metadata = {
  title: { absolute: "Smart Home Installer Irvine, CA | Elegant Home Automation" },
  description: metaDescription,
  alternates: { canonical: "/blog/smart-home-installer-irvine" },
  keywords: [
    "smart home installer Irvine",
    "smart home installation Irvine",
    "home automation installer Irvine",
    "smart home company Irvine",
    "Control4 installer Irvine",
    "Lutron installer Irvine",
    "smart lighting Irvine",
    "motorized shades Irvine",
    "whole home audio Irvine",
    "home networking Irvine"
  ],
  openGraph: {
    title: "Smart Home Installer Irvine, CA | Elegant Home Automation",
    description: metaDescription,
    url: "/blog/smart-home-installer-irvine",
    type: "article",
    images: [{ url: "/images/Entertaining - wo text.png", alt: "Luxury smart home installation in Irvine California" }]
  }
};

export default function SmartHomeInstallerIrvinePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Smart Home Installer Irvine",
          description: metaDescription,
          provider: {
            "@type": "LocalBusiness",
            "@id": `${site.url}#business`,
            name: site.name,
            areaServed: "Irvine, CA"
          },
          areaServed: ["Irvine, CA", "Orange County, CA"],
          url: `${site.url}/blog/smart-home-installer-irvine`
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map(([question, answer]) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer }
          }))
        }}
      />

      <section className="relative min-h-[660px] overflow-hidden bg-ink text-white">
        <Image src="/images/Entertaining - wo text.png" alt="Luxury smart home installation in Irvine California" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/62 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/52 via-transparent to-black/20" />
        <div className="container-pad relative flex min-h-[660px] items-center py-20">
          <div className="max-w-2xl">
            <nav className="mb-8 text-sm font-semibold text-white/72" aria-label="Breadcrumb">
              <Link href="/" className="transition hover:text-copper">Home</Link>
              <span className="px-2 text-white/35">/</span>
              <Link href="/blog-learning-center" className="transition hover:text-copper">Blog</Link>
              <span className="px-2 text-white/35">/</span>
              <span>Smart Home Installer Irvine</span>
            </nav>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Smart Home Installer Irvine</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] sm:text-6xl">Smart Home Installation in Irvine, CA</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              Transform your Irvine home with professionally designed smart lighting, motorized shades, whole-home audio, networking, security, and automation systems that are intuitive, reliable, and beautifully integrated.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={site.consultationPath} className="button-primary">Schedule a Consultation</Link>
              <Link href="/smart-home-automation-orange-county" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">View Smart Home Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white">
        <div className="container-pad grid gap-0 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map(([title, copy]) => (
            <article key={title} className="border-ink/10 px-6 py-6 text-center lg:border-r lg:last:border-r-0">
              <Icon kind="design" className="mx-auto h-10 w-10 text-copper" />
              <h2 className="mt-5 text-lg font-semibold text-ink">{title}</h2>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-ink/62">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Smart Home Installation Services</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink">Complete Smart Home Solutions for Irvine Homes</h2>
            <p className="mt-6 text-base leading-8 text-ink/68">
              Every home is unique. We design and install smart home systems that fit your lifestyle, your home, and the way you want to live.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, copy, href], index) => (
              <Link key={title} href={href} className="group rounded-lg border border-ink/10 bg-white p-6 shadow-soft transition hover:-translate-y-1">
                <Icon kind={String(index)} className="h-10 w-10 text-copper" />
                <h3 className="mt-5 text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/62">{copy}</p>
                <span className="mt-5 inline-block text-sm font-semibold text-copper">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Smart Home Solutions in Irvine</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink">Designed for Irvine Homes & Lifestyles</h2>
            <p className="mt-6 text-base leading-8 text-ink/68">
              From modern new builds to established Irvine neighborhoods, we create smart home solutions that enhance comfort, convenience, and peace of mind. Whether you are planning a remodel, upgrading an existing system, or building a new home, our goal is to make your technology feel effortless and beautifully integrated.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {neighborhoods.map((neighborhood) => (
                <div key={neighborhood} className="flex items-center gap-3 text-sm font-semibold text-ink/70">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-copper/40 text-xs text-copper">✓</span>
                  {neighborhood}
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[430px] overflow-hidden rounded-lg bg-ink shadow-soft">
            <Image src="/images/Away Mode - wo text.png" alt="Modern Irvine home with smart lighting shades audio and security" fill sizes="(min-width: 1024px) 58vw, 92vw" className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 grid grid-cols-4 bg-black/52 text-white backdrop-blur-sm">
              {["Lighting", "Shades", "Audio", "Security"].map((item, index) => (
                <div key={item} className="flex min-h-16 items-center justify-center gap-2 border-r border-white/14 px-3 text-sm font-semibold last:border-r-0">
                  <Icon kind={String(index)} className="h-5 w-5 text-white/82" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-12 sm:py-16">
        <div className="container-pad grid overflow-hidden rounded-lg bg-white shadow-soft lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-80">
            <Image src="/images/home-office - wo text.png" alt="Smart home prewire and automation planning for Irvine remodel" fill sizes="(min-width: 1024px) 48vw, 92vw" className="object-cover" />
          </div>
          <div className="p-7 sm:p-10 lg:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">New Construction & Remodel</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink">Plan Today for a Smarter Tomorrow</h2>
            <p className="mt-6 text-base leading-8 text-ink/68">
              The best smart homes are planned before drywall. We collaborate with homeowners, builders, architects, and interior designers to ensure every detail is considered before installation begins.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {planningChecklist.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-ink/70">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-copper/40 text-xs text-copper">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white">
        <div className="container-pad grid gap-0 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map(([title, copy], index) => (
            <article key={title} className="border-ink/10 px-6 py-6 text-center lg:border-r lg:last:border-r-0">
              <Icon kind={String(index)} className="mx-auto h-10 w-10 text-copper" />
              <h2 className="mt-5 text-lg font-semibold text-ink">{title}</h2>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-ink/62">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-ink text-white">
        <div className="container-pad grid gap-8 lg:grid-cols-[0.9fr_1fr_0.9fr] lg:items-center">
          <div className="relative min-h-72 overflow-hidden rounded-lg border border-white/10 bg-black/30 p-7">
            <div className="absolute inset-0 opacity-20 geo-pattern" />
            <div className="relative grid min-h-56 place-items-center text-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Irvine</p>
                <p className="mt-4 text-sm leading-7 text-white/62">Newport Beach • Costa Mesa • Laguna Beach • Tustin • Mission Viejo</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Serving Irvine & Orange County</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight">Local Experts. Premium Service.</h2>
            <p className="mt-6 text-base leading-8 text-white/72">
              While we are based in Irvine, we proudly serve homeowners throughout Orange County with premium smart home design, installation, and support.
            </p>
            <div className="mt-7 grid gap-2 sm:grid-cols-2">
              {cityLinks.map(([city, href]) => (
                <Link key={city} href={href} className="text-sm font-semibold text-white/72 transition hover:text-copper">› {city}</Link>
              ))}
            </div>
            <Link href="/blog-learning-center" className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-copper px-6 py-3 text-sm font-semibold text-white transition hover:bg-copper/90">
              View All Service Areas
            </Link>
          </div>
          <div className="relative min-h-72 overflow-hidden rounded-lg shadow-soft">
            <Image src="/images/Entertaining - wo text.png" alt="Orange County coastal smart home service area" fill sizes="(min-width: 1024px) 30vw, 92vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-pad">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-copper">Frequently Asked Questions</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {faqItems.map(([question, answer]) => (
              <details key={question} className="rounded-lg border border-ink/10 bg-ivory p-4">
                <summary className="cursor-pointer text-sm font-semibold text-ink">{question}</summary>
                <p className="mt-4 text-sm leading-7 text-ink/64">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink">
        <Image src="/images/morning-routine - wo text.png" alt="Elegant connected home interior in Orange County" fill sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/72 to-black/28" />
        <div className="container-pad relative grid gap-8 py-16 text-white lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold leading-tight">Ready to Create a Smarter Home?</h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              Whether you are building a new home, remodeling, or upgrading an existing property, we can help design a smart home experience that feels effortless and elegant.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={site.consultationPath} className="button-primary">Schedule a Consultation</Link>
            <Link href="/smart-home-automation-orange-county" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Explore Our Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Icon({ className, kind }: { className?: string; kind: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeLinecap: "round" as const, strokeLinejoin: "round" as const, strokeWidth: 1.55, viewBox: "0 0 24 24", className };
  const index = Number.parseInt(kind, 10);
  const icon = Number.isNaN(index) ? 0 : index % 6;

  if (icon === 1) {
    return <svg {...common} aria-hidden="true"><path d="M7 4h10v16H7z" /><path d="M9 8h6" /><path d="M9 12h6" /><path d="M9 16h4" /></svg>;
  }

  if (icon === 2) {
    return <svg {...common} aria-hidden="true"><path d="M12 4v5" /><path d="M6 20v-4a6 6 0 0 1 12 0v4" /><path d="M4 20h16" /><path d="M8 9h8" /></svg>;
  }

  if (icon === 3) {
    return <svg {...common} aria-hidden="true"><path d="M5 12h14" /><path d="M7 7h10v10H7z" /><path d="M10 20h4" /></svg>;
  }

  if (icon === 4) {
    return <svg {...common} aria-hidden="true"><path d="M12 21s7-4.4 7-11V5l-7-3-7 3v5c0 6.6 7 11 7 11Z" /><path d="m9.5 12 1.8 1.8 3.7-4" /></svg>;
  }

  if (icon === 5) {
    return <svg {...common} aria-hidden="true"><path d="M4.5 10.5a11 11 0 0 1 15 0" /><path d="M7.5 13.5a6.5 6.5 0 0 1 9 0" /><path d="M10.5 16.5a2.4 2.4 0 0 1 3 0" /><path d="M12 19h.01" /></svg>;
  }

  return <svg {...common} aria-hidden="true"><path d="M9 18h6" /><path d="M10 22h4" /><path d="M8.5 14.5a6 6 0 1 1 7 0c-.8.7-1.1 1.5-1.2 2.5H9.7c-.1-1-.4-1.8-1.2-2.5Z" /></svg>;
}
