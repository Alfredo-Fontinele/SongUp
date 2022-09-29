import * as S from './Search.module.css'
import { FaSearch, FaBell, FaAngleDown } from 'react-icons/fa'
import { TbPlaylist } from 'react-icons/tb'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import { API } from '../../../services/Api'

export const Search = ({ setStatusPlaylist, setListenedAlbuns }) => {
    const [valueSearch, setValueSearch] = useState("")

    const pesquisar = async () => {
        const listenedNew = await API.resDataBySearch(valueSearch)
        setListenedAlbuns(listenedNew)
        setValueSearch("")
    }   

    const tooglePlaylist = () => {
        setStatusPlaylist((value) => !value)
    }

    return (
        <section className={S.search}>
            <div className={S.camp__search} >
                <FaSearch onClick={pesquisar}/>
                <input 
                    type="search" 
                    value={valueSearch}
                    placeholder='Search for song, artist, lyrics...' 
                    onChange={(e) => setValueSearch(e.target.value)}
                />
            </div>
            <div className={S.profile}>
                <FaBell/>
                <img src="https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png" alt="profile" />
                <span>Alex Galileu Galilei</span>
                <FaAngleDown/>
                <TbPlaylist className={S.btn__playlist} onClick={tooglePlaylist}/>
            </div>
            <div className={S.menu__mobile}>
                <GiHamburgerMenu/>
            </div>
        </section>
    )
}
