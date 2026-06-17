import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const pagePath = "/blog/smart-home-irvine";

const metaDescription =
  "Elegant Home Automation designs premium smart home systems in Irvine, CA, including lighting, shades, audio, security, networking, Control4, home theater, and whole-home automation.";

const trustItems = [
  ["Designed Around Your Lifestyle", "Technology customized to the way you live.", "home"],
  ["Seamlessly Connected", "Every system working together.", "nodes"],
  ["Beautifully Integrated", "Technology that complements your home.", "eye"],
  ["Irvine & Orange County Expertise", "Local design and installation experience you can trust.", "pin"]
];

const ecosystemItems = ["Lighting", "Shades", "Audio", "Security", "Networking", "Climate", "Entertainment", "Control Systems"];

const featureCards = [
  {
    title: "Arrive Home",
    copy: "Lighting, climate, and music respond automatically.",
    image: "/images/Away Mode - wo text.png",
    icon: "home",
    alt: "Irvine smart home entry with automated lighting and climate"
  },
  {
    title: "Entertain Effortlessly",
    copy: "Control your environment with a single touch.",
    image: "/images/Entertaining - wo text.png",
    icon: "people",
    alt: "Luxury Irvine living room with smart home scenes for entertaining"
  },
  {
    title: "Relax & Unwind",
    copy: "Create personalized scenes for every moment.",
    image: "/images/morning-routine - wo text.png",
    icon: "moon",
    alt: "Warm Irvine bedroom with smart lighting shades and comfort scenes"
  }
];

const possibilityItems = [
  ["Smart Lighting", "/smart-lighting-control-orange-county", "bulb"],
  ["Motorized Shades", "/motorized-shades-orange-county", "shade"],
  ["Whole Home Audio", "/home-audio-video-media-rooms", "speaker"],
  ["Home Theater", "/home-audio-video-media-rooms", "screen"],
  ["Security Systems", "/smart-security-cameras", "shield"],
  ["Cameras", "/smart-security-cameras", "camera"],
  ["Home Networking", "/whole-home-wifi-installation-orange-county", "wifi"],
  ["Climate Control", "/smart-home-automation-orange-county", "climate"],
  ["Smart Door Locks", "/smart-security-cameras", "lock"],
  ["Video Doorbells", "/smart-security-cameras", "doorbell"],
  ["Outdoor Entertainment", "/home-audio-video-media-rooms", "outdoor"],
  ["Control Systems", "/blog/control4-installer-near-me", "panel"]
];

const neighborhoods = ["Great Park", "Orchard Hills", "Portola Springs", "Turtle Rock", "Shady Canyon", "Woodbury", "Northwood"];

const planningChecklist = [
  "Pre-wire planning and design",
  "Structured wiring and networking",
  "Lighting, shades, and climate integration",
  "Future-proof technology planning",
  "Coordination with your entire team"
];

const whyItems = [
  ["Design First", "Technology should support and elevate your home.", "badge"],
  ["Complete Integration", "Every system working together in harmony.", "panel"],
  ["White-Glove Experience", "Attention to every detail from start to finish.", "support"],
  ["Long-Term Support", "A trusted partner before, during, and long after installation.", "heart"]
];

const serviceLinks = [
  ["Smart Lighting", "/smart-lighting-control-orange-county"],
  ["Motorized Shades", "/motorized-shades-orange-county"],
  ["Whole Home Audio", "/home-audio-video-media-rooms"],
  ["Home Theater", "/home-audio-video-media-rooms"],
  ["Security Systems", "/smart-security-cameras"],
  ["Home Networking", "/whole-home-wifi-installation-orange-county"],
  ["Control4 Systems", "/blog/control4-installer-near-me"]
];

const relatedSeoLinks = [
  ["Best Home Automation Company Orange County", "/blog/best-home-automation-company-orange-county"],
  ["Control4 Installer Near Me", "/blog/control4-installer-near-me"],
  ["Smart Home Installer Irvine", "/blog/smart-home-installer-irvine"],
  ["Smart Lighting Installer", "/blog/smart-lighting-installer"],
  ["Whole Home Audio Irvine", "/blog/whole-home-audio-irvine"],
  ["Motorized Shades Newport Beach", "/blog/motorized-shades-newport-beach"],
  ["Home Network Setup for Large Homes", "/blog/home-network-setup-for-large-homes"]
];

const faqItems = [
  ["What is a smart home?", "A smart home connects the systems you use every day, such as lighting, shades, audio, security, cameras, climate, networking, and entertainment, so they work together through simple controls, scenes, schedules, and automation."],
  ["How much does a smart home cost in Irvine?", "Cost depends on the size of the home, the systems included, wiring needs, equipment selection, programming, and the level of integration. A focused lighting or audio project may be smaller in scope, while a whole-home automation system requires deeper design and planning."],
  ["Can smart home technology be added to an existing home?", "Yes. Many Irvine homes can be upgraded with smart lighting, motorized shades, audio, networking, security, and control systems. Some homes benefit from wiring improvements, while others can use retrofit-friendly solutions."],
  ["What smart home systems do you install?", "We design and install smart lighting, motorized shades, whole-home audio, home theater, security, cameras, networking, climate control, access control, and integrated automation systems."],
  ["Can smart homes improve energy efficiency?", "Smart homes can improve energy efficiency through lighting schedules, shade automation, climate control, occupancy-based settings, and more thoughtful use of energy throughout the home."],
  ["Do smart homes work with motorized shades and lighting?", "Yes. Smart lighting and motorized shades are often two of the most valuable systems to integrate. They can work together to manage daylight, privacy, comfort, and ambiance throughout the day."],
  ["Do you work with new construction projects?", "Yes. We work with homeowners, builders, architects, and interior designers to plan smart home infrastructure early, including wiring, networking, lighting control, shades, audio, security, and future expansion."],
  ["What Irvine neighborhoods do you serve?", "We serve Irvine and surrounding areas including Great Park, Orchard Hills, Portola Springs, Turtle Rock, Shady Canyon, Woodbury, Northwood, and nearby Orange County communities."]
];

export const metadata: Metadata = {
  title: { absolute: "Smart Home Irvine, CA | Elegant Home Automation" },
  description: metaDescription,
  alternates: { canonical: pagePath },
  keywords: [
    "smart home Irvine",
    "smart home automation Irvine",
    "smart home company Irvine",
    "home automation Irvine",
    "luxury smart home Irvine",
    "smart home systems Irvine",
    "connected home Irvine",
    "smart home technology Irvine",
    "smart home installer Irvine",
    "Orange County smart home"
  ],
  openGraph: {
    title: "Smart Home Irvine, CA | Elegant Home Automation",
    description: metaDescription,
    url: pagePath,
    type: "article",
    images: [{ url: "/images/Away Mode - wo text.png", alt: "Luxury Irvine smart home with integrated lighting shades audio and automation" }]
  }
};

export default function SmartHomeIrvinePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Smart Home Irvine, CA",
          description: metaDescription,
          provider: {
            "@type": "LocalBusiness",
            "@id": `${site.url}#business`,
            name: site.name,
            areaServed: "Orange County, CA"
          },
          areaServed: ["Irvine, CA", "Orange County, CA"],
          serviceType: "Premium smart home design, installation, and integration",
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

      <section className="relative min-h-[680px] overflow-hidden bg-ink text-white">
        <Image src="/images/Away Mode - wo text.png" alt="Luxury Irvine smart home with integrated lighting shades audio and automation" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/58 to-black/12" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        <div className="container-pad relative flex min-h-[680px] items-center py-20">
          <div className="max-w-2xl">
            <nav className="mb-8 text-sm font-semibold text-white/72" aria-label="Breadcrumb">
              <Link href="/" className="transition hover:text-copper">Home</Link>
              <span className="px-2 text-white/35">/</span>
              <Link href="/blog-learning-center" className="transition hover:text-copper">Blog</Link>
              <span className="px-2 text-white/35">/</span>
              <span>Smart Home Irvine</span>
            </nav>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Smart Home Irvine, CA</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] sm:text-6xl">Smart Home Irvine, CA</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              Beautifully integrated technology designed around the way you live. Elegant Home Automation creates smart homes that bring lighting, shades, audio, security, networking, and automation together into one seamless experience.
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">What Makes A Home Smart?</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink">A Smarter Home. Connected Living.</h2>
            <p className="mt-6 text-base leading-8 text-ink/68">
              A smart home brings together the technology that makes everyday life more comfortable, convenient, and secure.
            </p>
            <p className="mt-5 text-base leading-8 text-ink/68">
              From lighting and shades to audio, security, climate, and more, every system works together in harmony when the home is designed thoughtfully from the beginning.
            </p>
          </div>
          <EcosystemDiagram />
        </div>
      </section>

      <section className="section bg-[#101110] text-white">
        <div className="container-pad">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Smart Home Features For Every Day</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight">Designed For The Way Irvine Families Live</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featureCards.map((card) => (
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
        <div className="container-pad grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-stretch">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Explore Smart Home Possibilities</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink">Integrated Solutions. Infinite Possibilities.</h2>
            <div className="mt-9 grid gap-px overflow-hidden rounded-lg border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
              {possibilityItems.map(([title, href, icon]) => (
                <Link key={title} href={href} className="group bg-white p-5 transition hover:bg-[#f9f4ec]">
                  <Icon kind={icon} className="h-9 w-9 text-copper" />
                  <h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
                </Link>
              ))}
            </div>
          </div>
          <div className="relative min-h-[520px] overflow-hidden rounded-lg bg-ink text-white shadow-soft">
            <Image src="/images/Away Mode - wo text.png" alt="Smart home service area map for Irvine and Orange County" fill sizes="(min-width: 1024px) 38vw, 92vw" className="object-cover opacity-78" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <h2 className="text-2xl font-semibold">Proudly Serving Irvine & Surrounding Areas</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {["Great Park", "Orchard Hills", "Portola Springs", "Turtle Rock", "Shady Canyon", "Woodbury", "Northwood", "Nearby communities"].map((area) => (
                  <div key={area} className="flex items-center gap-3 text-sm font-semibold text-white/75">
                    <span className="h-2 w-2 rounded-full bg-copper" />
                    {area}
                  </div>
                ))}
              </div>
              <Link href="/sitemap" className="mt-6 inline-flex text-sm font-semibold text-copper transition hover:text-white">
                See All Service Areas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#101110] text-white">
        <div className="container-pad grid gap-12 lg:grid-cols-[0.9fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Smart Homes Designed For Irvine</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight">Local Expertise For Irvine Homes</h2>
            <p className="mt-6 text-base leading-8 text-white/68">
              Irvine homeowners often want smart home systems that support modern design, family living, home offices, outdoor entertaining, and long-term technology needs. Elegant Home Automation designs systems that feel natural in the home and reliable every day.
            </p>
            <p className="mt-5 text-base leading-8 text-white/68">
              We serve Irvine neighborhoods including Great Park, Orchard Hills, Portola Springs, Turtle Rock, Shady Canyon, Woodbury, Northwood, and nearby Orange County communities such as Newport Beach, Newport Coast, Tustin, Costa Mesa, and Laguna Beach.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {neighborhoods.map((area) => (
                <div key={area} className="flex items-center gap-3 text-sm font-semibold text-white/72">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-copper/40 text-xs text-copper">✓</span>
                  {area}
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[380px] overflow-hidden rounded-lg border border-white/10 bg-black/30 p-7">
            <div className="absolute inset-0 opacity-20 geo-pattern" />
            <div className="relative grid h-full min-h-[320px] place-items-center rounded-lg border border-copper/20">
              <p className="max-w-xs text-center text-sm font-semibold leading-7 text-white/68">Smart home service area map for Irvine and Orange County</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0d0e0d] py-14 text-white sm:py-16">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">New Construction & Remodel Solutions</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight">Build Smart From Day One</h2>
            <p className="mt-6 text-base leading-8 text-white/68">
              Planning early is the key to a seamless smart home. We collaborate with builders, architects, and interior designers to design systems that elevate your home and support the way you live.
            </p>
            <div className="mt-7 grid gap-3">
              {planningChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm font-semibold leading-6 text-white/72">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-copper/40 text-xs text-copper">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-80 overflow-hidden rounded-lg">
            <Image src="/images/home-office - wo text.png" alt="Smart home planning for new construction and remodel in Irvine" fill sizes="(min-width: 1024px) 48vw, 92vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[#101110] py-14 text-white sm:py-16">
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
        <Image src="/images/movie night - wo text.png" alt="Luxury Irvine connected home interior with integrated smart home control" fill sizes="100vw" className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/22" />
        <div className="container-pad relative grid min-h-[430px] items-center py-16 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">Create A Home That Works Beautifully</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/76">
              Whether you are building a new home, remodeling, or upgrading your existing property, Elegant Home Automation can design smart home experiences that feel intuitive, elegant, and perfectly integrated into your life.
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
              <h2 className="mt-5 text-4xl font-semibold leading-tight">Smart Home Irvine Questions</h2>
              <div className="mt-8 grid gap-2 text-sm font-semibold">
                <Link href="/" className="text-white/72 transition hover:text-copper">Home</Link>
                <Link href="/smart-home-automation-orange-county" className="text-white/72 transition hover:text-copper">Smart Home Automation Services</Link>
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

function EcosystemDiagram() {
  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-lg border border-ink/10 bg-white p-6 shadow-soft" aria-label="Smart home ecosystem diagram connecting lighting shades audio security networking climate and control systems">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(209,126,36,0.16),transparent_40%)]" />
      <div className="relative grid min-h-[370px] place-items-center">
        <div className="z-10 flex h-32 w-32 items-center justify-center rounded-full border border-copper/40 bg-[#101110] text-center text-xl font-semibold text-white shadow-soft">
          Smart<br />Home
        </div>
        <div className="absolute inset-0 grid grid-cols-2 gap-4 sm:grid-cols-4">
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
    eye: (
      <>
        <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z" {...common} />
        <circle cx="12" cy="12" r="2.5" {...common} />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" {...common} />
        <circle cx="12" cy="10" r="2.4" {...common} />
      </>
    ),
    people: (
      <>
        <circle cx="9" cy="8" r="3" {...common} />
        <circle cx="17" cy="10" r="2.5" {...common} />
        <path d="M3.5 20c.8-4 3-6 5.5-6s4.7 2 5.5 6M14 20c.4-2.4 1.7-4.1 3.6-4.1 1.6 0 2.8 1.2 3.4 4.1" {...common} />
      </>
    ),
    moon: <path d="M20 15.5A8 8 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z" {...common} />,
    bulb: <path d="M9 18h6M10 22h4M8 14a6 6 0 1 1 8 0c-.8.7-1.2 1.5-1.4 2H9.4c-.2-.5-.6-1.3-1.4-2Z" {...common} />,
    shade: <path d="M5 4h14v16H5V4ZM5 8h14M5 12h14M5 16h14" {...common} />,
    speaker: <path d="M6 9h4l5-4v14l-5-4H6V9ZM18 9.5a4 4 0 0 1 0 5" {...common} />,
    screen: <path d="M4 5h16v11H4V5ZM10 20h4M12 16v4" {...common} />,
    shield: <path d="M12 3 20 6v6c0 5-3.4 8.2-8 9-4.6-.8-8-4-8-9V6l8-3Z" {...common} />,
    camera: <path d="M5 7h4l1.5-2h3L15 7h4v11H5V7ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" {...common} />,
    wifi: <path d="M4 9c4.8-4 11.2-4 16 0M7 12.5c3-2.4 7-2.4 10 0M10 16c1.2-.8 2.8-.8 4 0M12 19h.01" {...common} />,
    climate: <path d="M12 3v10M8 7l4-4 4 4M8 17l4 4 4-4" {...common} />,
    lock: <path d="M7 11V8a5 5 0 0 1 10 0v3M6 11h12v10H6V11Z" {...common} />,
    doorbell: <path d="M8 3h8v18H8V3ZM12 15h.01M10 7h4" {...common} />,
    outdoor: <path d="M4 18c2-4 5-6 8-6s6 2 8 6M8 13c0-3 1.3-5 4-7 2.7 2 4 4 4 7" {...common} />,
    panel: <rect x="5" y="4" width="14" height="16" rx="2" {...common} />,
    badge: <path d="M12 3 20 7v6c0 4-3 7-8 8-5-1-8-4-8-8V7l8-4Z" {...common} />,
    support: (
      <>
        <circle cx="12" cy="12" r="8" {...common} />
        <path d="M8.5 12h7M12 8.5v7" {...common} />
      </>
    ),
    heart: <path d="M20 8.5c0 5.5-8 10-8 10s-8-4.5-8-10A4.5 4.5 0 0 1 12 5a4.5 4.5 0 0 1 8 3.5Z" {...common} />
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      {icons[kind] ?? icons.panel}
    </svg>
  );
}
