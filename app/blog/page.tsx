import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Smart Home Automation Blog | Elegant Home Automation Orange County" },
  description:
    "Read smart home automation insights from Elegant Home Automation, serving Orange County homeowners with lighting, shades, Wi-Fi, security, audio/video, and whole-home technology guidance.",
  alternates: { canonical: "/blog" },
  keywords: [
    "smart home automation blog",
    "smart home automation Orange County",
    "smart home technology Orange County",
    "home automation Irvine",
    "smart lighting Newport Beach",
    "motorized shades Orange County",
    "home Wi-Fi networking Orange County"
  ],
  openGraph: {
    title: "Smart Home Automation Blog | Elegant Home Automation Orange County",
    description:
      "Smart home automation insights for Orange County homeowners, including lighting, shades, Wi-Fi, security, audio/video, and whole-home technology.",
    url: "/blog",
    type: "website",
    images: [{ url: "/images/Away Mode - wo text.png", alt: "Luxury Orange County smart home exterior at night" }]
  }
};

const featuredArticles = [
  {
    category: "Design & Inspiration",
    title: "Inside the Modern Smart Home: Designing for Beauty and Brilliance",
    excerpt: "How thoughtful design and smart technology work together to elevate everyday living.",
    image: "/images/morning-routine - wo text.png",
    alt: "Warm luxury bedroom with smart shades and lighting"
  },
  {
    category: "Technology",
    title: "The Ultimate Guide to Smart Home Lighting",
    excerpt: "Layered lighting control for every moment, mood, and environment.",
    image: "/images/movie night - wo text.png",
    alt: "Luxury media room with warm smart lighting"
  },
  {
    category: "Lifestyle",
    title: "Entertain Seamlessly: Smart Solutions for Effortless Hosting",
    excerpt: "Create unforgettable experiences with integrated audio, lighting, and climate control.",
    image: "/images/Entertaining - wo text.png",
    alt: "Luxury evening home exterior designed for entertaining"
  }
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

export default function BlogPage() {
  return (
    <>
      <section className="relative min-h-[560px] overflow-hidden bg-ink text-white">
        <Image
          src="/images/Away Mode - wo text.png"
          alt="Luxury Orange County smart home exterior with warm architectural lighting"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/86 via-black/48 to-black/8" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/42 via-transparent to-black/12" />
        <div className="container-pad relative flex min-h-[560px] items-center py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-copper">Blog</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.03] sm:text-6xl">
              Smart Home Insights for a Smarter Lifestyle.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/82">
              Expert advice, design inspiration, and the latest in smart home technology.
            </p>
            <Link href="#featured-articles" className="button-primary mt-9">
              Explore Articles
            </Link>
          </div>
        </div>
      </section>

      <section id="featured-articles" className="section bg-ivory">
        <div className="container-pad">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Featured Articles</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink">Latest Smart Home Ideas</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredArticles.map((article) => (
              <article key={article.title} className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-soft">
                <div className="relative h-56">
                  <Image src={article.image} alt={article.alt} fill sizes="(min-width: 1024px) 30vw, 92vw" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">{article.category}</p>
                  <h3 className="mt-4 text-2xl font-semibold leading-tight text-ink">{article.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-ink/62">{article.excerpt}</p>
                  <Link href="#" className="mt-5 text-sm font-semibold text-copper transition hover:text-ink">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="#" className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/20 px-7 py-3 text-sm font-semibold text-ink transition hover:border-copper hover:text-copper">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f2ea] py-20 sm:py-24 lg:py-28">
        <div className="container-pad grid gap-12 lg:grid-cols-[0.95fr_0.85fr] lg:items-center lg:gap-16">
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
              Canyon, and surrounding communities.
            </p>
            <p className="mt-6 text-base leading-8 text-ink/68">
              From lighting control and motorized shades to networking, security cameras, media rooms, and whole-home
              automation, we create technology experiences designed around how you live.
              {" "}
              <Link href="/" className="font-semibold text-copper transition hover:text-ink">
                Explore our smart home automation services
              </Link>
              .
            </p>
          </div>
          <div className="rounded-lg border border-ink/10 bg-white p-7 shadow-soft sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              {cities.map((city) => (
                <div key={city} className="flex items-center gap-3 text-base font-semibold text-ink">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-copper text-xs text-copper">✓</span>
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-white">
        <Image
          src="/images/Entertaining - wo text.png"
          alt="Luxury Orange County connected home exterior at evening"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/66 to-black/24" />
        <div className="container-pad relative flex min-h-[430px] items-center py-16">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Ready To Get Started?</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              Let&apos;s design a smarter,
              <br />
              more connected home.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/76">
              Schedule a consultation and discover what&apos;s possible.
            </p>
            <Link href={site.consultationPath} className="button-primary mt-8">
              Schedule a Consultation →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
