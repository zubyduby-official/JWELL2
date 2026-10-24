import type { Metadata } from 'next'
import { Clock, Mail, Phone, Gem, ShieldCheck, Gift, Truck } from 'lucide-react'
import PageHeader from '../../components/page-header'
import SiteFooter from '../../components/site-footer'
import styles from '../_shared/info-page.module.css'

export const metadata: Metadata = { title: 'About Us — Miraaya Jewels', description: 'The story behind Miraaya Jewels — timeless elegance for every chapter of you.' }

export default function AboutPage() {
  return <main className={styles.page}>
    <PageHeader />
    <div className={styles.shell}>
      <p className={styles.eyebrow}>Our Story</p>
      <h1 className={styles.title}>More Than Jewellery</h1>
      <p className={styles.lead}>At Miraaya Jewels, we believe every piece of jewellery tells a story — of celebration, of love, of the person you are becoming. Our collections blend modern elegance with timeless beauty, crafted with care for every special moment.</p>
      <div className={styles.section}>
        <h2>What We Stand For</h2>
        <p>We create pieces that celebrate your unique style. Each item in our catalogue is thoughtfully selected to bring you fashion jewellery that looks premium and feels personal — whether it is for a wedding, a festive celebration, or an everyday moment of confidence.</p>
        <ul>
          <li><Gem aria-hidden="true" style={{ width: 16, display: 'inline', verticalAlign: '-2px', marginRight: 6, color: '#b8872b' }} /> Thoughtful designs that blend modern and classic aesthetics</li>
          <li><ShieldCheck aria-hidden="true" style={{ width: 16, display: 'inline', verticalAlign: '-2px', marginRight: 6, color: '#b8872b' }} /> Premium quality finishes in every piece</li>
          <li><Gift aria-hidden="true" style={{ width: 16, display: 'inline', verticalAlign: '-2px', marginRight: 6, color: '#b8872b' }} /> Careful packaging so your jewellery arrives beautifully</li>
          <li><Truck aria-hidden="true" style={{ width: 16, display: 'inline', verticalAlign: '-2px', marginRight: 6, color: '#b8872b' }} /> Reliable delivery to your doorstep</li>
        </ul>
      </div>
      <div className={styles.section}>
        <h2>Jewellery for Every Chapter of You</h2>
        <p>From necklaces and earrings to rings, bangles, and hair accessories, our collection is curated to suit every occasion. We are committed to helping you find the piece that feels just right — the one that becomes part of your story.</p>
      </div>
      <div className={styles.contactCard}>
        <h2>Get in Touch</h2>
        <p><Phone aria-hidden="true" /> 8076428336</p>
        <p><Mail aria-hidden="true" /> divyaguptamt@gmail.com</p>
        <p><Clock aria-hidden="true" /> 9 AM – 9 PM</p>
      </div>
      <p className={styles.lastUpdated}>Miraaya Jewels · GSTIN: 07BRMPG4513Q1ZC</p>
    </div>
    <SiteFooter />
  </main>
}
