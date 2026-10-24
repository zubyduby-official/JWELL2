'use client'

import { useState } from 'react'
import { Clock, Mail, Phone, Send, MapPin } from 'lucide-react'
import PageHeader from '../../components/page-header'
import SiteFooter from '../../components/site-footer'
import styles from '../_shared/info-page.module.css'
import formStyles from './contact.module.css'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const nameValid = form.name.trim().length >= 2
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
  const messageValid = form.message.trim().length >= 10
  const formValid = nameValid && emailValid && messageValid

  const update = (field: keyof typeof form, value: string) => { setForm((c) => ({ ...c, [field]: value })); setSubmitted(false) }
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true) }

  return <main className={styles.page}>
    <PageHeader />
    <div className={styles.shell}>
      <div className={styles.breadcrumb}><a href="/">Home</a><span>›</span><strong>Contact Us</strong></div>
      <h1 className={styles.title}>Get in Touch</h1>
      <p className={styles.lead}>We are here to help. Reach out with any questions about your order, our products, or anything else — we will get back to you as soon as we can.</p>

      <div className={styles.contactCard} style={{ maxWidth: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 0, padding: 0 }}>
        <div className={formStyles.contactItem}><Phone aria-hidden="true" /><div><strong>Phone</strong><p><a href="tel:8076428336">8076428336</a></p></div></div>
        <div className={formStyles.contactItem}><Mail aria-hidden="true" /><div><strong>Email</strong><p><a href="mailto:divyaguptamt@gmail.com">divyaguptamt@gmail.com</a></p></div></div>
        <div className={formStyles.contactItem}><Clock aria-hidden="true" /><div><strong>Hours</strong><p>9 AM – 9 PM, All days</p></div></div>
        <div className={formStyles.contactItem}><MapPin aria-hidden="true" /><div><strong>GSTIN</strong><p>07BRMPG4513Q1ZC</p></div></div>
      </div>

      <form onSubmit={handleSubmit} noValidate className={formStyles.form} style={{ marginTop: 32 }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: 26, fontWeight: 600, margin: '0 0 20px' }}>Send Us a Message</h2>
        <div className={formStyles.row}>
          <div className={formStyles.field}>
            <label htmlFor="name">Your Name <span aria-hidden="true">*</span></label>
            <input id="name" name="name" type="text" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Enter your name" autoComplete="name" aria-invalid={submitted && !nameValid} />
            {submitted && !nameValid && <p className={formStyles.error}>Please enter your name.</p>}
          </div>
          <div className={formStyles.field}>
            <label htmlFor="email">Your Email <span aria-hidden="true">*</span></label>
            <input id="email" name="email" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="Enter your email" autoComplete="email" aria-invalid={submitted && !emailValid} />
            {submitted && !emailValid && <p className={formStyles.error}>Enter a valid email address.</p>}
          </div>
        </div>
        <div className={formStyles.field}>
          <label htmlFor="subject">Subject</label>
          <input id="subject" name="subject" type="text" value={form.subject} onChange={(e) => update('subject', e.target.value)} placeholder="What is this about?" />
        </div>
        <div className={formStyles.field}>
          <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
          <textarea id="message" name="message" value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Write your message here…" rows={5} aria-invalid={submitted && !messageValid} />
          {submitted && !messageValid && <p className={formStyles.error}>Please enter a message (at least 10 characters).</p>}
        </div>
        <button type="submit" className={formStyles.submit}><Send aria-hidden="true" /> Send Message</button>
      </form>

      {submitted && formValid && (
        <div className={formStyles.confirmation}>
          <strong>Thank you for reaching out!</strong>
          <p>Your message has been recorded. This contact form is a frontend-only interface — messages are not delivered until a backend email or messaging service is configured. For urgent enquiries, call <a href="tel:8076428336">8076428336</a> or email <a href="mailto:divyaguptamt@gmail.com">divyaguptamt@gmail.com</a>.</p>
        </div>
      )}
    </div>
    <SiteFooter />
  </main>
}