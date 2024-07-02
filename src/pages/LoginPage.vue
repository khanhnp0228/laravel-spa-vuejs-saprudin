<template>
    <main class="auth-wrapper">
        <form class="auth-form" @submit.prevent="handleSubmit">
            <h1>ToeDoe</h1>
            <strong>List</strong>
            <h2 class="h3 mb-4 fw-normal">Please sign in</h2>
            <div class="form-floating mb-2">
                <input type="email" name="" id="email" class="form-control" placeholder="name@example.com"
                    v-model="form.email"
                />
                <label for="email">Email</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" name="" id="password" class="form-control" placeholder="Password"
                    v-model="form.password"
                />
                <label for="password">Password</label>
            </div>

            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    </main>
</template>

<script setup>
import { useRouter } from 'vue-router';
import {reactive} from "vue";
import {useAuthStore} from "../stores/auth";

const store = useAuthStore()
const { user, handleLogin } = store

const router = useRouter()

const form = reactive({
    email: null,
    password: null
})

const handleSubmit = async () => {
    await handleLogin(form)
    router.push({name: 'tasks'})
}
</script>

<style scoped>
    .auth-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        min-height: 60vh;
        margin-top: 2rem;
    }

    .auth-form {
        width: 400px;
    }
</style>