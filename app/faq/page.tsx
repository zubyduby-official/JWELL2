'use client'

import { useState } from 'react'
import { Minus, Plus, Phone, Mail, Clock } from 'lucide-react'
import PageHeader from '../../components/page-header'
import SiteFooter from '../../components/site-footer'
import styles from '../_shared/info-page.module.css'
import faqStyles from './faq.module.css'

const faqGroups: { group: string; items: [string, string][] }[] = [
  {
    group: 'Products & Quality',
    items: [
      ['What material is the jewellery made of?', 'Miraaya Jewels offers artificial and fashion jewellery. Refer to the individual product description for the material and finish of each piece.'],
      ['Are the product images accurate?', 'Product images are for reference. Actual items may vary slightly in colour or finish due to lighting and display settings.'],
      ['Is the jewellery skin-friendly?', 'Our products are designed to be skin-friendly. However, if you have specific allergies, please review the product description or contact us before purchasing.'],
    ],
  },
  {
    group: 'Ordering & Tracking',
    items: [
      ['How can I track my order?', 'Customers can use the Track Order page on our website with their order ID. Tracking information will be shown once a tracking integration is configured.'],
      ['Can I cancel my order?', 'Yes — submit a cancellation request via the Cancel Order page. Requests are reviewed manually and are only possible before the order is dispatched.'],
      ['How do I change my delivery address after ordering?', 'Please contact our support team immediately at 8076428336 or divyaguptamt@gmail.com. Address changes may not be possible once the order is dispatched.'],
    ],
  },
  {
    group: 'Delivery & Shipping',
    items: [
      ['What are the delivery charges and time?', 'Delivery is free on purchases above ₹2,000. A ₹100 delivery charge applies to purchases below ₹2,000. Expected delivery time is 5–7 days.'],
      ['Do you ship across India?', 'We currently ship across India. Serviceability to specific pin codes will be confirmed at checkout once the order system is live.'],
      ['Is Cash on Delivery available?', 'No. Online payment is accepted through the configured payment flow. Cash on Delivery is not available.'],
    ],
  },
  {
    group: 'Payments',
    items: [
      ['What payment methods are accepted?', 'Online payment is accepted through our payment gateway, including UPI, Visa, Mastercard, and RuPay.'],
      ['Is my payment information secure?', 'Payment information is handled by our payment gateway provider. We do not store your full card or banking credentials on our servers.'],
    ],
  },
  {
    group: 'Returns & Exchanges',
    items: [
      ['What is your return or exchange policy?', 'Returns or exchanges may be considered when the delivered parcel contains a damaged or incorrect product. Customers must record an unboxing video showing the parcel opening and the issue. The store will review the evidence and confirm next steps.'],
      ['How long do I have to request a return?', 'The return window is marked as [Client confirmation required]. Please contact our support team promptly after receiving your order.'],
      ['How are refunds processed?', 'Approved refunds will be processed through the original payment method. Refund timelines depend on your bank or payment provider and are [Client confirmation required].'],
    ],
  },
  {
    group: 'Account & Support',
    items: [
      ['How do I create an account?', 'You can register using the Login page. Click the Register tab and fill in your details. Authentication requires a backend service to be fully configured.'],
      ['How do I contact customer support?', 'Call us at 8076428336, email divyaguptamt@gmail.com, or use the Contact Us page. Our support hours are 9 AM – 9 PM, all days.'],
      ['What are your support hours?', 'Our support team is available from 9 AM to 9 PM, all days of the week.'],
    ],
  },
]

function FaqItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  const panelId = `faq-panel-${question.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 40)}`
  return <div className={`${faqStyles.item} ${isOpen ? faqStyles.itemOpen : ''}`}>
    <button type="button" className={faqStyles.trigger} aria-expanded={isOpen} aria-controls={panelId} onClick={onToggle}>
      <span>{question}</span>
      {isOpen ? <Minus aria-hidden="true" /> : <Plus aria-hidden="true" />}
    </button>
    {isOpen && <p id={panelId} className={faqStyles.answer}>{answer}</p>}
  </div>
}

export default function FaqPage() {
  const [openKey, setOpenKey] = useState<string | null>(null)

  return <main className={styles.page}>
    <PageHeader />
    <div className={styles.shell}>
      <div className={styles.breadcrumb}><a href="/">Home</a><span>›</span><strong>FAQs</strong></div>
      <h1 className={styles.title}>Frequently Asked Questions</h1>
      <p className={styles.lead}>Find quick answers to common questions about ordering, delivery, payments, returns, and more. If you can&apos;t find what you are looking for, please contact our support team.</p>

      <div className={faqStyles.groups}>
        {faqGroups.map((section) => (
          <section key={section.group} className={faqStyles.groupSection}>
            <h2 className={faqStyles.groupTitle}>{section.group}</h2>
            <div className={faqStyles.accordion}>
              {section.items.map(([question, answer]) => {
                const key = `${section.group}::${question}`
                return <FaqItem key={key} question={question} answer={answer} isOpen={openKey === key} onToggle={() => setOpenKey(openKey === key ? null : key)} />
              })}
            </div>
          </section>
        ))}
      </div>

      <div className={styles.contactCard} style={{ marginTop: 36, maxWidth: 'none' }}>
        <h2 style={{ marginTop: 0 }}>Still Have Questions?</h2>
        <p><Phone aria-hidden="true" /> <a href="tel:8076428336">8076428336</a></p>
        <p><Mail aria-hidden="true" /> <a href="mailto:divyaguptamt@gmail.com">divyaguptamt@gmail.com</a></p>
        <p><Clock aria-hidden="true" /> 9 AM – 9 PM, All days</p>
      </div>
    </div>
    <SiteFooter />
  </main>
}