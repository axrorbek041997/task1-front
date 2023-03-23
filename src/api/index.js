import axios from 'axios'

const url = 'https://ws.biznestadbir.uz/api/items/'

export const create = async (data) => {
    return await axios.post(url, data).then(res => {
        return res
    })
}

export const fetchGet = async (page = 1) => {
    return await axios.get(url + `?page=${page}`)
}