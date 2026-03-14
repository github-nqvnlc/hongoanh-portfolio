import { FullScreen } from "@/components/full-screen";
import { ExperienceTimeline } from "./containers/experience-timeline";

export const metadata = {
  title: "Experience | Locnv",
  description:
    "Explore the professional journey of Locnv - frontend developer with experience in modern JavaScript frameworks.",
  openGraph: {
    title: "Experience | Locnv",
    description:
      "Frontend Developer with hands-on experience in React, Next.js, and modern UI/UX design.",
    url: "https://locnv.vercel.app/experience",
    siteName: "Locnv",
    images: [
      // {
      //   url: "https://locnv.vercel.app/images/seo/experience-og-image.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "Locnv Dev Experience Page",
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience | Locnv Dev",
    description:
      "Check out Locnv Dev's past work and achievements in frontend development.",
    //   images: ["https://locnv.vercel.app/images/seo/experience-og-image.png"],
  },
  alternates: {
    canonical: "https://locnv.vercel.app/experience",
  },
};

export default function Page() {
  return (
    <div>
      <FullScreen>
        <ExperienceTimeline />
      </FullScreen>
    </div>
  );
}
