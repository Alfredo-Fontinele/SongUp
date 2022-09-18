import * as S from './Main.module.css'

import { Search } from '../sections/search/Search'
import { Favorites } from '../sections/favorites/Favorites'
import { ListenedAlbuns } from '../sections/listened_albuns/ListenedAlbuns'
import { Treding } from '../sections/treding/Treding'

export const Main = (props) => {
    return (
        <main className={S.main}>
            <Search/>
            <Favorites/>
            <ListenedAlbuns/>
            <Treding/>
        </main>
    )
}
