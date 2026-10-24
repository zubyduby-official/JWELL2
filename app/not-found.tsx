import Link from 'next/link'
import styles from './_shared/info-page.module.css'

export default function NotFound() {
  return <main className={styles.page}>
    <div className={styles.shell} style={{ textAlign: 'center', maxWidth: 480 }}>
      <p className={styles.eyebrow}>404</p>
      <h1 className={styles.title}>Page Not Found</h1>
      <p className={styles.lead}>The page you are looking for does not exist or may have been moved. Please try one of the links below.</p>
      <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginTop: 16 }}>
        <Link href="/" style={{ padding: '12px 28px', background: '#111', color: '#fff', borderRadius: 8, fontSize: 16, fontWeight: 600, textDecoration: 'none' }}>Back to Home</Link>
        <Link href="/shop" style={{ padding: '12px 28px', border: '1px solid #171412', color: '#171412', borderRadius: 8, fontSize: 16, fontWeight: 600, textDecoration: 'none' }}>Browse Shop</Link>
      </div>
    </div>
  </main>
}
