import { $host } from "."

export const fetchSubunitsForUnit = async (unitId) => {
    const {data} = await $host.get('api/unit/findSubunits/')
    return data
}

export const fetchDeaneries = async () => {
    const {data} = await $host.get('api/unit/findDeaneries')
    return data
}