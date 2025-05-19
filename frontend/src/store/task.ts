import { create } from 'zustand'

interface Task {
	title: string
	description: string
}

interface TaskStoreState {
	tasks: Task[]
}

interface CreateTaskResponse {
	success: boolean
	message: string
}

interface UseTaskStoreActions {
	setTasks: (tasks: Task[]) => void
	createTask: (newTask: Task) => Promise<CreateTaskResponse>
}

type UseTaskStore = TaskStoreState & UseTaskStoreActions

export const useTaskStore = create<UseTaskStore>((set) => ({
	tasks: [],
	setTasks: (tasks: Task[]) => set({ tasks }),
	createTask: async (newTask: Task): Promise<CreateTaskResponse> => {
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
