import { ref } from 'vue'

export type ModalListItem = {
    [name: string]: {
        visible: boolean
    }
}

class ModalController {
    public list = ref<ModalListItem>({})

    public register(modalName: string) {
        this.list.value[modalName] = {
            visible: false,
        }
    }

    public toggle(modalName: string) {
        if (this.isVisible(modalName)) {
            this.close(modalName)
        } else {
            this.open(modalName)
        }
    }

    public close(modalName: string) {
        let existModal = this.list.value[modalName]
        if (existModal) {
            existModal.visible = false
            document.body.classList.remove('is-modal-visible')
        }
    }

    public open(modalName: string) {
        let existModal = this.list.value[modalName]
        if (existModal) {
            existModal.visible = true
            document.body.classList.add('is-modal-visible')
        }
    }

    public isVisible(modalName: string) {
        let existModal = this.list.value[modalName]
        if (existModal) {
            return existModal.visible
        }
        return false
    }

    public closeAll() {
        for (const modalName in this.list.value) {
            this.list.value[modalName].visible = false
        }
    }
}

const modalController = new ModalController()

export { modalController }
