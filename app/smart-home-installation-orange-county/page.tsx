import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const metaDescription =
  "Hive Style designs and installs premium smart home systems in Orange County, including lighting, shades, audio, theater, security, networking, and whole-home control.";

export const metadata: Metadata = {
  title: "Smart Home Installation Orange County | Hive Style Smart Homes",
  description: metaDescription,
  alternates: { canonical: "/smart-home-installation-orange-county" },
  openGraph: {
    title: "Smart Home Installation Orange County | Hive Style Smart Homes",
    description: metaDescription,
    url: "/smart-home-installation-orange-county",
    type: "website",
    images: [{ url: "/images/Away Mode - wo text.png", alt: "Luxury Orange County smart home installation" }]
  }
};

const trust = [
  "Local Orange County Experts",
  "Clean, Design-Conscious Installations",
  "Premium Smart Home Systems",
  "Ongoing Support You Can Count On"
];

const steps = [
  ["Design", "We design a system tailored to the way you live."],
  ["Install", "Expert installation with clean, reliable infrastructure."],
  ["Program", "Systems are configured, tested, and optimized."],
  ["Support", "Ongoing care to keep everything running flawlessly."]
];

const systems = [
  ["Smart Lighting", "/images/Entertaining - wo text.png", "/smart-lighting-control-orange-county", "Lighting scenes, dimming, schedules, and elegant control."],
  ["Motorized Shades", "/images/morning-routine - wo text.png", "/motorized-shades-orange-county", "Automated privacy, comfort, glare control, and UV protection."],
  ["Whole Home Audio", "/images/home-office - wo text.png", "/whole-home-audio-orange-county", "Music throughout your home with simple, intuitive control."],
  ["Home Theater", "/images/movie night - wo text.png", "/home-theater-installation-orange-county", "Dedicated theaters and media rooms designed for immersive entertainment."],
  ["Security & Surveillance", "/images/Away Mode - wo text.png", "/security-camera-installation-orange-county", "Smart cameras, access control, and remote awareness."],
  ["Networking & WiFi", "/images/home-office - wo text.png", "/whole-home-wifi-installation-orange-county", "Reliable connectivity that supports every connected system."]
];

const process = [
  ["Discover", "We learn how you live, what you want to simplify, and what systems matter most."],
  ["Design", "We create a smart home plan tailored to your home, lifestyle, and budget."],
  ["Install", "Our team installs the system with care, precision, and respect for your home."],
  ["Program", "We configure scenes, controls, automations, and settings so the system feels intuitive."],
  ["Support", "We remain available after installation for service, updates, and ongoing support."]
];

const localCards = [
  ["Irvine Family Homes", "/images/Entertaining - wo text.png", "Reliable WiFi, smart lighting, security, and everyday convenience for busy family life."],
  ["Newport Beach Coastal Properties", "/images/home-office - wo text.png", "Outdoor entertainment, motorized shades, lighting, surveillance, and vacation monitoring."],
  ["Newport Coast Luxury Estates", "/images/Away Mode - wo text.png", "Whole-home integration, architectural lighting, hidden technology, and premium control."]
];

const benefits = [
  "Design-First Thinking",
  "Clean Installations",
  "Reliable Performance",
  "Thoughtful Recommendations",
  "Ongoing Support",
  "Local Orange County Expertise"
];

const featured = [
  ["Newport Beach Waterfront Home", "/images/Away Mode - wo text.png", "Lighting, shades, whole-home audio, and outdoor entertainment."],
  ["Irvine Modern Residence", "/images/Entertaining - wo text.png", "Networking, security, lighting control, and family-friendly automation."],
  ["Newport Coast Estate", "/images/Away Mode - wo text.png", "Whole-home integration, architectural lighting, audio, climate, and security."]
];

const faqs = [
  ["How long does smart home installation take?", "Smaller projects may take a few days, while larger whole-home installations can take several weeks depending on the systems involved, construction timing, programming needs, and project complexity."],
  ["Can you install smart home systems in an existing home?", "Yes. Many Orange County homeowners upgrade existing homes using wireless, wired, and hybrid solutions. Hive Style designs around the home's structure, finish level, and the homeowner's comfort with disruption."],
  ["Do I need new wiring?", "Not always. New construction projects often benefit from planned wiring, but existing homes may use a mix of wireless and retrofit-friendly solutions."],
  ["Can I start with one room first?", "Yes. Many homeowners begin with lighting, shades, WiFi, audio, or security in key spaces and expand over time."],
  ["What happens during installation?", "Hive Style coordinates the installation, configures the systems, tests performance, and walks you through how everything works."],
  ["How much does smart home installation cost?", "Cost depends on the size of the home, the number of systems, installation complexity, and level of customization. For a detailed pricing overview, visit the smart home automation cost guide."],
  ["Will I need ongoing support?", "Smart home systems perform best with thoughtful support over time. Hive Style provides service after installation so your system remains reliable and easy to use."]
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

export default function SmartHomeInstallationOrangeCountyPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Smart Home Installation Orange County",
          description: metaDescription,
          provider: { "@type": "LocalBusiness", name: "Hive Style Smart Homes", areaServed: "Orange County, CA" },
          areaServed: "Orange County, CA",
          url: `${site.url}/smart-home-installation-orange-county`
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
        <Image src="/images/Away Mode - wo text.png" alt="Luxury Orange County smart home installation" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/68 to-black/18" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/18" />
        <div className="container-pad relative flex min-h-[660px] items-center py-20">
          <div className="max-w-[690px] text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Smart Home Installation in Orange County</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] sm:text-6xl">
              Smart Home Installation
              <br />
              <span className="text-copper">Done Thoughtfully.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              Hive Style designs and installs integrated smart home systems for Orange County homeowners who value simplicity, performance, and exceptional experiences.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={site.consultationPath} className="button-primary">Schedule a Consultation</Link>
              <Link href="/projects" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">View Recent Projects</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="container-pad grid gap-3 py-5 text-sm font-semibold text-white/72 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <IconDot />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="text-4xl font-semibold leading-tight text-ink">A Great Smart Home Starts With Great Installation</h2>
            <p className="mt-6 text-base leading-8 text-ink/68">
              The products are only part of the experience. A truly effortless smart home depends on thoughtful planning, reliable infrastructure, careful installation, intuitive programming, and ongoing support.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-4">
            {steps.map(([title, copy], index) => (
              <article key={title} className="rounded-lg border border-ink/10 bg-ivory p-5 text-center">
                <IconCircle />
                <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/62">{copy}</p>
                {index < steps.length - 1 && <span className="mt-4 hidden text-copper sm:block">›</span>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad">
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">Integrated Systems Designed To Work Together</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {systems.map(([title, image, href, copy]) => (
              <Link key={title} href={href} className="group overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft transition hover:-translate-y-1">
                <div className="relative h-48">
                  <Image src={image} alt={`${title} installation`} fill sizes="(min-width: 1024px) 30vw, 48vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="relative p-6 pt-8">
                  <span className="absolute -top-5 left-5"><IconCircle /></span>
                  <h3 className="text-xl font-semibold text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/62">{copy}</p>
                  <span className="mt-5 inline-block text-sm font-semibold text-copper">Learn More</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="grid bg-ink text-white lg:grid-cols-2">
        <SplitImagePanel
          image="/images/home-office - wo text.png"
          title="Technology Planning Before the Walls Close"
          copy="For new homes and major remodels, smart home installation should begin before construction is complete. Hive Style works with homeowners, builders, architects, designers, and electricians to plan the infrastructure needed for lighting, audio, security, networking, shades, and control."
          bullets={["Low-voltage infrastructure planning", "Equipment and wiring coordination", "Lighting control and keypad placement", "Audio and video distribution", "Security and camera planning", "Future-ready system design"]}
        />
        <SplitImagePanel
          image="/images/movie night - wo text.png"
          title="Modern Smart Home Technology for Existing Homes"
          copy="You do not need to start from scratch to create a smarter home. Many Orange County homes can be upgraded with wired, wireless, and hybrid solutions designed to minimize disruption and preserve the beauty of the space."
          bullets={["Wireless and hybrid installation options", "Phased upgrades over time", "Clean installation in finished homes", "Systems designed to blend into the architecture", "Practical recommendations based on your home"]}
        />
      </section>

      <section className="section bg-white">
        <div className="container-pad">
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">Our Installation Process</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {process.map(([title, copy], index) => (
              <article key={title} className="rounded-lg border border-ink/10 bg-ivory p-6 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-copper text-sm font-semibold text-white">{index + 1}</div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/62">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad">
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">Smart Home Installation Across Orange County</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {localCards.map(([title, image, copy]) => (
              <article key={title} className="overflow-hidden rounded-lg bg-white shadow-soft">
                <div className="relative h-52">
                  <Image src={image} alt={`${title} smart home installation`} fill sizes="(min-width: 1024px) 30vw, 92vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/62">{copy}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-ink/60">
            Serving Irvine, Newport Beach, Newport Coast, Corona del Mar, Laguna Beach, Costa Mesa, Dana Point, Mission Viejo, Tustin, Laguna Niguel, and surrounding Orange County communities.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-4xl font-semibold leading-tight text-ink">Technology Should Feel Invisible</h2>
            <p className="mt-5 text-base leading-8 text-ink/68">
              Hive Style is not here to install technology for the sake of technology. We design and install systems that feel natural, elegant, reliable, and easy to use every day.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
              <article key={item} className="rounded-lg border border-ink/10 bg-ivory p-5">
                <IconCircle />
                <h3 className="mt-4 text-sm font-semibold text-ink">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-4xl font-semibold leading-tight text-ink">Featured Installations</h2>
            <Link href="/projects" className="button-secondary">View Recent Projects</Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featured.map(([title, image, copy]) => (
              <article key={title} className="overflow-hidden rounded-lg bg-white shadow-soft">
                <div className="relative h-52">
                  <Image src={image} alt={`${title} featured installation`} fill sizes="(min-width: 1024px) 30vw, 92vw" className="object-cover" />
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
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1fr]">
          <div>
            <h2 className="text-4xl font-semibold leading-tight text-ink">Frequently Asked Questions</h2>
            <div className="mt-8 grid gap-3">
              {faqs.map(([question, answer]) => (
                <details key={question} className="rounded-lg border border-ink/10 bg-ivory p-4">
                  <summary className="cursor-pointer text-sm font-semibold text-ink">{question}</summary>
                  <p className="mt-4 text-sm leading-7 text-ink/62">
                    {question === "How much does smart home installation cost?" ? (
                      <>
                        Cost depends on the size of the home, the number of systems, installation complexity, and level of customization. For a detailed pricing overview, visit the{" "}
                        <Link href="/smart-home-automation-cost-orange-county" className="font-semibold text-copper">smart home automation cost guide</Link>.
                      </>
                    ) : (
                      answer
                    )}
                  </p>
                </details>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-ivory p-7 shadow-soft">
            <h2 className="text-3xl font-semibold text-ink">Serving Homeowners Throughout Orange County</h2>
            <p className="mt-4 text-base leading-8 text-ink/68">
              Hive Style works with homeowners, builders, architects, and designers throughout Orange County, delivering thoughtfully designed smart home installations that blend technology, architecture, and everyday living.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {cities.map(([city, href]) => (
                <Link key={city} href={href} className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink/70 transition hover:border-copper hover:text-copper">{city}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink">
        <Image src="/images/Away Mode - wo text.png" alt="Smart home installation final CTA background" fill sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/72 to-black/28" />
        <div className="container-pad relative grid gap-8 py-16 text-white lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold leading-tight">Let&apos;s Build Something Exceptional</h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              Whether you are building a new home, remodeling, or upgrading an existing property, Hive Style can help you create a connected living experience that feels elegant, reliable, and effortless.
            </p>
            <Link href="/" className="mt-5 inline-block text-sm font-semibold text-copper">Return to Home</Link>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={site.consultationPath} className="button-primary">Schedule Your Consultation</Link>
            <Link href="/projects" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">View Recent Projects</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function IconDot() {
  return <span className="h-2 w-2 shrink-0 rounded-full bg-copper" />;
}

function IconCircle() {
  return (
    <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-copper/25 bg-white text-copper shadow-[0_10px_24px_rgba(17,17,17,0.08)]">
      ✦
    </span>
  );
}

function SplitImagePanel({ image, title, copy, bullets }: { image: string; title: string; copy: string; bullets: string[] }) {
  return (
    <article className="grid min-h-[520px] lg:grid-cols-[0.9fr_1.1fr]">
      <div className="relative min-h-72">
        <Image src={image} alt={title} fill sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover" />
      </div>
      <div className="flex flex-col justify-center p-8 lg:p-10">
        <h2 className="text-3xl font-semibold leading-tight">{title}</h2>
        <p className="mt-4 text-sm leading-7 text-white/70">{copy}</p>
        <ul className="mt-6 grid gap-3">
          {bullets.map((item) => (
            <li key={item} className="flex gap-3 text-sm font-semibold text-white/78">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-copper" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
