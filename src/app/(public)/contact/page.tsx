import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { ButtonLink, Icon, PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact | The Grace Schools Chepilat",
  description:
    "Call, email or visit The Grace Schools in Chepilat Town, opposite Summit Hospital. Office hours and directions.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        trail={[{ href: "/", label: "Home" }]}
        title="Contact"
        lede="Questions about admission, curriculum or life at the school. Call the office, or come and see the place."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="border-b border-gold pb-4 text-2xl text-ink">
              Get in touch
            </h2>

            <dl className="mt-2">
              <ContactRow icon="pin" label="Address">
                <p className="text-base text-ink">{SITE.address}</p>
                <p className="mt-0.5 text-sm text-ink-soft">Chepilat, Kenya</p>
              </ContactRow>

              <ContactRow icon="phone" label="Phone">
                <div className="flex flex-col">
                  {SITE.phones.map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      className="flex min-h-[36px] items-center text-base text-ink
                                 transition-colors hover:text-crimson
                                 focus-visible:outline-2 focus-visible:outline-offset-2
                                 focus-visible:outline-crimson"
                    >
                      {p.display}
                    </a>
                  ))}
                </div>
              </ContactRow>

              <ContactRow icon="mail" label="Email">
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex min-h-[36px] items-center break-all text-base text-ink
                             transition-colors hover:text-crimson
                             focus-visible:outline-2 focus-visible:outline-offset-2
                             focus-visible:outline-crimson"
                >
                  {SITE.email}
                </a>
              </ContactRow>

              <ContactRow label="Office hours">
                <p className="text-base text-ink">
                  Monday to Friday, 7:30am to 5:00pm
                </p>
                <p className="mt-0.5 text-sm text-ink-soft">
                  Saturday, 8:00am to noon
                </p>
              </ContactRow>
            </dl>

            <div className="mt-10 border border-t-2 border-line border-t-gold bg-surface p-6">
              <p className="font-heading text-lg text-ink">Prefer to write?</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Send an enquiry and we will reply within one or two working days.
              </p>
              <div className="mt-5">
                <ButtonLink href="/enquiries">Send an enquiry</ButtonLink>
              </div>
            </div>
          </div>

          <div>
            <h2 className="border-b border-gold pb-4 text-2xl text-ink">Find us</h2>
            <div className="mt-8 border border-line">
              <iframe
                title="The Grace Schools on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.7626657333954!2d35.06862607242626!3d-0.6943673537841257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182b0d9e47d6b151%3A0xa03f3d0435a2065f!2sThe%20Grace%20Schools%20Chepilat%20Township!5e0!3m2!1sen!2ske!4v1779263937537!5m2!1sen!2ske"
                className="block h-80 w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-6 text-base leading-relaxed text-ink-soft">
              We are in <strong className="text-ink">Chepilat Town, opposite
              Summit Hospital</strong>. Visitors are welcome during office hours.
              Call ahead if you would like someone to show you round.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon?: "pin" | "phone" | "mail";
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 border-b border-line py-5">
      <span className="w-5 shrink-0 pt-1 text-crimson">
        {icon && <Icon name={icon} className="h-5 w-5" />}
      </span>
      <div className="min-w-0 flex-1">
        <dt className="doc-label text-ink-muted">{label}</dt>
        <dd className="mt-1">{children}</dd>
      </div>
    </div>
  );
}
