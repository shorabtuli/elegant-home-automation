import { locationNav, serviceNav, site } from "@/lib/site";

type FAQ = { question: string; answer: string };
export type PageData = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  image: string;
  imageAlt: string;
  sections: { title: string; copy: string }[];
  faqs: FAQ[];
  links: { title: string; href: string }[];
  kind: "service" | "location" | "standard";
};

const commonFaqs: FAQ[] = [
  {
    question: "Do you serve all of Orange County?",
    answer: "Yes. Elegant Home Automation is focused on Orange County homeowners and provides consultation, design coordination, technology planning, and managed support across the area."
  },
  {
    question: "Can you coordinate with builders, designers, and electricians?",
    answer: "Yes. We can help clarify technology requirements with your builder, designer, electrician, security provider, shade vendor, or AV specialist before decisions become expensive to change."
  }
];

const serviceFaq = (topic: string): FAQ[] => [
  {
    question: `Is ${topic} appropriate for an existing home?`,
    answer: "In most cases, yes. We start with a walkthrough, review the current wiring and network, and recommend a practical path that protects finished spaces where possible."
  },
  {
    question: "Do you offer ongoing support after the project?",
    answer: "Yes. Managed technology plans are available for homeowners who want documentation, periodic review, vendor coordination, and priority consultation instead of one-time project help."
  },
  ...commonFaqs
];

export const pages: PageData[] = [
  {
    slug: "about",
    title: "About Elegant Home Automation | Orange County Smart Home Support",
    description: "Meet Elegant Home Automation, an Orange County smart home advisor focused on Wi-Fi reliability, thoughtful automation planning, vendor coordination, and managed support.",
    h1: "A careful technology advisor for the home you actually live in.",
    eyebrow: "About Elegant Home Automation",
    intro: "Elegant Home Automation helps Orange County homeowners make deliberate decisions about Wi-Fi, automation, cameras, lighting, shades, and AV before the home becomes hard to manage.",
    image: "/images/about-smart-home-consultation.svg",
    imageAlt: "Placeholder for an Orange County smart home consultation image",
    kind: "standard",
    sections: [
      { title: "Technology should feel settled", copy: "The work begins with reliability, documentation, and a control experience that guests and family members can understand without a tutorial." },
      { title: "A single planning voice", copy: "Smart home projects often involve separate trades. We help define priorities, ask better vendor questions, and keep the homeowner experience at the center of the decisions." },
      { title: "Credibility without theater", copy: "Elegant Home Automation is a new business. This site avoids placeholder testimonials, invented project names, and exaggerated experience claims while the real portfolio is built." }
    ],
    faqs: [
      { question: "Are you a new smart home business?", answer: "Yes. The website is written honestly for a new Orange County business, with no placeholder reviews or invented project claims." },
      ...commonFaqs
    ],
    links: [
      { title: "Managed Support Plans", href: "/managed-home-technology-plans" },
      { title: "Request a Consultation", href: site.consultationPath }
    ]
  },
  {
    slug: "smart-home-automation",
    title: "Smart Home Automation Orange County | Elegant Home Automation",
    description: "Smart home automation consultation for Orange County homes, including Wi-Fi, lighting, shades, cameras, AV, control scenes, and managed support planning.",
    h1: "Smart home automation with restraint, reliability, and purpose.",
    eyebrow: "Orange County Smart Home Automation",
    intro: "Bring lighting, shades, security, Wi-Fi, and entertainment into a coordinated plan that supports daily routines without turning the home into a gadget showroom.",
    image: "/images/smart-home-automation-living-room.svg",
    imageAlt: "Placeholder for a luxury living room smart home automation image",
    kind: "service",
    sections: [
      { title: "Control that matches the household", copy: "Scenes, keypads, schedules, and app access should reflect how the home is used in the morning, at night, while entertaining, and while away." },
      { title: "Reliability before features", copy: "A smart home is only as steady as its network, wiring, device choices, and documentation. Those fundamentals come before extra automations." },
      { title: "Cleaner decisions before installation", copy: "For remodels and new builds, we help align low-voltage, electrical, shade, security, and AV decisions while there is still time to make graceful changes." }
    ],
    faqs: serviceFaq("smart home automation"),
    links: [
      serviceNav[1],
      serviceNav[3],
      serviceNav[6],
      locationNav[0],
      locationNav[1]
    ]
  },
  {
    slug: "home-wifi-networking",
    title: "Home Wi-Fi & Networking Orange County | Managed Home Networks",
    description: "Home Wi-Fi and networking consultation for Orange County homes, large properties, cameras, media rooms, remote work, guest access, and managed support.",
    h1: "Home Wi-Fi that is planned like infrastructure, not an afterthought.",
    eyebrow: "Home Wi-Fi & Networking",
    intro: "Replace patchy coverage and improvised equipment with a network plan that supports work, streaming, cameras, guests, outdoor spaces, and smart home systems.",
    image: "/images/home-wifi-networking-equipment.svg",
    imageAlt: "Placeholder for premium home network equipment image",
    kind: "service",
    sections: [
      { title: "Coverage mapped to real spaces", copy: "Primary suites, offices, garages, patios, guest houses, and media rooms can all need different coverage decisions. The plan starts with where people actually use the network." },
      { title: "A network that can be supported", copy: "Guest access, cameras, work devices, smart devices, and AV equipment should be organized and documented so future troubleshooting is not guesswork." },
      { title: "A better base for every system", copy: "Lighting processors, camera recorders, streaming devices, shade hubs, and remote access all become easier to support when the network is stable." }
    ],
    faqs: serviceFaq("home Wi-Fi and networking"),
    links: [
      serviceNav[0],
      serviceNav[2],
      serviceNav[6],
      locationNav[5]
    ]
  },
  {
    slug: "smart-security-cameras",
    title: "Smart Security Cameras Orange County | Home Camera Planning",
    description: "Smart security camera consultation for Orange County homes with thoughtful placement, privacy, network readiness, remote access, and vendor coordination.",
    h1: "Security cameras placed for useful visibility, not noise.",
    eyebrow: "Smart Security & Cameras",
    intro: "Create a camera plan for entries, driveways, gates, side yards, deliveries, and outdoor living areas while keeping alerts useful and privacy considered.",
    image: "/images/smart-security-cameras-entry.svg",
    imageAlt: "Placeholder for smart security camera at a home entry",
    kind: "service",
    sections: [
      { title: "Coverage before equipment", copy: "Placement should answer specific questions: who arrived, which gate opened, whether a package was delivered, and what happened near the driveway." },
      { title: "Network-aware design", copy: "Cameras are only as dependable as the network and power behind them. We connect security planning with Wi-Fi, switching, recording, and remote access decisions." },
      { title: "Coordination with security providers", copy: "When an alarm company, gate vendor, or electrician is involved, we help clarify responsibilities so the finished experience is not fragmented." }
    ],
    faqs: serviceFaq("smart security cameras"),
    links: [
      serviceNav[1],
      serviceNav[6],
      locationNav[1],
      locationNav[6]
    ]
  },
  {
    slug: "smart-lighting-control",
    title: "Smart Lighting Control Orange County | Keypads, Scenes & Dimming",
    description: "Smart lighting control consultation for Orange County homes, including dimming, keypads, scenes, shade coordination, remodel planning, and support.",
    h1: "Lighting control that makes the home feel calmer at every hour.",
    eyebrow: "Smart Lighting Control",
    intro: "Replace switch clutter and inconsistent dimming with considered scenes, clear keypads, and lighting that supports mornings, evenings, entertaining, and away modes.",
    image: "/images/smart-lighting-control-kitchen.svg",
    imageAlt: "Placeholder for smart lighting control in a premium kitchen",
    kind: "service",
    sections: [
      { title: "Scenes for real routines", copy: "Good lighting control supports arrivals, dinner, quiet evenings, movie time, cleaning, and travel without asking the homeowner to manage every fixture manually." },
      { title: "Cleaner walls", copy: "Keypads, labels, and sensible zones can reduce visual clutter while keeping everyday control intuitive for family and guests." },
      { title: "Remodel-friendly planning", copy: "We can coordinate with electricians, designers, and builders early so fixture, load, keypad, and shade decisions work together." }
    ],
    faqs: serviceFaq("smart lighting control"),
    links: [
      serviceNav[0],
      serviceNav[4],
      locationNav[2],
      locationNav[4]
    ]
  },
  {
    slug: "motorized-shades",
    title: "Motorized Shades Orange County | Smart Shade Planning",
    description: "Motorized shade consultation for Orange County homes, including privacy, glare, heat control, wiring, lighting scenes, and smart home integration.",
    h1: "Motorized shades that handle light, privacy, and heat gracefully.",
    eyebrow: "Motorized Shades",
    intro: "Plan automated shades around architecture, coastal sun, privacy, glare, interior finishes, and the way the home should feel throughout the day.",
    image: "/images/motorized-shades-bedroom.svg",
    imageAlt: "Placeholder for motorized shades in a serene bedroom",
    kind: "service",
    sections: [
      { title: "Comfort without daily adjustment", copy: "Schedules and scenes can reduce glare, soften afternoon heat, protect interiors, improve privacy, and make large window walls easier to live with." },
      { title: "Design coordination", copy: "Shade fabric, wiring, pockets, power, controls, and window treatments all benefit from early coordination with designers and builders." },
      { title: "Integrated scenes", copy: "Shades can work with lighting, media rooms, morning routines, and away modes so control feels natural instead of technical." }
    ],
    faqs: serviceFaq("motorized shades"),
    links: [
      serviceNav[3],
      serviceNav[0],
      locationNav[1],
      locationNav[5]
    ]
  },
  {
    slug: "home-audio-video-media-rooms",
    title: "Home Audio Video & Media Rooms Orange County | AV Planning",
    description: "Home audio video and media room consultation for Orange County homes, including distributed audio, TV placement, network readiness, controls, and support.",
    h1: "Audio and video systems that disappear into the experience.",
    eyebrow: "Home Audio Video & Media Rooms",
    intro: "Create media rooms, outdoor viewing areas, and whole-home audio experiences that look clean, sound right, and remain easy for the household to use.",
    image: "/images/home-audio-video-media-room.svg",
    imageAlt: "Placeholder for a premium home media room",
    kind: "service",
    sections: [
      { title: "Entertainment without clutter", copy: "TVs, speakers, racks, remotes, and streaming devices should be planned so equipment stays discreet and the room remains elegant." },
      { title: "Network-ready performance", copy: "Modern AV depends on strong networking. We plan the supporting infrastructure for streaming, control, updates, and reliable playback." },
      { title: "Simple control", copy: "The goal is a clean experience: choose the room, start the source, adjust volume, and enjoy the space without hunting through apps." }
    ],
    faqs: serviceFaq("home audio video and media rooms"),
    links: [
      serviceNav[1],
      serviceNav[0],
      serviceNav[6],
      locationNav[3]
    ]
  },
  {
    slug: "managed-home-technology-plans",
    title: "Managed Home Technology Plans Orange County | Smart Home Support",
    description: "Managed home technology support planning for Orange County homeowners, including network documentation, vendor coordination, system reviews, and priority consultation.",
    h1: "A support plan for the technology your home now depends on.",
    eyebrow: "Managed Home Technology Plans",
    intro: "Keep Wi-Fi, cameras, lighting, shades, audio/video, and smart home systems organized with a support model designed for busy homeowners.",
    image: "/images/managed-home-technology-support.svg",
    imageAlt: "Placeholder for managed smart home support dashboard",
    kind: "service",
    sections: [
      { title: "Technology needs ownership", copy: "Homes now rely on networks, apps, subscriptions, cloud services, firmware, and multiple vendors. A managed plan gives those moving parts a defined point of review." },
      { title: "Support that is organized", copy: "Plans can include documentation, scheduled reviews, remote coordination, update planning, and issue triage across the systems in the home." },
      { title: "Clear boundaries", copy: "A good support plan is specific about what is covered, what requires a specialist, and what should be improved over time." }
    ],
    faqs: [
      { question: "What can be included in a managed plan?", answer: "Typical areas include Wi-Fi and network documentation, smart home records, camera and lighting coordination, AV support triage, vendor communication, and priority consultation time." },
      { question: "Is this only for homes you specified?", answer: "No. Existing homes can be reviewed and organized first, then moved into a support plan when the technology environment is clear." },
      ...commonFaqs
    ],
    links: [
      serviceNav[1],
      serviceNav[2],
      { title: "Budget Estimator", href: "/smart-home-budget-estimator" },
      locationNav[0]
    ]
  },
  {
    slug: "smart-home-budget-estimator",
    title: "Smart Home Budget Estimator Orange County | Planning Guide",
    description: "Review smart home budget factors for Orange County homes, including Wi-Fi, automation, lighting, shades, cameras, AV, wiring access, and support.",
    h1: "Understand the budget factors before you ask for a quote.",
    eyebrow: "Smart Home Budget Estimator",
    intro: "Use this planning page to understand the decisions that can influence smart home technology scope before a formal consultation.",
    image: "/images/smart-home-budget-estimator.svg",
    imageAlt: "Placeholder for smart home budget planning",
    kind: "standard",
    sections: [
      { title: "What affects investment", copy: "Home size, wiring access, network condition, room count, lighting loads, shade openings, camera locations, audio zones, and support expectations all affect scope." },
      { title: "Priorities protect the budget", copy: "The clearest budgets start with ranked priorities: network reliability, security visibility, lighting quality, entertainment, convenience, or ongoing support." },
      { title: "No placeholder pricing games", copy: "This page is not a binding quote. It prepares a more useful consultation by surfacing the questions that matter before numbers are discussed." }
    ],
    faqs: [
      { question: "Can you give a price without seeing the home?", answer: "A rough range may be possible after a conversation, but reliable planning usually requires a walkthrough or review of drawings, wiring, and the existing network." },
      { question: "What should I prepare before a consultation?", answer: "Helpful items include home plans, a list of frustrations, current internet provider information, photos of network equipment, and the rooms or systems you want to improve." },
      ...commonFaqs
    ],
    links: [
      serviceNav[0],
      serviceNav[6],
      { title: "Request a Consultation", href: site.consultationPath }
    ]
  },
  {
    slug: "reviews-project-gallery",
    title: "Reviews & Project Gallery | Elegant Home Automation Orange County",
    description: "Reviews and project gallery for Elegant Home Automation. Real Orange County project photography and verified client feedback will be added as work is completed.",
    h1: "Project Gallery Coming Soon",
    eyebrow: "Reviews & Project Gallery",
    intro: "Elegant Home Automation is a new Orange County smart home business. This page is reserved for real project photography and verified client feedback as the portfolio develops.",
    image: "/images/project-gallery-coming-soon.svg",
    imageAlt: "Project gallery coming soon placeholder",
    kind: "standard",
    sections: [
      { title: "Verified work only", copy: "This site does not use placeholder reviews, fictional project names, or staged client quotes. Future updates should feature client-approved work only." },
      { title: "What will be shown", copy: "Future updates can include real photography of network upgrades, lighting control, camera planning, shade integration, media rooms, and support improvements." },
      { title: "Launch focus", copy: "For now, the most useful next step is a consultation about your home, current frustrations, and the first technology decision worth making." }
    ],
    faqs: [
      { question: "Why are there no reviews yet?", answer: "Elegant Home Automation is launching as a new business and is avoiding placeholder testimonials. Verified reviews can be added as clients choose to share them." },
      { question: "Can I see examples during a consultation?", answer: "The consultation can discuss system types, planning approach, and design considerations without misrepresenting unavailable project photography." },
      ...commonFaqs
    ],
    links: [
      serviceNav[0],
      serviceNav[6],
      { title: "Request a Consultation", href: site.consultationPath }
    ]
  },
  {
    slug: "blog-learning-center",
    title: "Blog & Learning Center | Orange County Smart Home Planning",
    description: "Smart home learning center for Orange County homeowners covering Wi-Fi, cameras, lighting, shades, audio video, automation planning, and managed support.",
    h1: "Practical guidance for better smart home decisions.",
    eyebrow: "Blog / Learning Center",
    intro: "Short, practical guidance for Orange County homeowners who want to make better decisions about networks, cameras, lighting, shades, AV, automation, and support.",
    image: "/images/blog-learning-center-smart-home.svg",
    imageAlt: "Placeholder for smart home learning center image",
    kind: "standard",
    sections: [
      { title: "Start with the network", copy: "A reliable smart home begins with Wi-Fi and network planning. Future articles can explain coverage, access points, guest networks, and camera bandwidth plainly." },
      { title: "Plan before buying devices", copy: "Buying devices one at a time often creates app clutter and support problems. Better planning keeps the finished home easier to own." },
      { title: "Understand support", copy: "The learning center can help homeowners decide when documentation, periodic review, and vendor coordination are worth adding." }
    ],
    faqs: [
      { question: "Will this become a full blog?", answer: "Yes. This page is ready to become a practical learning center for educational articles and local SEO content." },
      { question: "What topics should be added first?", answer: "Strong first topics include smart home planning before a remodel, why Wi-Fi matters, camera placement basics, lighting scenes, and managed technology support." },
      ...commonFaqs
    ],
    links: [
      serviceNav[1],
      serviceNav[0],
      serviceNav[6],
      { title: "Budget Estimator", href: "/smart-home-budget-estimator" }
    ]
  }
];

const cityProfiles = [
  {
    city: "Irvine",
    slug: "irvine-smart-home-automation",
    title: "Irvine Smart Home Automation | Wi-Fi, Lighting, Cameras & Support",
    description: "Irvine smart home automation consultation for reliable Wi-Fi, family routines, home offices, lighting control, cameras, shades, AV, and support.",
    h1: "Irvine smart home planning for organized, high-use homes.",
    image: "/images/irvine-smart-home-automation.svg",
    intro: "For Irvine homeowners, smart home technology often needs to support family schedules, remote work, security awareness, and a clean day-to-day control experience.",
    sections: [
      { title: "Built around daily routines", copy: "Irvine homes often carry a lot of weekday demand: home offices, school schedules, streaming, cameras, guests, and smart devices all using the network at once." },
      { title: "Good fit for newer communities", copy: "Newer homes can still have weak Wi-Fi, crowded equipment closets, or too many disconnected apps. A review helps separate useful upgrades from unnecessary devices." },
      { title: "Support for busy households", copy: "Documentation, network organization, and a clear support path can keep small technology issues from becoming recurring household interruptions." }
    ],
    faqs: [
      { question: "Can you help with an Irvine home office and smart home network?", answer: "Yes. A consultation can review Wi-Fi coverage, wired connections, guest access, smart devices, and the systems that affect work-from-home reliability." },
      { question: "Is smart lighting useful in an Irvine family home?", answer: "It can be, especially for arrivals, evening routines, pathway lighting, away scenes, and reducing switch confusion in shared living spaces." }
    ],
    links: [serviceNav[1], serviceNav[3], serviceNav[6], locationNav[3]]
  },
  {
    city: "Newport Beach",
    slug: "newport-beach-smart-home-automation",
    title: "Newport Beach Smart Home Automation | Luxury Home Technology",
    description: "Newport Beach smart home automation consultation for coastal homes, including Wi-Fi, lighting, shades, security cameras, audio video, and managed support.",
    h1: "Newport Beach smart home technology with a quieter coastal feel.",
    image: "/images/newport-beach-smart-home-automation.svg",
    intro: "Newport Beach homes often need technology that supports entertaining, coastal light, privacy, cameras, outdoor areas, and an elegant interior experience.",
    sections: [
      { title: "Technology that respects the architecture", copy: "Controls, speakers, cameras, shades, and network equipment should be planned to support the home without competing with the finishes." },
      { title: "Outdoor living and entertaining", copy: "Wi-Fi, audio, lighting, and video often need to extend to patios, courtyards, docks, garages, and guest areas while staying simple to control." },
      { title: "Coastal reliability considerations", copy: "Outdoor devices, equipment locations, and camera planning should account for salt air, sun exposure, privacy, and service access." }
    ],
    faqs: [
      { question: "Can you help plan smart home technology for a Newport Beach remodel?", answer: "Yes. Early coordination can help align wiring, shades, lighting, cameras, network locations, AV equipment, and future support needs." },
      { question: "Do Newport Beach homes need a different Wi-Fi approach?", answer: "Often. Multi-level layouts, dense neighborhoods, outdoor spaces, and equipment placement can all affect coverage and performance." }
    ],
    links: [serviceNav[4], serviceNav[5], serviceNav[2], locationNav[5]]
  },
  {
    city: "Laguna Beach",
    slug: "laguna-beach-smart-home-automation",
    title: "Laguna Beach Smart Home Automation | Coastal Home Technology",
    description: "Laguna Beach smart home automation consultation for hillside and coastal homes, including Wi-Fi, cameras, lighting, shades, AV, and support.",
    h1: "Laguna Beach smart home planning for distinctive hillside homes.",
    image: "/images/laguna-beach-smart-home-automation.svg",
    intro: "Laguna Beach homes can be architecturally unique, vertically arranged, and sensitive to retrofit work, so technology planning needs a careful touch.",
    sections: [
      { title: "Coverage for unusual layouts", copy: "Hillside rooms, thick walls, tucked-away equipment, and outdoor terraces can make Wi-Fi and camera planning more complex than a standard floor plan suggests." },
      { title: "Light, privacy, and views", copy: "Lighting and shade decisions should protect views and privacy while reducing glare and keeping the home comfortable through changing coastal light." },
      { title: "Retrofit with restraint", copy: "For finished homes, the goal is a practical path that improves reliability while limiting disruption to architectural details and finished spaces." }
    ],
    faqs: [
      { question: "Can you help with Wi-Fi in a multi-level Laguna Beach home?", answer: "Yes. A consultation can review access point placement, wiring options, outdoor coverage, and equipment locations for hillside layouts." },
      { question: "Are motorized shades useful for Laguna Beach homes?", answer: "Often. Shades can help manage glare, privacy, heat, and interior protection while preserving a calm living experience." }
    ],
    links: [serviceNav[1], serviceNav[4], serviceNav[3], locationNav[1]]
  },
  {
    city: "Tustin",
    slug: "tustin-smart-home-automation",
    title: "Tustin Smart Home Automation | Wi-Fi, Lighting, Cameras & AV",
    description: "Tustin smart home automation consultation for remodels and existing homes, including Wi-Fi, lighting, cameras, media rooms, shades, and support.",
    h1: "Tustin smart home upgrades with practical priorities.",
    image: "/images/tustin-smart-home-automation.svg",
    intro: "For Tustin homeowners, the right first smart home project is often a practical one: stronger Wi-Fi, cleaner controls, better cameras, or a media room that is easier to use.",
    sections: [
      { title: "Useful upgrades before complexity", copy: "Many homes benefit most from network cleanup, camera placement, lighting scenes, or AV simplification before adding more automation." },
      { title: "Remodel coordination", copy: "If walls are opening, it is the right time to review low-voltage wiring, access points, shade power, speaker locations, and equipment placement." },
      { title: "Family-friendly control", copy: "A useful system makes everyday actions easier for everyone in the house, not just the person who knows the apps." }
    ],
    faqs: [
      { question: "Can you help prioritize a Tustin smart home remodel?", answer: "Yes. A consultation can rank network, lighting, camera, shade, AV, and support decisions before vendors begin work." },
      { question: "What is a good first project for an existing Tustin home?", answer: "Reliable Wi-Fi is often the best foundation, followed by camera planning, lighting control, or AV simplification depending on the home's pain points." }
    ],
    links: [serviceNav[1], serviceNav[2], serviceNav[5], locationNav[0]]
  },
  {
    city: "Costa Mesa",
    slug: "costa-mesa-smart-home-automation",
    title: "Costa Mesa Smart Home Automation | Managed Smart Home Support",
    description: "Costa Mesa smart home automation consultation for design-forward remodels, Wi-Fi, lighting control, shades, cameras, audio video, and support.",
    h1: "Costa Mesa smart home planning for design-forward living.",
    image: "/images/costa-mesa-smart-home-automation.svg",
    intro: "Costa Mesa homes often blend remodels, creative spaces, outdoor living, and entertainment needs, making clean technology planning especially valuable.",
    sections: [
      { title: "Design decisions and technology decisions", copy: "Lighting, shade pockets, keypad locations, speaker placement, and equipment storage should be coordinated before they affect finished interiors." },
      { title: "Media and everyday entertaining", copy: "Whole-home audio, patio speakers, media rooms, and streaming controls can be planned so the experience feels natural rather than patched together." },
      { title: "Support after the remodel", copy: "A remodel can leave behind a mix of new devices, old wiring, and multiple vendors. Documentation helps keep the home supportable." }
    ],
    faqs: [
      { question: "Can you coordinate with a Costa Mesa designer or contractor?", answer: "Yes. We can help clarify smart home requirements for lighting, shades, AV, networking, cameras, and equipment locations." },
      { question: "Can existing devices be included in a new plan?", answer: "Often, yes. The first step is reviewing what should stay, what should be documented, and what should be replaced." }
    ],
    links: [serviceNav[3], serviceNav[5], serviceNav[4], locationNav[3]]
  },
  {
    city: "Newport Coast",
    slug: "newport-coast-smart-home-automation",
    title: "Newport Coast Smart Home Automation | Premium Home Technology",
    description: "Newport Coast smart home automation consultation for larger properties, estate Wi-Fi, cameras, gates, lighting, shades, AV, and support.",
    h1: "Newport Coast smart home planning for complex properties.",
    image: "/images/newport-coast-smart-home-automation.svg",
    intro: "Newport Coast properties may include larger floor plans, outdoor areas, gates, garages, guest spaces, and more systems that need a disciplined technology plan.",
    sections: [
      { title: "Estate-scale network thinking", copy: "Large homes need more than a stronger router. Coverage, switching, rack organization, outdoor areas, and support access all need to be considered together." },
      { title: "Security and access visibility", copy: "Camera, gate, driveway, and entry planning should be useful without creating constant alerts or a confusing mix of apps." },
      { title: "Managed support expectations", copy: "The more systems a home relies on, the more important documentation, vendor coordination, and periodic review become." }
    ],
    faqs: [
      { question: "Can you help with a larger Newport Coast property's Wi-Fi?", answer: "Yes. A consultation can review coverage needs across the main home, garages, outdoor areas, guest spaces, and equipment rooms." },
      { question: "Do you help coordinate gates, cameras, and AV vendors?", answer: "Yes. We can help define requirements and responsibilities so vendors are working toward the same homeowner experience." }
    ],
    links: [serviceNav[1], serviceNav[2], serviceNav[6], locationNav[6]]
  },
  {
    city: "Shady Canyon",
    slug: "shady-canyon-home-automation",
    title: "Shady Canyon Home Automation | Luxury Smart Home Support",
    description: "Shady Canyon home automation consultation for custom residences, estate networking, privacy, lighting, shades, cameras, AV, and managed support.",
    h1: "Shady Canyon home automation with careful estate coordination.",
    image: "/images/shady-canyon-home-automation.svg",
    intro: "Shady Canyon residences can involve custom architecture, privacy needs, large properties, and multiple specialty vendors, so technology decisions need early coordination.",
    sections: [
      { title: "Custom-home coordination", copy: "Lighting control, shade power, network equipment, security coverage, AV zones, and control points should be discussed before finish decisions are locked." },
      { title: "Privacy and discretion", copy: "Cameras, access control, Wi-Fi, and outdoor technology should improve awareness while staying visually quiet and respectful of the property." },
      { title: "Long-term ownership", copy: "For complex homes, managed documentation and support planning can be as important as the initial installation scope." }
    ],
    faqs: [
      { question: "Can you advise during a Shady Canyon custom build?", answer: "Yes. Early consultation can help define low-voltage, lighting, shade, camera, AV, networking, and support requirements." },
      { question: "Can you review an existing estate system?", answer: "Yes. A review can identify documentation gaps, network issues, vendor dependencies, and practical next improvements." }
    ],
    links: [serviceNav[6], serviceNav[2], serviceNav[4], locationNav[5]]
  }
];

export const locationPages: PageData[] = cityProfiles.map((profile) => ({
  slug: profile.slug,
  title: profile.title,
  description: profile.description,
  h1: profile.h1,
  eyebrow: `${profile.city} Smart Home Automation`,
  intro: profile.intro,
  image: profile.image,
  imageAlt: `Placeholder for ${profile.city} smart home automation`,
  kind: "location",
  sections: profile.sections,
  faqs: [
    {
      question: `Do you provide smart home consultations in ${profile.city}?`,
      answer: `Yes. Elegant Home Automation serves ${profile.city} and the broader Orange County area with smart home consultation, technology planning, vendor coordination, and managed support planning.`
    },
    ...profile.faqs,
    ...commonFaqs
  ],
  links: [
    ...profile.links,
    { title: "Request a Consultation", href: site.consultationPath }
  ]
}));

export const allPages = [...pages, ...locationPages];

export const getPage = (slug: string) => allPages.find((page) => page.slug === slug);
