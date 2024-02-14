// styles
import 'material-icons/iconfont/material-icons.css'
import 'material-icons/iconfont/filled.css'
import 'material-icons/iconfont/outlined.css'
import '@/styles/main.scss'

// vue imports
import { createApp } from 'vue'
import { router } from '@/routes'
import { i18n } from '@/configs/i18n'

// components
import App from '@/components/App.vue'
import Modal from '@/components/ui/Modal.vue'
import Offcanvas from '@/components/ui/Offcanvas.vue'
import SvgIcon from '@/components/ui/SvgIcon.vue'
import Button from '@/components/ui/Button.vue'

createApp(App)
    .use(router)
    .use(i18n)
    .component('Modal', Modal)
    .component('Button', Button)
    .component('Offcanvas', Offcanvas)
    .component('SvgIcon', SvgIcon)
    .mount('#app')
