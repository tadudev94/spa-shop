import { Hero } from "@/components/business/hero"
import { ServicesGrid } from "@/components/business/services-grid"
import { GalleryGrid } from "@/components/business/gallery-grid"
import { ReviewsCarousel } from "@/components/business/reviews-carousel"
import { BookingSection } from "@/components/business/booking-section"
import { FloatingContact } from "@/components/business/floating-contact"
import { siteConfig } from "@/config/site"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <ThemeProvider />
      <FloatingContact />

      {siteConfig.sections.hero && <Hero />}
      {siteConfig.sections.services && <ServicesGrid />}
      {siteConfig.sections.gallery && <GalleryGrid />}
      {siteConfig.sections.reviews && <ReviewsCarousel />}
      {siteConfig.sections.contact && <BookingSection />}

      {/* Footer */}
      <footer className="bg-muted py-12 text-center text-muted-foreground border-t">
        <div className="container px-4">
          <p className="font-serif text-lg mb-2">{siteConfig.name}</p>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

export const metadata = {
  title: "Nặn mụn & điều trị da tại Đồng Xoài | Home Spa",
  description:
    "Home Spa chuyên nặn mụn, chăm sóc và điều trị da an toàn tại Đồng Xoài. Liệu trình chuẩn y khoa, không thâm sẹo, đặt lịch nhanh.",
  alternates: {
    canonical: "https://avocado-spa.vercel.app",
  },
  openGraph: {
    title: "Nặn mụn & điều trị da tại Đồng Xoài | Home Spa",
    description:
      "Spa nặn mụn và điều trị da uy tín tại Đồng Xoài. Chăm sóc da chuyên sâu, không đau, an toàn cho da nhạy cảm.",
    url: "https://avocado-spa.vercel.app/",
    images: [
      {
        url: "/og-spa-dong-xoai.jpg",
        width: 1200,
        height: 630,
        alt: "Spa nặn mụn và điều trị da tại Đồng Xoài",
      },
    ],

  },
  robots: {
    index: true,
    follow: true,
  },
}
