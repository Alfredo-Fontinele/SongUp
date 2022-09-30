import * as S from './style'
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

    useEffect(() => {
        const requisition = async() => {
            const data = await API.reqAPI('justin bieber')
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
            setTreding(dados)
        }
        requisition()
    }, [])

    return (
        <S.Main>
            <Search 
                setStatusPlaylist={setStatusPlaylist}
                setListenedAlbuns={setListenedAlbuns}
            />
            <ListenedAlbuns section={listenedAlbuns}/>
            <Treding section={treding}/>
            <Favorites/>
        </S.Main>
    )
}
