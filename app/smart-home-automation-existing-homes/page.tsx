import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const metaDescription =
  "Smart home automation for existing Orange County homes. Hive Style designs thoughtful upgrades for lighting, shades, WiFi, security, audio, and automation with minimal disruption.";

export const metadata: Metadata = {
  title: "Smart Home Automation for Existing Homes | Hive Style Smart Homes",
  description: metaDescription,
  alternates: { canonical: "/smart-home-automation-existing-homes" },
  openGraph: {
    title: "Smart Home Automation for Existing Homes | Hive Style Smart Homes",
    description: metaDescription,
    url: "/smart-home-automation-existing-homes",
    type: "website",
    images: [{ url: "/images/Away Mode - wo text.png", alt: "Existing Orange County home with smart home automation" }]
  }
};

const trust = [
  "Designed for Existing Homes",
  "Minimal Disruption Installations",
  "Orange County Smart Home Experts",
  "Professional Support & Service"
];

const myths = [
  ["My house is too old.", "Many homes can be upgraded successfully."],
  ["Everything must be rewired.", "Many solutions use wireless or hybrid technologies."],
  ["It will create a huge construction project.", "Most projects can be completed with minimal disruption."],
  ["I need to automate the entire home.", "Many homeowners start with one room or one system."]
];

const upgrades = [
  ["Smart Lighting", "/images/smart-lighting.jpg", "Scenes, dimming, and whole-home control."],
  ["Motorized Shades", "/images/morning-routine - wo text.png", "Comfort, privacy, and effortless sunlight control."],
  ["Whole Home Audio", "/images/audio-video.jpg", "Music in every room, inside and out."],
  ["Home Theater", "/images/home-theater.jpg", "Cinema-quality entertainment at home."],
  ["Security & Surveillance", "/images/smart-security.jpg", "Protection, awareness, and peace of mind."],
  ["Whole Home WiFi", "/images/home-office - wo text.png", "Reliable connectivity for every device, everywhere."]
];

const principles = [
  ["Minimal Disruption", "We protect your home and your daily routine."],
  ["Clean Installation", "Technology is hidden from view and blends beautifully."],
  ["Future Flexibility", "Start small and expand over time as your needs grow."],
  ["Ease of Use", "Simple, intuitive control for everyone in the home."]
];

const localUpgrades = [
  ["Irvine", "/images/Entertaining - wo text.png", "Convenience, lighting, WiFi, and security for active family living."],
  ["Newport Beach", "/images/Away Mode - wo text.png", "Shades, audio, and vacation monitoring for coastal peace of mind."],
  ["Newport Coast", "/images/Away Mode - wo text.png", "Whole-home integration and luxury upgrades designed for elegance."],
  ["Laguna Beach", "/images/Entertaining - wo text.png", "Privacy, lighting, and comfort designed for coastal living."],
  ["Corona del Mar", "/images/morning-routine - wo text.png", "Indoor-outdoor living enhancements for beautiful seaside homes."]
];

const growthSteps = [
  ["Start with Lighting", "Create immediate comfort with scenes and dimming."],
  ["Add Shades", "Improve privacy, glare control, and daily convenience."],
  ["Improve WiFi", "Build the foundation for reliable smart home performance."],
  ["Add Security", "Increase awareness with cameras, locks, and access control."],
  ["Expand to Whole Home Automation", "Connect systems into simple, thoughtful routines."]
];

const process = [
  ["Discover", "We understand your goals and how you live in your home."],
  ["Design", "We create a custom plan that fits your home and lifestyle."],
  ["Install", "Our team installs with care, precision, and minimal disruption."],
  ["Program", "We configure your systems, scenes, and automation."],
  ["Support", "We are here long after installation for service and updates."]
];

const why = [
  ["Design-First Thinking", "Technology should feel natural in the home."],
  ["Clean Installations", "We respect finishes, furnishings, and daily routines."],
  ["Minimal Disruption", "Existing homes deserve careful planning and clean work."],
  ["Personalized Recommendations", "We recommend what fits your home, not what you do not need."],
  ["Local Expertise", "We understand Orange County homes, layouts, and expectations."],
  ["Ongoing Support", "We remain available as your home technology evolves."]
];

const transformations = [
  ["Irvine Family Residence", "/images/Entertaining - wo text.png", "Lighting scenes and WiFi upgrades simplified everyday living for the whole family."],
  ["Newport Beach Home", "/images/Away Mode - wo text.png", "Motorized shades and security integration created comfort, privacy, and peace of mind."],
  ["Newport Coast Estate", "/images/Away Mode - wo text.png", "A phased approach delivered a fully integrated smart home without major reconstruction."]
];

const faqs = [
  ["Can I automate an existing home?", "Yes. Many existing Orange County homes can be upgraded with smart lighting, shades, WiFi, security, audio, and automation using thoughtful wired, wireless, or hybrid solutions."],
  ["Do smart home systems require new wiring?", "Not always. Some systems benefit from wiring, but many existing homes can use wireless or hybrid technologies depending on the goals, construction, and reliability requirements."],
  ["Will walls need to be opened?", "Sometimes, but not always. Hive Style looks for clean, practical installation paths and recommends the least disruptive approach that still supports performance."],
  ["Can I start with one room?", "Yes. Many homeowners begin with lighting, WiFi, shades, security, or a media room, then expand over time."],
  ["How disruptive is installation?", "Disruption depends on the scope of work. A consultation helps identify the cleanest path, expected timeline, and coordination needed before work begins."],
  ["Can existing systems be upgraded instead of replaced?", "Often, yes. We evaluate current equipment, wiring, controls, and network performance before recommending what should stay, improve, or be replaced."]
];

export default function SmartHomeAutomationExistingHomesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Smart Home Automation for Existing Homes",
          description: metaDescription,
          provider: { "@type": "LocalBusiness", name: "Hive Style Smart Homes", areaServed: "Orange County, CA" },
          areaServed: "Orange County, CA",
          url: `${site.url}/smart-home-automation-existing-homes`
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
        <Image src="/images/Away Mode - wo text.png" alt="Existing Orange County home upgraded with smart home automation" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/62 to-black/12" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/16" />
        <div className="container-pad relative flex min-h-[660px] items-center py-20">
          <div className="max-w-[690px] text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Smart Home Automation for Existing Homes</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] sm:text-6xl">Smart Home Automation for Existing Homes</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              You do not need a new build or major remodel to enjoy the benefits of smart home technology. Hive Style designs elegant solutions for homes that are already lived in and loved.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={site.consultationPath} className="button-primary">Schedule a Consultation</Link>
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
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">You Don&apos;t Need to Start Over</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {myths.map(([myth, reality]) => (
              <article key={myth} className="rounded-lg border border-ink/10 bg-ivory p-6 shadow-soft">
                <IconCircle />
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-copper">Myth</p>
                <h3 className="mt-2 text-base font-semibold text-ink">{myth}</h3>
                <div className="my-5 h-px bg-ink/10" />
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-copper">Reality</p>
                <p className="mt-2 text-sm leading-7 text-ink/62">{reality}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad">
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">Popular Smart Home Upgrades</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {upgrades.map(([title, image, copy]) => (
              <article key={title} className="overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft">
                <div className="relative h-40">
                  <Image src={image} alt={`${title} upgrade for existing homes`} fill sizes="(min-width: 1024px) 16vw, 48vw" className="object-cover" />
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

      <section className="section bg-white">
        <div className="container-pad grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <h2 className="text-4xl font-semibold leading-tight text-ink">Designed Around Real Homes and Real Life</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map(([title, copy]) => (
                <article key={title} className="rounded-lg border border-ink/10 bg-ivory p-5 text-center">
                  <IconCircle />
                  <h3 className="mt-4 text-sm font-semibold text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/62">{copy}</p>
                </article>
              ))}
            </div>
          </div>
          <article className="relative min-h-80 overflow-hidden rounded-lg bg-ink p-8 text-white shadow-soft">
            <Image src="/images/Away Mode - wo text.png" alt="Existing home automation upgrade" fill sizes="(min-width: 1024px) 45vw, 92vw" className="object-cover opacity-45" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/86 to-black/28" />
            <div className="relative">
              <h2 className="text-3xl font-semibold leading-tight">Technology Has Changed</h2>
              <p className="mt-5 text-base leading-8 text-white/75">
                Today&apos;s smart home solutions use wireless communication, hybrid systems, battery-powered devices, and strategic wiring only where it adds value. The result is beautiful technology with minimal disruption.
              </p>
              <Link href="/smart-home-installation-orange-county" className="mt-6 inline-block text-sm font-semibold uppercase tracking-[0.12em] text-copper">See what is possible</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad">
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">Smart Home Upgrades Across Orange County</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {localUpgrades.map(([title, image, copy]) => (
              <article key={title} className="overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft">
                <div className="relative h-44">
                  <Image src={image} alt={`${title} existing home automation`} fill sizes="(min-width: 1024px) 18vw, 48vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/62">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink text-white">
        <div className="container-pad grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-4xl font-semibold leading-tight">Start Small or Think Bigger</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-5">
              {growthSteps.map(([title, copy]) => (
                <article key={title} className="rounded-lg border border-white/10 bg-white/5 p-5 text-center">
                  <IconCircle />
                  <h3 className="mt-4 text-sm font-semibold">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-white/65">{copy}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="relative h-80 overflow-hidden rounded-lg shadow-soft">
            <Image src="/images/home-office - wo text.png" alt="Smart home app control in an existing home" fill sizes="(min-width: 1024px) 42vw, 92vw" className="object-cover opacity-82" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-pad grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-center text-4xl font-semibold leading-tight text-ink">A Thoughtful Approach to Existing Homes</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-5">
              {process.map(([title, copy], index) => (
                <article key={title} className="rounded-lg border border-ink/10 bg-ivory p-5 text-center">
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
                <article key={title} className="rounded-lg border border-ink/10 bg-ivory p-5 text-center">
                  <IconCircle />
                  <h3 className="mt-4 text-sm font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-ink/62">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad">
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">Featured Existing Home Transformations</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {transformations.map(([title, image, copy]) => (
              <article key={title} className="relative overflow-hidden rounded-lg bg-ink text-white shadow-soft">
                <div className="relative h-64">
                  <Image src={image} alt={`${title} existing home transformation`} fill sizes="(min-width: 1024px) 30vw, 92vw" className="object-cover opacity-72" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/84 via-black/22 to-transparent" />
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
            <h2 className="text-3xl font-semibold text-ink">Proudly Serving Orange County</h2>
            <p className="mt-4 text-base leading-8 text-ink/68">
              We help homeowners in Irvine, Newport Beach, Newport Coast, Laguna Beach, Corona del Mar, Costa Mesa, Dana Point, Mission Viejo, Tustin, Laguna Niguel, and surrounding communities upgrade the homes they already love.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink">
        <Image src="/images/Away Mode - wo text.png" alt="Existing home smart automation consultation background" fill sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/72 to-black/28" />
        <div className="container-pad relative grid gap-8 py-16 text-white lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold leading-tight">Your Dream Smart Home May Already Be Closer Than You Think</h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              Whether you want to improve comfort, convenience, entertainment, security, or everyday living, Hive Style can help transform your existing home with thoughtfully integrated technology.
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
  return <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-copper" />;
}

function IconCircle() {
  return (
    <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-copper/25 bg-white text-copper shadow-[0_10px_24px_rgba(17,17,17,0.08)]">
      ✦
    </span>
  );
}
