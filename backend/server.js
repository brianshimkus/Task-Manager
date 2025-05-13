import express from 'express'
import { connectDB } from './db/connect.js'

const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
	res.send('Hello')
})

app.listen(PORT, () => {
	connectDB()
	console.log(`🚀 Server is running on port ${PORT}`)
})
