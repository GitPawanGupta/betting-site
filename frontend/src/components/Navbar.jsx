import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const { user, logout } = useContext(AuthContext)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cricketIdOpen, setCricketIdOpen] = useState(false)
  const [idProviderOpen, setIdProviderOpen] = useState(false)
  const [aboutUsOpen, setAboutUsOpen] = useState(false)

  return (
    <nav className="bg-primary/95 backdrop-blur-md shadow-lg border-b border-purple-800/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://www.swamiji.club/wp-content/uploads/al_opt_content/IMAGE/www.swamiji.club/wp-content/uploads/2025/05/download-2025-05-25T154726.066-1024x581.webp.bv.webp?bv_host=www.swamiji.club" 
                alt="Swamiji Logo" 
                className="h-14 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextElementSibling.style.display = 'flex'
                }}
              />
              <div className="w-12 h-12 bg-gradient-to-br from-highlight to-orange-600 rounded-lg items-center justify-center hidden">
                <span className="text-2xl">🎮</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link to="/" className="text-white hover:text-highlight transition px-4 py-2 font-medium">
              Home
            </Link>

            {/* Cricket ID Dropdown */}
            <div className="relative group">
              <button 
                className="text-white hover:text-highlight transition px-4 py-2 font-medium flex items-center"
                onMouseEnter={() => setCricketIdOpen(true)}
                onMouseLeave={() => setCricketIdOpen(false)}
              >
                Cricket ID
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {cricketIdOpen && (
                <div 
                  className="absolute left-0 mt-0 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-xl py-2"
                  onMouseEnter={() => setCricketIdOpen(true)}
                  onMouseLeave={() => setCricketIdOpen(false)}
                >
                  <Link to="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-highlight transition">
                    Online Cricket Betting ID
                  </Link>
                  <Link to="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-highlight transition">
                    Casino Betting ID
                  </Link>
                  <Link to="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-highlight transition">
                    Cricket Betting Master ID
                  </Link>
                  <Link to="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-highlight transition">
                    IPL Betting ID
                  </Link>
                  <Link to="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-highlight transition">
                    Online Betting ID
                  </Link>
                </div>
              )}
            </div>

            {/* ID Provider Dropdown */}
            <div className="relative group">
              <button 
                className="text-white hover:text-highlight transition px-4 py-2 font-medium flex items-center"
                onMouseEnter={() => setIdProviderOpen(true)}
                onMouseLeave={() => setIdProviderOpen(false)}
              >
                ID Provider
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {idProviderOpen && (
                <div 
                  className="absolute left-0 mt-0 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-xl py-2"
                  onMouseEnter={() => setIdProviderOpen(true)}
                  onMouseLeave={() => setIdProviderOpen(false)}
                >
                  <Link to="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-highlight transition">
                    New Cricket ID Provider in India
                  </Link>
                </div>
              )}
            </div>

            {/* About Us Dropdown */}
            <div className="relative group">
              <button 
                className="text-white hover:text-highlight transition px-4 py-2 font-medium flex items-center"
                onMouseEnter={() => setAboutUsOpen(true)}
                onMouseLeave={() => setAboutUsOpen(false)}
              >
                About Us
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {aboutUsOpen && (
                <div 
                  className="absolute left-0 mt-0 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-xl py-2"
                  onMouseEnter={() => setAboutUsOpen(true)}
                  onMouseLeave={() => setAboutUsOpen(false)}
                >
                  <Link to="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-highlight transition">
                    How it Works
                  </Link>
                  <Link to="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-highlight transition">
                    Why Swamiji
                  </Link>
                </div>
              )}
            </div>

            <Link to="#" className="text-white hover:text-highlight transition px-4 py-2 font-medium">
              Blog
            </Link>
            <Link to="#" className="text-white hover:text-highlight transition px-4 py-2 font-medium">
              Contact Us
            </Link>

            {/* User Menu */}
            {user ? (
              <>
                <Link to="/dashboard" className="text-white hover:text-highlight transition px-4 py-2 font-medium">
                  Dashboard
                </Link>
                {user.isAdmin && (
                  <Link to="/admin" className="text-white hover:text-highlight transition px-4 py-2 font-medium">
                    Admin
                  </Link>
                )}
                <button onClick={logout} className="bg-highlight text-white px-6 py-2 rounded-full hover:bg-orange-600 transition font-semibold ml-2">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-white hover:text-highlight transition px-4 py-2 font-medium">
                  Login
                </Link>
                <Link to="/register" className="bg-highlight text-white px-6 py-2 rounded-full hover:bg-orange-600 transition font-semibold ml-2">
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-white p-2"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-secondary/95 backdrop-blur-md border-t border-purple-800/30">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link to="/" className="block text-white hover:bg-accent px-3 py-2 rounded font-medium">
              Home
            </Link>
            
            <details className="group">
              <summary className="text-white hover:bg-accent px-3 py-2 rounded cursor-pointer font-medium list-none flex justify-between items-center">
                Cricket ID
                <svg className="w-4 h-4 group-open:rotate-180 transition" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="pl-4 space-y-1 mt-1">
                <Link to="#" className="block text-gray-300 hover:bg-accent px-3 py-2 rounded text-sm">
                  Online Cricket Betting ID
                </Link>
                <Link to="#" className="block text-gray-300 hover:bg-accent px-3 py-2 rounded text-sm">
                  Casino Betting ID
                </Link>
                <Link to="#" className="block text-gray-300 hover:bg-accent px-3 py-2 rounded text-sm">
                  Cricket Betting Master ID
                </Link>
                <Link to="#" className="block text-gray-300 hover:bg-accent px-3 py-2 rounded text-sm">
                  IPL Betting ID
                </Link>
                <Link to="#" className="block text-gray-300 hover:bg-accent px-3 py-2 rounded text-sm">
                  Online Betting ID
                </Link>
              </div>
            </details>

            <details className="group">
              <summary className="text-white hover:bg-accent px-3 py-2 rounded cursor-pointer font-medium list-none flex justify-between items-center">
                ID Provider
                <svg className="w-4 h-4 group-open:rotate-180 transition" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="pl-4 space-y-1 mt-1">
                <Link to="#" className="block text-gray-300 hover:bg-accent px-3 py-2 rounded text-sm">
                  New Cricket ID Provider in India
                </Link>
              </div>
            </details>

            <details className="group">
              <summary className="text-white hover:bg-accent px-3 py-2 rounded cursor-pointer font-medium list-none flex justify-between items-center">
                About Us
                <svg className="w-4 h-4 group-open:rotate-180 transition" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="pl-4 space-y-1 mt-1">
                <Link to="#" className="block text-gray-300 hover:bg-accent px-3 py-2 rounded text-sm">
                  How it Works
                </Link>
                <Link to="#" className="block text-gray-300 hover:bg-accent px-3 py-2 rounded text-sm">
                  Why Swamiji
                </Link>
              </div>
            </details>

            <Link to="#" className="block text-white hover:bg-accent px-3 py-2 rounded font-medium">
              Blog
            </Link>
            <Link to="#" className="block text-white hover:bg-accent px-3 py-2 rounded font-medium">
              Contact Us
            </Link>

            {user ? (
              <>
                <Link to="/dashboard" className="block text-white hover:bg-accent px-3 py-2 rounded font-medium">
                  Dashboard
                </Link>
                {user.isAdmin && (
                  <Link to="/admin" className="block text-white hover:bg-accent px-3 py-2 rounded font-medium">
                    Admin
                  </Link>
                )}
                <button onClick={logout} className="w-full text-left text-white hover:bg-accent px-3 py-2 rounded font-medium">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block text-white hover:bg-accent px-3 py-2 rounded font-medium">
                  Login
                </Link>
                <Link to="/register" className="block text-white hover:bg-accent px-3 py-2 rounded font-medium">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
