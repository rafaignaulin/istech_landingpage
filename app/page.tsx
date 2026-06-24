import Hero from '@/components/Hero'
import About from '@/components/About'
import Mission from '@/components/Mission'
import Highlights from '@/components/Highlights'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
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
            knowsAbout: [
              'Data Engineering', 'Spark', 'Databricks', 'AWS', 'Kafka',
              'Airflow', 'Terraform', 'AI', 'MCP Servers', 'LLM Integration',
            ],
          }),
        }}
      />
      <Hero />
      <About />
      <Mission />
      <Highlights />
      <Contact />
    </main>
  )
}
