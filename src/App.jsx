import { useState } from 'react'
import { ToastControl } from './components/toast_container'
import { Dashboard } from './pages/dashboard/Dashboard'
import { Home } from './pages/home/Home'
import { GlobalStyle } from './styles/global'

const App = () => {
  const [logged, setLogged] = useState(false)
  return (
    <>
      <GlobalStyle/>
      <ToastControl/>
      {(!logged) ? (
        <Home setLogged={setLogged}/>
      ) : (
        <Dashboard setLogged={setLogged} />
      )}
    </>
  )
}

export default App
