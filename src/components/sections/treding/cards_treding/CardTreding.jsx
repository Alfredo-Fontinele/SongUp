import { toast } from 'react-toastify'
import * as S from './style'

export const CardTreding = ({ count, id, title_short, artist_name, duration, preview, picture_small, picture_medium, favorites, treding, setCardCurrent }) => {

    const validation = (arr, id) => {
        return arr.some((arr) => arr.id === id)
    }

    const modalMusic = () => {
        const result = validation(favorites, id)
        if (!result) {
            const info = {
                id: id,
                count: count,
                img: picture_medium,
                preview: preview,
                title_short: title_short,
                artist_name: artist_name
            }
            setCardCurrent(info)
        } else {
            toast.error("Musica já foi adicionada aos favoritos")
        }
    }

    return (
        <S.CardTreding onClick={() => modalMusic()}>
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
            {/* <S.CardTredingAudio>
                <audio src={preview} controls></audio>
                <FaMusic />
            </S.CardTredingAudio> */}
        </S.CardTreding>
    )
}
