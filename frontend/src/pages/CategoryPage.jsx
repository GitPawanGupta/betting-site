import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CategoryPage = () => {
  const { categoryName } = useParams()
  const [games, setGames] = useState([])

  useEffect(() => {
    fetchGames()
  }, [categoryName])

  const fetchGames = async () => {
    try {
      const res = await axios.get(`/api/games/category/${categoryName}`)
      setGames(res.data)
    } catch (error) {
      console.error('Error fetching games:', error)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8 capitalize">{categoryName}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <div key={game._id} className="bg-secondary rounded-lg overflow-hidden hover:transform hover:scale-105 transition cursor-pointer">
            <img src={game.thumbnail || '/placeholder.jpg'} alt={game.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-white font-semibold">{game.name}</h3>
              <p className="text-gray-400 text-sm">{game.provider}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryPage
