import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const metaDescription =
  "Smart lighting control in Orange County by Hive Style. Premium lighting scenes, dimming, automation, and whole-home control designed for comfort, architecture, and everyday living.";

export const metadata: Metadata = {
  title: "Smart Lighting Control Orange County | Hive Style Smart Homes",
  description: metaDescription,
  alternates: { canonical: "/smart-lighting-control-orange-county" },
  openGraph: {
    title: "Smart Lighting Control Orange County | Hive Style Smart Homes",
    description: metaDescription,
    url: "/smart-lighting-control-orange-county",
    type: "website",
    images: [{ url: "/images/Entertaining - wo text.png", alt: "Warm smart lighting in an Orange County luxury home" }]
  }
};

const trust = [
  "Orange County Lighting Experts",
  "Design-First Lighting Solutions",
  "Elegant Control & Automation",
  "Professional Installation & Support"
];

const momentCards = [
  ["Relax", "/images/smart-lighting.jpg", "Create warm, inviting spaces to unwind and recharge."],
  ["Entertain", "/images/Entertaining - wo text.png", "Set the perfect atmosphere for gatherings big or small."],
  ["Focus", "/images/home-office - wo text.png", "Support productivity and daily routines with the right light."],
  ["Welcome Home", "/images/Away Mode - wo text.png", "Arrive to a beautifully lit home that feels just right."]
];

const possibilities = [
  ["Lighting Scenes", "Set the perfect mood instantly."],
  ["Whole Home Control", "Control every room from one app or keypad."],
  ["Automated Schedules", "Lights adjust automatically throughout the day."],
  ["Voice Control", "Hands-free convenience with voice commands."],
  ["Energy Efficiency", "Reduce usage and save energy effortlessly."],
  ["Smart Home Integration", "Works seamlessly with shades, security, and other systems."]
];

const roomCards = [
  ["Living Rooms", "/images/Entertaining - wo text.png", "Comfort and ambiance for everyday living."],
  ["Kitchens", "/images/smart-lighting.jpg", "Task lighting and beautiful entertaining."],
  ["Dining Rooms", "/images/Entertaining - wo text.png", "Elevated dining experiences for every occasion."],
  ["Bedrooms", "/images/morning-routine - wo text.png", "Relaxing, dimmable lighting for better rest."],
  ["Home Offices", "/images/home-office - wo text.png", "Focus and productivity with layered light."],
  ["Outdoor Spaces", "/images/Away Mode - wo text.png", "Landscape and outdoor lighting for beauty and safety."]
];

const scenes = [
  ["Good Morning", "/images/morning-routine - wo text.png", "Gradual lighting that eases your day."],
  ["Entertain", "/images/Entertaining - wo text.png", "Set the mood for every gathering."],
  ["Dining Night", "/images/movie night - wo text.png", "Dim the lights for the perfect evening."],
  ["Goodnight", "/images/Away Mode - wo text.png", "Turn everything off with one touch."],
  ["Vacation", "/images/Away Mode - wo text.png", "Automated lighting while you are away for peace of mind."]
];

const process = [
  ["Discover", "We learn how you live and what matters most to you."],
  ["Design", "We create a custom lighting plan tailored to your home."],
  ["Program", "We program scenes, schedules, and controls."],
  ["Install", "Our team installs with precision and minimal disruption."],
  ["Support", "We are here long after installation for service and updates."]
];

const why = [
  ["Design-First Thinking", "Lighting should enhance your home, not complicate it."],
  ["Beautiful Environments", "Scenes are planned around architecture, comfort, and daily life."],
  ["Personalized Scenes", "Every family and every home deserves a thoughtful approach."],
  ["Premium Products", "Reliable dimmers, controls, and lighting systems selected for performance."],
  ["Local Expertise", "We understand Orange County homes, remodels, and coastal living."],
  ["Ongoing Support", "We remain available long after installation is complete."]
];

const projects = [
  ["Newport Beach Coastal Residence", "/images/Away Mode - wo text.png", "Layered lighting brings this coastal home to life from sunset to late-night entertaining."],
  ["Irvine Family Home", "/images/Entertaining - wo text.png", "Whole-home lighting scenes simplify everyday living for the entire family."],
  ["Newport Coast Estate", "/images/Away Mode - wo text.png", "Architectural lighting highlights every detail and creates a truly elevated experience."]
];

const faqs = [
  ["What is smart lighting control?", "Smart lighting control lets you manage dimming, scenes, schedules, and room-by-room lighting from keypads, apps, voice assistants, or a whole-home automation system."],
  ["How much does smart lighting control cost?", "Cost depends on the number of rooms, dimmers, fixtures, keypads, wiring conditions, programming needs, and the level of integration with other smart home systems."],
  ["Can I control lights from my phone?", "Yes. Smart lighting can usually be controlled from a phone, tablet, keypad, schedule, voice assistant, or integrated automation scene."],
  ["Can lighting be automated?", "Yes. Lighting can automatically adjust by time of day, occupancy, sunrise, sunset, arrival, departure, entertaining, or security scenes."],
  ["Does smart lighting save energy?", "It can. Dimming, schedules, occupancy behavior, and better control can reduce unnecessary lighting use and improve comfort."],
  ["Can smart lighting be added to an existing Orange County home?", "Yes. Many existing homes can support smart lighting upgrades with careful planning, the right devices, and a design that respects the home."]
];

export default function SmartLightingControlOrangeCountyPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Smart Lighting Control Orange County",
          description: metaDescription,
          provider: { "@type": "LocalBusiness", name: "Hive Style Smart Homes", areaServed: "Orange County, CA" },
          areaServed: "Orange County, CA",
          url: `${site.url}/smart-lighting-control-orange-county`
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
        <Image src="/images/Entertaining - wo text.png" alt="Smart lighting control in a luxury Orange County home" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/58 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/52 via-transparent to-black/16" />
        <div className="container-pad relative flex min-h-[660px] items-center py-20">
          <div className="max-w-[720px] text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Smart Lighting Control Orange County</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] sm:text-6xl">Transform the Way Your Home Feels With Smart Lighting</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              Beautiful lighting for every moment. Intelligent control that enhances comfort, highlights architecture, and elevates everyday living throughout your home.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={site.consultationPath} className="button-primary">Schedule a Lighting Consultation</Link>
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
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">Lighting Shapes Every Moment</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {momentCards.map(([title, image, copy]) => (
              <article key={title} className="overflow-hidden rounded-lg border border-ink/10 bg-ivory shadow-soft">
                <div className="relative h-48">
                  <Image src={image} alt={`${title} smart lighting scene`} fill sizes="(min-width: 1024px) 24vw, 48vw" className="object-cover" />
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
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">One Touch. Endless Possibilities.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {possibilities.map(([title, copy]) => (
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
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">Designed Around How You Live</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {roomCards.map(([title, image, copy]) => (
              <article key={title} className="overflow-hidden rounded-lg border border-ink/10 bg-ivory shadow-soft">
                <div className="relative h-40">
                  <Image src={image} alt={`${title} smart lighting control`} fill sizes="(min-width: 1024px) 16vw, 48vw" className="object-cover" />
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

      <section className="section bg-ink text-white">
        <div className="container-pad">
          <h2 className="text-center text-4xl font-semibold leading-tight">Create the Perfect Scene for Every Moment</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {scenes.map(([title, image, copy]) => (
              <article key={title} className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-soft">
                <div className="relative h-60">
                  <Image src={image} alt={`${title} lighting scene`} fill sizes="(min-width: 1024px) 18vw, 48vw" className="object-cover opacity-76" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/24 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <IconCircle />
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/75">{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-center text-4xl font-semibold leading-tight text-ink">A Thoughtful Approach to Lighting Design</h2>
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
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">Featured Lighting Projects</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {projects.map(([title, image, copy]) => (
              <article key={title} className="relative overflow-hidden rounded-lg bg-ink text-white shadow-soft">
                <div className="relative h-64">
                  <Image src={image} alt={`${title} lighting project`} fill sizes="(min-width: 1024px) 30vw, 92vw" className="object-cover opacity-72" />
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
              We design and install smart lighting control systems in Irvine, Newport Beach, Newport Coast, Laguna Beach, Corona del Mar, Costa Mesa, Dana Point, Mission Viejo, Tustin, Laguna Niguel, and surrounding Orange County communities.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink">
        <Image src="/images/Away Mode - wo text.png" alt="Smart lighting consultation background" fill sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/72 to-black/28" />
        <div className="container-pad relative grid gap-8 py-16 text-white lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold leading-tight">Let&apos;s Transform the Way Your Home Feels</h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              Whether you are building a new home, remodeling, or enhancing your favorite spaces, Hive Style can design a lighting control system that creates beautiful environments for every moment of the day.
            </p>
            <Link href="/" className="mt-5 inline-block text-sm font-semibold text-copper">Return to Home</Link>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={site.consultationPath} className="button-primary">Schedule a Lighting Consultation</Link>
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
