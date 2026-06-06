function AppsIcon() {
  return (
    <svg className="h-6 w-6 fill-[#5f6368]" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </svg>
  )
}

export default function Header() {
  return (
    <header className="flex items-center justify-end gap-4 px-4 py-4 text-sm sm:gap-5 sm:px-6">
      <a href="#" className="text-[#202124] hover:underline">
        Gmail
      </a>
      <a href="#" className="text-[#202124] hover:underline">
        Images
      </a>
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#f1f3f4]"
        aria-label="Google apps"
      >
        <AppsIcon />
      </button>
      <a
        href="#"
        className="rounded bg-[#1a73e8] px-6 py-[10px] text-sm font-medium text-white hover:bg-[#1765cc] hover:shadow-md"
      >
        Sign in
      </a>
    </header>
  )
}
