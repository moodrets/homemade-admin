<template>
    <header
        class="app-header border-b border-stone-300 sticky top-0 z-[40] flex items-center py-3 px-5 bg-white"
    >
        <div>
            <router-link :to="{ name: 'dashboard' }">
                <img class="block max-w-[40px]" :src="`${routerPath}img/logo.svg`" alt="" />
            </router-link>
        </div>
        <router-link
            class="ml-auto block w-10 h-10 border border-stone-300 rounded-full overflow-hidden bg-indigo-50"
            :to="{ name: 'profile' }"
        ></router-link>
    </header>
</template>

<script setup lang="ts">
import { routerPath } from '@/routes'
</script>
