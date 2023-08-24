export function getSurname(string) {
    return string.split(' ').slice(0,1)
}

export function getNames(string) {
    return string.split(' ').slice(-2).join(' ')
}