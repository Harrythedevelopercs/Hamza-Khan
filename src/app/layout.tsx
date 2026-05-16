import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hamza-khan.vercel.app"),
  title: {
    default: "Hamza Khan | Full Stack Web Developer",
    template: "%s | Hamza Khan",
  },
  description:
    "Hamza Khan is a Full Stack Web Developer from Karachi, Pakistan specializing in Laravel, PHP, WordPress development, Next.js, APIs, DevOps, and scalable web solutions.",
  keywords: [
    "Hamza Khan",
    "Full Stack Web Developer",
    "Laravel Developer Pakistan",
    "PHP Developer Karachi",
    "WordPress Developer",
    "Next.js Developer",
    "Backend Developer",
    "API Developer",
    "Web Development Pakistan",
    "Portfolio",
  ],
  authors: [{ name: "Hamza Khan", url: "https://hamza-khan.vercel.app" }],
  creator: "Hamza Khan",
  publisher: "Hamza Khan",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "/",
    title: "Hamza Khan | Full Stack Web Developer",
    description:
      "Full Stack Web Developer from Karachi specializing in Laravel, PHP, WordPress, Next.js, APIs, and scalable web solutions.",
    siteName: "Hamza Khan Portfolio",
    images: [
      {
        url: "/hamza-profile.jpg",
        width: 360,
        height: 360,
        alt: "Hamza Khan - Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamza Khan | Full Stack Web Developer",
    description:
      "Laravel, PHP, WordPress, Next.js, APIs, DevOps, and scalable web solutions.",
    images: ["/hamza-profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "portfolio",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050506",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
