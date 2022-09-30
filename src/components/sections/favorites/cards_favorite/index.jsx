import * as S from './style'

export const CardFavorite = ({ img, title_short, artist_name }) => {
    return (
        <S.FavoriteCard>
            <img src={img} alt={title_short} />
            <h2>{title_short}</h2>
            <p>{artist_name}</p>
        </S.FavoriteCard>
    )
}