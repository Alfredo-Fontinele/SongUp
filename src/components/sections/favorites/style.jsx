import styled from "styled-components";

export const Favourites = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    h3 {
        color: var(--primary);
    }
`

export const FavouritesList = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    overflow-x: auto;
    padding: 0 0 1rem;
    max-width: 1000px;

    ::-webkit-scrollbar {
        background-color: transparent;
        height: 12px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--primary);
    }
`