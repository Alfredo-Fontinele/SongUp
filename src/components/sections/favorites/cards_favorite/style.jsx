import styled from "styled-components";

export const FavoriteCard = styled.li`
    background-image: url(${({ background }) => background});
    background-size: cover;
    background-repeat: no-repeat;
    height: 210px;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
        object-fit: cover;
        width: 100%;
        height: 150px;
    }

    h2 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 200px;
        font-size: 15px;
        color: var(--classic);
    }

    p {
        font-size: 12px;
        color: var(--grey-1);
    }
`