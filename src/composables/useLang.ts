import { ref } from 'vue'
import { i18n } from '@/configs/i18n'
import { StorageService } from '@/services/StorageService'

const localeFromStorage = StorageService.get<string>('currentLang')

class AppLang {
    static current = ref<string>(localeFromStorage || 'ru')

    static change(locale: string) {
        AppLang.current.value = locale
        i18n.global.locale.value = locale as any
        StorageService.set('currentLang', locale)
    }
}

export { AppLang }
