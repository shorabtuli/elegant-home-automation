import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const metaDescription =
  "Smart home planning before construction in Orange County. Hive Style helps homeowners, builders, architects, and designers plan lighting, shades, WiFi, audio, security, and automation before walls close.";

export const metadata: Metadata = {
  title: "Smart Home Planning Before Construction | Hive Style Smart Homes",
  description: metaDescription,
  alternates: { canonical: "/smart-home-planning-before-construction" },
  openGraph: {
    title: "Smart Home Planning Before Construction | Hive Style Smart Homes",
    description: metaDescription,
    url: "/smart-home-planning-before-construction",
    type: "website",
    images: [{ url: "/images/Away Mode - wo text.png", alt: "Orange County new construction home planned for smart home technology" }]
  }
};

const trust = [
  "New Construction Technology Planning",
  "Design-First Smart Home Expertise",
  "Builder & Architect Collaboration",
  "Orange County Smart Home Specialists"
];

const planningBenefits = [
  ["Better Design", "/images/Entertaining - wo text.png", "Technology is integrated beautifully from the start."],
  ["Lower Costs", "/images/morning-routine - wo text.png", "Avoid future rework, retrofits, and hidden costs."],
  ["Greater Flexibility", "/images/Away Mode - wo text.png", "Infrastructure supports today's needs and tomorrow's ideas."],
  ["Better Experiences", "/images/home-office - wo text.png", "Systems work together seamlessly for your life."]
];

const decisions = [
  ["Smart Lighting Control", "Keypads, scenes, and automation planned perfectly."],
  ["Motorized Shades", "Power locations and control planned early."],
  ["Whole Home WiFi", "Enterprise-grade network infrastructure throughout."],
  ["Whole Home Audio", "Speaker locations and wiring for every room."],
  ["Home Theater", "Room design, acoustics, and wiring for performance."],
  ["Security & Surveillance", "Camera placement, access control, and smart integration."],
  ["Smart Home Automation", "Centralized control that connects everything."]
];

const mistakes = [
  ["No Wiring Pathways", "Limited options and difficult installations."],
  ["Poor WiFi Coverage", "Dead zones and unreliable performance."],
  ["Missing Power Locations", "No power for shades, displays, keypads, or equipment."],
  ["Incomplete Lighting Plans", "Poor lighting control and missed opportunities."],
  ["Limited Future Expansion", "Systems that cannot grow with your needs."],
  ["Expensive Retrofits", "Higher costs and more disruption later on."]
];

const process = [
  ["Vision & Lifestyle Discovery", "We learn how you live and what matters most."],
  ["Technology Planning", "We define systems, priorities, and the right approach."],
  ["Infrastructure Planning", "We plan wiring, networking, and power with your builder."],
  ["Design Coordination", "We collaborate with architects, designers, and builders."],
  ["Installation Preparation", "We ensure everything is ready for a smooth build process."],
  ["Future Growth Planning", "We create a roadmap that grows with your home and lifestyle."]
];

const localPlanning = [
  ["Newport Coast", "/images/Away Mode - wo text.png", "Custom homes designed for luxury living and long-term technology integration."],
  ["Newport Beach", "/images/Entertaining - wo text.png", "Indoor-outdoor living and entertainment planned perfectly from the start."],
  ["Irvine", "/images/home-office - wo text.png", "Family-focused technology that makes everyday life simpler and more connected."],
  ["Laguna Beach", "/images/Entertaining - wo text.png", "Coastal views deserve beautiful lighting, shades, and privacy control."],
  ["Corona del Mar", "/images/morning-routine - wo text.png", "Architectural details, seamless automation, and elegant entertainment."]
];

const wishList = [
  "Prewire for stronger WiFi and outdoor coverage.",
  "Plan shade power before window treatments are selected.",
  "Coordinate lighting scenes before finish selections are final.",
  "Reserve space for equipment, ventilation, and service access."
];

const why = [
  ["Design-First Thinking", "Technology should enhance your home, not compete with it."],
  ["Builder Collaboration", "We work seamlessly with your construction team."],
  ["Future-Proof Planning", "Infrastructure and systems are designed to grow with you."],
  ["Luxury Home Expertise", "We specialize in high-end homes and complex environments."],
  ["Local Experience", "We know Orange County homes, architects, and building styles."],
  ["Ongoing Support", "We are here long after installation for total peace of mind."]
];

const projects = [
  ["Newport Coast Custom Estate", "/images/Away Mode - wo text.png", "Technology planned before framing for a truly integrated luxury experience."],
  ["Irvine New Construction Residence", "/images/Entertaining - wo text.png", "Family-focused automation designed for comfort, security, and convenience."],
  ["Corona del Mar Coastal Home", "/images/morning-routine - wo text.png", "Lighting, shades, audio, and automation designed from the ground up."]
];

const faqs = [
  ["When should I start planning my smart home?", "Ideally, smart home planning begins before framing, electrical rough-in, and low-voltage wiring. Early planning gives your builder and design team clearer direction."],
  ["What should be prewired before construction?", "Common planning areas include WiFi access points, network wiring, speakers, cameras, shades, keypads, displays, equipment locations, gates, doorbells, and outdoor entertainment areas."],
  ["How much does smart home planning cost?", "Planning cost depends on home size, systems involved, design complexity, coordination needs, and whether the project includes design documentation or installation."],
  ["Do you work with architects and builders?", "Yes. Hive Style can coordinate with builders, architects, designers, electricians, and low-voltage teams so technology is planned around the home, not added as an afterthought."],
  ["Can technology be added later if needed?", "Yes, but it is usually cleaner and more flexible to plan infrastructure early. Proper pathways, power, and network locations can make future upgrades easier."],
  ["Is smart home planning only for large custom homes?", "No. Any new build or major remodel can benefit from thoughtful technology planning, especially when lighting, WiFi, security, shades, and entertainment matter."]
];

export default function SmartHomePlanningBeforeConstructionPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Smart Home Planning Before Construction",
          description: metaDescription,
          provider: { "@type": "LocalBusiness", name: "Hive Style Smart Homes", areaServed: "Orange County, CA" },
          areaServed: "Orange County, CA",
          url: `${site.url}/smart-home-planning-before-construction`
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
        <Image src="/images/Away Mode - wo text.png" alt="Luxury Orange County home planned for smart home technology before construction" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/58 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/16" />
        <div className="container-pad relative flex min-h-[660px] items-center py-20">
          <div className="max-w-[700px] text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Smart Home Planning Before Construction</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] sm:text-6xl">Plan Your Smart Home Before Construction Begins</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              The smartest technology decisions happen before walls go up. Hive Style helps Orange County homeowners plan lighting, shades, networking, audio, security, and automation before construction begins.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={site.consultationPath} className="button-primary">Schedule a Planning Consultation</Link>
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
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">The Best Smart Homes Are Planned, Not Added Later</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {planningBenefits.map(([title, image, copy]) => (
              <article key={title} className="overflow-hidden rounded-lg border border-ink/10 bg-ivory shadow-soft">
                <div className="relative h-44">
                  <Image src={image} alt={`${title} smart home planning`} fill sizes="(min-width: 1024px) 24vw, 48vw" className="object-cover" />
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
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">Technology Decisions That Matter Most</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
            {decisions.map(([title, copy]) => (
              <article key={title} className="rounded-lg border border-ink/10 bg-white p-5 text-center shadow-soft">
                <IconCircle />
                <h3 className="mt-4 text-sm font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/62">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink text-white">
        <div className="container-pad grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-center">
          <div>
            <h2 className="text-center text-4xl font-semibold leading-tight">Common Mistakes We See After Construction</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
              {mistakes.map(([title, copy]) => (
                <article key={title} className="rounded-lg border border-white/10 bg-white/5 p-5 text-center">
                  <IconCircle />
                  <h3 className="mt-4 text-sm font-semibold">{title}</h3>
                  <p className="mt-3 text-xs leading-5 text-white/65">{copy}</p>
                </article>
              ))}
            </div>
          </div>
          <article className="relative min-h-80 overflow-hidden rounded-lg p-7 shadow-soft">
            <Image src="/images/Away Mode - wo text.png" alt="Planning smart home technology before construction avoids retrofit issues" fill sizes="(min-width: 1024px) 36vw, 92vw" className="object-cover opacity-55" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/84 to-black/20" />
            <div className="relative mt-28">
              <h3 className="text-2xl font-semibold">A little more planning now saves decisions later.</h3>
              <p className="mt-4 text-sm leading-7 text-white/70">The goal is not more technology. It is a cleaner home, better performance, and fewer compromises after move-in.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-pad">
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">A Thoughtful Planning Process</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {process.map(([title, copy], index) => (
              <article key={title} className="rounded-lg border border-ink/10 bg-ivory p-5 text-center">
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-copper text-sm font-semibold text-white">{index + 1}</div>
                <h3 className="mt-4 text-sm font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-ink/62">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad">
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">Smart Home Planning Across Orange County</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {localPlanning.map(([title, image, copy]) => (
              <article key={title} className="overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft">
                <div className="relative h-44">
                  <Image src={image} alt={`${title} smart home planning`} fill sizes="(min-width: 1024px) 18vw, 48vw" className="object-cover" />
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
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div>
            <h2 className="text-4xl font-semibold leading-tight">Planning Questions Worth Asking Early</h2>
            <p className="mt-5 text-base leading-8 text-white/70">
              Before construction begins, a few clear decisions can make the finished home feel calmer, cleaner, and easier to live in.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {wishList.map((item) => (
              <article key={item} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <p className="text-sm leading-7 text-white/76">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-pad">
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">Why Homeowners Choose Hive Style</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {why.map(([title, copy]) => (
              <article key={title} className="rounded-lg border border-ink/10 bg-ivory p-5 text-center">
                <IconCircle />
                <h3 className="mt-4 text-sm font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-ink/62">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad">
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">Featured Planning Projects</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {projects.map(([title, image, copy]) => (
              <article key={title} className="relative overflow-hidden rounded-lg bg-ink text-white shadow-soft">
                <div className="relative h-64">
                  <Image src={image} alt={`${title} smart home planning project`} fill sizes="(min-width: 1024px) 30vw, 92vw" className="object-cover opacity-72" />
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
              We help homeowners in Irvine, Newport Beach, Newport Coast, Laguna Beach, Corona del Mar, Costa Mesa, Dana Point, Mission Viejo, Tustin, Laguna Niguel, and surrounding communities build smarter homes from the start.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink">
        <Image src="/images/Away Mode - wo text.png" alt="Smart home planning before construction consultation background" fill sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/72 to-black/28" />
        <div className="container-pad relative grid gap-8 py-16 text-white lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold leading-tight">The Best Time to Plan Your Smart Home Is Before Construction Begins</h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              Whether you are building a custom home, planning a major remodel, or working with an architect and builder, Hive Style can help create a technology plan that delivers exceptional experiences for years to come.
            </p>
            <Link href="/" className="mt-5 inline-block text-sm font-semibold text-copper">Return to Home</Link>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={site.consultationPath} className="button-primary">Schedule a Planning Consultation</Link>
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
