import { openModal } from "../../../animations/modal/style"
import { ModalStructure } from "../layout"
import * as S from './style'

export const ModalWelcome = ({ setStatusModalWelcome }) => {
    const closeModal = () => {
        setStatusModalWelcome((previous) => !previous)
    }
    return (
        <ModalStructure>
            <S.Welcome animation={openModal}>
                <h1>Bem-Vindo</h1>
                <button onClick={closeModal}>Go</button>
            </S.Welcome>            
        </ModalStructure>
    )
}
