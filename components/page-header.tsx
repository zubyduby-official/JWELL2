'use client'

import { Heart, ShoppingBag } from 'lucide-react'
import { useCartCount } from '../lib/use-cart-count'
import { useWishlist } from '../lib/use-wishlist'
import styles from '../app/_shared/info-page.module.css'

export default function PageHeader() {
  const cartCount = useCartCount()
  const { count: wishCount } = useWishlist()
  return <header className={styles.header}>
    <span className={styles.spacer} />
    <a href="/" className={styles.logo} aria-label="Miraaya Jewels home"><img src="/miralogo.svg" alt="Miraaya Jewels" /></a>
    <nav aria-label="Account actions">
      <a href="/wishlist" aria-label={`Wishlist with ${wishCount} items`}><Heart /><b>{wishCount}</b></a>
      <a href="/cart" aria-label={`${cartCount} items in cart`} className={styles.cart}><ShoppingBag /><b>{cartCount}</b></a>
    </nav>
  </header>
}
