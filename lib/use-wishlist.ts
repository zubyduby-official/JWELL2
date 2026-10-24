'use client'

import { useCallback, useEffect, useState } from 'react'
import {
  WISHLIST_KEY,
  WISHLIST_EVENT,
  readWishlist,
  writeWishlist,
  toggleWishlist as toggleWishlistStore,
  isValidWishlistSlug,
  type WishlistLine,
} from './wishlist'

export function useWishlist() {
  const [lines, setLines] = useState<WishlistLine[]>([])
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setLines(readWishlist())
    setHydrated(true)

    const onStorage = (event: StorageEvent) => {
      if (event.key === WISHLIST_KEY) setLines(readWishlist())
    }
    const onCustom = () => setLines(readWishlist())

    window.addEventListener('storage', onStorage)
    window.addEventListener(WISHLIST_EVENT, onCustom)
    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener(WISHLIST_EVENT, onCustom)
    }
  }, [])

  const toggle = useCallback((slug: string) => {
    if (!isValidWishlistSlug(slug)) return
    toggleWishlistStore(slug)
    setLines(readWishlist())
  }, [])

  const add = useCallback((slug: string) => {
    if (!isValidWishlistSlug(slug)) return
    setLines((current) => {
      if (current.some((line) => line.slug === slug)) return current
      const next = [...current, { slug }]
      writeWishlist(next)
      window.dispatchEvent(new Event(WISHLIST_EVENT))
      return next
    })
  }, [])

  const remove = useCallback((slug: string) => {
    setLines((current) => {
      const next = current.filter((line) => line.slug !== slug)
      writeWishlist(next)
      window.dispatchEvent(new Event(WISHLIST_EVENT))
      return next
    })
  }, [])

  const clear = useCallback(() => {
    const next: WishlistLine[] = []
    writeWishlist(next)
    setLines(next)
    window.dispatchEvent(new Event(WISHLIST_EVENT))
  }, [])

  return {
    lines,
    slugs: lines.map((line) => line.slug),
    count: lines.length,
    hydrated,
    toggle,
    add,
    remove,
    clear,
  }
}
