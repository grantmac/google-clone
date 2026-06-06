function AppsIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#5f6368" d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c-1.1,0 -2,0.9 -2,2s0.9,2 2,2 2,-0.9 2,-2 -0.9,-2 -2,-2zM6,20c-1.1,0 -2,0.9 -2,2s0.9,2 2,2 2,-0.9 2,-2 -0.9,-2 -2,-2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c-1.1,0 -2,0.9 -2,2s0.9,2 2,2 2,-0.9 2,-2 -0.9,-2 -2,-2zM12,20c-1.1,0 -2,0.9 -2,2s0.9,2 2,2 2,-0.9 2,-2 -0.9,-2 -2,-2zM18,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c-1.1,0 -2,0.9 -2,2s0.9,2 2,2 2,-0.9 2,-2 -0.9,-2 -2,-2zM18,20c-1.1,0 -2,0.9 -2,2s0.9,2 2,2 2,-0.9 2,-2 -0.9,-2 -2,-2z" />
    </svg>
  )
}

function ProfileAvatar() {
  return (
    <button
      type="button"
      className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-[#1a73e8] text-sm font-medium text-white"
      aria-label="Google Account"
    >
      G
    </button>
  )
}

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-[6px] text-[13px] leading-none sm:px-5">
      <nav className="flex items-center gap-[15px] pl-1">
        <a href="#" className="text-[#202124] hover:underline">
          About
        </a>
        <a href="#" className="text-[#202124] hover:underline">
          Store
        </a>
      </nav>
      <nav className="flex items-center gap-[15px] pr-1">
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
        <ProfileAvatar />
      </nav>
    </header>
  )
}
