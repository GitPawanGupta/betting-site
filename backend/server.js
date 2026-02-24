import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import rateLimit from 'express-rate-limit'
import authRoutes from './routes/auth.js'
import gameRoutes from './routes/games.js'
import userRoutes from './routes/users.js'
import adminRoutes from './routes/admin.js'

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Rate limiting
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100
})
app.use(limiter)

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/games', gameRoutes)
app.use('/api/users', userRoutes)
app.use('/api/admin', adminRoutes)

// Health check endpoint for Render
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' })
})

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'GameZone API Server', version: '1.0.0' })
})

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gaming-platform')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
