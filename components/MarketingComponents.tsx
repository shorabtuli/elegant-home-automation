"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type ReactNode } from "react";
import { ContactForm } from "@/components/ContactForm";
import { locationNav, serviceNav, site } from "@/lib/site";

type LinkItem = { title: string; href: string };

export function CTAButton({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "dark" | "light" }) {
  const className =
    variant === "primary"
      ? "button-primary"
      : variant === "light"
        ? "inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-ivory"
        : "button-secondary";
  return <Link href={href} className={className}>{children}</Link>;
}

export function TopUtilityBar() {
  return (
    <div className="hidden border-b border-ink/10 bg-white text-xs text-ink/62 sm:block">
      <div className="container-pad flex min-h-9 items-center justify-between">
        <span>Serving Orange County, CA</span>
        <div className="flex gap-5">
          <span>{site.phone}</span>
          <span>{site.email}</span>
        </div>
      </div>
    </div>
  );
}

export function ServicesDropdown({ label = "Services", items = serviceNav }: { label?: string; items?: LinkItem[] }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 125);
  };

  return (
    <div className="group relative" onMouseEnter={showMenu} onMouseLeave={scheduleClose}>
      <button type="button" className="flex items-center gap-1 py-2 text-sm font-semibold text-ink/74 transition hover:text-copper">
        {label}
        <span className="text-xs">v</span>
      </button>
      <div className="absolute left-0 top-full h-4 w-full bg-transparent" aria-hidden="true" />
      <div className={`nav-menu group-hover:visible group-hover:opacity-100 ${open ? "visible opacity-100" : "invisible opacity-0"}`}>
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="block rounded-md px-3 py-2 text-sm font-medium text-ink/72 transition hover:bg-ivory hover:text-copper">
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function HeroBanner({
  eyebrow,
  title,
  copy,
  image,
  imageAlt,
  primary = "Start Your Project",
  secondary = "Schedule a Call"
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  primary?: string;
  secondary?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 geo-pattern opacity-80" />
      <div className="container-pad relative grid gap-9 py-12 lg:min-h-[680px] lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12 lg:py-16">
        <div className="max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 font-display text-5xl font-black uppercase leading-[0.95] text-ink sm:text-6xl lg:text-[4.9rem]">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/68">{copy}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href={site.consultationPath}>{primary}</CTAButton>
            <CTAButton href={site.consultationPath} variant="dark">{secondary}</CTAButton>
          </div>
        </div>
        <div className="relative aspect-[16/11] overflow-hidden rounded-lg bg-ivory shadow-soft lg:min-h-[520px]">
          {/* Replace this placeholder with real bright Orange County smart-home lifestyle imagery. */}
          <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 52vw, 92vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-tr from-copper/20 via-transparent to-white/10" />
        </div>
      </div>
    </section>
  );
}

export function VideoIntroSection({ title, copy, image = "/images/movie-night-wo-text.png" }: { title: string; copy: string; image?: string }) {
  return (
    <section className="section bg-white">
      <div className="container-pad grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="max-w-xl">
          <p className="eyebrow">Watch the Experience</p>
          <h2 className="section-title mt-4">{title}</h2>
          <p className="section-copy mt-5">{copy}</p>
          <div className="mt-7">
            <CTAButton href={site.consultationPath}>Start Your Project</CTAButton>
          </div>
        </div>
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-ink shadow-soft">
          {/* Replace this with an embedded video or polished video still when available. */}
          <Image src={image} alt="Smart home video placeholder" fill sizes="(min-width: 1024px) 56vw, 92vw" className="object-cover opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/92 shadow-soft">
              <span className="ml-1 h-0 w-0 border-y-[13px] border-l-[20px] border-y-transparent border-l-copper" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceCardGrid({ services }: { services: Array<{ title: string; href: string; copy: string; image: string }> }) {
  return (
    <section className="section bg-ivory">
      <div className="container-pad">
        <p className="eyebrow">Smart Home Solutions</p>
        <h2 className="section-title mt-4">Designed around the way your home lives.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.href} href={service.href} className="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-soft">
              <div className="relative aspect-[16/11] bg-stoneglass">
                {/* Replace service placeholders with real installed-system photography. */}
                <Image src={service.image} alt={`${service.title} placeholder`} fill sizes="(min-width: 1024px) 30vw, 90vw" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-[1.65rem] font-black uppercase leading-none">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-ink/62">{service.copy}</p>
                <span className="mt-5 inline-block text-sm font-semibold text-copper">Learn More</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MasonryGallery({ items }: { items: Array<{ title: string; image: string }> }) {
  return (
    <section className="section bg-white">
      <div className="container-pad">
        <p className="eyebrow">Visual Scene Gallery</p>
        <h2 className="section-title mt-4">See the moments smart home planning can simplify.</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => (
            <figure key={item.title} className="overflow-hidden rounded-lg bg-ivory shadow-soft">
              <div className="relative aspect-[4/5]">
                {/* Replace gallery placeholders with real project or lifestyle photography. */}
                <Image src={item.image} alt={`${item.title} smart home scene`} fill sizes="(min-width: 1024px) 18vw, (min-width: 640px) 45vw, 90vw" className="object-cover" />
              </div>
              <figcaption className="p-4 text-sm font-semibold text-ink/78">{item.title}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-4 text-sm text-ink/52">Placeholder scene imagery shown for launch planning. Replace with client-approved visuals when available.</p>
      </div>
    </section>
  );
}

export function AlternatingFeatureBlock({ image, title, copy, cta = "Start Your Project" }: { image: string; title: string; copy: string; cta?: string }) {
  return (
    <section className="section bg-ivory">
      <div className="container-pad grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8">
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-stoneglass shadow-soft">
          {/* Replace with real lifestyle imagery. */}
          <Image src={image} alt={`${title} placeholder`} fill sizes="(min-width: 1024px) 52vw, 92vw" className="object-cover" />
        </div>
        <div className="rounded-lg bg-white p-7 shadow-soft lg:p-10">
          <p className="eyebrow">Lifestyle Automation</p>
          <h2 className="section-title mt-4">{title}</h2>
          <p className="section-copy mt-5">{copy}</p>
          <div className="mt-7">
            <CTAButton href={site.consultationPath}>{cta}</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialPlaceholderSection() {
  return (
    <section className="section bg-white">
      <div className="container-pad">
        <div className="rounded-lg border border-ink/10 bg-ivory p-8 text-center shadow-soft sm:p-10">
          <p className="eyebrow">Trust & Project Gallery</p>
          <h2 className="mt-4 font-display text-4xl font-black uppercase leading-none text-ink">Client Stories Coming Soon</h2>
          <div className="mx-auto mt-7 grid max-w-4xl items-stretch gap-4 md:grid-cols-3">
            {["Project Gallery Coming Soon", "Early consultations now available in Orange County", "Verified reviews will be added with client approval"].map((item) => (
              <div key={item} className="flex min-h-24 items-center justify-center rounded-lg bg-white p-5 text-sm font-semibold leading-6 text-ink/72">{item}</div>
            ))}
          </div>
          <div className="mt-8">
            <CTAButton href={site.consultationPath}>Schedule a Consultation</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProcessSteps() {
  const steps = [
    ["Consultation", "Understand routines, frustrations, rooms, vendors, and priorities."],
    ["Design Plan", "Map scenes, systems, wiring needs, equipment locations, and budget factors."],
    ["Installation Coordination", "Clarify responsibilities with installers, electricians, shade vendors, AV, and security teams."],
    ["Ongoing Support", "Document the system and define a clear support path for future changes."]
  ];
  return (
    <section className="section bg-ivory">
      <div className="container-pad">
        <p className="eyebrow">Our Process</p>
        <h2 className="section-title mt-4">A clearer path from idea to everyday use.</h2>
        <div className="mt-10 grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([title, copy], index) => (
            <article key={title} className="min-h-64 rounded-lg bg-white p-6 shadow-soft">
              <div className="text-sm font-black text-copper">0{index + 1}</div>
              <h3 className="mt-4 font-display text-2xl font-black uppercase">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/62">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LeadFormSection({ image = "/images/home-office-wo-text.png" }: { image?: string }) {
  return (
    <section className="section bg-white">
      <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="max-w-xl">
          <p className="eyebrow">Start the Conversation</p>
          <h2 className="section-title mt-4">Tell us what you want your home to do.</h2>
          <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-lg bg-ink shadow-soft">
            {/* Replace with lead-form lifestyle image or intro video. */}
            <Image src={image} alt="Consultation image placeholder" fill sizes="(min-width: 1024px) 42vw, 92vw" className="object-cover opacity-80" />
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export function CertificationPlaceholderStrip() {
  return (
    <section className="border-y border-ink/10 bg-ivory">
      <div className="container-pad grid gap-4 py-6 text-sm font-semibold text-ink/62 md:grid-cols-2">
        <span>Vendor training and partner badges coming soon.</span>
        <span>Licensed contractor partnerships available where required.</span>
      </div>
    </section>
  );
}

export function RelatedServices({ currentHref }: { currentHref: string }) {
  return (
    <section className="section bg-ivory">
      <div className="container-pad">
        <p className="eyebrow">Related Services</p>
        <h2 className="section-title mt-4">Plan the full experience.</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {serviceNav.filter((item) => item.href !== currentHref).slice(0, 4).map((item) => (
            <Link key={item.href} href={item.href} className="rounded-lg bg-white p-5 text-sm font-semibold shadow-soft transition hover:text-copper">{item.title}</Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export { locationNav, serviceNav };
