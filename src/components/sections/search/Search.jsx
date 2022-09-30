import * as S from './style'
import { FaSearch, FaBell, FaAngleDown } from 'react-icons/fa'
import { TbPlaylist } from 'react-icons/tb'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import { API } from '../../../services/Api'

export const Search = ({ setStatusPlaylist, setListenedAlbuns }) => {
    const [valueSearch, setValueSearch] = useState("")

    const pesquisar = async () => {
        const listenedNew = await API.resDataByListenedAlbuns(valueSearch)
        setListenedAlbuns(listenedNew)
        setValueSearch("")
    }   

    const tooglePlaylist = () => {
        setStatusPlaylist((value) => !value)
    }

    return (
        <S.Search>
            <S.Camp__Search>
                <FaSearch onClick={pesquisar}/>
                <input 
                    type="search" 
                    value={valueSearch}
                    placeholder='Search for song, artist, lyrics...' 
                    onChange={(e) => setValueSearch(e.target.value)}
                />
            </S.Camp__Search>
            <S.Profile>
                <FaBell/>
                <img src="https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png" alt="profile" />
                <span>Neto_</span>
                <FaAngleDown/>
                <TbPlaylist className="btn__playlist" onClick={tooglePlaylist}/>
            </S.Profile>
            <S.Menu__Mobile>
                <GiHamburgerMenu/>
            </S.Menu__Mobile>
        </S.Search>
    )
}
