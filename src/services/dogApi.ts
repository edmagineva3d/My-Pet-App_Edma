/**
 * Dog CEO API Service
 * Official documentation: https://dog.ceo/dog-api/documentation/
 */

import type {
  BreedsListApiResponse,
  DogImageApiResponse,
  DogMultipleImagesApiResponse,
  BreedOption,
} from '../types/dog'

const API_BASE_URL = 'https://dog.ceo/api'

// Fallback breeds if the API is momentarily offline or slow
export const DEFAULT_POPULAR_BREEDS: BreedOption[] = [
  { value: 'corgi/cardigan', label: 'Cardigan Corgi', breed: 'corgi', subBreed: 'cardigan', group: 'Popular Picks' },
  { value: 'golden-retriever', label: 'Golden Retriever', breed: 'retriever', subBreed: 'golden', group: 'Popular Picks' },
  { value: 'beagle', label: 'Beagle', breed: 'beagle', group: 'Popular Picks' },
  { value: 'husky', label: 'Husky', breed: 'husky', group: 'Popular Picks' },
  { value: 'pug', label: 'Pug', breed: 'pug', group: 'Popular Picks' },
  { value: 'shiba', label: 'Shiba Inu', breed: 'shiba', group: 'Popular Picks' },
]

/**
 * Capitalizes a word nicely
 */
function capitalize(word: string): string {
  if (!word) return ''
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

/**
 * Formats API breed strings into elegant human-readable titles.
 * Examples:
 *  - "retriever/golden" -> "Golden Retriever"
 *  - "corgi/cardigan" -> "Cardigan Corgi"
 *  - "germanshepherd" -> "German Shepherd"
 *  - "beagle" -> "Beagle"
 */
export function formatBreedLabel(breed: string, subBreed?: string): string {
  if (subBreed) {
    return `${capitalize(subBreed)} ${capitalize(breed)}`
  }
  
  // Special formatting for concatenated breed names
  const specialNames: Record<string, string> = {
    germanshepherd: 'German Shepherd',
    mexicanhairless: 'Mexican Hairless',
    stbernard: 'Saint Bernard',
    cotondetulear: 'Coton de Tulear',
  }

  if (specialNames[breed.toLowerCase()]) {
    return specialNames[breed.toLowerCase()]
  }

  return capitalize(breed)
}

/**
 * Parses a dog image URL to extract the breed name
 */
export function parseBreedFromImageUrl(url: string): string {
  try {
    const match = url.match(/\/breeds\/([^/]+)\//)
    if (match && match[1]) {
      const parts = match[1].split('-')
      if (parts.length === 2) {
        return `${capitalize(parts[1])} ${capitalize(parts[0])}`
      }
      return capitalize(parts[0])
    }
  } catch {
    // fallback
  }
  return 'Good Dog'
}

/**
 * Fetches all dog breeds from Dog CEO API
 * Endpoint: https://dog.ceo/api/breeds/list/all
 */
export async function fetchAllBreeds(signal?: AbortSignal): Promise<BreedOption[]> {
  const url = `${API_BASE_URL}/breeds/list/all`
  
  const response = await fetch(url, { signal })
  if (!response.ok) {
    throw new Error(`Failed to load dog breeds list: HTTP ${response.status}`)
  }

  const data: BreedsListApiResponse = await response.json()
  if (data.status !== 'success' || !data.message) {
    throw new Error('Invalid response format received from Dog CEO API')
  }

  const breedsMap = data.message
  const options: BreedOption[] = []

  // Process breeds and sub-breeds
  for (const [breed, subBreeds] of Object.entries(breedsMap)) {
    if (Array.isArray(subBreeds) && subBreeds.length > 0) {
      for (const sub of subBreeds) {
        options.push({
          value: `${breed}/${sub}`,
          label: formatBreedLabel(breed, sub),
          breed,
          subBreed: sub,
        })
      }
    } else {
      options.push({
        value: breed,
        label: formatBreedLabel(breed),
        breed,
      })
    }
  }

  // Sort alphabetically by human-readable label
  options.sort((a, b) => a.label.localeCompare(b.label))

  return options
}

/**
 * Fetches a random dog image for a specific breed/sub-breed
 * Endpoint: https://dog.ceo/api/breed/{breed}/images/random
 */
export async function fetchRandomBreedImage(
  breedValue: string,
  signal?: AbortSignal
): Promise<string> {
  if (!breedValue) {
    throw new Error('Please select a breed')
  }

  // Clean value for endpoint URL (e.g. "corgi/cardigan" or "beagle")
  const endpointPath = breedValue.trim().toLowerCase()
  const url = `${API_BASE_URL}/breed/${endpointPath}/images/random`

  const response = await fetch(url, { signal })
  if (!response.ok) {
    throw new Error(`Failed to fetch photo for "${breedValue}": HTTP ${response.status}`)
  }

  const data: DogImageApiResponse = await response.json()
  if (data.status !== 'success' || !data.message) {
    throw new Error('Dog photo not found for the selected breed')
  }

  return data.message
}

/**
 * Fetches multiple images for the thumbnail strip
 * Endpoint: https://dog.ceo/api/breed/{breed}/images/random/{count}
 */
export async function fetchMultipleBreedImages(
  breedValue: string,
  count = 7,
  signal?: AbortSignal
): Promise<string[]> {
  const endpointPath = breedValue.trim().toLowerCase()
  const url = `${API_BASE_URL}/breed/${endpointPath}/images/random/${count}`

  try {
    const response = await fetch(url, { signal })
    if (!response.ok) return []
    const data: DogMultipleImagesApiResponse = await response.json()
    if (data.status === 'success' && Array.isArray(data.message)) {
      return data.message
    }
    return []
  } catch {
    return []
  }
}
