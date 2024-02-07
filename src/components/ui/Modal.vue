<template>
    <div
        class="app-modal"
        tabindex="-1"
        ref="modalRef"
        :class="{ 'is-open': modalController.isVisible(name) }"
        @keydown.esc="modalController.close(name)"
        @click="clickHandler"
    >
        <div class="app-modal__body" :style="{ width: width || '480px' }">
            <div class="app-modal__close" @click="modalController.close(name)">
                <SvgIcon name="close"></SvgIcon>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onUpdated } from 'vue'
import { modalController } from '@/composables/useModal'

const modalRef = ref<HTMLElement>()

const { name, width } = defineProps<{
    name: string
    width?: string
}>()

modalController.registerModal(name)

function clickHandler(event: Event) {
    if ((event.target as HTMLElement).classList.contains('app-modal')) {
        modalController.close(name)
    }
}

onUpdated(() => {
    if (modalController.isVisible(name)) {
        modalRef?.value?.focus()
    } else {
        modalRef?.value?.blur()
    }
})
</script>

<style lang="scss">
.app-modal {
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
        flex
        p-5
        overflow-y-auto
        backdrop-blur-sm;

    &__body {
        @apply shadow-md relative m-auto bg-white p-5 max-w-full min-h-[200px];
    }

    &__close {
        @apply cursor-pointer absolute right-3 top-3;
    }

    &.is-open {
        @apply opacity-100 pointer-events-auto;
    }
}
</style>
