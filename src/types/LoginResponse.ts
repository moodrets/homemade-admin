import { UserType } from '@/types/User'
import { TeamType } from '@/types/Team'

export type LoginResponseType = {
    token: string
    user: UserType
    team: TeamType
}
