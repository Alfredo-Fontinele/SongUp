import styled from "styled-components";

export const Treding = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    h3 {
        color: var(--primary);
    }
`

export const TredingList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 30px;
    overflow-x: auto;
    height: 400px;
    width: 100%;
    max-width: 1000px;

    ::-webkit-scrollbar {
        background-color: transparent;
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--primary);
    }

    @media only screen and (max-width: 770px) {
        
        flex-wrap: nowrap;
        
    }
`
