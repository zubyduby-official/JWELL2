import type { Metadata } from 'next'
import PageHeader from '../../components/page-header'
import SiteFooter from '../../components/site-footer'
import styles from '../_shared/info-page.module.css'

export const metadata: Metadata = { title: 'Privacy Policy — Miraaya Jewels', description: 'How Miraaya Jewels collects, uses, and protects your information.' }

export default function PrivacyPolicyPage() {
  return <main className={styles.page}>
    <PageHeader />
    <div className={styles.shell}>
      <div className={styles.breadcrumb}><a href="/">Home</a><span>›</span><strong>Privacy Policy</strong></div>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.lead}>Your privacy matters to us. This policy explains what information we collect and how we use it.</p>
      <div className={styles.callout}><p><strong>Note:</strong> This is a draft privacy policy. Legal terms require <span className={styles.placeholder}>[Client confirmation required]</span> and should be reviewed by a qualified professional before publication.</p></div>
      <div className={styles.section}>
        <h2>Information We Collect</h2>
        <p>When you place an order or contact us, we may collect:</p>
        <ul>
          <li>Your name, mobile number, and email address</li>
          <li>Your delivery address (city, state, pincode)</li>
          <li>Order details and payment information (processed securely through our payment gateway)</li>
          <li>Communication you send to us (e.g., support emails)</li>
        </ul>
      </div>
      <div className={styles.section}>
        <h2>How We Use Your Information</h2>
        <ul>
          <li>To process and deliver your orders</li>
          <li>To respond to your enquiries and support requests</li>
          <li>To send you updates about your order (if applicable)</li>
          <li>To inform you about new collections and offers, if you have subscribed to our newsletter</li>
        </ul>
      </div>
      <div className={styles.section}>
        <h2>Payment Security</h2>
        <p>Payment information is handled by our payment gateway provider. We do not store your full card or banking credentials on our servers. <span className={styles.placeholder}>[Client confirmation required for payment processor details]</span></p>
      </div>
      <div className={styles.section}>
        <h2>Sharing Your Information</h2>
        <p>We do not sell your personal information. We may share your details with service providers (such as delivery partners) solely to fulfil your order, or as required by law.</p>
      </div>
      <div className={styles.section}>
        <h2>Data Retention</h2>
        <p>We retain your information for as long as necessary to provide our services and comply with legal obligations. Specific retention periods are <span className={styles.placeholder}>[Client confirmation required]</span>.</p>
      </div>
      <div className={styles.section}>
        <h2>Your Rights</h2>
        <p>You may request access to, correction of, or deletion of your personal information by contacting us. <span className={styles.placeholder}>[Client confirmation required for specific rights and process]</span></p>
      </div>
      <div className={styles.section}>
        <h2>Contact Us</h2>
        <p>For privacy-related questions, email divyaguptamt@gmail.com or call 8076428336 (9 AM – 9 PM).</p>
      </div>
      <p className={styles.lastUpdated}>Last updated: [Client confirmation required] · This is a draft policy and subject to legal review.</p>
    </div>
    <SiteFooter />
  </main>
}
