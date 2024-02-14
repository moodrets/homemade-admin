import { StorageService } from '@/services/StorageService'
import { createI18n } from 'vue-i18n'
import { messages } from '@/configs/messages'

const localeFromStorage = StorageService.get<string>('currentLang')

const i18n = createI18n({
    legacy: false,
    locale: localeFromStorage || 'ru',
    fallbackLocale: 'en',
    messages,
})

export { i18n }
