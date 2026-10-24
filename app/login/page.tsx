'use client'

import { useState } from 'react'
import { ArrowRight, Eye, EyeOff, Lock, Mail, Phone, UserRound } from 'lucide-react'
import PageHeader from '../../components/page-header'
import SiteFooter from '../../components/site-footer'
import styles from './login.module.css'

type Mode = 'login' | 'register'

export default function LoginPage() {
  const [mode, setMode] = useState<Mode>('login')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', mobile: '', email: '', password: '', confirm: '' })

  const switchMode = (next: Mode) => { setMode(next); setSubmitted(false) }

  const update = (field: keyof typeof form, value: string) => setForm((current) => ({ ...current, [field]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const passwordsMatch = mode === 'register' ? form.password === form.confirm : true
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
  const mobileValid = mode === 'register' ? /^[6-9]\d{9}$/.test(form.mobile.replace(/\D/g, '')) : true
  const nameValid = mode === 'register' ? form.name.trim().length >= 2 : true
  const passwordValid = form.password.length >= 6
  const formValid = emailValid && passwordValid && passwordsMatch && mobileValid && nameValid

  return <main className={styles.page}>
    <PageHeader />
    <div className={styles.shell}>
      <div className={styles.breadcrumb}><a href="/">Home</a><span>›</span><strong>{mode === 'login' ? 'Login' : 'Register'}</strong></div>

      <div className={styles.card}>
        <div className={styles.tabs} role="tablist" aria-label="Account">
          <button role="tab" aria-selected={mode === 'login'} className={mode === 'login' ? styles.activeTab : ''} onClick={() => switchMode('login')}>Login</button>
          <button role="tab" aria-selected={mode === 'register'} className={mode === 'register' ? styles.activeTab : ''} onClick={() => switchMode('register')}>Register</button>
        </div>

        <h1 className={styles.title}>{mode === 'login' ? 'Welcome Back' : 'Create Your Account'}</h1>
        <p className={styles.subtitle}>{mode === 'login' ? 'Sign in to continue your journey with Miraaya Jewels.' : 'Join us to save your favourites and track your orders.'}</p>

        <form onSubmit={handleSubmit} noValidate>
          {mode === 'register' && (
            <div className={styles.field}>
              <label htmlFor="name">Full Name <span aria-hidden="true">*</span></label>
              <div className={styles.inputWrap}>
                <UserRound aria-hidden="true" />
                <input id="name" name="name" type="text" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Enter your full name" autoComplete="name" aria-invalid={submitted && !nameValid} />
              </div>
              {submitted && !nameValid && <p className={styles.error}>Please enter your full name.</p>}
            </div>
          )}

          {mode === 'register' && (
            <div className={styles.field}>
              <label htmlFor="mobile">Mobile Number <span aria-hidden="true">*</span></label>
              <div className={styles.inputWrap}>
                <Phone aria-hidden="true" />
                <input id="mobile" name="mobile" type="tel" value={form.mobile} onChange={(e) => update('mobile', e.target.value)} placeholder="Enter 10-digit mobile number" autoComplete="tel" aria-invalid={submitted && !mobileValid} />
              </div>
              {submitted && !mobileValid && <p className={styles.error}>Enter a valid 10-digit mobile number.</p>}
            </div>
          )}

          <div className={styles.field}>
            <label htmlFor="email">Email Address <span aria-hidden="true">*</span></label>
            <div className={styles.inputWrap}>
              <Mail aria-hidden="true" />
              <input id="email" name="email" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="Enter your email address" autoComplete="email" aria-invalid={submitted && !emailValid} />
            </div>
            {submitted && !emailValid && <p className={styles.error}>Enter a valid email address.</p>}
          </div>

          <div className={styles.field}>
            <label htmlFor="password">Password <span aria-hidden="true">*</span></label>
            <div className={styles.inputWrap}>
              <Lock aria-hidden="true" />
              <input id="password" name="password" type={showPassword ? 'text' : 'password'} value={form.password} onChange={(e) => update('password', e.target.value)} placeholder="Enter your password" autoComplete={mode === 'login' ? 'current-password' : 'new-password'} aria-invalid={submitted && !passwordValid} />
              <button type="button" className={styles.toggle} aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff /> : <Eye />}</button>
            </div>
            {submitted && !passwordValid && <p className={styles.error}>Password must be at least 6 characters.</p>}
          </div>

          {mode === 'register' && (
            <div className={styles.field}>
              <label htmlFor="confirm">Confirm Password <span aria-hidden="true">*</span></label>
              <div className={styles.inputWrap}>
                <Lock aria-hidden="true" />
                <input id="confirm" name="confirm" type={showConfirm ? 'text' : 'password'} value={form.confirm} onChange={(e) => update('confirm', e.target.value)} placeholder="Re-enter your password" autoComplete="new-password" aria-invalid={submitted && !passwordsMatch} />
                <button type="button" className={styles.toggle} aria-label={showConfirm ? 'Hide password' : 'Show password'} onClick={() => setShowConfirm(!showConfirm)}>{showConfirm ? <EyeOff /> : <Eye />}</button>
              </div>
              {submitted && !passwordsMatch && <p className={styles.error}>Passwords do not match.</p>}
            </div>
          )}

          {mode === 'login' && <a className={styles.forgot} href="#" onClick={(e) => e.preventDefault()}>Forgot Password?</a>}

          <button type="submit" className={styles.submit}>{mode === 'login' ? 'Sign In' : 'Create Account'} <ArrowRight aria-hidden="true" /></button>
        </form>

        {submitted && formValid && (
          <div className={styles.notice}>
            <p><strong>Authentication is not configured yet.</strong> No account was created or validated. This form requires a backend authentication service to process login and registration requests.</p>
          </div>
        )}

        <p className={styles.switchText}>
          {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <button type="button" className={styles.switchBtn} onClick={() => switchMode(mode === 'login' ? 'register' : 'login')}>
            {mode === 'login' ? 'Register here' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
    <SiteFooter />
  </main>
}