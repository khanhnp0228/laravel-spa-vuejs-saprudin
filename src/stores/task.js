import {defineStore} from "pinia";
import {allTasks, completeTasks, createTasks, removeTasks, updateTasks} from "../http/task-api";
import {computed, ref} from "vue";


export const useTaskStore = defineStore('taskStore', () => {
    const tasks = ref([])
    const completedTasks = computed(() => tasks.value.filter(task => task.is_completed))
    const uncompletedTasks = computed(() => tasks.value.filter(task => !task.is_completed))

    const fetchAllTasks = async () => {
        const {data} = await allTasks()
        tasks.value = data.data
    }

    const handleAddedTask = async (newTask) => {
        const { data: createdTask } = await createTasks(newTask)
        tasks.value.unshift(createdTask.data)
    }

    const handleUpdatedTask = async (task) => {
        const { data: updatedTask } = await updateTasks(task.id, {
            name: task.name,
        })
        const currentTask = tasks.value.find(item => item.id == task.id)
        currentTask.name = updatedTask.data.name
    }

    const handleCompletedTask = async (task) => {
        const { data: updatedTask } = await completeTasks(task.id, {
            is_completed: task.is_completed,
        })
        const currentTask = tasks.value.find(item => item.id == task.id)
        currentTask.is_completed = updatedTask.data.is_completed
    }

    const handleRemovedTask = async (task) => {
        await removeTasks(task.id, task)
        const index = tasks.value.findIndex(item => item.id == task.id)
        tasks.value.splice(index, 1)
    }

    return {
        tasks,
        completedTasks, uncompletedTasks,
        fetchAllTasks,
        handleAddedTask, handleUpdatedTask, handleCompletedTask, handleRemovedTask
    }
})