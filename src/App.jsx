import { API__MUSIC } from "./API"

function App() {
  return (
    <div>
      <button onClick={API__MUSIC.reqAPI}>Mostrar Musicas</button>
      <div className="lista"></div>
    </div>
  )
}

export default App
