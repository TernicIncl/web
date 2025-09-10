import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ternic | Custom Servers & Proprietary CPU Architecture",
  description:
    "Ternic designs custom-built servers and develops proprietary CPU ISA architecture, pushing the boundaries of high-performance computing and energy-efficient infrastructure.",
  keywords: [
    "custom servers",
    "CPU architecture",
    "proprietary ISA",
    "high-performance computing",
    "edge computing",
    "data center solutions",
    "Ternic",
    "server hardware",
    "energy-efficient servers",
    "next-gen computing"
  ],
  alternates: {
    canonical: "https://www.ternic.eu",
  },
  openGraph: {
    title: "Ternic | Custom Servers & Proprietary CPU Architecture",
    description:
      "Explore Ternic’s next-gen server hardware and proprietary CPU ISA architecture — built for performance, scalability, and energy efficiency.",
    url: "https://www.ternic.eu",
    siteName: "Ternic",
    images: [
      {
        url: "https://www.ternic.eu/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Ternic - Custom Servers & CPU Architecture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ternic | Custom Servers & Proprietary CPU Architecture",
    description:
      "Discover Ternic’s cutting-edge server solutions and proprietary CPU designs for next-generation computing.",
    images: ["https://www.ternic.eu/og-image.jpg"], 
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
