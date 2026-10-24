import type { Metadata } from 'next'
import PageHeader from '../../components/page-header'
import SiteFooter from '../../components/site-footer'
import styles from '../_shared/info-page.module.css'

export const metadata: Metadata = { title: 'Shipping Policy — Miraaya Jewels', description: 'Delivery charges, shipping timelines, and areas we serve.' }

export default function ShippingPolicyPage() {
  return <main className={styles.page}>
    <PageHeader />
    <div className={styles.shell}>
      <div className={styles.breadcrumb}><a href="/">Home</a><span>›</span><strong>Shipping Policy</strong></div>
      <h1 className={styles.title}>Shipping Policy</h1>
      <p className={styles.lead}>We want your jewellery to reach you safely and on time. Below is an overview of how we handle delivery.</p>
      <div className={styles.callout}><p><strong>Note:</strong> Some shipping details below require client confirmation and are marked as <span className={styles.placeholder}>[Client confirmation required]</span>. Final values will be confirmed before the policy goes live.</p></div>
      <div className={styles.section}>
        <h2>Delivery Charges</h2>
        <p>The exact shipping fee and free-shipping threshold are <span className={styles.placeholder}>[Client confirmation required]</span>. These details will be finalized before orders go live.</p>
        <ul>
          <li>Free shipping threshold: <span className={styles.placeholder}>[Client confirmation required]</span></li>
          <li>Shipping fee below the threshold: <span className={styles.placeholder}>[Client confirmation required]</span></li>
          <li>Cash on Delivery is not available. Online payment is accepted through the configured payment gateway.</li>
        </ul>
      </div>
      <div className={styles.section}>
        <h2>Estimated Delivery Time</h2>
        <p>Expected delivery time is <span className={styles.placeholder}>[Client confirmation required]</span>. Delivery times may vary based on your location and product availability.</p>
      </div>
      <div className={styles.section}>
        <h2>Order Processing</h2>
        <p>Orders are processed after payment confirmation. You will receive an update once your order has been dispatched. If a tracking service is available, tracking details will be shared at that time.</p>
      </div>
      <div className={styles.section}>
        <h2>Shipping Areas</h2>
        <p>We currently ship across India. Serviceability to specific pin codes will be confirmed at checkout once the order system is live. <span className={styles.placeholder}>[Client confirmation required for any delivery exclusions]</span></p>
      </div>
      <div className={styles.section}>
        <h2>Damaged or Lost Shipments</h2>
        <p>If your parcel arrives damaged or is lost in transit, please contact our support team promptly. Customers may be asked to record an unboxing video showing the parcel opening and the issue, as described in our Returns &amp; Exchanges policy.</p>
      </div>
      <p className={styles.lastUpdated}>Last updated: [Client confirmation required] · This is a draft policy and subject to final approval.</p>
    </div>
    <SiteFooter />
  </main>
}
