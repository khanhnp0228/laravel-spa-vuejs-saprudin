<template>
    <main style="min-height: 50vh; margin-top: 2rem;">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <h1 class="mb-4"> Summary <small class="text-muted">(Task this week)</small></h1>

                    <div v-for="(tasks, description) in summaries" :key="description">
                        <Summaries :tasks="tasks" :description="description" />
                    </div>

                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import Summaries from "../components/summaries/Summaries.vue";
import {useSummaryStore} from "../stores/summary";
import {onMounted} from "vue";
import {storeToRefs} from "pinia";

const store = useSummaryStore()
const { summaries } = storeToRefs(store)
const { fetchTasksSummary} = store

onMounted(async () => {
    await fetchTasksSummary()
})
</script>

<style scoped>

</style>