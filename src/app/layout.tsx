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
    <html lang="en" className="h-full">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
