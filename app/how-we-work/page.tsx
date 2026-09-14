import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Working with ISTech — Vendor Overview',
  description:
    'For recruiters, hiring managers and procurement: how to contract ISTech as an international vendor, engagement models, tax and compliance by country, and track record.',
  alternates: {
    canonical: 'https://istech.ignaulin.com/how-we-work',
  },
}

export default function HowWeWork() {
  return (
    <main className={styles.shell}>
      <div className={styles.letterhead}>
        <div className={styles.wordmark}>
          IST<span>ech</span>
        </div>
        <div className={styles.legal}>
          <b>Ignaulin Soluções Tecnológicas</b>
          <br />
          Santa Catarina, Brazil
          <br />
          istech.ignaulin.com
        </div>
      </div>

      <div className={styles.masthead}>
        <div className={styles.eyebrow}>Vendor overview · v1 · September 2026</div>
        <h1>Working with ISTech</h1>
        <p className={styles.dek}>
          For recruiters, hiring managers and procurement. It answers the question we get most
          often: how do we contract you if you are not in our country? Short answer: the same way
          you contract any international vendor. It is routine, and this page shows exactly how.
        </p>
        <div className={styles.tldr}>
          <div>
            <span>Structure</span>
            <b>Contract with ISTech, a company. No payroll, visa or work rights involved.</b>
          </div>
          <div>
            <span>Location</span>
            <b>Remote from Brazil, on your systems and security policies.</b>
          </div>
          <div>
            <span>Hours</span>
            <b>
              Full overlap with US and Brazil. For Australia and Europe, up to 4 hours of overlap
              with your day, agreed per engagement.
            </b>
          </div>
          <div>
            <span>Commercials</span>
            <b>Day or hourly rate quoted in your currency. Monthly invoice, net 30.</b>
          </div>
          <div>
            <span>Availability</span>
            <b>Start within 2 to 4 weeks of vendor onboarding. Interviews at your convenience.</b>
          </div>
        </div>
        <div className={`${styles.callout} ${styles.ask}`}>
          <b>The one question to ask your client:</b> &ldquo;Do you accept an international
          vendor working remotely?&rdquo; If the answer is yes, everything else is already solved
          on this page. If it is no, we both save a week.
        </div>
      </div>

      <section className={styles.section}>
        <h2>Who we are</h2>
        <p className={styles.lede}>
          ISTech is a data engineering consultancy founded in 2023 and registered in Brazil. We
          deliver senior data platform and AI engineering work to enterprise clients in the United
          States and Brazil, fully remote, aligned to the client&rsquo;s hours.
        </p>
        <dl className={styles.facts}>
          <dt>Legal entity</dt>
          <dd>Ignaulin Soluções Tecnológicas (ISTech), Brazil</dd>
          <dt>Founded</dt>
          <dd>2023</dd>
          <dt>Delivery lead</dt>
          <dd>Rafael Ignaulin, Founder and Principal Data Engineer</dd>
          <dt>Active clients</dt>
          <dd>Nike · Inter&amp;Co</dd>
          <dt>Stack</dt>
          <dd>
            Databricks, Apache Spark, AWS, Azure, Airflow, Kafka, dbt, Terraform, Kubernetes, LLM
            agents and MCP servers
          </dd>
        </dl>
      </section>

      <section className={styles.section}>
        <h2>Markets we know</h2>
        <p className={styles.lede}>
          We have delivered for our clients while based in each of these markets. Your setup,
          hours and business culture are known territory before the first call.
        </p>
        <div className={styles.grid3}>
          <div>
            <b>Australia and New Zealand</b>
            <span>
              Based in Sydney, Melbourne and Brisbane in 2026 while delivering for US clients.
              AEST hours, local tooling and contracting setup are familiar.
            </span>
          </div>
          <div>
            <b>Europe</b>
            <span>
              Based across the continent in 2025. Comfortable with EU and UK procurement, reverse
              charge VAT, and CET and GMT working days.
            </span>
          </div>
          <div>
            <b>United States and Brazil</b>
            <span>
              Home markets since 2023. Daily delivery for US enterprise teams, with company and
              banking infrastructure in Brazil already in place.
            </span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Engagement models</h2>
        <p className={styles.lede}>Three ways clients work with us. Most choose the first.</p>
        <div className={styles.grid3}>
          <div>
            <span className={styles.rec}>Most common</span>
            <h3>Dedicated senior engineer</h3>
            <p>
              Embedded in your team, on your tooling, on your hours. Day or hourly rate, invoiced
              monthly.
            </p>
          </div>
          <div>
            <span className={styles.rec}>Fixed scope</span>
            <h3>Project (SOW)</h3>
            <p>Platform build, migration, or AI integration with a defined deliverable and timeline.</p>
          </div>
          <div>
            <span className={styles.rec}>Part time</span>
            <h3>Fractional principal</h3>
            <p>Architecture, design reviews and mentoring for your data team, a few days a month.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>How contracting works</h2>
        <p className={styles.lede}>
          You contract a company, not an individual. It is the same process as onboarding any
          international vendor or SaaS supplier, and it runs through procurement, not HR.
        </p>
        <ol className={styles.steps}>
          <li>
            <div>
              <b>Agreement</b>
              <span>
                Your standard vendor or contractor agreement with ISTech, or our short MSA and SOW
                if you prefer. Your governing law is fine. NDA and IP assignment included.
              </span>
            </div>
          </li>
          <li>
            <div>
              <b>Vendor onboarding</b>
              <span>
                We send company registration, address, the tax form for your country and bank
                details in USD, AUD or EUR. Usually one week on the client side.
              </span>
            </div>
          </li>
          <li>
            <div>
              <b>Delivery</b>
              <span>
                Remote, on your systems, under your security and access policies. Client data
                stays on client infrastructure.
              </span>
            </div>
          </li>
          <li>
            <div>
              <b>Billing</b>
              <span>
                One invoice per month, paid by international transfer, net 30. No payroll, no
                benefits, no visa, no employment relationship.
              </span>
            </div>
          </li>
        </ol>
        <div className={styles.callout}>
          <b>Nothing new is needed on our side.</b> This is exactly how our current clients pay us
          today.
        </div>

        <h3 className={styles.sub}>If you are a recruitment agency or delivery partner</h3>
        <p className={styles.lede} style={{ marginBottom: '12px' }}>
          Your agency signs with ISTech as a supplier, the same way you would sign with any
          subcontracting company. Your client sees your paper, as usual.
        </p>
        <ul className={styles.plain}>
          <li>
            Your standard supplier or subcontractor agreement works. Replace the individual
            contractor clauses (ABN, PAYG, superannuation, W-2, umbrella) with company details.
          </li>
          <li>ISTech invoices your agency monthly. You invoice your client as you normally do.</li>
          <li>
            Professional indemnity and public liability cover can be arranged for the engagement
            if your client requires it.
          </li>
          <li>References from current clients and a background check are available on request.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Tax and compliance by country</h2>
        <p className={styles.lede}>
          Services are performed outside your country, which is what keeps this simple for your
          finance team.
        </p>
        <div className={styles.tablewrap}>
          <table>
            <thead>
              <tr>
                <th>Client country</th>
                <th>Form we provide</th>
                <th>Withholding</th>
                <th>Sales tax on invoice</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>United States</td>
                <td>W-8BEN-E</td>
                <td>
                  <span className={styles.none}>None</span> Foreign-source services, no 1099
                </td>
                <td>
                  <span className={styles.none}>None</span>
                </td>
              </tr>
              <tr>
                <td>Australia</td>
                <td>ATO &ldquo;Statement by a supplier&rdquo; on request</td>
                <td>
                  <span className={styles.none}>None</span> Not connected with Australia, no ABN
                  required
                </td>
                <td>
                  <span className={styles.none}>No GST</span>
                </td>
              </tr>
              <tr>
                <td>United Kingdom / EU</td>
                <td>Company registration on request</td>
                <td>
                  <span className={styles.none}>None</span>
                </td>
                <td>
                  <span className={styles.none}>No VAT</span> Reverse charge applies on your side
                </td>
              </tr>
              <tr>
                <td>Brazil</td>
                <td>NFS-e issued by ISTech</td>
                <td>Handled by us</td>
                <td>Handled by us</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: '16px', fontSize: '14px', color: 'var(--text-secondary)' }}>
          If your finance team has a requirement not listed here, send it over. We have not yet
          found one that could not be met.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Questions we usually get</h2>
        <dl className={styles.faq}>
          <dt>Do we need a legal entity in your country?</dt>
          <dd>No. You pay an international vendor invoice.</dd>
          <dt>Can we hire Rafael directly as an employee?</dt>
          <dd>
            Engagements run through ISTech. That is what makes the international setup simple for
            you, and it is how we have worked with every client since 2023.
          </dd>
          <dt>Who actually does the work?</dt>
          <dd>Rafael, named as delivery lead on the agreement. We do not swap people in.</dd>
          <dt>What about timezone?</dt>
          <dd>
            We align to your hours. We have delivered from 15+ countries across 6+ timezones for
            US and Brazilian clients at the same time, without missing delivery.
          </dd>
          <dt>Data access and security?</dt>
          <dd>
            Client data stays on client systems. We work through your VPN, your laptop policy and
            your access controls. If your end client requires access only from a specific
            country, tell us early and we will confirm whether the engagement fits.
          </dd>
          <dt>How fast can we start?</dt>
          <dd>Within 2 to 4 weeks of vendor onboarding, depending on current commitments.</dd>
          <dt>Is this legal for both sides?</dt>
          <dd>
            Yes. It is a cross-border services contract between two companies, the same structure
            used by every offshore consultancy and SaaS vendor you already pay. There is no
            employment relationship to misclassify and no work permit involved, because no one is
            working inside your country.
          </dd>
        </dl>
      </section>

      <section className={styles.section}>
        <h2>Track record</h2>
        <div className={styles.metrics}>
          <div>
            <div className={styles.num}>98%</div>
            <div className={styles.lbl}>Spark data reads cut on multi-terabyte pipelines</div>
          </div>
          <div>
            <div className={styles.num}>70%</div>
            <div className={styles.lbl}>AWS infrastructure cost reduction</div>
          </div>
          <div>
            <div className={styles.num}>~50x</div>
            <div className={styles.lbl}>More A/B test iterations, weeks to minutes</div>
          </div>
          <div>
            <div className={styles.num}>40M+</div>
            <div className={styles.lbl}>Customers served by a near real time segmentation engine</div>
          </div>
        </div>
        <p className={styles.certs}>
          13+ certifications, including AWS Solutions Architect Professional, Databricks Data
          Engineer Professional and Azure Solutions Architect Expert. Full resume at{' '}
          <a href="https://rafa.ignaulin.com/resume">rafa.ignaulin.com/resume</a>.
        </p>
      </section>

      <section className={styles.section}>
        <p className={styles.lede}>
          Open to partnerships with local consultancies and delivery partners as subcontracted or
          white-label senior capacity.
        </p>
        <div className={styles.sign}>
          <div className={styles.who}>
            <b>Rafael Ignaulin</b>
            <span>Founder and Principal Data Engineer, ISTech</span>
          </div>
          <div className={styles.links}>
            <a href="mailto:rafa@ignaulin.com">rafa@ignaulin.com</a>
            <br />
            <a href="https://istech.ignaulin.com">istech.ignaulin.com</a>
            <br />
            <a href="https://www.linkedin.com/in/rafa-ignaulin/">linkedin.com/in/rafa-ignaulin</a>
          </div>
        </div>
      </section>

      <footer className={styles.pageFooter}>
        <span>ISTech · Ignaulin Soluções Tecnológicas · data engineering, B2B</span>
        <span>working-with-istech · v1</span>
      </footer>
    </main>
  )
}
