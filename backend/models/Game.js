import mongoose from 'mongoose'

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['slots', 'live-casino', 'indian-casino', 'crash-games', 'live-shows']
  },
  provider: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Game', gameSchema)
