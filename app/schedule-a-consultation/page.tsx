import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { CTA, FaqSchema } from "@/components/PageBlocks";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const faqs = [
  {
    question: "What happens after I request a consultation?",
    answer: "Your request is sent to Elegant Home Automation. We will review your project description and follow up to learn more about your home, priorities, and timing."
  },
  {
    question: "What should I include in the project description?",
    answer: "Include your city, the systems you want to improve, what is not working today, and whether this is an existing home, remodel, or new build."
  },
  {
    question: "Do you serve Orange County?",
    answer: "Yes. Elegant Home Automation serves Orange County, CA, including Irvine, Newport Beach, Laguna Beach, Tustin, Costa Mesa, Newport Coast, and Shady Canyon."
  }
];

export const metadata: Metadata = {
  title: "Request a Smart Home Consultation | Orange County",
  description: "Request an Orange County smart home consultation for Wi-Fi, automation, cameras, lighting, shades, audio video, vendor coordination, and managed support planning.",
  alternates: { canonical: "/schedule-a-consultation" },
  keywords: [
    "schedule smart home consultation Orange County",
    "Orange County smart home consultation",
    "smart home advisor Orange County"
  ]
};

export default function ConsultationPage() {
  return (
    <>
      <FaqSchema faqs={faqs} path="/schedule-a-consultation" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Request a Smart Home Consultation",
          description: metadata.description,
          url: `${site.url}/schedule-a-consultation`,
          about: {
            "@type": "LocalBusiness",
            "@id": `${site.url}#business`,
            name: site.name
          }
        }}
      />
      <section className="section bg-ivory">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-start">
          <div>
            <p className="eyebrow">Request a Consultation</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-ink sm:text-5xl">Start with the systems that are causing friction.</h1>
            <p className="mt-6 text-lg leading-8 text-ink/70">Share the city, property context, and technology concerns you want reviewed. The first conversation should clarify priorities before anyone recommends devices or scope.</p>
            <div className="mt-8 rounded-lg border border-ink/10 bg-white p-5 text-sm leading-7 text-ink/60">
              <p><strong className="text-ink">Business Name:</strong> {site.name}</p>
              <p><strong className="text-ink">Service Area:</strong> {site.serviceArea}</p>
              <p><strong className="text-ink">Phone:</strong> {site.phone}</p>
              <p><strong className="text-ink">Email:</strong> {site.email}</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <CTA />
    </>
  );
}
