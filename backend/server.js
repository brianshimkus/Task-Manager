import express from 'express'
import mongoose from 'mongoose'

const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
	res.send('Hello')
})

const startServer = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI)
		console.log('🎉 Database connected successfully')
		app.listen(PORT, () => {
			console.log(`🚀 Server is running on port ${PORT}`)
		})
	} catch (error) {
		console.error('❌ Failed to connect to the database:', error)
		process.exit(1)
	}
}

startServer()
