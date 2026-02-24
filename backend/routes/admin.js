import express from 'express'
import User from '../models/User.js'
import Game from '../models/Game.js'
import { protect, admin } from '../middleware/auth.js'

const router = express.Router()

// Get all users
router.get('/users', protect, admin, async (req, res) => {
  try {
    const users = await User.find().select('-password')
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

// Get all games
router.get('/games', protect, admin, async (req, res) => {
  try {
    const games = await Game.find()
    res.json(games)
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

// Add new game
router.post('/games', protect, admin, async (req, res) => {
  try {
    const { name, category, provider, thumbnail } = req.body
    const game = await Game.create({ name, category, provider, thumbnail })
    res.status(201).json(game)
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

// Update game
router.put('/games/:id', protect, admin, async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(game)
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

// Delete game
router.delete('/games/:id', protect, admin, async (req, res) => {
  try {
    await Game.findByIdAndDelete(req.params.id)
    res.json({ message: 'Game deleted' })
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

// Update user
router.put('/users/:id', protect, admin, async (req, res) => {
  try {
    const { accountBalance, vipStatus } = req.body
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { accountBalance, vipStatus },
      { new: true }
    ).select('-password')
    res.json(user)
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

export default router
