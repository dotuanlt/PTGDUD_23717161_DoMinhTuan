import RecipeCard from '@/components/RecipeCard'

const videoRecipes = [
  {
    id: 'cabbage-shrimp',
    title: 'Salad with cabbage and shrimp',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop',
    time: '32 minutes',
  },
  {
    id: 'cove-beans',
    title: 'Salad of cove beans, shrimp and potatoes',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop',
    time: '20 minutes',
  },
  {
    id: 'sunny-eggs',
    title: 'Sunny-side up fried eggs',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=400&fit=crop',
    time: '18 minutes',
  },
  {
    id: 'lotus-delight',
    title: 'Lotus delight salad',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
    time: '20 minutes',
  },
]

export default function RecipesWithVideos() {
  return (
    <section className="bg-secondary/50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-primary lg:text-3xl">Recipes With Videos</h2>
          <p className="mt-2 text-muted-foreground">
            Cooking Up Culinary Creations with Step-by-Step Videos
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {videoRecipes.map((recipe) => (
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
