import * as S from './style'

export const Home = ({ setLogged }) => {
    const toogleLogged = () => {
        setLogged((value) => !value)
    }
    return (
        <S.Home>
            <S.HomeDescription>
                <S.HomeTitle>SongUp</S.HomeTitle>
                <S.BtnHome onClick={toogleLogged}>Go Music</S.BtnHome>
            </S.HomeDescription>
        </S.Home>
    )
}