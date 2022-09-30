import { CardTreding } from './cards_treding/CardTreding'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'
import * as S from './style'

export const Treding = ({ section, favorites, setFavorites }) => {
    return (
        <S.Treding>
            <div>
                <h3>Trending Right Now</h3>
            </div>
            <S.TredingList>
                {section.map(({id, title_short, artist_name, duration, preview, picture_small, picture_medium }, index) => (
                    <CardTreding 
                        count={index + 1}
                        id={id}
                        key={crypto.randomUUID()}
                        title_short={title_short}
                        artist_name={artist_name}
                        duration={duration}
                        preview={preview}
                        picture_small={picture_small}
                        picture_medium={picture_medium}
                        treding={section}
                        favorites={favorites}
                        setFavorites={setFavorites}
                    />
                ))}
                <S.OptionsControl>
                    <MdNavigateBefore/>
                    <MdNavigateNext/>
                </S.OptionsControl>
            </S.TredingList>
        </S.Treding>
    )
}
