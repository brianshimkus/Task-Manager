import Task from '../models/task.model.js'

export const getTasks = async (req, res) => {
	try {
		const tasks = await Task.find()
		res.status(200).json({ success: true, data: tasks })
	} catch (error) {
		console.error('Error fetching tasks:', error)
		res.status(500).json({ success: false, message: 'Error fetching tasks' })
	}
}

export const createTask = async (req, res) => {
	const task = req.body

	if (!task.title) {
		return res
			.status(400)
			.json({ success: false, message: 'Title is required' })
	}

	const newTask = new Task(task)
	try {
		await newTask.save()
		res.status(201).json({ success: true, data: newTask })
	} catch (error) {
		console.error('Error creating task:', error)
		res.status(500).json({ success: false, message: 'Error creating task' })
	}
}

export const updateTask = async (req, res) => {
	const { id } = req.params
	const updatedTask = req.body

	if (!id) {
		return res
			.status(400)
			.json({ success: false, message: 'Task ID is required' })
	}

	try {
		const task = await Task.findByIdAndUpdate(id, updatedTask, { new: true })
		if (!task) {
			return res.status(404).json({ success: false, message: 'Task not found' })
		}
		res.status(200).json({ success: true, data: task })
	} catch (error) {
		console.error('Error updating task:', error)
		res.status(500).json({ success: false, message: 'Error updating task' })
	}
}

export const deleteTask = async (req, res) => {
	const { id } = req.params

	if (!id) {
		return res
			.status(400)
			.json({ success: false, message: 'Task ID is required' })
	}

	try {
		const deletedTask = await Task.findByIdAndDelete(id)
		if (!deletedTask) {
			return res.status(404).json({ success: false, message: 'Task not found' })
		}
		res.status(200).json({ success: true, data: deletedTask })
	} catch (error) {
		console.error('Error deleting task:', error)
		res.status(500).json({ success: false, message: 'Error deleting task' })
	}
}
