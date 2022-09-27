export function convertMinutesToHourString(minutesAmount: number) {
    let hours = Math.floor(minutesAmount / 60)
    const minutes = minutesAmount % 60

    if (hours >= 24) {
        hours -= 24
    }
    
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
} 