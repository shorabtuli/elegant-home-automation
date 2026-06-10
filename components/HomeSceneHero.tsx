"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { scenes } from "@/lib/scenes";
import { site } from "@/lib/site";

export function HomeSceneHero() {
  const [activeKey, setActiveKey] = useState(scenes[0].key);
  const activeScene = scenes.find((scene) => scene.key === activeKey) ?? scenes[0];

  return (
    <section className="relative h-[720px] overflow-hidden bg-ink md:h-[680px] xl:h-[720px]">
      {/* Replace these scene placeholders with real full-bleed lifestyle photography or short looping videos. */}
      <Image
        src={activeScene.image}
        alt={activeScene.alt}
        fill
        sizes="100vw"
        className="object-cover transition duration-700"
        priority
      />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/54 via-black/16 to-transparent" />

      <div className="absolute inset-x-0 bottom-10 z-10 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto w-full overflow-hidden rounded-2xl border border-white/14 bg-black/52 text-white shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl lg:max-w-[85vw]">
          <div className="grid gap-4 px-5 py-4 sm:px-6 sm:py-5 lg:grid-cols-[minmax(0,1fr)_250px] lg:items-center lg:gap-5 lg:px-7 lg:py-4">
            <div className="min-w-0">
              <p className="mb-3 text-lg font-semibold uppercase tracking-[0.2em] text-copper sm:text-xl">
                ELEGANT HOME AUTOMATION
              </p>
              <h1 className="text-[clamp(2.15rem,3.1vw,3.2rem)] font-semibold leading-[1.02] text-white xl:whitespace-nowrap">
                Technology designed around how you live.
              </h1>
              <p className="mt-3 text-[clamp(1rem,1.25vw,1.2rem)] font-light leading-7 text-white/78 xl:whitespace-nowrap">
                Lighting, shades, security, Wi-Fi, entertainment, and automation designed as one seamless experience.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:w-[250px] lg:flex-col lg:items-stretch lg:justify-center">
              <Link
                href={site.consultationPath}
                className="inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition duration-300 hover:bg-[#f5eadc] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              >
                Schedule a Consultation <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="overflow-x-auto border-t border-white/12 bg-black/22">
            <div className="flex min-w-max md:min-w-0 md:justify-center">
              {scenes.map((scene) => (
                <button
                  key={scene.key}
                  type="button"
                  onClick={() => setActiveKey(scene.key)}
                  className={`relative min-h-9 min-w-[132px] shrink-0 border-r border-white/12 px-5 text-center text-[0.68rem] font-semibold uppercase tracking-[0.18em] transition duration-300 last:border-r-0 md:min-w-0 md:flex-1 ${
                    scene.key === activeScene.key
                      ? "text-copper after:absolute after:inset-x-5 after:bottom-0 after:h-px after:bg-copper"
                      : "text-white/68 hover:bg-white/6 hover:text-white"
                  }`}
                  aria-pressed={scene.key === activeScene.key}
                >
                  {scene.tab.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
