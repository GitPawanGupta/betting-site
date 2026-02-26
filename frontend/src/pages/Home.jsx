import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import SEO from '../components/SEO'
import 'swiper/css'
import 'swiper/css/pagination'

const Home = () => {
  const [categories, setCategories] = useState([])

  const carouselImages = [
    {
      url: 'https://www.swamiji.club/wp-content/uploads/al_opt_content/IMAGE/www.swamiji.club/wp-content/uploads/2025/06/vitality-blast-cricket-id-provider-in-india.webp.bv.webp?bv_host=www.swamiji.club',
      alt: 'vitality blast cricket id provider in india'
    },
    {
      url: 'https://www.swamiji.club/wp-content/uploads/al_opt_content/IMAGE/www.swamiji.club/wp-content/uploads/2025/05/Swamiji-club-online.webp.bv.webp?bv_host=www.swamiji.club',
      alt: 'Swamiji club online'
    },
    {
      url: 'https://www.swamiji.club/wp-content/uploads/al_opt_content/IMAGE/www.swamiji.club/wp-content/uploads/2025/05/get-aviator-id-now.webp.bv.webp?bv_host=www.swamiji.club',
      alt: 'get aviator id now'
    },
    {
      url: 'https://www.swamiji.club/wp-content/uploads/al_opt_content/IMAGE/www.swamiji.club/wp-content/uploads/2025/05/swamiji-live-exchange.webp.bv.webp?bv_host=www.swamiji.club',
      alt: 'swamiji live exchange'
    }
  ]

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const res = await axios.get('/api/games/categories')
      setCategories(res.data)
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  return (
    <div className="min-h-screen">
      <SEO 
        title="GameZone - Premium Online Gaming Platform | Cricket Betting & Casino Games"
        description="Experience premium online gaming with GameZone. Get instant Gaming ID for cricket betting, live casino, sports betting & 5000+ games. Fast withdrawals, 24/7 support, secure platform."
        keywords="online gaming, cricket betting, casino games, sports betting, gaming ID, live casino, online betting, cricket ID, gaming platform, secure betting, fast withdrawals"
        url="https://gamezone.com"
      />
      
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden bg-gradient-to-b from-purple-900 via-purple-800 to-secondary stars-bg">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-pink-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
        
        {/* Diamond Pattern Decorations */}
        <div className="absolute top-20 left-20 animate-float">
          <div className="grid grid-cols-4 gap-2">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-white/30 rounded-full"></div>
            ))}
          </div>
        </div>
        <div className="absolute top-20 right-20 animate-float" style={{animationDelay: '1s'}}>
          <div className="grid grid-cols-4 gap-2">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-white/30 rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Swamiji Online: India's Most Trusted<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight to-yellow-300">
              Legal Online Gaming Platform
            </span>
          </h1>
          <p className="text-sm text-gray-300 mb-4">Last Updated: January 27, 2026</p>
          <p className="text-lg text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            We provide you with an online ID for cricket, casino, and more than 5000+ games. Join India's leading online 
            gaming site for incredible odds and a secure gaming experience. Get your Cricket ID via WhatsApp and 
            access fast withdrawals, reliable service, and a user-friendly interface all in one place.
          </p>
          <a 
            href="https://wa.me/918743884000?text=Hi%2C%20I%20want%20to%20get%20my%20online%20cricket%20ID" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-highlight text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition transform hover:scale-105 shadow-lg"
          >
            Whatsapp to get online cricket ID
          </a>
        </div>

        {/* Wave Effect at Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#0a0a1a"/>
          </svg>
        </div>
      </div>

      {/* Premium Gaming ID Provider Section */}
      <div className="bg-gradient-to-b from-primary to-secondary py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="text-highlight">Premium Online Gaming ID Provider</span>
            <span className="text-white"> – Your Trusted Partner</span>
          </h2>
          <p className="text-gray-300 text-center max-w-5xl mx-auto leading-relaxed mb-12">
            Join India's elite online gaming sites for incredible odds and secure gaming experiences. If you are a pro bettor or just a beginner, Swamiji Online gaming ID 
            provider will give you the utmost serenity. From us you can get your one stop id where you can bet on all live sports and world's all live casino games. We 
            recommend you must concentrate on making money while we take care of security, cash-out, and everything else. Your Victory is our Concern.
          </p>
        </div>
      </div>

      {/* Image Carousel Section */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Play with India's Most Legal<br />
                Online Betting ID Provider
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                The first step to success in cricket betting is a proper platform. Swamiji Online has 
                built a reputation as a <span className="text-highlight font-semibold">trusted betting ID provider</span> through continuously providing 
                reliable services. Think of it as your entry point into the exciting world of online 
                sports and casino gaming.
              </p>
              <a 
                href="https://wa.me/918743884000?text=Hi%2C%20I%20want%20to%20get%20my%20online%20cricket%20ID" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-highlight text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition"
              >
                Whatsapp to get online cricket ID
              </a>
            </div>

            {/* Right Content - Image Carousel */}
            <div className="relative">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                {carouselImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-96">
                      <img 
                        src={image.url} 
                        alt={image.alt}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Partners Section */}
      <div className="bg-secondary/80 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Trusted Swamiji Online Partners</h2>
          <p className="text-gray-300 text-center max-w-4xl mx-auto mb-12">
            We are proud to be working with some of the best online platforms of the gaming industry. Brands which bring you the quality 
            services with amazing odds, and ultimate gaming experiences. Here are some elite online gaming sites provided by us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Partner 1 - 99exch */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-highlight/50 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-800">ALLPANELEXCH9</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-3">allpanelexch9.co</h3>
              <p className="text-gray-400 text-center text-sm mb-6">
                ALLPANELEXCH9 offers unbeatable exchange rates and a smooth user experience for gaming enthusiasts. 
                It is built on trust and performance, so play freely.
              </p>
              <div className="flex justify-center">
                <a 
                  href="https://wa.me/918743884000?text=Hi%2C%20I%20want%20to%20get%20my%20Swamiji.live%20ID" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-highlight text-white px-6 py-2 rounded-full hover:bg-orange-600 transition font-semibold"
                >
                  Get ID
                </a>
              </div>
            </div>

            {/* Partner 2 - Swamiji.live */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-highlight/50 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-orange-500">CRICXBET99</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-3">cricxbet99.win</h3>
              <p className="text-gray-400 text-center text-sm mb-6">
                cricxbet99 Live offers live gaming, 24/7 support, and instant cricket IDs 
                for a quick gaming experience. cricxbet99 Live has the Best transaction methods.
              </p>
              <div className="flex justify-center">
                <a 
                  href="https://wa.me/918743884000?text=Hi%2C%20I%20want%20to%20get%20my%20Swamiji.live%20ID" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-highlight text-white px-6 py-2 rounded-full hover:bg-orange-600 transition font-semibold"
                >
                  Get ID
                </a>
              </div>
            </div>

            {/* Partner 3 - 11xplay.pro */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-highlight/50 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-800">mylaser247</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-3">mylaser247.online</h3>
              <p className="text-gray-400 text-center text-sm mb-6">
                mylaser247 Play is a way to enjoy live sports betting in real time. With top notch 
                features, mylaser247 Play provides a premium gaming experience and Fast Payment Services.
              </p>
              <div className="flex justify-center">
                <a 
                  href="https://wa.me/918743884000?text=Hi%2C%20I%20want%20to%20get%20my%2011xplay%20ID" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-highlight text-white px-6 py-2 rounded-full hover:bg-orange-600 transition font-semibold"
                >
                  Get ID
                </a>
              </div>
            </div>

            {/* Partner 4 - laser247.club */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-highlight/50 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-800">lotusbook9</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-3">lotusbook9.co</h3>
              <p className="text-gray-400 text-center text-sm mb-6">
                lotusbook9 is a fast and reliable online betting platform. This brand 
                is highly recommended if you are looking for a speedy experience for wagering.
              </p>
              <div className="flex justify-center">
                <a 
                  href="https://wa.me/918743884000?text=Hi%2C%20I%20want%20to%20get%20my%20Laser247%20ID" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-highlight text-white px-6 py-2 rounded-full hover:bg-orange-600 transition font-semibold"
                >
                  Get ID
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 24/7 Live Match Updates Section */}
      <div className="bg-gradient-to-b from-secondary to-primary py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            24/7 <span className="text-highlight">Live Match Updates</span>
          </h2>
          
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            <button className="bg-highlight text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
              Live Matches
            </button>
            <button className="bg-gray-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-600 transition">
              Upcoming Matches
            </button>
          </div>

          {/* Live Matches Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((match) => (
              <div key={match} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-red-500 text-sm font-semibold flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                    LIVE
                  </span>
                  <span className="text-gray-400 text-sm">IPL 2026</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">Mumbai Indians</span>
                    <span className="text-highlight font-bold">185/4</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">Chennai Super Kings</span>
                    <span className="text-gray-400">Yet to bat</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-highlight/20 text-highlight border border-highlight px-4 py-2 rounded-lg hover:bg-highlight hover:text-white transition font-semibold">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Celebrity Testimonials Section */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            What <span className="text-highlight">Celebrities</span> Say About Us
          </h2>
          
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="pb-12"
          >
            {[
              { name: 'Tusshar Kapoor', role: 'Bollywood Actor', quote: 'Swamiji Online provides a secure and exciting gaming experience. Highly recommended!' },
              { name: 'Sunny Leone', role: 'Actress & Entrepreneur', quote: 'The best platform for online gaming in India. Fast withdrawals and great support!' },
              { name: 'AB de Villiers', role: 'Cricket Legend', quote: 'As a cricket enthusiast, I find Swamiji Online to be the most reliable betting platform.' },
              { name: 'Arjun Rampal', role: 'Actor & Model', quote: 'Professional service and amazing odds. This is the future of online gaming!' }
            ].map((celeb, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-highlight to-orange-600 rounded-full mb-4 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">{celeb.name.charAt(0)}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{celeb.name}</h3>
                    <p className="text-highlight text-sm mb-4">{celeb.role}</p>
                    <p className="text-gray-300 italic">"{celeb.quote}"</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Types of Betting Options */}
      <div className="bg-gradient-to-b from-secondary to-primary py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Types of <span className="text-highlight">Betting Options</span>
          </h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Explore various betting options available on our platform. From cricket to casino, we've got it all!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Cricket Betting', icon: '🏏', desc: 'Bet on live cricket matches with best odds' },
              { title: 'Casino Games', icon: '🎰', desc: 'Play 5000+ casino games online' },
              { title: 'Live Sports', icon: '⚽', desc: 'Bet on football, tennis, and more' },
              { title: 'Aviator Game', icon: '✈️', desc: 'Experience the thrill of Aviator' }
            ].map((option, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-highlight/50 transition-all duration-300 text-center">
                <div className="text-5xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{option.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{option.desc}</p>
                <a 
                  href="https://wa.me/918743884000?text=Hi%2C%20I%20want%20to%20get%20my%20online%20cricket%20ID" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-highlight text-white px-6 py-2 rounded-full hover:bg-orange-600 transition font-semibold inline-block"
                >
                  Play Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Sponsors Section */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Trusted <span className="text-highlight">Payment Partners</span>
          </h2>
          
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 }
            }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
          >
            {['UPI', 'Net Banking', 'Visa', 'Mastercard', 'Paytm', 'PhonePe', 'Google Pay', 'IMPS'].map((payment, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl p-6 flex items-center justify-center h-24">
                  <span className="text-gray-800 font-bold text-lg">{payment}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-b from-secondary to-primary py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Frequently Asked <span className="text-highlight">Questions</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'How do I get my Cricket ID?',
                a: 'Simply click on the WhatsApp button and contact our support team. They will guide you through the quick registration process and provide your Cricket ID instantly.'
              },
              {
                q: 'Is Swamiji Online legal in India?',
                a: 'Yes, Swamiji Online operates legally and provides secure gaming services. We follow all necessary regulations to ensure a safe gaming environment for our users.'
              },
              {
                q: 'What payment methods are supported?',
                a: 'We support multiple payment methods including UPI, Net Banking, Paytm, PhonePe, Google Pay, and all major credit/debit cards for seamless transactions.'
              },
              {
                q: 'How fast are withdrawals?',
                a: 'Withdrawals are processed instantly to within 24 hours depending on your payment method. We prioritize fast and secure transactions for all our users.'
              },
              {
                q: 'What games can I play?',
                a: 'You can enjoy cricket betting, 5000+ casino games, live sports betting, Aviator game, and many more exciting options on our platform.'
              }
            ].map((faq, index) => (
              <details key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer text-white font-semibold hover:bg-gray-700/50 transition">
                  {faq.q}
                </summary>
                <div className="px-6 py-4 text-gray-300 border-t border-gray-700/50">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/918743884000?text=Hi%2C%20I%20want%20to%20get%20my%20online%20cricket%20ID" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition transform hover:scale-110 z-50"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  )
}

export default Home
