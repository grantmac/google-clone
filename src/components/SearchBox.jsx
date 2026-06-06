import { useState } from 'react'

function PlusIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#70757a" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </svg>
  )
}

function MicIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285f4" d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
      <path fill="#4285f4" d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
    </svg>
  )
}

function LensIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 192 192" aria-hidden="true">
      <rect fill="none" height="192" width="192" />
      <path fill="#4285f4" d="M142.16 73.16l-5.7-5.7a56.14 56.14 0 0 0-79.2 0 56.14 56.14 0 0 0 0 79.2l5.7 5.7a56.14 56.14 0 0 0 79.2 0 56.14 56.14 0 0 0 0-79.2zM99.6 139.6a40 40 0 1 1 0-80 40 40 0 0 1 0 80z" />
      <path fill="#ea4335" d="M139.6 52.4a40 40 0 0 0-56.57 0L52.4 83.03a40 40 0 0 0 56.57 56.57l30.63-30.63a40 40 0 0 0 0-56.57z" opacity="0.7" />
      <path fill="#fbbc05" d="M99.6 52.4a40 40 0 0 0-28.28 11.72L60.69 94.75A40 40 0 0 0 99.6 132.4V52.4z" opacity="0.7" />
      <path fill="#34a853" d="M99.6 132.4a40 40 0 0 0 38.91-30.65L99.6 92.4v40z" opacity="0.7" />
    </svg>
  )
}

function AiModeIcon() {
  return (
    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285f4" d="M12 2l1.09 3.36h3.55l-2.87 2.09 1.09 3.36L12 8.72 9.14 11.8l1.09-3.36L7.36 5.36h3.55L12 2zm7 7l.82 2.53h2.67l-2.16 1.57.82 2.53L19 12.1l-2.16 1.57.82-2.53L15.5 11.53h2.67L19 9zM5 9l.82 2.53h2.67L6.33 13.1l.82 2.53L5 12.1 2.84 13.63l.82-2.53L1.5 11.53h2.67L5 9z" />
    </svg>
  )
}

export default function SearchBox() {
  const [focused, setFocused] = useState(false)

  return (
    <div
      className={`search-shell ${focused ? 'search-shell-focused' : ''}`}
    >
      <button type="button" className="icon-btn ml-1" aria-label="Upload files or images">
        <PlusIcon />
      </button>
      <input
        type="text"
        aria-label="Search"
        className="search-input"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <div className="flex items-center gap-1 pr-1">
        <button type="button" className="icon-btn" aria-label="Search by voice">
          <MicIcon />
        </button>
        <button type="button" className="icon-btn" aria-label="Search by image">
          <LensIcon />
        </button>
        <button type="button" className="ai-mode-btn">
          <AiModeIcon />
          <span>AI Mode</span>
        </button>
      </div>
    </div>
  )
}
