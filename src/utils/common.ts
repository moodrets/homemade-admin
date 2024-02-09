export function wait(ms: number, rejectOption: boolean = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (rejectOption) {
                reject('reject')
            } else {
                resolve('')
            }
        }, ms)
    })
}
