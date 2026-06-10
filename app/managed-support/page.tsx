import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceImagePage } from "@/components/ServiceImagePage";
import { getPage } from "@/lib/pages";
import { serviceImagePages } from "@/lib/serviceImageContent";

const canonicalSlug = "managed-support";
const sourceSlug = "managed-home-technology-plans";

export const metadata: Metadata = {
  title: "Managed Smart Home Support Plans | Elegant Home Automation",
  description: "Ongoing smart home technology support for Orange County homeowners who want reliable systems, planning, and a trusted team after installation.",
  alternates: { canonical: `/${canonicalSlug}` }
};

export default function ManagedSupportPage() {
  const page = getPage(sourceSlug);
  const content = serviceImagePages[sourceSlug];

  if (!page || !content) notFound();

  return <ServiceImagePage page={{ ...page, slug: canonicalSlug }} content={content} />;
}
