import express from 'express'
import mongoose from 'mongoose'
import Task from './models/task.model.js'

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.get('/', (req, res) => {
	res.send('Hello')
})

app.post('/api/tasks', async (req, res) => {
	const task = req.body

	if (!task.title) {
		return res.status(400).json({ error: 'Title is required' })
	}
	if (!task.dueDate) {
		return res.status(400).json({ error: 'Due date is required' })
	}

	const newTask = new Task(task)
	try {
		await newTask.save()
		res.status(201).json({ success: true, data: newTask })
	} catch (error) {
		console.error('Error creating task:', error)
		res.status(500).json({ success: false, message: 'Error creating task' })
	}
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
