import type React from "react"
import type { Metadata } from "next"
import {
  Be_Vietnam_Pro,
  Playfair_Display,
} from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import { siteConfig } from "@/config/site"
import "./globals.css"

// Define fonts - Using Be Vietnam Pro for better Vietnamese support
const beVietnamPro = Be_Vietnam_Pro({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans"
})

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-heading"
})

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  generator: "v0.app",
  verification: {
    google: "K3M_sLGKa5m_nsvl3hnhaWvOtsdeuLvsjiB0iXe1vdA",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`
        ${beVietnamPro.variable} 
        ${playfair.variable} 
        font-sans antialiased
      `}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              name: "Home Spa",
              url: "https://avocado-spa.vercel.app/",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Đồng Xoài",
                addressRegion: "Bình Phước",
                addressCountry: "VN",
              },
              priceRange: "$$",
              areaServed: "Đồng Xoài",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: 4.9,
                reviewCount: 127,
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61563770278945",
              ],
            }),
          }}
        />
        {children}
        <Toaster position="top-center" richColors />
        <Analytics />
      </body>
    </html>
  )
}