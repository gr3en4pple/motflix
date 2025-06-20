import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Movie } from '@/config/movies'
import { Clock, Play, Plus, Star, ThumbsUp } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function MoviePoster({ movie }: { movie: Movie }) {
  return (
    <div className="relative duration-300 cursor-pointer group ">
      <div className="overflow-hidden rounded-lg shadow-lg bg-zinc-900">
        <div className="group-hover:scale-105 transition-transform delay-100 relative overflow-hidden aspect-[2/3]">
          <Image
            src={movie.poster || '/placeholder.svg'}
            alt={movie.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
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

          <div className="flex flex-wrap gap-1 mb-3 md:mb-4">
            {movie.genre.slice(0, 2).map((g) => (
              <Badge
                key={g}
                variant="secondary"
                className="text-xs text-gray-200 bg-gray-700 border-0 hover:bg-gray-600"
              >
                {g}
              </Badge>
            ))}
          </div>

          <div className="flex gap-2">
            <Button
              size="sm"
              className="flex-1 text-xs font-semibold text-white bg-red-600 border-0 hover:bg-red-700 md:text-sm"
            >
              <Play className="w-3 h-3 mr-1 md:h-4 md:w-4 fill-white" />
              Play
            </Button>
            <Button
              size="sm"
              className="px-2 text-white bg-gray-700 border-0 hover:bg-gray-600 md:px-3"
            >
              <Plus className="w-3 h-3 md:h-4 md:w-4" />
            </Button>
            <Button
              size="sm"
              className="px-2 text-white bg-gray-700 border-0 hover:bg-gray-600 md:px-3"
            >
              <ThumbsUp className="w-3 h-3 md:h-4 md:w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoviePoster
