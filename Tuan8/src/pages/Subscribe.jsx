import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ChevronRight, Check, CreditCard } from 'lucide-react'

const benefits = [
  '20,000+ recipes to suit all tastes and skill levels',
  'Filter for diets, cook times, and more',
  'Personal Recipe Box for favorites',
  'Gain exclusive access to our subscriber-only mobile app.',
]

const subscriptionFeatures = [
  {
    title: 'Cooking',
    description: 'Enjoy recipes, advice and inspiration for any occasion.',
  },
  {
    title: 'Wirecutter',
    description: 'Explore independent reviews for thousands of products.',
  },
  {
    title: 'Games',
    description: 'Unwind with Spelling Bee, Wordle, The Crossword',
  },
  {
    title: 'The Athletic',
    description: 'Discover in-depth, personalized sports journalism.',
  },
]

export default function Subscribe() {
  const [selectedPlan, setSelectedPlan] = useState('monthly')

  return (
    <div className="min-h-screen bg-background">
      <Header variant="logged-in" />

      <main className="mx-auto max-w-4xl px-4 py-8 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm">
          <Link to="/recipes" className="text-muted-foreground hover:text-foreground">
            Recipes
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="text-primary">Subscribe</span>
        </nav>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Benefits */}
          <div>
            <p className="mb-2 text-sm font-medium text-foreground">
              This recipe is exclusively available to subscribers
            </p>
            <h1 className="mb-6 text-3xl font-bold leading-tight text-primary">
              Join now to access effortless, hassle-free recipes
            </h1>

            <ul className="mb-8 space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="mb-6">
              <p className="text-2xl font-bold text-foreground">0.25USD / Week</p>
              <p className="text-sm text-muted-foreground">
                Billed as $1 every 4 weeks for the first year
              </p>
            </div>

            {/* CTA Button */}
            <button className="mb-4 flex w-full max-w-xs items-center justify-center gap-2 rounded-lg bg-primary py-3 font-medium text-white hover:bg-primary/90 transition-colors">
              <CreditCard className="h-5 w-5" />
              Subscribe Now
            </button>

            <p className="text-sm text-primary">Cancel or Pause anytime</p>
          </div>

          {/* Right Column - Image */}
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop"
              alt="Delicious recipes"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Subscription Features */}
        <div className="mt-16">
          <h2 className="mb-8 text-center text-2xl font-bold text-primary">
            An All Access subscription includes
          </h2>

          <div className="grid gap-4 md:grid-cols-4">
            {subscriptionFeatures.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-border p-6 text-center"
              >
                <h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chefify Cooking Only */}
        <div className="mt-16 text-center">
          {/* Logo */}
          <div className="mb-4 flex justify-center">
            <svg width="48" height="48" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 8C20 8 16 4 12 4C8 4 4 8 4 12C4 16 8 20 12 20H28C32 20 36 16 36 12C36 8 32 4 28 4C24 4 20 8 20 8Z" fill="#F25F9B"/>
              <path d="M12 20V32C12 34 14 36 16 36H24C26 36 28 34 28 32V20" stroke="#F25F9B" strokeWidth="2"/>
              <path d="M16 24H24" stroke="#F25F9B" strokeWidth="2"/>
              <path d="M16 28H24" stroke="#F25F9B" strokeWidth="2"/>
            </svg>
          </div>
          <span className="text-xl font-bold text-primary">Chefify</span>

          <h2 className="mt-4 text-2xl font-bold text-primary">
            Subscribe to Chefify Cooking only
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            Enjoy thousands of delicious recipes for every taste, plus advice and inspiration daily.
          </p>

          {/* Plan Selection */}
          <div className="mx-auto mt-8 max-w-md space-y-3">
            <label
              className={`flex cursor-pointer items-center justify-between rounded-lg border p-4 transition-colors ${
                selectedPlan === 'monthly'
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="plan"
                  value="monthly"
                  checked={selectedPlan === 'monthly'}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="h-4 w-4 text-primary focus:ring-primary"
                />
                <span className="text-foreground">$2/month (Billed every 4 weeks)</span>
              </div>
            </label>

            <label
              className={`flex cursor-pointer items-center justify-between rounded-lg border p-4 transition-colors ${
                selectedPlan === 'yearly'
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="plan"
                  value="yearly"
                  checked={selectedPlan === 'yearly'}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="h-4 w-4 text-primary focus:ring-primary"
                />
                <span className="text-foreground">$20/year (Billed one annually)</span>
              </div>
            </label>
          </div>

          {/* Subscribe Button */}
          <button className="mx-auto mt-6 flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 font-medium text-white hover:bg-primary/90 transition-colors">
            <CreditCard className="h-5 w-5" />
            Subscribe Now
          </button>

          <p className="mt-4 text-sm text-primary">Cancel or Pause anytime</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
