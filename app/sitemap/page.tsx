import type { Metadata } from "next";
import Link from "next/link";
import { blogNav, blogSeoNav, locationNav, serviceNav, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sitemap | Elegant Home Automation",
  description: "Browse the public pages on the Elegant Home Automation website, including smart home services, Orange County locations, guides, and consultation pages.",
  alternates: { canonical: "/sitemap" }
};

const primaryLinks = [
  { title: "Home", href: "/" },
  { title: "Budget Calculator", href: "/smart-home-budget-estimator" },
  { title: "About", href: "/about" },
  { title: "Schedule a Consultation", href: site.consultationPath },
  { title: "Reviews & Project Gallery", href: "/reviews-project-gallery" }
];

const featuredSeoLinks = [
  { title: "Smart Home Automation Orange County", href: "/smart-home-automation-orange-county" },
  { title: "Smart Home Automation Cost Orange County", href: "/smart-home-automation-cost-orange-county" },
  { title: "Smart Home Installation Orange County", href: "/smart-home-installation-orange-county" },
  { title: "Control4 Installer Near Me", href: "/blog/control4-installer-near-me" },
  { title: "Smart Home Irvine", href: "/blog/smart-home-irvine" },
  { title: "Luxury Smart Home Setup", href: "/blog/luxury-smart-home-setup" },
  { title: "Smart Home Automation Irvine", href: "/smart-home-automation-irvine" },
  { title: "Smart Home Automation Newport Beach", href: "/smart-home-automation-newport-beach" },
  { title: "Whole Home WiFi Installation Orange County", href: "/whole-home-wifi-installation-orange-county" },
  { title: "Motorized Shades Orange County", href: "/motorized-shades-orange-county" },
  { title: "Smart Lighting Control Orange County", href: "/smart-lighting-control-orange-county" },
  { title: "Smart Lighting Installer", href: "/blog/smart-lighting-installer" },
  { title: "Smart Home Automation for Existing Homes", href: "/smart-home-automation-existing-homes" },
  { title: "Smart Home Planning Before Construction", href: "/smart-home-planning-before-construction" }
];

export default function HtmlSitemapPage() {
  return (
    <section className="section bg-ivory">
      <div className="container-pad">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">Website Sitemap</p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Elegant Home Automation Sitemap
          </h1>
          <p className="mt-6 text-base leading-8 text-ink/68">
            Use this page to browse important public pages for Elegant Home Automation, including Orange County smart home
            services, location pages, educational guides, and consultation resources.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <SitemapGroup title="Main Pages" links={primaryLinks} />
          <SitemapGroup title="Services" links={serviceNav} />
          <SitemapGroup title="Locations" links={locationNav} />
          <SitemapGroup title="Blog & Learning" links={blogNav} />
          <SitemapGroup title="SEO Guides" links={featuredSeoLinks} />
          <SitemapGroup title="Additional SEO Pages" links={blogSeoNav} />
        </div>
      </div>
    </section>
  );
}

function SitemapGroup({ title, links }: { title: string; links: { title: string; href: string }[] }) {
  const uniqueLinks = links.filter((link, index, array) => array.findIndex((item) => item.href === link.href) === index);

  return (
    <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft">
      <h2 className="text-2xl font-semibold text-ink">{title}</h2>
      <div className="mt-5 grid gap-3">
        {uniqueLinks.map((link) => (
          <Link key={`${link.href}-${link.title}`} href={link.href} className="text-sm font-semibold text-ink/68 transition hover:text-copper">
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
