import * as S from './style'
import { FaMusic ,FaHeart } from 'react-icons/fa'

export const CardTreding = ({ index, title_short, artist_name, duration, preview, img }) => {
    return (
        <S.CardTreding>
            <S.CardTredingDescription>
                <p>{index}</p>
                <S.CardInfo>
                    <img src={img} alt={title_short} />
                    <S.CardInfoArtist>
                        <h4>{title_short}</h4>
                        <p>{artist_name}</p>
                    </S.CardInfoArtist>
                </S.CardInfo>
            </S.CardTredingDescription>
            <S.CardTredingAudio>
                <audio src={preview} controls></audio>
                <FaMusic id="music"/>
                <FaHeart/>
            </S.CardTredingAudio>
        </S.CardTreding>
    )
}