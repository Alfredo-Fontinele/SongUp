import { AXIOS } from "./Axios"

export const API = {

    async reqAPI (valueSearch){
        const json = await AXIOS.get("/search", {
                params: { q: valueSearch },
            })
        const { data: { data: listMusic } } = json
        console.log(listMusic)

        return listMusic
    },

    async resDataByListenedAlbuns(search) {
        const informations = []
        const data = await this.reqAPI(search)
        data.forEach(obj => {
            const { title_short, duration, artist: { name, picture_medium} } = obj
            const info = {
                title_short: title_short,
                duration: duration,
                artist_name: name,
                img: picture_medium
            }
            informations.push(info)
        })
        return informations
    }
}