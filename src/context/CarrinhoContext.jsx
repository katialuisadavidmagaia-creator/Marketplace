
import { createContext, useContext, useState } from 'react'

const CarrinhoContext = createContext()

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([])

  function adicionarAoCarrinho(poema) {
    if (carrinho.find(p => p.id === poema.id)) return
    setCarrinho(prev => [...prev, poema])
  }

  function removerDoCarrinho(id) {
    setCarrinho(prev => prev.filter(p => p.id !== id))
  }

  function limparCarrinho() {
    setCarrinho([])
  }

  const total = carrinho.reduce((acc, p) => acc + p.preco, 0)

  return (
    <CarrinhoContext.Provider value={{
      carrinho,
      adicionarAoCarrinho,
      removerDoCarrinho,
      limparCarrinho,
      total,
      quantidade: carrinho.length
    }}>
      {children}
    </CarrinhoContext.Provider>
  )
}

export function useCarrinho() {
  return useContext(CarrinhoContext)
}