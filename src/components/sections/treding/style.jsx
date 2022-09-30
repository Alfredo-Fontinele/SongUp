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
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    overflow-x: auto;
    width: 100%;
    max-width: 1000px;
    padding: 0 0 1rem;

    ::-webkit-scrollbar {
        background-color: transparent;
        height: 12px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--primary);
    }
`
