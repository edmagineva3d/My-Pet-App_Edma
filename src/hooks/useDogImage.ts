import { useState, useEffect, useCallback, useRef } from 'react'
import { fetchRandomBreedImage, fetchMultipleBreedImages } from '../services/dogApi'

export function useDogImage(selectedBreed: string) {
  const [imageUrl, setImageUrl] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [thumbnails, setThumbnails] = useState<string[]>([])
  
  // Track active abort controller to avoid race conditions
  const activeControllerRef = useRef<AbortController | null>(null)

  /**
   * Fetches a dog image strictly for the given breed (defaults to selectedBreed)
   */
  const fetchImage = useCallback(async (breedToFetch: string = selectedBreed) => {
    if (!breedToFetch) return

    // Cancel any previous pending request
    if (activeControllerRef.current) {
      activeControllerRef.current.abort()
    }

    const controller = new AbortController()
    activeControllerRef.current = controller

    setLoading(true)
    setError(null)

    try {
      const url = await fetchRandomBreedImage(breedToFetch, controller.signal)
      setImageUrl(url)

      // Add to thumbnails history (up to 7 items, no duplicate consecutive)
      setThumbnails((prev) => {
        const filtered = prev.filter((u) => u !== url)
        return [url, ...filtered].slice(0, 7)
      })
    } catch (err: unknown) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        return // Normal abort
      }
      const message = err instanceof Error ? err.message : 'Failed to fetch dog image'
      setError(message)
    } finally {
      setLoading(false)
    }
  }, [selectedBreed])

  /**
   * Fetch Again action: Explicitly preserves the selected breed!
   */
  const fetchAgain = useCallback(() => {
    // Guarantees fetching strictly with the currently selected breed
    void fetchImage(selectedBreed)
  }, [fetchImage, selectedBreed])

  /**
   * When selectedBreed changes, fetch an image for the newly selected breed,
   * and load initial thumbnail strip.
   */
  useEffect(() => {
    const controller = new AbortController()
    activeControllerRef.current = controller

    setLoading(true)
    setError(null)

    // Fetch initial random image and gallery thumbnails for the new breed
    Promise.all([
      fetchRandomBreedImage(selectedBreed, controller.signal),
      fetchMultipleBreedImages(selectedBreed, 7, controller.signal),
    ])
      .then(([mainUrl, multiUrls]) => {
        setImageUrl(mainUrl)
        const combined = Array.from(new Set([mainUrl, ...multiUrls])).slice(0, 7)
        setThumbnails(combined)
        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof DOMException && err.name === 'AbortError') return
        const message = err instanceof Error ? err.message : 'Could not fetch dog photo'
        setError(message)
        setLoading(false)
      })

    return () => {
      controller.abort()
    }
  }, [selectedBreed])

  /**
   * Directly select an image from the thumbnails gallery
   */
  const selectThumbnail = useCallback((url: string) => {
    setImageUrl(url)
    setError(null)
  }, [])

  return {
    imageUrl,
    loading,
    error,
    thumbnails,
    fetchAgain,
    selectThumbnail,
    retryFetch: () => void fetchImage(selectedBreed),
  }
}
