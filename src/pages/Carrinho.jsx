import { Trash2, ShoppingBag, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCarrinho } from '../context/CarrinhoContext'
import './Carrinho.css'

function Carrinho() {
  const { carrinho, removerDoCarrinho, total, limparCarrinho } = useCarrinho()

  if (carrinho.length === 0) {
    return (
      <div className="carrinho-vazio">
        <div className="container">
          <ShoppingBag size={64} color="#334155" />
          <h2>O teu carrinho está vazio</h2>
          <p>Explora os nossos poemas e adiciona os teus favoritos!</p>
          <Link to="/explorar" className="btn-primary">Explorar Poemas</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="carrinho-page">
      <div className="container">
        <Link to="/explorar" className="btn-voltar">
          <ArrowLeft size={16} /> Continuar a comprar
        </Link>

        <h1>O teu <span className="texto-gradiente">Carrinho</span></h1>

        <div className="carrinho-layout">
          <div className="carrinho-items">
            {carrinho.map(poema => (
              <div key={poema.id} className="carrinho-item">
                <div className="item-cor" style={{ background: poema.cor }} />
                <div className="item-info">
                  <h3>{poema.titulo}</h3>
                  <p>{poema.autor}</p>
                  <span className="badge badge-roxo">{poema.categoria}</span>
                </div>
                <div className="item-preco">
                  <span>€{poema.preco.toFixed(2)}</span>
                  <button className="btn-remover" onClick={() => removerDoCarrinho(poema.id)}>
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="carrinho-resumo">
            <h3>Resumo</h3>
            <div className="resumo-linha">
              <span>Subtotal ({carrinho.length} poemas)</span>
              <span>€{total.toFixed(2)}</span>
            </div>
            <div className="resumo-linha total">
              <span>Total</span>
              <strong>€{total.toFixed(2)}</strong>
            </div>
            <button className="btn-primary btn-checkout" onClick={() => { alert('Funcionalidade de pagamento em breve!'); limparCarrinho(); }}>
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carrinho