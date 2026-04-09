import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecipeCard from "../components/RecipeCard";
import Pagination from "../components/Pagination";
import { ChevronRight, Share2 } from "lucide-react";

const userData = {
  name: "Emma Gonzalez",
  avatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  bio: "Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.",
  subscribers: "6.5k",
};

const savedRecipes = [
  {
    id: "italian-tomato-salad",
    title: "Italian-style tomato salad",
    image:
      "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=400&h=400&fit=crop",
    time: "14 minutes",
  },
  {
    id: "vegetable-shrimp-spaghetti",
    title: "Vegetable and shrimp spaghetti",
    image:
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=400&fit=crop",
    time: "15 minutes",
  },
  {
    id: "lotus-delight",
    title: "Lotus delight salad",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
    time: "20 minutes",
  },
  {
    id: "snack-cakes",
    title: "Snack cakes",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop",
    time: "21 minutes",
  },
  {
    id: "cabbage-shrimp-salad",
    title: "Salad with cabbage and shrimp",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop",
    time: "32 minutes",
  },
  {
    id: "bean-shrimp-potato",
    title: "Bean, shrimp, and potato salad",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop",
    time: "32 minutes",
  },
  {
    id: "sunny-side-eggs",
    title: "Sunny-side up fried eggs",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=400&fit=crop",
    time: "32 minutes",
  },
  {
    id: "lotus-salad-2",
    title: "Lotus delight salad",
    image:
      "https://images.unsplash.com/photo-1547496502-affa22d38842?w=400&h=400&fit=crop",
    time: "32 minutes",
    isBookmarked: true,
  },
];

const tabs = [
  { id: "saved", label: "Saved Recipes" },
  { id: "folders", label: "Folders" },
  { id: "by-author", label: "Recipes by Genevieve" },
];

export default function RecipeBox() {
  const [activeTab, setActiveTab] = useState("saved");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen bg-background">
      <Header variant="logged-in" />

      <main className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="text-primary">Your Recipe Box</span>
        </nav>

        {/* Page Title */}
        <h1 className="mb-8 text-2xl font-bold text-foreground lg:text-3xl">
          {userData.name}&apos;s Recipe Box
        </h1>

        {/* User Profile Section */}
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-start">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="h-36 w-36 overflow-hidden rounded-full border-4 border-amber-200 bg-amber-100">
              <img
                src={userData.avatar}
                alt={userData.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Bio & Stats */}
          <div className="flex-1">
            <p className="mb-4 text-muted-foreground leading-relaxed">
              {userData.bio}
            </p>
            <div className="flex items-center gap-4">
              <span className="text-primary font-medium">
                {userData.subscribers} Subscribes
              </span>
              <button className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors">
                Share
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8 border-b border-border">
          <div className="flex gap-6">
            {tabs.map((tab) => (
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
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {savedRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
              time={recipe.time}
              isBookmarked={recipe.isBookmarked}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8">
          <Pagination
            currentPage={currentPage}
            totalPages={11}
            onPageChange={setCurrentPage}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
