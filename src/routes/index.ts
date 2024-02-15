import { AUTH_PATHS, ROUTER_PATH } from '@/configs/paths'
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import { user } from '@/composables/useUser'

// layouts
import DefaultLayout from '@/components/layouts/Default.vue'

// views
import NotFound from '@/components/views/NotFound.vue'
import Login from '@/components/views/Login.vue'
import Register from '@/components/views/Register.vue'
import Styles from '@/components/views/Styles.vue'
import Dashboard from '@/components/views/Dashboard.vue'
import Profile from '@/components/views/Profile.vue'

const routes: RouteRecordRaw[] = [
    {
        path: ROUTER_PATH,
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
        path: `${ROUTER_PATH}login`,
        name: 'login',
        component: Login,
    },
    // {
    //     path: `${ROUTER_PATH}register`,
    //     name: 'register',
    //     component: Register,
    // },
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

router.beforeEach((to, from, next) => {
    if (!user.isAuthorized.value && !AUTH_PATHS.includes(to.path)) {
        next({ name: 'login' })
        return
    }

    if (user.isAuthorized.value && AUTH_PATHS.includes(to.path)) {
        next({ name: 'dashboard' })
        return
    }

    next()
})

router.afterEach(() => {})

export { router }
