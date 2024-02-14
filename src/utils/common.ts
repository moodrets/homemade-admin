export function wait(ms: number, rejectOption: boolean = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            rejectOption ? reject('reject') : resolve('resolve')
        }, ms)
    })
}
