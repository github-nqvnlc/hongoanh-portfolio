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
  title: "Hồng Oanh | Digital Marketing & Content Specialist",
  description:
    "Explore Hồng Oanh's portfolio - a skilled Digital Marketing & Content Specialist specializing in Content SEO & Website Management, Fanpage Management, and Marketing in-house. Showcasing innovative projects, UI/UX expertise, and high-performance web applications.",
  keywords: [
    "Digital Marketing",
    "Content Specialist",
    "Content SEO",
    "Website Management",
    "Fanpage Management",
    "Marketing in-house",
    "Hồng Oanh Portfolio",
  ],
  openGraph: {
    title: "Hồng Oanh | Digital Marketing & Content Specialist",
    description:
      "Discover Hồng Oanh's expertise in Digital Marketing & Content Specialist. View projects, case studies, and technical skills.",
    url: "https://hongoanh.vercel.app",
    type: "website",
    images: [
      {
        url: "https://raw.githubusercontent.com/github-nqvnlc/hongoanh-portfolio/e1a0bcfdb38bbef5cdeeb3eaf08f6e882c8a26ed/public/images/bdv/bdv-2.jpg",
        width: 1200,
        height: 630,
        alt: "Hồng Oanh - Digital Marketing & Content Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hồng Oanh | Digital Marketing & Content Specialist",
    description:
      "Explore Hồng Oanh's digital marketing & content specialist projects and expertise in Content SEO & Website Management, Fanpage Management, and Marketing in-house.",
    images: [
      "https://raw.githubusercontent.com/github-nqvnlc/hongoanh-portfolio/e1a0bcfdb38bbef5cdeeb3eaf08f6e882c8a26ed/public/images/bdv/bdv-2.jpg",
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
