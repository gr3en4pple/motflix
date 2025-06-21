import { Movie } from '@/types'
import { useMemo, useState } from 'react'

interface IUseSearchMovies {
  movies: Movie[]
}
const useSearchMovies = ({ movies }: IUseSearchMovies) => {
  const [search, setSearch] = useState<string>('')
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [selectedYear, setSelectedYear] = useState<string>('all-years')
  const [selectedRating, setSelectedRating] = useState<string>('all-ratings')
  const filteredMovies = useMemo(() => {
    const filtered = movies
      .filter((movie) => {
        const matchesSearch = movie.title
          .toLowerCase()
          .includes(search.toLowerCase())
        const matchesGenre =
          selectedGenres.length === 0 ||
          selectedGenres.some((genre) => movie.genre.includes(genre))

        const matchesYear =
          !selectedYear ||
          selectedYear === 'all-years' ||
          movie.year.toString() === selectedYear

        const matchesRating =
          !selectedRating ||
          selectedRating === 'all-ratings' ||
          (selectedRating === '9+' && movie.imdbRating >= 9) ||
          (selectedRating === '8+' &&
            movie.imdbRating >= 8 &&
            movie.imdbRating < 9) ||
          (selectedRating === '7+' &&
            movie.imdbRating >= 7 &&
            movie.imdbRating < 8) ||
          (selectedRating === 'below7' && movie.imdbRating < 7)

        return matchesSearch && matchesGenre && matchesYear && matchesRating
      })
      .sort((a, b) => {
        return a.title.localeCompare(b.title)
      })

    return filtered
  }, [movies, search, selectedGenres, selectedYear, selectedRating])

  const onSearch = (value: string) => setSearch(value)

  return {
    search,
    onSearch,
    filteredMovies,
    setSelectedGenres,
    setSelectedYear,
    setSelectedRating,
    selectedGenres,
    selectedYear,
    selectedRating
  }
}

export default useSearchMovies
