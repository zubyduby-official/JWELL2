'use client'

import { useMemo, useState } from 'react'
import { ArrowLeft, Heart, ShoppingBag, Trash2 } from 'lucide-react'
import PageHeader from '../../components/page-header'
import SiteFooter from '../../components/site-footer'
import { money, products } from '../../lib/products'
import { useWishlist } from '../../lib/use-wishlist'
import { addToCart } from '../../lib/cart'
import { useCartCount } from '../../lib/use-cart-count'
import styles from './wishlist.module.css'

export default function WishlistPage() {
  const { slugs, hydrated, remove } = useWishlist()
  const cartCount = useCartCount()
  const [notice, setNotice] = useState('')

  const items = useMemo(
    () => slugs.flatMap((slug) => { const product = products.find((p) => p.slug === slug); return product ? [product] : [] }),
    [slugs],
  )

  const addAndNotify = (name: string, slug: string) => {
    addToCart(slug)
    setNotice(`${name} added to cart`)
    window.setTimeout(() => setNotice(''), 2200)
  }

  return <main className={styles.page}>
    <PageHeader />
    <div className={styles.shell}>
      <div className={styles.titleRow}>
        <h1>Your Wishlist</h1>
        <a href="/shop">Continue Shopping <ArrowLeft aria-hidden="true" /></a>
      </div>

      {hydrated && items.length === 0 ? (
        <section className={styles.empty}>
          <Heart aria-hidden="true" />
          <h2>Your wishlist is empty</h2>
          <p>Save the pieces you love by tapping the heart icon on any product.</p>
          <a href="/shop">Browse the Collection</a>
        </section>
      ) : (
        <>
          <p className={styles.count}>{items.length} {items.length === 1 ? 'item' : 'items'} saved</p>
          <div className={styles.grid}>
            {items.map((product) => {
              const discount = Math.round((1 - product.price / product.original) * 100)
              return <article className={styles.card} key={product.slug}>
                <div className={styles.cardImage}>
                  <a href={`/product/${product.slug}`}><img src={product.image} alt={product.name} /></a>
                  <button type="button" aria-label={`Remove ${product.name} from wishlist`} onClick={() => remove(product.slug)}><Trash2 /></button>
                </div>
                <h3><a href={`/product/${product.slug}`}>{product.name}</a></h3>
                <strong>{money(product.price)}</strong>
                <button type="button" className={styles.cardAdd} aria-label={`Add ${product.name} to cart`} onClick={() => addAndNotify(product.name, product.slug)}><ShoppingBag aria-hidden="true" /> Add to Cart</button>
              </article>
            })}
          </div>
        </>
      )}

      {notice && <p className={styles.notice} role="status">{notice}</p>}
    </div>
    <SiteFooter />
  </main>
}
