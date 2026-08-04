import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import { ApplyForm } from "./apply-form";

export const metadata: Metadata = {
  title: "Apply | The Grace Schools Chepilat",
  description:
    "Apply for a place at The Grace Schools, Chepilat, from Pre-Primary through Grade 9. Day and boarding places available.",
};

export default function ApplyPage() {
  return (
    <>
      <PageHero
        trail={[{ href: "/", label: "Home" }]}
        title="Apply for admission"
        lede="Places are open from Pre-Primary through Grade 9, day and boarding. Fill this in and the office will follow up with next steps."
      />

      <Section>
        <div className="mx-auto max-w-2xl">
          <ApplyForm />
        </div>
      </Section>
    </>
  );
}
