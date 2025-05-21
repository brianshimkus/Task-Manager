import express from 'express'
import dotenv from 'dotenv'

import taskRoutes from './routes/task.route.js'
import { connectDB } from './lib/db.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.use('/api/tasks', taskRoutes)

app.listen(PORT, () => {
	console.log(`🚀 Server is running on port ${PORT}`)
	connectDB()
})
