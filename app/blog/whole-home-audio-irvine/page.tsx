import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const pagePath = "/blog/whole-home-audio-irvine";

const metaDescription =
  "Elegant Home Automation designs and installs premium whole-home audio systems in Irvine, CA, including multi-room audio, indoor speakers, outdoor audio, smart controls, and integrated home automation.";

const trustItems = [
  ["Thoughtfully Designed Audio", "Systems planned around the home and lifestyle.", "plan"],
  ["Seamless Room-to-Room Listening", "Music follows you throughout the home.", "music"],
  ["Clean Architectural Integration", "Technology blends into the design.", "hidden"],
  ["Local Orange County Expertise", "Serving Irvine and surrounding communities.", "pin"]
];

const lifestyleCards = [
  {
    title: "Entertain Effortlessly",
    copy: "Fill indoor and outdoor spaces with synchronized music for dinners, parties, and family gatherings.",
    image: "/images/Entertaining - wo text.png",
    icon: "music",
    alt: "Elegant Irvine dining and entertaining space with integrated whole home audio"
  },
  {
    title: "Enjoy Personal Listening",
    copy: "Different rooms can enjoy different content, so everyone can listen their own way.",
    image: "/images/morning-routine - wo text.png",
    icon: "headphones",
    alt: "Warm Irvine living space designed for personal listening and whole home audio"
  },
  {
    title: "Control Everything Easily",
    copy: "Simple control from wall keypads, mobile devices, or integrated smart home systems.",
    image: "/images/home-office - wo text.png",
    icon: "phone",
    alt: "Elegant smart home control scene for whole home audio in Irvine"
  }
];

const showcasePanels = [
  ["Great Room", "Elegant integrated audio for family gatherings.", "/images/morning-routine - wo text.png"],
  ["Outdoor Living", "Music by the pool, patio, and outdoor kitchen.", "/images/Entertaining - wo text.png"],
  ["Private Retreat", "Relaxing audio in bedrooms and personal spaces.", "/images/movie night - wo text.png"]
];

const solutions = [
  ["Multi-Room Audio", "/home-audio-video-media-rooms", "music"],
  ["Indoor Speakers", "/home-audio-video-media-rooms", "speaker"],
  ["Outdoor Speakers", "/home-audio-video-media-rooms", "outdoor"],
  ["Landscape Audio", "/home-audio-video-media-rooms", "landscape"],
  ["Architectural Speakers", "/home-audio-video-media-rooms", "hidden"],
  ["Hidden Speakers", "/home-audio-video-media-rooms", "hidden"],
  ["Smart Audio Control", "/home-audio-video-media-rooms", "phone"],
  ["Integrated Home Automation", "/smart-home-automation-orange-county", "home"]
];

const neighborhoods = ["Great Park", "Orchard Hills", "Portola Springs", "Turtle Rock", "Shady Canyon", "Woodbury"];

const planningChecklist = [
  "Pre-wire planning for flawless performance",
  "Optimal speaker placement for every space",
  "Equipment location and ventilation planning",
  "Outdoor audio designed for your environment",
  "Seamless coordination with builders, architects, and interior designers"
];

const whyItems = [
  ["Design First", "Audio should complement the home.", "plan"],
  ["Simple Control", "Easy to use, every single day.", "phone"],
  ["Clean Installation", "Technology integrated elegantly and discreetly.", "hidden"],
  ["Long-Term Support", "A trusted partner long after installation.", "support"]
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
  ["Smart Home Automation Orange County", "/smart-home-automation-orange-county"],
  ["Smart Home Automation Cost Orange County", "/smart-home-automation-cost-orange-county"]
];

const faqItems = [
  [
    "What is whole home audio?",
    "Whole-home audio allows music, podcasts, television audio, and entertainment to play throughout multiple rooms or outdoor spaces from one coordinated system. It can be designed for background listening, entertaining, outdoor living, or room-by-room control."
  ],
  [
    "How much does whole home audio installation cost in Irvine?",
    "Cost depends on the number of rooms, speaker types, wiring needs, outdoor areas, control options, and integration with other smart home systems. A focused audio project may be smaller in scope, while a full-home system requires more planning, equipment, and installation."
  ],
  [
    "Can different rooms play different music?",
    "Yes. A properly designed multi-room audio system can allow different rooms or zones to play different music, or the entire home can play the same source for entertaining."
  ],
  [
    "Can I control audio from my phone?",
    "Yes. Whole-home audio systems can typically be controlled from a mobile device, wall keypad, remote, or integrated smart home control system depending on the solution selected."
  ],
  [
    "Are outdoor speakers weatherproof?",
    "Outdoor speakers are designed for exterior environments, but the right product depends on the space, exposure, landscaping, and performance goals. We can recommend options for patios, pools, outdoor kitchens, and landscape areas."
  ],
  [
    "Can whole home audio be added to an existing home?",
    "Yes. Many existing Irvine homes can be upgraded with whole-home audio. Some projects benefit from wiring, while others can use retrofit-friendly approaches depending on the home and desired performance."
  ],
  [
    "Do you work with Sonos and other premium systems?",
    "Yes. We design systems around the needs of the home and can incorporate premium audio platforms and components where appropriate. The goal is to create an experience that is simple, reliable, and beautifully integrated."
  ],
  [
    "What areas near Irvine do you serve?",
    "We serve Irvine and surrounding Orange County communities including Newport Beach, Newport Coast, Costa Mesa, Tustin, Laguna Beach, Laguna Niguel, Dana Point, Mission Viejo, and Anaheim Hills."
  ]
];

export const metadata: Metadata = {
  title: { absolute: "Whole Home Audio Irvine, CA | Elegant Home Automation" },
  description: metaDescription,
  alternates: { canonical: pagePath },
  keywords: [
    "whole home audio Irvine",
    "whole home audio installation Irvine",
    "multi-room audio Irvine",
    "home audio installation Irvine",
    "whole house speakers Irvine",
    "distributed audio Irvine",
    "outdoor speakers Irvine",
    "smart audio control Irvine",
    "Sonos installer Irvine",
    "Orange County whole home audio"
  ],
  openGraph: {
    title: "Whole Home Audio Irvine, CA | Elegant Home Automation",
    description: metaDescription,
    url: pagePath,
    type: "article",
    images: [{ url: "/images/movie night - wo text.png", alt: "Luxury Irvine home with integrated whole home audio system" }]
  }
};

export default function WholeHomeAudioIrvinePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Whole Home Audio Irvine",
          description: metaDescription,
          provider: {
            "@type": "LocalBusiness",
            "@id": `${site.url}#business`,
            name: site.name,
            areaServed: "Orange County, CA"
          },
          areaServed: ["Irvine, CA", "Orange County, CA"],
          serviceType: "Whole home audio design and installation",
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
          src="/images/movie night - wo text.png"
          alt="Luxury Irvine home with integrated whole home audio system"
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
              <span>Whole Home Audio Irvine</span>
            </nav>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Whole Home Audio Irvine</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] sm:text-6xl">Whole Home Audio in Irvine, CA</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              Fill every room with beautifully integrated sound. Elegant Home Automation designs and installs premium whole-home audio systems that deliver exceptional listening experiences without compromising the design of your home.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={site.consultationPath} className="button-primary">Schedule a Consultation</Link>
              <Link href="/home-audio-video-media-rooms" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">What Is Whole Home Audio?</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink">Music Throughout The Home, Beautifully Integrated</h2>
            <p className="mt-6 text-base leading-8 text-ink/68">
              Whole-home audio allows music, podcasts, television audio, and entertainment to be distributed throughout multiple rooms and outdoor living spaces. From background music while you entertain to immersive listening in your favorite spaces, every detail is designed to sound incredible and feel easy to use.
            </p>
            <p className="mt-5 text-base leading-8 text-ink/68">
              The best audio systems are planned around how you live. We consider room layout, speaker placement, outdoor areas, control preferences, and the design of the home before recommending a solution.
            </p>
          </div>
          <AudioZoneDiagram />
        </div>
      </section>

      <section className="section bg-[#101110] text-white">
        <div className="container-pad">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Designed Around The Way You Live</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight">Sound For Every Moment</h2>
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

      <section className="bg-[#0b0c0b] text-white">
        <div className="container-pad py-16 sm:py-20">
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1fr_1fr_1fr]">
            <div className="flex min-h-72 items-end rounded-lg border border-white/10 bg-black/40 p-7">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Music Everywhere. Clutter Nowhere.</p>
                <h2 className="mt-4 text-4xl font-semibold leading-tight">A Sound Experience Designed To Disappear Into The Home</h2>
              </div>
            </div>
            {showcasePanels.map(([title, copy, image]) => (
              <article key={title} className="relative min-h-72 overflow-hidden rounded-lg bg-black">
                <Image src={image} alt={`${title} with discreet whole home audio in Irvine`} fill sizes="(min-width: 1024px) 24vw, 92vw" className="object-cover opacity-74" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-copper/20 bg-[#101110] py-16 text-white sm:py-20">
        <div className="container-pad text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Whole Home Audio Solutions</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight">Audio Systems Built Around Your Home</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map(([title, href, icon]) => (
              <Link key={title} href={href} className="group bg-[#101110] p-6 transition hover:bg-white/[0.04]">
                <Icon kind={icon} className="mx-auto h-9 w-9 text-copper" />
                <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-white/52">Planned for clean design, simple control, and daily reliability.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Whole Home Audio Systems For Irvine Homes</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink">Designed For Irvine Homes And Lifestyles</h2>
            <p className="mt-6 text-base leading-8 text-ink/68">
              Irvine homeowners often want the perfect blend of performance, design, and lifestyle. Our audio systems are tailored for the way you live, whether you are in Great Park, Orchard Hills, Portola Springs, Turtle Rock, Shady Canyon, Woodbury, or nearby Orange County communities.
            </p>
            <p className="mt-5 text-base leading-8 text-ink/68">
              We also serve surrounding areas including Newport Beach, Newport Coast, Costa Mesa, Tustin, Laguna Beach, and Mission Viejo.
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
          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-ink/10 bg-white p-7 shadow-soft">
            <div className="absolute inset-0 opacity-30 geo-pattern" />
            <div className="relative grid h-full min-h-[360px] place-items-center rounded-lg bg-[#101110] text-white">
              <div className="absolute inset-6 rounded-lg border border-copper/25" />
              <div className="grid w-full max-w-sm grid-cols-2 gap-4 p-8 text-sm font-semibold">
                {["Newport Beach", "Tustin", "Irvine", "Costa Mesa", "Laguna Beach", "Mission Viejo"].map((city) => (
                  <div key={city} className={`rounded-full border px-4 py-3 text-center ${city === "Irvine" ? "border-copper bg-copper/20 text-copper" : "border-white/12 text-white/62"}`}>
                    {city}
                  </div>
                ))}
              </div>
            </div>
            <p className="sr-only">Whole home audio service area map for Irvine and Orange County</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f2ea] py-12 sm:py-16">
        <div className="container-pad grid overflow-hidden rounded-lg bg-white shadow-soft lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-80">
            <Image src="/images/home-office - wo text.png" alt="Whole home audio speaker layout planning for Irvine home" fill sizes="(min-width: 1024px) 48vw, 92vw" className="object-cover" />
          </div>
          <div className="p-7 sm:p-10 lg:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">New Construction & Remodel</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink">Planning Audio Early Creates Better Results</h2>
            <p className="mt-6 text-base leading-8 text-ink/68">
              Whole-home audio performs best when speaker placement, wiring, equipment location, and control are considered early. We collaborate with homeowners, builders, architects, and interior designers to plan systems that sound excellent and preserve the design intent of the home.
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
        <Image src="/images/movie night - wo text.png" alt="Warm luxury living room with integrated audio and smart home control" fill sizes="100vw" className="object-cover opacity-68" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/22" />
        <div className="container-pad relative grid min-h-[430px] items-center py-16 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">Bring Music Into Every Room</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/76">
              Whether you are building a new home, remodeling, or upgrading an existing property, Elegant Home Automation can help create a whole-home audio experience that feels effortless, elegant, and perfectly integrated into the way you live.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={site.consultationPath} className="button-primary">Schedule a Consultation</Link>
              <Link href="/home-audio-video-media-rooms" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Explore Our Services
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
              <h2 className="mt-5 text-4xl font-semibold leading-tight">Whole Home Audio Questions</h2>
              <div className="mt-8 grid gap-2 text-sm font-semibold">
                <Link href="/" className="text-white/72 transition hover:text-copper">Home</Link>
                <Link href="/home-audio-video-media-rooms" className="text-white/72 transition hover:text-copper">Whole Home Audio Services</Link>
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

function AudioZoneDiagram() {
  const zones = [
    ["Living Room", "left-[12%] top-[34%]"],
    ["Kitchen", "left-[28%] top-[62%]"],
    ["Primary Suite", "right-[16%] top-[25%]"],
    ["Patio", "right-[13%] top-[54%]"],
    ["Pool Area", "right-[28%] bottom-[12%]"]
  ];

  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-lg border border-ink/10 bg-white p-6 shadow-soft" aria-label="Whole home audio system diagram for an Irvine luxury home">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(209,126,36,0.16),transparent_38%)]" />
      <div className="relative mx-auto h-[370px] max-w-xl">
        <div className="absolute left-[16%] top-[20%] h-48 w-44 rotate-[-4deg] rounded-md border border-ink/10 bg-ivory shadow-soft" />
        <div className="absolute left-[35%] top-[14%] h-56 w-52 rotate-[3deg] rounded-md border border-ink/10 bg-[#f3ede4] shadow-soft" />
        <div className="absolute right-[12%] top-[28%] h-44 w-44 rotate-[-2deg] rounded-md border border-ink/10 bg-ivory shadow-soft" />
        <div className="absolute bottom-[10%] left-[30%] h-32 w-56 rounded-md border border-ink/10 bg-[#f4efe7] shadow-soft" />
        <div className="absolute left-[26%] top-[40%] h-px w-[48%] bg-copper/30" />
        <div className="absolute left-[48%] top-[31%] h-[44%] w-px bg-copper/30" />
        {zones.map(([label, position]) => (
          <div key={label} className={`absolute ${position} flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-center`}>
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-copper/40 bg-white text-copper shadow-soft">
              <Icon kind="speaker" className="h-5 w-5" />
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
    music: (
      <>
        <path d="M15 6v11.5a3 3 0 1 1-1.5-2.6V8l7-2v9.5a3 3 0 1 1-1.5-2.6V4.5L15 6Z" {...common} />
      </>
    ),
    speaker: (
      <>
        <path d="M6 9h4l5-4v14l-5-4H6V9Z" {...common} />
        <path d="M18 9.5a4 4 0 0 1 0 5" {...common} />
      </>
    ),
    headphones: (
      <>
        <path d="M5 15v-3a7 7 0 0 1 14 0v3" {...common} />
        <path d="M5 15h3v5H5v-5Zm11 0h3v5h-3v-5Z" {...common} />
      </>
    ),
    phone: (
      <>
        <rect x="7" y="3" width="10" height="18" rx="2" {...common} />
        <path d="M10 17h4" {...common} />
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
    hidden: (
      <>
        <path d="M3 12s3.2-5 9-5 9 5 9 5-3.2 5-9 5-9-5-9-5Z" {...common} />
        <path d="m4 20 16-16" {...common} />
      </>
    ),
    outdoor: (
      <>
        <path d="M4 17h16" {...common} />
        <path d="M7 17v-5a5 5 0 0 1 10 0v5" {...common} />
        <path d="M9 10h6M12 7v10" {...common} />
      </>
    ),
    landscape: (
      <>
        <path d="M4 18c2-4 5-6 8-6s6 2 8 6" {...common} />
        <path d="M8 13c0-3 1.3-5 4-7 2.7 2 4 4 4 7" {...common} />
      </>
    ),
    home: (
      <>
        <path d="M4 11 12 4l8 7" {...common} />
        <path d="M6 10.5V20h12v-9.5" {...common} />
        <path d="M10 20v-6h4v6" {...common} />
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
      {icons[kind] ?? icons.music}
    </svg>
  );
}
