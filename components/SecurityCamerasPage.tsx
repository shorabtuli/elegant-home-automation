import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageSchema } from "@/components/PageBlocks";
import { PageData } from "@/lib/pages";
import { site } from "@/lib/site";

const cards = [
  {
    title: "Useful camera placement",
    copy: "Cover entries, driveways, gates, side yards, deliveries, and outdoor spaces with a clear purpose for each view."
  },
  {
    title: "Smart alerts",
    copy: "Plan alerts around what matters so the system feels helpful instead of noisy."
  },
  {
    title: "Remote access",
    copy: "Coordinate cameras, network readiness, recording, and access so visibility is easier to manage away from home."
  }
];

export function SecurityCamerasPage({ page }: { page: PageData }) {
  return (
    <>
      <PageSchema page={page} />
      <section className="bg-white">
        <div className="container-pad py-14 sm:py-18 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.12em] text-copper">Smart Security & Cameras</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">Smart Security Cameras for Peace of Mind</h1>
            <p className="mt-5 text-lg leading-8 text-ink/68">
              Useful camera coverage, alerts, and access control designed around how your home actually works.
            </p>
            <Link href={site.consultationPath} className="button-primary mt-8">
              Schedule a Consultation
            </Link>
          </div>

          <div className="relative mt-10 aspect-[16/8] min-h-[320px] overflow-hidden rounded-lg bg-ivory shadow-soft">
            {/* Replace with real security camera or home entry photography when available. */}
            <Image
              src="/images/smart-security.jpg"
              alt="Smart security cameras planned for useful home visibility"
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
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl">Tell us what you want to see clearly.</h2>
            <p className="mt-5 text-base leading-8 text-ink/68">
              Share the entries, gates, driveways, cameras, and alerts you want to simplify.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
