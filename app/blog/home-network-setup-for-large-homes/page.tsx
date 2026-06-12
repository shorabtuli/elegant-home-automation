import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const pagePath = "/blog/home-network-setup-for-large-homes";

const metaDescription =
  "Elegant Home Automation designs reliable home network setups for large homes, including whole-home WiFi, access points, structured wiring, outdoor WiFi, and smart home networking across Orange County.";

const trustItems = [
  ["Whole-Home Coverage", "Reliable WiFi throughout every room.", "wifi"],
  ["Smart Home Ready", "Built to support automation, audio, security, and lighting.", "home"],
  ["Designed For Large Homes", "Solutions scaled for larger residences and complex floor plans.", "large"],
  ["Orange County Expertise", "Serving luxury homes throughout Orange County.", "pin"]
];

const lifestyleCards = [
  {
    title: "Work Without Interruptions",
    copy: "Reliable connectivity for remote work, video meetings, and productivity.",
    image: "/images/home-office - wo text.png",
    icon: "laptop",
    alt: "Luxury home office with reliable WiFi for video calls and remote work"
  },
  {
    title: "Stream Everywhere",
    copy: "Smooth streaming across televisions, tablets, and mobile devices.",
    image: "/images/movie night - wo text.png",
    icon: "screen",
    alt: "Home theater with reliable network for streaming"
  },
  {
    title: "Power The Modern Smart Home",
    copy: "Support lighting, shades, security, audio, and automation systems.",
    image: "/images/Entertaining - wo text.png",
    icon: "home",
    alt: "Smart home control system supported by reliable home networking"
  }
];

const networkSolutions = [
  ["Whole Home WiFi", "wifi"],
  ["WiFi Access Points", "access"],
  ["Outdoor WiFi", "outdoor"],
  ["Home Office Networks", "laptop"],
  ["Structured Wiring", "wire"],
  ["Network Security", "shield"],
  ["Guest Networks", "users"],
  ["Smart Home Networking", "home"]
];

const orangeCountyCities = ["Irvine", "Newport Beach", "Newport Coast", "Laguna Beach", "Dana Point", "Costa Mesa"];

const localChecklist = [
  "Multiple floors and large layouts",
  "Outdoor living and pool areas",
  "Home offices and remote work",
  "Smart home technology throughout",
  "Entertainment and streaming spaces"
];

const planningChecklist = [
  "Low-voltage and wiring planning",
  "Access point placement and coverage",
  "Equipment location and ventilation",
  "Future-proofing for technology",
  "Coordination with your entire team"
];

const whyItems = [
  ["Design First", "Technology should support the beauty of your home.", "plan"],
  ["Reliable Performance", "Consistent, fast, and secure connectivity everywhere.", "signal"],
  ["Seamless Integration", "Networking designed alongside lighting, shades, audio, and security.", "home"],
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
  ["Smart Home Automation Orange County", "/smart-home-automation-orange-county"]
];

const faqItems = [
  [
    "Why is my WiFi slow in a large home?",
    "Large homes often have WiFi issues because of distance, walls, construction materials, multiple floors, outdoor spaces, and high device counts. A faster internet plan may not solve the issue if the network design does not provide strong coverage throughout the home."
  ],
  [
    "How many WiFi access points do I need for a large home?",
    "The number of access points depends on the size of the home, layout, construction materials, outdoor areas, internet usage, and smart home devices. A thoughtful design places access points where they provide reliable coverage without cluttering the home."
  ],
  [
    "Is mesh WiFi enough for a large home?",
    "Mesh WiFi can work for some homes, but larger residences often benefit from professionally planned access points, structured wiring, and equipment designed for better reliability and coverage."
  ],
  [
    "Can a home network support smart home systems?",
    "Yes. A strong network is the foundation for smart lighting, motorized shades, security, cameras, whole-home audio, home theater, and automation systems."
  ],
  [
    "How do I improve outdoor WiFi coverage?",
    "Outdoor WiFi is best improved with weather-appropriate outdoor access points, thoughtful placement, and proper network design for patios, pools, outdoor kitchens, and guest areas."
  ],
  [
    "Should networking be planned during construction?",
    "Yes. New construction or remodeling is the best time to plan structured wiring, access point placement, equipment locations, and future smart home needs."
  ],
  [
    "What is structured wiring?",
    "Structured wiring is the planned installation of network, audio, video, security, and control wiring throughout the home. It creates a stronger foundation for reliable technology and future upgrades."
  ],
  [
    "What areas do you serve in Orange County?",
    "We serve homeowners throughout Orange County, including Irvine, Newport Beach, Newport Coast, Laguna Beach, Costa Mesa, Dana Point, Laguna Niguel, Mission Viejo, Tustin, and nearby communities."
  ]
];

export const metadata: Metadata = {
  title: { absolute: "Home Network Setup for Large Homes | Elegant Home Automation" },
  description: metaDescription,
  alternates: { canonical: pagePath },
  keywords: [
    "home network setup for large homes",
    "WiFi for large houses",
    "whole home WiFi system",
    "home networking Orange County",
    "luxury home networking",
    "smart home network installation",
    "mesh WiFi for large homes",
    "home WiFi access points",
    "outdoor WiFi for large homes",
    "structured wiring for large homes"
  ],
  openGraph: {
    title: "Home Network Setup for Large Homes | Elegant Home Automation",
    description: metaDescription,
    url: pagePath,
    type: "article",
    images: [{ url: "/images/Entertaining - wo text.png", alt: "Luxury Orange County large home with reliable whole home network setup" }]
  }
};

export default function HomeNetworkSetupForLargeHomesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Home Network Setup for Large Homes",
          description: metaDescription,
          provider: {
            "@type": "LocalBusiness",
            "@id": `${site.url}#business`,
            name: site.name,
            areaServed: "Orange County, CA"
          },
          areaServed: "Orange County, CA",
          serviceType: "Home network setup and whole-home WiFi design",
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
          src="/images/Entertaining - wo text.png"
          alt="Luxury Orange County large home with reliable whole home network setup"
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
              <span>Home Network Setup for Large Homes</span>
            </nav>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Home Network Setup for Large Homes</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] sm:text-6xl">Home Network Setup for Large Homes</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              A beautifully connected home starts with the right network. Elegant Home Automation designs high-performance home networking systems that eliminate dead zones, improve reliability, and support everything from streaming and video calls to whole-home automation.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={site.consultationPath} className="button-primary">Schedule a Consultation</Link>
              <Link href="/whole-home-wifi-installation-orange-county" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
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
        <div className="container-pad grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Why Large Homes Need Better Networks</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink">Strong Connections. Everywhere.</h2>
            <p className="mt-6 text-base leading-8 text-ink/68">
              Large homes create unique networking challenges, including multiple floors, thick construction materials, outdoor spaces, and high device demands. A faster internet plan alone rarely solves the problem if the network is not designed around the home.
            </p>
            <p className="mt-5 text-base leading-8 text-ink/68">
              A properly designed home network improves coverage, speed, stability, and reliability so your family can work, stream, communicate, and control smart home systems without frustration.
            </p>
            <div className="mt-7 grid gap-3">
              {["Eliminate WiFi dead zones", "Improve video calls and streaming", "Support smart home systems", "Extend coverage outdoors", "Create reliable performance throughout the home"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-ink/70">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-copper/40 text-xs text-copper">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <CoverageHomeVisual />
        </div>
      </section>

      <section className="section bg-[#101110] text-white">
        <div className="container-pad">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Designed For The Way You Live</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight">Reliable Connectivity For Every Part Of The Home</h2>
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
        <div className="container-pad grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Coverage Everywhere It Matters</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink">Thoughtful Design. Complete Coverage.</h2>
            <p className="mt-6 text-base leading-8 text-ink/68">
              We design networks that reach every corner of your home, inside and out, so you stay connected in the spaces that matter most.
            </p>
          </div>
          <CoverageDiagram />
        </div>
      </section>

      <section className="border-y border-copper/20 bg-[#101110] py-16 text-white sm:py-20">
        <div className="container-pad text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Networking Solutions For Luxury Homes</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight">Infrastructure Built For Modern Living</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {networkSolutions.map(([title, icon]) => (
              <Link key={title} href="/whole-home-wifi-installation-orange-county" className="group bg-[#101110] p-6 transition hover:bg-white/[0.04]">
                <Icon kind={icon} className="mx-auto h-9 w-9 text-copper" />
                <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-white/52">Planned for coverage, reliability, and clean integration.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f2ea] py-14 sm:py-16">
        <div className="container-pad grid gap-6 lg:grid-cols-[0.9fr_0.8fr_0.9fr]">
          <div className="rounded-lg bg-white p-7 shadow-soft sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Orange County Homes, Connected The Right Way</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink">Networking For Large Orange County Homes</h2>
            <p className="mt-6 text-base leading-8 text-ink/68">
              From Irvine and Newport Beach to Newport Coast, Laguna Beach, Dana Point, and Costa Mesa, large Orange County homes often include outdoor living spaces, pool areas, home offices, media rooms, and smart home technology that all depend on a strong network.
            </p>
            <p className="mt-5 text-base leading-8 text-ink/68">
              Elegant Home Automation designs networking systems that are powerful, discreet, and built to support the way your home is actually used.
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
                {orangeCountyCities.map((city) => (
                  <div key={city} className={`rounded-full border px-3 py-3 text-center ${city === "Irvine" || city === "Newport Beach" ? "border-copper bg-copper/20 text-copper" : "border-white/12 text-white/62"}`}>
                    {city}
                  </div>
                ))}
              </div>
            </div>
            <p className="sr-only">Orange County home networking service area map</p>
          </div>
          <div className="rounded-lg bg-white p-7 shadow-soft sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">New Construction & Remodel</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink">Plan It Right. Build It Once.</h2>
            <p className="mt-6 text-base leading-8 text-ink/68">
              The best networks are designed early. We work closely with homeowners, builders, architects, and designers to ensure your home is wired for today and ready for tomorrow.
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
          <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-copper">Why Homeowners Choose Elegant Home Automation</p>
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
        <Image src="/images/Entertaining - wo text.png" alt="Luxury large home interior with connected smart home network" fill sizes="100vw" className="object-cover opacity-68" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/22" />
        <div className="container-pad relative grid min-h-[430px] items-center py-16 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">A Better Network. A Better Home.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/76">
              Whether you are building a new home, remodeling, or upgrading your existing network, Elegant Home Automation can design a solution that keeps every room connected and every experience seamless.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={site.consultationPath} className="button-primary">Schedule a Consultation</Link>
              <Link href="/whole-home-wifi-installation-orange-county" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
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
              <h2 className="mt-5 text-4xl font-semibold leading-tight">Home Network Setup Questions</h2>
              <div className="mt-8 grid gap-2 text-sm font-semibold">
                <Link href="/" className="text-white/72 transition hover:text-copper">Home</Link>
                <Link href="/whole-home-wifi-installation-orange-county" className="text-white/72 transition hover:text-copper">Home Networking Services</Link>
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

function CoverageHomeVisual() {
  const points = [
    "left-[18%] top-[30%]",
    "left-[35%] top-[58%]",
    "left-[52%] top-[34%]",
    "right-[18%] top-[38%]",
    "right-[28%] bottom-[24%]"
  ];

  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-lg bg-ink shadow-soft">
      <Image src="/images/Away Mode - wo text.png" alt="Large Orange County home with whole home WiFi coverage points" fill sizes="(min-width: 1024px) 58vw, 92vw" className="object-cover opacity-86" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      {points.map((position) => (
        <span key={position} className={`absolute ${position} flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-copper/40 bg-copper/15 text-copper shadow-[0_0_32px_rgba(209,126,36,0.38)]`}>
          <Icon kind="wifi" className="h-7 w-7" />
        </span>
      ))}
      <div className="absolute left-[18%] right-[18%] top-[44%] h-px bg-copper/30" />
      <div className="absolute bottom-[28%] left-[35%] right-[28%] h-px bg-copper/30" />
    </div>
  );
}

function CoverageDiagram() {
  const zones = [
    ["Great Room", "left-[18%] top-[42%]"],
    ["Kitchen", "left-[45%] top-[46%]"],
    ["Primary Suite", "right-[18%] top-[38%]"],
    ["Home Office", "left-[28%] bottom-[22%]"],
    ["Patio", "right-[24%] top-[18%]"],
    ["Pool Area", "right-[8%] top-[28%]"],
    ["Outdoor Living", "right-[18%] bottom-[16%]"],
    ["Guest House", "left-[20%] top-[18%]"]
  ];

  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-ink/10 bg-white p-6 shadow-soft" aria-label="Floorplan diagram showing home network coverage for large home">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(209,126,36,0.14),transparent_42%)]" />
      <div className="relative h-[360px] rounded-lg border border-ink/10 bg-[#f3ede4]">
        <div className="absolute left-[8%] top-[12%] h-32 w-40 rounded border border-ink/10 bg-white/55" />
        <div className="absolute left-[34%] top-[14%] h-36 w-44 rounded border border-ink/10 bg-white/55" />
        <div className="absolute right-[9%] top-[12%] h-40 w-48 rounded border border-ink/10 bg-white/55" />
        <div className="absolute bottom-[10%] left-[14%] h-36 w-52 rounded border border-ink/10 bg-white/55" />
        <div className="absolute bottom-[9%] right-[12%] h-32 w-56 rounded border border-ink/10 bg-white/55" />
        {zones.map(([label, position]) => (
          <div key={label} className={`absolute ${position} flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-center`}>
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-copper/40 bg-white text-copper shadow-soft">
              <Icon kind="wifi" className="h-5 w-5" />
            </span>
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink/70 shadow-sm">{label}</span>
          </div>
        ))}
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
    wifi: (
      <>
        <path d="M4.5 10.5a11 11 0 0 1 15 0" {...common} />
        <path d="M7.7 13.6a6.5 6.5 0 0 1 8.6 0" {...common} />
        <path d="M10.6 16.6a2.2 2.2 0 0 1 2.8 0" {...common} />
        <path d="M12 20h.01" {...common} />
      </>
    ),
    access: (
      <>
        <rect x="5" y="7" width="14" height="10" rx="2" {...common} />
        <path d="M8 17v2M16 17v2M9 11h6" {...common} />
      </>
    ),
    outdoor: (
      <>
        <path d="M4 18c2-4 5-6 8-6s6 2 8 6" {...common} />
        <path d="M8 13c0-3 1.3-5 4-7 2.7 2 4 4 4 7" {...common} />
      </>
    ),
    laptop: (
      <>
        <rect x="5" y="5" width="14" height="10" rx="1.5" {...common} />
        <path d="M3 19h18l-2-4H5l-2 4Z" {...common} />
      </>
    ),
    screen: (
      <>
        <rect x="4" y="5" width="16" height="11" rx="2" {...common} />
        <path d="M10 20h4M12 16v4M10.5 8.5l4 2.5-4 2.5v-5Z" {...common} />
      </>
    ),
    wire: (
      <>
        <path d="M7 4v7a5 5 0 0 0 10 0V4" {...common} />
        <path d="M9 4v4M15 4v4M12 16v4" {...common} />
      </>
    ),
    shield: <path d="M12 3 20 6v6c0 5-3.4 8.2-8 9-4.6-.8-8-4-8-9V6l8-3Z" {...common} />,
    users: (
      <>
        <circle cx="9" cy="8" r="3" {...common} />
        <circle cx="17" cy="9" r="2.5" {...common} />
        <path d="M3.5 20a5.5 5.5 0 0 1 11 0M14 20a4.5 4.5 0 0 1 7 0" {...common} />
      </>
    ),
    home: (
      <>
        <path d="M4 11 12 4l8 7" {...common} />
        <path d="M6 10.5V20h12v-9.5" {...common} />
        <path d="M10 20v-6h4v6" {...common} />
      </>
    ),
    large: (
      <>
        <path d="M3 20V9l9-5 9 5v11" {...common} />
        <path d="M7 20v-7h10v7M9 16h6" {...common} />
      </>
    ),
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
    signal: (
      <>
        <path d="M4 20V10M10 20V6M16 20V13M22 20V4" {...common} />
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
      {icons[kind] ?? icons.wifi}
    </svg>
  );
}
