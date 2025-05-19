import { useState } from 'react'
import { toast } from 'react-toastify'

import { useTaskStore } from './store/task'

export default function App() {
	const [newTask, setNewTask] = useState({
		title: '',
		description: '',
		dueDate: '',
	})

	// Replace 'TaskStoreType' with the actual type/interface of your store if you have one
	const { createTask } = useTaskStore() as {
		createTask: (
			task: typeof newTask
		) => Promise<{ success: boolean; message: string }>
	}

	const handleAddTask = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
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
