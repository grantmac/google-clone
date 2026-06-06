import Header from './components/Header'
import Footer from './components/Footer'
import GoogleLogo from './components/GoogleLogo'
import SearchBox from './components/SearchBox'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#202124]">
      <Header />
      <main className="flex flex-1 flex-col items-center px-4 pb-8 pt-[13vh]">
        <GoogleLogo />
        <SearchBox />
        <div className="mt-[26px] flex flex-wrap items-center justify-center gap-[11px]">
          <button type="button" className="google-btn">
            Google Search
          </button>
          <button type="button" className="google-btn">
            I&apos;m Feeling Lucky
          </button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
