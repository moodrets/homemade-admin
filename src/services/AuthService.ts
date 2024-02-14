import { AxiosResponse } from 'axios'
import { apiClient } from '@/configs/apiClient'
import { router } from '@/routes'
import { LoginDTO } from '@/types/LoginDTO'
import { LoginResponseType } from '@/types/LoginResponse'
import { StorageService } from '@/services/StorageService'
import { user } from '@/composables/useUser'

class AuthService {
    public register() {}

    public async login(dto: LoginDTO): Promise<AxiosResponse<LoginResponseType>> {
        return await apiClient.post('/login', dto)
    }

    public async logout(): Promise<void> {
        try {
            await apiClient.post('/logout')
        } catch (error) {
            console.error(error)
        }

        user.clearData()
        StorageService.remove('userData')
        router.push({ name: 'login' })
    }
}

const authService = new AuthService()

export { authService }
