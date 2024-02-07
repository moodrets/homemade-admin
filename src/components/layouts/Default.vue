<template>
    <Header class="col-span-2" />
    <aside class="bg-indigo-50 border-r border-stone-300 p-5 hidden xl:block"></aside>
    <main class="p-5">
        <router-view />
    </main>
</template>

<script setup lang="ts">
import Header from '@/components/common/Header.vue'
</script>
