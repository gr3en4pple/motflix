import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Movie } from '@/types'
import { Clock, Play, Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className="relative duration-300 ">
      <div className="overflow-hidden rounded-lg shadow-lg bg-zinc-800">
        <div className="relative overflow-hidden transition-transform delay-100 cursor-pointer group hover:scale-105 aspect-[2/3]">
          <Image
            src={movie.poster || '/placeholder.svg'}
            alt={movie.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />

          <div className="absolute inset-0 flex items-center justify-center invisible transition-all opacity-0 group-hover:visible group-hover:opacity-100 bg-black/50">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center justify-center w-10 h-10 transition-all duration-200 transform bg-red-600 rounded-full shadow-2xl hover:bg-red-700 md:w-16 md:h-16 hover:scale-110">
                <Play
                  size={100}
                  className="w-4 h-4 text-white md:w-6 md:h-6 fill-white"
                />
              </div>
            </div>
            <div className="absolute w-16 h-16 -translate-x-1/2 -translate-y-1/2 border-2 border-red-600 rounded-full left-1/2 top-1/2 md:w-20 md:h-20 animate-ping opacity-30" />
          </div>
        </div>

        <div className="p-3 md:p-4">
          <h3 className="mb-2 text-sm font-bold text-white md:text-lg line-clamp-1">
            {movie.title}
          </h3>

          <div className="flex items-center gap-2 mb-2 md:gap-3 md:mb-3">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 text-yellow-400 md:h-4 md:w-4 fill-yellow-400" />
              <span className="text-xs font-medium text-gray-300 md:text-sm">
                {movie.imdbRating}
              </span>
            </div>
            <span className="text-xs text-gray-400 md:text-sm">
              {movie.year}
            </span>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-gray-400 md:h-4 md:w-4" />
              <span className="text-xs text-gray-400 md:text-sm">
                {movie.duration}
              </span>
            </div>
          </div>

          <p className="mb-2 text-xs leading-relaxed text-gray-300 md:text-sm md:mb-3 line-clamp-2">
            {movie.description}
          </p>

          <div className="flex flex-wrap gap-1 ">
            {movie.genre.map((g) => (
              <Badge
                key={g}
                variant="secondary"
                className="text-xs text-gray-200 bg-gray-700 border-0 hover:bg-gray-600"
              >
                {g}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
