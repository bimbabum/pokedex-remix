export function capitalFirstLetter (word){
    const capitalLetter = word[0].toUpperCase() + word.substring(1)
    return capitalLetter.replace(/-([a-z])/g, (match,p1) => ' ' + p1.toUpperCase())
}

export function roundToFive(num, max) {
    if (max>100 ) {
        const numBase100 = num/max * 100
        return 5 * Math.round(numBase100/5)
    }
    return 5 * Math.round(num/5)
}