<template>
    <div class="centered">
        <div class="flex flex-wrap gap-5 mb-10">
            <button class="app-button" @click="modalController.toggle('testModal')">
                call modal test
            </button>
            <button class="app-button" @click="modalController.toggle('someModal')">
                call modal some
            </button>
        </div>
        <div class="flex flex-wrap gap-5 mb-10">
            <button type="button" class="app-button app-button--primary">button primary</button>
            <button type="button" class="app-button app-button--neutral">button neutral</button>
            <button type="button" class="app-button app-button--success">button success</button>
            <button type="button" class="app-button app-button--danger">button danger</button>
            <button type="button" class="app-button app-button--warning">button warning</button>
            <button type="button" class="app-button app-button--info">button info</button>
            <button type="button" class="app-button app-button--primary" disabled>
                button disabled
            </button>
        </div>
        <div class="flex flex-wrap gap-5 mb-10">
            <button type="button" class="app-button app-button--rounded app-button--primary">
                button primary
            </button>
            <button type="button" class="app-button app-button--rounded app-button--neutral">
                button neutral
            </button>
            <button type="button" class="app-button app-button--rounded app-button--success">
                button success
            </button>
            <button type="button" class="app-button app-button--rounded app-button--danger">
                button danger
            </button>
            <button type="button" class="app-button app-button--rounded app-button--warning">
                button warning
            </button>
            <button type="button" class="app-button app-button--rounded app-button--info">
                button info
            </button>
            <button
                type="button"
                class="app-button app-button--rounded app-button--primary"
                disabled
            >
                button disabled
            </button>
        </div>
        <div class="flex flex-wrap gap-5 mb-10">
            <button type="button" class="app-button app-button--sm app-button--primary">
                button primary
            </button>
            <button type="button" class="app-button app-button--sm app-button--neutral">
                button neutral
            </button>
            <button type="button" class="app-button app-button--sm app-button--success">
                button success
            </button>
            <button type="button" class="app-button app-button--sm app-button--danger">
                button danger
            </button>
            <button type="button" class="app-button app-button--sm app-button--warning">
                button warning
            </button>
            <button type="button" class="app-button app-button--sm app-button--info">
                button info
            </button>
            <button type="button" class="app-button app-button--sm app-button--primary" disabled>
                button disabled
            </button>
        </div>

        <Modal name="testModal">
            <strong class="block mb-5">test modal</strong>
            <p v-for="_ in 20">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur
                qui dolores quam soluta sed placeat exercitationem, veniam voluptatem enim
                consectetur temporibus nesciunt harum id aspernatur ipsum amet ad adipisci.
            </p>
        </Modal>
        <Modal name="someModal">
            <strong class="block mb-5">some modal</strong>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur qui
            dolores quam soluta sed placeat exercitationem, veniam voluptatem enim consectetur
            temporibus nesciunt harum id aspernatur ipsum amet ad adipisci.
        </Modal>
    </div>
</template>

<script setup lang="ts">
import { modalController } from '@/composables/useModal'
</script>
