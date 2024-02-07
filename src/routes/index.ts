const routerPath = import.meta.env.MODE === 'development' ? '/' : '/homemade-admin/'

import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

// layouts
import DefaultLayout from '@/components/layouts/Default.vue'

// views
import NotFound from '@/components/views/NotFound.vue'
import Dashboard from '@/components/views/Dashboard.vue'
import Profile from '@/components/views/Profile.vue'
import Styles from '@/components/views/Styles.vue'
import Login from '@/components/views/Login.vue'

const routes: RouteRecordRaw[] = [
    {
        path: routerPath,
        component: DefaultLayout,
        children: [
            {
                path: '',
                name: 'dashboard',
                component: Dashboard,
            },
            {
                path: 'profile',
                name: 'profile',
                component: Profile,
            },
            {
                path: 'styles',
                name: 'styles',
                component: Styles,
            },
        ],
    },
    {
        path: `${routerPath}login`,
        component: Login,
    },
    // 404
    {
        path: '/:pathMatch(.*)*',
        component: DefaultLayout,
        children: [
            {
                path: '',
                component: NotFound,
                name: 'not-found',
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: 'is-active-link',
    scrollBehavior() {
        return { top: 0 }
    },
})

router.beforeEach(() => {})

router.afterEach(() => {})

export { router, routerPath }
