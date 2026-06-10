import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageSchema } from "@/components/PageBlocks";
import { PageData } from "@/lib/pages";
import { site } from "@/lib/site";

const cards = [
  {
    title: "Whole-home coverage",
    copy: "Plan Wi-Fi around bedrooms, offices, patios, garages, guest areas, and the places where coverage usually fades."
  },
  {
    title: "Stable smart devices",
    copy: "Give cameras, lighting, shades, audio, control systems, and streaming the network foundation they depend on."
  },
  {
    title: "Managed support",
    copy: "Document the network, simplify vendor coordination, and create a clearer path for future updates or troubleshooting."
  }
];

export function WifiNetworkingPage({ page }: { page: PageData }) {
  return (
    <>
      <PageSchema page={page} />
      <section className="bg-white">
        <div className="container-pad py-14 sm:py-18 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.12em] text-copper">Home Wi-Fi & Networking</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">Reliable Home Wi-Fi for Every Room</h1>
            <p className="mt-5 text-lg leading-8 text-ink/68">
              Fast, stable coverage for work, streaming, cameras, guests, and smart-home systems.
            </p>
            <Link href={site.consultationPath} className="button-primary mt-8">
              Schedule a Consultation
            </Link>
          </div>

          <div className="relative mt-10 aspect-[16/8] min-h-[320px] overflow-hidden rounded-lg bg-ivory shadow-soft">
            {/* Replace with real Orange County home networking or Wi-Fi coverage photography when available. */}
            <Image
              src="/images/networking-wifi.jpg"
              alt="Home Wi-Fi networking coverage for an Orange County home"
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
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl">Tell us where Wi-Fi needs to feel effortless.</h2>
            <p className="mt-5 text-base leading-8 text-ink/68">
              Share the rooms, outdoor areas, devices, and reliability issues you want to improve.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
