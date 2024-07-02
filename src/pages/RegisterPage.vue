<template>
    <main class="auth-wrapper">
        <form class="auth-form" @submit.prevent="handleSubmit">
            <h1>ToeDoe</h1>
            <strong>List</strong>
            <h2 class="h3 mb-4 fw-normal">Please sign up</h2>
            <div class="form-floating mb-2">
                <input type="text" name="" id="name" class="form-control" placeholder="Your name"
                       v-model="form.name"
                       :class="{ 'is-invalid': errors.name && errors.name[0] }"
                />
                <label for="name">Name</label>
                <div class="invalid-feedback" v-if="errors.name && errors.name[0]">
                    {{ errors.name && errors.name[0] }}
                </div>
            </div>
            <div class="form-floating mb-2">
                <input type="email" name="" id="email" class="form-control" placeholder="name@example.com"
                       v-model="form.email"
                       :class="{ 'is-invalid': errors.email && errors.email[0] }"
                />
                <label for="email">Email</label>
                <div class="invalid-feedback" v-if="errors.email && errors.email[0]">
                    {{ errors.email && errors.email[0] }}
                </div>
            </div>
            <div class="form-floating mb-3">
                <input type="password" name="" id="password" class="form-control" placeholder="Password"
                       v-model="form.password"
                       :class="{ 'is-invalid': errors.password && errors.password[0] }"
                />
                <label for="password">Password</label>
                <div class="invalid-feedback" v-if="errors.password && errors.password[0]">
                    {{ errors.password && errors.password[0] }}
                </div>
            </div>

            <div class="form-floating mb-3">
                <input type="password" name="" id="password_confirmation" class="form-control" placeholder="Password Confirmation"
                       v-model="form.password_confirmation"
                />
                <label for="password_confirmation">Password Confirmation</label>
            </div>

            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
        </form>
    </main>
</template>

<script setup>
import { useRouter } from 'vue-router';
import {reactive} from "vue";
import {useAuthStore} from "../stores/auth";
import {storeToRefs} from "pinia";

const store = useAuthStore()
const { isLoggedIn, errors } = storeToRefs(store)
const { handleRegister } = store

const router = useRouter()

const form = reactive({
    name: null,
    email: null,
    password: null,
    password_confirmation: null,
})

const handleSubmit = async () => {
    await handleRegister(form)
    if (isLoggedIn.value){
        router.push({name: 'tasks'})
    }
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