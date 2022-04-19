const roundViewerCount = (n: number) => {
    if (n < 1000) return `${n}`
    return `${n / 1000}K`
}

export {
    roundViewerCount
}