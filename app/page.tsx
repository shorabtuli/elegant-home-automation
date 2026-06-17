import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { HomeSceneHero } from "@/components/HomeSceneHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Elegant Home Automation | Orange County Smart Home Design",
  description: "Premium smart home automation consultation for Orange County homes, including lighting, shades, security, Wi-Fi, audio/video, home theater, and managed support.",
  alternates: { canonical: "/" },
  keywords: [
    "Orange County smart home automation",
    "luxury smart home design Orange County",
    "smart lighting Orange County",
    "home Wi-Fi Orange County",
    "managed smart home support"
  ],
  openGraph: {
    title: "Elegant Home Automation | Orange County Smart Home Design",
    description: "Calm, consultation-first smart home technology planning for Orange County homeowners.",
    images: [{ url: "/images/morning-routine-wo-text.png", alt: "Smart home morning routine" }]
  }
};

const services = [
  { title: "Home Automation", href: "/smart-home-automation-orange-county", image: "/images/morning-routine - wo text.png", copy: "Scenes and routines that make the home easier to use.", icon: "home" },
  { title: "Smart Lighting", href: "/smart-lighting-control-orange-county", image: "/images/Entertaining - wo text.png", copy: "Cleaner control for evenings, arrivals, entertaining, and outdoor living.", icon: "light" },
  { title: "Motorized Shades", href: "/motorized-shades-orange-county", image: "/images/morning-routine - wo text.png", copy: "Privacy, glare, and natural light planned around daily life.", icon: "shades" },
  { title: "Security Cameras", href: "/smart-security-cameras", image: "/images/Away Mode - wo text.png", copy: "Camera, entry, and away-mode planning without unnecessary noise.", icon: "security" },
  { title: "Audio Video", href: "/home-audio-video-media-rooms", image: "/images/movie night - wo text.png", copy: "Music, media, and entertainment spaces with simple control.", icon: "audio" },
  { title: "Wi-Fi & Networking", href: "/whole-home-wifi-installation-orange-county", image: "/images/home-office - wo text.png", copy: "Reliable Wi-Fi for work, cameras, streaming, and smart systems.", icon: "wifi" }
];

const cities = [
  "Irvine",
  "Newport Beach",
  "Newport Coast",
  "Costa Mesa",
  "Anaheim Hills",
  "Laguna Beach",
  "Tustin",
  "Shady Canyon"
];

export default function Home() {
  return (
    <>
      <HomeSceneHero />

      <section id="services" className="section bg-ivory">
        <div className="container-pad">
          <div className="max-w-5xl">
            <p className="text-sm font-semibold tracking-[0.12em] text-copper">Services</p>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Smart Home Automation Solutions Designed for Modern Orange County Living.
            </h2>
          </div>
          <div className="mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-soft transition hover:-translate-y-1">
                <div className="relative h-56 bg-stoneglass">
                  {/* Replace service placeholders with real Orange County project or lifestyle imagery. */}
                  <Image src={service.image} alt={`${service.title} smart home service`} fill sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 92vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="relative flex flex-1 flex-col p-5 pt-7">
                  <ServiceIconBadge icon={service.icon} />
                  <h3 className="text-xl font-semibold text-ink">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-ink/62">{service.copy}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 max-w-5xl rounded-lg border border-ink/10 bg-white p-6 shadow-soft sm:p-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Smart Home Guides</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-ink sm:text-3xl">
                Orange County smart home planning resources.
              </h2>
              <p className="mt-4 text-base leading-7 text-ink/62">
                Explore local guides for installation planning, whole-home audio, motorized shades, home networking, and choosing a thoughtful automation partner.
              </p>
              <p className="mt-5 text-base leading-7 text-ink/62">
                Read smart home insights from Elegant Home Automation.
                {" "}
                <Link href="/blog" className="font-semibold text-copper transition hover:text-ink">
                  Visit the Blog →
                </Link>
              </p>
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/blog/best-home-automation-company-orange-county" className="group rounded-lg border border-ink/10 bg-ivory p-5 transition hover:-translate-y-1 hover:border-copper/30">
                <span className="text-base font-semibold text-copper transition group-hover:text-ink">
                  Best Home Automation Company Orange County
                </span>
                <p className="mt-2 text-sm leading-6 text-ink/62">
                  See what to look for in a premium Orange County home automation partner.
                </p>
              </Link>
              <Link href="/smart-home-installation-orange-county" className="group rounded-lg border border-ink/10 bg-ivory p-5 transition hover:-translate-y-1 hover:border-copper/30">
                <span className="text-base font-semibold text-copper transition group-hover:text-ink">
                  Smart Home Installation
                </span>
                <p className="mt-2 text-sm leading-6 text-ink/62">
                  See how design, installation, programming, and support come together in an Orange County smart home.
                </p>
              </Link>
              <Link href="/blog/control4-installer-near-me" className="group rounded-lg border border-ink/10 bg-ivory p-5 transition hover:-translate-y-1 hover:border-copper/30">
                <span className="text-base font-semibold text-copper transition group-hover:text-ink">
                  Control4 Installer Near Me
                </span>
                <p className="mt-2 text-sm leading-6 text-ink/62">
                  Learn how Control4 can connect lighting, shades, audio, security, climate, and entertainment.
                </p>
              </Link>
              <Link href="/blog/smart-home-irvine" className="group rounded-lg border border-ink/10 bg-ivory p-5 transition hover:-translate-y-1 hover:border-copper/30">
                <span className="text-base font-semibold text-copper transition group-hover:text-ink">
                  Smart Home Irvine
                </span>
                <p className="mt-2 text-sm leading-6 text-ink/62">
                  Explore premium smart home design for Irvine living, from lighting and shades to automation.
                </p>
              </Link>
              <Link href="/blog/luxury-smart-home-setup" className="group rounded-lg border border-ink/10 bg-ivory p-5 transition hover:-translate-y-1 hover:border-copper/30">
                <span className="text-base font-semibold text-copper transition group-hover:text-ink">
                  Luxury Smart Home Setup
                </span>
                <p className="mt-2 text-sm leading-6 text-ink/62">
                  See how luxury home technology can be planned around architecture, comfort, and lifestyle.
                </p>
              </Link>
              <Link href="/smart-home-automation-cost-orange-county" className="group rounded-lg border border-ink/10 bg-ivory p-5 transition hover:-translate-y-1 hover:border-copper/30">
                <span className="text-base font-semibold text-copper transition group-hover:text-ink">
                  Smart Home Automation Cost Guide
                </span>
                <p className="mt-2 text-sm leading-6 text-ink/62">
                  Understand what impacts investment, from lighting and shades to whole-home integration.
                </p>
              </Link>
              <Link href="/blog/smart-home-installer-irvine" className="group rounded-lg border border-ink/10 bg-ivory p-5 transition hover:-translate-y-1 hover:border-copper/30">
                <span className="text-base font-semibold text-copper transition group-hover:text-ink">
                  Smart Home Installer Irvine
                </span>
                <p className="mt-2 text-sm leading-6 text-ink/62">
                  Explore smart home installation planning for Irvine homes, remodels, and connected living.
                </p>
              </Link>
              <Link href="/blog/whole-home-audio-irvine" className="group rounded-lg border border-ink/10 bg-ivory p-5 transition hover:-translate-y-1 hover:border-copper/30">
                <span className="text-base font-semibold text-copper transition group-hover:text-ink">
                  Whole Home Audio Irvine
                </span>
                <p className="mt-2 text-sm leading-6 text-ink/62">
                  Learn how premium multi-room audio can be planned around Irvine homes and daily living.
                </p>
              </Link>
              <Link href="/blog/motorized-shades-newport-beach" className="group rounded-lg border border-ink/10 bg-ivory p-5 transition hover:-translate-y-1 hover:border-copper/30">
                <span className="text-base font-semibold text-copper transition group-hover:text-ink">
                  Motorized Shades Newport Beach
                </span>
                <p className="mt-2 text-sm leading-6 text-ink/62">
                  Explore automated shade planning for Newport Beach coastal homes, views, privacy, and comfort.
                </p>
              </Link>
              <Link href="/blog/home-network-setup-for-large-homes" className="group rounded-lg border border-ink/10 bg-ivory p-5 transition hover:-translate-y-1 hover:border-copper/30">
                <span className="text-base font-semibold text-copper transition group-hover:text-ink">
                  Home Network Setup for Large Homes
                </span>
                <p className="mt-2 text-sm leading-6 text-ink/62">
                  See how stronger home networks support large Orange County homes, outdoor spaces, and smart systems.
                </p>
              </Link>
              <Link href="/blog/smart-lighting-installer" className="group rounded-lg border border-ink/10 bg-ivory p-5 transition hover:-translate-y-1 hover:border-copper/30">
                <span className="text-base font-semibold text-copper transition group-hover:text-ink">
                  Smart Lighting Installer
                </span>
                <p className="mt-2 text-sm leading-6 text-ink/62">
                  Learn how thoughtful lighting control creates better ambiance, comfort, and smart home scenes.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f2ea] py-20 sm:py-24 lg:py-28">
        <div className="container-pad">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_0.85fr] lg:items-center lg:gap-16">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Serving Orange County</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                Smart Home Automation
                <br />
                Throughout Orange County
              </h2>
              <p className="mt-7 text-lg leading-8 text-ink/68">
                Elegant Home Automation designs and installs integrated smart home systems throughout Orange County,
                including Irvine, Newport Beach, Newport Coast, Costa Mesa, Anaheim Hills, Laguna Beach, Tustin, Shady
                Canyon, and surrounding communities. Explore
                {" "}
                <Link href="/smart-home-automation-irvine" className="font-semibold text-copper">
                  smart home automation for Irvine homeowners
                </Link>
                {" "}
                and
                {" "}
                <Link href="/blog/smart-home-installer-irvine" className="font-semibold text-copper">
                  smart home installer services in Irvine
                </Link>
                ,
                {" "}
                <Link href="/smart-home-automation-newport-beach" className="font-semibold text-copper">
                  smart home automation for Newport Beach homeowners
                </Link>
                .
              </p>
              <p className="mt-6 text-base leading-8 text-ink/68">
                From <Link href="/smart-lighting-control-orange-county" className="font-semibold text-copper">lighting control</Link> and motorized shades to networking, security cameras, media rooms, and whole-home
                automation, we create technology experiences designed around how you live.
                {" "}
                <Link href="/smart-home-automation-orange-county" className="font-semibold text-copper">
                  Learn more about our smart home automation services in Orange County
                </Link>
                ,
                {" "}
                <Link href="/smart-home-installation-orange-county" className="font-semibold text-copper">
                  learn more about our smart home installation services in Orange County
                </Link>
                ,
                {" "}
                <Link href="/smart-home-automation-existing-homes" className="font-semibold text-copper">
                  smart home automation for existing homes
                </Link>
                ,
                {" "}
                <Link href="/smart-home-planning-before-construction" className="font-semibold text-copper">
                  smart home planning before construction
                </Link>
                ,
                {" "}
                <Link href="/whole-home-wifi-installation-orange-county" className="font-semibold text-copper">
                  whole home WiFi installation in Orange County
                </Link>
                ,
                {" "}
                <Link href="/motorized-shades-orange-county" className="font-semibold text-copper">
                  motorized shades in Orange County
                </Link>
                {" "}
                or
                {" "}
                <Link href="/smart-home-automation-cost-orange-county" className="font-semibold text-copper">
                  learn what impacts smart home automation cost in Orange County
                </Link>
                .
              </p>
            </div>
            <div className="rounded-2xl border border-white/70 bg-white/86 p-6 shadow-[0_24px_80px_rgba(31,24,16,0.09)] sm:p-8 lg:p-9">
              <div className="grid gap-4 sm:grid-cols-2">
                {cities.map((city) => (
                  <div key={city} className="flex items-center gap-3 text-base font-semibold text-ink/78">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-copper text-sm font-bold text-white shadow-[0_10px_24px_rgba(201,121,43,0.18)]">
                      ✓
                    </span>
                    <span>{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative min-h-[400px] overflow-hidden bg-cover bg-center bg-no-repeat sm:min-h-[440px]"
        style={{ backgroundImage: "url('/images/Away Mode - wo text.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/72 to-black/34" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-transparent to-black/20" />
        <div className="container-pad relative flex min-h-[400px] items-center py-16 sm:min-h-[440px] sm:py-20">
          <div className="max-w-[520px]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">READY TO GET STARTED?</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Let&apos;s design a smarter,
              <br />
              more connected home.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/82">Schedule a consultation and discover what&apos;s possible.</p>
            <Link href={site.consultationPath} className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-copper px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition hover:bg-copper/90">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceIconBadge({ icon }: { icon: string }) {
  return (
    <span className="absolute -top-5 left-4 flex h-10 w-10 items-center justify-center rounded-full border border-copper/25 bg-white text-copper shadow-[0_10px_24px_rgba(17,17,17,0.14)]">
      <span className="h-5 w-5">{serviceIcons[icon]}</span>
    </span>
  );
}

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-5 w-5"
};

const serviceIcons: Record<string, ReactNode> = {
  home: (
    <svg {...iconProps} aria-hidden="true">
      <path d="M3.5 11.5 12 4l8.5 7.5" />
      <path d="M5.5 10.5V20h13v-9.5" />
      <path d="M9.5 20v-5h5v5" />
      <path d="M16.5 7.5v-2h2v3.8" />
    </svg>
  ),
  light: (
    <svg {...iconProps} aria-hidden="true">
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M8.5 14.5c-1.3-1-2-2.4-2-4A5.5 5.5 0 0 1 12 5a5.5 5.5 0 0 1 5.5 5.5c0 1.6-.7 3-2 4-.8.6-1.2 1.4-1.3 2.5H9.8c-.1-1.1-.5-1.9-1.3-2.5Z" />
      <path d="M12 2v1.2" />
      <path d="m19 5-1 .9" />
      <path d="M5 5l1 .9" />
    </svg>
  ),
  shades: (
    <svg {...iconProps} aria-hidden="true">
      <path d="M4.5 5.5h15v13h-15z" />
      <path d="M4.5 10h15" />
      <path d="M8 5.5v13" />
      <path d="M12 5.5v13" />
      <path d="M16 5.5v13" />
    </svg>
  ),
  security: (
    <svg {...iconProps} aria-hidden="true">
      <path d="M12 21s7-3.6 7-10V6l-7-3-7 3v5c0 6.4 7 10 7 10Z" />
      <path d="M9.5 11.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z" />
      <path d="M14.2 13.2 16 15" />
    </svg>
  ),
  audio: (
    <svg {...iconProps} aria-hidden="true">
      <path d="M5 9.5h3.5L13 6v12l-4.5-3.5H5z" />
      <path d="M16 9c.8.8 1.2 1.8 1.2 3S16.8 14.2 16 15" />
      <path d="M18.5 6.5A7.7 7.7 0 0 1 21 12a7.7 7.7 0 0 1-2.5 5.5" />
    </svg>
  ),
  wifi: (
    <svg {...iconProps} aria-hidden="true">
      <path d="M4.5 9.5a11 11 0 0 1 15 0" />
      <path d="M7.5 12.5a6.8 6.8 0 0 1 9 0" />
      <path d="M10.2 15.4a2.7 2.7 0 0 1 3.6 0" />
      <path d="M12 19h.01" />
    </svg>
  )
};
