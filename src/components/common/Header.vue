<template>
    <header
        class="app-header border-b border-stone-300 sticky top-0 z-[40] flex gap-4 justify-between items-center py-3 px-5 bg-white"
    >
        <div
            class="app-mobile-menu cursor-pointer xl:hidden"
            @click="offcanvasController.open('mobileMenu')"
        >
            <span class="material-icons block text-indigo-400 text-[40px]">menu</span>
        </div>
        <div class="app-logo">
            <router-link :to="{ name: 'dashboard' }" class="block">
                <img class="block max-w-[40px]" :src="`${ROUTER_PATH}img/logo.svg`" alt="" />
            </router-link>
        </div>
        <router-link
            class="w-10 h-10 border flex items-center justify-center border-stone-300 rounded-full overflow-hidden bg-indigo-50"
            :to="{ name: 'profile' }"
        >
            <img class="object-cover" :src="`${ROUTER_PATH}img/avatar-default.svg`" alt="" />
        </router-link>
    </header>
</template>

<script setup lang="ts">
import { offcanvasController } from '@/composables/useOffcanvas'
import { ROUTER_PATH } from '@/configs/paths'
</script>
