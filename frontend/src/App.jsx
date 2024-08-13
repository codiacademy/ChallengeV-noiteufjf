import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import { AppProvider } from './context/AppProvider'

function App() {

  return (
    <AppProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
