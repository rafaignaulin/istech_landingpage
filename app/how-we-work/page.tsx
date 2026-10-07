import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Working with ISTech | Vendor Overview',
  description:
    'How ISTech scopes, prices and delivers data platform and AI engineering work, and how to onboard us as an international vendor.',
  alternates: {
    canonical: 'https://istechdata.com/how-we-work',
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
          Registered in Brazil
          <br />
          istechdata.com
        </div>
      </div>

      <div className={styles.masthead}>
        <div className={styles.eyebrow}>Vendor overview · v2 · October 2026</div>
        <h1>Working with ISTech</h1>
        <p className={styles.dek}>
          For heads of data, CTOs, procurement teams and partner consultancies. How we scope, price
          and deliver, and how to onboard ISTech as an international vendor. It is routine, and
          this page shows exactly how.
        </p>
        <div className={styles.tldr}>
          <div>
            <span>Structure</span>
            <b>You contract ISTech, a company. B2B services agreement, no employment relationship.</b>
          </div>
          <div>
            <span>Scope</span>
            <b>Fixed-scope packages with a written deliverable. No hourly billing.</b>
          </div>
          <div>
            <span>Delivery</span>
            <b>Remote and async by default, on your systems and under your security policies.</b>
          </div>
          <div>
            <span>Markets</span>
            <b>
              United States first, plus Australia, New Zealand, the United Kingdom and Europe.
              Calls are scheduled inside your business day.
            </b>
          </div>
          <div>
            <span>Meetings</span>
            <b>One kickoff call, one written update a week, one handover call.</b>
          </div>
          <div>
            <span>Commercials</span>
            <b>Fixed price per package, invoiced in USD, AUD or EUR. Audits paid upfront, builds 50% at signature and 50% at delivery.</b>
          </div>
          <div>
            <span>Start</span>
            <b>Within 2 to 4 weeks of signature and vendor onboarding.</b>
          </div>
        </div>
        <div className={`${styles.callout} ${styles.ask}`}>
          <b>The fastest way in is the audit.</b> One week, fixed price, a written report ranked by
          expected saving, and a fixed quote for the fixes. The fee is credited in full if you go
          ahead within 30 days. <a href="/#contact">Book a 30-minute scoping call</a>.
        </div>
      </div>

      <section className={styles.section}>
        <h2>Who we are</h2>
        <p className={styles.lede}>
          ISTech is a data platform and AI engineering firm founded in 2023 and registered in
          Brazil. We make Databricks and Spark platforms cheaper and more reliable, and put AI agents
          on top that your team can trust.
        </p>
        <dl className={styles.facts}>
          <dt>Legal entity</dt>
          <dd>Ignaulin Soluções Tecnológicas (ISTech), Brazil</dd>
          <dt>Founded</dt>
          <dd>2023</dd>
          <dt>Clients</dt>
          <dd>Enterprise clients in the United States and Brazil</dd>
          <dt>Stack</dt>
          <dd>
            Databricks, Apache Spark, AWS, Azure, Airflow, Kafka, dbt, Terraform, Kubernetes, LLM
            agents and MCP servers
          </dd>
        </dl>
      </section>

      <section className={styles.section}>
        <h2>Engagement models</h2>
        <p className={styles.lede}>
          Every engagement is a fixed-scope package delivered by the ISTech
          team. Most clients start with the audit.
        </p>
        <div className={styles.grid3}>
          <div>
            <span className={styles.rec}>Step 1 · 1 week</span>
            <h3>Audit</h3>
            <p>
              Review of your 10 most expensive or least reliable jobs. Written report ranked by
              saving and effort, with a fixed price to implement the top fixes.
            </p>
          </div>
          <div>
            <span className={styles.rec}>Step 2 · 2 to 6 weeks</span>
            <h3>Fixed build</h3>
            <p>
              The audit fixes, an analytics serving layer, an analytics agent pilot or a pipeline
              automation sprint. One SOW, one deliverable, one price.
            </p>
          </div>
          <div>
            <span className={styles.rec}>Step 3 · Monthly</span>
            <h3>Retainer</h3>
            <p>
              A fixed monthly block of hours after a package, used async for reviews, fixes and
              architecture questions.
            </p>
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
                Our short MSA plus a SOW per package, or your standard vendor agreement if you
                prefer. Your governing law is fine. NDA and IP assignment included.
              </span>
            </div>
          </li>
          <li>
            <div>
              <b>Vendor onboarding</b>
              <span>
                We send company registration, address, the tax form for your country (W-8BEN-E for
                US clients) and bank details for payment in USD, AUD or EUR. Usually one week on the client side.
              </span>
            </div>
          </li>
          <li>
            <div>
              <b>Delivery</b>
              <span>
                Remote and async, on your systems, under your security and access policies. You
                provide read access to the relevant workspace or a copy of the data. Client data
                stays on client infrastructure.
              </span>
            </div>
          </li>
          <li>
            <div>
              <b>Billing</b>
              <span>
                Invoiced in USD, AUD or EUR against the SOW milestones, paid by international transfer or card.
                No payroll, no benefits, no visa, no employment relationship.
              </span>
            </div>
          </li>
        </ol>
        <div className={styles.callout}>
          <b>Nothing new is needed on our side.</b> This is exactly how our current clients pay us
          today.
        </div>

        <h3 className={styles.sub}>If you are a partner consultancy</h3>
        <p className={styles.lede} style={{ marginBottom: '12px' }}>
          Your firm signs with ISTech as a supplier, the same way you would sign with any
          subcontracting company. Your client sees your paper, as usual.
        </p>
        <ul className={styles.plain}>
          <li>
            Your standard supplier or subcontractor agreement works. Replace the individual
            contractor clauses (W-2, umbrella, sole trader) with company details.
          </li>
          <li>The audit and the agent pilot can be delivered under your brand.</li>
          <li>ISTech invoices your firm per milestone. You invoice your client as you normally do.</li>
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
          <dt>Who does the work?</dt>
          <dd>
            The ISTech team. The SOW names the delivery lead for each engagement.
          </dd>
          <dt>What does it cost?</dt>
          <dd>
            Each package has a fixed price, quoted after the scoping call. There is no hourly
            billing.
          </dd>
          <dt>What about timezone?</dt>
          <dd>
            Work is async by default, so your hours are not a constraint. The kickoff and handover
            calls are scheduled within your business day.
          </dd>
          <dt>Data access and security?</dt>
          <dd>
            Client data stays on client systems. We work through your VPN, your laptop policy and
            your access controls. If your security policy restricts access by country, tell us early
            and we will confirm whether the engagement fits.
          </dd>
          <dt>How fast can we start?</dt>
          <dd>Within 2 to 4 weeks of signature and vendor onboarding, depending on current commitments.</dd>
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
            <div className={styles.lbl}>Fewer Spark data reads on a multi-terabyte daily job</div>
          </div>
          <div>
            <div className={styles.num}>Billions</div>
            <div className={styles.lbl}>Rows of data behind the platforms we build</div>
          </div>
          <div>
            <div className={styles.num}>Weeks → hours</div>
            <div className={styles.lbl}>A/B test reporting, fully automated end to end</div>
          </div>
          <div>
            <div className={styles.num}>45M+</div>
            <div className={styles.lbl}>Customers served by a near real time segmentation platform</div>
          </div>
        </div>
        <p className={styles.certs}>
          13+ certifications, including AWS Solutions Architect Professional and Databricks Data
          Engineer Professional.
        </p>
      </section>

      <section className={styles.section}>
        <p className={styles.lede}>
          Open to partnerships with Databricks and Snowflake consultancies as subcontracted or
          white-label delivery.
        </p>
        <div className={styles.sign}>
          <div className={styles.who}>
            <b>ISTech</b>
            <span>Data platform and AI engineering</span>
          </div>
          <div className={styles.links}>
            <a href="mailto:contact@istechdata.com">contact@istechdata.com</a>
            <br />
            <a href="https://istechdata.com">istechdata.com</a>
            {/* TODO: add the ISTech company LinkedIn page here once its URL is confirmed. */}
          </div>
        </div>
      </section>

      <footer className={styles.pageFooter}>
        <span>ISTech · Ignaulin Soluções Tecnológicas · data platform and AI engineering, B2B</span>
        <span>working-with-istech · v2</span>
      </footer>
    </main>
  )
}
