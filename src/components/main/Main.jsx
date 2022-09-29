import * as S from './Main.module.css'
import { Search } from '../sections/search/Search'
import { Favorites } from '../sections/favorites/Favorites'
import { ListenedAlbuns } from '../sections/listened_albuns/ListenedAlbuns'
import { Treding } from '../sections/treding/Treding'
import { useState, useEffect } from 'react'
import { API } from '../../services/Api'

export const Main = ({ setStatusPlaylist }) => {
    const [userSearch, setUserSearch] = useState([])
    const [listenedAlbuns, setListenedAlbuns] = useState([])
    const [treding, setTreding] = useState([])

    useEffect(() => {
        const requisition = async() => {
            const data = await API.reqAPI('eminem')
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
            setListenedAlbuns(dados)
        }
        requisition()
    }, [])

    return (
        <main className={S.main}>
            <Search 
                setStatusPlaylist={setStatusPlaylist}
                setListenedAlbuns={setListenedAlbuns}
            />
            <ListenedAlbuns listenedAlbuns={listenedAlbuns}/>
            <Treding/>
            <Favorites/>
        </main>
    )
}
