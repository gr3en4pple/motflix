'use client'
import React, { createContext, PropsWithChildren } from 'react'
import useSearchMovies from '@/hooks/useSearchMovies'
import Movies from '@/config/movies'
import { Movie } from '@/types'

export interface ISearchContext {
  filteredMovies: Movie[]
  search: string
  onSearch: (value: string) => void
}
export const SearchContext = createContext<ISearchContext>({
  filteredMovies: [],
  search: '',
  onSearch: () => {}
})

const SearchContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { search, onSearch, filteredMovies } = useSearchMovies({
    movies: Movies
  })
  return (
    <SearchContext.Provider value={{ onSearch, search, filteredMovies }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider
