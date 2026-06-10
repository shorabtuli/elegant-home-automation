import Image from "next/image";
import Link from "next/link";
import { PageData } from "@/lib/pages";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";

export function FaqSchema({ faqs, path }: { faqs: PageData["faqs"]; path: string }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer }
        })),
        url: `${site.url}${path}`
      }}
    />
  );
}

export function PageSchema({ page }: { page: PageData }) {
  const url = `${site.url}/${page.slug}`;
  const pageType = page.kind === "service" ? "Service" : "WebPage";

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": pageType,
          "@id": `${url}#${page.kind}`,
          name: page.h1,
          headline: page.h1,
          description: page.description,
          url,
          image: `${site.url}${page.image}`,
          provider: {
            "@type": "LocalBusiness",
            "@id": `${site.url}#business`,
            name: site.name,
            areaServed: site.serviceArea
          },
          areaServed: {
            "@type": "AdministrativeArea",
            name: page.kind === "location" ? page.eyebrow.replace(" Smart Home Automation", "") : site.serviceArea
          }
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: site.url
            },
            {
              "@type": "ListItem",
              position: 2,
              name: page.eyebrow,
              item: url
            }
          ]
        }}
      />
    </>
  );
}

export function PageHero({ page }: { page: PageData }) {
  return (
    <section className="bg-ivory">
      <div className="container-pad grid items-center gap-8 py-10 sm:gap-10 sm:py-14 lg:min-h-[620px] lg:grid-cols-[1fr_0.92fr] lg:py-16">
        <div>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.04] text-ink sm:text-5xl lg:text-6xl">{page.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70 sm:text-xl">{page.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={site.consultationPath} className="button-primary">Request a Consultation</Link>
            <Link href="/smart-home-budget-estimator" className="button-secondary">Review Budget Factors</Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft">
          <Image src={page.image} alt={page.imageAlt} fill sizes="(min-width: 1024px) 46vw, 92vw" className="object-cover" priority />
        </div>
      </div>
    </section>
  );
}

export function ContentSections({ page }: { page: PageData }) {
  return (
    <section className="section bg-white">
      <div className="container-pad">
        <div className="grid gap-5 md:grid-cols-3">
          {page.sections.map((section) => (
            <article key={section.title} className="rounded-lg border border-ink/10 bg-ivory p-6">
              <h2 className="text-xl font-semibold leading-tight text-ink">{section.title}</h2>
              <p className="mt-4 text-sm leading-7 text-ink/60">{section.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InternalLinks({ links }: { links: PageData["links"] }) {
  return (
    <section className="section bg-mist">
      <div className="container-pad grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-start">
        <div>
          <p className="eyebrow">Explore Next</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink">Helpful next steps for your home</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-lg border border-ink/10 bg-white p-5 text-sm font-semibold text-ink transition hover:border-cedar hover:text-cedar">
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ({ faqs }: { faqs: PageData["faqs"] }) {
  return (
    <section className="section bg-white">
      <div className="container-pad grid gap-10 lg:grid-cols-[0.7fr_1fr]">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink">Questions homeowners ask first</h2>
        </div>
        <div className="grid gap-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-lg border border-ink/10 bg-ivory p-5">
              <summary className="cursor-pointer text-base font-semibold text-ink">{faq.question}</summary>
              <p className="mt-3 text-sm leading-7 text-ink/60">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="section bg-cedar text-white">
      <div className="container-pad grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Orange County, CA</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">Bring order to the technology behind your home.</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/70">Request a focused consultation to review priorities, constraints, budget factors, and the right support model before work begins.</p>
        </div>
        <Link href={site.consultationPath} className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-ivory">
          Request a Consultation
        </Link>
      </div>
    </section>
  );
}
