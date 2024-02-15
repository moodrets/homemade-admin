import axios from 'axios'
import { user } from '@/composables/useUser'
import { router } from '@/routes'
import { StorageService } from '@/services/StorageService'
import { AUTH_PATHS } from '@/configs/paths'

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URI,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

apiClient.interceptors.request.use((config) => {
    if (config.url && !AUTH_PATHS.includes(config.url)) {
        config.headers['Authorization'] = `Bearer ${user.token.value}`
    }
    return config
})

apiClient.interceptors.response.use((response) => {
    if (response.status === 401) {
        user.clearData()
        StorageService.remove('userData')
        router.push({ name: 'login' })
    }
    return response
})

export { apiClient }
