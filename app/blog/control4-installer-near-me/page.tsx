import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const pagePath = "/blog/control4-installer-near-me";

const metaDescription =
  "Looking for a Control4 installer near you? Elegant Home Automation designs, installs, programs, and supports Control4 smart home systems for lighting, shades, audio, security, climate, and entertainment across Orange County.";

const trustItems = [
  ["Smart Home Expertise", "Systems designed for reliability, simplicity, and everyday use.", "badge"],
  ["One App. One Experience.", "Control lighting, shades, audio, security, and more from one place.", "panel"],
  ["Luxury Home Focus", "Designed around architecture, lifestyle, and the way you live.", "home"],
  ["Orange County Service & Support", "Installation, programming, upgrades, and support when you need it.", "pin"]
];

const ecosystemItems = ["Lighting", "Shades", "Audio", "Video", "Security", "Climate", "Access", "Entertainment"];

const controlCards = [
  {
    title: "Control Everything",
    copy: "Manage your home from one app, touchscreen, keypad, remote, or wall control.",
    image: "/images/home-office - wo text.png",
    icon: "panel",
    alt: "Control4 touchscreen controlling a luxury smart home"
  },
  {
    title: "Create Smart Scenes",
    copy: "One button can set the perfect mood by activating multiple systems together.",
    image: "/images/Entertaining - wo text.png",
    icon: "nodes",
    alt: "Control4 smart home scenes for entertaining in Orange County home"
  },
  {
    title: "Enjoy Simplicity",
    copy: "Technology works quietly in the background so you can focus on what matters.",
    image: "/images/Away Mode - wo text.png",
    icon: "check",
    alt: "Luxury Orange County home with simple Control4 smart home automation"
  }
];

const controlItems = [
  ["Smart Lighting", "/smart-lighting-control-orange-county", "bulb"],
  ["Motorized Shades", "/motorized-shades-orange-county", "shade"],
  ["Whole Home Audio", "/home-audio-video-media-rooms", "speaker"],
  ["Home Theater", "/home-audio-video-media-rooms", "screen"],
  ["Security Systems", "/smart-security-cameras", "shield"],
  ["Cameras", "/smart-security-cameras", "camera"],
  ["Climate Control", "/smart-home-automation-orange-county", "climate"],
  ["Smart Door Locks", "/smart-security-cameras", "lock"],
  ["Video Doorbells", "/smart-security-cameras", "doorbell"],
  ["Outdoor Entertainment", "/home-audio-video-media-rooms", "outdoor"],
  ["Multi-Room Music", "/home-audio-video-media-rooms", "music"],
  ["Smart Home Scenes", "/smart-home-automation-orange-county", "scene"]
];

const supportChecklist = [
  "System upgrades and enhancements",
  "Programming and scene updates",
  "New device integration",
  "Troubleshooting and support",
  "Remote and on-site assistance"
];

const planningChecklist = [
  "Pre-wire planning and design",
  "Keypad and device placement",
  "Lighting, shades, and climate integration",
  "Network and infrastructure planning",
  "Coordination with builders, architects, and designers"
];

const cityLinks = [
  ["Irvine", "/blog/smart-home-installer-irvine"],
  ["Newport Beach", "/smart-home-automation-newport-beach"],
  ["Newport Coast", "/newport-coast-smart-home-automation"],
  ["Costa Mesa", "/costa-mesa-smart-home-automation"],
  ["Laguna Beach", "/laguna-beach-smart-home-automation"],
  ["Dana Point", "/blog-learning-center"]
];

const whyItems = [
  ["Design First", "Technology should elevate the beauty of your home.", "badge"],
  ["Complete Integration", "Every system working together, seamlessly.", "panel"],
  ["White-Glove Installation", "Attention to detail from start to finish.", "support"],
  ["Long-Term Support", "A trusted partner before, during, and long after installation.", "heart"]
];

const relatedSeoLinks = [
  ["Best Home Automation Company Orange County", "/blog/best-home-automation-company-orange-county"],
  ["Smart Lighting Installer", "/blog/smart-lighting-installer"],
  ["Smart Home Installer Irvine", "/blog/smart-home-installer-irvine"],
  ["Whole Home Audio Irvine", "/blog/whole-home-audio-irvine"],
  ["Motorized Shades Newport Beach", "/blog/motorized-shades-newport-beach"],
  ["Home Network Setup for Large Homes", "/blog/home-network-setup-for-large-homes"]
];

const serviceLinks = [
  ["Smart Lighting", "/smart-lighting-control-orange-county"],
  ["Motorized Shades", "/motorized-shades-orange-county"],
  ["Whole Home Audio", "/home-audio-video-media-rooms"],
  ["Home Theater", "/home-audio-video-media-rooms"],
  ["Security Systems", "/smart-security-cameras"],
  ["Home Networking", "/whole-home-wifi-installation-orange-county"]
];

const faqItems = [
  ["What does a Control4 installer do?", "A Control4 installer designs, installs, programs, and supports Control4 smart home systems. This can include lighting, shades, audio, video, security, cameras, climate, access control, networking, and smart home scenes."],
  ["Is Control4 worth it?", "Control4 can be worth it for homeowners who want one reliable system instead of many disconnected apps. It is especially useful for larger homes, remodels, custom residences, and whole-home automation projects."],
  ["Can Control4 control lighting and shades?", "Yes. Control4 can integrate lighting and motorized shades into scenes that adjust throughout the day for comfort, privacy, ambiance, and energy efficiency."],
  ["Can Control4 work with existing homes?", "Yes. Many existing homes can be upgraded with Control4. Some projects benefit from wiring and infrastructure improvements, while others can use retrofit-friendly approaches depending on the home."],
  ["Do you support existing Control4 systems?", "Yes. Elegant Home Automation can help with programming changes, upgrades, troubleshooting, new device integration, and ongoing support for existing Control4 systems."],
  ["Can I add devices later?", "Yes. Control4 systems can be designed to grow over time. Homeowners can start with lighting, audio, or security and add additional rooms or systems later."],
  ["What areas do you serve?", "We serve Orange County communities including Irvine, Newport Beach, Newport Coast, Laguna Beach, Costa Mesa, Dana Point, Laguna Niguel, Mission Viejo, Tustin, Anaheim Hills, and nearby areas."],
  ["How much does a Control4 system cost?", "Cost depends on the size of the home, the number of systems being controlled, wiring needs, equipment selection, programming, and support requirements. A focused project may be smaller in scope, while a complete whole-home system requires more planning and integration."]
];

export const metadata: Metadata = {
  title: { absolute: "Control4 Installer Near Me | Elegant Home Automation" },
  description: metaDescription,
  alternates: { canonical: pagePath },
  keywords: [
    "Control4 installer near me",
    "Control4 installer Orange County",
    "Control4 dealer near me",
    "Control4 installation",
    "Control4 programmer",
    "Control4 support",
    "Control4 smart home installer",
    "Control4 Orange County",
    "Control4 smart home system",
    "Control4 home automation"
  ],
  openGraph: {
    title: "Control4 Installer Near Me | Elegant Home Automation",
    description: metaDescription,
    url: pagePath,
    type: "article",
    images: [{ url: "/images/Entertaining - wo text.png", alt: "Luxury Orange County home with Control4 smart home automation" }]
  }
};

export default function Control4InstallerNearMePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Control4 Installer Near Me",
          description: metaDescription,
          provider: {
            "@type": "LocalBusiness",
            "@id": `${site.url}#business`,
            name: site.name,
            areaServed: "Orange County, CA"
          },
          areaServed: "Orange County, CA",
          serviceType: "Control4 smart home design, installation, programming, and support",
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
        <Image src="/images/Entertaining - wo text.png" alt="Luxury Orange County home with Control4 smart home automation" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/58 to-black/14" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-transparent to-black/20" />
        <div className="container-pad relative flex min-h-[680px] items-center py-20">
          <div className="max-w-2xl">
            <nav className="mb-8 text-sm font-semibold text-white/72" aria-label="Breadcrumb">
              <Link href="/" className="transition hover:text-copper">Home</Link>
              <span className="px-2 text-white/35">/</span>
              <Link href="/blog-learning-center" className="transition hover:text-copper">Blog</Link>
              <span className="px-2 text-white/35">/</span>
              <span>Control4 Installer Near Me</span>
            </nav>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Control4 Installer Near Me</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] sm:text-6xl">Looking For A Control4 Installer Near You?</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              Elegant Home Automation designs, installs, programs, and supports Control4 smart home systems that bring lighting, shades, audio, security, climate, and entertainment together into one seamless experience.
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">What Is Control4?</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink">The Smart Home That Brings Everything Together</h2>
            <p className="mt-6 text-base leading-8 text-ink/68">
              Control4 is a smart home operating system that connects the technology throughout your home so everything works together in one simple experience. Instead of managing separate apps for lighting, shades, music, entertainment, security, cameras, climate, and access, Control4 brings those systems into a unified interface.
            </p>
            <p className="mt-5 text-base leading-8 text-ink/68">
              For Orange County homeowners, Control4 is especially valuable in larger homes, remodels, custom residences, and properties where design, reliability, and everyday usability matter.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {["Lighting", "Shades", "Audio & Entertainment", "Security & Cameras", "Climate", "Access", "More"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-ink/70">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-copper/40 text-xs text-copper">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <EcosystemDiagram />
        </div>
      </section>

      <section className="section bg-[#101110] text-white">
        <div className="container-pad">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">One Home. One Control Experience.</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight">Simple Control For The Entire Home</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {controlCards.map((card) => (
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
        <div className="container-pad">
          <div className="grid gap-10 lg:grid-cols-[0.76fr_1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">What Can Control4 Control?</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink">A Smarter Home, Fully Connected</h2>
            </div>
            <div className="grid gap-px overflow-hidden rounded-lg border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
              {controlItems.map(([title, href, icon]) => (
                <Link key={title} href={href} className="group bg-white p-5 transition hover:bg-[#f9f4ec]">
                  <Icon kind={icon} className="h-9 w-9 text-copper" />
                  <h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f2ea] py-14 sm:py-16">
        <div className="container-pad grid overflow-hidden rounded-lg bg-white shadow-soft lg:grid-cols-[1fr_0.9fr]">
          <div className="p-7 sm:p-10 lg:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Already Have Control4?</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink">We&apos;re Here To Support Your Existing System</h2>
            <p className="mt-6 text-base leading-8 text-ink/68">
              Whether you need programming changes, system upgrades, new device integration, or general support, our team can help keep your Control4 system running at its best.
            </p>
            <div className="mt-7 grid gap-3">
              {supportChecklist.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-ink/70">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-copper/40 text-xs text-copper">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-80">
            <Image src="/images/home-office - wo text.png" alt="Control4 system support and programming for an existing smart home" fill sizes="(min-width: 1024px) 44vw, 92vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="section bg-[#101110] text-white">
        <div className="container-pad grid gap-12 lg:grid-cols-[0.9fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Control4 Systems For Orange County Homes</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight">Local Expertise For Beautiful Connected Homes</h2>
            <p className="mt-6 text-base leading-8 text-white/68">
              Elegant Home Automation designs, installs, programs, and supports Control4 systems throughout Orange County, including Irvine, Newport Beach, Newport Coast, Laguna Beach, Costa Mesa, Dana Point, Laguna Niguel, Mission Viejo, Tustin, and Anaheim Hills.
            </p>
            <p className="mt-5 text-base leading-8 text-white/68">
              Many Orange County homes include outdoor living spaces, home theaters, whole-home audio, lighting control, large floorplans, and security systems. Control4 helps these systems work together as one seamless experience.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {cityLinks.map(([city, href]) => (
                <Link key={city} href={href} className="text-sm font-semibold text-white/72 transition hover:text-copper">
                  {city}
                </Link>
              ))}
            </div>
          </div>
          <div className="relative min-h-[380px] overflow-hidden rounded-lg border border-white/10 bg-black/30 p-7">
            <div className="absolute inset-0 opacity-20 geo-pattern" />
            <div className="relative grid h-full min-h-[320px] place-items-center rounded-lg border border-copper/20">
              <p className="max-w-xs text-center text-sm font-semibold leading-7 text-white/68">Orange County Control4 installation and support service area map</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0d0e0d] py-14 text-white sm:py-16">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">New Construction & Remodel Solutions</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight">Build Smart From The Beginning</h2>
            <p className="mt-6 text-base leading-8 text-white/68">
              Control4 works best when the system is planned early. We collaborate with homeowners, builders, architects, and interior designers to coordinate lighting, shades, audio, security, networking, device placement, and future expansion.
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
            <Image src="/images/home-office - wo text.png" alt="Control4 smart home planning for new construction and remodel" fill sizes="(min-width: 1024px) 48vw, 92vw" className="object-cover" />
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
        <Image src="/images/movie night - wo text.png" alt="Luxury connected home interior with Control4 lighting shades audio and automation" fill sizes="100vw" className="object-cover opacity-68" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/22" />
        <div className="container-pad relative grid min-h-[430px] items-center py-16 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">Experience The Power Of A Truly Connected Home</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/76">
              Whether you are building a new home, upgrading an existing system, or looking for ongoing Control4 support, Elegant Home Automation can help create a smart home experience that feels elegant, intuitive, and effortless.
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
              <h2 className="mt-5 text-4xl font-semibold leading-tight">Control4 Questions</h2>
              <div className="mt-8 grid gap-2 text-sm font-semibold">
                <Link href="/" className="text-white/72 transition hover:text-copper">Home</Link>
                <Link href="/smart-home-automation-orange-county" className="text-white/72 transition hover:text-copper">Smart Home Automation Services</Link>
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

function EcosystemDiagram() {
  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-lg border border-ink/10 bg-white p-6 shadow-soft" aria-label="Control4 smart home system connecting lighting shades audio security climate and entertainment">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(209,126,36,0.16),transparent_40%)]" />
      <div className="relative grid min-h-[370px] place-items-center">
        <div className="flex h-32 w-32 items-center justify-center rounded-full border border-copper/40 bg-[#101110] text-xl font-semibold text-white shadow-soft">
          Control4
        </div>
        <div className="absolute inset-0 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {ecosystemItems.map((item, index) => (
            <div key={item} className="flex items-center justify-center">
              <div className="rounded-full border border-copper/30 bg-white px-4 py-2 text-xs font-semibold text-ink/68 shadow-sm">
                {item}
              </div>
              <span className="sr-only">{index}</span>
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
    panel: <rect x="5" y="4" width="14" height="16" rx="2" {...common} />,
    badge: <path d="M12 3 20 7v6c0 4-3 7-8 8-5-1-8-4-8-8V7l8-4Z" {...common} />,
    home: <path d="M4 11 12 4l8 7M6 10.5V20h12v-9.5" {...common} />,
    pin: (
      <>
        <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" {...common} />
        <circle cx="12" cy="10" r="2.4" {...common} />
      </>
    ),
    nodes: (
      <>
        <circle cx="6" cy="12" r="3" {...common} />
        <circle cx="18" cy="6" r="3" {...common} />
        <circle cx="18" cy="18" r="3" {...common} />
        <path d="M9 10.5 15 7.5M9 13.5l6 3" {...common} />
      </>
    ),
    check: <path d="M4 12.5 9 17l11-11" {...common} />,
    bulb: <path d="M9 18h6M10 22h4M8 14a6 6 0 1 1 8 0c-.8.7-1.2 1.5-1.4 2H9.4c-.2-.5-.6-1.3-1.4-2Z" {...common} />,
    shade: <path d="M5 4h14v16H5V4ZM5 8h14M5 12h14M5 16h14" {...common} />,
    speaker: <path d="M6 9h4l5-4v14l-5-4H6V9ZM18 9.5a4 4 0 0 1 0 5" {...common} />,
    screen: <path d="M4 5h16v11H4V5ZM10 20h4M12 16v4" {...common} />,
    shield: <path d="M12 3 20 6v6c0 5-3.4 8.2-8 9-4.6-.8-8-4-8-9V6l8-3Z" {...common} />,
    camera: <path d="M5 7h4l1.5-2h3L15 7h4v11H5V7ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" {...common} />,
    climate: <path d="M12 3v10M8 7l4-4 4 4M8 17l4 4 4-4" {...common} />,
    lock: <path d="M7 11V8a5 5 0 0 1 10 0v3M6 11h12v10H6V11Z" {...common} />,
    doorbell: <path d="M8 3h8v18H8V3ZM12 15h.01M10 7h4" {...common} />,
    outdoor: <path d="M4 18c2-4 5-6 8-6s6 2 8 6M8 13c0-3 1.3-5 4-7 2.7 2 4 4 4 7" {...common} />,
    music: <path d="M15 6v11.5a3 3 0 1 1-1.5-2.6V8l7-2v9.5a3 3 0 1 1-1.5-2.6V4.5L15 6Z" {...common} />,
    scene: <path d="M4 17c2-4 5-6 8-6s6 2 8 6M8 13c0-3 1.3-5 4-7 2.7 2 4 4 4 7" {...common} />,
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
