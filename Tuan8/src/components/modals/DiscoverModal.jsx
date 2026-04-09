'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
    title: 'Discover Chefify',
    description: 'Easy and delicious cooking instructions right here. Start exploring now!',
  },
  {
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=600&fit=crop',
    title: 'Thousands of Recipes',
    description: 'Find recipes for every taste, diet, and occasion.',
  },
  {
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop',
    title: 'Save Your Favorites',
    description: 'Create your personal recipe box and never lose a recipe again.',
  },
]

export default function DiscoverModal({ onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full p-2 text-muted-foreground hover:bg-secondary transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="p-8 text-center">
          {/* Title */}
          <h2 className="mb-2 text-3xl font-bold text-primary">
            {slides[currentSlide].title}
          </h2>
          <p className="mb-6 text-muted-foreground">
            {slides[currentSlide].description}
          </p>

          {/* Image */}
          <div className="mb-6 overflow-hidden rounded-xl">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="h-80 w-full object-cover"
            />
          </div>

          {/* Dots */}
          <div className="mb-6 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary' : 'bg-border'
                }`}
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleNext}
              className="w-full rounded-full bg-primary py-3 font-medium text-white hover:bg-primary/90 transition-colors"
            >
              {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
            </button>
            <button
              onClick={onClose}
              className="w-full py-3 font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
