export const API__MUSIC = {
    
    searchValue: "",
    baseURL: "https://deezerdevs-deezer.p.rapidapi.com/search",

    async reqAPI (search) {
        const json = await axios.get(API__MUSIC.baseURL, {
                params: { q: search },
                headers: {
                    'X-RapidAPI-Key': 'b6747fe123msha76405e66d5b042p1d8809jsnee1a35cfb206',
                    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
                }
            })
        const { data: { data: listMusic } } = json
        return listMusic
        // data.forEach(info => {
        //   const { 
        //     title_short, 
        //     duration, 
        //     artist: { 
        //       name, 
        //       picture_small
        //     } 
        //   } = info
        //   const card = API__MUSIC.createCard(picture_small, title_short, name, duration)
        //   // console.log(info)
        // })
    },

    setSearchValue(newValue) {
        this.searchValue = newValue
    },
    
    createCard(picture_small, title_short, name, duration) {
        const li = document.createElement("li")
    
        const img = document.createElement("img")
        img.src = picture_small
        img.alt = picture_small
    
        const h2 = document.createElement("h2")
        h2.innerText = title_short
    
        const h3 = document.createElement("h3")
        h3.innerText = name
    
        const span = document.createElement("span")
        span.innerText = `${duration} segundos`
        
        li.append(img, h2, h3, span)
        return li
    },

}
