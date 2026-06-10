import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const metaDescription =
  "Learn what impacts smart home automation cost in Orange County, including lighting, shades, audio, security, networking, new construction, and existing home upgrades.";

export const metadata: Metadata = {
  title: "Smart Home Automation Cost Orange County | Hive Style Smart Homes",
  description: metaDescription,
  alternates: { canonical: "/smart-home-automation-cost-orange-county" },
  openGraph: {
    title: "Smart Home Automation Cost Orange County | Hive Style Smart Homes",
    description: metaDescription,
    url: "/smart-home-automation-cost-orange-county",
    type: "website",
    images: [{ url: "/images/Away Mode - wo text.png", alt: "Luxury Orange County smart home exterior" }]
  }
};

const trust = [
  "Local Orange County Experts",
  "Thoughtful Design, Premium Experience",
  "5-Star Customer Reviews",
  "Ongoing Support You Can Count On"
];

const factors = [
  ["Home Size", "Larger homes typically require more devices, networking infrastructure, and system design."],
  ["Number of Systems", "The more systems you integrate, including lighting, shades, audio, video, security, climate, and networking, the greater the investment."],
  ["Existing vs New Construction", "New construction offers more flexibility and easier infrastructure planning. Retrofits require different approaches."],
  ["Level of Integration", "One room or a few areas will cost less than a fully integrated whole-home system."],
  ["Design Goals", "Luxury experiences, architectural integration, and custom features require more planning and customization."]
];

const projects = [
  ["Smart Lighting", "/images/Entertaining - wo text.png", "/smart-lighting-control-orange-county", "Starts in the several-thousand-dollar range depending on scope.", "Programmable lighting, dimming, scenes, keypads, and schedules."],
  ["Motorized Shades", "/images/morning-routine - wo text.png", "/motorized-shades-orange-county", "Varies based on the number of windows and fabric selections.", "Automated privacy, UV protection, glare control, and comfort."],
  ["Whole Home Audio", "/images/home-office - wo text.png", "/whole-home-audio-orange-county", "Based on number of listening zones and speaker selections.", "Distributed music and intuitive control throughout your home."],
  ["Home Theater", "/images/movie night - wo text.png", "/home-theater-installation-orange-county", "Varies based on room design, display size, audio performance, and control.", "Immersive entertainment built around your space."],
  ["Security & Surveillance", "/images/Away Mode - wo text.png", "/security-camera-installation-orange-county", "Depends on cameras, coverage areas, and monitoring preferences.", "Smart security, remote access, and real-time alerts."],
  ["Whole Home WiFi", "/images/home-office - wo text.png", "/whole-home-wifi-installation-orange-county", "Based on home size, construction type, and performance goals.", "Reliable connectivity everywhere you need it."]
];

const scenarios = [
  ["Irvine Family Home", "/images/Away Mode - wo text.png", "Lighting, WiFi, Security", "Convenient daily living, reliable connectivity, and peace of mind."],
  ["Newport Beach Coastal Home", "/images/Entertaining - wo text.png", "Shades, Outdoor Audio, Lighting, Security", "Seamless indoor-outdoor living and effortless entertaining."],
  ["Newport Coast Estate", "/images/Away Mode - wo text.png", "Whole-Home Integration, Lighting, Audio, Climate, Security", "Luxury, simplicity, and total control in every moment."]
];

const faqs = [
  ["How much does smart home automation cost?", "Smart home automation cost depends on home size, number of systems, level of integration, construction type, and design goals. A focused project may start with lighting, shades, WiFi, audio, or security, while a full whole-home system requires more planning, equipment, programming, and support."],
  ["Can I automate my existing home?", "Yes. Many Orange County homeowners automate existing homes using a combination of wired, wireless, and hybrid solutions. Hive Style designs around your home's structure, your priorities, and the level of disruption you are comfortable with."],
  ["Do I need to automate the entire house?", "No. You can begin with the rooms or systems that matter most, such as lighting, shades, WiFi, security, or audio, and expand over time."],
  ["Can I start small and expand later?", "Yes. A thoughtful smart home plan can allow you to start with a focused project and add more systems later without rebuilding from scratch."],
  ["Does smart home automation increase home value?", "Smart home automation can improve how a home feels, functions, and presents to future buyers, especially when systems are well-designed, reliable, and easy to use."],
  ["What costs the most in a smart home?", "Larger cost drivers often include lighting control, motorized shades, whole-home audio, networking infrastructure, security coverage, and advanced programming."]
];

export default function SmartHomeAutomationCostOrangeCountyPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Smart Home Automation Cost Orange County",
          description: metaDescription,
          provider: { "@type": "LocalBusiness", name: "Hive Style Smart Homes", areaServed: "Orange County, CA" },
          areaServed: "Orange County, CA",
          url: `${site.url}/smart-home-automation-cost-orange-county`
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
        <Image src="/images/Away Mode - wo text.png" alt="Luxury Orange County home at dusk" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/68 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
        <div className="container-pad relative flex min-h-[660px] items-center py-20">
          <div className="max-w-[680px] text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Smart Home Automation Cost in Orange County</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] sm:text-6xl">
              How Much Does Smart Home Automation Cost in Orange County?
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              Every home is different. Explore the factors that influence smart home investment and what homeowners typically prioritize when designing a connected living experience.
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
        <div className="container-pad grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <h2 className="text-4xl font-semibold leading-tight text-ink">The Cost Depends on How You Want to Live</h2>
            <p className="mt-6 text-base leading-8 text-ink/68">
              Smart home automation is not a one-size-fits-all product. It is a collection of integrated systems designed around your lifestyle, priorities, and the way you live every day. Two homes with the same square footage can have very different investments depending on the systems selected, the level of integration, and the design goals.
            </p>
          </div>
          <div className="relative h-72 overflow-hidden rounded-lg shadow-soft lg:h-80">
            <Image src="/images/movie night - wo text.png" alt="Elegant automated living room interior" fill sizes="(min-width: 1024px) 44vw, 92vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad text-center">
          <h2 className="text-4xl font-semibold leading-tight text-ink">Five Factors That Influence Smart Home Investment</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {factors.map(([title, copy]) => (
              <article key={title} className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft">
                <IconCircle />
                <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/62">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-pad">
          <div className="text-center">
            <h2 className="text-4xl font-semibold leading-tight text-ink">Common Smart Home Projects</h2>
            <p className="mt-4 text-base text-ink/62">Investment ranges vary based on the size of your home, the systems you choose, and your design goals.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map(([title, image, href, investment, includes]) => (
              <Link key={title} href={href} className="group overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft transition hover:-translate-y-1">
                <div className="relative h-48">
                  <Image src={image} alt={`${title} smart home project`} fill sizes="(min-width: 1024px) 30vw, 48vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="relative p-6 pt-8">
                  <span className="absolute -top-5 left-5"><IconCircle /></span>
                  <h3 className="text-xl font-semibold text-ink">{title}</h3>
                  <p className="mt-4 text-sm font-semibold text-ink/80">Typical investment:</p>
                  <p className="mt-1 text-sm leading-6 text-ink/62">{investment}</p>
                  <p className="mt-4 text-sm font-semibold text-ink/80">Includes:</p>
                  <p className="mt-1 text-sm leading-6 text-ink/62">{includes}</p>
                </div>
              </Link>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-ink/60">
            These are general ranges. The best way to understand what is possible for your home is a personalized consultation.
          </p>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad">
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">Examples of How Homeowners Approach Smart Home Design</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {scenarios.map(([title, image, focus, outcome]) => (
              <article key={title} className="overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft">
                <div className="relative h-56">
                  <Image src={image} alt={`${title} smart home example`} fill sizes="(min-width: 1024px) 30vw, 92vw" className="object-cover" />
                </div>
                <div className="p-6 text-center">
                  <IconCircle />
                  <h3 className="mt-5 text-xl font-semibold text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/70"><strong>Focus:</strong> {focus}</p>
                  <p className="mt-2 text-sm leading-7 text-ink/62"><strong>Outcome:</strong> {outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-pad">
          <h2 className="text-center text-4xl font-semibold leading-tight text-ink">New Construction vs. Existing Homes</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <ComparePanel title="New Construction" copy="The right plan from the start makes everything easier." bullets={["Infrastructure planned before drywall", "More flexibility for system design", "Better performance and reliability", "Fewer costly changes later"]} />
            <ComparePanel title="Existing Homes" copy="You can upgrade without starting over. We bring smart living to your home." bullets={["Wireless and hybrid solutions", "Minimal disruption", "Phased upgrades", "Designed to blend beautifully"]} />
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
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
          <div>
            <div className="relative h-80 overflow-hidden rounded-lg shadow-soft">
              <Image src="/images/Entertaining - wo text.png" alt="Orange County smart home service area" fill sizes="(min-width: 1024px) 48vw, 92vw" className="object-cover" />
            </div>
            <p className="mt-5 text-base leading-8 text-ink/68">
              Hive Style helps homeowners throughout Orange County understand the right smart home investment for their goals, whether they are building, remodeling, or upgrading an existing home. We serve Irvine, Newport Beach, Newport Coast, Corona del Mar, Laguna Beach, Costa Mesa, Dana Point, Mission Viejo, Tustin, Laguna Niguel, and surrounding communities.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/smart-home-automation-irvine" className="text-sm font-semibold text-copper">Irvine</Link>
              <Link href="/smart-home-automation-newport-beach" className="text-sm font-semibold text-copper">Newport Beach</Link>
              <Link href="/smart-home-installation-orange-county" className="text-sm font-semibold text-copper">Smart Home Installation Orange County</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink">
        <Image src="/images/Away Mode - wo text.png" alt="Smart home consultation background" fill sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/72 to-black/28" />
        <div className="container-pad relative grid gap-8 py-16 text-white lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold leading-tight">Let&apos;s Explore What&apos;s Possible for Your Home</h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              Whether you&apos;re budgeting for a future project or ready to begin designing a fully integrated home, we&apos;ll help you understand the options and develop a plan that fits your goals.
            </p>
            <Link href="/" className="mt-5 inline-block text-sm font-semibold text-copper">Return to Home</Link>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={site.consultationPath} className="button-primary">Schedule Your Consultation</Link>
            <Link href="/projects" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">View Smart Home Projects</Link>
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

function ComparePanel({ title, copy, bullets }: { title: string; copy: string; bullets: string[] }) {
  return (
    <article className="rounded-2xl bg-ivory p-7 shadow-soft sm:p-8">
      <h3 className="text-2xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-base leading-7 text-ink/68">{copy}</p>
      <ul className="mt-5 grid gap-3">
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
