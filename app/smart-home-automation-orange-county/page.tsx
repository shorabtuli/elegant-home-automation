import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const metaDescription =
  "Design-conscious smart home automation in Orange County. Hive Style creates elegant lighting, shades, audio, security, networking, and whole-home control systems for modern living.";

export const metadata: Metadata = {
  title: "Smart Home Automation Orange County | Hive Style Smart Homes",
  description: metaDescription,
  alternates: { canonical: "/smart-home-automation-orange-county" },
  openGraph: {
    title: "Smart Home Automation Orange County | Hive Style Smart Homes",
    description:
      "Design-conscious smart home automation in Orange County for lighting, shades, audio, security, networking, and whole-home control.",
    url: "/smart-home-automation-orange-county",
    type: "website",
    images: [{ url: "/images/Away Mode - wo text.png", alt: "Luxury Orange County smart home exterior" }]
  }
};

const systems = [
  ["Lighting", "Scenes that set the mood without thinking about switches."],
  ["Shades", "Privacy, glare, and sunlight managed throughout the day."],
  ["Audio", "Music that follows the way you use the home."],
  ["Video", "Movie nights, sports, and media spaces made simple."],
  ["Security", "Useful visibility, access, and alerts without excess noise."],
  ["Climate", "Comfort settings that support everyday routines."],
  ["Networking", "Reliable Wi-Fi for smart systems, work, and streaming."]
];

const scenarios = [
  {
    title: "Morning Routine",
    image: "/images/morning-routine - wo text.png",
    copy: "Shades rise. Lights gently brighten. Your home eases into the day with you."
  },
  {
    title: "Leaving Home",
    image: "/images/Away Mode - wo text.png",
    copy: "One tap sets everything. Doors lock, lights turn off, security arms, and your home feels protected."
  },
  {
    title: "Entertaining",
    image: "/images/Entertaining - wo text.png",
    copy: "Music follows your guests. Outdoor spaces come alive. Lighting sets the perfect atmosphere."
  },
  {
    title: "Vacation Mode",
    image: "/images/Away Mode - wo text.png",
    copy: "Monitor your home from anywhere. Get alerts, control lights, temperature, and more while you're away."
  }
];

const serviceCards = [
  ["Smart Lighting", "/smart-lighting-control-orange-county", "Create scenes for mornings, evenings, entertaining, and everyday comfort."],
  ["Motorized Shades", "/motorized-shades-orange-county", "Manage privacy, daylight, glare, and heat with shades that feel effortless."],
  ["Whole Home Audio", "/whole-home-audio-orange-county", "Enjoy music throughout the home with simple, elegant control."],
  ["Home Theater", "/home-theater-installation-orange-county", "Design immersive media spaces that are easy to use and beautifully integrated."],
  ["Security & Surveillance", "/security-camera-installation-orange-county", "Plan cameras, alerts, and access control around real visibility and peace of mind."],
  ["Networking & WiFi", "/whole-home-wifi-installation-orange-county", "Build the reliable foundation every modern smart home depends on."]
];

const localCards = [
  ["Coastal Properties", "Newport Beach, Corona del Mar, Laguna Beach & Dana Point", "Smart home systems designed for coastal living, outdoor entertaining, motorized shading, vacation monitoring, and reliable connectivity."],
  ["Family Homes", "Irvine, Tustin, Mission Viejo & surrounding communities", "Convenient control, reliable whole-home WiFi, smart lighting, family-friendly security, and systems that make daily life easier."],
  ["Luxury Residences", "Newport Coast, Shady Canyon, Coto de Caza & more", "Whole-home integration, architectural lighting, hidden technology, premium entertainment, and refined control experiences."]
];

const process = [
  ["Discover", "We learn how you live, what matters most, and what you want your home to achieve."],
  ["Design", "We create a personalized smart home plan tailored to your home, lifestyle, and budget."],
  ["Install", "Our expert team installs every detail with precision, care, and respect for your home."],
  ["Support", "We are here long after installation with ongoing support and service."]
];

const benefits = [
  "Design-First Approach",
  "Thoughtful Recommendations",
  "Local Orange County Experts",
  "Impeccable Installations",
  "Responsive Support",
  "Technology That Feels Intuitive"
];

const projects = [
  ["Newport Beach Coastal Contemporary", "Whole-home automation, motorized shades, outdoor audio, and lighting.", "/images/Entertaining - wo text.png"],
  ["Irvine Modern Estate", "Integrated lighting, whole-home audio, security, and WiFi.", "/images/morning-routine - wo text.png"],
  ["Corona del Mar Beachfront Retreat", "Smart shades, climate control, lighting, and surveillance.", "/images/Away Mode - wo text.png"],
  ["Laguna Niguel Family Residence", "Whole-home audio, smart lighting, theater, and security.", "/images/movie night - wo text.png"]
];

const faqs = [
  ["How much does smart home automation cost?", "Cost depends on the size of the home, the number of systems being integrated, and the level of customization. A focused project may include lighting or shades in a few rooms, while a full whole-home system can include lighting, audio, video, security, networking, climate, and control. The best next step is a consultation so we can understand your home and recommend the right scope."],
  ["Can I automate my existing home?", "Yes. Many Orange County homeowners upgrade existing homes using a mix of wired, wireless, and hybrid smart home solutions. We design around your home's structure, your lifestyle, and the level of disruption you are comfortable with."],
  ["Which smart home system is best?", "The best system depends on your home, your goals, and how you want to use the technology. Hive Style helps you choose the right combination of platforms and products so your home feels intuitive instead of complicated."],
  ["How long does installation take?", "Smaller projects may take a few days, while larger whole-home systems can take several weeks depending on complexity, construction timing, and coordination with other trades."],
  ["Can I start small and expand later?", "Yes. Many homeowners begin with lighting, shades, WiFi, audio, or security and expand over time. We can design your system so future upgrades are easier."],
  ["What happens if my internet goes down?", "A well-designed smart home should still preserve key local functions where possible. We prioritize reliable networking, thoughtful system design, and practical backup considerations so your home remains as dependable as possible."]
];

const cities = [
  ["Irvine", "/smart-home-automation-irvine"],
  ["Newport Beach", "/smart-home-automation-newport-beach"],
  ["Newport Coast", "/smart-home-automation-newport-coast"],
  ["Costa Mesa", "/smart-home-automation-costa-mesa"],
  ["Laguna Beach", "/smart-home-automation-laguna-beach"],
  ["Dana Point", "/smart-home-automation-dana-point"],
  ["Mission Viejo", "/smart-home-automation-mission-viejo"],
  ["Tustin", "/smart-home-automation-tustin"],
  ["Laguna Niguel", "/smart-home-automation-laguna-niguel"]
];

export default function SmartHomeAutomationOrangeCountyPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Smart Home Automation Orange County",
          description: metaDescription,
          provider: {
            "@type": "LocalBusiness",
            name: "Hive Style Smart Homes",
            areaServed: "Orange County, CA"
          },
          areaServed: "Orange County, CA",
          url: `${site.url}/smart-home-automation-orange-county`
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

      <section className="relative min-h-[720px] overflow-hidden bg-ink">
        <Image src="/images/Away Mode - wo text.png" alt="Luxury Orange County smart home exterior" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/62 to-black/12" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        <div className="container-pad relative flex min-h-[720px] items-center py-20">
          <div className="max-w-3xl text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Smart Home Automation in Orange County</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              Technology That Disappears.
              <br />
              Life That Elevates.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
              Smart home automation designed for Orange County living, bringing effortless control, total comfort, and peace of mind into one beautifully simple experience.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={site.consultationPath} className="button-primary">Schedule a Consultation</Link>
              <Link href="/projects" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">View Recent Projects</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white">
        <div className="container-pad grid gap-3 py-5 text-sm font-semibold text-ink/68 sm:grid-cols-2 lg:grid-cols-4">
          {["Local Orange County Experts", "Luxury Experience, Thoughtful Design", "5-Star Customer Reviews", "Ongoing Support You Can Count On"].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-copper" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad">
          <SectionIntro eyebrow="Smart home, simplified" title="What Smart Home Automation Really Means">
            It&apos;s not about more gadgets. It&apos;s about integrating the essential systems in your home so they work together beautifully, intuitively, reliably, and simply. Planning a system also means understanding
            {" "}
            <Link href="/smart-home-automation-cost-orange-county" className="font-semibold text-copper">smart home automation cost in Orange County</Link>
            {" "}
            and how the right design choices affect comfort, performance, and long-term support.
          </SectionIntro>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
            {systems.map(([title, copy]) => (
              <article key={title} className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
                <IconMark />
                <h3 className="mt-4 font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/60">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-pad">
          <SectionIntro title="How Homeowners Actually Use It" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {scenarios.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-lg bg-ivory shadow-soft">
                <div className="relative h-56">
                  <Image src={item.image} alt={`${item.title} smart home scene`} fill sizes="(min-width: 1024px) 24vw, 48vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <IconMark />
                  <h3 className="mt-4 text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/62">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad">
          <SectionIntro title="Smart Home Systems We Design" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map(([title, href, copy]) => (
              <article key={title} className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft">
                <IconMark />
                <h3 className="mt-5 text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/62">{copy}</p>
                <Link href={href} className="mt-5 inline-block text-sm font-semibold text-copper">Learn More</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-pad grid gap-5 lg:grid-cols-2">
          <BuildPanel title="New Construction" copy="Plan your technology the right way from the start. We help Orange County homeowners, builders, and designers think through lighting, networking, audio, security, shades, and control before walls are closed." bullets={["Infrastructure planned before drywall", "Future-ready wiring and networking", "Cleaner installations and better performance", "Fewer costly changes later"]} />
          <BuildPanel title="Existing Homes" copy="You do not need new construction to make your home smarter. We design retrofit solutions that bring modern control and comfort into existing Orange County homes with minimal disruption." bullets={["Wireless and hybrid solutions", "Minimal disruption, maximum impact", "Upgrade over time, at your pace", "Designed to blend beautifully into your home"]} />
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad">
          <SectionIntro title="Designed for Orange County Living" />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {localCards.map(([title, area, copy]) => (
              <article key={title} className="rounded-lg bg-white p-7 shadow-soft">
                <p className="text-sm font-semibold text-copper">{area}</p>
                <h3 className="mt-4 text-2xl font-semibold text-ink">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink/62">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-pad">
          <SectionIntro title="Our Process" />
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {process.map(([title, copy], index) => (
              <article key={title} className="rounded-lg border border-ink/10 bg-ivory p-6">
                <div className="text-sm font-semibold text-copper">0{index + 1}</div>
                <h3 className="mt-5 text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/62">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink text-white">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-copper">Why choose Hive Style</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">Why Homeowners Choose Hive Style</h2>
            <p className="mt-6 text-base leading-8 text-white/68">Hive Style is not here to sell more technology for the sake of it. We design smart home experiences that feel natural, elegant, and easy to use every day.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/6 p-5">
                <IconMark />
                <h3 className="mt-4 font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionIntro title="Featured Projects" />
            <Link href="/projects" className="button-secondary">View More Projects</Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map(([title, copy, image]) => (
              <article key={title} className="overflow-hidden rounded-lg bg-white shadow-soft">
                <div className="relative h-52">
                  <Image src={image} alt={`${title} project`} fill sizes="(min-width: 1024px) 24vw, 48vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/62">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.65fr_1fr]">
          <SectionIntro title="Frequently Asked Questions" />
          <div className="grid gap-3">
            {faqs.map(([question, answer]) => (
              <details key={question} className="rounded-lg border border-ink/10 bg-ivory p-5">
                <summary className="cursor-pointer text-base font-semibold text-ink">{question}</summary>
                <p className="mt-4 text-sm leading-7 text-ink/62">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad">
          <SectionIntro title="Proudly Serving Orange County">
            Hive Style Smart Homes serves homeowners throughout Orange County, including Irvine, Newport Beach, Newport Coast, Corona del Mar, Laguna Beach, Costa Mesa, Dana Point, Mission Viejo, Tustin, Laguna Niguel, and surrounding areas. We also support thoughtful
            {" "}
            <Link href="/smart-home-installation-orange-county" className="font-semibold text-copper">smart home installation in Orange County</Link>
            {" "}
            for remodels, existing homes, and new construction.
          </SectionIntro>
          <div className="mt-8 flex flex-wrap gap-3">
            {cities.map(([city, href]) => (
              <Link key={city} href={href} className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink/70 transition hover:border-copper hover:text-copper">{city}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink">
        <Image src="/images/movie night - wo text.png" alt="Premium smart home final consultation background" fill sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/72 to-black/28" />
        <div className="container-pad relative py-20 sm:py-24">
          <div className="max-w-2xl text-white">
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">Let&apos;s Create a Home That Works Beautifully for You</h2>
            <p className="mt-6 text-lg leading-8 text-white/72">Whether you&apos;re building, remodeling, or upgrading an existing home, we&apos;ll help you design a smarter living experience that feels simple, elegant, and effortless.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={site.consultationPath} className="button-primary">Schedule Your Consultation</Link>
              <Link href="/" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Return to Home</Link>
            </div>
            {site.phone && <p className="mt-5 text-sm text-white/58">{site.phone}</p>}
          </div>
        </div>
      </section>
    </>
  );
}

function SectionIntro({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.16em] text-copper">{eyebrow}</p>}
      <h2 className={eyebrow ? "mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl" : "text-4xl font-semibold leading-tight text-ink sm:text-5xl"}>{title}</h2>
      {children && <p className="mt-5 text-base leading-8 text-ink/68 sm:text-lg">{children}</p>}
    </div>
  );
}

function IconMark() {
  return <span className="flex h-10 w-10 items-center justify-center rounded-full border border-copper/20 bg-copper/10 text-copper">✦</span>;
}

function BuildPanel({ title, copy, bullets }: { title: string; copy: string; bullets: string[] }) {
  return (
    <article className="rounded-2xl bg-ivory p-7 shadow-soft sm:p-8">
      <h2 className="text-3xl font-semibold text-ink">{title}</h2>
      <p className="mt-4 text-base leading-8 text-ink/64">{copy}</p>
      <ul className="mt-6 grid gap-3">
        {bullets.map((item) => (
          <li key={item} className="flex gap-3 text-sm font-semibold text-ink/72">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-copper" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
