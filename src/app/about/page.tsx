import { Metadata } from "next"
import { ComingSoonPage } from "@/components/layout/coming-soon"

export const metadata: Metadata = {
  title: "About | Locnv",
  description:
    "Learn more about Locnv - Frontend Developer, JavaScript enthusiast, and tech explorer.",
  keywords: [
    "Van Loc",
    "About Van Loc",
    "Frontend Developer",
    "JavaScript",
    "Next.js",
    "Vietnam Developer",
  ],
  openGraph: {
    title: "About | Locnv",
    description:
      "Discover the story and journey of Locnv in the world of web development.",
    url: "https://locnv.vercel.app/about",
    siteName: "Locnv",
    type: "website",
    locale: "en_US",
    images: [
      // {
      //   url: "https://locnv.vercel.app/images/seo/about-og-image.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "Locnv About Page",
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Locnv",
    description:
      "Learn more about Locnv - Frontend Developer and tech enthusiast.",
    // images: ["https://locnv.vercel.app/images/seo/about-og-image.png"],
  },
  alternates: {
    canonical: "https://locnv.vercel.app/about",
  },
}

export default function Page() {
  return <ComingSoonPage pageName="About" />
}
