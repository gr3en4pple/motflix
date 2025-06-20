import { Search, X } from 'lucide-react'
import React, { useContext } from 'react'
import { SearchContext } from '@/context/SearchContext'

const SearchInput: React.FC = () => {
  const { search, onSearch } = useContext(SearchContext)
  return (
    <div className="relative flex items-center flex-1 w-full px-2 py-1 text-white placeholder-gray-400 bg-gray-800 border-gray-700 rounded-lg focus:border-red-500 md:max-w-md space-x-2">
      <Search className="w-4 h-4 text-gray-400 " />
      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        className="text-white outline-none border-0 truncate placeholder-gray-400 "
      />

      {search && (
        <button
          onClick={() => onSearch('')}
          className="text-gray-400 cursor-pointer hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}

export default SearchInput
