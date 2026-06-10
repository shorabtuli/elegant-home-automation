import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageSchema } from "@/components/PageBlocks";
import { PageData } from "@/lib/pages";
import { site } from "@/lib/site";

const cards = [
  {
    title: "Fast Help When Needed",
    copy: "Get assistance when systems need updates, adjustments, or troubleshooting."
  },
  {
    title: "Ongoing Technology Planning",
    copy: "As your needs change, we'll help ensure your technology evolves with your home."
  },
  {
    title: "One Trusted Partner",
    copy: "Work with a single team that understands your home's systems and history."
  }
];

export function ManagedSupportPage({ page }: { page: PageData }) {
  return (
    <>
      <PageSchema page={page} />
      <section className="bg-white">
        <div className="container-pad py-14 sm:py-18 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.12em] text-copper">Managed Support</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">Support After Installation</h1>
            <p className="mt-5 text-lg leading-8 text-ink/68">
              When questions come up or technology changes, we're here to help.
            </p>
            <Link href={site.consultationPath} className="button-primary mt-8">
              Schedule a Consultation
            </Link>
          </div>

          <div className="relative mt-10 aspect-[16/8] min-h-[320px] overflow-hidden rounded-lg bg-ivory shadow-soft">
            {/* Replace with real support consultation, homeowner app review, or technology planning meeting photography when available. */}
            <Image
              src="/images/home-office-wo-text.png"
              alt="Home technology support consultation"
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
        <div className="container-pad grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold tracking-[0.12em] text-copper">Trust and continuity</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl">What support actually means</h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-ink/68">
            Technology should remain simple after installation. Our support plans are designed to keep systems running smoothly and give homeowners a reliable team to call when questions arise.
          </p>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-[0.12em] text-copper">Schedule a consultation</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl">Tell us where support would help most.</h2>
            <p className="mt-5 text-base leading-8 text-ink/68">
              Share the systems, questions, or recurring frustrations you want handled more calmly.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
