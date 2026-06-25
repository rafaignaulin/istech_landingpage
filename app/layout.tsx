import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/lib/theme-provider'
import { LocaleProvider } from '@/lib/locale-provider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://istech.ignaulin.com'),
  title: 'isTech — B2B Data Engineering Consultancy',
  description: 'Expert data engineering consultancy serving US enterprise clients. Data platform architecture, cloud migrations, AI-integrated analytics, and enterprise consulting.',
  keywords: ['isTech', 'Data Engineering', 'Consultancy', 'B2B', 'AWS', 'Databricks', 'Spark', 'Kafka', 'Airflow', 'Terraform', 'AI', 'MCP', 'LLM', 'RAG'],
  authors: [{ name: 'Rafael Ignaulin' }],
  creator: 'Rafael Ignaulin',
  openGraph: {
    title: 'isTech — B2B Data Engineering Consultancy',
    description: 'Expert data engineering consultancy serving US enterprise clients with operations expanding into Oceania and Europe.',
    url: 'https://istech.ignaulin.com',
    siteName: 'isTech',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'isTech — B2B Data Engineering Consultancy',
    description: 'Expert data engineering consultancy serving US enterprise clients.',
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
    canonical: 'https://istech.ignaulin.com',
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
              name: 'isTech',
              url: 'https://istech.ignaulin.com',
              description: 'Expert data engineering consultancy serving US enterprise clients, with operations expanding into Oceania and Europe.',
              founder: {
                '@type': 'Person',
                name: 'Rafael Ignaulin',
                jobTitle: 'Senior Data Engineer',
                url: 'https://rafa.ignaulin.com',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'rafa@ignaulin.com',
                contactType: 'sales',
              },
              areaServed: ['US', 'AU', 'NZ', 'EU'],
              knowsAbout: [
                'Data Engineering', 'Spark', 'Databricks', 'AWS', 'Kafka',
                'Airflow', 'Terraform', 'AI', 'MCP Servers', 'LLM Integration',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Data Engineering Services',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Platform Architecture', description: 'End-to-end data platform design with Spark, Databricks, and cloud-native tools' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud & Infrastructure', description: 'AWS cloud migrations, Terraform IaC, and scalable infrastructure' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI & LLM Integration', description: 'MCP servers, RAG pipelines, and AI-integrated analytics' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Enterprise Consulting', description: 'Strategic data engineering consulting for Fortune 500 companies' } },
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
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <LocaleProvider>
            <Navbar />
            {children}
            <Footer />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
