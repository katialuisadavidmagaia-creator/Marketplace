
import { Heart, ShoppingBag, Star } from 'lucide-react'
import { useCarrinho } from '../context/CarrinhoContext'
import { Link } from 'react-router-dom'
import './PoemaCard.css'

function PoemaCard({ poema }) {
  const { adicionarAoCarrinho, carrinho } = useCarrinho()
  const noCarrinho = carrinho.find(p => p.id === poema.id)

  return (
    <div className="poema-card fade-in">
      <div className="poema-card-topo" style={{ background: `linear-gradient(135deg, ${poema.cor}22, ${poema.cor}44)`, borderColor: `${poema.cor}44` }}>
        <div className="poema-card-categoria">
          <span className="badge badge-roxo">{poema.categoria}</span>
          {poema.destaque && <span className="badge badge-rosa">⭐ Destaque</span>}
        </div>
        <p className="poema-preview">"{poema.preview}"</p>
      </div>

      <div className="poema-card-corpo">
        <h3 className="poema-titulo">{poema.titulo}</h3>

        <div className="poema-autor-row">
          <div className="autor-avatar" style={{ background: poema.cor }}>
            {poema.avatar}
          </div>
          <div>
            <p className="autor-nome">{poema.autor}</p>
            <div className="poema-avaliacao">
              <Star size={12} fill="#fbbf24" color="#fbbf24" />
              <span>{poema.avaliacao}</span>
              <span className="vendas">({poema.vendas} vendas)</span>
            </div>
          </div>
        </div>

        <div className="poema-card-rodape">
          <div className="poema-stats">
            <span><Heart size={13} /> {poema.curtidas}</span>
          </div>
          <div className="poema-preco-area">
            <span className="preco">€{poema.preco.toFixed(2)}</span>
            <button
              className={`btn-comprar ${noCarrinho ? 'no-carrinho' : ''}`}
              onClick={() => adicionarAoCarrinho(poema)}
              disabled={!!noCarrinho}
            >
              <ShoppingBag size={14} />
              {noCarrinho ? 'Adicionado' : 'Comprar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PoemaCard