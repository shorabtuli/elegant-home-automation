import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const pagePath = "/blog/smart-lighting-installer";

const metaDescription =
  "Elegant Home Automation designs and installs premium smart lighting systems for Orange County homes, including lighting scenes, automated schedules, keypads, smart home integration, and architectural lighting control.";

const trustItems = [
  ["Thoughtfully Designed Lighting", "Lighting planned around your home, architecture, and lifestyle.", "bulb"],
  ["Effortless Control", "Control lighting from keypads, mobile devices, and smart home systems.", "keypad"],
  ["Beautiful Ambiance", "Create the perfect atmosphere for every moment of the day.", "sun"],
  ["Orange County Expertise", "Serving luxury homes throughout Orange County.", "pin"]
];

const sceneCards = [
  ["Morning", "Energize your day", "/images/morning-routine - wo text.png", "sun"],
  ["Day", "Natural light in every space", "/images/Entertaining - wo text.png", "sun"],
  ["Evening", "Relax and unwind", "/images/movie night - wo text.png", "sunset"],
  ["Night", "Set the mood", "/images/Away Mode - wo text.png", "moon"]
];

const lifestyleCards = [
  {
    title: "Entertain Beautifully",
    copy: "Create the perfect atmosphere for gatherings, dinners, and special occasions.",
    image: "/images/Entertaining - wo text.png",
    icon: "scene",
    alt: "Elegant dining room with smart lighting for entertaining"
  },
  {
    title: "Simplify Everyday Living",
    copy: "Automated scenes and schedules adjust lighting to your routines.",
    image: "/images/morning-routine - wo text.png",
    icon: "calendar",
    alt: "Living room with automated lighting scenes for daily routines"
  },
  {
    title: "Enhance Comfort & Security",
    copy: "Lighting can respond when you are home, away, or on the go.",
    image: "/images/Away Mode - wo text.png",
    icon: "shield",
    alt: "Luxury home exterior with smart lighting and security scenes"
  }
];

const solutions = [
  ["Lighting Control", "dimmer"],
  ["Lighting Scenes", "scene"],
  ["Automated Scheduling", "calendar"],
  ["Outdoor Lighting", "outdoor"],
  ["Landscape Lighting", "landscape"],
  ["Circadian Lighting", "moon"],
  ["Smart Keypads", "keypad"],
  ["Integrated Smart Home Lighting", "home"]
];

const serviceAreas = ["Irvine", "Newport Beach", "Newport Coast", "Laguna Beach", "Costa Mesa", "Dana Point"];

const localChecklist = [
  "Modern coastal homes",
  "New construction and remodels",
  "Indoor and outdoor living spaces",
  "Architectural and landscape lighting",
  "Luxury smart home integration"
];

const planningChecklist = [
  "Lighting design and circuit planning",
  "Keypad and control placement",
  "Indoor and outdoor lighting coordination",
  "Integration with shades and automation",
  "Collaboration with your entire team"
];

const whyItems = [
  ["Design First", "Lighting that elevates your home's beauty.", "plan"],
  ["Seamless Integration", "Lighting works together with all your smart home systems.", "home"],
  ["Clean Installation", "Technology that disappears into your home and architecture.", "hidden"],
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
  ["Motorized Shades Newport Beach", "/blog/motorized-shades-newport-beach"],
  ["Home Network Setup for Large Homes", "/blog/home-network-setup-for-large-homes"],
  ["Smart Lighting Control Orange County", "/smart-lighting-control-orange-county"]
];

const faqItems = [
  [
    "What is smart lighting?",
    "Smart lighting allows you to control brightness, scenes, schedules, and automation throughout your home. It can be controlled from wall keypads, mobile devices, voice systems, or integrated smart home platforms."
  ],
  [
    "How much does smart lighting installation cost?",
    "Cost depends on the size of the home, number of lighting zones, control options, wiring needs, fixture coordination, and integration with other smart home systems. A focused room project may be smaller in scope, while whole-home lighting control requires more planning and installation."
  ],
  [
    "Can smart lighting be added to an existing home?",
    "Yes. Many existing homes can be upgraded with smart lighting. Some projects benefit from wiring and deeper integration, while others can be designed with retrofit-friendly solutions depending on the home."
  ],
  [
    "What lighting systems do you install?",
    "We recommend lighting systems based on the home, design goals, control preferences, and integration needs. Common solutions include lighting control systems, keypads, dimmers, scenes, schedules, and smart home integration."
  ],
  [
    "Can lighting work with motorized shades?",
    "Yes. Smart lighting and motorized shades can work together in scenes that manage daylight, privacy, glare, and ambiance throughout the day."
  ],
  [
    "Can I control lighting from my phone?",
    "Yes. Smart lighting can typically be controlled from mobile devices, wall keypads, remotes, or integrated smart home systems depending on the solution selected."
  ],
  [
    "Does smart lighting improve energy efficiency?",
    "Smart lighting can improve energy efficiency through dimming, schedules, occupancy-based control, and more thoughtful use of lighting throughout the home."
  ],
  [
    "What areas of Orange County do you serve?",
    "We serve homeowners throughout Orange County, including Irvine, Newport Beach, Newport Coast, Laguna Beach, Costa Mesa, Dana Point, Laguna Niguel, Mission Viejo, Tustin, and nearby communities."
  ]
];

export const metadata: Metadata = {
  title: { absolute: "Smart Lighting Installer | Elegant Home Automation" },
  description: metaDescription,
  alternates: { canonical: pagePath },
  keywords: [
    "smart lighting installer",
    "smart lighting installation",
    "smart home lighting systems",
    "automated lighting control",
    "smart lighting Orange County",
    "Lutron lighting installer",
    "home lighting automation",
    "luxury smart lighting",
    "lighting control installer",
    "architectural lighting control"
  ],
  openGraph: {
    title: "Smart Lighting Installer | Elegant Home Automation",
    description: metaDescription,
    url: pagePath,
    type: "article",
    images: [{ url: "/images/Away Mode - wo text.png", alt: "Luxury Orange County home with smart lighting and architectural lighting scenes" }]
  }
};

export default function SmartLightingInstallerPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Smart Lighting Installer",
          description: metaDescription,
          provider: {
            "@type": "LocalBusiness",
            "@id": `${site.url}#business`,
            name: site.name,
            areaServed: "Orange County, CA"
          },
          areaServed: "Orange County, CA",
          serviceType: "Smart lighting design and installation",
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
          src="/images/Away Mode - wo text.png"
          alt="Luxury Orange County home with smart lighting and architectural lighting scenes"
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
              <span>Smart Lighting Installer</span>
            </nav>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Smart Lighting Installer</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] sm:text-6xl">Smart Lighting Installer</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              Beautiful lighting. Effortless control. Elegant Home Automation designs and installs smart lighting systems that enhance your home, simplify your life, and create the perfect atmosphere for every moment.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={site.consultationPath} className="button-primary">Schedule a Consultation</Link>
              <Link href="/smart-lighting-control-orange-county" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">What Is Smart Lighting?</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink">Intelligent Lighting For Modern Living</h2>
            <p className="mt-6 text-base leading-8 text-ink/68">
              Smart lighting gives you complete control over your home's lighting, anytime and anywhere. Adjust brightness, set scenes, automate schedules, and enhance comfort, security, and efficiency with a system designed around you.
            </p>
            <div className="mt-7 grid gap-3">
              {["Convenience at your fingertips", "Enhanced security and peace of mind", "Energy efficiency and lower utility costs", "Seamless integration with your smart home"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-ink/70">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-copper/40 text-xs text-copper">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {sceneCards.map(([title, copy, image, icon]) => (
              <article key={title} className="relative min-h-80 overflow-hidden rounded-lg bg-ink shadow-soft">
                <Image src={image} alt="Smart lighting scenes for morning day evening and night" fill sizes="(min-width: 1280px) 18vw, (min-width: 640px) 42vw, 92vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/18 to-transparent" />
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Lighting That Adapts To Your Life</p>
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
        <div className="container-pad text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Smart Lighting Solutions</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink">Solutions For Every Space</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map(([title, icon]) => (
              <Link key={title} href="/smart-lighting-control-orange-county" className="group bg-white p-6 transition hover:bg-[#f9f4ec]">
                <Icon kind={icon} className="mx-auto h-10 w-10 text-copper" />
                <h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f2ea] py-14 sm:py-16">
        <div className="container-pad grid gap-6 lg:grid-cols-[0.9fr_0.8fr_0.9fr]">
          <div className="rounded-lg bg-white p-7 shadow-soft sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Serving Orange County</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink">Smart Lighting For Orange County Homes</h2>
            <p className="mt-6 text-base leading-8 text-ink/68">
              We design lighting systems for homes throughout Orange County, including Irvine, Newport Beach, Newport Coast, Laguna Beach, Costa Mesa, Dana Point, and surrounding communities.
            </p>
            <p className="mt-5 text-base leading-8 text-ink/68">
              From modern coastal homes to new construction and remodel projects, smart lighting can elevate open floorplans, outdoor living spaces, architectural details, artwork, and everyday routines.
            </p>
            <div className="mt-7 grid gap-3">
              {localChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm font-semibold leading-6 text-ink/70">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-copper/40 text-xs text-copper">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-ink/10 bg-white p-7 shadow-soft">
            <div className="absolute inset-0 opacity-30 geo-pattern" />
            <div className="relative grid h-full min-h-[360px] place-items-center rounded-lg bg-[#101110] text-white">
              <div className="absolute inset-6 rounded-lg border border-copper/25" />
              <div className="grid w-full max-w-xs grid-cols-2 gap-3 p-8 text-sm font-semibold">
                {serviceAreas.map((city) => (
                  <div key={city} className={`rounded-full border px-3 py-3 text-center ${city === "Irvine" || city === "Newport Beach" ? "border-copper bg-copper/20 text-copper" : "border-white/12 text-white/62"}`}>
                    {city}
                  </div>
                ))}
              </div>
            </div>
            <p className="sr-only">Orange County smart lighting service area map</p>
          </div>
          <div className="rounded-lg bg-white p-7 shadow-soft sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">New Construction & Remodel</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink">Plan Lighting Early For The Best Results</h2>
            <p className="mt-6 text-base leading-8 text-ink/68">
              Lighting is most impactful when planned early. We collaborate with builders, architects, and designers to deliver beautiful, functional lighting that is perfectly integrated into the home.
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
        <Image src="/images/movie night - wo text.png" alt="Warm luxury living room with layered smart lighting" fill sizes="100vw" className="object-cover opacity-68" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/22" />
        <div className="container-pad relative grid min-h-[430px] items-center py-16 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">Experience Lighting Designed Around You</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/76">
              Whether you are building a new home, remodeling, or upgrading your existing property, Elegant Home Automation can create a smart lighting experience that feels effortless, elegant, and perfectly integrated.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={site.consultationPath} className="button-primary">Schedule a Consultation</Link>
              <Link href="/smart-lighting-control-orange-county" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
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
              <h2 className="mt-5 text-4xl font-semibold leading-tight">Smart Lighting Questions</h2>
              <div className="mt-8 grid gap-2 text-sm font-semibold">
                <Link href="/" className="text-white/72 transition hover:text-copper">Home</Link>
                <Link href="/smart-lighting-control-orange-county" className="text-white/72 transition hover:text-copper">Smart Lighting Services</Link>
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
    bulb: (
      <>
        <path d="M9 18h6M10 22h4M8 14a6 6 0 1 1 8 0c-.8.7-1.2 1.5-1.4 2H9.4c-.2-.5-.6-1.3-1.4-2Z" {...common} />
      </>
    ),
    dimmer: (
      <>
        <rect x="6" y="3" width="12" height="18" rx="2" {...common} />
        <path d="M10 8h4M10 12h4M12 16h.01" {...common} />
      </>
    ),
    scene: (
      <>
        <path d="M4 17c2-4 5-6 8-6s6 2 8 6" {...common} />
        <path d="M8 13c0-3 1.3-5 4-7 2.7 2 4 4 4 7" {...common} />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" {...common} />
        <path d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1" {...common} />
      </>
    ),
    sunset: (
      <>
        <path d="M4 18h16M7 15a5 5 0 0 1 10 0" {...common} />
        <path d="M12 5v5M8 8l2 2M16 8l-2 2" {...common} />
      </>
    ),
    moon: <path d="M20 15.2A7.5 7.5 0 0 1 8.8 4a8.4 8.4 0 1 0 11.2 11.2Z" {...common} />,
    keypad: (
      <>
        <rect x="6" y="3" width="12" height="18" rx="2" {...common} />
        <path d="M9 8h.01M12 8h.01M15 8h.01M9 12h.01M12 12h.01M15 12h.01M9 16h6" {...common} />
      </>
    ),
    outdoor: (
      <>
        <path d="M6 20V9l6-5 6 5v11" {...common} />
        <path d="M9 13h6M12 10v6" {...common} />
      </>
    ),
    landscape: (
      <>
        <path d="M4 18c2-4 5-6 8-6s6 2 8 6" {...common} />
        <path d="M7 18h10M12 5v7" {...common} />
      </>
    ),
    shield: <path d="M12 3 20 6v6c0 5-3.4 8.2-8 9-4.6-.8-8-4-8-9V6l8-3Z" {...common} />,
    pin: (
      <>
        <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" {...common} />
        <circle cx="12" cy="10" r="2.4" {...common} />
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
    hidden: (
      <>
        <path d="M3 12s3.2-5 9-5 9 5 9 5-3.2 5-9 5-9-5-9-5Z" {...common} />
        <path d="m4 20 16-16" {...common} />
      </>
    ),
    calendar: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" {...common} />
        <path d="M8 3v4M16 3v4M4 10h16" {...common} />
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
      {icons[kind] ?? icons.bulb}
    </svg>
  );
}
