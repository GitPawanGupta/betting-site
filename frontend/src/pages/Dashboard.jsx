import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'

const Dashboard = () => {
  const { user } = useContext(AuthContext)
  const [gameHistory, setGameHistory] = useState([])
  const [profile, setProfile] = useState({ username: '', email: '' })

  useEffect(() => {
    if (user) {
      setProfile({ username: user.username, email: user.email })
      fetchGameHistory()
    }
  }, [user])

  const fetchGameHistory = async () => {
    try {
      const res = await axios.get('/api/users/game-history')
      setGameHistory(res.data)
    } catch (error) {
      console.error('Error fetching game history:', error)
    }
  }

  const handleProfileUpdate = async (e) => {
    e.preventDefault()
    try {
      await axios.put('/api/users/profile', profile)
      alert('Profile updated successfully')
    } catch (error) {
      alert('Error updating profile')
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-secondary p-6 rounded-lg">
          <h3 className="text-gray-400 text-sm">Account Balance</h3>
          <p className="text-3xl font-bold text-white">${user?.accountBalance || 0}</p>
        </div>
        <div className="bg-secondary p-6 rounded-lg">
          <h3 className="text-gray-400 text-sm">VIP Status</h3>
          <p className="text-3xl font-bold text-highlight">{user?.vipStatus || 'Standard'}</p>
        </div>
        <div className="bg-secondary p-6 rounded-lg">
          <h3 className="text-gray-400 text-sm">Games Played</h3>
          <p className="text-3xl font-bold text-white">{gameHistory.length}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-secondary p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Profile Settings</h2>
          <form onSubmit={handleProfileUpdate}>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Username</label>
              <input
                type="text"
                value={profile.username}
                onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                className="w-full px-4 py-2 rounded bg-accent text-white focus:outline-none focus:ring-2 focus:ring-highlight"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="w-full px-4 py-2 rounded bg-accent text-white focus:outline-none focus:ring-2 focus:ring-highlight"
              />
            </div>
            <button type="submit" className="bg-highlight text-white px-6 py-2 rounded hover:bg-red-600">
              Update Profile
            </button>
          </form>
        </div>

        <div className="bg-secondary p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Game History</h2>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {gameHistory.length === 0 ? (
              <p className="text-gray-400">No games played yet</p>
            ) : (
              gameHistory.map((game, index) => (
                <div key={index} className="bg-accent p-4 rounded">
                  <p className="text-white font-semibold">{game.gameName}</p>
                  <p className="text-gray-400 text-sm">{game.category}</p>
                  <p className="text-gray-500 text-xs">{new Date(game.timestamp).toLocaleString()}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
