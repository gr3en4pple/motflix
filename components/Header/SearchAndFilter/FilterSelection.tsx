import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Filter } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import { SearchContext } from '@/context/SearchContext'
import { MultiSelect } from '@/components/ui/multi-select'
import Movies from '@/config/movies'
import { Close as SheetClose } from '@radix-ui/react-dialog'

const GenresList = [...new Set(Movies.flatMap((movie) => movie.genre))].map(
  (genre) => ({
    value: genre,
    label: genre
  })
)

const YearList = Array.from(new Set(Movies.map((movie) => movie.year))).sort(
  (a, b) => b - a
)

const FilterSelection = () => {
  const {
    selectedGenres,
    setSelectedGenres,
    selectedRating,
    setSelectedRating,
    selectedYear,
    setSelectedYear
  } = useContext(SearchContext)

  const [isOpen, setOpen] = useState(false)

  const [filter, setFilter] = useState({
    genres: selectedGenres,
    year: selectedYear,
    rating: selectedRating
  })

  useEffect(() => {
    setFilter({
      genres: selectedGenres,
      year: selectedYear,
      rating: selectedRating
    })
  }, [selectedGenres, selectedYear, selectedRating, isOpen])

  const onSubmit = () => {
    setSelectedGenres(filter.genres)
    setSelectedYear(filter.year)
    setSelectedRating(filter.rating)
  }

  const onClearAll = () => {
    setSelectedGenres([])
    setSelectedYear('all-years')
    setSelectedRating('all-ratings')
  }

  const isFilterEmpty =
    !selectedGenres?.length &&
    selectedYear === 'all-years' &&
    selectedRating === 'all-ratings'
  return (
    <div>
      <Sheet
        onOpenChange={(open) => {
          setOpen(open)
        }}
      >
        <SheetTrigger asChild>
          <Filter
            className={cn('w-4 h-4 cursor-pointer', {
              'fill-white': !isFilterEmpty
            })}
          />
        </SheetTrigger>
        <SheetContent
          side="bottom"
          className="h-auto text-white bg-gray-900 border-gray-800"
        >
          <SheetHeader className="">
            <SheetTitle className="text-2xl text-white">
              Select Filters
            </SheetTitle>
            <SheetDescription className="text-gray-400">
              Choose one or more filters to find your movies.
            </SheetDescription>
          </SheetHeader>

          <div className="flex flex-col px-4 pb-6">
            <div className="flex flex-wrap gap-4 lg:gap-10">
              {/* GENRES */}
              <div className="lg:max-w-[calc(100%/3)] w-full">
                <div className="mb-2 text-lg font-bold">Genres</div>
                <MultiSelect
                  options={GenresList}
                  className="bg-gray-800 border-gray-700"
                  onValueChange={(genres) =>
                    setFilter((prev) => ({ ...prev, genres }))
                  }
                  defaultValue={filter.genres}
                  placeholder="Select genres"
                  variant="secondary"
                  animation={2}
                  maxCount={GenresList.length}
                />
              </div>

              {/* YEARS */}
              <div className="w-full lg:w-auto">
                <div className="mb-2 text-lg font-bold ">Years</div>
                <Select
                  value={filter.year}
                  onValueChange={(year) =>
                    setFilter((prev) => ({ ...prev, year }))
                  }
                >
                  <SelectTrigger className="w-full lg:w-32 !h-10 cursor-pointer bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem
                      value="all-years"
                      className="text-white hover:bg-gray-700"
                    >
                      All Years
                    </SelectItem>
                    {YearList.map((year) => (
                      <SelectItem
                        key={year}
                        value={year.toString()}
                        className="text-white hover:bg-gray-700"
                      >
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* RATINGS */}
              <div className="w-full lg:w-auto">
                <div className="mb-2 text-lg font-bold">Ratings</div>
                <Select
                  value={filter.rating}
                  onValueChange={(rating) =>
                    setFilter((prev) => ({ ...prev, rating }))
                  }
                >
                  <SelectTrigger className="w-full lg:w-32 !h-10  text-white bg-gray-800 border-gray-700 cursor-pointer ">
                    <SelectValue placeholder="Rating" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem
                      value="all-ratings"
                      className="text-white hover:bg-gray-700"
                    >
                      All Ratings
                    </SelectItem>
                    <SelectItem
                      value="9+"
                      className="text-white hover:bg-gray-700"
                    >
                      9.0+
                    </SelectItem>
                    <SelectItem
                      value="8+"
                      className="text-white hover:bg-gray-700"
                    >
                      8.0-8.9
                    </SelectItem>
                    <SelectItem
                      value="7+"
                      className="text-white hover:bg-gray-700"
                    >
                      7.0-7.9
                    </SelectItem>
                    <SelectItem
                      value="below7"
                      className="text-white hover:bg-gray-700"
                    >
                      Below 7.0
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-10">
              <Button
                onClick={onClearAll}
                className="uppercase w-1/2 h-10 font-semibold text-white bg-gray-700 hover:bg-gray-800"
              >
                Clear all
              </Button>
              <SheetClose className="w-1/2">
                <Button
                  onClick={onSubmit}
                  variant="destructive"
                  className="w-full h-10 font-semibold text-white"
                >
                  Apply
                </Button>
              </SheetClose>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default FilterSelection
