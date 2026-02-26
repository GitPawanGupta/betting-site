import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img 
              src="https://www.swamiji.club/wp-content/uploads/al_opt_content/IMAGE/www.swamiji.club/wp-content/uploads/2025/05/download-2025-05-25T154726.066-1024x581.webp.bv.webp?bv_host=www.swamiji.club" 
              alt="Swamiji Logo" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Swamiji private Ltd operates an online gaming exchange platform. The Company allows users to bet in sports, football, and horse racing, as well as play online casino, poker, and arcade games. Swamiji serves customers worldwide.
            </p>
          </div>

          {/* Home Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Home</h3>
            <div className="h-1 w-12 bg-highlight mb-4"></div>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-highlight transition text-sm">About Us</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-highlight transition text-sm">How It Works</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-highlight transition text-sm">Why Swamiji</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-highlight transition text-sm">Blogs</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-highlight transition text-sm">News</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-highlight transition text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* FAQ Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">FAQ</h3>
            <div className="h-1 w-12 bg-highlight mb-4"></div>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-highlight transition text-sm">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-highlight transition text-sm">Terms & Condition</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-highlight transition text-sm">Legal Situations</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-highlight transition text-sm">Customer Care</Link></li>
            </ul>
          </div>

          {/* Cricket Sports ID */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Cricket Sports ID</h3>
            <div className="h-1 w-12 bg-highlight mb-4"></div>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-highlight transition text-sm">Online Cricket Gaming ID</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-highlight transition text-sm">Casino Gaming ID</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-highlight transition text-sm">Cricket Master ID</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-highlight transition text-sm">IPL Gaming ID</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-highlight transition text-sm">Online Gaming ID</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-highlight transition text-sm">Online Cricket ID Guide</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <div className="h-1 w-12 bg-highlight mb-4"></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-400 text-sm">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                support@swamijiclub.com
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                </svg>
                swamiji.club
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex space-x-3 mb-6">
              <a href="https://www.facebook.com/share/156JDijxJb/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://wa.me/918743884000?text=Hi%2C%20I%20want%20to%20get%20my%20online%20cricket%20ID" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@SwamijiOnline" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {/* Payment Methods */}
            <h3 className="text-white text-lg font-bold mb-4">Payment Methods</h3>
            <div className="h-1 w-12 bg-highlight mb-4"></div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded p-2 flex items-center justify-center">
                <span className="text-xs font-bold text-gray-800">UPI</span>
              </div>
              <div className="bg-white rounded p-2 flex items-center justify-center">
                <span className="text-xs font-bold text-gray-800">NET BANKING</span>
              </div>
              <div className="bg-white rounded p-2 flex items-center justify-center">
                <span className="text-xs font-bold text-gray-800">VISA</span>
              </div>
              <div className="bg-white rounded p-2 flex items-center justify-center">
                <span className="text-xs font-bold text-gray-800">MASTERCARD</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Disclaimer */}
      <div className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-gray-400 text-xs mb-3">
            <span className="text-white font-semibold">Disclaimer:</span> Gambling involves financial risk and may lead to addiction if not done responsibly. Services are strictly for individuals aged 18 and above. We advise all users to play responsibly and stay aware of their financial limits.
          </p>
          <p className="text-gray-400 text-xs">
            For any assistance or queries, feel free to{' '}
            <Link to="#" className="text-highlight hover:text-orange-600 font-semibold">
              contact the Swamiji team
            </Link>.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
