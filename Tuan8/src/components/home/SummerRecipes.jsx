import RecipeCard from '@/components/RecipeCard'

const summerRecipes = [
  {
    id: 'italian-tomato',
    title: 'Italian-style tomato',
    image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=400&h=400&fit=crop',
    time: '14 minutes',
  },
  {
    id: 'spaghetti-vegetables',
    title: 'Spaghetti with vegetables and shrimp',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=400&fit=crop',
    time: '15 minutes',
  },
  {
    id: 'lotus-salad',
    title: 'Lotus delight salad',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
    time: '20 minutes',
  },
  {
    id: 'snack-cakes',
    title: 'Snack cakes',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop',
    time: '21 minutes',
  },
]

export default function SummerRecipes() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-primary lg:text-3xl">This Summer Recipes</h2>
          <p className="mt-2 text-muted-foreground">
            We have all your Independence Day sweets covered.
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {summerRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
              time={recipe.time}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
