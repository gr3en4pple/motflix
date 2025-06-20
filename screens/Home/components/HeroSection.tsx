import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Movie } from '@/config/movies'
import { Clock, Info, Play, Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const HeroSection = ({ movie }: { movie: Movie }) => {
  return (
    <div className="relative flex items-center h-screen">
      <div style={{ backgroundImage: `url(${movie.poster})` }} className="absolute w-full h-full bg-center bg-no-repeat bg-cover" />
      <div className="absolute inset-0">
        <Image
          src={movie.backdrop || '/placeholder.svg'}
          alt={movie.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-4xl px-4 md:px-8">
        <h1 className="mb-4 text-3xl font-bold text-white duration-1000 sm:text-4xl md:text-6xl lg:text-7xl md:mb-6 animate-in slide-in-from-left-8">
          {movie.title}
        </h1>

        <div className="flex flex-wrap items-center gap-3 mb-6 duration-1000 delay-200 md:gap-6 md:mb-8 animate-in slide-in-from-left-8">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400 md:h-6 md:w-6 fill-yellow-400" />
            <span className="text-lg font-bold text-white md:text-xl">
              {movie.imdbRating}
            </span>
          </div>
          <span className="text-base text-gray-300 md:text-lg">
            {movie.year}
          </span>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-300 md:h-5 md:w-5" />
            <span className="text-base text-gray-300 md:text-lg">
              {movie.duration}
            </span>
          </div>
          <div className="flex gap-2 md:gap-3">
            {movie.genre.slice(0, 3).map((g) => (
              <Badge
                key={g}
                className="px-2 py-1 text-xs text-white border-0 bg-gray-800/80 md:text-sm md:px-3"
              >
                {g}
              </Badge>
            ))}
          </div>
        </div>

        <p className="max-w-2xl mb-8 text-base leading-relaxed text-gray-200 duration-1000 md:text-xl md:mb-10 animate-in slide-in-from-left-8 delay-400">
          {movie.description}
        </p>

        <div className="flex flex-col gap-4 duration-1000 sm:flex-row md:gap-6 animate-in slide-in-from-left-8 delay-600">
          <Button
            size="lg"
            className="px-6 py-3 text-base font-bold text-white bg-red-600 border-0 hover:bg-red-700 md:text-lg md:px-8 md:py-4"
          >
            <Play className="w-5 h-5 mr-2 md:h-6 md:w-6 md:mr-3 fill-white" />
            Play Now
          </Button>
          <Button
            size="lg"
            className="px-6 py-3 text-base font-bold text-white border-0 bg-gray-700/80 hover:bg-gray-600 md:text-lg md:px-8 md:py-4"
          >
            <Info className="w-5 h-5 mr-2 md:h-6 md:w-6 md:mr-3" />
            More Info
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
