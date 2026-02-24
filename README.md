# Gaming Platform Website

A full-stack gaming platform built with React, Node.js, Express, and MongoDB.

## Features

- User authentication (register/login)
- Multiple game categories (slots, live casino, Indian casino, crash games, live shows)
- User dashboard with profile management
- Game history tracking
- Admin panel for managing users and games
- Responsive design with Tailwind CSS
- VIP status system
- Account balance management

## Tech Stack

### Frontend
- React 18
- React Router
- Tailwind CSS
- Axios
- Vite

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- JWT authentication
- bcryptjs for password hashing
- Rate limiting

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)

### Backend Setup

1. Navigate to backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/gaming-platform
JWT_SECRET=your_secret_key_here
```

4. Start the server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000` and proxy API requests to `http://localhost:5000`.

## Default Admin Account

To create an admin account, manually update a user in MongoDB:
```javascript
db.users.updateOne(
  { email: "admin@example.com" },
  { $set: { isAdmin: true } }
)
```

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/me` - Get current user

### Games
- GET `/api/games/categories` - Get all categories
- GET `/api/games/category/:categoryName` - Get games by category

### Users
- GET `/api/users/game-history` - Get user game history
- PUT `/api/users/profile` - Update user profile

### Admin
- GET `/api/admin/users` - Get all users
- GET `/api/admin/games` - Get all games
- POST `/api/admin/games` - Add new game
- PUT `/api/admin/games/:id` - Update game
- DELETE `/api/admin/games/:id` - Delete game
- PUT `/api/admin/users/:id` - Update user

## Project Structure

```
project/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── backend/
    ├── models/
    ├── routes/
    ├── middleware/
    ├── server.js
    └── package.json
```

## License

MIT
