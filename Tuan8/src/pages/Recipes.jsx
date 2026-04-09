import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RecipeFilters from '../components/recipes/RecipeFilters'
import RecipeGrid from '../components/recipes/RecipeGrid'
import Pagination from '../components/Pagination'
import { ChevronDown } from 'lucide-react'

const allRecipes = [
  {
    id: 'cucumber-salad',
    title: 'Cucumber salad, cherry tomatoes',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=400&fit=crop',
    time: '32 minutes',
  },
  {
    id: 'italian-tomato-salad',
    title: 'Italian-style tomato salad',
    image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=400&h=400&fit=crop',
    time: '32 minutes',
  },
  {
    id: 'potato-salad',
    title: 'Potato Salad',
    image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400&h=400&fit=crop',
    time: '32 minutes',
  },
  {
    id: 'cabbage-shrimp-salad',
    title: 'Salad with cabbage and shrimp',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop',
    time: '32 minutes',
  },
  {
    id: 'five-color-salad',
    title: 'Five-color salad',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
    time: '32 minutes',
  },
  {
    id: 'corn-salad',
    title: 'Corn Salad',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop',
    time: '32 minutes',
  },
  {
    id: 'cabbage-shrimp-2',
    title: 'Salad with cabbage and shrimp',
    image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=400&h=400&fit=crop',
    time: '32 minutes',
  },
  {
    id: 'lotus-delight-salad',
    title: 'Lotus delight salad',
    image: 'https://images.unsplash.com/photo-1547496502-affa22d38842?w=400&h=400&fit=crop',
    time: '32 minutes',
  },
  {
    id: 'avocado-salad',
    title: 'Avocado Salad',
    image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?w=400&h=400&fit=crop',
    time: '32 minutes',
  },
]

export default function Recipes() {
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState('A-Z')
  const [filters, setFilters] = useState({
    types: [],
    timeRange: [30, 50],
    ratings: [],
  })

  return (
    <div className="min-h-screen bg-background">
      <Header variant="logged-in" />

      <main className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <RecipeFilters filters={filters} onFiltersChange={setFilters} />
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-2xl font-bold text-foreground">
                Salad <span className="text-muted-foreground">(32)</span>
              </h1>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none rounded-lg border border-border bg-white px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="A-Z">A-Z</option>
                  <option value="Z-A">Z-A</option>
                  <option value="newest">Newest</option>
                  <option value="popular">Most Popular</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* Recipe Grid */}
            <RecipeGrid recipes={allRecipes} />

            {/* Pagination */}
            <div className="mt-8">
              <Pagination
                currentPage={currentPage}
                totalPages={11}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
