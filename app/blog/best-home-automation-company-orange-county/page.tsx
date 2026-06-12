import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const metaDescription =
  "Looking for the best home automation company in Orange County? Hive Style Smart Homes designs and installs premium smart lighting, shades, audio, security, networking, and whole-home automation systems.";

const trustItems = [
  ["Design Before Devices", "Technology should complement the home, not compete with it."],
  ["Systems That Work Together", "Lighting, shades, audio, networking, and security integrated into a unified experience."],
  ["Tailored To Your Lifestyle", "Every home and family uses technology differently. We design around you."],
  ["Orange County Expertise", "Proudly serving luxury homes throughout Orange County."]
];

const checklist = [
  "Thoughtful design and planning",
  "Best-in-class products",
  "Clean, professional installation",
  "Simple, intuitive control",
  "Ongoing support you can count on"
];

const comparison = [
  ["Design Planning", "We start with your goals, architecture, and lifestyle."],
  ["Builder Collaboration", "We work seamlessly with builders, architects, and designers."],
  ["Lighting Expertise", "Lighting design is at the heart of every exceptional smart home."],
  ["Network Design", "We build rock-solid networks for speed, coverage, and reliability."],
  ["Long-Term Support", "We are here long after installation with responsive, white-glove support."],
  ["Whole Home Integration", "Systems work together beautifully, not in silos."],
  ["Aesthetics", "Clean installation and hidden technology preserve the beauty of your home."],
  ["Future Scalability", "Built on platforms that grow with your needs."]
];

const lifestyleCards = [
  ["Entertain", "/images/Entertaining - wo text.png", "Whole-home audio, outdoor living, and immersive experiences for every gathering."],
  ["Relax", "/images/morning-routine - wo text.png", "Lighting scenes, automated shades, and perfect comfort at the touch of a button."],
  ["Protect", "/images/Away Mode - wo text.png", "Smart security, access control, and real-time awareness for peace of mind."]
];

const cityLinks = [
  ["Irvine", "/blog/smart-home-installer-irvine"],
  ["Newport Beach", "/smart-home-automation-newport-beach"],
  ["Newport Coast", "/newport-coast-smart-home-automation"],
  ["Costa Mesa", "/costa-mesa-smart-home-automation"],
  ["Laguna Beach", "/laguna-beach-smart-home-automation"],
  ["Dana Point", "/blog-learning-center"],
  ["Laguna Niguel", "/blog-learning-center"],
  ["Mission Viejo", "/blog-learning-center"],
  ["Tustin", "/tustin-smart-home-automation"],
  ["Anaheim Hills", "/blog-learning-center"]
];

const planningItems = [
  "Pre-Wire Planning",
  "Lighting Design",
  "Equipment Placement",
  "Structured Wiring",
  "Architectural Coordination"
];

const whyItems = [
  ["Design-Conscious Approach", "Technology is integrated beautifully and intentionally."],
  ["Simplicity", "Intuitive control and effortless experiences for everyday living."],
  ["Reliability", "Enterprise-grade systems built for long-term performance."],
  ["White-Glove Experience", "Personalized service, attention to detail, and ongoing care."]
];

const faqItems = [
  ["How do I choose the best home automation company in Orange County?", "Look for a company that combines design planning, technical expertise, clean installation, reliable networking, and long-term support. The best partner should understand how technology fits into the architecture and lifestyle of your home, not just install devices."],
  ["What should I look for in a smart home installer?", "Look for thoughtful planning, experience with lighting, shades, audio, security, networking, and integrated control systems. A strong installer should also explain tradeoffs clearly and design a system that is easy to use every day."],
  ["How much does a professionally designed smart home cost?", "Cost depends on the size of your home, the systems included, wiring needs, equipment selection, and the level of integration. A focused lighting or shade project may be smaller in scope, while a complete whole-home system requires deeper planning and coordination."],
  ["What systems should be integrated together?", "The most common systems include lighting, motorized shades, whole-home audio, home theater, security, access control, climate, networking, and centralized control. The right combination depends on your lifestyle and how you want to use the home."],
  ["Can you automate an existing home?", "Yes. Many Orange County homeowners upgrade existing homes with smart lighting, shades, audio, networking, and security. Some homes benefit from wiring improvements, while others can be upgraded through a thoughtful retrofit approach."],
  ["Do you work with architects and builders?", "Yes. We collaborate with builders, architects, interior designers, and homeowners to plan smart home infrastructure early and preserve the design intent of the home."],
  ["What cities do you serve?", "We serve homeowners throughout Orange County, including Irvine, Newport Beach, Newport Coast, Costa Mesa, Laguna Beach, Laguna Niguel, Dana Point, Mission Viejo, Tustin, and Anaheim Hills."],
  ["What brands and platforms do you support?", "We recommend systems based on the needs of each home. Common categories include lighting control, motorized shades, audio, video, networking, security, and integrated control platforms."]
];

export const metadata: Metadata = {
  title: { absolute: "Best Home Automation Company Orange County | Hive Style Smart Homes" },
  description: metaDescription,
  alternates: { canonical: "/blog/best-home-automation-company-orange-county" },
  keywords: [
    "best home automation company Orange County",
    "home automation company Orange County",
    "smart home company Orange County",
    "smart home installer Orange County",
    "luxury home automation Orange County",
    "Control4 installer Orange County",
    "Lutron installer Orange County",
    "smart home installation Orange County",
    "home automation services Orange County"
  ],
  openGraph: {
    title: "Best Home Automation Company Orange County | Hive Style Smart Homes",
    description: metaDescription,
    url: "/blog/best-home-automation-company-orange-county",
    type: "article",
    images: [{ url: "/images/Away Mode - wo text.png", alt: "Luxury Orange County home automation exterior at dusk" }]
  }
};

export default function BestHomeAutomationCompanyOrangeCountyPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Best Home Automation Company Orange County",
          description: metaDescription,
          provider: {
            "@type": "LocalBusiness",
            "@id": `${site.url}#business`,
            name: "Hive Style Smart Homes",
            areaServed: "Orange County, CA"
          },
          areaServed: "Orange County, CA",
          url: `${site.url}/blog/best-home-automation-company-orange-county`
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
        <Image src="/images/Away Mode - wo text.png" alt="Luxury Orange County home exterior with smart lighting at dusk" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/62 to-black/12" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/24" />
        <div className="container-pad relative flex min-h-[660px] items-center py-20">
          <div className="max-w-2xl">
            <nav className="mb-8 text-sm font-semibold text-white/72" aria-label="Breadcrumb">
              <Link href="/" className="transition hover:text-copper">Home</Link>
              <span className="px-2 text-white/35">/</span>
              <Link href="/blog-learning-center" className="transition hover:text-copper">Blog</Link>
              <span className="px-2 text-white/35">/</span>
              <span>Best Home Automation Company Orange County</span>
            </nav>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">The Best Choice for Smart Homes</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] sm:text-6xl">The Smart Home Experience Orange County Homeowners Deserve</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              Hive Style Smart Homes designs and installs thoughtfully integrated smart home systems that blend technology, architecture, and lifestyle into one seamless experience.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={site.consultationPath} className="button-primary">Schedule a Consultation</Link>
              <Link href="/smart-home-automation-orange-county" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Explore Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-ink text-white">
        <div className="container-pad grid gap-0 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map(([title, copy], index) => (
            <article key={title} className="border-white/10 px-6 py-6 text-center lg:border-r lg:last:border-r-0">
              <Icon kind={String(index)} className="mx-auto h-10 w-10 text-copper" />
              <h2 className="mt-5 text-lg font-semibold">{title}</h2>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-white/62">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-[#151615] text-white">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">What Makes a Great Home Automation Company?</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight">More Than Products. It&apos;s About Possibilities.</h2>
            <p className="mt-6 text-base leading-8 text-white/70">
              The best smart home companies do more than install devices. They understand architecture, lifestyle, and long-term performance. At Hive Style, we combine design expertise, reliable systems, and attentive support to create homes that are intuitive, beautiful, and built to last.
            </p>
            <div className="mt-7 grid gap-3">
              {checklist.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-white/78">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-copper/40 text-xs text-copper">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-copper/35">
            <div className="grid grid-cols-[0.8fr_1.2fr] border-b border-copper/35 bg-copper/10 text-sm font-semibold uppercase tracking-[0.12em] text-copper">
              <div className="border-r border-copper/35 p-4">What To Look For</div>
              <div className="p-4">The Hive Style Difference</div>
            </div>
            {comparison.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[0.8fr_1.2fr] border-b border-white/10 last:border-b-0">
                <div className="border-r border-white/10 p-4 text-sm font-semibold text-white/88">{label}</div>
                <div className="p-4 text-sm leading-6 text-white/68">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink text-white">
        <div className="container-pad">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Technology Designed Around the Way You Live</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {lifestyleCards.map(([title, image, copy], index) => (
              <article key={title} className="relative min-h-80 overflow-hidden rounded-lg bg-black shadow-soft">
                <Image src={image} alt={`${title} smart home experience in Orange County`} fill sizes="(min-width: 1024px) 30vw, 92vw" className="object-cover opacity-76" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/18 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <Icon kind={String(index)} className="h-10 w-10 text-copper" />
                  <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/74">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#171a18] text-white">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.8fr_1fr_0.82fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Serving Homeowners Throughout Orange County</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight">Local Expertise. Beautiful Homes.</h2>
            <p className="mt-6 text-base leading-8 text-white/70">
              From coastal estates to hillside retreats and everything in between, we understand the unique homes and lifestyles across Orange County.
            </p>
          </div>
          <div className="relative min-h-80 overflow-hidden rounded-lg border border-white/10 bg-black/30 p-7">
            <div className="absolute inset-0 opacity-20 geo-pattern" />
            <div className="relative grid h-full min-h-64 grid-cols-2 gap-3 text-sm font-semibold text-white/72">
              {["Irvine", "Newport Beach", "Newport Coast", "Costa Mesa", "Laguna Beach", "Laguna Niguel", "Dana Point", "Mission Viejo", "Tustin", "Anaheim Hills"].map((city) => (
                <div key={city} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                  {city}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-base leading-8 text-white/70">We proudly design and install smart home systems in communities including:</p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {cityLinks.map(([city, href]) => (
                <Link key={city} href={href} className="text-sm font-semibold text-white/72 transition hover:text-copper">› {city}</Link>
              ))}
            </div>
            <Link href="/blog-learning-center" className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-copper px-6 py-3 text-sm font-semibold text-white transition hover:bg-copper/90">
              View All Service Areas
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-12 sm:py-16">
        <div className="container-pad grid overflow-hidden rounded-lg bg-white shadow-soft lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-80">
            <Image src="/images/home-office - wo text.png" alt="Smart home blueprint planning for Orange County construction and renovation" fill sizes="(min-width: 1024px) 48vw, 92vw" className="object-cover" />
          </div>
          <div className="p-7 sm:p-10 lg:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">New Construction & Renovations</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink">Plan Smart. Build Beautiful.</h2>
            <p className="mt-6 text-base leading-8 text-ink/68">
              The best smart homes are planned before the walls go up. We collaborate with homeowners, builders, architects, and designers to ensure technology enhances the design from day one.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-5">
              {planningItems.map((item, index) => (
                <div key={item} className="text-center">
                  <Icon kind={String(index)} className="mx-auto h-8 w-8 text-copper" />
                  <p className="mt-3 text-xs font-semibold leading-5 text-ink/70">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white">
        <div className="container-pad py-10">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-copper">Why Homeowners Choose Hive Style Smart Homes</p>
          <div className="mt-8 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {whyItems.map(([title, copy], index) => (
              <article key={title} className="border-ink/10 px-6 py-6 text-center lg:border-r lg:last:border-r-0">
                <Icon kind={String(index)} className="mx-auto h-10 w-10 text-copper" />
                <h2 className="mt-5 text-lg font-semibold text-ink">{title}</h2>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-ink/62">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-copper">Frequently Asked Questions</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {faqItems.map(([question, answer]) => (
              <details key={question} className="rounded-lg border border-ink/10 bg-white p-4">
                <summary className="cursor-pointer text-sm font-semibold text-ink">{question}</summary>
                <p className="mt-4 text-sm leading-7 text-ink/64">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink">
        <Image src="/images/morning-routine - wo text.png" alt="Warm luxury connected home interior in Orange County" fill sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/72 to-black/28" />
        <div className="container-pad relative grid gap-8 py-16 text-white lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold leading-tight">Let&apos;s Design A Smarter Home</h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              Whether you are building a custom residence, renovating an existing property, or upgrading individual systems, Hive Style Smart Homes can help create a connected home experience that feels effortless, elegant, and built around the way you live.
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
    return <svg {...common} aria-hidden="true"><path d="M5 12h14" /><path d="M7 7h10v10H7z" /><path d="M10 20h4" /></svg>;
  }

  if (icon === 2) {
    return <svg {...common} aria-hidden="true"><path d="M4 17c2.5-4.5 6-7 10.5-7H20" /><path d="M14 6h6v6" /><path d="M4 21h16" /></svg>;
  }

  if (icon === 3) {
    return <svg {...common} aria-hidden="true"><path d="M12 21s7-4.4 7-11V5l-7-3-7 3v5c0 6.6 7 11 7 11Z" /><path d="m9.5 12 1.8 1.8 3.7-4" /></svg>;
  }

  if (icon === 4) {
    return <svg {...common} aria-hidden="true"><path d="M4.5 10.5a11 11 0 0 1 15 0" /><path d="M7.5 13.5a6.5 6.5 0 0 1 9 0" /><path d="M10.5 16.5a2.4 2.4 0 0 1 3 0" /></svg>;
  }

  if (icon === 5) {
    return <svg {...common} aria-hidden="true"><path d="M12 4v5" /><path d="M6 20v-4a6 6 0 0 1 12 0v4" /><path d="M4 20h16" /><path d="M8 9h8" /></svg>;
  }

  return <svg {...common} aria-hidden="true"><path d="M4 14h4l7-7v4h5" /><path d="M4 18h7" /><path d="M15 15h5" /><path d="M4 10h2" /></svg>;
}
