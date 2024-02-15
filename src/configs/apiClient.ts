import { user } from '@/composables/useUser'
import { router } from '@/routes'
import { StorageService } from '@/services/StorageService'
import axios, { AxiosError } from 'axios'

const authURLS = ['/register', '/login']

export function handeAxiosError(error: unknown, message: string = '') {
    if (error instanceof AxiosError) {
        console.log(error.response?.data)
    }
}

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URI,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

apiClient.interceptors.request.use((config) => {
    if (config.url && !authURLS.includes(config.url)) {
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
