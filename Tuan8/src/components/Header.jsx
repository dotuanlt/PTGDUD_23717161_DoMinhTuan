import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";

export default function Header({
  variant = "default",
  onLoginClick,
  onSubscribeClick,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isLoggedIn = variant === "logged-in";

  const navLinks = [
    { label: "What to cook", href: "/recipes" },
    { label: "Recipes", href: "/recipes" },
    { label: "Ingredients", href: "/ingredients" },
    { label: "Occasions", href: "/occasions" },
    { label: "About Us", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 8C20 8 16 4 12 4C8 4 4 8 4 12C4 16 8 20 12 20H28C32 20 36 16 36 12C36 8 32 4 28 4C24 4 20 8 20 8Z"
                fill="#F25F9B"
              />
              <path
                d="M12 20V32C12 34 14 36 16 36H24C26 36 28 34 28 32V20"
                stroke="#F25F9B"
                strokeWidth="2"
              />
              <path d="M16 24H24" stroke="#F25F9B" strokeWidth="2" />
              <path d="M16 28H24" stroke="#F25F9B" strokeWidth="2" />
            </svg>
          </div>
          <span className="text-xl font-bold text-primary">Chefify</span>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="What would you like to cook?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-border bg-secondary py-2 pl-10 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons / User Menu */}
        <div className="flex items-center gap-3 ml-6">
          {isLoggedIn ? (
            <>
              <Link
                to="/recipe-box"
                className="hidden sm:flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5 transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="3"
                    width="12"
                    height="10"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path d="M5 6H11" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M5 9H9" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                Your Recipe Box
              </Link>
              <Link to="/profile">
                <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                    alt="User avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={onLoginClick}
                className="hidden sm:block text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Login
              </button>
              <button
                onClick={onSubscribeClick}
                className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="px-4 py-4">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="What would you like to cook?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-border bg-secondary py-2 pl-10 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
