import styled from "styled-components";

export const CardTreding = styled.li`
    width: 100%;
    min-width: 800px;
    min-height: 70px;
    padding: 0 1rem 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 880px) {
        min-width: 300px;
    }
`

export const CardTredingDescription = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    p {
        font-size: 12px;
        color: var(--grey-1);
    }
`

export const CardInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export const CardInfoArtist = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    h4 {
        width: 100%;
        min-width: 90px;
        max-width: 110px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--classic);
    }

    p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export const CardTredingAudio = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    svg {
        color: var(--classic);
        cursor: pointer;
    }

    @media only screen and (max-width: 880px) {
        flex-direction: column;
        justify-content: space-between;
        
        audio {
            display: none;
        }
    }
`