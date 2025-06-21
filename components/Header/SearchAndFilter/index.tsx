import { Search, X } from 'lucide-react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { SearchContext } from '@/context/SearchContext'
import { cn } from '@/lib/utils'
import FilterSelection from './FilterSelection'

const SearchInput: React.FC = () => {
  const { search, onSearch } = useContext(SearchContext)
  const [isExpanded, setIsExpanded] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSearchClick = () => {
    setIsExpanded(true)
    // Focus the input after animation starts
    setTimeout(() => {
      inputRef.current?.focus()
    }, 100)
  }

  const handleClear = () => {
    onSearch('')
    setIsExpanded(false)
  }

  const handleBlur = () => {
    // Only collapse if there's no search text
    if (!search) {
      setIsExpanded(false)
    }
  }

  // Auto-expand if there's existing search text
  useEffect(() => {
    if (search) {
      setIsExpanded(true)
    }
  }, [search])
  return (
    <>
      <div>
        <div
          className={cn(
            'group relative float-right  flex items-center text-white  transition-all duration-300 ease-in-out cursor-pointer',
            {
              'w-full md:max-w-md px-2 h-10 py-1 rounded-lg  bg-gray-700 ':
                isExpanded,
              'w-10 h-10 rounded-full justify-center bg-red-700 ': !isExpanded
            }
          )}
          onClick={!isExpanded ? handleSearchClick : undefined}
        >
          <Search
            className={`w-4 h-4  text-gray-400 transition-all duration-300 ${
              isExpanded ? 'mr-2' : 'text-white'
            }`}
          />

          <input
            ref={inputRef}
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            onBlur={handleBlur}
            className={`text-white truncate placeholder-gray-400 bg-transparent border-0 outline-none transition-all duration-300 ${
              isExpanded
                ? 'w-full opacity-100'
                : 'w-0 opacity-0 pointer-events-none'
            }`}
          />

          {search && isExpanded && (
            <button
              onClick={handleClear}
              className="ml-2 text-gray-400 transition-colors cursor-pointer hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
      <FilterSelection />
    </>
  )
}

export default SearchInput
