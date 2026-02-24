import { useState, useEffect } from 'react'
import axios from 'axios'

const AdminPanel = () => {
  const [users, setUsers] = useState([])
  const [games, setGames] = useState([])
  const [activeTab, setActiveTab] = useState('users')
  const [newGame, setNewGame] = useState({ name: '', category: '', provider: '', thumbnail: '' })

  useEffect(() => {
    fetchUsers()
    fetchGames()
  }, [])

  const fetchUsers = async () => {
    try {
      const res = await axios.get('/api/admin/users')
      setUsers(res.data)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

  const fetchGames = async () => {
    try {
      const res = await axios.get('/api/admin/games')
      setGames(res.data)
    } catch (error) {
      console.error('Error fetching games:', error)
    }
  }

  const handleAddGame = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/admin/games', newGame)
      setNewGame({ name: '', category: '', provider: '', thumbnail: '' })
      fetchGames()
      alert('Game added successfully')
    } catch (error) {
      alert('Error adding game')
    }
  }

  const handleDeleteGame = async (id) => {
    if (window.confirm('Are you sure?')) {
      try {
        await axios.delete(`/api/admin/games/${id}`)
        fetchGames()
      } catch (error) {
        alert('Error deleting game')
      }
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">Admin Panel</h1>

      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('users')}
          className={`px-6 py-2 rounded ${activeTab === 'users' ? 'bg-highlight' : 'bg-secondary'} text-white`}
        >
          Users
        </button>
        <button
          onClick={() => setActiveTab('games')}
          className={`px-6 py-2 rounded ${activeTab === 'games' ? 'bg-highlight' : 'bg-secondary'} text-white`}
        >
          Games
        </button>
      </div>

      {activeTab === 'users' && (
        <div className="bg-secondary p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">User Management</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-accent">
                  <th className="text-left p-3">Username</th>
                  <th className="text-left p-3">Email</th>
                  <th className="text-left p-3">VIP Status</th>
                  <th className="text-left p-3">Balance</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id} className="border-b border-accent">
                    <td className="p-3">{user.username}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.vipStatus}</td>
                    <td className="p-3">${user.accountBalance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'games' && (
        <div>
          <div className="bg-secondary p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">Add New Game</h2>
            <form onSubmit={handleAddGame} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Game Name"
                value={newGame.name}
                onChange={(e) => setNewGame({ ...newGame, name: e.target.value })}
                className="px-4 py-2 rounded bg-accent text-white"
                required
              />
              <input
                type="text"
                placeholder="Category"
                value={newGame.category}
                onChange={(e) => setNewGame({ ...newGame, category: e.target.value })}
                className="px-4 py-2 rounded bg-accent text-white"
                required
              />
              <input
                type="text"
                placeholder="Provider"
                value={newGame.provider}
                onChange={(e) => setNewGame({ ...newGame, provider: e.target.value })}
                className="px-4 py-2 rounded bg-accent text-white"
                required
              />
              <input
                type="text"
                placeholder="Thumbnail URL"
                value={newGame.thumbnail}
                onChange={(e) => setNewGame({ ...newGame, thumbnail: e.target.value })}
                className="px-4 py-2 rounded bg-accent text-white"
              />
              <button type="submit" className="md:col-span-2 bg-highlight text-white py-2 rounded hover:bg-red-600">
                Add Game
              </button>
            </form>
          </div>

          <div className="bg-secondary p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Manage Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {games.map((game) => (
                <div key={game._id} className="bg-accent p-4 rounded">
                  <h3 className="text-white font-semibold">{game.name}</h3>
                  <p className="text-gray-400 text-sm">{game.category}</p>
                  <p className="text-gray-500 text-xs">{game.provider}</p>
                  <button
                    onClick={() => handleDeleteGame(game._id)}
                    className="mt-2 bg-red-600 text-white px-4 py-1 rounded text-sm hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminPanel
