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
  title: 'isTech — B2B Data Engineering Consultancy',
  description: 'Expert data engineering consultancy serving US enterprise clients. Data platform architecture, cloud migrations, AI-integrated analytics, and enterprise consulting.',
  keywords: ['isTech', 'Data Engineering', 'Consultancy', 'B2B', 'AWS', 'Databricks', 'Spark', 'Kafka', 'Airflow', 'Terraform', 'AI', 'MCP', 'LLM', 'RAG'],
  openGraph: {
    title: 'isTech — B2B Data Engineering Consultancy',
    description: 'Expert data engineering consultancy serving US enterprise clients with operations expanding into Oceania and Europe.',
    url: 'https://istech.ignaulin.com',
    siteName: 'isTech',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'isTech — B2B Data Engineering Consultancy',
    description: 'Expert data engineering consultancy serving US enterprise clients.',
  },
  robots: {
    index: true,
    follow: true,
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem('istech-theme');
                if (t === 'light') document.documentElement.classList.add('light');
              } catch {}
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
