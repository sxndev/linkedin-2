import { Header } from './assets/components/Header/Header'
import { Login } from './assets/components/Login/Login'
import { About } from './assets/components/About/About'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sobre" element={<About />} />
    </Routes>
    </>
  )
}

export default App  
