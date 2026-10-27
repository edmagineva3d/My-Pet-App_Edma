# 🐾 My Pet App — Meet Your Furry Friends

A whimsical, highly polished React + TypeScript application for exploring dog breeds and fetching photos, redesigned to closely recreate the art-directed visual language and composition of the reference design.

![My Pet App](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)
![Vite](https://img.shields.io/badge/Vite-6.0-purple)
![Dog%20CEO%20API](https://img.shields.io/badge/Dog%20CEO%20API-Live-brightgreen)

---

## 🎨 Visual Design & Reference Fidelity

This redesign carefully reproduces the visual language, proportions, colors, typography, spacing, illustrations, and layout hierarchy of the reference design:

1. **Outer Frame & Canvas Composition**:
   - Bright warm yellow outer background (`#f5b82e`) framing a centered website canvas (`max-width: 780px`).
   - Muted dark olive border (`2px solid #3c4722`) with soft rounded corners.
   - Vertical design tag on the right margin matching the reference editorial styling.

2. **Navigation Header & Scalloped Fringe**:
   - Olive green announcement bar with repeating blossom emojis and benefit messages.
   - Warm cream navigation bar (`#fcf8ef`) with a custom playful doodle logo, navigation links (`HOME`, `EXPLORE BREEDS`, `FAVORITES`, `ABOUT`), and heart counter badge.
   - Hand-crafted SVG scalloped wave border that hangs into the sky below.

3. **Illustrated Hero Landscape**:
   - Soft powder-blue sky (`#adc6eb`) with floating clouds and flying birds.
   - Pillowy white cloud badge holding the hero title: **"Meet Your Furry Friends"** in Fredoka display font, accompanied by playful curled flourishes.
   - Subtitle: *"welcome to petopia! Explore different breeds, one adorable photo at a time."*
   - Layered rolling pale-green hills (`#bcd986`, `#a5c76f`, `#8db55b`).
   - Hand-drawn decorative elements:
     - Cozy wooden cottage/doghouse with chimney and rising smoke puff.
     - Stepping stone pebble path leading down the right hill.
     - Fluffy cartoon trees and red fly-agaric spotted mushrooms.
     - Illustrated meadow doodle pets cluster (Spaniel, Poodle, Golden pup, Shiba, and Corgi in a dog basket).

4. **Editorial Product-Style Dog Showcase (Lower Section)**:
   - **Left Column**: Framed white matting card with dark olive border, showcasing the fetched dog photo with zoom toggle and a strip of 7 square thumbnail snapshots underneath.
   - **Right Column**:
     - Breed Title with custom yellow watering can / dog bowl badge.
     - Price/Status tag: *"100% Good Dog • Free to love"*.
     - Custom accessible dropdown: *"Choose a Dog Breed"* populated with 140+ breeds and sub-breeds.
     - Primary button: Wide powder-blue pill button labeled **"FETCH AGAIN • NEW PHOTO 🐾"** with tactile 3D press effect and spinning refresh icon.
     - Secondary controls: Favorite heart toggle, Copy image link with tooltip feedback, Surprise random breed picker, and Petopia verification badge.
     - Editorial narrative description with *"Featuring:"* bullet points.
     - Three expandable accordions matching the reference (*Signature Traits*, *Breed Heritage*, *Care & Happiness Guide*).

5. **Additional Sections & Footer**:
   - **Explore More Breeds**: Curated quick-select cards with emojis and descriptions.
   - **My Favorite Dogs**: Saved collection with photo thumbnails, removal, and quick inspection stored persistently in `localStorage`.
   - **Warm Cream Footer**: Links to official Dog CEO documentation, GitHub profile `edmagineva3d`, copyright notice, and back-to-top button.

---

## 🐶 Dog CEO API Integration

All canine data and photos are fetched live from the official open-source Dog CEO API:

- **Official API Documentation**: [https://dog.ceo/dog-api/documentation/](https://dog.ceo/dog-api/documentation/)
- **API Homepage**: [https://dog.ceo/dog-api/](https://dog.ceo/dog-api/)
- **Breeds List Endpoint**:
  ```
  GET https://dog.ceo/api/breeds/list/all
  ```
- **Random Breed Image Endpoint**:
  ```
  GET https://dog.ceo/api/breed/{breed}/images/random
  ```
- **Sub-breed Endpoint Support**:
  ```
  GET https://dog.ceo/api/breed/{breed}/{subBreed}/images/random
  ```
  *(e.g., `corgi/cardigan`, `retriever/golden`, `hound/afghan`)*
- **Multiple Breed Images Endpoint (Thumbnails)**:
  ```
  GET https://dog.ceo/api/breed/{breed}/images/random/7
  ```

### Guarantees & Resilience:
- **Strict Breed Preservation**: Pressing "Fetch Again" guarantees that the new image strictly belongs to the currently selected breed.
- **Race Condition Protection**: Uses `AbortController` to cancel in-flight requests when switching breeds rapidly.
- **Graceful Fallbacks**: Includes curated popular presets if network access is offline or throttled.

---

## 🛠️ Technologies & Architecture

- **React 18** (`react`, `react-dom`): Functional components with modern hooks (`useState`, `useEffect`, `useCallback`, `useMemo`, `useRef`, `useId`).
- **TypeScript**: Strict types across API responses, breed options, and component props.
- **Vite 6**: Fast bundling, hot module replacement, and production asset optimization.
- **CSS3 & CSS Custom Properties**: Reusable design tokens for colors, shadows, border radii, and typography.
- **CSS Keyframes**: Hardware-accelerated animations (`transform`, `opacity`) with full `@media (prefers-reduced-motion: reduce)` support.
- **Lucide React**: Clean, accessible iconography.

### Directory Structure

```
my-petApp_Edma/
├── public/
├── src/
│   ├── api/ or services/
│   │   └── dogApi.ts              # Dog CEO API client, endpoints & breed formatters
│   ├── components/
│   │   ├── Navbar.tsx             # Announcement bar, brand logo, nav links & scallop divider
│   │   ├── HeroSection.tsx        # Hero container & pillowy cloud badge
│   │   ├── IllustratedLandscape.tsx # SVG rolling hills, clouds, cottage, trees, mushrooms
│   │   ├── DogFriendsDoodle.tsx   # Illustrated dog friends cluster in the meadow
│   │   ├── DogThemedDecor.tsx     # Floating paw prints, bones, daisies, sparkles
│   │   ├── BreedSelector.tsx      # Accessible dropdown with 140+ breeds
│   │   ├── DogImageViewer.tsx     # Framed white card, zoom toggle, 7 thumbnail snapshots
│   │   ├── FetchAgainButton.tsx   # Powder-blue pill button with tactile press & spinner
│   │   ├── DogImageControls.tsx   # Favorite toggle, copy link, surprise pup button
│   │   ├── BreedAccordion.tsx     # Expandable traits, facts, and care guide
│   │   ├── ExploreBreeds.tsx      # Curated quick-select breed cards
│   │   ├── FavoriteDogs.tsx       # Saved favorites grid with localStorage persistence
│   │   ├── LoadingState.tsx       # Bouncing paw spinner and playful messages
│   │   ├── ErrorState.tsx         # User-friendly error card with retry mechanism
│   │   └── Footer.tsx             # Footer links, student credit, and back-to-top
│   ├── hooks/
│   │   ├── useDogBreeds.ts        # Hook for loading and caching Dog CEO breed list
│   │   └── useDogImage.ts         # Hook for breed photo fetching, thumbnails, and state
│   ├── styles/
│   │   ├── variables.css          # Color tokens, borders, and typography variables
│   │   ├── typography.css         # Fredoka & Nunito font rules
│   │   ├── layout.css             # Centered canvas, outer yellow frame, layout regions
│   │   ├── navbar.css             # Header, announcement bar, scalloped divider
│   │   ├── hero.css               # Hero cloud badge and typography
│   │   ├── landscape.css          # SVG landscape, hills, cottage, doodle pets
│   │   ├── viewer.css             # Framed dog card and thumbnail strip
│   │   ├── button.css             # Powder-blue pill button styles
│   │   ├── selector.css           # Custom styled dropdown styles
│   │   ├── controls.css           # Image action buttons and badges
│   │   ├── accordion.css          # Expandable accordion panels
│   │   ├── explore.css            # Popular breed chips
│   │   ├── favorites.css          # Favorites gallery and empty states
│   │   ├── loading.css            # Paw bounce and stepping animation
│   │   ├── error.css              # Error banner styling
│   │   ├── animations.css         # Keyframes, floating paws, clouds, heart pop
│   │   └── responsive.css         # Mobile and tablet media queries
│   ├── types/
│   │   └── dog.ts                 # TypeScript interfaces for API and application state
│   ├── App.tsx                    # Main orchestrator component
│   └── main.tsx                   # React root entry point
├── index.html                     # HTML shell with Google Fonts preconnect
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (tested on Node v24)
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install
```

### Running Locally

```bash
# Start the Vite development server
npm run dev
```

Open your browser at `http://localhost:5173/` to view the application.

### Building for Production

```bash
# Compile TypeScript and create production bundle
npm run build

# Preview the production build locally
npm run preview
```

---

## 📜 Git Commit Progression

This project features a clean, chronological commit history of exactly 27 commits documenting every step of development:

1. `start the my pet app project`
2. `set up vite and react with typescript`
3. `organize the project folders`
4. `add the main app layout`
5. `create the navigation bar`
6. `add the main color palette`
7. `set up the fonts and typography`
8. `build the illustrated hero section`
9. `add the sky and rolling hills`
10. `create the dog themed decorations`
11. `animate the paw prints and clouds`
12. `add the dog breed types`
13. `connect the dog ceo api`
14. `load the available dog breeds`
15. `create the breed selector`
16. `display the selected dog image`
17. `add the fetch again button`
18. `keep the selected breed when fetching`
19. `add the loading animation`
20. `handle api errors and image failures`
21. `style the dog image controls`
22. `add the favorite dogs feature`
23. `improve the lower content sections`
24. `make the layout responsive`
25. `polish the animations and hover effects`
26. `test the app and fix remaining issues`
27. `finish the my pet app documentation`

---

## 👤 Author

- **Developer**: edmagineva3d
- **Email**: edmagineva11@gmail.com
- **Project**: My Pet App (Redesign)
- **Year**: 2026
