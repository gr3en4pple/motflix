import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import MoviePoster from './MoviePoster'
import { Movie } from '@/config/movies'

const MoviesCategory = ({
  title,
  movies
}: {
  title: string
  movies: Movie[]
}) => {
  return (
    <div className="mb-8 md:mb-12">
      <h2 className="px-4 mb-4 text-xl font-bold text-white md:text-2xl md:mb-6 md:px-8">
        {title}
      </h2>
      <div className="px-4 md:px-8">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={12}
          slidesPerView={2.2}
          navigation={{
            nextEl: `.swiper-button-next-${title.replace(/\s+/g, '-')}`,
            prevEl: `.swiper-button-prev-${title.replace(/\s+/g, '-')}`
          }}
          breakpoints={{
            480: {
              slidesPerView: 2.5,
              spaceBetween: 16
            },
            640: {
              slidesPerView: 3.2,
              spaceBetween: 16
            },
            768: {
              slidesPerView: 3.5,
              spaceBetween: 16
            },
            1024: {
              slidesPerView: 4.2,
              spaceBetween: 16
            },
            1280: {
              slidesPerView: 5.2,
              spaceBetween: 16
            }
          }}
          className="movie-swiper"
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MoviePoster movie={movie} />
            </SwiperSlide>
          ))}

          <div
            className={`swiper-button-prev swiper-button-prev-${title.replace(
              /\s+/g,
              '-'
            )} hidden md:flex !text-white !w-12 !h-12 !bg-black/70 !rounded-full hover:!bg-black/90 transition-all duration-200`}
          ></div>
          <div
            className={`swiper-button-next swiper-button-next-${title.replace(
              /\s+/g,
              '-'
            )} hidden md:flex !text-white !w-12 !h-12 !bg-black/70 !rounded-full hover:!bg-black/90 transition-all duration-200`}
          ></div>
        </Swiper>
      </div>
    </div>
  )
}

export default MoviesCategory
