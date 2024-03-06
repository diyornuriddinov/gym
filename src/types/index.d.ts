export interface ITaskData {
	weekTotal: number
	monthTotal: number
	total: number
	tasks: ITask[]
}
export interface ITask {
	id: string
	title: string
	startTime: number
	totalTime: number
	endTime: number
	userId: string
	status: ITaskStatus
}
export type ITaskData = 'unstarted' | 'in_progress' | 'paused'
