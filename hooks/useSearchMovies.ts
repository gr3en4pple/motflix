import { Movie } from '@/types'
import { useMemo, useState } from 'react'

interface IUseSearchMovies {
  movies: Movie[]
}
const useSearchMovies = ({ movies }: IUseSearchMovies) => {
  const [search, setSearch] = useState<string>('')
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])

  const filteredMovies = useMemo(() => {
    const filtered = movies
      .filter((movie) => {
        const matchesSearch = movie.title
          .toLowerCase()
          .includes(search.toLowerCase())

        // const matchesGenre =
        //   selectedGenres.length === 0 ||
        //   selectedGenres.some((genre) => movie.genre.includes(genre))

        return matchesSearch //&& matchesGenre
      })
      .sort((a, b) => {
        return a.title.localeCompare(b.title)
      })

    return filtered
  }, [movies, search, selectedGenres])

  const onSearch = (value: string) => setSearch(value)
  // const onSelectGenres = (genres: string) => {
  //   setSelectedGenres(value)
  // }

  return {
    search,
    onSearch,
    selectedGenres,
    setSelectedGenres,
    filteredMovies
  }
}

export default useSearchMovies
