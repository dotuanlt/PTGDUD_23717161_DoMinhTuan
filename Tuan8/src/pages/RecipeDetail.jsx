import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecipeCard from "../components/RecipeCard";
import {
  ChevronRight,
  Star,
  Clock,
  FileText,
  ThumbsUp,
  Reply,
  MoreHorizontal,
} from "lucide-react";

const recipeData = {
  title: "How to make a Strawberry Shortcake",
  description:
    "It seems that there may be a misunderstanding. If you're asking how a user can make a Strawberry Shortcake, the process would be starting from the recipe preparation. It involves preparing the strawberries, making the shortcakes, preparing whipped cream, and finally assembling the shortcake.",
  author: {
    name: "Emma Gonzalez",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  time: "45 minutes",
  notes: 352,
  rating: 4.5,
  heroImage:
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&h=600&fit=crop",
  ingredients: [
    "Yield: 4 generous servings",
    "2 pints ripe, well-rinsed strawberries",
    "1/2 cup sugar, or more to taste",
    "4 cups flour",
    "3 tablespoons sugar",
    "1/4 teaspoon salt",
    "5 teaspoons baking powder",
    "1 1/4 cups butter",
    "3 cups whipping cream",
    "1/2 teaspoon vanilla extract",
  ],
  steps: [
    {
      number: 1,
      text: "Rinse and hull strawberries. Cut in half or slice, depending on size. Gently crush about a quarter of the berries with a fork to release their juices. Mix with remaining berries and the 1/2 cup of sugar, adding more sugar if necessary. Set aside, covered, for about half an hour to develop flavor.",
      image:
        "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600&h=400&fit=crop",
    },
    {
      number: 2,
      text: "Preheat oven to 450 degrees.",
      image: null,
    },
    {
      number: 3,
      text: "Into a large mixing bowl, sift together flour, 3 tablespoons sugar, salt and baking powder. Add 3/4 cup of the butter, and cut into dry ingredients as for pastry. Add 1 1/2 cups cream, and mix to a soft dough. Knead the dough for one minute on a lightly floured pastry board, then roll out to about 1/2-inch thickness. Using a 3-inch biscuit cutter, cut an even number of rounds - 2 rounds per serving.",
      image:
        "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=400&fit=crop",
    },
    {
      number: 4,
      text: "Use a little of the butter to grease a baking sheet. Place half the rounds on it. Melt remaining butter and brush a little on the rounds, place remaining rounds on top. Bake for 10 to 15 minutes, or until golden brown.",
      image: null,
    },
    {
      number: 5,
      text: "Use a little of the butter to grease a baking sheet. Place half the rounds on it. Melt remaining butter and brush a little on the rounds, place remaining rounds on top. Bake for 10 to 15 minutes, or until golden brown.",
      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop",
    },
    {
      number: 6,
      text: "Beat remaining cream until it thickens. Add vanilla. Beat again until thick.",
      image: null,
    },
  ],
};

const comments = [
  {
    id: 1,
    author: "Jimmy Will",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    time: "08:11 AM",
    text: "Lorem consectetur dolor adipi sit ulla ut laborie dolor anim et exer nullo dolore labori volu aliq ua qui esse anim. Non cupidat at sunt duo irul.",
    likes: 0,
    replies: [],
  },
  {
    id: 2,
    author: "Alice Doll",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    time: "08:12 AM",
    text: "Culpa anim pariatur deserunt reprehender fugiat incidunt exercitaion dolore et officia offic dul Lorem unt et ait do eu sed tempo. Tempo consectetur qui laboris nulla aliq at labore tempo culpa est deserunt reprehende.",
    likes: 5,
    replies: [],
    images: [
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=200&h=200&fit=crop",
    ],
  },
  {
    id: 3,
    author: "Chris Nelson",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    time: "09:42 AM",
    text: "Labore ex est anim minim officia anim consequat cilum deserunt panita...",
    likes: 0,
    replies: [],
  },
  {
    id: 4,
    author: "Emma Gonzalez",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    time: "08:15 AM",
    text: "Deserunt minim inculpetur cilum mollit ab volupta excepteur minima enim ad abonum laboru. Milit commodo in do dolor ut in milit ed",
    likes: 0,
    replies: [],
    isAuthor: true,
  },
];

const recentlyViewed = [
  {
    id: "cabbage-shrimp",
    title: "Salad with cabbage and shrimp",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop",
    time: "32 minutes",
  },
  {
    id: "cove-beans",
    title: "Salad of cove beans, shrimp and potatoes",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop",
    time: "20 minutes",
  },
  {
    id: "sunny-eggs",
    title: "Sunny-side up fried eggs",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=400&fit=crop",
    time: "18 minutes",
  },
  {
    id: "lotus-delight",
    title: "Lotus delight salad",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
    time: "20 minutes",
  },
];

export default function RecipeDetail() {
  const [activeTab, setActiveTab] = useState("all");
  const [cookingNote, setCookingNote] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Header variant="logged-in" />

      <main className="mx-auto max-w-4xl px-4 py-8 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="text-primary">Cooking guide</span>
        </nav>

        {/* Title */}
        <h1 className="mb-6 text-2xl font-bold text-foreground lg:text-3xl">
          {recipeData.title}
        </h1>

        {/* Description */}
        <p className="mb-6 text-muted-foreground leading-relaxed">
          {recipeData.description}
        </p>

        {/* Author & Stats */}
        <div className="mb-8 flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <img
              src={recipeData.author.avatar}
              alt={recipeData.author.name}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-foreground">
                {recipeData.author.name}
              </p>
              <button className="text-sm text-primary hover:text-primary/80">
                + Follow
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>Time</span>
              <span className="font-medium text-foreground">
                {recipeData.time}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <FileText className="h-4 w-4" />
              <span>Notes</span>
              <span className="font-medium text-foreground">
                {recipeData.notes} community notes
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span>Rating</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= Math.floor(recipeData.rating)
                        ? "fill-amber-400 text-amber-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Ingredients */}
          <div className="lg:col-span-1">
            <div className="rounded-xl border border-border p-6">
              <h2 className="mb-4 font-semibold text-foreground">
                Ingredients
              </h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {recipeData.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-foreground">-</span>
                    {ingredient}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-lg bg-primary py-3 text-sm font-medium text-white hover:bg-primary/90 transition-colors">
                + Add to Your Grocery List
              </button>
            </div>
          </div>

          {/* Steps */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="mb-8 overflow-hidden rounded-xl">
              <img
                src={recipeData.heroImage}
                alt={recipeData.title}
                className="w-full object-cover"
              />
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {recipeData.steps.map((step) => (
                <div key={step.number}>
                  <h3 className="mb-3 font-semibold text-foreground">
                    Step {step.number}
                  </h3>
                  <p className="mb-4 text-muted-foreground leading-relaxed">
                    {step.text}
                  </p>
                  {step.image && (
                    <div className="overflow-hidden rounded-xl">
                      <img
                        src={step.image}
                        alt={`Step ${step.number}`}
                        className="w-full object-cover"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cooking Notes Section */}
        <div className="mt-12">
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            Cooking note
          </h2>

          <div className="mb-6 rounded-xl border border-border p-4">
            <textarea
              value={cookingNote}
              onChange={(e) => setCookingNote(e.target.value)}
              placeholder="Make your opinion about this recipe"
              className="min-h-24 w-full resize-none bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <div className="flex justify-end">
              <button className="rounded-lg bg-primary px-6 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors">
                Send
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-6 flex gap-6 border-b border-border">
            {[
              { id: "all", label: "All Notes (32)" },
              { id: "about", label: "About recipe (20)" },
              { id: "private", label: "Private (2)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`border-b-2 pb-3 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Comments */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-4">
                <img
                  src={comment.avatar}
                  alt={comment.author}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">
                      {comment.author}
                    </span>
                    {comment.isAuthor && (
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                        Author
                      </span>
                    )}
                    <span className="text-sm text-muted-foreground">
                      {comment.time}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {comment.text}
                  </p>

                  {comment.images && (
                    <div className="mt-3 flex gap-2">
                      {comment.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt="Comment attachment"
                          className="h-20 w-20 rounded-lg object-cover"
                        />
                      ))}
                    </div>
                  )}

                  <div className="mt-2 flex items-center gap-4">
                    <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                      <ThumbsUp className="h-4 w-4" />
                      {comment.likes > 0 && comment.likes}
                    </button>
                    <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                      <Reply className="h-4 w-4" />
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-6 w-full text-center text-sm text-primary hover:text-primary/80">
            Show more discussion (47)
          </button>
        </div>

        {/* Recently Viewed */}
        <div className="mt-12">
          <h2 className="mb-6 text-xl font-semibold text-foreground">
            Your Recently Viewed
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {recentlyViewed.map((recipe) => (
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
      </main>

      <Footer />
    </div>
  );
}
