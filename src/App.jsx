import Header from './components/Header'
import Footer from './components/Footer'
import GoogleLogo from './components/GoogleLogo'
import SearchBox from './components/SearchBox'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#202124]">
      <Header />
      <main className="flex flex-1 flex-col items-center px-4 pt-[15vh] sm:pt-[18vh]">
        <GoogleLogo />
        <SearchBox />
        <div className="mt-[30px] flex flex-wrap items-center justify-center gap-[11px]">
          <button
            type="button"
            className="rounded border border-transparent bg-[#f8f9fa] px-4 py-[10px] text-sm text-[#3c4043] hover:border-[#dadce0] hover:shadow-sm"
          >
            Google Search
          </button>
          <button
            type="button"
            className="rounded border border-transparent bg-[#f8f9fa] px-4 py-[10px] text-sm text-[#3c4043] hover:border-[#dadce0] hover:shadow-sm"
          >
            I&apos;m Feeling Lucky
          </button>
        </div>
        <p className="mt-8 text-sm text-[#3c4043]">
          Google offered in:{' '}
          <a href="#" className="text-[#1a0dab] hover:underline">
            हिन्दी
          </a>{' '}
          <a href="#" className="text-[#1a0dab] hover:underline">
            বাংলা
          </a>{' '}
          <a href="#" className="text-[#1a0dab] hover:underline">
            తెలుగు
          </a>{' '}
          <a href="#" className="text-[#1a0dab] hover:underline">
            मराठी
          </a>{' '}
          <a href="#" className="text-[#1a0dab] hover:underline">
            தமிழ்
          </a>{' '}
          <a href="#" className="text-[#1a0dab] hover:underline">
            ગુજરાતી
          </a>{' '}
          <a href="#" className="text-[#1a0dab] hover:underline">
            ಕನ್ನಡ
          </a>{' '}
          <a href="#" className="text-[#1a0dab] hover:underline">
            മലയാളം
          </a>{' '}
          <a href="#" className="text-[#1a0dab] hover:underline">
            ਪੰਜਾਬੀ
          </a>
        </p>
      </main>
      <Footer />
    </div>
  )
}
