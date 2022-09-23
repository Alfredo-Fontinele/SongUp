import { useState } from 'react'
import { Dashboard } from './pages/dashboard/Dashboard'
import { Home } from './pages/home/Home'

function App() {  
  const [logged, setLogged] = useState(false)
  const [statusPlaylist, setStatusPlaylist] = useState(false)
  return (
    <>
      {(!logged) && (
        <Home setLogged={setLogged}/>
      )}
      {(logged) && (
        <Dashboard setLogged={setLogged} />
      )}
    </>
  )
}

export default App
