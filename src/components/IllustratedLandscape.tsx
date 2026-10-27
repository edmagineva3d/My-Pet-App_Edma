import DogFriendsDoodle from './DogFriendsDoodle'
import DogThemedDecor from './DogThemedDecor'
import '../styles/landscape.css'

export default function IllustratedLandscape() {
  return (
    <div className="landscape-wrap" aria-hidden="true">
      {/* Dog Themed Decorations */}
      <DogThemedDecor />

      {/* Sky Clouds and Distant Birds */}
      <div className="sky-elements">
        {/* Upper Left Cloud */}
        <div className="sky-cloud cloud-1">
          <svg viewBox="0 0 110 55" className="cloud-svg">
            <path
              d="M 20,45 Q 8,45 8,32 Q 8,20 22,18 Q 30,5 48,8 Q 62,0 78,12 Q 95,8 102,22 Q 110,32 100,45 Z"
              fill="#ffffff"
            />
          </svg>
        </div>

        {/* Mid Left Cloud */}
        <div className="sky-cloud cloud-2">
          <svg viewBox="0 0 85 45" className="cloud-svg">
            <path
              d="M 15,38 Q 5,38 5,28 Q 5,16 18,15 Q 26,4 40,8 Q 52,2 65,12 Q 78,10 82,24 Q 85,38 72,38 Z"
              fill="#ffffff"
            />
          </svg>
        </div>

        {/* Upper Right Cloud */}
        <div className="sky-cloud cloud-3">
          <svg viewBox="0 0 130 60" className="cloud-svg">
            <path
              d="M 22,50 Q 8,50 8,35 Q 8,20 25,18 Q 35,5 55,8 Q 72,0 92,12 Q 112,8 120,24 Q 128,36 116,50 Z"
              fill="#ffffff"
            />
          </svg>
        </div>

        {/* Distant Flying Birds */}
        <div className="sky-birds">
          <svg viewBox="0 0 60 30" className="birds-svg">
            <path
              d="M 4,14 Q 12,6 18,12 Q 24,6 32,14"
              fill="none"
              stroke="#7592be"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M 30,22 Q 36,15 41,20 Q 46,15 52,22"
              fill="none"
              stroke="#7592be"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Layered Rolling Hills SVG */}
      <div className="hills-svg-container">
        <svg
          viewBox="0 0 800 360"
          preserveAspectRatio="none"
          className="hills-svg"
        >
          {/* Back Hill */}
          <path
            d="M -20,220 Q 150,140 380,190 Q 580,230 820,150 L 820,380 L -20,380 Z"
            fill="#8db55b"
            stroke="#3c4722"
            strokeWidth="2.5"
          />

          {/* Mid Hill Left */}
          <path
            d="M -20,180 Q 180,120 400,210 Q 550,270 820,220 L 820,380 L -20,380 Z"
            fill="#a5c76f"
            stroke="#3c4722"
            strokeWidth="2.5"
          />

          {/* Front Meadow Hill */}
          <path
            d="M -20,260 Q 200,200 400,250 Q 600,200 820,230 L 820,380 L -20,380 Z"
            fill="#cde29e"
            stroke="#3c4722"
            strokeWidth="2.5"
          />

          {/* Cute Cottage / Doghouse on Right Hill */}
          <g className="cottage-group" transform="translate(620, 120)">
            {/* Chimney */}
            <rect x="52" y="2" width="12" height="24" fill="#a56038" stroke="#3c4722" strokeWidth="2" />
            {/* Smoke Puff */}
            <path
              d="M 58, -6 Q 64, -14 58, -20 Q 52, -26 60, -32"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.85"
            />
            {/* House Body */}
            <rect x="10" y="30" width="68" height="52" rx="4" fill="#d29862" stroke="#3c4722" strokeWidth="2.5" />
            {/* Gabled Roof */}
            <polygon points="44,2 0,34 88,34" fill="#ba6f3d" stroke="#3c4722" strokeWidth="2.5" strokeLinejoin="round" />
            {/* Round Attic Window / Dog Sign */}
            <circle cx="44" cy="22" r="6" fill="#fcf8ef" stroke="#3c4722" strokeWidth="1.8" />
            {/* Doorway */}
            <path
              d="M 32,82 L 32,54 Q 44,44 56,54 L 56,82 Z"
              fill="#52321e"
              stroke="#3c4722"
              strokeWidth="2"
            />
            {/* Cottage Window */}
            <rect x="15" y="44" width="12" height="14" rx="2" fill="#fef6d8" stroke="#3c4722" strokeWidth="1.8" />
          </g>

          {/* Stepping Stones Path leading down from the cottage */}
          <g className="stepping-stones" fill="#dfebd0" stroke="#3c4722" strokeWidth="2">
            <ellipse cx="640" cy="216" rx="9" ry="6" />
            <ellipse cx="658" cy="222" rx="10" ry="7" />
            <ellipse cx="678" cy="230" rx="11" ry="8" />
            <ellipse cx="698" cy="242" rx="12" ry="8" />
            <ellipse cx="664" cy="240" rx="9" ry="6" />
            <ellipse cx="682" cy="254" rx="11" ry="7" />
            <ellipse cx="704" cy="266" rx="12" ry="8" />
          </g>

          {/* Fluffy Trees */}
          {/* Tree Right behind cottage */}
          <g className="tree-right" transform="translate(585, 126)">
            <rect x="13" y="32" width="6" height="26" fill="#754728" stroke="#3c4722" strokeWidth="2" />
            <ellipse cx="16" cy="20" rx="16" ry="24" fill="#78bf4e" stroke="#3c4722" strokeWidth="2.2" />
          </g>
          {/* Tree Far Right */}
          <g className="tree-far-right" transform="translate(710, 160)">
            <rect x="10" y="24" width="5" height="20" fill="#754728" stroke="#3c4722" strokeWidth="1.8" />
            <ellipse cx="12" cy="14" rx="13" ry="18" fill="#88c95e" stroke="#3c4722" strokeWidth="2" />
          </g>

          {/* Red Spotted Mushrooms on Left Hill */}
          <g className="mushrooms" transform="translate(100, 175)">
            {/* Big Mushroom */}
            <ellipse cx="36" cy="38" rx="8" ry="16" fill="#fcf8ef" stroke="#3c4722" strokeWidth="2" />
            <path
              d="M 12,36 Q 36,12 60,36 Q 36,38 12,36 Z"
              fill="#dd4343"
              stroke="#3c4722"
              strokeWidth="2.2"
            />
            {/* Polka Dots */}
            <circle cx="28" cy="26" r="3.5" fill="#ffffff" />
            <circle cx="44" cy="24" r="3" fill="#ffffff" />
            <circle cx="36" cy="32" r="2.5" fill="#ffffff" />

            {/* Small Mushroom Pair */}
            <g transform="translate(140, 20)">
              <ellipse cx="16" cy="24" rx="5" ry="10" fill="#fcf8ef" stroke="#3c4722" strokeWidth="1.8" />
              <path
                d="M 2,24 Q 16,8 30,24 Z"
                fill="#dd4343"
                stroke="#3c4722"
                strokeWidth="1.8"
              />
              <circle cx="12" cy="17" r="2" fill="#ffffff" />
              <circle cx="20" cy="18" r="2" fill="#ffffff" />
            </g>
          </g>

          {/* Little Decorative Tufts of Grass */}
          <g className="grass-tufts" stroke="#3c4722" strokeWidth="1.8" strokeLinecap="round" fill="none">
            <path d="M 80, 220 L 78, 212 M 80, 220 L 84, 213" />
            <path d="M 240, 240 L 237, 230 M 240, 240 L 244, 232" />
            <path d="M 450, 260 L 447, 250 M 450, 260 L 454, 252" />
            <path d="M 180, 255 L 178, 248 M 180, 255 L 183, 249" />
            <path d="M 550, 245 L 548, 238 M 550, 245 L 553, 239" />
          </g>
        </svg>
      </div>

      {/* Illustrated Doodle Pet Friends in the Meadow */}
      <DogFriendsDoodle />
    </div>
  )
}
