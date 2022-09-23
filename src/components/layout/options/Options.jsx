import * as S from "./Options.module.css"
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaHome, FaSearch, FaHeart, FaMicrophone, FaDownload } from "react-icons/fa"

export const Options = ({ setLogged }) => {
    const toogleLogged = () => {
        setLogged((value) => !value)
    }
    return (
        <aside className={S.options}>
            <div className={S.comands}>
                <FaHome/>
                <FaSearch/>
                <FaHeart/>
                <FaMicrophone/>
                <BsFillArrowUpRightSquareFill/>
                <FaDownload/>
                <GiHamburgerMenu/>
            </div>
            <div className={S.logout} title="Sair">
                <BiLogOut onClick={toogleLogged}/>
            </div>
        </aside>
    )
}