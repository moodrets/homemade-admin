class StorageService {
    static get<T>(key: string): T | null {
        let storageResult = localStorage.getItem(key)

        try {
            return JSON.parse(storageResult as string) as T
        } catch (error) {
            return storageResult as T
        }
    }

    static set(key: string, data: any): void {
        localStorage.setItem(key, JSON.stringify(data))
    }

    static remove(key: string): void {
        localStorage.removeItem(key)
    }

    static clear(): void {
        localStorage.clear()
    }
}

export { StorageService }
