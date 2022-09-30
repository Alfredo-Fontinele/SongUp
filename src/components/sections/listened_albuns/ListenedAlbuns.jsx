import * as S from "./style"
import { CardAlbum } from './cards_album/Card_Album'

export const ListenedAlbuns = ({ section }) => {
    return (
        <S.ListenedAlbuns>
            <S.ListenedAlbunsTitle>
                <h3>Recently Listened Albuns</h3>
            </S.ListenedAlbunsTitle>
            <S.ListenedAlbunsList className={S.list__cards__album}>
                {section.map(({ title_short, artist_name, img }) => (
                    <CardAlbum 
                        key={crypto.randomUUID()}
                        artist_name={artist_name} 
                        title_short={title_short}
                        img={img}
                    />
                ))}
            </S.ListenedAlbunsList>
        </S.ListenedAlbuns>
    )
}
