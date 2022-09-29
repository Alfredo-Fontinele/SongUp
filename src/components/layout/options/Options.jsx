import * as S from "./style"
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaHome, FaSearch, FaHeart, FaMicrophone, FaDownload } from "react-icons/fa"

export const Options = ({ setLogged }) => {
    const toogleLogged = () => {
        setLogged((value) => !value)
    }
    return (
        <S.Options>
            <S.Comands>
                <FaHome/>
                <FaSearch/>
                <FaHeart/>
                <FaMicrophone/>
                <BsFillArrowUpRightSquareFill/>
                <FaDownload/>
                <GiHamburgerMenu/>
            </S.Comands>
            <S.Logout title="Sair">
                <BiLogOut onClick={toogleLogged}/>
            </S.Logout>
        </S.Options>
    )
}
