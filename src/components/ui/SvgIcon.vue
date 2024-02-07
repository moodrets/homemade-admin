<template>
    <div class="svg-icon" :class="`svg-icon--${name}`">
        <svg><use :xlink:href="`${routerPath}svg-sprite.svg#${name}`"></use></svg>
    </div>
</template>

<script setup lang="ts">
import { routerPath } from '@/routes'

const { name } = defineProps<{
    name: string
}>()
</script>

<style lang="scss">
.svg-icon {
    @apply flex-none
        w-6
        h-6
        inline-block
        fill-[currentColor];

    svg {
        @apply block
            w-[inherit]
            h-[inherit]
            fill-[inherit]
            stroke-[inherit];
    }

    &--stroke {
        @apply fill-none 
            stroke-current;
    }

    &--nostyle {
        @apply fill-none 
            stroke-none;
    }
}
</style>
