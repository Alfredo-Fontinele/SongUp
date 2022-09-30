import { useState } from 'react'
import { Container } from "../../components/container/Container"
import { Options } from "../../components/layout/options/Options"
import { Playlist } from "../../components/layout/playlist/Playlist"
import { Main } from "../../components/main/Main"
import { ModalWelcome } from "../../components/modals/welcome"

export const Dashboard = ({ setLogged }) => {
    const [statusModalWelcome, setStatusModalWelcome] = useState(true)
    const [statusPlaylist, setStatusPlaylist] = useState(false)
    return (
        <Container>
            {statusModalWelcome && (
                <ModalWelcome setStatusModalWelcome={setStatusModalWelcome}/>
            )}
            <Options setLogged={setLogged}/>
            <Main setStatusPlaylist={setStatusPlaylist}/>
            {statusPlaylist && (
                <Playlist setStatusPlaylist={setStatusPlaylist}/>
            )}
        </Container>
    )
}
