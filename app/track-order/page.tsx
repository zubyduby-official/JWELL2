'use client'

import { useState } from 'react'
import { Search, Package, Truck } from 'lucide-react'
import PageHeader from '../../components/page-header'
import SiteFooter from '../../components/site-footer'
import styles from '../_shared/info-page.module.css'

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState('')
  const [touched, setTouched] = useState(false)

  return <main className={styles.page}>
    <PageHeader />
    <div className={styles.shell}>
      <div className={styles.breadcrumb}><a href="/">Home</a><span>›</span><strong>Track Order</strong></div>
      <h1 className={styles.title}>Track Your Order</h1>
      <p className={styles.lead}>Enter your order ID to check the status of your delivery. Live tracking will be available here once a tracking integration is configured.</p>

      <form onSubmit={(e) => { e.preventDefault(); setTouched(true) }} noValidate style={{ maxWidth: 520 }}>
        <label htmlFor="orderId" style={{ display: 'block', fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Order ID</label>
        <div style={{ position: 'relative', marginBottom: 12 }}>
          <Search aria-hidden="true" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', width: 20, height: 20, color: '#8a7f78' }} />
          <input
            id="orderId"
            name="orderId"
            type="text"
            value={orderId}
            onChange={(e) => { setOrderId(e.target.value); setTouched(false) }}
            placeholder="Enter your order ID"
            autoComplete="off"
            style={{ width: '100%', height: 52, border: '2px solid #e6d9cf', borderRadius: 8, background: '#fffdfa', color: '#171412', padding: '0 16px 0 48px', fontSize: 16, outline: 0, fontFamily: 'inherit' }}
          />
        </div>
        <button type="submit" style={{ height: 48, width: '100%', border: 0, borderRadius: 8, background: '#111', color: '#fff', fontSize: 16, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>Track Order</button>
      </form>

      {touched && (
        <div className={styles.callout} style={{ marginTop: 28, maxWidth: 520 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
            <Truck aria-hidden="true" style={{ width: 28, height: 28, color: '#b8872b', flex: 'none', marginTop: 2 }} />
            <div>
              <p style={{ fontWeight: 600, color: '#171412', marginBottom: 6 }}>Live tracking is not available yet</p>
              <p>Order tracking will appear here once a tracking service is integrated. No real-time courier data, order statuses, or tracking IDs are available at this time. Please contact our support team for order updates.</p>
            </div>
          </div>
        </div>
      )}

      <div style={{ marginTop: 36, maxWidth: 520 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#5d534c', fontSize: 15 }}>
          <Package aria-hidden="true" style={{ width: 22, height: 22, color: '#b8872b', flex: 'none' }} />
          <span>For order-related queries, email divyaguptamt@gmail.com or call 8076428336 (9 AM – 9 PM).</span>
        </div>
      </div>
    </div>
    <SiteFooter />
  </main>
}
