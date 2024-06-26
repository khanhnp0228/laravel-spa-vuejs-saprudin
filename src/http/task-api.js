import api from "./api";

const resource = '/tasks'

export const allTasks = () => api.get(resource)

export const createTasks = task => api.post(resource, task)

export const updateTasks = (id, task) => api.put(`${resource}/${id}`, task)

export const removeTasks = (id, task) => api.delete(`${resource}/${id}`)

export const completeTasks = (id, task) => api.patch(`${resource}/${id}/complete`, task)