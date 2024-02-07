// styles
import 'material-icons/iconfont/material-icons.css'
import 'material-icons/iconfont/filled.css'
import 'material-icons/iconfont/outlined.css'
import '@/styles/main.scss'

// vue imports
import { createApp } from 'vue'
import { router } from '@/routes'

// components
import App from '@/components/App.vue'
import Modal from '@/components/ui/Modal.vue'
import Offcanvas from '@/components/ui/Offcanvas.vue'
import SvgIcon from '@/components/ui/SvgIcon.vue'

createApp(App)
    .use(router)
    .component('Modal', Modal)
    .component('Offcanvas', Offcanvas)
    .component('SvgIcon', SvgIcon)
    .mount('#app')

document.fonts.onloadingdone = () => {
    document.querySelector('.app-wrapper')?.classList.add('is-app-loaded')
}
