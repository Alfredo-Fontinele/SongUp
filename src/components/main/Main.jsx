import * as S from './style'
import { Search } from '../sections/search/Search'
import { Favorites } from '../sections/favorites/Favorites'
import { ListenedAlbuns } from '../sections/listened_albuns/ListenedAlbuns'
import { Treding } from '../sections/treding/Treding'
import { useState, useEffect } from 'react'
import { API } from '../../services/Api'
import { FavoriteEmpty } from '../sections/favorites/favorite_empty'
import { Loading } from '../../animations/loading/'

export const Main = ({ setStatusPlaylist }) => {
    const [loading, setLoading] = useState(true)
    const [userSearch, setUserSearch] = useState([])
    const [listenedAlbuns, setListenedAlbuns] = useState([])
    const [treding, setTreding] = useState([])
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        (async() => {
            const dataListenedAlbum = await API.reqAPI('eminem')
            const dataTreding = await API.reqAPI('justin bieber')
            const infoListenedAlbum = API.getDataByAPI(dataListenedAlbum)
            const infoTreding = API.getDataByAPI(dataTreding)
            setListenedAlbuns(infoListenedAlbum)
            setTreding(infoTreding)
        })()
    }, [])

    return (
        <S.Main>
            <Search
                setStatusPlaylist={setStatusPlaylist}
                setListenedAlbuns={setListenedAlbuns}
                setTreding={setTreding}
            />
            {(listenedAlbuns.length < 1) ? (
                <Loading/>
            ) : (
                <>
                    <ListenedAlbuns section={listenedAlbuns}/>
                    <Treding section={treding} favorites={favorites} setFavorites={setFavorites}/>
                    {(favorites.length === 0) ? (
                        <FavoriteEmpty/>
                    ) : (
                        <Favorites favorites={favorites}/>
                    )}
                </>
            )}
        </S.Main>
    )
}
