import * as S from './Search.module.css'
import { FaSearch, FaBell, FaAngleDown } from 'react-icons/fa'
import { TbPlaylist } from 'react-icons/tb'
import { API__MUSIC } from '../../../API'
import { useState } from 'react'

export const Search = ({ setStatusPlaylist }) => {

    const [valueSearch, setValueSearch] = useState()

    const searchValue = async () => {
        API__MUSIC.setSearchValue(valueSearch)
        const result = await API__MUSIC.reqAPI(valueSearch)
        setValueSearch("")
        // console.log(result)
    }
    const tooglePlaylist = () => {
        setStatusPlaylist((value) => !value)
    }
    return (
        <section className={S.search}>
            <div className={S.camp__search}>
                <FaSearch onClick={searchValue}/>
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
        </section>
    )
}
