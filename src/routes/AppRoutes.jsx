import { Routes, Route } from 'react-router-dom'
import Home     from '../pages/Home'
import Explorar from '../pages/Explorar'
import Auth     from '../pages/Auth'
import Carrinho from '../pages/Carrinho'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/"        element={<Home />} />
      <Route path="/explorar" element={<Explorar />} />
      <Route path="/auth"    element={<Auth />} />
      <Route path="/carrinho" element={<Carrinho />} />
    </Routes>
  )
}

export default AppRoutes