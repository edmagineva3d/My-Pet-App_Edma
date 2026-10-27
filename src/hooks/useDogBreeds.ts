import { useState, useEffect, useCallback } from 'react'
import { fetchAllBreeds, DEFAULT_POPULAR_BREEDS } from '../services/dogApi'
import type { BreedOption } from '../types/dog'

export function useDogBreeds() {
  const [breeds, setBreeds] = useState<BreedOption[]>(DEFAULT_POPULAR_BREEDS)
  const [loadingBreeds, setLoadingBreeds] = useState<boolean>(true)
  const [breedsError, setBreedsError] = useState<string | null>(null)

  const loadBreeds = useCallback(async (signal?: AbortSignal) => {
    setLoadingBreeds(true)
    setBreedsError(null)

    try {
      const fetchedList = await fetchAllBreeds(signal)
      setBreeds(fetchedList)
    } catch (err: unknown) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        return // Aborted normally
      }
      const message = err instanceof Error ? err.message : 'Failed to load dog breeds list'
      setBreedsError(message)
      // Keep DEFAULT_POPULAR_BREEDS as fallback so the app remains interactive
    } finally {
      setLoadingBreeds(false)
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    loadBreeds(controller.signal)

    return () => {
      controller.abort()
    }
  }, [loadBreeds])

  return {
    breeds,
    loadingBreeds,
    breedsError,
    reloadBreeds: () => loadBreeds(),
  }
}

