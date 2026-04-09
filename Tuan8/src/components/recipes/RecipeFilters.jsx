'use client'

import { useState } from 'react'
import { ChevronUp, Menu, Star } from 'lucide-react'

const cookingTypes = [
  'Pan-fried',
  'Stir-fried',
  'Grilled',
  'Roasted',
  'Sauteed',
  'Baked',
  'Steamed',
  'Stewed',
]

export default function RecipeFilters({ filters, onFiltersChange }) {
  const [expandedSections, setExpandedSections] = useState({
    type: true,
    time: true,
    rating: true,
  })

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const toggleType = (type) => {
    const newTypes = filters.types.includes(type)
      ? filters.types.filter((t) => t !== type)
      : [...filters.types, type]
    onFiltersChange({ ...filters, types: newTypes })
  }

  const toggleRating = (rating) => {
    const newRatings = filters.ratings.includes(rating)
      ? filters.ratings.filter((r) => r !== rating)
      : [...filters.ratings, rating]
    onFiltersChange({ ...filters, ratings: newRatings })
  }

  const handleApply = () => {
    // Apply filters logic
    console.log('Applying filters:', filters)
  }

  return (
    <div className="rounded-xl border border-border bg-white p-6">
      {/* Header */}
      <div className="mb-6 flex items-center gap-2">
        <Menu className="h-5 w-5 text-foreground" />
        <span className="font-semibold text-foreground">FILTERS</span>
      </div>

      {/* Type Section */}
      <div className="border-b border-border pb-6">
        <button
          onClick={() => toggleSection('type')}
          className="flex w-full items-center justify-between text-left"
        >
          <span className="font-medium text-foreground">Type</span>
          <ChevronUp
            className={`h-5 w-5 text-primary transition-transform ${
              !expandedSections.type ? 'rotate-180' : ''
            }`}
          />
        </button>

        {expandedSections.type && (
          <div className="mt-4 grid grid-cols-2 gap-3">
            {cookingTypes.map((type) => (
              <label key={type} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.types.includes(type)}
                  onChange={() => toggleType(type)}
                  className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-sm text-foreground">{type}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Time Section */}
      <div className="border-b border-border py-6">
        <button
          onClick={() => toggleSection('time')}
          className="flex w-full items-center justify-between text-left"
        >
          <span className="font-medium text-foreground">Time</span>
          <ChevronUp
            className={`h-5 w-5 text-primary transition-transform ${
              !expandedSections.time ? 'rotate-180' : ''
            }`}
          />
        </button>

        {expandedSections.time && (
          <div className="mt-4">
            <div className="mb-2 flex justify-between text-sm text-muted-foreground">
              <span>{filters.timeRange[0]} minutes</span>
              <span>{filters.timeRange[1]} minutes</span>
            </div>
            <div className="relative h-2 rounded-full bg-secondary">
              <div
                className="absolute h-full rounded-full bg-primary"
                style={{
                  left: `${((filters.timeRange[0] - 0) / 60) * 100}%`,
                  right: `${100 - ((filters.timeRange[1] - 0) / 60) * 100}%`,
                }}
              />
              <input
                type="range"
                min="0"
                max="60"
                value={filters.timeRange[0]}
                onChange={(e) =>
                  onFiltersChange({
                    ...filters,
                    timeRange: [parseInt(e.target.value), filters.timeRange[1]],
                  })
                }
                className="absolute inset-0 w-full cursor-pointer opacity-0"
              />
            </div>
          </div>
        )}
      </div>

      {/* Rating Section */}
      <div className="pt-6">
        <button
          onClick={() => toggleSection('rating')}
          className="flex w-full items-center justify-between text-left"
        >
          <span className="font-medium text-foreground">Rating</span>
          <ChevronUp
            className={`h-5 w-5 text-primary transition-transform ${
              !expandedSections.rating ? 'rotate-180' : ''
            }`}
          />
        </button>

        {expandedSections.rating && (
          <div className="mt-4 space-y-3">
            {[5, 4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.ratings.includes(rating)}
                  onChange={() => toggleRating(rating)}
                  className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                />
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-gray-200 text-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Apply Button */}
      <button
        onClick={handleApply}
        className="mt-6 w-full rounded-lg bg-primary py-3 font-medium text-white hover:bg-primary/90 transition-colors"
      >
        Apply
      </button>
    </div>
  )
}
