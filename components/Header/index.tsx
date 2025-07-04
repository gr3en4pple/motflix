'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import SearchAndFilter from './SearchAndFilter'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/90 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 py-3  md:px-8 md:py-4">
        <div className="text-2xl font-bold text-red-600 md:text-3xl">
          MỌTFLIX
        </div>

        {/* Desktop Navigation */}

        <div className="relative items-center hidden gap-8 text-white md:flex">
          <SearchAndFilter />
          <Link
            href="/"
            className="font-medium transition-colors hover:text-gray-300"
          >
            Home
          </Link>
          <Link
            href="/"
            className="font-medium transition-colors hover:text-gray-300"
          >
            Movies
          </Link>
        </div>

        {/* Mobile Menu Button + search */}
        <div className="relative md:hidden flex items-center text-white gap-4">
          <SearchAndFilter />
          <button
            className="p-2 text-white "
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="flex flex-col items-center justify-center w-6 h-6">
              <span
                className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  mobileMenuOpen
                    ? 'rotate-45 translate-y-1'
                    : '-translate-y-0.5'
                }`}
              ></span>
              <span
                className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  mobileMenuOpen
                    ? '-rotate-45 -translate-y-1'
                    : 'translate-y-0.5'
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-800 md:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block py-2 font-medium text-white transition-colors hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              href="/"
              className="block py-2 font-medium text-white transition-colors hover:text-gray-300"
            >
              Movies
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header
