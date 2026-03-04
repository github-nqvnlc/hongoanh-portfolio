// import { LayoutWithHeader } from "@/components/layout/layout-with-header"
import { ThemeProvider } from "@/components/theme-provider"
import "@/styles/globals.css"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import Script from "next/script"

import { Exo_2 } from "next/font/google"
import { LayoutWithNoHeader } from "@/components/layout/layout-with-noheader"

const exo2 = Exo_2({
  subsets: ["latin", "vietnamese", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-exo2",
})

export const metadata: Metadata = {
  title: "Van Loc | Frontend Developer Portfolio",
  description:
    "Explore Van Loc's portfolio - a skilled Frontend Developer specializing in Next.js, React, and modern web technologies. Showcasing innovative projects, UI/UX expertise, and high-performance web applications.",
  keywords: [
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Svelte Developer",
    "SvelteKit Developer",
    "Van Loc Portfolio",
    "Web Development",
    "UI/UX Design",
    "JavaScript",
    "TypeScript",
    "Svelte",
    "SvelteKit",
    "Tailwind CSS",
    "Shadcn UI",
    "Modern Web Technologies",
  ],
  openGraph: {
    title: "Van Loc | Frontend Developer Portfolio",
    description:
      "Discover Van Loc's expertise in Frontend Development, React, and Next.js. View projects, case studies, and technical skills.",
    url: "https://locnv.vercel.app",
    type: "website",
    images: [
      {
        url: "https://lxbsypbe5na5ujep.public.blob.vercel-storage.com/me/screenshot_1753153309.png",
        width: 1200,
        height: 630,
        alt: "Van Loc - Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Van Loc | Frontend Developer Portfolio",
    description:
      "Explore Van Loc's frontend projects and expertise in React, Next.js, and modern web development.",
    images: [
      "https://lxbsypbe5na5ujep.public.blob.vercel-storage.com/me/screenshot_1753153309.png",
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1275565930678425');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display:'none'}}
            src="https://www.facebook.com/tr?id=1275565930678425&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body
        className={`${exo2.variable} antialiased scroll-smooth w-full max-w-dvw overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {/* <LayoutWithHeader>{children}</LayoutWithHeader> */}
          <LayoutWithNoHeader>{children}</LayoutWithNoHeader>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
