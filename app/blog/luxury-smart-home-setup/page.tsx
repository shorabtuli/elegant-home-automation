import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const pagePath = "/blog/luxury-smart-home-setup";

const metaDescription =
  "Elegant Home Automation designs luxury smart home setups for Orange County homes, integrating lighting, shades, audio, networking, security, climate, and automation into one elegant experience.";

const trustItems = [
  ["Design-Driven", "Technology should complement the home.", "home"],
  ["Fully Integrated", "Every system working together.", "nodes"],
  ["Built Around Lifestyle", "Designed for how you live and entertain.", "people"],
  ["White-Glove Experience", "Personalized planning and support.", "support"]
];

const ecosystemItems = [
  "Smart Lighting",
  "Motorized Shades",
  "Whole Home Audio",
  "Home Theater",
  "Security",
  "Cameras",
  "Networking",
  "Climate Control",
  "Outdoor Living",
  "Control Systems"
];

const lifestyleCards = [
  {
    title: "Morning",
    copy: "Wake naturally as shades rise and lighting adjusts.",
    image: "/images/morning-routine - wo text.png",
    icon: "sun",
    alt: "Luxury primary suite with automated shades and smart lighting"
  },
  {
    title: "Entertaining",
    copy: "Create the perfect atmosphere for guests with one touch.",
    image: "/images/Entertaining - wo text.png",
    icon: "people",
    alt: "Luxury Orange County home with smart home scenes for entertaining"
  },
  {
    title: "Evening",
    copy: "Relax with lighting, music, climate, and privacy automatically coordinated.",
    image: "/images/movie night - wo text.png",
    icon: "moon",
    alt: "Warm luxury living room with lighting music climate and privacy automation"
  }
];

const elementItems = [
  ["Smart Lighting", "/smart-lighting-control-orange-county", "bulb"],
  ["Motorized Shades", "/motorized-shades-orange-county", "shade"],
  ["Whole Home Audio", "/home-audio-video-media-rooms", "speaker"],
  ["Home Theater", "/home-audio-video-media-rooms", "screen"],
  ["Outdoor Entertainment", "/home-audio-video-media-rooms", "outdoor"],
  ["Security & Surveillance", "/smart-security-cameras", "shield"],
  ["Home Networking", "/whole-home-wifi-installation-orange-county", "wifi"],
  ["Climate Control", "/smart-home-automation-orange-county", "climate"],
  ["Smart Entry", "/smart-security-cameras", "lock"],
  ["Video Doorbells", "/smart-security-cameras", "doorbell"],
  ["Control Systems", "/blog/control4-installer-near-me", "panel"],
  ["Wellness & Circadian Lighting", "/smart-lighting-control-orange-county", "wellness"]
];

const luxuryAreas = [
  "Newport Coast",
  "Newport Beach",
  "Laguna Beach",
  "Irvine",
  "Shady Canyon",
  "Dana Point",
  "Crystal Cove",
  "Pelican Hill",
  "Surrounding areas"
];

const planningChecklist = [
  "Discovery and consultation",
  "Architectural coordination",
  "Lighting and system design",
  "Infrastructure planning",
  "Future-proofing for tomorrow"
];

const constructionChecklist = [
  "Structured wiring",
  "Equipment room planning",
  "Lighting control",
  "Motorized shade integration",
  "Audio zones",
  "Network design",
  "Security and access planning"
];

const collaborators = ["Architects", "Builders", "Interior Designers", "Landscape Architects"];

const whyItems = [
  ["Design First", "Technology should disappear into the architecture.", "badge"],
  ["Personalized Experiences", "Every home is unique. Every solution is custom designed.", "people"],
  ["Seamless Integration", "All systems work together beautifully and intuitively.", "nodes"],
  ["Long-Term Partnership", "A trusted partner before, during, and long after your project.", "heart"]
];

const serviceLinks = [
  ["Smart Lighting", "/smart-lighting-control-orange-county"],
  ["Motorized Shades", "/motorized-shades-orange-county"],
  ["Whole Home Audio", "/home-audio-video-media-rooms"],
  ["Home Theater", "/home-audio-video-media-rooms"],
  ["Security Systems", "/smart-security-cameras"],
  ["Home Networking", "/whole-home-wifi-installation-orange-county"],
  ["Control Systems", "/blog/control4-installer-near-me"]
];

const relatedSeoLinks = [
  ["Home Automation Orange County", "/smart-home-automation-orange-county"],
  ["Best Home Automation Company Orange County", "/blog/best-home-automation-company-orange-county"],
  ["Control4 Installer Near Me", "/blog/control4-installer-near-me"],
  ["Smart Home Irvine", "/blog/smart-home-irvine"],
  ["Smart Home Installer Irvine", "/blog/smart-home-installer-irvine"],
  ["Smart Lighting Installer", "/blog/smart-lighting-installer"],
  ["Whole Home Audio Irvine", "/blog/whole-home-audio-irvine"],
  ["Motorized Shades Newport Beach", "/blog/motorized-shades-newport-beach"],
  ["Home Network Setup for Large Homes", "/blog/home-network-setup-for-large-homes"]
];

const faqItems = [
  ["What is a luxury smart home?", "A luxury smart home thoughtfully integrates lighting, shades, audio, security, networking, climate, entertainment, and control systems so the home feels comfortable, elegant, secure, and easy to use."],
  ["How much does a luxury smart home cost?", "Cost depends on the size of the home, systems included, wiring needs, equipment selection, design complexity, programming, and support requirements. A custom whole-home system requires more planning and investment than a single-room upgrade."],
  ["Can luxury smart home technology be added to existing homes?", "Yes. Many existing luxury homes can be upgraded with smart lighting, motorized shades, audio, networking, security, and automation. Some projects benefit from wiring improvements, while others can use retrofit-friendly approaches."],
  ["What systems should be included in a luxury smart home?", "Common systems include smart lighting, motorized shades, whole-home audio, home theater, security, cameras, climate control, networking, outdoor entertainment, and integrated control systems."],
  ["Should smart home planning happen before construction?", "Yes. The best results happen when smart home planning begins before walls close. Early planning improves wiring, equipment placement, lighting control, shade integration, audio quality, networking, and long-term flexibility."],
  ["What smart home platform is best?", "The best platform depends on the home, lifestyle, systems being integrated, control preferences, and long-term support needs. Elegant Home Automation recommends solutions based on the specific project rather than forcing one-size-fits-all technology."],
  ["Do you work with architects and designers?", "Yes. We collaborate with architects, builders, interior designers, landscape architects, and homeowners to ensure technology supports the design vision of the home."],
  ["What areas of Orange County do you serve?", "We serve luxury homes throughout Orange County, including Newport Coast, Newport Beach, Laguna Beach, Irvine, Shady Canyon, Dana Point, Crystal Cove, Pelican Hill, Costa Mesa, Laguna Niguel, Mission Viejo, and nearby communities."]
];

export const metadata: Metadata = {
  title: { absolute: "Luxury Smart Home Setup | Elegant Home Automation" },
  description: metaDescription,
  alternates: { canonical: pagePath },
  keywords: [
    "luxury smart home setup",
    "luxury home automation",
    "high-end smart home systems",
    "smart home design",
    "luxury home technology",
    "custom smart home installation",
    "premium smart home solutions",
    "whole home automation",
    "Orange County luxury smart home",
    "luxury smart home design"
  ],
  openGraph: {
    title: "Luxury Smart Home Setup | Elegant Home Automation",
    description: metaDescription,
    url: pagePath,
    type: "article",
    images: [{ url: "/images/Entertaining - wo text.png", alt: "Luxury Orange County smart home with integrated lighting shades audio and automation" }]
  }
};

export default function LuxurySmartHomeSetupPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Luxury Smart Home Setup",
          description: metaDescription,
          provider: {
            "@type": "LocalBusiness",
            "@id": `${site.url}#business`,
            name: site.name,
            areaServed: "Orange County, CA"
          },
          areaServed: "Orange County, CA",
          serviceType: "Luxury smart home design, installation, integration, and support",
          url: `${site.url}${pagePath}`
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

      <section className="relative min-h-[700px] overflow-hidden bg-ink text-white">
        <Image src="/images/Entertaining - wo text.png" alt="Luxury Orange County smart home with integrated lighting shades audio and automation" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/56 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-transparent to-black/18" />
        <div className="container-pad relative flex min-h-[700px] items-center py-20">
          <div className="max-w-2xl">
            <nav className="mb-8 text-sm font-semibold text-white/72" aria-label="Breadcrumb">
              <Link href="/" className="transition hover:text-copper">Home</Link>
              <span className="px-2 text-white/35">/</span>
              <Link href="/blog" className="transition hover:text-copper">Blog</Link>
              <span className="px-2 text-white/35">/</span>
              <span>Luxury Smart Home Setup</span>
            </nav>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Luxury Smart Home Setup</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] sm:text-6xl">
              Luxury Smart Homes Designed Around The Way You Live
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              Beautifully integrated technology that disappears into the architecture. Elegant Home Automation designs luxury smart homes that bring lighting, shades, audio, networking, security, and automation together into one seamless experience.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={site.consultationPath} className="button-primary">Schedule a Consultation</Link>
              <Link href="/smart-home-automation-orange-county" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Explore Smart Home Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0c0d0c] text-white">
        <div className="container-pad grid gap-0 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map(([title, copy, icon]) => (
            <article key={title} className="border-white/10 px-6 py-6 text-center lg:border-r lg:last:border-r-0">
              <Icon kind={icon} className="mx-auto h-10 w-10 text-copper" />
              <h2 className="mt-5 text-lg font-semibold">{title}</h2>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-white/62">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-[#f7f2ea]">
        <div className="container-pad grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">What Defines A Luxury Smart Home?</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink">Technology That Disappears. Living That Stands Out.</h2>
            <p className="mt-6 text-base leading-8 text-ink/68">
              A luxury smart home is not about having more technology. It is about making technology disappear, creating comfort, convenience, and experiences that elevate everyday life.
            </p>
            <p className="mt-5 text-base leading-8 text-ink/68">
              Every system is thoughtfully integrated, beautifully designed, and intuitively controlled so the home feels effortless rather than complicated.
            </p>
          </div>
          <EcosystemDiagram />
        </div>
      </section>

      <section className="section bg-[#101110] text-white">
        <div className="container-pad">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Technology That Enhances Everyday Life</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight">Designed For Every Moment</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {lifestyleCards.map((card) => (
              <article key={card.title} className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] shadow-soft">
                <div className="relative h-56">
                  <Image src={card.image} alt={card.alt} fill sizes="(min-width: 1024px) 30vw, 92vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/66 to-transparent" />
                </div>
                <div className="p-6">
                  <Icon kind={card.icon} className="h-9 w-9 text-copper" />
                  <h3 className="mt-4 text-xl font-semibold">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">{card.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.92fr_1fr] lg:items-stretch">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">The Elements Of A Luxury Smart Home</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink">Integrated Solutions. Infinite Possibilities.</h2>
            <div className="mt-9 grid gap-px overflow-hidden rounded-lg border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
              {elementItems.map(([title, href, icon]) => (
                <Link key={title} href={href} className="group bg-white p-5 text-center transition hover:bg-[#f9f4ec]">
                  <Icon kind={icon} className="mx-auto h-9 w-9 text-copper" />
                  <h3 className="mt-4 text-sm font-semibold text-ink">{title}</h3>
                </Link>
              ))}
            </div>
          </div>
          <div className="relative min-h-[540px] overflow-hidden rounded-lg bg-ink text-white shadow-soft">
            <Image src="/images/Away Mode - wo text.png" alt="Luxury coastal Orange County homes with smart home technology" fill sizes="(min-width: 1024px) 46vw, 92vw" className="object-cover opacity-82" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/36 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Designed For Orange County Living</p>
              <h2 className="mt-4 text-2xl font-semibold">Luxury Technology For Coastal And Custom Homes</h2>
              <p className="mt-4 text-sm leading-7 text-white/72">
                From Newport Coast and Laguna Beach to Dana Point, Irvine, Shady Canyon, Crystal Cove, and Pelican Hill, Orange County homes deserve technology that enhances their beauty and lifestyle.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {luxuryAreas.map((area) => (
                  <div key={area} className="flex items-center gap-3 text-sm font-semibold text-white/75">
                    <span className="h-2 w-2 rounded-full bg-copper" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0d0e0d] py-14 text-white sm:py-16">
        <div className="container-pad grid gap-8 lg:grid-cols-[0.8fr_0.9fr_0.7fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Planned For Perfection</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight">The Best Smart Homes Start Long Before Installation</h2>
            <p className="mt-6 text-base leading-8 text-white/68">
              Exceptional results begin with thoughtful planning and collaboration. We help homeowners and project teams make smart decisions before construction, wiring, equipment placement, and finishing details are finalized.
            </p>
            <div className="mt-7 grid gap-3">
              {planningChecklist.map((item) => (
                <ChecklistItem key={item}>{item}</ChecklistItem>
              ))}
            </div>
          </div>
          <div className="relative min-h-80 overflow-hidden rounded-lg">
            <Image src="/images/home-office - wo text.png" alt="Luxury smart home planning with architectural drawings and design collaboration" fill sizes="(min-width: 1024px) 34vw, 92vw" className="object-cover" />
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">We Collaborate With Your Entire Team</p>
            <div className="mt-7 grid gap-4">
              {collaborators.map((item) => (
                <div key={item} className="flex items-center gap-4 text-sm font-semibold text-white/72">
                  <Icon kind="badge" className="h-8 w-8 text-copper" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#101110] text-white">
        <div className="container-pad grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">New Construction & Remodel</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight">Luxury Technology Built Into The Home</h2>
            <p className="mt-6 text-base leading-8 text-white/68">
              For custom homes and luxury remodels, we coordinate structured wiring, equipment rooms, lighting control, shade integration, audio zones, network design, security, and control systems so the finished home feels clean, intuitive, and refined.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {constructionChecklist.map((item) => (
              <ChecklistItem key={item}>{item}</ChecklistItem>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0d0e0d] py-14 text-white sm:py-16">
        <div className="container-pad">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-copper">Why Choose Elegant Home Automation?</p>
          <div className="mt-10 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {whyItems.map(([title, copy, icon]) => (
              <article key={title} className="border-white/10 px-6 py-6 text-center lg:border-r lg:last:border-r-0">
                <Icon kind={icon} className="mx-auto h-10 w-10 text-copper" />
                <h2 className="mt-5 text-lg font-semibold">{title}</h2>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-white/62">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-white">
        <Image src="/images/movie night - wo text.png" alt="Luxury smart home interior with integrated lighting shades audio and control systems" fill sizes="100vw" className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/22" />
        <div className="container-pad relative grid min-h-[430px] items-center py-16 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">Create A Home That Feels Effortless</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/76">
              Whether you are building a custom residence, remodeling a luxury property, or upgrading an existing home, Elegant Home Automation can create a smart home experience that feels intuitive, elegant, and perfectly integrated into the way you live.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={site.consultationPath} className="button-primary">Schedule a Consultation</Link>
              <Link href="/smart-home-automation-orange-county" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Explore Smart Home Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#0d0e0d] text-white">
        <div className="container-pad">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Frequently Asked Questions</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight">Luxury Smart Home Setup Questions</h2>
              <div className="mt-8 grid gap-2 text-sm font-semibold">
                <Link href="/" className="text-white/72 transition hover:text-copper">Home</Link>
                <Link href="/smart-home-automation-orange-county" className="text-white/72 transition hover:text-copper">Smart Home Services</Link>
                <Link href={site.consultationPath} className="text-white/72 transition hover:text-copper">Contact Elegant Home Automation</Link>
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {faqItems.map(([question, answer]) => (
                <details key={question} className="group rounded-lg border border-white/10 bg-white/[0.03] p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                    <h3 className="text-base font-semibold">{question}</h3>
                    <span className="text-xl text-copper transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-white/62">{answer}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="mt-12 grid gap-8 rounded-lg border border-white/10 bg-white/[0.03] p-6 lg:grid-cols-2">
            <InternalLinkGroup title="Relevant Services" links={serviceLinks} />
            <InternalLinkGroup title="Related Orange County Guides" links={relatedSeoLinks} />
          </div>
        </div>
      </section>
    </>
  );
}

function ChecklistItem({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-3 text-sm font-semibold leading-6 text-white/72">
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-copper/40 text-xs text-copper">✓</span>
      {children}
    </div>
  );
}

function EcosystemDiagram() {
  return (
    <div className="relative min-h-[460px] overflow-hidden rounded-lg border border-ink/10 bg-white p-6 shadow-soft" aria-label="Luxury smart home ecosystem connecting lighting shades audio security networking climate outdoor living and control systems">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(209,126,36,0.16),transparent_42%)]" />
      <div className="relative grid min-h-[400px] place-items-center">
        <div className="z-10 flex h-36 w-36 items-center justify-center rounded-full border border-copper/40 bg-[#101110] text-center text-lg font-semibold uppercase tracking-[0.08em] text-white shadow-soft">
          Luxury<br />Smart<br />Home
        </div>
        <div className="absolute inset-0 grid grid-cols-2 gap-4 sm:grid-cols-5">
          {ecosystemItems.map((item) => (
            <div key={item} className="flex items-center justify-center">
              <div className="rounded-full border border-copper/30 bg-white px-4 py-2 text-xs font-semibold text-ink/68 shadow-sm">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InternalLinkGroup({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map(([label, href]) => (
          <Link key={`${href}-${label}`} href={href} className="text-sm font-semibold text-white/66 transition hover:text-copper">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function Icon({ kind, className = "" }: { kind: string; className?: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const
  };

  const icons: Record<string, ReactNode> = {
    home: <path d="M4 11 12 4l8 7M6 10.5V20h12v-9.5" {...common} />,
    nodes: (
      <>
        <circle cx="6" cy="12" r="3" {...common} />
        <circle cx="18" cy="6" r="3" {...common} />
        <circle cx="18" cy="18" r="3" {...common} />
        <path d="M9 10.5 15 7.5M9 13.5l6 3" {...common} />
      </>
    ),
    people: (
      <>
        <circle cx="9" cy="8" r="3" {...common} />
        <circle cx="17" cy="10" r="2.5" {...common} />
        <path d="M3.5 20c.8-4 3-6 5.5-6s4.7 2 5.5 6M14 20c.4-2.4 1.7-4.1 3.6-4.1 1.6 0 2.8 1.2 3.4 4.1" {...common} />
      </>
    ),
    support: (
      <>
        <circle cx="12" cy="12" r="8" {...common} />
        <path d="M8.5 12h7M12 8.5v7" {...common} />
      </>
    ),
    sun: <path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M17.7 6.3l-1.4 1.4M7.7 16.3l-1.4 1.4M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z" {...common} />,
    moon: <path d="M20 15.5A8 8 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z" {...common} />,
    bulb: <path d="M9 18h6M10 22h4M8 14a6 6 0 1 1 8 0c-.8.7-1.2 1.5-1.4 2H9.4c-.2-.5-.6-1.3-1.4-2Z" {...common} />,
    shade: <path d="M5 4h14v16H5V4ZM5 8h14M5 12h14M5 16h14" {...common} />,
    speaker: <path d="M6 9h4l5-4v14l-5-4H6V9ZM18 9.5a4 4 0 0 1 0 5" {...common} />,
    screen: <path d="M4 5h16v11H4V5ZM10 20h4M12 16v4" {...common} />,
    shield: <path d="M12 3 20 6v6c0 5-3.4 8.2-8 9-4.6-.8-8-4-8-9V6l8-3Z" {...common} />,
    wifi: <path d="M4 9c4.8-4 11.2-4 16 0M7 12.5c3-2.4 7-2.4 10 0M10 16c1.2-.8 2.8-.8 4 0M12 19h.01" {...common} />,
    climate: <path d="M12 3v10M8 7l4-4 4 4M8 17l4 4 4-4" {...common} />,
    lock: <path d="M7 11V8a5 5 0 0 1 10 0v3M6 11h12v10H6V11Z" {...common} />,
    doorbell: <path d="M8 3h8v18H8V3ZM12 15h.01M10 7h4" {...common} />,
    outdoor: <path d="M4 18c2-4 5-6 8-6s6 2 8 6M8 13c0-3 1.3-5 4-7 2.7 2 4 4 4 7" {...common} />,
    panel: <rect x="5" y="4" width="14" height="16" rx="2" {...common} />,
    wellness: <path d="M12 21c-4-3-6-6-6-10a6 6 0 1 1 12 0c0 4-2 7-6 10ZM9 11h6M12 8v6" {...common} />,
    badge: <path d="M12 3 20 7v6c0 4-3 7-8 8-5-1-8-4-8-8V7l8-4Z" {...common} />,
    heart: <path d="M20 8.5c0 5.5-8 10-8 10s-8-4.5-8-10A4.5 4.5 0 0 1 12 5a4.5 4.5 0 0 1 8 3.5Z" {...common} />
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      {icons[kind] ?? icons.panel}
    </svg>
  );
}
