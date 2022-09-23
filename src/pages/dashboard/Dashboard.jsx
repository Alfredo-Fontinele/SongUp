import { Container } from "../../components/container/Container"
import { Options } from "../../components/layout/options/Options"
import { Playlist } from "../../components/layout/playlist/Playlist"
import { Main } from "../../components/main/Main"
import { useState } from 'react'

export const Dashboard = ({ setLogged }) => {
    const [statusPlaylist, setStatusPlaylist] = useState(false)
    return (
        <Container>
            <Options setLogged={setLogged}/>
            <Main setStatusPlaylist={setStatusPlaylist}/>
            {statusPlaylist && (
                <Playlist setStatusPlaylist={setStatusPlaylist}/>
            )}
        </Container>
    )
}
