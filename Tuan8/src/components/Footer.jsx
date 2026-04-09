import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#2d3436] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Us */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">About Us</h3>
            <p className="mb-4 text-sm text-gray-300">
              Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md bg-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors">
                Send
              </button>
            </div>
          </div>

          {/* Learn More */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Learn More</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/cooks" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Our Cooks
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-sm text-gray-300 hover:text-white transition-colors">
                  See Our Features
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>

            <h3 className="mb-4 mt-8 text-sm font-semibold">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/gift-subscription" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Gift Subscription
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Send Us Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Recipes */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Recipes</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/recipes/weekly" className="text-sm text-gray-300 hover:text-white transition-colors">
                  What to Cook This Week
                </Link>
              </li>
              <li>
                <Link to="/recipes/pasta" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Pasta
                </Link>
              </li>
              <li>
                <Link to="/recipes/dinner" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Dinner
                </Link>
              </li>
              <li>
                <Link to="/recipes/healthy" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Healthy
                </Link>
              </li>
              <li>
                <Link to="/recipes/vegetarian" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Vegetarian
                </Link>
              </li>
              <li>
                <Link to="/recipes/vegan" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Vegan
                </Link>
              </li>
              <li>
                <Link to="/recipes/christmas" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Christmas
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-600 pt-8 md:flex-row">
          <div className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 8C20 8 16 4 12 4C8 4 4 8 4 12C4 16 8 20 12 20H28C32 20 36 16 36 12C36 8 32 4 28 4C24 4 20 8 20 8Z" fill="#F25F9B"/>
              <path d="M12 20V32C12 34 14 36 16 36H24C26 36 28 34 28 32V20" stroke="#F25F9B" strokeWidth="2"/>
              <path d="M16 24H24" stroke="#F25F9B" strokeWidth="2"/>
              <path d="M16 28H24" stroke="#F25F9B" strokeWidth="2"/>
            </svg>
            <span className="text-lg font-bold text-primary">Chefify</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>2023 Chefify Company</span>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
