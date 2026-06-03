import { BrowserRouter } from 'react-router-dom'
import { CarrinhoProvider } from './context/CarrinhoContext'
import Navbar    from './components/Navbar'
import AppRoutes from './routes/AppRoutes'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <CarrinhoProvider>
        <Navbar />
        <AppRoutes />
      </CarrinhoProvider>
    </BrowserRouter>
  )
}

export default App