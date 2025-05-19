import { create } from 'zustand'

interface Task {
	title: string
	description: string
}

interface TaskStoreState {
	tasks: Task[]
}

export const useTaskStore = create((set) => ({
	tasks: [],
	setTasks: (tasks: []) => set({ tasks }),
	createTask: async (newTask: Task) => {
		if (!newTask.title) {
			return {
				success: false,
				message: 'Title is required',
			}
		}
		const res = await fetch('/api/tasks', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newTask),
		})
		const data = await res.json()
		set((state: TaskStoreState) => ({
			tasks: [...state.tasks, data.data as Task],
		}))
		return {
			success: true,
			message: 'Task created successfully',
		}
	},
}))
