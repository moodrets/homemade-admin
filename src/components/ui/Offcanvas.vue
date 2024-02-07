<template>
    <div
        class="offcanvas"
        :class="{ 'is-open': offcanvasController.isVisible(name) }"
        @click="clickHandler"
    >
        <div class="offcanvas__body"></div>
    </div>
</template>

<script setup lang="ts">
import { offcanvasController } from '@/composables/useOffcanvas'

const { name } = defineProps<{
    name: string
}>()

offcanvasController.register(name)

function clickHandler(event: Event) {
    if ((event.target as HTMLElement).classList.contains('offcanvas')) {
        offcanvasController.close(name)
    }
}
</script>

<style lang="scss">
.offcanvas {
    @apply fixed
        z-[60]
        left-0
        right-0
        top-0
        bottom-0
        bg-black
        bg-opacity-30
        transition-all
        duration-150
        opacity-0
        pointer-events-none
        backdrop-blur-sm;

    &__body {
        @apply shadow-md
            w-[var(--app-offcanvas-width)]
            p-5
            h-full
            overflow-y-auto
            bg-white;
    }

    &.is-open {
        @apply opacity-100 pointer-events-auto;
    }
}
</style>
