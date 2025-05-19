import { useTaskStore } from './store/task.ts'

export default function App() {
	const { tasks } = useTaskStore()
	console.log(tasks)
	return (
		<div>
			<h1 className='text-2xl font-bold'>Task Manager</h1>
		</div>
	)
}
