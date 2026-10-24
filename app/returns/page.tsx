import type { Metadata } from 'next'
import PageHeader from '../../components/page-header'
import SiteFooter from '../../components/site-footer'
import styles from '../_shared/info-page.module.css'

export const metadata: Metadata = { title: 'Returns & Exchanges — Miraaya Jewels', description: 'Our return and exchange process for damaged or incorrect items.' }

export default function ReturnsPage() {
  return <main className={styles.page}>
    <PageHeader />
    <div className={styles.shell}>
      <div className={styles.breadcrumb}><a href="/">Home</a><span>›</span><strong>Returns &amp; Exchanges</strong></div>
      <h1 className={styles.title}>Returns &amp; Exchanges</h1>
      <p className={styles.lead}>We want you to love every piece you receive. If something is not right, here is how we can help.</p>
      <div className={styles.callout}><p><strong>Note:</strong> Some details below require client confirmation and are marked as <span className={styles.placeholder}>[Client confirmation required]</span>.</p></div>
      <div className={styles.section}>
        <h2>When Returns or Exchanges Are Considered</h2>
        <p>Returns or exchanges may be considered when the delivered parcel contains a damaged or incorrect product. Requests are reviewed on a case-by-case basis according to our policy.</p>
        <ul>
          <li>The delivered product is damaged</li>
          <li>The wrong product was delivered</li>
          <li>A missing item in a multi-item order</li>
        </ul>
      </div>
      <div className={styles.section}>
        <h2>Unboxing Video Requirement</h2>
        <p>To support a return or exchange request, customers must record an unboxing video showing:</p>
        <ol>
          <li>The sealed parcel before opening</li>
          <li>The parcel being opened</li>
          <li>The product inside and the specific issue (damage, wrong item, etc.)</li>
        </ol>
        <p>The store will review the evidence and confirm the next steps according to its policy.</p>
      </div>
      <div className={styles.section}>
        <h2>Return Window</h2>
        <p>The time frame within which a return or exchange request must be raised is <span className={styles.placeholder}>[Client confirmation required]</span>.</p>
      </div>
      <div className={styles.section}>
        <h2>Refund Process</h2>
        <p>Approved refunds will be processed through the original payment method. Refund timelines depend on your bank or payment provider and are <span className={styles.placeholder}>[Client confirmation required]</span>.</p>
      </div>
      <div className={styles.section}>
        <h2>How to Request a Return or Exchange</h2>
        <ol>
          <li>Contact our support team with your order details</li>
          <li>Share the unboxing video showing the issue</li>
          <li>Await review and confirmation of next steps</li>
        </ol>
      </div>
      <p className={styles.lastUpdated}>Last updated: [Client confirmation required] · This is a draft policy and subject to final approval.</p>
    </div>
    <SiteFooter />
  </main>
}
