const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())

PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('Server running on 3000...')
})