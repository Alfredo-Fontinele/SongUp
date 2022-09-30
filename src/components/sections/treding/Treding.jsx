import { CardTreding } from './cards_treding/CardTreding'
import * as S from './style'

export const Treding = ({ section }) => {
    return (
        <S.Treding>
            <div>
                <h3>Trending Right Now</h3>
            </div>
            <S.TredingList>
                {section.map(({ title_short, artist_name, duration, preview, img }, index) => (
                    <CardTreding 
                        index={index + 1}
                        key={crypto.randomUUID()}
                        title_short={title_short}
                        artist_name={artist_name}
                        duration={duration}
                        preview={preview}
                        img={img}
                    />
                ))}
            </S.TredingList>
        </S.Treding>
    )
}
