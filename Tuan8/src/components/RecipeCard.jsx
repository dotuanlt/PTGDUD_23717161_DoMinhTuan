import { useState } from "react";
import { Link } from "react-router-dom";
import { Bookmark } from "lucide-react";

export default function RecipeCard({
  id,
  title,
  image,
  time,
  isBookmarked = false,
  variant = "default",
  author,
  authorAvatar,
  description,
}) {
  const [bookmarked, setBookmarked] = useState(isBookmarked);

  const handleBookmark = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setBookmarked(!bookmarked);
  };

  // Default variant - simple card with image, title, time
  if (variant === "default") {
    return (
      <Link to={`/recipe/${id}`} className="group block">
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={image}
            alt={title}
            className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="mt-3 flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </h3>
            <p className="mt-1 text-sm text-primary">{time}</p>
          </div>
          <button
            onClick={handleBookmark}
            className="mt-1 flex-shrink-0 rounded-md p-1 hover:bg-secondary transition-colors"
          >
            <Bookmark
              className={`h-5 w-5 ${bookmarked ? "fill-primary text-primary" : "text-muted-foreground"}`}
            />
          </button>
        </div>
      </Link>
    );
  }

  // Editor's pick variant - larger card with author and description
  if (variant === "editors-pick") {
    return (
      <Link to={`/recipe/${id}`} className="group block">
        <div className="flex gap-4 rounded-xl border border-border p-4 hover:border-primary/30 transition-colors">
          <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
              <button
                onClick={handleBookmark}
                className="flex-shrink-0 rounded-md p-1 hover:bg-secondary transition-colors"
              >
                <Bookmark
                  className={`h-5 w-5 ${bookmarked ? "fill-primary text-primary" : "text-muted-foreground"}`}
                />
              </button>
            </div>
            <p className="text-sm text-primary">{time}</p>
            {author && (
              <div className="mt-2 flex items-center gap-2">
                {authorAvatar && (
                  <img
                    src={authorAvatar}
                    alt={author}
                    className="h-6 w-6 rounded-full object-cover"
                  />
                )}
                <span className="text-sm text-muted-foreground">{author}</span>
              </div>
            )}
            {description && (
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                {description}
              </p>
            )}
          </div>
        </div>
      </Link>
    );
  }

  return null;
}
