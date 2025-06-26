'use client'
import React, { useContext } from 'react'
import HeroSection from './components/HeroSection'
import Movies, { movieCategories } from '@/config/movies'
import MoviesCategory from './components/MoviesCategory'
import { SearchContext } from '@/context/SearchContext'
import { Movie } from '@/types'
import MovieCard from './components/MovieCard'
import { Film } from 'lucide-react'

const Interstellar = Movies.find((m) => m.title === 'Interstellar') as Movie

const Home = () => {
  const {
    search,
    filteredMovies,
    selectedGenres,
    selectedYear,
    selectedRating
  } = useContext(SearchContext)
  const hasFilter =
    search.trim() ||
    selectedGenres?.length ||
    selectedYear !== 'all-years' ||
    selectedRating !== 'all-ratings'
  return (
    <div className="">
      <HeroSection movie={Interstellar} />
      <div data-movie-section="movies-list" className="mt-10 overflow-x-hidden">
        {hasFilter ? (
          <div className="px-4 md:px-8">
            <div className="mb-6 text-lg font-semibold text-white md:mb-10 md:text-2xl">Search Results:</div>
            {filteredMovies?.length ? (
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4 xl:grid-cols-6">
                {filteredMovies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-white min-h-[300px]">
                <Film size={150} />
                <div className="mt-4 text-sm font-semibold md:text-xl">
                  No result found!
                </div>
              </div>
            )}
          </div>
        ) : (
          movieCategories.map((cate) => (
            <MoviesCategory
              key={cate.title}
              title={cate.title}
              movies={cate.movies}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Home
