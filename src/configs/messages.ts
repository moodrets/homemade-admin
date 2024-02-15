type TranslateMessagesType = Record<
    string,
    {
        message: {
            login: string
            logout: string
            register: string
            phone: string
            password: string
            confirmPassword: string
        }
        errors: {
            badCredentials: string
            passworsdMismatch: string
            serverError: string
        }
    }
>

const messages: TranslateMessagesType = {
    en: {
        message: {
            login: 'Sign in',
            logout: 'Logout',
            register: 'Register',
            phone: 'Phone',
            password: 'Password',
            confirmPassword: 'Confirm password',
        },
        errors: {
            badCredentials: 'Bad credentials',
            passworsdMismatch: 'Password mismatch',
            serverError: 'Server error',
        },
    },
    ru: {
        message: {
            login: 'Войти',
            logout: 'Выйти',
            register: 'Зарегистрироваться',
            phone: 'Телефон',
            password: 'Пароль',
            confirmPassword: 'Подтвердите пароль',
        },
        errors: {
            badCredentials: 'Переданы неверные данные',
            passworsdMismatch: 'Пароли не совпадают',
            serverError: 'Ошибка сервера',
        },
    },
    uz: {
        message: {
            login: 'Kirish',
            logout: 'Chiqish',
            register: 'Registratsiya kilish',
            phone: 'Telefon',
            password: 'Parol',
            confirmPassword: 'Parolni tasdiqlang',
        },
        errors: {
            badCredentials: 'Login yoqi parol notog`ri',
            passworsdMismatch: 'Parollar mos kelmayapti',
            serverError: 'Server hatosi',
        },
    },
}

export { messages }
