export type ServiceCard = {
  title: string;
  copy: string;
};

export type TrustSection = {
  eyebrow?: string;
  heading: string;
  copy: string;
};

export type ServiceImagePageContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  cards: ServiceCard[];
  contactHeading: string;
  contactCopy: string;
  trust?: TrustSection;
};

export const serviceImagePages: Record<string, ServiceImagePageContent> = {
  "smart-home-automation": {
    eyebrow: "Smart Home Automation",
    title: "Smart Home Automation",
    subtitle: "Technology that quietly handles the routines of daily life.",
    image: "/images/morning-routine - wo text.png",
    imageAlt: "Smart home automation morning routine",
    cards: [
      { title: "Good morning scenes", copy: "Start the day with lighting, shades, comfort, and audio already set for the household." },
      { title: "Away and arrival routines", copy: "Coordinate locks, lights, cameras, and comfort when you leave or come home." },
      { title: "Entertaining and movie night", copy: "Set the mood for guests, dining, music, and media with fewer manual steps." }
    ],
    contactHeading: "Tell us which routines should feel effortless.",
    contactCopy: "Share the rooms, systems, and everyday moments you want automation to simplify."
  },
  "home-wifi-networking": {
    eyebrow: "Home Wi-Fi & Networking",
    title: "Reliable Home Wi-Fi for Every Room",
    subtitle: "Fast, stable coverage for work, streaming, cameras, guests, and smart-home systems.",
    image: "/images/home-office - wo text.png",
    imageAlt: "Home office with reliable Wi-Fi and smart home connectivity",
    cards: [
      { title: "Whole-home coverage", copy: "Plan Wi-Fi around bedrooms, offices, patios, garages, guest areas, and the places where coverage usually fades." },
      { title: "Stable smart devices", copy: "Give cameras, lighting, shades, audio, control systems, and streaming the network foundation they depend on." },
      { title: "Managed support", copy: "Document the network, simplify vendor coordination, and create a clearer path for future updates or troubleshooting." }
    ],
    contactHeading: "Tell us where Wi-Fi needs to feel effortless.",
    contactCopy: "Share the rooms, outdoor areas, devices, and reliability issues you want to improve."
  },
  "smart-security-cameras": {
    eyebrow: "Smart Security & Cameras",
    title: "Smart Security Cameras for Peace of Mind",
    subtitle: "Useful camera coverage, alerts, and access control designed around how your home actually works.",
    image: "/images/Away Mode - wo text.png",
    imageAlt: "Smart security camera and away mode coverage for a home",
    cards: [
      { title: "Useful camera placement", copy: "Cover entries, driveways, gates, side yards, deliveries, and outdoor spaces with a clear purpose for each view." },
      { title: "Smart alerts", copy: "Plan alerts around what matters so the system feels helpful instead of noisy." },
      { title: "Remote access", copy: "Coordinate cameras, network readiness, recording, and access so visibility is easier to manage away from home." }
    ],
    contactHeading: "Tell us what you want to see clearly.",
    contactCopy: "Share the entries, gates, driveways, cameras, and alerts you want to simplify."
  },
  "smart-lighting-control": {
    eyebrow: "Smart Lighting Control",
    title: "Lighting Designed Around Everyday Living",
    subtitle: "Create the right atmosphere throughout the day with thoughtful lighting scenes, simple controls, and automation that feels natural.",
    image: "/images/Entertaining - wo text.png",
    imageAlt: "Warm smart lighting scene for entertaining at home",
    cards: [
      { title: "Everyday Lighting Scenes", copy: "Create lighting that automatically adjusts for morning, evening, entertaining, and relaxation." },
      { title: "Simple Control", copy: "Manage lighting from elegant keypads, mobile devices, or automated schedules." },
      { title: "Energy & Comfort", copy: "Improve comfort and reduce wasted energy with lighting that responds to how the home is used." }
    ],
    contactHeading: "Tell us how each room should feel.",
    contactCopy: "Share the rooms, routines, controls, and lighting moments you want to simplify."
  },
  "motorized-shades": {
    eyebrow: "Motorized Shades",
    title: "Motorized Shades That Work Quietly in the Background",
    subtitle: "Automatically manage sunlight, privacy, glare, and comfort throughout the day with shades designed around how you live.",
    image: "/images/morning-routine - wo text.png",
    imageAlt: "Modern home with morning light and motorized shades",
    cards: [
      { title: "Privacy When Needed", copy: "Adjust automatically throughout the day to maintain privacy without blocking natural light." },
      { title: "Reduce Heat & Glare", copy: "Help manage sunlight, improve comfort, and protect furnishings from excessive UV exposure." },
      { title: "Automated Routines", copy: "Open and close automatically based on schedules, sunrise, sunset, or room activity." }
    ],
    contactHeading: "Tell us where light needs to feel easier.",
    contactCopy: "Share the rooms, window conditions, privacy needs, and routines you want shades to support."
  },
  "home-audio-video-media-rooms": {
    eyebrow: "Home Audio Video & Media Rooms",
    title: "Entertainment Designed Around How You Live",
    subtitle: "Enjoy movies, music, sports, and gatherings with audio and video systems that are simple to use and beautifully integrated into your home.",
    image: "/images/movie night - wo text.png",
    imageAlt: "Luxury media room and movie night experience",
    cards: [
      { title: "Whole-Home Music", copy: "Enjoy music throughout the home with simple control from your phone, keypad, or voice assistant." },
      { title: "Better Movie Nights", copy: "Create an immersive viewing experience with thoughtfully designed audio and video systems." },
      { title: "Indoor & Outdoor Entertainment", copy: "Extend entertainment beyond the living room with systems designed for patios, outdoor spaces, and gatherings." }
    ],
    contactHeading: "Tell us how you want to enjoy the home.",
    contactCopy: "Share the rooms, media spaces, patios, and everyday entertainment moments you want to simplify."
  },
  "managed-home-technology-plans": {
    eyebrow: "Managed Support",
    title: "Support After Installation",
    subtitle: "When questions come up or technology changes, we're here to help.",
    image: "/images/home-office - wo text.png",
    imageAlt: "Home technology support consultation",
    cards: [
      { title: "Fast Help When Needed", copy: "Get assistance when systems need updates, adjustments, or troubleshooting." },
      { title: "Ongoing Technology Planning", copy: "As your needs change, we'll help ensure your technology evolves with your home." },
      { title: "One Trusted Partner", copy: "Work with a single team that understands your home's systems and history." }
    ],
    trust: {
      eyebrow: "Trust and continuity",
      heading: "What support actually means",
      copy: "Technology should remain simple after installation. Our support plans are designed to keep systems running smoothly and give homeowners a reliable team to call when questions arise."
    },
    contactHeading: "Tell us where support would help most.",
    contactCopy: "Share the systems, questions, or recurring frustrations you want handled more calmly."
  }
};
