import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vince Lapore — Developer",
  description:
    "Developer specialising in web apps and digital products — for creatives, businesses, and anyone with a problem worth solving.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
