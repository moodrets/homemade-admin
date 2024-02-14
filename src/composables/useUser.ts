import { ref } from 'vue'
import { UserType } from '@/types/User'
import { TeamType } from '@/types/Team'
import { LoginResponseType } from '@/types/LoginResponse'
import { StorageService } from '@/services/StorageService'

class User {
    public data = ref<UserType | null>(null)
    public token = ref<string | null>(null)
    public team = ref<TeamType | null>(null)
    public isAuthorized = ref<boolean>(false)

    public checkAuth(): void {
        let storageUserData = StorageService.get<LoginResponseType>('userData')
        if (storageUserData) {
            this.data.value = storageUserData.user
            this.token.value = storageUserData.token
            this.team.value = storageUserData.team
            this.isAuthorized.value = true
        }
    }

    public setData(payload: LoginResponseType): void {
        this.data.value = payload.user
        this.token.value = payload.token
        this.team.value = payload.team
        this.isAuthorized.value = true
    }

    public clearData(): void {
        this.data.value = null
        this.token.value = null
        this.team.value = null
        this.isAuthorized.value = false
    }
}

const user = new User()

export { user }
