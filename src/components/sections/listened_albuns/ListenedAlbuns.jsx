import * as S from "./ListenedAlbuns.module.css"
import { CardAlbum } from './cards_album/Card_Album'

export const ListenedAlbuns = ({ section }) => {
    return (
        <div className={S.container}>
            <div className={S.container__title}>
                <h3>Recently Listened Albuns</h3>
            </div>
            <ul className={S.list__cards__album}>
                {section.map(({ title_short, artist_name, img }) => (
                    <CardAlbum 
                        key={crypto.randomUUID()}
                        artist_name={artist_name} 
                        title_short={title_short}
                        img={img}
                    />
                ))}
            </ul>
        </div>
    )
}
