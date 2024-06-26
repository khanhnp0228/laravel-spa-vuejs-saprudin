<template>
    <li class="list-group-item py-3">
        <div
            class="d-flex justify-content-start align-items-center"
        >
            <input
                class="form-check-input mt-0"
                type="checkbox"
                :class="completedClass"
                :checked="task.is_completed"
            />
            <div
                class="ms-2 flex-grow-1 completed"
                title="Double click the text to edit or remove"
                :class="completedClass"
            >
                <!-- <div class="relative">
                    <input class="editable-tasks" type="text" />
                </div> -->
                <span>{{ task.name }}</span>
            </div>
            <!--                                    <div class="tasks-date">24 Feb 12:00</div>-->
        </div>
        <div class="task-actions">
            <button
                class="btn btn-sm btn-circle btn-outline-secondary me-1"
            >
                <IconPencil />
            </button>
            <button
                class="btn btn-sm btn-circle btn-outline-danger"
            >
                <IconTrash />
            </button>
        </div>
    </li>
</template>

<script setup>
import IconPencil from "../icons/IconPencil.vue";
import IconTrash from "../icons/IconTrash.vue";
import {computed} from "vue";

const props = defineProps({
    task: Object
})

const completedClass = computed(() => props.task.is_completed ? "completed" : "")

</script>

<style scoped>

</style>