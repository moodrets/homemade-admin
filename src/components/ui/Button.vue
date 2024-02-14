<template>
    <button
        class="button"
        :class="[
            `button--${theme ?? 'primary'}`,
            rounded ? 'button--rounded' : '',
            loading ? 'pointer-events-none' : '',
        ]"
    >
        <div v-if="loading" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div class="app-spinner w-6 h-6"></div>
        </div>
        <span :style="{ opacity: loading === true ? 0 : 100 }">
            <slot></slot>
        </span>
    </button>
</template>

<script setup lang="ts">
type ButtonThemesType = 'primary' | 'neutral' | 'success' | 'danger' | 'warning' | 'info'

const { theme } = defineProps<{
    theme?: ButtonThemesType
    loading?: boolean
    rounded?: boolean
}>()
</script>
