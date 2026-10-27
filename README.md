 <p align="center">
  <img src="https://readme-typing-svg.demolab.com/?font=Fredoka&size=28&duration=3000&pause=1000&color=EAB308&center=true&vCenter=true&width=650&lines=Welcome+to+My+Pet+App!;Explore+Your+Favorite+Dog+Breeds!;Fetch+Cute+Dog+Photos+Again!;Made+with+React%2C+TypeScript+%26+Vite" alt="Typing SVG" />
</p>

<h1 align="center">🐾 My Pet App</h1>

<p align="center">
  <strong>Meet Your Furry Friends!</strong>
</p>

<p align="center">
  My Pet App is a dog-breed image browsing website built with <strong>React, TypeScript, and Vite</strong>. Users can explore different dog breeds, view random dog photos, and fetch another image without changing their selected breed. The website features a playful illustrated landscape, animated paw prints, floating dog-themed decorations, and a colorful, responsive design.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Dog%20CEO%20API-REST-65A30D" alt="Dog CEO API" />
</p>

---

## ✨ Features

- 🐶 Explore different dog breeds using a breed dropdown.
- 🖼️ Fetch random dog images from the Dog CEO API.
- 🔄 Fetch another photo while keeping the currently selected breed.
- 🐕 Load available breeds dynamically from the API.
- 🐾 Animated paw prints and floating dog-themed decorations.
- ☁️ Illustrated clouds, rolling hills, and a playful landscape.
- 🎨 Bright yellow, powder-blue, cream, and soft green color palette.
- ✨ Smooth transitions, hover effects, and animated interface elements.
- 🔄 Loading indicators while fetching dog images.
- ⚠️ Error messages and retry options when an API request fails.
- ❤️ Save favorite dog images using browser localStorage.
- 🔎 Explore additional breeds using quick-selection controls.
- 📋 Copy a dog image link when the feature is available.
- 📱 Responsive layout for desktop, tablet, and mobile devices.
- ♿ Accessible controls, keyboard navigation, and reduced-motion support.

## 🎨 Design and Animations

My Pet App uses a playful illustrated website design with a bright yellow outer frame, a cream-colored navigation bar, a powder-blue sky, and soft green hills.

The visual design includes:

- **Animated paw prints:** Floating paw decorations move gently around the page.
- **Floating bones and sparkles:** Small decorative elements add movement without distracting from the main content.
- **Animated clouds:** Clouds drift slowly across the illustrated sky.
- **Playful typography:** Fredoka for headings and Nunito for readable body text.
- **Interactive buttons:** Smooth hover transitions and a tactile press effect.
- **Dog image transitions:** Subtle animation when a new image loads.
- **Responsive layout:** The website adjusts to different screen sizes.
- **Reduced-motion support:** Nonessential animations are reduced when requested by the user's system settings.

The design follows a cheerful pet-themed visual style while keeping the dog image and breed selector as the main focus.

## 🐕 How Fetch Again Works

The breed selector determines which type of dog image the application requests.

1. Select an available breed from the dropdown.
2. The application fetches and displays an image belonging to that breed.
3. Click **Fetch Again** to request another random image.
4. The selected breed remains unchanged.
5. Select a different breed whenever you want to explore another type of dog.

For example, selecting Corgi should display a Corgi image. Clicking Fetch Again should request another Corgi image instead of switching to a different breed.

The available options depend on the breeds and sub-breeds supported by the API.

## 🌐 Dog CEO API

My Pet App uses the Dog CEO API to retrieve dog breeds and images.

- **Official API Website:** https://dog.ceo/dog-api/
- **API Documentation:** https://dog.ceo/dog-api/documentation/

### Available Endpoints

**1. Get all available dog breeds**

```http
GET https://dog.ceo/api/breeds/list/all
```

Returns the available breeds and their supported sub-breeds.

**2. Fetch a random image for a breed**

```http
GET https://dog.ceo/api/breed/{breed}/images/random
```

Example:

```http
GET https://dog.ceo/api/breed/beagle/images/random
```

**3. Fetch random images for a breed**

```http
GET https://dog.ceo/api/breed/beagle/images/random/7
```

This endpoint can be used to retrieve multiple images for thumbnail collections.

### API Integration

The application uses the JavaScript Fetch API to retrieve data from the external service.

- Loads the breed list dynamically.
- Updates the displayed image when the selected breed changes.
- Preserves the selected breed when Fetch Again is clicked.
- Handles loading states and unsuccessful requests.
- Validates API responses before displaying images.
- Supports breed-specific requests using the correct API endpoint.
- Does not require an API key for the documented Dog CEO endpoints.

**Note:** Not every dog breed is available through this API. The dropdown should use the actual breed list returned by the service instead of assuming that all breeds are supported.

## 🛠️ Technologies Used

- ⚛️ React
- 📘 TypeScript
- ⚡ Vite
- 🎨 CSS3
- 🌐 Dog CEO REST API
- 🧩 Lucide React Icons
- 💾 Browser localStorage
- 🔄 React Hooks
- ✨ CSS Keyframe Animations
- ♿ Accessible and Responsive UI

## 📂 Project Structure

```text
my-petApp_Edma/
├── public/
├── src/
│   ├── api/
│   │   └── dogApi.ts
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── IllustratedLandscape.tsx
│   │   ├── DogThemedDecor.tsx
│   │   ├── BreedSelector.tsx
│   │   ├── DogImageViewer.tsx
│   │   ├── FetchAgainButton.tsx
│   │   ├── FavoriteDogs.tsx
│   │   ├── LoadingState.tsx
│   │   ├── ErrorState.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   ├── useDogBreeds.ts
│   │   └── useDogImage.ts
│   ├── styles/
│   │   ├── variables.css
│   │   ├── typography.css
│   │   ├── layout.css
│   │   ├── animations.css
│   │   └── responsive.css
│   ├── types/
│   │   └── dog.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

*The structure above is a suggested organization. Keep it consistent with the actual files in the project.*

## 🚀 How to Run

### Prerequisites

- Node.js 18 or later
- npm
- Visual Studio Code or another code editor

### 1. Clone the repository

```powershell
git clone https://github.com/edmagineva3d/My_Pet_App_Edma.git
```

### 2. Open the project folder

```powershell
cd My_Pet_App_Edma
```

### 3. Install the dependencies

```powershell
npm install
```

### 4. Start the development server

```powershell
npm run dev
```

### 5. Open the application

Open the local URL displayed in your terminal. Vite commonly uses:

```text
http://localhost:5173
```

### 6. Build for production

```powershell
npm run build
```

### 7. Preview the production build

```powershell
npm run preview
```

## 📜 Git Commit Progression

The project development is organized around the following 27 student-style commit messages:

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

These messages describe the intended development sequence. The actual Git history should reflect the changes performed in each commit.

## 👤 Author

- **Developer:** edmagineva3d
- **Project:** My Pet App
- **Technology:** React, TypeScript, and Vite
- **Year:** 2026

## 📌 Note

My Pet App was created as a student project to demonstrate frontend development, API integration, React state management, and responsive web design.

Dog images and breed information are retrieved from the Dog CEO API. Internet access is required to fetch live data and load externally hosted fonts.

Favorite images are stored locally in the current browser when the favorites feature is enabled. They are not automatically synchronized between different devices.

---

<p align="center">
  <strong>My Pet App — Explore Breeds, Fetch Cute Photos, and Meet Your Furry Friends! 🐾</strong>
</p>

<p align="center">
  Made with ❤️ using React, TypeScript, and Vite.
</p>
