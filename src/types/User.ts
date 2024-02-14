export const enum UserRolesEnum {
    Driver = 'driver',
    Admin = 'admin',
    Moderator = 'moderator',
}

export type UserType = {
    id: number
    name: string
    phone_number: string
    phone_number_verified_at: string | null
    current_team_id: number | null
    profile_photo_path: string | null
    created_at: string | Date
    updated_at: string | Date
}
