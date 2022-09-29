import { useState } from 'react'
import { Dashboard } from './pages/dashboard/Dashboard'
import { Home } from './pages/home/Home'
import { GlobalStyle } from './styles/global'

const App = () => {
  const [logged, setLogged] = useState(false)
  return (
    <>
    <GlobalStyle/>
      {(!logged) ? (
        <Home setLogged={setLogged}/>
      ) : (
        <Dashboard setLogged={setLogged} />
      )} 
    </>
  )
}

export default App
