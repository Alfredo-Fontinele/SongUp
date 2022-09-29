import { AXIOS } from "./Axios"

export const API = {
    async reqAPI (valueSearch){
        const json = await AXIOS.get("/search", {
                params: { q: valueSearch },
            })
        const { data: { data: listMusic } } = json
        return listMusic
    },

    async resDataBySearch(search) {
        const data = await this.reqAPI(search)
        const dados = []
        data.forEach(obj => {
            const { title_short, duration, artist: { name, picture_medium} } = obj
            const info = {
                title_short: title_short,
                duration: duration,
                artist_name: name,
                img: picture_medium
            }
            dados.push(info)
        })
        return dados
    }
}