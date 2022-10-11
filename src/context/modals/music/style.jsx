import styled from 'styled-components'
import { openModal } from '../../../animations/modal/style'

export const ModalMusic = styled.div`
    animation: ${openModal} .7s ease-in-out;
    position: relative;
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3.5rem 1rem;
    gap: 30px;
    border-radius: 8px;
    background-color: rgb(40,50,60);

    span {
        position: absolute;
        top: 10px;
        left: 15px;
        font-size: 24px;
        color: var(--classic);
        background-color: transparent;
    }

    #FaHeart {
        position: absolute;
        top: 15px;
        left: 15px;
        font-size: 24px;
        color: var(--classic);
        background-color: transparent;
    }

    #FiLogOut {
        position: absolute;
        top: 15px;
        right: 15px;
        font-size: 24px;
        color: var(--crimson);
        background-color: transparent;
    }

    img {
        border-radius: 10px;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    div h2 {
        color: var(--classic);
        text-align: center;
    }

    div p {
        color: var(--grey-1);
        text-align: center;
    }

    audio {
        width: 100%;
        max-width: 300px;
    }
`
