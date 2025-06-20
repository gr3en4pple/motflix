import Header from '@/components/Header'
import Home from '@/screens/Home'
import SearchContextProvider from '@/context/SearchContext'

export default function index() {
  return (
    <SearchContextProvider>
      <div className="bg-black/90 min-h-screen pb-20">
        <Header />
        <Home />
      </div>
    </SearchContextProvider>
  )
}
