import * as S from './style'

export const CardAlbum = ({ title_short, artist_name, img }) => {
    return (
        <S.CardAlbum background={img}>
            <S.CardDescription>
                <h4>{title_short}</h4>
                <p>{artist_name}</p>
            </S.CardDescription>
        </S.CardAlbum>
    )
}