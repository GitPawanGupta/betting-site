import mongoose from 'mongoose'

const leadSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  ipAddress: {
    type: String
  },
  userAgent: {
    type: String
  },
  source: {
    type: String,
    default: 'landing-page'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { collection: 'usercredentials' })  // Save in 'usercredentials' collection

export default mongoose.model('Lead', leadSchema)
