<template>
    <div>
        <button type="button" class="button button--danger" @click="onLogout">
            {{ $t('message.logout') }}
        </button>
    </div>
</template>

<script setup lang="ts">
import { authService } from '@/services/AuthService'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

function onLogout() {
    if (confirm('Вы уверены ?')) {
        authService.logout()
    }
}
</script>
