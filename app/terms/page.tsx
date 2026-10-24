import type { Metadata } from 'next'
import PageHeader from '../../components/page-header'
import SiteFooter from '../../components/site-footer'
import styles from '../_shared/info-page.module.css'

export const metadata: Metadata = { title: 'Terms & Conditions — Miraaya Jewels', description: 'The terms governing your use of the Miraaya Jewels website and services.' }

export default function TermsPage() {
  return <main className={styles.page}>
    <PageHeader />
    <div className={styles.shell}>
      <div className={styles.breadcrumb}><a href="/">Home</a><span>›</span><strong>Terms &amp; Conditions</strong></div>
      <h1 className={styles.title}>Terms &amp; Conditions</h1>
      <p className={styles.lead}>These terms govern your use of the Miraaya Jewels website and the purchase of products from our store.</p>
      <div className={styles.callout}><p><strong>Note:</strong> This is a draft terms document. Legal terms require <span className={styles.placeholder}>[Client confirmation required]</span> and should be reviewed by a qualified professional before publication.</p></div>
      <div className={styles.section}>
        <h2>Acceptance of Terms</h2>
        <p>By accessing this website and placing an order, you agree to these Terms &amp; Conditions. If you do not agree, please do not use this website.</p>
      </div>
      <div className={styles.section}>
        <h2>Products</h2>
        <p>Miraaya Jewels offers artificial and fashion jewellery. Product images are for reference; actual items may vary slightly in colour or finish. We strive to display accurate product information, but we do not warrant that all details (including descriptions, specifications, or pricing) are error-free.</p>
      </div>
      <div className={styles.section}>
        <h2>Pricing and Payment</h2>
        <p>All prices are listed in Indian Rupees (₹). Prices may change without notice. Payment is accepted online through our payment gateway. Cash on Delivery is not available. <span className={styles.placeholder}>[Client confirmation required for payment processor and any tax-inclusion details]</span></p>
      </div>
      <div className={styles.section}>
        <h2>Orders</h2>
        <p>We reserve the right to accept or decline an order at our discretion. If we are unable to fulfil an order after payment, we will arrange a refund through the original payment method.</p>
      </div>
      <div className={styles.section}>
        <h2>Shipping and Delivery</h2>
        <p>Delivery is subject to our Shipping Policy. Estimated delivery times are indicative and not guaranteed. We are not liable for delays caused by courier services or circumstances beyond our control.</p>
      </div>
      <div className={styles.section}>
        <h2>Returns and Exchanges</h2>
        <p>Returns or exchanges are handled according to our Returns &amp; Exchanges policy. Please refer to that policy for eligibility, the unboxing video requirement, and the process.</p>
      </div>
      <div className={styles.section}>
        <h2>Intellectual Property</h2>
        <p>All content on this website — including images, logos, designs, and text — is the property of Miraaya Jewels and may not be reproduced without permission.</p>
      </div>
      <div className={styles.section}>
        <h2>Limitation of Liability</h2>
        <p>To the extent permitted by law, Miraaya Jewels shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or the purchase of products. <span className={styles.placeholder}>[Client confirmation required for specific liability terms]</span></p>
      </div>
      <div className={styles.section}>
        <h2>Governing Law</h2>
        <p>These terms are governed by the laws of India. <span className={styles.placeholder}>[Client confirmation required for jurisdiction and dispute resolution details]</span></p>
      </div>
      <div className={styles.section}>
        <h2>Changes to These Terms</h2>
        <p>We may update these terms from time to time. The updated version will be posted on this page with a revised last-updated date.</p>
      </div>
      <div className={styles.section}>
        <h2>Contact Us</h2>
        <p>For questions about these terms, email divyaguptamt@gmail.com or call 8076428336 (9 AM – 9 PM).</p>
      </div>
      <p className={styles.lastUpdated}>Last updated: [Client confirmation required] · This is a draft document and subject to legal review. · GSTIN: 07BRMPG4513Q1ZC</p>
    </div>
    <SiteFooter />
  </main>
}
