import * as S from './style'
import { FaMusic ,FaHeart } from 'react-icons/fa'

export const CardTreding = ({ count, id, index, title_short, artist_name, duration, preview, picture_small, picture_medium, treding, favorites, setFavorites }) => {

    const addFavorite = (id) => {
        const validation = favorites.some((favorite) => favorite.id === id)
        if (!validation) {
            const info = {
                id: id,
                img: picture_medium,
                title_short: title_short,
                artist_name: artist_name
            }
            setFavorites((previous) => [...previous, info])
        }
    }

    return (
        <S.CardTreding>
            <S.CardTredingDescription>
                <p>{count}</p>
                <S.CardInfo>
                    <img src={picture_small} alt={title_short} />
                    <S.CardInfoArtist>
                        <h4>{title_short}</h4>
                        <p>{artist_name}</p>
                    </S.CardInfoArtist>
                </S.CardInfo>
            </S.CardTredingDescription>
            <S.CardTredingAudio>
                <audio src={preview} controls></audio>
                <FaMusic/>
                <FaHeart onClick={() => addFavorite(id)} title="Adicionar aos Favoritos"/>
            </S.CardTredingAudio>
        </S.CardTreding>
    )
}