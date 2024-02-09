import { reactive } from 'vue'

export const enum UserRolesEnum {
    Driver = 'driver',
    Admin = 'admin',
    Moderator = 'moderator',
}

class User {
    public data = reactive({})

    public login() {}

    public logout() {}
}

const user = new User()

export { user }
