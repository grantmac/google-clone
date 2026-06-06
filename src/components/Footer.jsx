const footerLinksLeft = ['Advertising', 'Business', 'How Search works']
const footerLinksRight = ['Privacy', 'Terms', 'Settings']

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#f2f2f2] text-[#70757a]">
      <div className="border-b border-[#dadce0] px-[30px] py-[15px] text-sm">
        India
      </div>
      <div className="flex flex-col items-center justify-between gap-4 px-[30px] py-[15px] text-sm sm:flex-row">
        <div className="flex flex-wrap justify-center gap-6 sm:justify-start">
          {footerLinksLeft.map((link) => (
            <a key={link} href="#" className="hover:underline">
              {link}
            </a>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-6 sm:justify-end">
          {footerLinksRight.map((link) => (
            <a key={link} href="#" className="hover:underline">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
