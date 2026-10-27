/**
 * Dog CEO API Data Types and Application Interfaces
 */

// Dog CEO API response for all breeds: https://dog.ceo/api/breeds/list/all
export interface BreedsListApiResponse {
  message: Record<string, string[]>
  status: 'success' | 'error'
}

// Dog CEO API response for a random image: https://dog.ceo/api/breed/{breed}/images/random
export interface DogImageApiResponse {
  message: string
  status: 'success' | 'error'
}

// Dog CEO API response for multiple images: https://dog.ceo/api/breed/{breed}/images/random/{count}
export interface DogMultipleImagesApiResponse {
  message: string[]
  status: 'success' | 'error'
}

// Formatted breed option used in dropdown selector and search
export interface BreedOption {
  value: string          // API endpoint path, e.g. "corgi/cardigan" or "beagle"
  label: string          // Display label, e.g. "Cardigan Corgi" or "Beagle"
  breed: string          // Primary breed name, e.g. "corgi"
  subBreed?: string      // Sub-breed if present, e.g. "cardigan"
  group?: string         // "Popular Picks", "All Breeds", etc.
}

// Favorite dog entry saved to localStorage
export interface FavoriteDog {
  id: string
  url: string
  breed: string
  breedLabel: string
  savedAt: number
}

// Curated Petopia breed traits & facts
export interface BreedDetails {
  name: string
  tagline: string
  temperament: string
  origin: string
  energyLevel: 'Low' | 'Medium' | 'High' | 'Very High'
  cuddleScore: string
  features: string[]
  history: string
  careTips: string
}
