import { $host } from "."

export const fetchSubunitsForUnit = async (unitId) => {
    const {data} = await $host.get('api/unit/findSubunits/' + unitId)
    return data
}

export const fetchDeaneries = async () => {
    const {data} = await $host.get('api/unit/findDeaneries')
    return data
}

export const fetchChairs = async () => {
    const {data} = await $host.get('api/unit/findChairs')
    return data
}