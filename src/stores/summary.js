import {ref} from "vue";
import {defineStore} from "pinia";
import {taskSummary} from "../http/summary-api";

export const useSummaryStore = defineStore('summaryStore', () => {
    const summaries = ref([])

    const fetchTasksSummary = async () => {
        const { data } = await taskSummary()
        summaries.value = data
    }

    return {
        summaries,
        fetchTasksSummary
    }
})