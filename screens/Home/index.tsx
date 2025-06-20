'use client'
import React, { useContext } from 'react'
import HeroSection from './components/HeroSection'
import Movies, { movieCategories } from '@/config/movies'
import MoviesCategory from './components/MoviesCategory'
import { SearchContext } from '@/context/SearchContext'
import { Movie } from '@/types'
import MovieCard from './components/MovieCard'

const Interstellar = Movies.find((m) => m.title === 'Interstellar') as Movie

const Home = () => {
  const { search, filteredMovies } = useContext(SearchContext)

  return (
    <div className="">
      <HeroSection movie={Interstellar} />
      <div className="mt-10">
        {search ? (
          filteredMovies?.length ? (
            <div className="grid grid-cols-2 gap-6 px-4 md:px-8 md:grid-cols-4 xl:grid-cols-6">
              {filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          ) : (
            <div>Nothing here</div>
          )
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
