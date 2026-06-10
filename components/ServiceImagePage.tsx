import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageSchema } from "@/components/PageBlocks";
import { PageData } from "@/lib/pages";
import type { ServiceImagePageContent } from "@/lib/serviceImageContent";
import { site } from "@/lib/site";

export function ServiceImagePage({ page, content }: { page: PageData; content: ServiceImagePageContent }) {
  return (
    <>
      <PageSchema page={page} />
      <section className="bg-white">
        <div className="relative h-[520px] w-full overflow-hidden bg-ivory sm:h-[580px] lg:h-[640px]">
          {/* Replace with final project or lifestyle photography when available. */}
          <Image
            src={content.image}
            alt={content.imageAlt}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="container-pad py-12 sm:py-14 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.12em] text-copper">{content.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">{content.title}</h1>
            <p className="mt-5 text-lg leading-8 text-ink/68">{content.subtitle}</p>
            <Link href={site.consultationPath} className="button-primary mt-8">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-pad grid gap-5 md:grid-cols-3">
          {content.cards.map((card) => (
            <article key={card.title} className="rounded-lg bg-white p-6 shadow-soft">
              <h2 className="text-xl font-semibold text-ink">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-ink/62">{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      {content.trust && (
        <section className="section bg-white">
          <div className="container-pad grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-start">
            <div>
              {content.trust.eyebrow && (
                <p className="text-sm font-semibold tracking-[0.12em] text-copper">{content.trust.eyebrow}</p>
              )}
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl">{content.trust.heading}</h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-ink/68">{content.trust.copy}</p>
          </div>
        </section>
      )}

      <section className={content.trust ? "section bg-ivory" : "section bg-white"}>
        <div className="container-pad grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-[0.12em] text-copper">Schedule a consultation</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl">{content.contactHeading}</h2>
            <p className="mt-5 text-base leading-8 text-ink/68">{content.contactCopy}</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
