<template>
    <div class="app-layout">
        <Header class="col-span-2" />
        <aside class="bg-indigo-50 border-r border-stone-300 p-5 hidden xl:block"></aside>
        <main class="p-5">
            <router-view />
        </main>
    </div>
    <Offcanvas name="mobileMenu">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eaque deserunt
            delectus optio doloremque, magni nemo sed ipsa, eum sapiente veritatis debitis porro
            temporibus saepe laudantium reiciendis neque repellat corrupti.
        </p>
    </Offcanvas>
</template>

<script setup lang="ts">
import Header from '@/components/common/Header.vue'
</script>

<style lang="scss">
.app-layout {
    @screen xl {
        display: grid;
        grid-template-columns: var(--app-aside-width) 1fr;
        grid-template-rows: auto 1fr;
        @apply min-h-dvh;
    }
}
</style>
