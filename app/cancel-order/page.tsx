'use client'

import { useState } from 'react'
import { Package, ChevronDown, AlertCircle } from 'lucide-react'
import PageHeader from '../../components/page-header'
import SiteFooter from '../../components/site-footer'
import styles from '../_shared/info-page.module.css'
import formStyles from './cancel-order.module.css'

const reasons = [
  'Changed my mind',
  'Ordered by mistake',
  'Found a better price elsewhere',
  'Delivery taking too long',
  'Wrong product ordered',
  'Other reason',
]

export default function CancelOrderPage() {
  const [orderId, setOrderId] = useState('')
  const [reason, setReason] = useState('')
  const [details, setDetails] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const orderIdValid = orderId.trim().length >= 3
  const reasonValid = reason.length > 0
  const formValid = orderIdValid && reasonValid

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true) }

  return <main className={styles.page}>
    <PageHeader />
    <div className={styles.shell}>
      <div className={styles.breadcrumb}><a href="/">Home</a><span>›</span><a href="/track-order">Track Order</a><span>›</span><strong>Cancel Order</strong></div>
      <h1 className={styles.title}>Cancel Your Order</h1>
      <p className={styles.lead}>Submit a cancellation request using the form below. Our support team will review and confirm the cancellation. No order is cancelled automatically — requests require manual review.</p>

      <form onSubmit={handleSubmit} noValidate className={formStyles.form}>
        <div className={formStyles.field}>
          <label htmlFor="orderId">Order ID <span aria-hidden="true">*</span></label>
          <div className={formStyles.inputWrap}>
            <Package aria-hidden="true" />
            <input id="orderId" name="orderId" type="text" value={orderId} onChange={(e) => { setOrderId(e.target.value); setSubmitted(false) }} placeholder="Enter your order ID" autoComplete="off" aria-invalid={submitted && !orderIdValid} />
          </div>
          {submitted && !orderIdValid && <p className={formStyles.error}>Please enter a valid order ID.</p>}
        </div>

        <div className={formStyles.field}>
          <label htmlFor="reason">Reason for Cancellation <span aria-hidden="true">*</span></label>
          <div className={formStyles.inputWrap}>
            <select id="reason" name="reason" value={reason} onChange={(e) => { setReason(e.target.value); setSubmitted(false) }} aria-invalid={submitted && !reasonValid}>
              <option value="">Select a reason</option>
              {reasons.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
            <ChevronDown aria-hidden="true" className={formStyles.chevron} />
          </div>
          {submitted && !reasonValid && <p className={formStyles.error}>Please select a reason.</p>}
        </div>

        <div className={formStyles.field}>
          <label htmlFor="details">Additional Details <span className={formStyles.optional}>(optional)</span></label>
          <textarea id="details" name="details" value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Tell us more about your cancellation request…" rows={4} className={formStyles.textarea} />
        </div>

        <button type="submit" className={formStyles.submit}>Submit Cancellation Request</button>
      </form>

      {submitted && formValid && (
        <div className={formStyles.confirmation}>
          <div className={formStyles.confirmIcon}><AlertCircle aria-hidden="true" /></div>
          <div>
            <strong>Cancellation request received.</strong>
            <p>Your request for order <b>{orderId}</b> has been queued for review. Our support team will contact you at your registered email or phone. No order is cancelled automatically — this is a frontend-only request form until a backend order management service is configured.</p>
          </div>
        </div>
      )}

      <div className={styles.callout} style={{ marginTop: 32, maxWidth: 'none' }}>
        <p><strong>Need help?</strong> For urgent cancellation requests, email <a href="mailto:divyaguptamt@gmail.com" style={{ color: '#b8872b' }}>divyaguptamt@gmail.com</a> or call <a href="tel:8076428336" style={{ color: '#b8872b' }}>8076428336</a> (9 AM – 9 PM). Cancellation is only possible before the order is dispatched.</p>
      </div>
    </div>
    <SiteFooter />
  </main>
}