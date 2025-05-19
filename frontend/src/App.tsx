import { useState } from 'react'
import { toast } from 'react-toastify'

import { useTaskStore } from './store/task.ts'

export default function App() {
	const [newTask, setNewTask] = useState({
		title: '',
		description: '',
		dueDate: '',
	})

	const { createTask } = useTaskStore()

	const handleAddTask = async () => {
		const { success, message } = await createTask(newTask)
		if (!success) {
			toast.error(`Error: ${message}`)
		} else {
			toast.success(`Success: ${message}`)
		}
		setNewTask({
			title: '',
			description: '',
			dueDate: '',
		})
	}

	return (
		<div>
			<h1 className='text-2xl font-bold'>Task Manager</h1>
			<form onSubmit={handleAddTask}>
				<input
					placeholder='Title'
					value={newTask.title}
					onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
				/>
				<input
					placeholder='Description'
					value={newTask.description}
					onChange={(e) =>
						setNewTask({ ...newTask, description: e.target.value })
					}
				/>
				<input
					type='date'
					placeholder='Due Date'
					value={newTask.dueDate}
					onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
				/>
				<input type='submit' />
			</form>
		</div>
	)
}
