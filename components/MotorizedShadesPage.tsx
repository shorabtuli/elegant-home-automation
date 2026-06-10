import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageSchema } from "@/components/PageBlocks";
import { PageData } from "@/lib/pages";
import { site } from "@/lib/site";

const cards = [
  {
    title: "Privacy When Needed",
    copy: "Adjust automatically throughout the day to maintain privacy without blocking natural light."
  },
  {
    title: "Reduce Heat & Glare",
    copy: "Help manage sunlight, improve comfort, and protect furnishings from excessive UV exposure."
  },
  {
    title: "Automated Routines",
    copy: "Open and close automatically based on schedules, sunrise, sunset, or room activity."
  }
];

export function MotorizedShadesPage({ page }: { page: PageData }) {
  return (
    <>
      <PageSchema page={page} />
      <section className="bg-white">
        <div className="container-pad py-14 sm:py-18 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.12em] text-copper">Motorized Shades</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">Motorized Shades That Work Quietly in the Background</h1>
            <p className="mt-5 text-lg leading-8 text-ink/68">
              Automatically manage sunlight, privacy, glare, and comfort throughout the day with shades designed around how you live.
            </p>
            <Link href={site.consultationPath} className="button-primary mt-8">
              Schedule a Consultation
            </Link>
          </div>

          <div className="relative mt-10 aspect-[16/8] min-h-[320px] overflow-hidden rounded-lg bg-ivory shadow-soft">
            {/* Replace with real living room, large-window, or daylight shade photography when available. */}
            <Image
              src="/images/smart-shades.jpg"
              alt="Modern living room with motorized shades and natural daylight"
              fill
              sizes="(min-width: 1024px) 1200px, 92vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title} className="rounded-lg bg-white p-6 shadow-soft">
              <h2 className="text-xl font-semibold text-ink">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-ink/62">{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-[0.12em] text-copper">Schedule a consultation</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl">Tell us where light needs to feel easier.</h2>
            <p className="mt-5 text-base leading-8 text-ink/68">
              Share the rooms, window conditions, privacy needs, and routines you want shades to support.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
