<template>
    <form class="relative" @submit.prevent="onSubmit">
        <div class="mb-4 flex justify-center">
            <img class="block max-w-[80px]" :src="`${ROUTER_PATH}img/logo.svg`" alt="" />
        </div>
        <div class="mb-4">
            <input
                required
                type="tel"
                maxlength="12"
                minlength="12"
                class="app-form-control"
                autocomplete="off"
                :placeholder="$t('message.phone')"
                v-model="form.fields.phone"
            />
        </div>
        <div class="mb-4 relative">
            <input
                required
                autocomplete="off"
                class="app-form-control pr-10"
                :placeholder="$t('message.password')"
                :type="form.passwordFieldType"
                v-model="form.fields.password"
            />
            <div
                class="absolute cursor-pointer z-[5] right-3 top-1/2 -translate-y-1/2"
                @click="changePasswordFieldToText('passwordFieldType')"
            >
                <span class="block material-icons text-gray-400"
                    >{{ form.passwordFieldType === 'password' ? 'visibility' : 'visibility_off' }}
                </span>
            </div>
        </div>
        <div class="mb-4 relative">
            <input
                required
                autocomplete="off"
                class="app-form-control pr-10"
                :placeholder="$t('message.confirmPassword')"
                :type="form.confirmPasswordFieldType"
                v-model="form.fields.confirmPassword"
            />
            <div
                class="absolute cursor-pointer z-[5] right-3 top-1/2 -translate-y-1/2"
                @click="changePasswordFieldToText('confirmPasswordFieldType')"
            >
                <span class="block material-icons text-gray-400">
                    {{
                        form.confirmPasswordFieldType === 'password'
                            ? 'visibility'
                            : 'visibility_off'
                    }}
                </span>
            </div>
        </div>
        <div class="mb-4 flex gap-4">
            <Button theme="success" type="submit" class="flex-1" :loading="form.loading">
                {{ $t('message.register') }}
            </Button>
            <router-link :to="{ name: 'login' }" class="button button--primary">
                {{ $t('message.login') }}
            </router-link>
        </div>
    </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { toast } from '@/composables/useToast'
import { useRouter } from 'vue-router'
import { authService } from '@/services/AuthService'
import { user } from '@/composables/useUser'
import { StorageService } from '@/services/StorageService'
import { useI18n } from 'vue-i18n'
import { ROUTER_PATH } from '@/configs/paths'

const { t } = useI18n()

const router = useRouter()

const form = reactive({
    loading: false,
    fields: {
        phone: '',
        password: '',
        confirmPassword: '',
    },
    passwordFieldType: 'password',
    confirmPasswordFieldType: 'password',
})

function changePasswordFieldToText(fieldName: 'passwordFieldType' | 'confirmPasswordFieldType') {
    form[fieldName] = form[fieldName] === 'text' ? 'password' : 'text'
}

async function onSubmit() {
    if (form.fields.password !== form.fields.confirmPassword) {
        toast.show('error', t('errors.passworsdMismatch'))
        return
    }

    try {
        form.loading = true

        // const { data: result } = await authService.register({
        //     phone_number: form.fields.phone,
        //     password: form.fields.password,
        // })

        // user.setData(result)
        // StorageService.set('userData', result)

        // router.push({ name: 'dashboard' })
    } catch (error: unknown) {
        // toast.show('error', t('errors.badCredentials'))
    } finally {
        form.loading = false
    }
}
</script>
