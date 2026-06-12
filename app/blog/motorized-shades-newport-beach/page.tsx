import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const pagePath = "/blog/motorized-shades-newport-beach";

const metaDescription =
  "Elegant Home Automation designs and installs premium motorized shades in Newport Beach, CA, including automated window shades, smart shade control, privacy, glare reduction, and luxury home integration.";

const trustItems = [
  ["Designed For Beautiful Homes", "Shades that enhance architecture and interior design.", "window"],
  ["Effortless Control", "One-touch control, schedules, and automation.", "touch"],
  ["Privacy & Comfort", "Manage glare, privacy, and heat throughout the day.", "shield"],
  ["Newport Beach Expertise", "Serving coastal homes throughout Orange County.", "pin"]
];

const dayCards = [
  ["Morning", "Soft natural light", "/images/morning-routine - wo text.png", "sun"],
  ["Afternoon", "Reduce glare and heat", "/images/Entertaining - wo text.png", "shade"],
  ["Evening", "Privacy and comfort", "/images/movie night - wo text.png", "moon"]
];

const lifestyleCards = [
  {
    title: "Protect Views",
    copy: "Preserve ocean, harbor, and coastal views while managing sunlight.",
    image: "/images/Entertaining - wo text.png",
    icon: "wave",
    alt: "Newport Beach living room with motorized shades preserving ocean views"
  },
  {
    title: "Improve Comfort",
    copy: "Reduce glare and heat while maintaining the perfect ambience.",
    image: "/images/morning-routine - wo text.png",
    icon: "sun",
    alt: "Coastal home with automated shades reducing glare and heat"
  },
  {
    title: "Simplify Everyday Living",
    copy: "Automated schedules adapt to your lifestyle, so you do not have to think about it.",
    image: "/images/home-office - wo text.png",
    icon: "calendar",
    alt: "Luxury bedroom with motorized shades and smart home control"
  }
];

const shadeOptions = [
  ["Roller Shades", "shade"],
  ["Solar Shades", "sun"],
  ["Blackout Shades", "moon"],
  ["Dual Shades", "window"],
  ["Roman Shades", "fold"],
  ["Sheer Shades", "sheer"],
  ["Large Window Solutions", "large"],
  ["Integrated Smart Control", "touch"]
];

const localAreas = ["Newport Beach", "Newport Coast", "Corona del Mar", "Balboa Island", "Eastbluff", "Harbor View", "Dover Shores"];

const planningChecklist = [
  "Wiring and power planning",
  "Window pocket and recess planning",
  "Concealed shade integration",
  "Large glass and motorized solutions",
  "Collaboration with builders, architects, and interior designers"
];

const whyItems = [
  ["Design First", "Technology should elevate the design of your home.", "plan"],
  ["Seamless Integration", "Shades, lighting, and automation working together beautifully.", "home"],
  ["Clean Installation", "Discreet, professional installation with attention to every detail.", "window"],
  ["Long-Term Support", "A trusted partner before, during, and long after installation.", "support"]
];

const serviceLinks = [
  ["Smart Lighting", "/smart-lighting-control-orange-county"],
  ["Motorized Shades", "/motorized-shades-orange-county"],
  ["Whole Home Audio", "/home-audio-video-media-rooms"],
  ["Home Theater", "/home-audio-video-media-rooms"],
  ["Security Systems", "/smart-security-cameras"],
  ["Home Networking", "/whole-home-wifi-installation-orange-county"]
];

const relatedSeoLinks = [
  ["Best Home Automation Company Orange County", "/blog/best-home-automation-company-orange-county"],
  ["Smart Home Installer Irvine", "/blog/smart-home-installer-irvine"],
  ["Whole Home Audio Irvine", "/blog/whole-home-audio-irvine"],
  ["Smart Home Automation Newport Beach", "/smart-home-automation-newport-beach"]
];

const faqItems = [
  [
    "How much do motorized shades cost in Newport Beach?",
    "Cost depends on the number of windows, shade fabric, motor type, wiring, control options, window size, and integration with lighting or smart home systems. A focused room project may be smaller in scope, while a full-home shade system requires more design, equipment, and installation planning."
  ],
  [
    "Are motorized shades worth it?",
    "Motorized shades can be worth it for homeowners who want better privacy, glare control, comfort, and convenience. They are especially valuable in Newport Beach homes with large windows, strong sun exposure, ocean views, and indoor-outdoor living spaces."
  ],
  [
    "Can motorized shades be added to an existing home?",
    "Yes. Many existing homes can be upgraded with motorized shades. Some projects benefit from wiring, while others may use retrofit-friendly shade solutions depending on the home and performance goals."
  ],
  [
    "Can shades operate automatically throughout the day?",
    "Yes. Motorized shades can be scheduled to adjust at different times of day or integrated with lighting and smart home systems for more personalized automation."
  ],
  [
    "Do motorized shades work with smart home systems?",
    "Yes. Motorized shades can integrate with smart lighting, Control4 systems, scenes, wall keypads, remotes, and mobile controls depending on the selected system."
  ],
  [
    "What shade styles are available?",
    "Common options include roller shades, solar shades, blackout shades, dual shades, Roman shades, sheer shades, and solutions for large windows or specialty spaces."
  ],
  [
    "Are motorized shades suitable for large windows?",
    "Yes. Motorized shades are often ideal for large windows and glass walls because they make it easier to control light and privacy across hard-to-reach or oversized openings."
  ],
  [
    "What areas near Newport Beach do you serve?",
    "We serve Newport Beach and surrounding Orange County communities including Newport Coast, Corona del Mar, Costa Mesa, Irvine, Laguna Beach, Tustin, Laguna Niguel, Dana Point, and Mission Viejo."
  ]
];

export const metadata: Metadata = {
  title: { absolute: "Motorized Shades Newport Beach, CA | Elegant Home Automation" },
  description: metaDescription,
  alternates: { canonical: pagePath },
  keywords: [
    "motorized shades Newport Beach",
    "motorized shades installation Newport Beach",
    "automated window shades Newport Beach",
    "smart shades Newport Beach",
    "electric shades Newport Beach",
    "motorized blinds Newport Beach",
    "luxury window treatments Newport Beach",
    "Lutron shades Newport Beach",
    "Orange County motorized shades"
  ],
  openGraph: {
    title: "Motorized Shades Newport Beach, CA | Elegant Home Automation",
    description: metaDescription,
    url: pagePath,
    type: "article",
    images: [{ url: "/images/morning-routine - wo text.png", alt: "Luxury Newport Beach home with motorized shades and ocean views" }]
  }
};

export default function MotorizedShadesNewportBeachPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Motorized Shades Newport Beach",
          description: metaDescription,
          provider: {
            "@type": "LocalBusiness",
            "@id": `${site.url}#business`,
            name: site.name,
            areaServed: "Orange County, CA"
          },
          areaServed: ["Newport Beach, CA", "Orange County, CA"],
          serviceType: "Motorized shade design and installation",
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
        <Image
          src="/images/morning-routine - wo text.png"
          alt="Luxury Newport Beach home with motorized shades and ocean views"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/58 to-black/14" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-transparent to-black/20" />
        <div className="container-pad relative flex min-h-[680px] items-center py-20">
          <div className="max-w-2xl">
            <nav className="mb-8 text-sm font-semibold text-white/72" aria-label="Breadcrumb">
              <Link href="/" className="transition hover:text-copper">Home</Link>
              <span className="px-2 text-white/35">/</span>
              <Link href="/blog-learning-center" className="transition hover:text-copper">Blog</Link>
              <span className="px-2 text-white/35">/</span>
              <span>Motorized Shades Newport Beach</span>
            </nav>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Motorized Shades Newport Beach</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] sm:text-6xl">Motorized Shades in Newport Beach, CA</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              Control natural light, privacy, and comfort with beautifully integrated motorized shades designed for Newport Beach homes and coastal living.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={site.consultationPath} className="button-primary">Schedule a Consultation</Link>
              <Link href="/motorized-shades-orange-county" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
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
        <div className="container-pad grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">What Are Motorized Shades?</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink">Automated Comfort Designed Around You</h2>
            <p className="mt-6 text-base leading-8 text-ink/68">
              Motorized shades allow you to control light, privacy, and comfort using wall keypads, mobile devices, voice control, schedules, or integrated smart home systems.
            </p>
            <div className="mt-7 grid gap-3">
              {["Convenience at the touch of a button", "Privacy when you need it", "Energy efficiency and UV protection", "Beautifully integrated into your home"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-ink/70">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-copper/40 text-xs text-copper">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {dayCards.map(([title, copy, image, icon]) => (
              <article key={title} className="relative min-h-80 overflow-hidden rounded-lg bg-ink shadow-soft">
                <Image src={image} alt="Motorized shades adjusting for morning afternoon and evening light" fill sizes="(min-width: 768px) 28vw, 92vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/76 via-black/12 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <Icon kind={icon} className="h-9 w-9 text-copper" />
                  <h3 className="mt-4 text-lg font-semibold uppercase tracking-[0.12em] text-copper">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/78">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#101110] text-white">
        <div className="container-pad">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Why Newport Beach Homeowners Love Motorized Shades</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight">Beautiful Light Control For Coastal Living</h2>
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
        <div className="container-pad text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Motorized Shade Options</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink">Solutions For Every Space</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {shadeOptions.map(([title, icon]) => (
              <Link key={title} href="/motorized-shades-orange-county" className="group bg-white p-6 transition hover:bg-[#f9f4ec]">
                <Icon kind={icon} className="mx-auto h-10 w-10 text-copper" />
                <h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f2ea] py-14 sm:py-16">
        <div className="container-pad grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg bg-white p-7 shadow-soft sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Motorized Shades For Newport Beach Homes</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink">Designed For Coastal Living</h2>
            <p className="mt-6 text-base leading-8 text-ink/68">
              Newport Beach homes are known for their views, natural light, and indoor-outdoor lifestyle. Motorized shades help you enjoy it all with comfort, privacy, and control.
            </p>
            <p className="mt-5 text-base leading-8 text-ink/68">
              We design motorized shade systems for homes throughout Newport Beach, Newport Coast, Corona del Mar, Balboa Island, Eastbluff, Harbor View, Dover Shores, and surrounding Orange County communities.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {localAreas.map((area) => (
                <div key={area} className="flex items-center gap-3 text-sm font-semibold text-ink/70">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-copper/40 text-xs text-copper">✓</span>
                  {area}
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-ink/10 bg-white p-7 shadow-soft">
            <div className="absolute inset-0 opacity-30 geo-pattern" />
            <div className="relative grid h-full min-h-[360px] place-items-center rounded-lg bg-[#101110] text-white">
              <div className="absolute inset-6 rounded-lg border border-copper/25" />
              <div className="grid w-full max-w-sm grid-cols-2 gap-4 p-8 text-sm font-semibold">
                {["Irvine", "Costa Mesa", "Newport Beach", "Newport Coast", "Corona del Mar", "Laguna Beach"].map((city) => (
                  <div key={city} className={`rounded-full border px-4 py-3 text-center ${city === "Newport Beach" ? "border-copper bg-copper/20 text-copper" : "border-white/12 text-white/62"}`}>
                    {city}
                  </div>
                ))}
              </div>
            </div>
            <p className="sr-only">Motorized shades service area map for Newport Beach and Orange County</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f2ea] py-12 sm:py-16">
        <div className="container-pad grid overflow-hidden rounded-lg bg-white shadow-soft lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-80">
            <Image src="/images/home-office - wo text.png" alt="Motorized shade planning for new construction and remodel in Newport Beach" fill sizes="(min-width: 1024px) 48vw, 92vw" className="object-cover" />
          </div>
          <div className="p-7 sm:p-10 lg:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">New Construction & Remodel</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink">Plan Shades Early For The Best Results</h2>
            <p className="mt-6 text-base leading-8 text-ink/68">
              Planning shades early ensures the best results visually, functionally, and technically. We collaborate with homeowners, builders, architects, and interior designers to coordinate wiring, window pockets, concealed shade integration, large glass walls, and smart home control.
            </p>
            <div className="mt-7 grid gap-3">
              {planningChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm font-semibold leading-6 text-ink/70">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-copper/40 text-xs text-copper">✓</span>
                  {item}
                </div>
              ))}
            </div>
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
        <Image src="/images/Entertaining - wo text.png" alt="Warm Newport Beach interior with automated shades at sunset" fill sizes="100vw" className="object-cover opacity-68" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/22" />
        <div className="container-pad relative grid min-h-[430px] items-center py-16 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">Experience The Beauty Of Automated Shades</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/76">
              Whether you are building a custom coastal residence, remodeling an existing property, or upgrading individual rooms, Elegant Home Automation can help create a motorized shade experience that feels effortless, elegant, and perfectly integrated into your home.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={site.consultationPath} className="button-primary">Schedule a Consultation</Link>
              <Link href="/motorized-shades-orange-county" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
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
              <h2 className="mt-5 text-4xl font-semibold leading-tight">Motorized Shades Questions</h2>
              <div className="mt-8 grid gap-2 text-sm font-semibold">
                <Link href="/" className="text-white/72 transition hover:text-copper">Home</Link>
                <Link href="/motorized-shades-orange-county" className="text-white/72 transition hover:text-copper">Motorized Shades Services</Link>
                <Link href={site.consultationPath} className="text-white/72 transition hover:text-copper">Contact Elegant Home Automation</Link>
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {faqItems.map(([question, answer]) => (
                <details key={question} className="group rounded-lg border border-white/10 bg-white/[0.03] p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold">
                    <span>{question}</span>
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

function InternalLinkGroup({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className="text-sm font-semibold text-white/66 transition hover:text-copper">
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
    window: (
      <>
        <rect x="4" y="4" width="16" height="16" {...common} />
        <path d="M12 4v16M4 11h16" {...common} />
      </>
    ),
    shade: (
      <>
        <path d="M5 4h14v16H5V4Z" {...common} />
        <path d="M5 8h14M5 12h14M5 16h14" {...common} />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" {...common} />
        <path d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1" {...common} />
      </>
    ),
    moon: <path d="M20 15.2A7.5 7.5 0 0 1 8.8 4a8.4 8.4 0 1 0 11.2 11.2Z" {...common} />,
    touch: (
      <>
        <path d="M9 12V5a2 2 0 0 1 4 0v6" {...common} />
        <path d="M13 10.5h1a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2V17c0 3-2 5-5.5 5H12c-2.5 0-4.2-1.2-5.4-3.4L4.8 15a1.6 1.6 0 0 1 2.8-1.5L9 15.5" {...common} />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 20 6v6c0 5-3.4 8.2-8 9-4.6-.8-8-4-8-9V6l8-3Z" {...common} />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" {...common} />
        <circle cx="12" cy="10" r="2.4" {...common} />
      </>
    ),
    wave: <path d="M3 15c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M3 19c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" {...common} />,
    calendar: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" {...common} />
        <path d="M8 3v4M16 3v4M4 10h16" {...common} />
      </>
    ),
    fold: (
      <>
        <path d="M6 4h12v16H6V4Z" {...common} />
        <path d="M8 8h8M8 12h8M8 16h8" {...common} />
      </>
    ),
    sheer: (
      <>
        <rect x="5" y="4" width="14" height="16" {...common} />
        <path d="M8 4v16M12 4v16M16 4v16" {...common} />
      </>
    ),
    large: (
      <>
        <rect x="3" y="5" width="18" height="14" {...common} />
        <path d="M9 5v14M15 5v14" {...common} />
      </>
    ),
    plan: (
      <>
        <path d="M4 19V5h16v14H4Z" {...common} />
        <path d="M8 9h8M8 13h5M15 13h1" {...common} />
      </>
    ),
    home: (
      <>
        <path d="M4 11 12 4l8 7" {...common} />
        <path d="M6 10.5V20h12v-9.5" {...common} />
      </>
    ),
    support: (
      <>
        <circle cx="12" cy="12" r="8" {...common} />
        <path d="M8.5 12h7M12 8.5v7" {...common} />
      </>
    )
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      {icons[kind] ?? icons.window}
    </svg>
  );
}
