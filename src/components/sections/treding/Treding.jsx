import { CardAlbum } from '../listened_albuns/cards_album/Card_Album'
import * as S from './style'

export const Treding = ({ section }) => {
    
    return (
        <S.Treding>
            <div>
                <h3>Trending Right Now</h3>
            </div>
            <S.TredingList>
                {section.map(({ title_short, artist_name, img }) => (
                    <CardAlbum 
                        key={crypto.randomUUID()}
                        artist_name={artist_name} 
                        title_short={title_short}
                        img={img}
                    />
                ))}
            </S.TredingList>
        </S.Treding>
    )
}
