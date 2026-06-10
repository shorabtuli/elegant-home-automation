"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { scenes } from "@/lib/scenes";
import { site } from "@/lib/site";

export function SceneShowcase({ compact = false }: { compact?: boolean }) {
  const [activeKey, setActiveKey] = useState(scenes[0].key);
  const activeScene = scenes.find((scene) => scene.key === activeKey) ?? scenes[0];

  return (
    <div className={compact ? "rounded-lg border border-white/10 bg-white/8 p-3 backdrop-blur" : "rounded-lg border border-ink/10 bg-white p-3 shadow-soft"}>
      <div className="flex flex-wrap gap-2 p-1">
        {scenes.map((scene) => (
          <button
            key={scene.key}
            type="button"
            onClick={() => setActiveKey(scene.key)}
            className={`min-h-10 shrink-0 rounded-full px-4 text-sm font-semibold transition ${
              scene.key === activeScene.key
                ? compact ? "bg-white text-ink" : "bg-ink text-white"
                : compact ? "bg-white/10 text-white/75 hover:bg-white/18" : "bg-ivory text-ink/65 hover:text-ink"
            }`}
            aria-pressed={scene.key === activeScene.key}
          >
            {scene.tab}
          </button>
        ))}
      </div>
      <div className="grid gap-4 p-2 lg:grid-cols-[minmax(0,1.45fr)_minmax(380px,0.75fr)] lg:p-3 xl:grid-cols-[minmax(0,1.55fr)_minmax(420px,0.8fr)]">
        <div className="relative min-h-[340px] overflow-hidden rounded-lg bg-ink sm:min-h-[500px] lg:min-h-[560px]">
          {/* Replace this placeholder image with real lifestyle photography or a short looping video for the active scene. */}
          <Image
            src={activeScene.image}
            alt={activeScene.alt}
            fill
            sizes="(min-width: 1024px) 56vw, 94vw"
            className="object-cover transition duration-500"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Scene selected</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">{activeScene.title}</h2>
          </div>
        </div>
        <div className={compact ? "rounded-lg bg-white p-6 text-ink sm:p-8" : "rounded-lg bg-ivory p-6 sm:p-8"}>
          <p className="eyebrow">{activeScene.tab}</p>
          <h3 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">{activeScene.headline}</h3>
          <p className="mt-5 text-base leading-8 text-ink/65">{activeScene.description}</p>
          <ul className="mt-6 grid gap-3">
            {activeScene.checklist.map((item) => (
              <li key={item} className="flex gap-3 text-sm font-medium text-ink/78">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brass" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link href={site.consultationPath} className="button-primary mt-7 w-full sm:w-fit">
            Plan This Scene
          </Link>
        </div>
      </div>
    </div>
  );
}
