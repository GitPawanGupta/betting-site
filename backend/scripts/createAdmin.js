import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import User from '../models/User.js'

dotenv.config()

const createAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gaming-platform')
    console.log('MongoDB connected')

    // Admin credentials
    const adminData = {
      username: 'admin',
      email: 'admin@swamiji.club',
      password: 'admin123',
      isAdmin: true,
      accountBalance: 0,
      vipStatus: 'Platinum'
    }

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: adminData.email })
    
    if (existingAdmin) {
      console.log('Admin user already exists!')
      console.log('Email:', adminData.email)
      console.log('Username:', adminData.username)
      console.log('Password: admin123')
    } else {
      // Create admin user
      const admin = await User.create(adminData)
      console.log('✅ Admin user created successfully!')
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
      console.log('📧 Email:', adminData.email)
      console.log('👤 Username:', adminData.username)
      console.log('🔑 Password: admin123')
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
      console.log('⚠️  Please change the password after first login!')
    }

    process.exit(0)
  } catch (error) {
    console.error('Error creating admin:', error)
    process.exit(1)
  }
}

createAdmin()

