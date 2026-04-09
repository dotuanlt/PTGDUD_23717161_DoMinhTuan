import { Link } from "react-router-dom";

const suggestions = [
  "Sweet Cake",
  "Black Cake",
  "Pozole Verde",
  "Healthy food",
];

export default function NoResults({ searchQuery }) {
  return (
    <div className="flex flex-col items-center py-12 text-center">
      {/* Illustration */}
      <div className="mb-6 h-48 w-48">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Box */}
          <path
            d="M50 100L100 130L150 100L100 70L50 100Z"
            fill="#E8F4FD"
            stroke="#F25F9B"
            strokeWidth="2"
          />
          <path
            d="M50 100V140L100 170V130L50 100Z"
            fill="#E8F4FD"
            stroke="#F25F9B"
            strokeWidth="2"
          />
          <path
            d="M150 100V140L100 170V130L150 100Z"
            fill="#D1E9FC"
            stroke="#F25F9B"
            strokeWidth="2"
          />

          {/* Magnifying glass with X */}
          <circle
            cx="100"
            cy="65"
            r="25"
            fill="white"
            stroke="#F25F9B"
            strokeWidth="3"
          />
          <line
            x1="118"
            y1="83"
            x2="135"
            y2="100"
            stroke="#F25F9B"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="90"
            y1="55"
            x2="110"
            y2="75"
            stroke="#F25F9B"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="110"
            y1="55"
            x2="90"
            y2="75"
            stroke="#F25F9B"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Title */}
      <h2 className="mb-4 text-2xl font-bold text-foreground">
        Sorry, no results were found for {'"'}
        {searchQuery}
        {'"'}
      </h2>

      {/* Subtitle */}
      <p className="mb-6 text-muted-foreground">
        We have all your Independence Day sweets covered.
      </p>

      {/* Suggestions */}
      <div className="flex flex-wrap justify-center gap-2">
        {suggestions.map((suggestion) => (
          <Link
            key={suggestion}
            to={`/recipes?q=${encodeURIComponent(suggestion)}`}
            className="rounded-full border border-primary px-4 py-2 text-sm text-primary hover:bg-primary/5 transition-colors"
          >
            {suggestion}
          </Link>
        ))}
      </div>
    </div>
  );
}
