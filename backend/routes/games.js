import express from 'express'
import Game from '../models/Game.js'

const router = express.Router()

// Get all categories with game counts
router.get('/categories', async (req, res) => {
  try {
    const categories = [
      { name: 'slots', description: 'Exciting slot games with big wins' },
      { name: 'live-casino', description: 'Real dealers, real-time action' },
      { name: 'indian-casino', description: 'Traditional Indian favorites' },
      { name: 'crash-games', description: 'Fast-paced multiplier games' },
      { name: 'live-shows', description: 'Interactive game shows' }
    ]

    const categoriesWithCounts = await Promise.all(
      categories.map(async (cat) => {
        const count = await Game.countDocuments({ category: cat.name })
        return { ...cat, gameCount: count, _id: cat.name }
      })
    )

    res.json(categoriesWithCounts)
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

// Get games by category
router.get('/category/:categoryName', async (req, res) => {
  try {
    const games = await Game.find({ category: req.params.categoryName })
    res.json(games)
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

export default router
