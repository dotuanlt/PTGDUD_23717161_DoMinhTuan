import RecipeCard from '@/components/RecipeCard'

export default function RecipeGrid({ recipes }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          image={recipe.image}
          time={recipe.time}
        />
      ))}
    </div>
  )
}
