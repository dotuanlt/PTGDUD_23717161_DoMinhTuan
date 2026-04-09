'use client'

import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'

export default function Pagination({ currentPage = 1, totalPages = 11, onPageChange }) {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && onPageChange) {
      onPageChange(page)
    }
  }

  const renderPageNumbers = () => {
    const pages = []
    
    // Always show first few pages
    for (let i = 1; i <= Math.min(4, totalPages); i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium transition-colors ${
            currentPage === i
              ? 'bg-primary text-white'
              : 'text-foreground hover:bg-secondary'
          }`}
        >
          {i}
        </button>
      )
    }

    // Show ellipsis if needed
    if (totalPages > 5) {
      pages.push(
        <span key="ellipsis" className="flex h-8 w-8 items-center justify-center">
          <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
        </span>
      )

      // Show last two pages
      for (let i = totalPages - 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium transition-colors ${
              currentPage === i
                ? 'bg-primary text-white'
                : 'text-foreground hover:bg-secondary'
            }`}
          >
            {i}
          </button>
        )
      }
    }

    return pages
  }

  return (
    <div className="flex items-center justify-center gap-1">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      
      {renderPageNumbers()}
      
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  )
}
