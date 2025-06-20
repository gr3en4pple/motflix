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
