import Link from "next/link";
import { locationNav, serviceNav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="dark-geo bg-[#080808] text-white">
      <div className="container-pad grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
        <div>
          <div className="font-display text-3xl font-black uppercase leading-none">Elegant</div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">Home Automation</div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">{site.tagline}. Consultation, vendor coordination, and managed support planning for Orange County homes.</p>
          <div className="mt-6 space-y-1 text-sm text-white/65">
            <p>{site.phone}</p>
            <p>{site.email}</p>
            <p>{site.serviceArea}</p>
          </div>
        </div>
        <FooterColumn title="Smart Home Solutions" items={serviceNav} />
        <FooterColumn title="Locations" items={locationNav} />
        <FooterColumn title="Quick Links" items={[
          { title: "Budget Calculator", href: "/smart-home-budget-estimator" },
          { title: "About", href: "/about" },
          { title: "Customer Support", href: "/managed-home-technology-plans" },
          { title: "Learning Center", href: "/blog-learning-center" }
        ]} />
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Newsletter</div>
          <p className="mt-4 text-sm leading-7 text-white/62">Smart home planning notes and project updates coming soon.</p>
          <div className="mt-5 rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-white/45">Email signup placeholder</div>
          <div className="mt-5 flex gap-3 text-xs font-semibold uppercase tracking-wide text-white/50">
            <span>Instagram</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </div>
      <div className="container-pad border-t border-white/10 py-6 text-xs text-white/42">© 2026 {site.name}. All rights reserved.</div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: { title: string; href: string }[] }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">{title}</div>
      <div className="mt-4 grid gap-2">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="text-sm text-white/65 transition hover:text-copper">{item.title}</Link>
        ))}
      </div>
    </div>
  );
}
