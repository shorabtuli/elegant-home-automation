import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`
  },
  description: "Managed smart home technology for Orange County homes, including Wi-Fi, automation, cameras, lighting, shades, audio/video, and ongoing support.",
  applicationName: site.name,
  alternates: {
    canonical: "/"
  },
  keywords: [
    "Orange County smart home automation",
    "smart home consultant Orange County",
    "managed smart home support",
    "home Wi-Fi networking Orange County",
    "smart lighting Orange County",
    "motorized shades Orange County",
    "security cameras Orange County"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    url: site.url,
    title: `${site.name} | ${site.tagline}`,
    description: "Consultation-first smart home technology planning for Orange County homeowners."
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: "Consultation-first smart home technology planning for Orange County homeowners."
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": `${site.url}#business`,
            name: site.name,
            description: site.tagline,
            url: site.url,
            telephone: site.phone,
            email: site.email,
            areaServed: {
              "@type": "AdministrativeArea",
              name: site.serviceArea
            },
            address: {
              "@type": "PostalAddress",
              addressRegion: "CA",
              addressCountry: "US"
            },
            priceRange: "$$$",
            serviceType: [
              "Smart home consultation",
              "Home Wi-Fi and networking planning",
              "Security camera planning",
              "Smart lighting control consultation",
              "Motorized shade planning",
              "Home audio video planning",
              "Managed home technology support planning"
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Orange County smart home services",
              itemListElement: [
                "Smart home automation",
                "Home Wi-Fi and networking",
                "Security cameras",
                "Smart lighting control",
                "Motorized shades",
                "Home audio video and media rooms",
                "Managed home technology plans"
              ].map((name) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name
                }
              }))
            }
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
