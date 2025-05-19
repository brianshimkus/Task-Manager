import { create } from 'zustand'

export const useTaskStore = create((set) => ({
	tasks: [],
	setTasks: (tasks) => set({ tasks }),
	createTask: async (newTask) => {
		if (!newTask.title || !newTask.description) {
			return {
				success: false,
				message: 'Title and description are required',
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
		set((state) => ({ tasks: [...state.tasks, data.data] }))
	},
}))
