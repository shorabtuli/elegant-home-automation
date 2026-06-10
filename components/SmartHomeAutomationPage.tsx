import Image from "next/image";
import Link from "next/link";
import { PageSchema } from "@/components/PageBlocks";
import { PageData } from "@/lib/pages";
import { site } from "@/lib/site";

const routines = [
  "Good morning scenes",
  "Leaving home",
  "Arriving home",
  "Movie night",
  "Entertaining guests"
];

export function SmartHomeAutomationPage({ page }: { page: PageData }) {
  return (
    <>
      <PageSchema page={page} />
      <section className="bg-white">
        <div className="container-pad py-12 sm:py-16 lg:py-20">
          <div className="relative min-h-[560px] overflow-hidden rounded-lg bg-ink shadow-soft sm:min-h-[640px]">
            {/* Replace with real smart home lifestyle photography when available. */}
            <Image
              src="/images/morning-routine-wo-text.png"
              alt="Smart home automation morning routine"
              fill
              sizes="(min-width: 1024px) 1200px, 92vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/28 to-black/5" />
            <div className="relative z-10 flex min-h-[560px] items-center px-6 py-16 text-white sm:min-h-[640px] sm:px-10 lg:px-14">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">Smart Home Automation</h1>
                <p className="mt-5 text-lg leading-8 text-white/78">
                  Technology that quietly handles the routines of daily life.
                </p>
                <Link
                  href={site.consultationPath}
                  className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition hover:bg-[#f5eadc]"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-pad grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">Everyday routines made automatic</h2>
            <p className="mt-5 text-base leading-8 text-ink/68">
              When the same actions happen every day, technology should handle them for you.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {routines.map((routine) => (
              <li key={routine} className="rounded-lg bg-ivory p-5 text-base font-semibold text-ink shadow-soft">
                {routine}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
