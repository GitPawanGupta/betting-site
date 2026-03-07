import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import CategoryPage from './pages/CategoryPage'
import AdminPanel from './pages/AdminPanel'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'
import LandingPage from './pages/LandingPage'
import LeadsPanel from './pages/LeadsPanel'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Landing Page - No Navbar/Footer */}
            <Route path="/landing" element={<LandingPage />} />
            
            {/* Main Website with Navbar/Footer */}
            <Route path="/*" element={
              <div className="min-h-screen bg-primary flex flex-col">
                <Navbar />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                    <Route path="/category/:categoryName" element={<CategoryPage />} />
                    <Route path="/admin" element={<PrivateRoute adminOnly><AdminPanel /></PrivateRoute>} />
                    <Route path="/leads" element={<PrivateRoute adminOnly><LeadsPanel /></PrivateRoute>} />
                  </Routes>
                </main>
                <Footer />
              </div>
            } />
          </Routes>
        </Router>
      </AuthProvider>
    </HelmetProvider>
  )
}

export default App
