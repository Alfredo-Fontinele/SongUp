import axios from 'axios'

export const AXIOS = axios.create({
    baseURL: "https://deezerdevs-deezer.p.rapidapi.com",
    timeout: 5000,
    headers: {
        'X-RapidAPI-Key': 'b6747fe123msha76405e66d5b042p1d8809jsnee1a35cfb206',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
})