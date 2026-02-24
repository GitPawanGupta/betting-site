import express from 'express'
import User from '../models/User.js'
import GameHistory from '../models/GameHistory.js'
import { protect } from '../middleware/auth.js'

const router = express.Router()

// Get user game history
router.get('/game-history', protect, async (req, res) => {
  try {
    const history = await GameHistory.find({ userId: req.user._id })
      .sort({ startTime: -1 })
      .limit(50)
    res.json(history)
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

// Update user profile
router.put('/profile', protect, async (req, res) => {
  try {
    const { username, email } = req.body

    const user = await User.findById(req.user._id)
    if (username) user.username = username
    if (email) user.email = email

    await user.save()
    res.json({ message: 'Profile updated successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

export default router
