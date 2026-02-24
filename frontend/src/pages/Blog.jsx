import SEO from '../components/SEO'
import { Link } from 'react-router-dom'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Complete Guide to Online Cricket Betting in 2026',
      excerpt: 'Learn everything about cricket betting, from basics to advanced strategies. Discover how to get started safely and responsibly.',
      date: 'February 20, 2026',
      category: 'Cricket Betting',
      slug: 'cricket-betting-guide-2026'
    },
    {
      id: 2,
      title: 'Top 10 Casino Games for Beginners',
      excerpt: 'Explore the best casino games to start with. From slots to table games, find what suits your style and budget.',
      date: 'February 18, 2026',
      category: 'Casino Games',
      slug: 'top-casino-games-beginners'
    },
    {
      id: 3,
      title: 'How to Choose a Reliable Gaming Platform',
      excerpt: 'Essential tips for selecting a trustworthy online gaming platform. Security, payment options, and customer support explained.',
      date: 'February 15, 2026',
      category: 'Gaming Tips',
      slug: 'choose-reliable-gaming-platform'
    },
    {
      id: 4,
      title: 'Understanding Betting Odds and Probabilities',
      excerpt: 'Master the mathematics behind betting odds. Learn how to calculate potential returns and make informed decisions.',
      date: 'February 12, 2026',
      category: 'Betting Strategy',
      slug: 'understanding-betting-odds'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-secondary py-16">
      <SEO 
        title="Gaming Blog - Tips, Guides & Strategies | GameZone"
        description="Read expert articles on cricket betting, casino games, and gaming strategies. Stay updated with latest trends and tips from GameZone."
        keywords="gaming blog, betting tips, cricket betting guide, casino strategies, gaming news"
        url="https://gamezone.com/blog"
      />

      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white text-center mb-4">
          Gaming <span className="text-highlight">Blog</span>
        </h1>
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
          Expert insights, tips, and guides to enhance your gaming experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-highlight/50 transition-all duration-300">
              <div className="p-6">
                <span className="text-highlight text-sm font-semibold">{post.category}</span>
                <h2 className="text-2xl font-bold text-white mt-2 mb-3">{post.title}</h2>
                <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-xs">{post.date}</span>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-highlight hover:text-orange-600 font-semibold text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
