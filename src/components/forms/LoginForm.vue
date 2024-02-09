<template>
    <form class="relative" @submit.prevent="onSubmit">
        <div class="mb-4 flex justify-center">
            <img class="block max-w-[80px]" :src="`${routerPath}img/logo.svg`" alt="" />
        </div>
        <div class="mb-4">
            <input required type="email" class="app-form-control" placeholder="Email" />
        </div>
        <div class="mb-4 relative">
            <input
                required
                autocomplete="on"
                :type="form.passwordFieldType"
                class="app-form-control pr-10"
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
        <Button type="submit" class="w-full" :loading="form.loading">Войти</Button>
    </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { routerPath } from '@/routes'
import { wait } from '@/utils/common'

const router = useRouter()

const form = reactive({
    loading: false,
    fields: {},
    passwordFieldType: 'password',
})

function changePasswordFieldToText() {
    form.passwordFieldType = form.passwordFieldType === 'text' ? 'password' : 'text'
}

async function onSubmit() {
    try {
        form.loading = true

        await wait(3000)

        router.push({ name: 'dashboard' })
    } catch (error) {
    } finally {
        form.loading = false
    }
}
</script>
