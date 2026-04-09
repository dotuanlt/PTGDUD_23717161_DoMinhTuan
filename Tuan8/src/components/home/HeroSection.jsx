import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop"
          alt="Chef cooking"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Recipe Card Overlay */}
      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 lg:px-8">
        <div className="w-full max-w-sm rounded-xl bg-white/95 p-6 shadow-xl backdrop-blur-sm">
          {/* Badge */}
          <div className="mb-4 inline-block rounded-full border-2 border-dashed border-amber-400 px-4 py-1">
            <span className="text-xs font-medium text-amber-600">
              Recipe of the day
            </span>
          </div>

          {/* Recipe Title */}
          <h2 className="mb-3 text-xl font-bold text-primary">Salad Caprese</h2>

          {/* Description */}
          <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
            Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella,
            herbs, olive oil, and balsamic vinegar create a refreshing dish for
            lunch or appetizer.
          </p>

          {/* Author */}
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4C12 4 10 2 8 2C6 2 4 4 4 6C4 8 6 10 8 10H16C18 10 20 8 20 6C20 4 18 2 16 2C14 2 12 4 12 4Z"
                  fill="#F25F9B"
                />
                <path
                  d="M8 10V18C8 19 9 20 10 20H14C15 20 16 19 16 18V10"
                  stroke="#F25F9B"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="text-sm font-medium text-foreground">
              Salad Caprese
            </span>
          </div>

          {/* CTA Button */}
          <Link
            to="/recipe/salad-caprese"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
          >
            View now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
