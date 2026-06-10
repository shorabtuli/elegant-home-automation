import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const metaDescription =
  "Premium smart home automation in Newport Beach, CA. Hive Style designs elegant lighting, shades, audio, security, networking, and whole-home control systems for coastal living.";

export const metadata: Metadata = {
  title: "Smart Home Automation Newport Beach | Hive Style Smart Homes",
  description: metaDescription,
  alternates: { canonical: "/smart-home-automation-newport-beach" },
  openGraph: {
    title: "Smart Home Automation Newport Beach | Hive Style Smart Homes",
    description: metaDescription,
    url: "/smart-home-automation-newport-beach",
    type: "website",
    images: [{ url: "/images/Entertaining - wo text.png", alt: "Luxury Newport Beach smart home automation" }]
  }
};

const trust = [
  "Newport Beach & Orange County Experts",
  "Design-First Experiences",
  "Premium Installation & Support",
  "Trusted by Local Homeowners"
];

const lifestyle = [
  ["Indoor-Outdoor Entertaining", "/images/Entertaining - wo text.png", "Music, lighting, and control that extend seamlessly from inside to outside."],
  ["Waterfront Property Management", "/images/home-office - wo text.png", "Monitor and manage your home from anywhere, anytime."],
  ["Luxury Comfort", "/images/morning-routine - wo text.png", "Motorized shades, lighting scenes, and personalized environments at your fingertips."],
  ["Security & Peace of Mind", "/images/Away Mode - wo text.png", "Remote awareness while traveling or away from home."]
];

const services = [
  ["Smart Lighting", "/images/Entertaining - wo text.png", "/smart-lighting-control-orange-county", "Architectural lighting and elegant scenes for every moment."],
  ["Motorized Shades", "/images/morning-routine - wo text.png", "/motorized-shades-orange-county", "Privacy, comfort, and UV protection with the touch of a button."],
  ["Whole Home Audio", "/images/home-office - wo text.png", "/whole-home-audio-orange-county", "Music throughout your home and outdoor spaces."],
  ["Home Theater", "/images/movie night - wo text.png", "/home-theater-installation-orange-county", "Luxury entertainment experiences in dedicated theaters and media rooms."],
  ["Security & Surveillance", "/images/Away Mode - wo text.png", "/security-camera-installation-orange-county", "Smart monitoring and alerts for your home and property."],
  ["Whole Home WiFi", "/images/home-office - wo text.png", "/whole-home-wifi-installation-orange-county", "Reliable connectivity that keeps your world running."]
];

const neighborhoods = [
  ["Newport Harbor Homes", "/images/Entertaining - wo text.png", ["Outdoor entertainment", "Surveillance", "Lighting control", "Dock and waterfront monitoring"]],
  ["Balboa Peninsula Properties", "/images/Away Mode - wo text.png", ["Security", "Motorized shades", "Whole-home WiFi", "Remote management"]],
  ["Lido Isle Residences", "/images/Entertaining - wo text.png", ["Architectural lighting", "Whole-home audio", "Entertaining spaces", "Luxury control systems"]],
  ["Newport Coast Luxury Homes", "/images/Away Mode - wo text.png", ["Whole-home integration", "Climate control", "Lighting", "Security"]]
];

const process = [
  ["Discover", "We learn how you live, entertain, travel, and use your home."],
  ["Design", "We create a custom smart home plan tailored to your property and lifestyle."],
  ["Install", "Our team installs your system with care, precision, and respect."],
  ["Program", "We configure everything so your system feels intuitive and effortless."],
  ["Support", "We remain available for service, updates, and ongoing support."]
];

const benefits = [
  ["Design-First Thinking", "Technology should enhance your home, not compete with it."],
  ["Personalized Recommendations", "Every home and lifestyle is unique. So is our approach."],
  ["Luxury Home Expertise", "Deep experience with high-end homes and discerning homeowners."],
  ["Clean Installations", "Thoughtful installation that respects your home and design."],
  ["Reliable Performance", "Systems that are stable, secure, and built to last."],
  ["Ongoing Support", "We are here long after installation for total peace of mind."]
];

const projects = [
  ["Harbor View Residence", "/images/Entertaining - wo text.png", "Lighting, motorized shades, and outdoor audio create the perfect setting for effortless entertaining."],
  ["Balboa Peninsula Retreat", "/images/Away Mode - wo text.png", "Smart security, remote access, and whole-home WiFi provide peace of mind while away."],
  ["Lido Isle Home", "/images/Entertaining - wo text.png", "Whole-home integration and architectural lighting deliver luxury without complexity."]
];

const faqs = [
  ["How much does smart home automation cost in Newport Beach?", "Cost depends on the size of the home, the systems being integrated, and the level of customization. Newport Beach projects often include lighting, shades, audio, security, outdoor entertainment, and remote monitoring, so the best next step is a consultation to understand your goals."],
  ["Can I monitor my home remotely while traveling?", "Yes. Hive Style can design smart security, cameras, access control, lighting schedules, and alerts so you can stay connected to your home while you are away."],
  ["What smart home upgrades are most popular in Newport Beach?", "Popular upgrades include motorized shades, smart lighting, whole-home audio, outdoor entertainment, security cameras, remote access, and whole-home WiFi."],
  ["Can outdoor entertainment areas be automated?", "Yes. Outdoor audio, lighting, pool and spa control, heaters, and entertainment systems can be integrated into one intuitive control experience."],
  ["Do motorized shades help protect interiors from sun exposure?", "Yes. Motorized shades can improve comfort, privacy, and UV protection while helping preserve furnishings, flooring, and artwork."],
  ["Do you work with builders and designers?", "Yes. Hive Style can coordinate with builders, architects, designers, electricians, and homeowners during new construction, remodels, and upgrades."]
];

export default function SmartHomeAutomationNewportBeachPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Smart Home Automation Newport Beach",
          description: metaDescription,
          provider: { "@type": "LocalBusiness", name: "Hive Style Smart Homes", areaServed: "Newport Beach, CA" },
          areaServed: "Newport Beach, CA",
          url: `${site.url}/smart-home-automation-newport-beach`
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
        <Image src="/images/Entertaining - wo text.png" alt="Luxury Newport Beach coastal smart home at dusk" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/66 to-black/18" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/18" />
        <div className="container-pad relative flex min-h-[660px] items-center py-20">
          <div className="max-w-[720px] text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Smart Home Automation Newport Beach</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] sm:text-6xl">
              Smart Home Automation Designed for
              <br />
              <span className="text-copper">Newport Beach Living</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              Elegant lighting, shades, audio, security, and whole-home control systems designed around the way Newport Beach homeowners live, entertain, and unwind.
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
        <div className="container-pad grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <h2 className="text-4xl font-semibold leading-tight text-ink">Technology That Enhances the Newport Beach Lifestyle</h2>
            <p className="mt-6 text-base leading-8 text-ink/68">
              Smart home technology should complement the way you live, whether you&apos;re hosting friends, managing a second home, or enjoying time on the water. We design systems that elevate every moment without adding complexity.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {lifestyle.map(([title, image, copy]) => (
              <article key={title} className="overflow-hidden rounded-lg border border-ink/10 bg-ivory shadow-soft">
                <div className="relative h-40">
                  <Image src={image} alt={title} fill sizes="(min-width: 1024px) 20vw, 46vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <IconCircle />
                  <h3 className="mt-4 text-sm font-semibold text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/62">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad">
          <div className="text-center">
            <h2 className="text-4xl font-semibold leading-tight text-ink">Beautifully Connected Smart Home Systems</h2>
            <p className="mt-4 text-base text-ink/62">Integrated solutions that work together effortlessly.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, image, href, copy]) => (
              <Link key={title} href={href} className="group overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft transition hover:-translate-y-1">
                <div className="relative h-48">
                  <Image src={image} alt={`${title} for Newport Beach homes`} fill sizes="(min-width: 1024px) 30vw, 48vw" className="object-cover transition duration-500 group-hover:scale-105" />
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
            <h2 className="text-4xl font-semibold leading-tight text-ink">Popular Smart Home Projects in Newport Beach</h2>
            <p className="mt-4 text-base text-ink/62">From the harbor to the hills, every home has unique needs.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {neighborhoods.map(([title, image, items]) => (
              <article key={title as string} className="relative overflow-hidden rounded-lg bg-ink text-white shadow-soft">
                <div className="relative h-56">
                  <Image src={image as string} alt={`${title} Newport Beach smart home`} fill sizes="(min-width: 1024px) 24vw, 48vw" className="object-cover opacity-75" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm font-semibold text-white/60">Common priorities:</p>
                  <ul className="mt-3 grid gap-1">
                    {(items as string[]).map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-white/78">
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

      <section className="grid gap-px bg-white lg:grid-cols-2">
        <FeaturePanel
          image="/images/Entertaining - wo text.png"
          title="Smart Technology for Outdoor Living"
          copy="Create the perfect ambiance for every occasion with outdoor audio, landscape lighting, heaters, pool and spa control, and systems that make indoor-outdoor living feel effortless."
          bullets={["Outdoor audio for patios, terraces, and entertaining spaces", "Landscape and architectural lighting", "Pool, spa, and outdoor comfort control", "Easy control from one intuitive app"]}
          href="/whole-home-audio-orange-county"
          cta="Learn More About Outdoor Entertainment"
        />
        <FeaturePanel
          image="/images/home-office - wo text.png"
          title="Stay Connected to Your Home Wherever You Are"
          copy="Whether you are across town or across the world, Hive Style helps Newport Beach homeowners stay connected to their properties with smart security, cameras, lighting schedules, alerts, and remote access."
          bullets={["Remote camera viewing", "Smart alerts and notifications", "Lighting schedules while away", "Security and access control", "Peace of mind for second homes and travel"]}
          href="/security-camera-installation-orange-county"
          cta="Learn More About Smart Security"
        />
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
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">Why Newport Beach Homeowners Choose Hive Style</h2>
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
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">Featured Newport Beach Smart Home Projects</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {projects.map(([title, image, copy]) => (
              <article key={title} className="overflow-hidden rounded-lg bg-white shadow-soft">
                <div className="relative h-52">
                  <Image src={image} alt={`${title} Newport Beach project`} fill sizes="(min-width: 1024px) 30vw, 92vw" className="object-cover" />
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
            <h2 className="text-3xl font-semibold text-ink">Proudly Serving Newport Beach Communities</h2>
            <p className="mt-4 text-base leading-8 text-ink/68">
              We design and install smart home systems in Newport Beach neighborhoods including Newport Harbor, Balboa Peninsula, Lido Isle, Eastbluff, Dover Shores, Harbor View Homes, Bayshores, Corona del Mar, and Newport Heights.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/smart-home-automation-irvine" className="text-sm font-semibold text-copper">Irvine</Link>
              <Link href="/smart-home-automation-newport-coast" className="text-sm font-semibold text-copper">Newport Coast</Link>
              <Link href="/smart-home-automation-cost-orange-county" className="text-sm font-semibold text-copper">Cost Guide</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink">
        <Image src="/images/Entertaining - wo text.png" alt="Newport Beach smart home final consultation background" fill sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/72 to-black/28" />
        <div className="container-pad relative grid gap-8 py-16 text-white lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold leading-tight">Let&apos;s Create a Smarter Home for the Way You Live</h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              Whether you&apos;re building a new waterfront residence, remodeling an existing home, or upgrading your favorite spaces, Hive Style helps Newport Beach homeowners create connected living experiences that feel elegant, intuitive, and effortless.
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

function FeaturePanel({ image, title, copy, bullets, href, cta }: { image: string; title: string; copy: string; bullets: string[]; href: string; cta: string }) {
  return (
    <article className="relative min-h-[460px] overflow-hidden bg-ink text-white">
      <Image src={image} alt={title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover opacity-48" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/86 via-black/66 to-black/24" />
      <div className="relative flex min-h-[460px] flex-col justify-center p-8 lg:p-12">
        <h2 className="text-3xl font-semibold leading-tight">{title}</h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-white/72">{copy}</p>
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
