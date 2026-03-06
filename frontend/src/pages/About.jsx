import SEO from '../components/SEO'

const About = () => {
  return (
    <div className="min-h-screen bg-primary">
      <SEO 
        title="About Us - Swamiji Online | Trusted Betting ID Provider"
        description="Learn about Swamiji Online, India's most trusted online betting ID provider. We offer secure cricket betting, casino games, and 24/7 customer support since 2020."
        keywords="about swamiji online, betting id provider, trusted gaming platform, online betting company"
        url="https://swami-ji.club/about"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          About <span className="text-highlight">Swamiji Online</span>
        </h1>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Who We Are</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Swamiji Online is India's premier online betting ID provider, established in 2020. We specialize in providing 
            instant cricket betting IDs, casino gaming IDs, and sports betting services to customers across India.
          </p>
          <p className="text-gray-300 leading-relaxed">
            With over 50,000+ satisfied customers, we have built a reputation for reliability, security, and excellent 
            customer service. Our platform offers access to 5000+ games, live cricket betting, and instant withdrawals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold text-white mb-2">50,000+</h3>
            <p className="text-gray-400">Happy Customers</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-2">5 Minutes</h3>
            <p className="text-gray-400">Instant ID Creation</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-white mb-2">24/7</h3>
            <p className="text-gray-400">Customer Support</p>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            To provide a safe, secure, and enjoyable online betting experience for Indian customers. We aim to be the 
            most trusted and reliable betting ID provider in India, offering the best odds, fastest withdrawals, and 
            exceptional customer service.
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-highlight mr-2">✓</span>
              <span>Instant ID creation via WhatsApp</span>
            </li>
            <li className="flex items-start">
              <span className="text-highlight mr-2">✓</span>
              <span>Fast withdrawals within 24 hours</span>
            </li>
            <li className="flex items-start">
              <span className="text-highlight mr-2">✓</span>
              <span>24/7 customer support in Hindi & English</span>
            </li>
            <li className="flex items-start">
              <span className="text-highlight mr-2">✓</span>
              <span>Secure payment methods (UPI, Net Banking, Cards)</span>
            </li>
            <li className="flex items-start">
              <span className="text-highlight mr-2">✓</span>
              <span>Best odds on cricket and sports betting</span>
            </li>
            <li className="flex items-start">
              <span className="text-highlight mr-2">✓</span>
              <span>5000+ casino games and live dealer options</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
