'use client'
import React from 'react'
import HeroSection from './components/HeroSection'
import Movies, { movieCategories } from '@/config/movies'
import MoviesCategory from './components/MoviesCategory'

const Home = () => {
  return (
    <div className="">
      <HeroSection movie={Movies[0]} />

      {movieCategories.map((cate) => (
        <MoviesCategory
          key={cate.title}
          title={cate.title}
          movies={cate.movies}
        />
      ))}
    </div>
  )
}

export default Home
