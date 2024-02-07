<template>
    <form @submit.prevent="onSubmit">
        <div class="mb-4 flex justify-center">
            <img class="block max-w-[80px]" :src="`${routerPath}img/logo.svg`" alt="" />
        </div>
        <div class="mb-4">
            <input required type="email" class="app-form-control" placeholder="Email" />
        </div>
        <div class="mb-4 relative">
            <input
                required
                :type="form.passwordFieldType"
                class="app-form-control pr-8"
                placeholder="Пароль"
            />
            <div
                class="absolute cursor-pointer z-[5] right-3 top-1/2 -translate-y-1/2"
                @click="changePasswordFieldToText"
            >
                <span class="block material-icons text-gray-400"
                    >{{ form.passwordFieldType === 'password' ? 'visibility' : 'visibility_off' }}
                </span>
            </div>
        </div>
        <div>
            <button class="app-button app-button--primary w-full">Войти</button>
        </div>
    </form>
</template>

<script setup lang="ts">
import { routerPath } from '@/routes'
import { reactive } from 'vue'

const form = reactive({
    fields: {},
    passwordFieldType: 'password',
})

function changePasswordFieldToText() {
    form.passwordFieldType = form.passwordFieldType === 'text' ? 'password' : 'text'
}

function onSubmit() {}
</script>
