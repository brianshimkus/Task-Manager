import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
		status: {
			type: String,
			enum: ['to-do', 'ready', 'in-progress', 'blocked', 'done'],
			default: 'to-do',
		},
		dueDate: {
			type: Date,
			required: true,
		},
	},
	{ timestamps: true }
)

const Task = mongoose.model('Task', taskSchema)

export default Task
