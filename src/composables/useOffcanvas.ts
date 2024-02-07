import { ref } from 'vue'

export type OffcanvasListItem = {
    [name: string]: {
        visible: boolean
    }
}

class OffcanvasController {
    public list = ref<OffcanvasListItem>({})

    public register(offcanvasName: string) {
        this.list.value[offcanvasName] = {
            visible: false,
        }
    }

    public toggle(offcanvasName: string) {
        if (this.isVisible(offcanvasName)) {
            this.close(offcanvasName)
        } else {
            this.open(offcanvasName)
        }
    }

    public close(offcanvasName: string) {
        let existModal = this.list.value[offcanvasName]
        if (existModal) {
            existModal.visible = false
            document.body.classList.remove('is-offcanvas-visible')
        }
    }

    public open(offcanvasName: string) {
        let existModal = this.list.value[offcanvasName]
        if (existModal) {
            existModal.visible = true
            document.body.classList.add('is-offcanvas-visible')
        }
    }

    public isVisible(offcanvasName: string) {
        let existModal = this.list.value[offcanvasName]
        if (existModal) {
            return existModal.visible
        }
        return false
    }

    public closeAll() {
        for (const offcanvasName in this.list.value) {
            this.list.value[offcanvasName].visible = false
        }
    }
}

const offcanvasController = new OffcanvasController()

export { offcanvasController }
