const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io') 
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')
const cors = require("cors");
const { loginUser,registerUser } = require('./controller/authController');
const { verifyToken } = require('./middleware/authMiddleware');

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors());

const httpServer = createServer(app)
app.post('/api/signup', registerUser)
app.post('/api/login', loginUser)

app.get("/protected", verifyToken, (req,res) => {
    res.json({ message: `Welcome, ${req.user.username}! You have access to this protected route.` })
})

const io = new Server(httpServer,{
    cors: {
        origin: 'http://localhost:5173'
    }
})
io.on('connection', (socket) => {
})

PORT = process.env.PORT || 5000
MONGODB_URL = process.env.MONGODB_URL
mongoose.connect(MONGODB_URL)
  .then(() => {console.log('Connected!')})
  .catch(()=>{console.log('Connection failed')})

httpServer.listen(PORT, () => {
    console.log(`Server running on ${PORT}...`)
})
