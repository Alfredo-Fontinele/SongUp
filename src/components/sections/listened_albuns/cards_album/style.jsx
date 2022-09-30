import styled from "styled-components";

export const CardAlbum = styled.li`
    border-radius: 5px;
    background-image: url(${({ background }) => background});
    background-size: cover;
    background-repeat: no-repeat;
    height: 150px;
    min-width: 220px;
    display: flex;
    align-items: flex-end;
`

export const CardDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    gap: 5px;
    padding: 0.7rem;
    color: #fff;
    background-color: rgba(20,30,40,0.8);

    h4 {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 140px;
        font-size: 15px;
    }

    p {
        font-size: 12px;
    }
`