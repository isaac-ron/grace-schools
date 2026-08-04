import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Grace Schools Chepilat | A School with a Difference",
  description:
    "The Grace Schools Chepilat is a faith-based institution offering CBC education from Lower Primary through Junior Secondary. Day and boarding options available.",
  keywords: ["Grace Schools", "Chepilat", "CBC curriculum", "Kenya school", "boarding school", "faith-based education"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // No icon-font stylesheet. It was a render-blocking request to Google for
    // eighty-two decorative glyphs, paid for in mobile data by parents on 3G.
    // The few functional marks are inline SVG in components/ui.tsx.
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
