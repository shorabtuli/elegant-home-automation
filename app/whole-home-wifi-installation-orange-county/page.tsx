import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const metaDescription =
  "Reliable whole-home WiFi installation in Orange County. Hive Style designs premium home networks that eliminate dead zones and support smart homes, streaming, security, and remote work.";

export const metadata: Metadata = {
  title: "Whole Home WiFi Installation Orange County | Hive Style Smart Homes",
  description: metaDescription,
  alternates: { canonical: "/whole-home-wifi-installation-orange-county" },
  openGraph: {
    title: "Whole Home WiFi Installation Orange County | Hive Style Smart Homes",
    description: metaDescription,
    url: "/whole-home-wifi-installation-orange-county",
    type: "website",
    images: [{ url: "/images/home-office - wo text.png", alt: "Whole home WiFi for Orange County homes" }]
  }
};

const trust = [
  "Orange County Networking Experts",
  "Reliable Whole-Home Coverage",
  "Designed for Modern Living",
  "Professional Installation & Support"
];

const painPoints = [
  ["Dead Zones", "Rooms with weak or no signal."],
  ["Slow Speeds", "Internet that feels inconsistent."],
  ["Video Call Issues", "Frozen Zoom and Teams meetings."],
  ["Streaming Problems", "Buffering TVs and media devices."],
  ["Smart Home Disconnects", "Devices randomly dropping offline."],
  ["Outdoor Coverage Gaps", "Poor WiFi near patios, pools, and outdoor living areas."]
];

const challenges = [
  ["Multi-Story Homes", "Signal loss between floors and hard-to-reach areas."],
  ["Larger Floorplans", "Standard routers cannot cover large layouts."],
  ["Outdoor Living Areas", "Patios, pools, guest houses, and outdoor spaces often need dedicated coverage."],
  ["Dense Device Usage", "Phones, tablets, streaming, security, automation, gaming, and more."],
  ["Older Construction", "Materials like stucco, stone, and metal can weaken signals."]
];

const solution = [
  ["Professional Site Evaluation", "Understanding your home's layout, needs, and challenges."],
  ["Coverage Planning", "Eliminating weak spots and optimizing performance."],
  ["Strategic Access Point Placement", "Strong, seamless coverage in every corner of your home."],
  ["High Performance Networking", "Designed around your lifestyle and the way you live."],
  ["Future Growth", "Scalable solutions that support more devices and more technology."],
  ["Ongoing Support", "We are here when you need us for updates, tuning, and support."]
];

const scenarios = [
  ["Irvine Family Home", "/images/Away Mode - wo text.png", ["Remote work", "School and learning", "Streaming and gaming", "Smart home devices"]],
  ["Newport Beach Waterfront Home", "/images/Entertaining - wo text.png", ["Outdoor entertainment", "Waterfront monitoring", "Guest networking", "Reliable whole-home coverage"]],
  ["Newport Coast Estate", "/images/Away Mode - wo text.png", ["Large property coverage", "Whole-home automation", "Security and surveillance", "Consistent performance"]],
  ["Laguna Beach Coastal Home", "/images/Entertaining - wo text.png", ["Indoor-outdoor connectivity", "Remote management", "Vacation home support", "Reliable streaming and calls"]]
];

const process = [
  ["Discover", "We learn how you live and use your internet throughout your home."],
  ["Assess", "We evaluate your current network and identify challenges and goals."],
  ["Design", "We create a custom network plan for reliable whole-home coverage."],
  ["Install", "Our team installs professionally with minimal disruption to your home."],
  ["Support", "We remain available for service, updates, and ongoing support."]
];

const benefits = [
  ["Thoughtful Design", "Solutions designed around your home, not a one-size-fits-all approach."],
  ["Reliable Coverage", "Strong, consistent WiFi in every room and outdoor space."],
  ["Premium Equipment", "Enterprise-grade systems for superior performance and reliability."],
  ["Clean Installations", "Professional installation that looks clean and respects your home."],
  ["Local Expertise", "We understand Orange County homes, layouts, and lifestyles."],
  ["Ongoing Support", "Long-term support and tuning for peace of mind."]
];

const projects = [
  ["Irvine Family Residence", "/images/Away Mode - wo text.png", "Whole-home coverage that supports remote work, streaming, gaming, and smart home automation."],
  ["Newport Beach Waterfront Home", "/images/Entertaining - wo text.png", "Seamless indoor-outdoor coverage and guest networks for effortless entertaining and peace of mind."],
  ["Newport Coast Estate", "/images/Away Mode - wo text.png", "High-performance WiFi across a large estate with full smart home integration and security."]
];

const faqs = [
  ["Why does my WiFi not reach certain rooms?", "WiFi can struggle because of home size, distance from the router, wall materials, multiple floors, outdoor spaces, and device congestion. A professionally designed network places coverage where your home actually needs it."],
  ["What is whole-home WiFi?", "Whole-home WiFi is a planned network designed to provide reliable coverage throughout the home, including bedrooms, offices, living spaces, outdoor areas, and connected devices."],
  ["Do I need mesh WiFi?", "Mesh systems can help some homes, but larger or more complex properties often need professionally placed access points, stronger networking equipment, and proper configuration."],
  ["How many access points do I need?", "It depends on the size, layout, construction materials, and coverage goals of your home. Hive Style evaluates your property and designs the right configuration."],
  ["Can WiFi cover outdoor spaces?", "Yes. Outdoor patios, pools, guest houses, and entertainment areas can be included in a whole-home network design."],
  ["Can better WiFi help my smart home?", "Yes. Smart lighting, cameras, audio, shades, locks, and automation all perform better when supported by a reliable network."],
  ["How much does whole-home WiFi installation cost?", "Cost depends on home size, coverage needs, equipment, wiring requirements, and installation complexity. A consultation is the best way to understand the right solution."]
];

export default function WholeHomeWifiInstallationOrangeCountyPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Whole Home WiFi Installation Orange County",
          description: metaDescription,
          provider: { "@type": "LocalBusiness", name: "Hive Style Smart Homes", areaServed: "Orange County, CA" },
          areaServed: "Orange County, CA",
          url: `${site.url}/whole-home-wifi-installation-orange-county`
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(([question, answer]) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer }
          }))
        }}
      />

      <section className="relative min-h-[660px] overflow-hidden bg-ink">
        <Image src="/images/Entertaining - wo text.png" alt="Luxury Orange County home with reliable whole-home WiFi" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/66 to-black/18" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/18" />
        <div className="container-pad relative flex min-h-[660px] items-center py-20">
          <div className="max-w-[700px] text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Whole Home WiFi Installation Orange County</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] sm:text-6xl">Whole Home WiFi That Works Everywhere</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              Reliable connectivity for Orange County homes. Eliminate dead zones, support every device, and enjoy fast, dependable performance throughout your home.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={site.consultationPath} className="button-primary">Schedule a WiFi Consultation</Link>
              <Link href="/smart-home-automation-orange-county" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Explore Smart Home Solutions</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="container-pad grid gap-3 py-5 text-sm font-semibold text-white/72 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((item) => (
            <div key={item} className="flex items-center gap-3"><IconDot />{item}</div>
          ))}
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-pad">
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">If Your WiFi Is Frustrating, You&apos;re Not Alone</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {painPoints.map(([title, copy]) => (
              <article key={title} className="rounded-lg border border-ink/10 bg-ivory p-5 text-center shadow-soft">
                <IconCircle />
                <h3 className="mt-4 text-sm font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/62">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="relative h-80 overflow-hidden rounded-lg shadow-soft">
            <Image src="/images/Away Mode - wo text.png" alt="Luxury home with whole-home WiFi coverage zones" fill sizes="(min-width: 1024px) 48vw, 92vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <div>
            <h2 className="text-4xl font-semibold leading-tight text-ink">A Network Designed for the Way You Live</h2>
            <p className="mt-5 text-base leading-8 text-ink/68">
              Whole-home WiFi is more than a router. It is a professionally designed network that delivers strong, reliable coverage throughout your entire property.
            </p>
            <ul className="mt-6 grid gap-3">
              {["Strategic access point placement", "Optimized coverage and performance", "Network management for reliability", "Support for today's devices and tomorrow's technology"].map((item) => (
                <li key={item} className="flex gap-3 text-sm font-semibold text-ink/72"><IconDot />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-pad">
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">Why Large Orange County Homes Often Struggle With WiFi</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {challenges.map(([title, copy]) => (
              <article key={title} className="rounded-lg border border-ink/10 bg-ivory p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/62">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad">
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">The Hive Style WiFi Solution</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {solution.map(([title, copy]) => (
              <article key={title} className="rounded-lg border border-ink/10 bg-white p-5 text-center">
                <IconCircle />
                <h3 className="mt-4 text-sm font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/62">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink text-white">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <h2 className="text-4xl font-semibold leading-tight">Every Great Smart Home Starts With Reliable WiFi</h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              Lighting, security, audio, shades, cameras, door locks, and climate control all rely on a strong, stable network. We build the foundation that makes your smart home experience seamless, responsive, and frustration-free.
            </p>
            <Link href="/smart-home-automation-orange-county" className="mt-6 inline-block text-sm font-semibold uppercase tracking-[0.12em] text-copper">Explore Smart Home Automation</Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {["Lighting", "Security", "Audio", "Shades", "Cameras", "Climate", "Locks"].map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/6 p-4 text-center text-sm font-semibold text-white/76">
                <IconCircle />
                <span className="mt-3 block">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-pad">
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">Whole Home WiFi Solutions for Orange County Homes</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {scenarios.map(([title, image, items]) => (
              <article key={title as string} className="overflow-hidden rounded-lg bg-ivory shadow-soft">
                <div className="relative h-44">
                  <Image src={image as string} alt={`${title} WiFi solution`} fill sizes="(min-width: 1024px) 24vw, 48vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-ink">{title}</h3>
                  <ul className="mt-4 grid gap-2">
                    {(items as string[]).map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-ink/66"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-copper" />{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad">
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">Our Networking Design Process</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {process.map(([title, copy], index) => (
              <article key={title} className="rounded-lg border border-ink/10 bg-white p-6 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-copper text-sm font-semibold text-white">{index + 1}</div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/62">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink text-white">
        <div className="container-pad">
          <h2 className="text-center text-4xl font-semibold leading-tight">Why Homeowners Choose Hive Style</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {benefits.map(([title, copy]) => (
              <article key={title} className="rounded-lg border border-white/10 bg-white/6 p-5 text-center">
                <IconCircle />
                <h3 className="mt-4 text-sm font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-pad">
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">Featured Whole Home WiFi Projects</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {projects.map(([title, image, copy]) => (
              <article key={title} className="overflow-hidden rounded-lg bg-ivory shadow-soft">
                <div className="relative h-52">
                  <Image src={image} alt={`${title} WiFi project`} fill sizes="(min-width: 1024px) 30vw, 92vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/62">{copy}</p>
                  <Link href="/projects" className="mt-5 inline-block text-sm font-semibold text-copper">View Project</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1fr]">
          <div>
            <h2 className="text-4xl font-semibold leading-tight text-ink">Frequently Asked Questions</h2>
            <div className="mt-8 grid gap-3">
              {faqs.map(([question, answer]) => (
                <details key={question} className="rounded-lg border border-ink/10 bg-white p-4">
                  <summary className="cursor-pointer text-sm font-semibold text-ink">{question}</summary>
                  <p className="mt-4 text-sm leading-7 text-ink/62">{answer}</p>
                </details>
              ))}
            </div>
            <Link href="/smart-home-automation-orange-county#faq" className="mt-5 inline-block text-sm font-semibold uppercase tracking-[0.12em] text-copper">View All FAQs</Link>
          </div>
          <div className="rounded-2xl bg-white p-7 shadow-soft">
            <h2 className="text-3xl font-semibold text-ink">Proudly Serving Orange County</h2>
            <p className="mt-4 text-base leading-8 text-ink/68">
              We design and install whole-home WiFi networks in Irvine, Newport Beach, Newport Coast, Laguna Beach, Costa Mesa, Dana Point, Mission Viejo, Tustin, Laguna Niguel, and surrounding Orange County communities.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink">
        <Image src="/images/Away Mode - wo text.png" alt="Whole home WiFi final consultation background" fill sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/72 to-black/28" />
        <div className="container-pad relative grid gap-8 py-16 text-white lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold leading-tight">Let&apos;s Fix Your WiFi Once and For All</h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              Whether you are dealing with dead zones, slow speeds, unreliable coverage, or preparing for smart home automation, Hive Style can design a network that performs beautifully throughout your home.
            </p>
            <Link href="/" className="mt-5 inline-block text-sm font-semibold text-copper">Return to Home</Link>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={site.consultationPath} className="button-primary">Schedule a WiFi Consultation</Link>
            <Link href="/smart-home-automation-orange-county" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Explore Smart Home Solutions</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function IconDot() {
  return <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-copper" />;
}

function IconCircle() {
  return (
    <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-copper/25 bg-white text-copper shadow-[0_10px_24px_rgba(17,17,17,0.08)]">
      ✦
    </span>
  );
}
