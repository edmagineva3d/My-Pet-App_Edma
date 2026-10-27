import React from 'react'

export default function DogFriendsDoodle() {
  return (
    <div className="dog-friends-cluster" aria-label="Cute doodle pets cluster in the meadow">
      <svg
        viewBox="0 0 320 220"
        className="doodle-pets-svg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base wooden log / picnic mat */}
        <g id="base-mat">
          <rect x="50" y="178" width="220" height="18" rx="9" fill="#cda370" stroke="#3c4722" strokeWidth="2.5" />
          <line x1="70" y1="187" x2="250" y2="187" stroke="#b08450" strokeWidth="2" strokeDasharray="6 4" />
        </g>

        {/* 1. Top Bunny / Long-eared Spaniel Pup (Purple/Lilac) */}
        <g id="lilac-pup" transform="translate(138, 20)">
          {/* Ears */}
          <ellipse cx="6" cy="18" rx="8" ry="20" fill="#cbb7ea" stroke="#3c4722" strokeWidth="2" transform="rotate(-20 6 18)" />
          <ellipse cx="38" cy="18" rx="8" ry="20" fill="#cbb7ea" stroke="#3c4722" strokeWidth="2" transform="rotate(20 38 18)" />
          {/* Head */}
          <circle cx="22" cy="38" r="22" fill="#d8c9f2" stroke="#3c4722" strokeWidth="2.5" />
          {/* Cheeks */}
          <circle cx="12" cy="44" r="4" fill="#f8b6ce" opacity="0.8" />
          <circle cx="32" cy="44" r="4" fill="#f8b6ce" opacity="0.8" />
          {/* Eyes */}
          <circle cx="16" cy="36" r="2.5" fill="#2c3a59" />
          <circle cx="28" cy="36" r="2.5" fill="#2c3a59" />
          {/* Snout & Smile */}
          <ellipse cx="22" cy="42" rx="4" ry="3" fill="#ffffff" stroke="#3c4722" strokeWidth="1.5" />
          <path d="M 20,41 Q 22,43 24,41" stroke="#2c3a59" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* 2. Fluffy White Bichon / Poodle Pup (Left of center) */}
        <g id="white-fluff-pup" transform="translate(94, 48)">
          {/* Fluffy Cloud Head */}
          <path
            d="M 12,24 Q 4,14 16,8 Q 28,2 38,10 Q 50,4 54,16 Q 64,24 54,34 Q 52,46 38,44 Q 24,48 16,40 Q 6,36 12,24 Z"
            fill="#ffffff"
            stroke="#3c4722"
            strokeWidth="2.2"
          />
          {/* Pink Bow */}
          <polygon points="12,10 20,14 12,18" fill="#f28da7" stroke="#3c4722" strokeWidth="1.5" />
          <polygon points="28,10 20,14 28,18" fill="#f28da7" stroke="#3c4722" strokeWidth="1.5" />
          <circle cx="20" cy="14" r="3" fill="#f7b7c8" stroke="#3c4722" strokeWidth="1.2" />
          {/* Eyes & Nose */}
          <circle cx="24" cy="24" r="2.5" fill="#2c3a59" />
          <circle cx="40" cy="24" r="2.5" fill="#2c3a59" />
          <ellipse cx="32" cy="29" rx="3" ry="2.2" fill="#2c3a59" />
          <path d="M 30,32 Q 32,35 34,32" stroke="#2c3a59" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* 3. Golden Retriever / Brown Bear Doggo (Center Left) */}
        <g id="golden-dog" transform="translate(86, 92)">
          {/* Round Ears */}
          <circle cx="10" cy="16" r="10" fill="#b98858" stroke="#3c4722" strokeWidth="2.2" />
          <circle cx="50" cy="16" r="10" fill="#b98858" stroke="#3c4722" strokeWidth="2.2" />
          {/* Body */}
          <rect x="8" y="44" width="44" height="42" rx="14" fill="#cfa170" stroke="#3c4722" strokeWidth="2.2" />
          {/* Head */}
          <ellipse cx="30" cy="34" rx="24" ry="22" fill="#deb485" stroke="#3c4722" strokeWidth="2.5" />
          {/* Eyes */}
          <circle cx="22" cy="30" r="2.5" fill="#2c3a59" />
          <circle cx="38" cy="30" r="2.5" fill="#2c3a59" />
          {/* Rosy Cheeks */}
          <circle cx="16" cy="38" r="3.5" fill="#fca5a5" opacity="0.8" />
          <circle cx="44" cy="38" r="3.5" fill="#fca5a5" opacity="0.8" />
          {/* Muzzle */}
          <ellipse cx="30" cy="38" rx="8" ry="6" fill="#fcf8ef" stroke="#3c4722" strokeWidth="1.8" />
          <polygon points="27,35 33,35 30,38" fill="#3c4722" />
          <path d="M 30,38 L 30,41 M 28,41 Q 30,43 32,41" stroke="#3c4722" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* 4. Cheerful Yellow Shiba / Duckling Pup (Center Right) */}
        <g id="yellow-shiba" transform="translate(170, 92)">
          {/* Ears */}
          <polygon points="8,18 20,4 24,20" fill="#f5b82e" stroke="#3c4722" strokeWidth="2" strokeLinejoin="round" />
          <polygon points="46,18 34,4 30,20" fill="#f5b82e" stroke="#3c4722" strokeWidth="2" strokeLinejoin="round" />
          {/* Body */}
          <rect x="6" y="44" width="42" height="42" rx="14" fill="#fad02c" stroke="#3c4722" strokeWidth="2.2" />
          {/* Head */}
          <ellipse cx="27" cy="34" rx="23" ry="21" fill="#fcd948" stroke="#3c4722" strokeWidth="2.5" />
          {/* Cheerful Happy Eyes (arched) */}
          <path d="M 18,29 Q 22,25 26,29" stroke="#2c3a59" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <path d="M 30,29 Q 34,25 38,29" stroke="#2c3a59" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          {/* Orange Beak / Puppy Nose */}
          <ellipse cx="28" cy="38" rx="6" ry="4" fill="#e07a38" stroke="#3c4722" strokeWidth="1.8" />
          {/* Red Cheeks */}
          <circle cx="15" cy="38" r="3.5" fill="#fca5a5" opacity="0.8" />
          <circle cx="41" cy="38" r="3.5" fill="#fca5a5" opacity="0.8" />
        </g>

        {/* 5. Corgi in the picnic basket / blue kitty friend (Front Center) */}
        <g id="corgi-basket" transform="translate(126, 128)">
          {/* Blue Dog Basket */}
          <path
            d="M 6,32 L 14,62 Q 35,66 56,62 L 64,32 Z"
            fill="#5ea3cb"
            stroke="#3c4722"
            strokeWidth="2.5"
          />
          {/* Basket Weave lines */}
          <line x1="16" y1="44" x2="54" y2="44" stroke="#4080a8" strokeWidth="2" strokeDasharray="5 3" />
          <line x1="20" y1="54" x2="50" y2="54" stroke="#4080a8" strokeWidth="2" strokeDasharray="5 3" />
          {/* Corgi / Blue Cat Peeking out */}
          {/* Big Pointy Ears */}
          <polygon points="12,18 20,0 28,16" fill="#e88f4b" stroke="#3c4722" strokeWidth="2" strokeLinejoin="round" />
          <polygon points="16,14 20,5 24,14" fill="#fed7aa" />
          <polygon points="56,18 48,0 40,16" fill="#e88f4b" stroke="#3c4722" strokeWidth="2" strokeLinejoin="round" />
          <polygon points="52,14 48,5 44,14" fill="#fed7aa" />
          {/* Head */}
          <ellipse cx="34" cy="22" rx="20" ry="17" fill="#f19f5a" stroke="#3c4722" strokeWidth="2.2" />
          {/* White blaze */}
          <path d="M 32,8 L 36,8 L 38,24 L 30,24 Z" fill="#ffffff" />
          {/* Big curious eyes */}
          <circle cx="26" cy="20" r="3.5" fill="#2c3a59" />
          <circle cx="25" cy="19" r="1.2" fill="#ffffff" />
          <circle cx="42" cy="20" r="3.5" fill="#2c3a59" />
          <circle cx="41" cy="19" r="1.2" fill="#ffffff" />
          {/* Nose & tongue */}
          <circle cx="34" cy="25" r="2.2" fill="#3c4722" />
          <path d="M 32,27 Q 34,31 36,27" stroke="#3c4722" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <ellipse cx="34" cy="30" rx="2.5" ry="3" fill="#f87171" />
          {/* Little Paws holding the basket rim */}
          <circle cx="20" cy="35" r="6" fill="#ffffff" stroke="#3c4722" strokeWidth="2" />
          <circle cx="48" cy="35" r="6" fill="#ffffff" stroke="#3c4722" strokeWidth="2" />
        </g>

        {/* Scattered treats: bone and flowers */}
        <g id="treats" transform="translate(196, 172)">
          {/* Dog bone */}
          <g fill="#ffffff" stroke="#3c4722" strokeWidth="1.8">
            <rect x="6" y="5" width="22" height="6" rx="2" fill="#ffffff" />
            <circle cx="6" cy="4" r="3.5" />
            <circle cx="6" cy="12" r="3.5" />
            <circle cx="28" cy="4" r="3.5" />
            <circle cx="28" cy="12" r="3.5" />
          </g>
        </g>
      </svg>
    </div>
  )
}
