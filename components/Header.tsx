"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ServicesDropdown } from "@/components/MarketingComponents";
import { blogNav, blogSeoNav, locationNav, serviceNav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [blogsOpen, setBlogsOpen] = useState(false);

  const mobileLinks = [
    { title: "Budget Calculator", href: "/smart-home-budget-estimator" },
    { title: "About", href: "/about" },
    ...serviceNav,
    ...locationNav
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="container-pad flex min-h-20 items-center justify-between gap-5">
        <Link href="/" className="relative block h-14 w-40 shrink-0" aria-label="Elegant Home Automation home">
          <Image
            src="/images/elegant-home-automation-logo.png"
            alt="Elegant Home Automation"
            fill
            sizes="160px"
            className="object-contain"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          <ServicesDropdown label="Services" items={serviceNav} />
          <ServicesDropdown label="Locations" items={locationNav} />
          <BlogDropdown />
          <Link href="/smart-home-budget-estimator" className="py-2 text-sm font-semibold text-ink/74 transition hover:text-copper">Budget Calculator</Link>
          <Link href="/about" className="py-2 text-sm font-semibold text-ink/74 transition hover:text-copper">About</Link>
          <Link href={site.consultationPath} className="button-primary">Schedule a Consultation</Link>
        </nav>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-ink/15 px-4 text-sm font-semibold lg:hidden"
          aria-expanded={open}
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="border-t border-ink/10 bg-white lg:hidden">
          <div className="container-pad grid gap-2 py-4">
            <button
              type="button"
              onClick={() => setBlogsOpen((value) => !value)}
              className="flex min-h-12 items-center justify-between rounded-lg bg-ivory px-4 py-3 text-left text-sm font-semibold text-ink/75"
              aria-expanded={blogsOpen}
            >
              Blogs
              <span className="text-xs">v</span>
            </button>
            {blogsOpen && (
              <div className="grid gap-2 rounded-lg border border-ink/10 bg-white p-2">
                {blogNav.map((item) => (
                  <Link key={`${item.href}-${item.title}`} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-semibold text-ink/70 transition hover:bg-ivory hover:text-copper">
                    {item.title}
                  </Link>
                ))}
                <div className="px-3 pt-3 text-xs font-semibold uppercase tracking-[0.16em] text-copper">SEO Pages</div>
                {blogSeoNav.map((item) => (
                  <Link key={`${item.href}-${item.title}`} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-semibold text-ink/70 transition hover:bg-ivory hover:text-copper">
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
            {mobileLinks.map((item) => (
              <Link key={`${item.href}-${item.title}`} href={item.href} onClick={() => setOpen(false)} className="rounded-lg bg-ivory px-4 py-3 text-sm font-semibold text-ink/75">
                {item.title}
              </Link>
            ))}
            <Link href={site.consultationPath} onClick={() => setOpen(false)} className="button-primary mt-2">Schedule a Consultation</Link>
          </div>
        </div>
      )}
    </header>
  );
}

function BlogDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="group relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        onFocus={() => setOpen(true)}
        className="flex items-center gap-1 py-2 text-sm font-semibold text-ink/74 transition hover:text-copper"
        aria-expanded={open}
      >
        Blogs
        <span className="text-xs">v</span>
      </button>
      <div className="absolute left-0 top-full h-4 w-full bg-transparent" aria-hidden="true" />
      <div className={`nav-menu w-72 ${open ? "visible opacity-100" : "invisible opacity-0"}`}>
        {blogNav.map((item) => (
          <Link key={`${item.href}-${item.title}`} href={item.href} className="block rounded-md px-3 py-2 text-sm font-medium text-ink/72 transition hover:bg-ivory hover:text-copper">
            {item.title}
          </Link>
        ))}
        <div className="px-3 pt-3 text-xs font-semibold uppercase tracking-[0.16em] text-copper">SEO Pages</div>
        <div className="max-h-[60vh] overflow-y-auto">
          {blogSeoNav.map((item) => (
            <Link key={`${item.href}-${item.title}`} href={item.href} className="block rounded-md px-3 py-2 text-sm font-medium text-ink/72 transition hover:bg-ivory hover:text-copper">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
