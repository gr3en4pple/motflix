export interface Movie {
  id: number
  title: string
  genre: string[]
  year: number
  duration: string
  imdbRating: number
  poster: string
  backdrop: string
  description: string
  videoPreview?: string
}

const Movies: Movie[] = [
  {
    id: 1,
    title: 'The Dark Knight',
    genre: ['Action', 'Crime', 'Drama'],
    year: 2008,
    duration: '2h 32m',
    imdbRating: 9.0,
    poster:
      'https://xl.movieposterdb.com/25_04/2008/468569/xl_the-dark-knight-movie-poster_0dea85fd.jpg',
    backdrop: '/placeholder.svg?height=800&width=1400',
    description:
      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.',
    videoPreview: '/placeholder.svg?height=400&width=600&text=Video+Preview'
  },
  {
    id: 2,
    title: 'Inception',
    genre: ['Action', 'Sci-Fi', 'Thriller'],
    year: 2010,
    duration: '2h 28m',
    imdbRating: 8.8,
    poster: 'https://xl.movieposterdb.com/10_06/2010/1375666/xl_1375666_07030c72.jpg?v=2025-06-19%2019:02:07',
    backdrop: '/placeholder.svg?height=800&width=1400',
    description:
      'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    videoPreview: '/placeholder.svg?height=400&width=600&text=Video+Preview'
  },
  {
    id: 3,
    title: 'Interstellar',
    genre: ['Adventure', 'Drama', 'Sci-Fi'],
    year: 2014,
    duration: '2h 49m',
    imdbRating: 8.6,
    poster: 'https://xl.movieposterdb.com/14_09/2014/816692/xl_816692_593eaeff.jpg?v=2025-06-12%2011:12:03',
    backdrop: '/placeholder.svg?height=800&width=1400',
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    videoPreview: '/placeholder.svg?height=400&width=600&text=Video+Preview'
  },
  {
    id: 4,
    title: 'The Matrix',
    genre: ['Action', 'Sci-Fi'],
    year: 1999,
    duration: '2h 16m',
    imdbRating: 8.7,
    poster: 'https://xl.movieposterdb.com/25_03/1999/133093/xl_the-matrix-movie-poster_55229477.png?v=2025-04-20%2010:45:34',
    backdrop: '/placeholder.svg?height=800&width=1400',
    description:
      'A computer programmer is led to fight an underground war against powerful computers who have constructed his entire reality.',
    videoPreview: '/placeholder.svg?height=400&width=600&text=Video+Preview'
  },
  {
    id: 5,
    title: 'Pulp Fiction',
    genre: ['Crime', 'Drama'],
    year: 1994,
    duration: '2h 34m',
    imdbRating: 8.9,
    poster: 'https://xl.movieposterdb.com/08_08/1994/110912/xl_110912_70b77673.jpg',
    backdrop: '/placeholder.svg?height=800&width=1400',
    description:
      'The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.',
    videoPreview: '/placeholder.svg?height=400&width=600&text=Video+Preview'
  },
  {
    id: 6,
    title: 'Fight Club',
    genre: ['Drama', 'Thriller'],
    year: 1999,
    duration: '2h 19m',
    imdbRating: 8.8,
    poster: 'https://xl.movieposterdb.com/13_06/1999/137523/xl_137523_1d292ea3.jpg?v=2025-05-06%2023:28:07',
    backdrop: '/placeholder.svg?height=800&width=1400',
    description:
      'An insomniac office worker and a devil-may-care soap maker form an underground fight club.',
    videoPreview: '/placeholder.svg?height=400&width=600&text=Video+Preview'
  },
  {
    id: 7,
    title: 'The Godfather',
    genre: ['Crime', 'Drama'],
    year: 1972,
    duration: '2h 55m',
    imdbRating: 9.2,
    poster: '/placeholder.svg?height=600&width=400',
    backdrop: '/placeholder.svg?height=800&width=1400',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    videoPreview: '/placeholder.svg?height=400&width=600&text=Video+Preview'
  },
  {
    id: 8,
    title: 'Forrest Gump',
    genre: ['Drama', 'Romance'],
    year: 1994,
    duration: '2h 22m',
    imdbRating: 8.8,
    poster: '/placeholder.svg?height=600&width=400',
    backdrop: '/placeholder.svg?height=800&width=1400',
    description:
      'The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man.',
    videoPreview: '/placeholder.svg?height=400&width=600&text=Video+Preview'
  },
  {
    id: 9,
    title: 'The Shawshank Redemption',
    genre: ['Drama'],
    year: 1994,
    duration: '2h 22m',
    imdbRating: 9.3,
    poster: '/placeholder.svg?height=600&width=400',
    backdrop: '/placeholder.svg?height=800&width=1400',
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    videoPreview: '/placeholder.svg?height=400&width=600&text=Video+Preview'
  },
  {
    id: 10,
    title: 'Goodfellas',
    genre: ['Biography', 'Crime', 'Drama'],
    year: 1990,
    duration: '2h 26m',
    imdbRating: 8.7,
    poster: '/placeholder.svg?height=600&width=400',
    backdrop: '/placeholder.svg?height=800&width=1400',
    description:
      'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill.',
    videoPreview: '/placeholder.svg?height=400&width=600&text=Video+Preview'
  },
  {
    id: 11,
    title: 'The Lord of the Rings: The Fellowship',
    genre: ['Adventure', 'Drama', 'Fantasy'],
    year: 2001,
    duration: '2h 58m',
    imdbRating: 8.8,
    poster: '/placeholder.svg?height=600&width=400',
    backdrop: '/placeholder.svg?height=800&width=1400',
    description:
      'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring.',
    videoPreview: '/placeholder.svg?height=400&width=600&text=Video+Preview'
  },
  {
    id: 12,
    title: 'Star Wars: A New Hope',
    genre: ['Adventure', 'Fantasy', 'Sci-Fi'],
    year: 1977,
    duration: '2h 1m',
    imdbRating: 8.6,
    poster: '/placeholder.svg?height=600&width=400',
    backdrop: '/placeholder.svg?height=800&width=1400',
    description:
      'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy.',
    videoPreview: '/placeholder.svg?height=400&width=600&text=Video+Preview'
  },
  {
    id: 13,
    title: 'Avengers: Endgame',
    genre: ['Action', 'Adventure', 'Drama'],
    year: 2019,
    duration: '3h 1m',
    imdbRating: 8.4,
    poster: '/placeholder.svg?height=600&width=400',
    backdrop: '/placeholder.svg?height=800&width=1400',
    description:
      "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions.",
    videoPreview: '/placeholder.svg?height=400&width=600&text=Video+Preview'
  },
  {
    id: 14,
    title: 'Parasite',
    genre: ['Comedy', 'Drama', 'Thriller'],
    year: 2019,
    duration: '2h 12m',
    imdbRating: 8.5,
    poster: '/placeholder.svg?height=600&width=400',
    backdrop: '/placeholder.svg?height=800&width=1400',
    description:
      'A poor family schemes to become employed by a wealthy family by infiltrating their household.',
    videoPreview: '/placeholder.svg?height=400&width=600&text=Video+Preview'
  },
  {
    id: 15,
    title: 'Joker',
    genre: ['Crime', 'Drama', 'Thriller'],
    year: 2019,
    duration: '2h 2m',
    imdbRating: 8.4,
    poster: '/placeholder.svg?height=600&width=400',
    backdrop: '/placeholder.svg?height=800&width=1400',
    description:
      'A mentally troubled comedian is disregarded by society and turns to a life of crime and chaos in Gotham City.',
    videoPreview: '/placeholder.svg?height=400&width=600&text=Video+Preview'
  },
  {
    id: 16,
    title: 'Spider-Man: Into the Spider-Verse',
    genre: ['Animation', 'Action', 'Adventure'],
    year: 2018,
    duration: '1h 57m',
    imdbRating: 8.4,
    poster: '/placeholder.svg?height=600&width=400',
    backdrop: '/placeholder.svg?height=800&width=1400',
    description:
      'Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from other dimensions.',
    videoPreview: '/placeholder.svg?height=400&width=600&text=Video+Preview'
  },
  {
    id: 17,
    title: '1917',
    genre: ['Drama', 'War'],
    year: 2019,
    duration: '1h 59m',
    imdbRating: 8.3,
    poster: '/placeholder.svg?height=600&width=400',
    backdrop: '/placeholder.svg?height=800&width=1400',
    description:
      'Two British soldiers are tasked with delivering a critical message to prevent a doomed attack during World War I.',
    videoPreview: '/placeholder.svg?height=400&width=600&text=Video+Preview'
  },
  {
    id: 18,
    title: 'Mad Max: Fury Road',
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    year: 2015,
    duration: '2h',
    imdbRating: 8.1,
    poster: '/placeholder.svg?height=600&width=400',
    backdrop: '/placeholder.svg?height=800&width=1400',
    description:
      'In a post-apocalyptic wasteland, Max teams up with a mysterious woman to flee from a tyrannical warlord.',
    videoPreview: '/placeholder.svg?height=400&width=600&text=Video+Preview'
  }
]

export const movieCategories = [
  { title: 'Trending Now', movies: Movies.slice(0, 8) },
  {
    title: 'Action Movies',
    movies: Movies.filter((m) => m.genre.includes('Action'))
  },
  {
    title: 'Sci-Fi Collection',
    movies: Movies.filter((m) => m.genre.includes('Sci-Fi'))
  },
  {
    title: 'Drama Series',
    movies: Movies.filter((m) => m.genre.includes('Drama'))
  },
  {
    title: 'Crime Thrillers',
    movies: Movies.filter((m) => m.genre.includes('Crime'))
  },
  { title: 'Top Rated', movies: Movies.filter((m) => m.imdbRating >= 8.5) }
]

export default Movies
