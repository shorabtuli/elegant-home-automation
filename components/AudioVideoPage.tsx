import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageSchema } from "@/components/PageBlocks";
import { PageData } from "@/lib/pages";
import { site } from "@/lib/site";

const cards = [
  {
    title: "Whole-Home Music",
    copy: "Enjoy music throughout the home with simple control from your phone, keypad, or voice assistant."
  },
  {
    title: "Better Movie Nights",
    copy: "Create an immersive viewing experience with thoughtfully designed audio and video systems."
  },
  {
    title: "Indoor & Outdoor Entertainment",
    copy: "Extend entertainment beyond the living room with systems designed for patios, outdoor spaces, and gatherings."
  }
];

export function AudioVideoPage({ page }: { page: PageData }) {
  return (
    <>
      <PageSchema page={page} />
      <section className="bg-white">
        <div className="container-pad py-14 sm:py-18 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.12em] text-copper">Home Audio Video & Media Rooms</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">Entertainment Designed Around How You Live</h1>
            <p className="mt-5 text-lg leading-8 text-ink/68">
              Enjoy movies, music, sports, and gatherings with audio and video systems that are simple to use and beautifully integrated into your home.
            </p>
            <Link href={site.consultationPath} className="button-primary mt-8">
              Schedule a Consultation
            </Link>
          </div>

          <div className="relative mt-10 aspect-[16/8] min-h-[320px] overflow-hidden rounded-lg bg-ivory shadow-soft">
            {/* Replace with real media room, living room, or outdoor entertainment photography when available. */}
            <Image
              src="/images/home-theater.jpg"
              alt="Luxury home theater and entertainment space"
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
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl">Tell us how you want to enjoy the home.</h2>
            <p className="mt-5 text-base leading-8 text-ink/68">
              Share the rooms, media spaces, patios, and everyday entertainment moments you want to simplify.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
