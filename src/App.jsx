import { API__MUSIC } from "./API"
import { Options } from "./components/layout/options/Options"

function App() {
  return (
    <div>
      {/* <button onClick={API__MUSIC.reqAPI}>Mostrar Musicas</button> */}
      <Options />
      {/* <div className="lista"></div> */}
    </div>
  )
}

export default App
