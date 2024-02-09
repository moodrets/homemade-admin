<template>
    <div class="centered">
        <section class="mb-10">
            <h2 class="font-bold text-[28px] mb-6">Spinners</h2>
            <div class="flex flex-wrap gap-5">
                <div class="app-spinner"></div>
                <div class="app-spinner text-emerald-400"></div>
                <div class="app-spinner text-rose-500"></div>
            </div>
        </section>

        <section class="mb-10">
            <h2 class="font-bold text-[28px] mb-6">Toasts (notifications)</h2>
            <div class="flex flex-wrap gap-5">
                <button type="button" class="app-button" @click="showToast('')">
                    toast default
                </button>
                <button
                    type="button"
                    class="app-button app-button--info"
                    @click="showToast('info')"
                >
                    toast info
                </button>
                <button
                    type="button"
                    class="app-button app-button--success"
                    @click="showToast('success')"
                >
                    toast success
                </button>
                <button
                    type="button"
                    class="app-button app-button--warning"
                    @click="showToast('warning')"
                >
                    toast warning
                </button>
                <button
                    type="button"
                    class="app-button app-button--danger"
                    @click="showToast('error')"
                >
                    toast error
                </button>
                <div class="w-full"></div>
                <button
                    type="button"
                    class="app-button app-button--info"
                    @click="showToast('info', 'top-left')"
                >
                    toast top left
                </button>
                <button
                    type="button"
                    class="app-button app-button--success"
                    @click="showToast('success', 'top-right')"
                >
                    toast top right
                </button>
                <button
                    type="button"
                    class="app-button app-button--warning"
                    @click="showToast('warning', 'top-center')"
                >
                    toast top center
                </button>
                <button
                    type="button"
                    class="app-button app-button--danger"
                    @click="showToast('error', 'bottom-center')"
                >
                    toast bottom center
                </button>
                <button
                    type="button"
                    class="app-button app-button--info"
                    @click="showToast('info', 'bottom-left')"
                >
                    toast error bottom left
                </button>
            </div>
        </section>

        <section class="mb-10">
            <h2 class="font-bold text-[28px] mb-6">Modals</h2>
            <div class="flex flex-wrap gap-5">
                <button class="app-button" @click="modalController.toggle('largeModal')">
                    modal large
                </button>
                <button class="app-button" @click="modalController.toggle('bigText')">
                    modal big text
                </button>
                <button class="app-button" @click="modalController.toggle('defaultModal')">
                    modal default
                </button>
            </div>
        </section>

        <section class="mb-10">
            <h2 class="font-bold text-[28px] mb-6">Buttons</h2>
            <div class="flex flex-wrap gap-5">
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
        </section>

        <section class="mb-10">
            <h2 class="font-bold text-[28px] mb-6">Buttons with icons</h2>
            <div class="flex flex-wrap gap-5">
                <button type="button" class="app-button app-button--primary">
                    <div class="material-icons-outlined">ads_click</div>
                    button primary
                </button>
                <button type="button" class="app-button app-button--neutral">
                    <div class="material-icons-outlined">airplay</div>
                    button neutral
                </button>
                <button type="button" class="app-button app-button--success">
                    button success
                    <div class="material-icons-outlined">fingerprint</div>
                </button>
                <button type="button" class="app-button app-button--danger">
                    button danger
                    <div class="material-icons-outlined">assist_walker</div>
                </button>
                <button type="button" class="app-button app-button--warning">
                    button warning
                    <div class="material-icons-outlined">cloud_upload</div>
                </button>
                <button type="button" class="app-button app-button--info">
                    button info
                    <div class="material-icons-outlined">chrome_reader_mode</div>
                </button>
                <button type="button" class="app-button app-button--primary" disabled>
                    button disabled
                    <div class="material-icons-outlined">favorite_border</div>
                </button>
            </div>
        </section>

        <section class="mb-10">
            <h2 class="font-bold text-[28px] mb-6">Rounded buttons</h2>
            <div class="flex flex-wrap gap-5">
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
        </section>

        <section class="mb-10">
            <h2 class="font-bold text-[28px] mb-6">Small buttons</h2>
            <div class="flex flex-wrap gap-5">
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
                <button
                    type="button"
                    class="app-button app-button--sm app-button--primary"
                    disabled
                >
                    button disabled
                </button>
                <div class="w-full"></div>
                <button
                    type="button"
                    class="app-button app-button--sm app-button--rounded app-button--primary"
                >
                    button primary
                </button>
                <button
                    type="button"
                    class="app-button app-button--sm app-button--rounded app-button--neutral"
                >
                    button neutral
                </button>
                <button
                    type="button"
                    class="app-button app-button--sm app-button--rounded app-button--success"
                >
                    button success
                </button>
                <button
                    type="button"
                    class="app-button app-button--sm app-button--rounded app-button--danger"
                >
                    button danger
                </button>
                <button
                    type="button"
                    class="app-button app-button--sm app-button--rounded app-button--warning"
                >
                    button warning
                </button>
                <button
                    type="button"
                    class="app-button app-button--sm app-button--rounded app-button--info"
                >
                    button info
                </button>
                <button
                    type="button"
                    class="app-button app-button--sm app-button--rounded app-button--primary"
                    disabled
                >
                    button disabled
                </button>
            </div>
        </section>

        <Modal name="largeModal" width="1280px">
            <strong class="block mb-5">modal large</strong>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur
                qui dolores quam soluta sed placeat exercitationem, veniam voluptatem enim
                consectetur temporibus nesciunt harum id aspernatur ipsum amet ad adipisci.
            </p>
        </Modal>

        <Modal name="bigText">
            <p v-for="_ in 20">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur
                qui dolores quam soluta sed placeat exercitationem, veniam voluptatem enim
                consectetur temporibus nesciunt harum id aspernatur ipsum amet ad adipisci.
            </p>
        </Modal>

        <Modal name="defaultModal">
            <strong class="block mb-5">default modal</strong>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur qui
            dolores quam soluta sed placeat exercitationem, veniam voluptatem enim consectetur
            temporibus nesciunt harum id aspernatur ipsum amet ad adipisci.
        </Modal>
    </div>
</template>

<script setup lang="ts">
import { modalController } from '@/composables/useModal'
import { toast } from '@/composables/useToast'
import { RDToastPosition } from '@/libs/RDToast'

function showToast(type: string, position: RDToastPosition = 'bottom-right') {
    toast.show(type, `${type} toast`, {
        position,
    })
}
</script>
