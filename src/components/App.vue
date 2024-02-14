<template>
    <router-view />
</template>

<script lang="ts" setup>
import { user } from '@/composables/useUser'

user.checkAuth()
</script>
