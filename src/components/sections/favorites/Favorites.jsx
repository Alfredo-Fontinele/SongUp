import { CardFavorite } from './cards_favorite'
import * as S from './style'

export const Favorites = ({ favorites }) => {
    return (
        <S.Favourites>
            <div>
                <h3>Recent Favorites</h3>
            </div>
            <S.FavouritesList>
                {favorites.map(({ img, title_short, artist_name }) => (
                    <CardFavorite 
                        key={crypto.randomUUID()}
                        img={img}
                        artist_name={artist_name}
                        title_short={title_short}
                    />
                ))}
            </S.FavouritesList>
        </S.Favourites>
    )
}
