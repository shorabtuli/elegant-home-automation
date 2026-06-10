import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const metaDescription =
  "Premium motorized shades in Orange County. Hive Style designs and installs elegant automated shades for privacy, comfort, UV protection, energy efficiency, and smart home control.";

export const metadata: Metadata = {
  title: "Motorized Shades Orange County | Hive Style Smart Homes",
  description: metaDescription,
  alternates: { canonical: "/motorized-shades-orange-county" },
  openGraph: {
    title: "Motorized Shades Orange County | Hive Style Smart Homes",
    description: metaDescription,
    url: "/motorized-shades-orange-county",
    type: "website",
    images: [{ url: "/images/morning-routine - wo text.png", alt: "Motorized shades in a luxury Orange County home" }]
  }
};

const trust = [
  "Orange County Shade Experts",
  "Premium Design & Installation",
  "Seamlessly Integrated Control",
  "Professional Support & Service"
];

const introCards = [
  ["Comfort", "/images/morning-routine - wo text.png", "Control sunlight and reduce glare for a more comfortable home."],
  ["Privacy", "/images/home-office - wo text.png", "Enhance privacy without sacrificing your views."],
  ["Convenience", "/images/Entertaining - wo text.png", "Control every shade with a touch, voice command, or schedule."],
  ["Design", "/images/morning-routine - wo text.png", "Elevate your architecture with clean, elegant solutions."]
];

const benefits = [
  ["Natural Light Control", "Reduce glare while preserving beautiful natural light."],
  ["UV Protection", "Protect your furnishings, floors, and artwork from UV rays."],
  ["Energy Efficiency", "Reduce heat gain and improve comfort year-round."],
  ["Automated Schedules", "Shades adjust automatically throughout the day."],
  ["Voice & App Control", "Control shades from anywhere using your favorite devices."],
  ["Smart Home Integration", "Seamlessly integrates with lighting, security, and automation."]
];

const localCards = [
  ["Newport Beach", "/images/Entertaining - wo text.png", "Ocean-facing homes need smart shading for comfort, privacy, and glare control."],
  ["Newport Coast", "/images/Away Mode - wo text.png", "Large windows, luxury architecture, and automated comfort go hand in hand."],
  ["Irvine", "/images/morning-routine - wo text.png", "Family convenience, energy efficiency, and whole-home automation that simplifies everyday life."],
  ["Laguna Beach", "/images/Entertaining - wo text.png", "Coastal views deserve beautiful light control and complete privacy."]
];

const roomCards = [
  ["Living Rooms", "/images/morning-routine - wo text.png", "Comfort, style, and natural light control."],
  ["Bedrooms", "/images/home-office - wo text.png", "Restful sleep with privacy and blackout options."],
  ["Home Offices", "/images/home-office - wo text.png", "Reduce glare and improve focus during the workday."],
  ["Outdoor Spaces", "/images/Entertaining - wo text.png", "Shade and comfort for patios and covered areas."],
  ["Media Rooms", "/images/movie night - wo text.png", "Better viewing experiences with light control."],
  ["Large Window Walls", "/images/morning-routine - wo text.png", "Designed for expansive glass and striking architecture."]
];

const process = [
  ["Discover", "We learn how you live and what matters most to you."],
  ["Design", "We create a custom plan that complements your home."],
  ["Select", "Choose the perfect shades, fabrics, and controls."],
  ["Install", "Our team installs with precision and care."],
  ["Support", "We are here for you long after installation is complete."]
];

const why = [
  ["Design-First Thinking", "Shade solutions should enhance your home, not compete with it."],
  ["Premium Products", "Elegant shade systems selected for performance and beauty."],
  ["Clean Installations", "Professional installation that respects your home and design."],
  ["Thoughtful Recommendations", "We recommend what you need, not what you do not."],
  ["Local Expertise", "We understand Orange County homes, sunlight, architecture, and lifestyle."],
  ["Ongoing Support", "We are here long after installation for total peace of mind."]
];

const projects = [
  ["Newport Beach Coastal Home", "/images/Entertaining - wo text.png", "Smart shades provide privacy and glare control while preserving stunning ocean views."],
  ["Irvine Luxury Residence", "/images/morning-routine - wo text.png", "Whole-home automation with motorized shades enhances comfort and convenience every day."],
  ["Newport Coast Estate", "/images/Away Mode - wo text.png", "Integrated lighting and shades create beautiful environments for living, relaxing, and entertaining."]
];

const faqs = [
  ["How much do motorized shades cost?", "Cost depends on the number of windows, shade type, fabric selection, control options, power requirements, and installation complexity. A consultation helps determine the right solution for your home."],
  ["Are motorized shades worth it?", "Yes for many homeowners. Motorized shades improve comfort, privacy, convenience, light control, and can help protect interiors from sun exposure."],
  ["Can shades be controlled from a phone?", "Yes. Motorized shades can often be controlled from an app, keypad, remote, schedule, voice assistant, or integrated smart home system."],
  ["Do motorized shades work with smart home systems?", "Yes. Shades can integrate with lighting, security, climate, and whole-home automation scenes for a seamless experience."],
  ["Can motorized shades improve energy efficiency?", "Yes. Properly designed shades can help reduce heat gain, improve comfort, and support more efficient indoor environments."],
  ["Can motorized shades be installed in existing homes?", "Yes. Many existing homes can support motorized shades using wired, wireless, or battery-powered options depending on the space."]
];

export default function MotorizedShadesOrangeCountyPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Motorized Shades Orange County",
          description: metaDescription,
          provider: { "@type": "LocalBusiness", name: "Hive Style Smart Homes", areaServed: "Orange County, CA" },
          areaServed: "Orange County, CA",
          url: `${site.url}/motorized-shades-orange-county`
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
        <Image src="/images/morning-routine - wo text.png" alt="Luxury Orange County living room with motorized shades" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/62 to-black/16" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/18" />
        <div className="container-pad relative flex min-h-[660px] items-center py-20">
          <div className="max-w-[690px] text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Motorized Shades Orange County</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] sm:text-6xl">Motorized Shades Designed for Modern Living</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              Beautifully integrated motorized shades that provide privacy, comfort, light control, and effortless convenience throughout your home.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={site.consultationPath} className="button-primary">Schedule a Shade Consultation</Link>
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
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">More Than Window Coverings</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {introCards.map(([title, image, copy]) => (
              <article key={title} className="overflow-hidden rounded-lg border border-ink/10 bg-ivory shadow-soft">
                <div className="relative h-48">
                  <Image src={image} alt={`${title} motorized shade benefit`} fill sizes="(min-width: 1024px) 24vw, 48vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <IconCircle />
                  <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/62">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad">
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">The Benefits of Motorized Shades</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {benefits.map(([title, copy]) => (
              <article key={title} className="rounded-lg border border-ink/10 bg-white p-5 text-center">
                <IconCircle />
                <h3 className="mt-4 text-sm font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/62">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-pad">
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">Perfect for Orange County Living</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {localCards.map(([title, image, copy]) => (
              <article key={title} className="relative overflow-hidden rounded-lg bg-ink text-white shadow-soft">
                <div className="relative h-64">
                  <Image src={image} alt={`${title} motorized shades`} fill sizes="(min-width: 1024px) 24vw, 48vw" className="object-cover opacity-75" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/20 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/78">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div className="grid overflow-hidden rounded-lg shadow-soft sm:grid-cols-4">
            {["Morning", "Afternoon", "Evening", "Vacation"].map((label) => (
              <div key={label} className="relative min-h-72 border-r border-white/20 last:border-r-0">
                <Image src="/images/Entertaining - wo text.png" alt={`${label} shade scene`} fill sizes="(min-width: 1024px) 22vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/76 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-copper">{label}</h3>
                  <p className="mt-2 text-sm text-white/78">{label === "Morning" ? "Natural light." : label === "Afternoon" ? "Reduce heat." : label === "Evening" ? "Privacy." : "Peace of mind."}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-4xl font-semibold leading-tight text-ink">Shades That Work With Your Lifestyle</h2>
            <p className="mt-5 text-base leading-8 text-ink/68">From morning to night and everywhere in between, motorized shades adjust automatically to your routine.</p>
            <ul className="mt-6 grid gap-3">
              {["Create the perfect environment throughout the day", "Automate shades with schedules and scenes", "Control remotely while you are away", "Integrates with lighting, security, and more"].map((item) => (
                <li key={item} className="flex gap-3 text-sm font-semibold text-ink/72"><IconDot />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-pad">
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">Shades for Every Space</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {roomCards.map(([title, image, copy]) => (
              <article key={title} className="overflow-hidden rounded-lg border border-ink/10 bg-ivory shadow-soft">
                <div className="relative h-40">
                  <Image src={image} alt={`${title} motorized shades`} fill sizes="(min-width: 1024px) 16vw, 48vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <IconCircle />
                  <h3 className="mt-4 text-sm font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/62">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-center text-4xl font-semibold leading-tight text-ink">A Thoughtful Shade Design Process</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-5">
              {process.map(([title, copy], index) => (
                <article key={title} className="rounded-lg border border-ink/10 bg-white p-5 text-center">
                  <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-copper text-sm font-semibold text-white">{index + 1}</div>
                  <h3 className="mt-4 text-sm font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-ink/62">{copy}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-center text-4xl font-semibold leading-tight text-ink">Why Homeowners Choose Hive Style</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {why.map(([title, copy]) => (
                <article key={title} className="rounded-lg border border-ink/10 bg-white p-5 text-center">
                  <IconCircle />
                  <h3 className="mt-4 text-sm font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-ink/62">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-pad">
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">Featured Motorized Shade Projects</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {projects.map(([title, image, copy]) => (
              <article key={title} className="relative overflow-hidden rounded-lg bg-ink text-white shadow-soft">
                <div className="relative h-64">
                  <Image src={image} alt={`${title} shade project`} fill sizes="(min-width: 1024px) 30vw, 92vw" className="object-cover opacity-72" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/20 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/78">{copy}</p>
                  <Link href="/projects" className="mt-4 inline-block text-sm font-semibold text-copper">View Project</Link>
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
              We design and install motorized shades in Irvine, Newport Beach, Newport Coast, Laguna Beach, Corona del Mar, Costa Mesa, Dana Point, Mission Viejo, Tustin, Laguna Niguel, and surrounding communities.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink">
        <Image src="/images/morning-routine - wo text.png" alt="Motorized shades final consultation background" fill sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/72 to-black/28" />
        <div className="container-pad relative grid gap-8 py-16 text-white lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold leading-tight">Let&apos;s Transform the Way Your Home Feels</h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              Whether you are building a new home, remodeling, or enhancing your favorite spaces, Hive Style can design a motorized shading solution that delivers comfort, beauty, privacy, and effortless control.
            </p>
            <Link href="/" className="mt-5 inline-block text-sm font-semibold text-copper">Return to Home</Link>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={site.consultationPath} className="button-primary">Schedule a Shade Consultation</Link>
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
