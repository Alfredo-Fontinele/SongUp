import { Container } from "./components/container/Container"
import { Options } from "./components/layout/options/Options"
import { Playlist } from "./components/layout/playlist/Playlist"
import { Main } from "./components/main/Main"

function App() {
  return (
    <Container>
      <Options />
      <Main/>
      <Playlist/>
    </Container>
  )
}

export default App
