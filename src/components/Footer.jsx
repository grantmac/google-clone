function LeafIcon() {
  return (
    <svg className="h-[14px] w-[14px]" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#34a853"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#f2f2f2] text-[#70757a]">
      <div className="border-b border-[#dadce0] px-[30px] py-[15px] text-[15px]">
        United Kingdom
      </div>
      <div className="flex flex-col items-center justify-between gap-4 px-[30px] py-[15px] text-[14px] lg:flex-row">
        <div className="flex flex-wrap justify-center gap-6 lg:justify-start">
          <a href="#" className="hover:underline">
            Advertising
          </a>
          <a href="#" className="hover:underline">
            Business
          </a>
          <a href="#" className="hover:underline">
            How Search works
          </a>
        </div>
        <a href="#" className="flex items-center gap-2 hover:underline">
          <LeafIcon />
          <span>Applying AI towards science and the environment</span>
        </a>
        <div className="flex flex-wrap justify-center gap-6 lg:justify-end">
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Settings
          </a>
        </div>
      </div>
    </footer>
  )
}
