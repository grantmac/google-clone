import { useState } from 'react'

function SearchIcon() {
  return (
    <svg className="h-5 w-5 fill-[#9aa0a6]" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
  )
}

function MicIcon() {
  return (
    <svg className="h-6 w-6 fill-[#4285f4]" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
    </svg>
  )
}

function LensIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 192 192" aria-hidden="true">
      <circle cx="96" cy="96" r="88" fill="none" stroke="#4285f4" strokeWidth="8" />
      <circle cx="96" cy="96" r="40" fill="#4285f4" opacity="0.2" />
      <path fill="#ea4335" d="M96 56a40 40 0 1 1 0 80 40 40 0 0 1 0-80z" opacity="0.6" />
      <path fill="#fbbc05" d="M136 96a40 40 0 0 1-40 40V96h40z" opacity="0.7" />
      <path fill="#34a853" d="M96 136a40 40 0 0 1-40-40h40v40z" opacity="0.7" />
    </svg>
  )
}

export default function SearchBox() {
  const [focused, setFocused] = useState(false)

  return (
    <div
      className={`flex h-[46px] w-full max-w-[584px] items-center rounded-full border bg-white px-4 transition-shadow ${
        focused
          ? 'border-transparent shadow-[0_1px_6px_rgba(32,33,36,0.28)]'
          : 'border-[#dfe1e5] hover:border-transparent hover:shadow-[0_1px_6px_rgba(32,33,36,0.28)]'
      }`}
    >
      <SearchIcon />
      <input
        type="text"
        aria-label="Search"
        className="mx-3 flex-1 border-none bg-transparent text-base text-[#202124] outline-none"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#f1f3f4]" aria-label="Search by voice">
        <MicIcon />
      </button>
      <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#f1f3f4]" aria-label="Search by image">
        <LensIcon />
      </button>
    </div>
  )
}
