import RecipeCard from '@/components/RecipeCard'

const editorsPicks = [
  {
    id: 'sticky-rice-ball',
    title: 'Stuffed sticky rice ball',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=400&fit=crop',
    time: '34 minutes',
    author: 'Jennifer King',
    authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    description: 'Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling.',
  },
  {
    id: 'strawberry-smoothie',
    title: 'Strawberry smoothie',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop',
    time: '40 minutes',
    author: 'Matthew Martinez',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    description: 'Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...',
  },
  {
    id: 'latte-art',
    title: 'Latte Art',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&h=400&fit=crop',
    time: '19 minutes',
    author: 'Sarah Hill',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    description: 'Latte art is the skillful craft of creating captivating designs on the surface of a latte...',
  },
  {
    id: 'butter-fried-noodles',
    title: 'Butter fried noodles',
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=400&fit=crop',
    time: '16 minutes',
    author: 'Julia Lopez',
    authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
    description: 'Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal.',
  },
]

export default function EditorsPick() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-primary lg:text-3xl">{"Editor's pick"}</h2>
          <p className="mt-2 text-muted-foreground">
            Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {editorsPicks.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
              time={recipe.time}
              author={recipe.author}
              authorAvatar={recipe.authorAvatar}
              description={recipe.description}
              variant="editors-pick"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
