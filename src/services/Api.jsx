import { AXIOS } from "./Axios"

export const API = {
    async reqAPI (valueSearch){
        const json = await AXIOS.get("/search", {
                params: { q: valueSearch },
            })
        const { data: { data: listMusic } } = json
        return listMusic
    },

    getDataByAPI(data) {
        const informations = []
        data.forEach(obj => {
            const { title_short, duration, preview, artist: { name, picture_small, picture_medium } } = obj
            const info = {
                id: crypto.randomUUID(),
                title_short: title_short,
                duration: duration,
                artist_name: name,
                preview: preview,
                picture_small: picture_small,
                picture_medium: picture_medium
            }
            informations.push(info)
        })
        return informations
    },

    async resDataByListenedAlbuns(search) {
        const data = await this.reqAPI(search)
        return this.getDataByAPI(data)
    }
}