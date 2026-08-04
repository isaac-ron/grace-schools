import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { Icon, PageHero, Section } from "@/components/ui";
import { EnquiryForm } from "./enquiry-form";

export const metadata: Metadata = {
  title: "Enquiries | The Grace Schools Chepilat",
  description:
    "Send an enquiry to The Grace Schools, Chepilat, about admission, curriculum, fees, boarding or transport.",
};

export default function EnquiriesPage() {
  return (
    <>
      <PageHero
        trail={[{ href: "/", label: "Home" }]}
        title="Enquiries"
        lede="Ask us anything about admission, curriculum, fees or boarding. A phone call usually gets you an answer faster."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_18rem]">
          <div>
            <h2 className="mb-8 border-b border-gold pb-4 text-2xl text-ink">
              Write to us
            </h2>
            <EnquiryForm />
          </div>

          <aside className="lg:pt-[4.5rem]">
            <div className="border border-t-2 border-line border-t-gold bg-surface p-6">
              <p className="doc-label text-ink-muted">Faster</p>
              <p className="mt-3 font-heading text-lg text-ink">Just call us</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                The office answers Monday to Friday, 7:30am to 5:00pm, and Saturday
                mornings.
              </p>
              <ul className="mt-5 flex flex-col">
                {SITE.phones.map((p) => (
                  <li key={p.tel}>
                    <a
                      href={`tel:${p.tel}`}
                      className="flex min-h-[44px] items-center gap-2 text-base font-semibold
                                 text-crimson transition-colors hover:text-crimson-dark
                                 focus-visible:outline-2 focus-visible:outline-offset-2
                                 focus-visible:outline-crimson"
                    >
                      <Icon name="phone" className="h-4 w-4" />
                      {p.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
