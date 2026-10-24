export type WishlistLine = { slug: string }

export const WISHLIST_KEY = 'miraaya-wishlist-preview'
export const WISHLIST_EVENT = 'miraaya-wishlist-change'

import { isValidProductSlug } from './products'

export function isValidWishlistSlug(slug: string): boolean {
  return isValidProductSlug(slug)
}

export function readWishlist(): WishlistLine[] {
  if (typeof window === 'undefined') return []
  try {
    const saved = window.sessionStorage.getItem(WISHLIST_KEY)
    if (!saved) return []
    const parsed = JSON.parse(saved)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (line): line is WishlistLine =>
        typeof line?.slug === 'string' && isValidWishlistSlug(line.slug),
    )
  } catch {
    return []
  }
}

export function writeWishlist(lines: WishlistLine[]): void {
  if (typeof window === 'undefined') return
  try {
    window.sessionStorage.setItem(WISHLIST_KEY, JSON.stringify(lines))
  } catch {
    /* session storage is optional in preview environments */
  }
}

export function wishlistSlugs(lines: WishlistLine[]): string[] {
  return lines.map((line) => line.slug)
}

export function addToWishlist(slug: string): void {
  if (typeof window === 'undefined') return
  if (!isValidWishlistSlug(slug)) return
  const current = readWishlist()
  if (current.some((line) => line.slug === slug)) return
  const next = [...current, { slug }]
  writeWishlist(next)
  window.dispatchEvent(new Event(WISHLIST_EVENT))
}

export function removeFromWishlist(slug: string): void {
  if (typeof window === 'undefined') return
  const next = readWishlist().filter((line) => line.slug !== slug)
  writeWishlist(next)
  window.dispatchEvent(new Event(WISHLIST_EVENT))
}

export function toggleWishlist(slug: string): void {
  if (typeof window === 'undefined') return
  const current = readWishlist()
  if (current.some((line) => line.slug === slug)) {
    removeFromWishlist(slug)
  } else {
    addToWishlist(slug)
  }
}

export function isInWishlist(slug: string): boolean {
  return readWishlist().some((line) => line.slug === slug)
}
