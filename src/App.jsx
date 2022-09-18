
import { Container } from "./components/container/Container"
import { Options } from "./components/layout/options/Options"
import { Playlist } from "./components/layout/playlist/Playlist"

function App() {
  return (
    <Container>
      <Options />
      <Playlist/>
    </Container>
  )
}

export default App
