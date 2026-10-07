import type { Metadata } from 'next'
import { Inter, Source_Serif_4, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/lib/theme-provider'
import { LocaleProvider } from '@/lib/locale-provider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-sans',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-serif',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://istechdata.com'),
  title: 'ISTech | Data Platform and AI Engineering',
  description: 'Data platform and AI engineering firm: cheaper, more reliable Databricks and Spark platforms and trustworthy AI agents on top. Fixed scope, fixed price.',
  keywords: ['ISTech', 'Data Engineering', 'Consultancy', 'B2B', 'AWS', 'Databricks', 'Spark', 'Kafka', 'Airflow', 'Terraform', 'AI', 'MCP', 'LLM', 'RAG'],
  authors: [{ name: 'ISTech' }],
  creator: 'ISTech',
  openGraph: {
    title: 'ISTech | Data Platform and AI Engineering',
    description: 'Cheaper, more reliable Databricks and Spark platforms and trustworthy AI agents on top. Fixed scope, fixed price, delivered remotely.',
    url: 'https://istechdata.com',
    siteName: 'ISTech',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISTech | Data Platform and AI Engineering',
    description: 'Cheaper, more reliable Databricks and Spark platforms and trustworthy AI agents on top.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://istechdata.com',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'ISTech',
              url: 'https://istechdata.com',
              description: 'Data platform and AI engineering firm. We make Databricks and Spark platforms cheaper and more reliable, and put trustworthy AI agents on top. Fixed scope, fixed price, delivered remotely.',
              foundingDate: '2023',
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'contact@istechdata.com',
                contactType: 'sales',
              },
              areaServed: ['US', 'AU', 'NZ', 'GB', 'EU'],
              knowsAbout: [
                'Data Engineering', 'Spark', 'Databricks', 'AWS', 'Kafka',
                'Airflow', 'Terraform', 'AI', 'MCP Servers', 'LLM Integration',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Fixed-scope packages',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Databricks cost and reliability audit', description: 'One-week review of the most expensive or least reliable Spark jobs, with a ranked written report and a fixed price for the fixes' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Analytics serving layer', description: 'One multi-grain table with a documented metric catalog in place of many aggregate tables' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Analytics agent pilot', description: 'Natural-language to SQL agent with confidence scoring, tracing in MLflow and an optional MCP server' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pipeline automation sprint', description: 'One manual spreadsheet process turned into an orchestrated pipeline with data-quality checks' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Retainer', description: 'A fixed monthly block of async hours for reviews, fixes and architecture questions' } },
                ],
              },
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var t = localStorage.getItem('istech-theme') ||
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.remove('light', 'dark');
                document.documentElement.classList.add(t);
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${sourceSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LocaleProvider>
            <Navbar />
            {children}
            <Footer />
          </LocaleProvider>
        </ThemeProvider>
        {/* Cloudflare Web Analytics (cookieless) */}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={JSON.stringify({ token: 'a75bd663b97d4e14b94fb576d3283783' })}
        />
      </body>
    </html>
  )
}
