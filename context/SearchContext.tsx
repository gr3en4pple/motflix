'use client'
import React, { createContext, PropsWithChildren } from 'react'
import useSearchMovies from '@/hooks/useSearchMovies'
import Movies from '@/config/movies'
import { Movie } from '@/types'

export interface ISearchContext {
  filteredMovies: Movie[]
  search: string
  selectedGenres: string[]
  selectedYear: string
  selectedRating: string
  onSearch: (value: string) => void
  setSelectedGenres: (value: any) => void
  setSelectedYear: (value: any) => void
  setSelectedRating: (value: any) => void
}
export const SearchContext = createContext<ISearchContext>({
  filteredMovies: [],
  search: '',
  selectedGenres: [],
  selectedYear: '',
  selectedRating: '',
  onSearch: () => {},
  setSelectedGenres: () => {},
  setSelectedYear: () => {},
  setSelectedRating: () => {}
})

const SearchContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const {
    search,
    onSearch,
    filteredMovies,
    selectedGenres,
    selectedYear,
    selectedRating,
    setSelectedGenres,
    setSelectedYear,
    setSelectedRating
  } = useSearchMovies({
    movies: Movies
  })
  return (
    <SearchContext.Provider
      value={{
        onSearch,
        search,
        filteredMovies,
        selectedGenres,
        selectedYear,
        selectedRating,
        setSelectedGenres,
        setSelectedYear,
        setSelectedRating
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider
