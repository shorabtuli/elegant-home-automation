import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const metaDescription =
  "Premium smart home automation in Irvine, CA. Hive Style designs integrated lighting, shades, audio, security, networking, and whole-home control systems for Irvine homeowners.";

export const metadata: Metadata = {
  title: "Smart Home Automation Irvine | Hive Style Smart Homes",
  description: metaDescription,
  alternates: { canonical: "/smart-home-automation-irvine" },
  openGraph: {
    title: "Smart Home Automation Irvine | Hive Style Smart Homes",
    description: metaDescription,
    url: "/smart-home-automation-irvine",
    type: "website",
    images: [{ url: "/images/Away Mode - wo text.png", alt: "Luxury Irvine smart home automation" }]
  }
};

const trust = [
  "Irvine & Orange County Experts",
  "Design-First Smart Home Experiences",
  "Premium Installation & Support",
  "Trusted by Local Homeowners"
];

const lifestyle = [
  ["Connected Family Living", "Lighting, security, and automation that help simplify everyday routines."],
  ["Reliable Whole-Home WiFi", "Support remote work, streaming, gaming, and every connected device."],
  ["Enhanced Security", "Monitor your home, deliveries, and property while at work or traveling."],
  ["Better Entertaining", "Indoor and outdoor spaces that work together beautifully."]
];

const services = [
  ["Smart Lighting", "/images/Entertaining - wo text.png", "/smart-lighting-control-orange-county", "Create the perfect ambiance with scenes, dimming, and smart control."],
  ["Motorized Shades", "/images/morning-routine - wo text.png", "/motorized-shades-orange-county", "Privacy, comfort, and energy efficiency at the touch of a button."],
  ["Whole Home Audio", "/images/home-office - wo text.png", "/whole-home-audio-orange-county", "Music in every room, inside and out, all controlled from one simple app."],
  ["Home Theater", "/images/movie night - wo text.png", "/home-theater-installation-orange-county", "Immersive cinematic experiences in dedicated theaters and media rooms."],
  ["Security & Surveillance", "/images/Away Mode - wo text.png", "/security-camera-installation-orange-county", "Smart cameras, access control, and real-time alerts for peace of mind."],
  ["Whole Home WiFi", "/images/home-office - wo text.png", "/whole-home-wifi-installation-orange-county", "Robust, reliable network coverage that keeps your home running smoothly."]
];

const neighborhoods = [
  ["Great Park Neighborhoods", "/images/Away Mode - wo text.png", ["Whole-home WiFi", "Smart lighting", "Security", "Family-friendly automation"]],
  ["Orchard Hills Homes", "/images/Entertaining - wo text.png", ["Motorized shades", "Outdoor audio", "Lighting scenes", "Entertainment spaces"]],
  ["Turtle Rock Homes", "/images/morning-routine - wo text.png", ["Retrofit automation", "Networking upgrades", "Security systems", "Whole-home audio"]],
  ["Shady Canyon & Hidden Canyon Estates", "/images/Away Mode - wo text.png", ["Whole-home integration", "Architectural lighting", "Security", "Luxury entertainment"]]
];

const process = [
  ["Discover", "We learn how you live, what matters most, and what you want to simplify."],
  ["Design", "We create a custom plan that fits your lifestyle, home, and budget."],
  ["Install", "Our team installs your system with care, precision, and respect."],
  ["Program", "We configure everything so your system feels intuitive and effortless."],
  ["Support", "We remain available for service, updates, and ongoing support."]
];

const benefits = [
  ["Design-First Thinking", "Technology should enhance your home, not compete with it."],
  ["Personalized Recommendations", "Every home and family is unique. So is our approach."],
  ["Local Expertise", "We know Irvine homes, communities, and the lifestyle you love."],
  ["Clean Installations", "Thoughtful installation that respects your home and design."],
  ["Reliable Performance", "Systems that are stable, secure, and built to last."],
  ["Ongoing Support", "We are here long after installation for total peace of mind."]
];

const projects = [
  ["Great Park Family Home", "/images/Away Mode - wo text.png", "Smart lighting, whole-home WiFi, and security for everyday peace of mind."],
  ["Orchard Hills Residence", "/images/Entertaining - wo text.png", "Motorized shades, outdoor audio, and lighting scenes for effortless entertaining."],
  ["Shady Canyon Estate", "/images/Away Mode - wo text.png", "Whole-home automation, architectural lighting, climate, and security integration."]
];

const faqs = [
  ["How much does smart home automation cost in Irvine?", "Cost depends on home size, the number of systems being integrated, and the level of customization. A focused project may start with lighting, shades, WiFi, audio, or security, while a larger whole-home system requires more planning, installation, programming, and support."],
  ["Can I automate an existing Irvine home?", "Yes. Many Irvine homes can be upgraded using wired, wireless, and hybrid solutions. Hive Style designs around your home's structure and your preferred level of disruption."],
  ["What smart home upgrades are most popular in Irvine?", "Popular upgrades include whole-home WiFi, lighting control, motorized shades, security cameras, whole-home audio, and home theater systems."],
  ["Can I start with lighting and expand later?", "Yes. We can design your system so you can begin with one priority area and expand into additional rooms or systems over time."],
  ["How long does installation take?", "Smaller projects may take a few days, while larger whole-home systems can take several weeks depending on scope and complexity."],
  ["Do you work with builders and remodelers?", "Yes. Hive Style can coordinate with homeowners, builders, architects, designers, electricians, and remodelers to plan and install the right smart home infrastructure."]
];

export default function SmartHomeAutomationIrvinePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Smart Home Automation Irvine",
          description: metaDescription,
          provider: { "@type": "LocalBusiness", name: "Hive Style Smart Homes", areaServed: "Irvine, CA" },
          areaServed: "Irvine, CA",
          url: `${site.url}/smart-home-automation-irvine`
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
        <Image src="/images/Away Mode - wo text.png" alt="Luxury Irvine smart home at dusk" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/68 to-black/18" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/18" />
        <div className="container-pad relative flex min-h-[660px] items-center py-20">
          <div className="max-w-[720px] text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Smart Home Automation Irvine</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] sm:text-6xl">
              Smart Home Automation Designed for
              <br />
              <span className="text-copper">Irvine Living</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              Thoughtfully integrated lighting, shades, audio, security, and networking systems designed around the way Irvine families live, work, entertain, and connect.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={site.consultationPath} className="button-primary">Schedule a Consultation</Link>
              <Link href="/smart-home-automation-orange-county" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Explore Solutions</Link>
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
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-4xl font-semibold leading-tight text-ink">Technology Designed Around Modern Irvine Living</h2>
            <p className="mt-6 text-base leading-8 text-ink/68">
              Smart home automation simplifies the moments that matter most. From busy weekdays to special gatherings, technology should support your lifestyle, not complicate it.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {lifestyle.map(([title, copy]) => (
              <article key={title} className="rounded-lg border border-ink/10 bg-ivory p-5 text-center">
                <IconCircle />
                <h3 className="mt-4 text-sm font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/62">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad">
          <div className="text-center">
            <h2 className="text-4xl font-semibold leading-tight text-ink">Integrated Smart Home Solutions</h2>
            <p className="mt-4 text-base text-ink/62">Seamless systems. Effortless control. Built for the way you live.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, image, href, copy]) => (
              <Link key={title} href={href} className="group overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft transition hover:-translate-y-1">
                <div className="relative h-48">
                  <Image src={image} alt={`${title} for Irvine smart homes`} fill sizes="(min-width: 1024px) 30vw, 48vw" className="object-cover transition duration-500 group-hover:scale-105" />
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

      <section className="section bg-white">
        <div className="container-pad">
          <div className="text-center">
            <h2 className="text-4xl font-semibold leading-tight text-ink">Popular Smart Home Projects for Irvine Homes</h2>
            <p className="mt-4 text-base text-ink/62">Every neighborhood has its own priorities. We design solutions around the way you live.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {neighborhoods.map(([title, image, items]) => (
              <article key={title as string} className="overflow-hidden rounded-lg bg-ivory shadow-soft">
                <div className="relative h-44">
                  <Image src={image as string} alt={`${title} smart home automation`} fill sizes="(min-width: 1024px) 24vw, 48vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm font-semibold text-ink/56">Common priorities:</p>
                  <ul className="mt-3 grid gap-2">
                    {(items as string[]).map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-ink/66">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-copper" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid bg-ink text-white lg:grid-cols-2">
        <SplitPanel
          image="/images/home-office - wo text.png"
          title="Building a New Home"
          copy="Plan your technology before the walls close. We work with your builder and design team to create a strong foundation for a smarter home."
          bullets={["Infrastructure planning", "Networking designed for today and tomorrow", "Lighting and keypad design", "Audio and video distribution", "Security and access control", "Future expansion built in"]}
          href="/smart-home-installation-orange-county"
          cta="Learn More About New Construction"
        />
        <SplitPanel
          image="/images/movie night - wo text.png"
          title="Upgrading an Existing Home"
          copy="Modern smart home technology can be added beautifully and efficiently."
          bullets={["Wireless and hybrid solutions", "Phased upgrades", "Minimal disruption", "Systems that blend into your home", "Designed around your goals"]}
          href="/smart-home-installation-orange-county"
          cta="Learn More About Retrofits"
        />
      </section>

      <section className="section bg-white">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_0.8fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-4xl font-semibold leading-tight text-ink">Every Great Smart Home Starts With Reliable WiFi</h2>
            <p className="mt-5 text-base leading-8 text-ink/68">A fast, stable network is the foundation for everything: streaming, remote work, security, automation, and more.</p>
            <ul className="mt-6 grid gap-3">
              {["Whole-home coverage", "Consistent performance", "Supports more devices", "Reliable now and in the future"].map((item) => (
                <li key={item} className="flex gap-3 text-sm font-semibold text-ink/72">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-copper" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/whole-home-wifi-installation-orange-county" className="mt-6 inline-block text-sm font-semibold text-copper">Learn More About WiFi Solutions</Link>
          </div>
          <div className="relative h-72 overflow-hidden rounded-lg bg-ivory shadow-soft">
            <Image src="/images/home-office - wo text.png" alt="Whole-home WiFi coverage for Irvine homes" fill sizes="(min-width: 1024px) 30vw, 92vw" className="object-cover" />
          </div>
          <div className="rounded-2xl bg-ink p-8 text-white shadow-soft">
            <p className="text-copper">★★★★★</p>
            <p className="mt-5 text-lg leading-8 text-white/82">“Our WiFi is stronger than ever and the whole house just works. Hive Style made the process easy and the results are incredible.”</p>
            <p className="mt-5 text-sm font-semibold text-white/60">Irvine Homeowner</p>
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad">
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">A Thoughtful Approach to Smart Home Design</h2>
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

      <section className="section bg-white">
        <div className="container-pad">
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">Why Irvine Homeowners Choose Hive Style</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {benefits.map(([title, copy]) => (
              <article key={title} className="rounded-lg border border-ink/10 bg-ivory p-5 text-center">
                <IconCircle />
                <h3 className="mt-4 text-sm font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/62">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad">
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">Featured Irvine-Area Projects</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {projects.map(([title, image, copy]) => (
              <article key={title} className="overflow-hidden rounded-lg bg-white shadow-soft">
                <div className="relative h-52">
                  <Image src={image} alt={`${title} Irvine-area project`} fill sizes="(min-width: 1024px) 30vw, 92vw" className="object-cover" />
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

      <section className="section bg-white">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1fr]">
          <div>
            <h2 className="text-4xl font-semibold leading-tight text-ink">Frequently Asked Questions</h2>
            <div className="mt-8 grid gap-3">
              {faqs.map(([question, answer]) => (
                <details key={question} className="rounded-lg border border-ink/10 bg-ivory p-4">
                  <summary className="cursor-pointer text-sm font-semibold text-ink">{question}</summary>
                  <p className="mt-4 text-sm leading-7 text-ink/62">{answer}</p>
                </details>
              ))}
            </div>
            <Link href="/smart-home-automation-orange-county#faq" className="mt-5 inline-block text-sm font-semibold uppercase tracking-[0.12em] text-copper">View All FAQs</Link>
          </div>
          <div className="rounded-2xl bg-ivory p-7 shadow-soft">
            <h2 className="text-3xl font-semibold text-ink">Proudly Serving Irvine Communities</h2>
            <p className="mt-4 text-base leading-8 text-ink/68">
              We design and install smart home systems in neighborhoods throughout Irvine, including Great Park, Orchard Hills, Portola Springs, Woodbury, Northwood, Turtle Rock, University Park, Westpark, Hidden Canyon, Shady Canyon, and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink">
        <Image src="/images/Away Mode - wo text.png" alt="Irvine smart home final consultation background" fill sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/72 to-black/28" />
        <div className="container-pad relative grid gap-8 py-16 text-white lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold leading-tight">Let&apos;s Create a Smarter Home for the Way You Live</h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              Whether you&apos;re building a new home, remodeling, or upgrading your current residence, Hive Style helps Irvine homeowners create connected living experiences that feel effortless, elegant, and intuitive.
            </p>
            <Link href="/" className="mt-5 inline-block text-sm font-semibold text-copper">Return to Home</Link>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={site.consultationPath} className="button-primary">Schedule a Consultation</Link>
            <Link href="/smart-home-automation-orange-county" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Explore Smart Home Solutions</Link>
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

function SplitPanel({ image, title, copy, bullets, href, cta }: { image: string; title: string; copy: string; bullets: string[]; href: string; cta: string }) {
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
        <Link href={href} className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-copper">{cta}</Link>
      </div>
    </article>
  );
}
