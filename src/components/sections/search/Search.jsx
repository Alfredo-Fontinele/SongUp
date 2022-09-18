import * as S from './Search.module.css'
import { FaSearch, FaBell, FaAngleDown } from 'react-icons/fa'
import { TbPlaylist } from 'react-icons/tb'
import { Playlist } from '../../layout/playlist/Playlist'

export const Search = () => {
    return (
        <section className={S.search}>
            <div className={S.camp__search}>
                <FaSearch/>
                <input type="search" placeholder='Search for song, artist, lyrics...' />
            </div>
            <div className={S.profile}>
                <FaBell/>
                <img src="https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png" alt="profile" />
                <span>Alex Galileu Galilei</span>
                <FaAngleDown/>
            </div>
            <button className={S.menu__mobile}>
                <TbPlaylist/>
            </button>
        </section>
    )
}
