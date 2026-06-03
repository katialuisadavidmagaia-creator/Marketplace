import { useState } from 'react'
import { Search } from 'lucide-react'
import PoemaCard from '../components/PoemaCard'
import { POEMAS_EXEMPLO, CATEGORIAS } from '../data/poemas'
import './Explorar.css'

function Explorar() {
  const [filtro,  setFiltro]  = useState('Todos')
  const [pesquisa, setPesquisa] = useState('')

  const poemasFiltrados = POEMAS_EXEMPLO.filter(p => {
    const categoriaOk = filtro === 'Todos' || p.categoria === filtro
    const pesquisaOk  = p.titulo.toLowerCase().includes(pesquisa.toLowerCase()) ||
                        p.autor.toLowerCase().includes(pesquisa.toLowerCase())
    return categoriaOk && pesquisaOk
  })

  return (
    <div className="explorar">
      <div className="container">

        <div className="explorar-header">
          <h1>Explorar <span className="texto-gradiente">Poemas</span></h1>
          <p>Descobre poesia de autor em todos os estilos e categorias</p>
        </div>

        <div className="explorar-filtros">
          <div className="pesquisa-wrapper">
            <Search size={18} className="pesquisa-icon" />
            <input
              type="text"
              placeholder="Pesquisar por título ou autor..."
              value={pesquisa}
              onChange={e => setPesquisa(e.target.value)}
              className="pesquisa-input"
            />
          </div>

          <div className="categorias-filtro">
            {CATEGORIAS.map(cat => (
              <button
                key={cat.nome}
                className={`cat-btn ${filtro === cat.nome ? 'ativo' : ''}`}
                onClick={() => setFiltro(cat.nome)}
              >
                {cat.emoji} {cat.nome}
              </button>
            ))}
          </div>
        </div>

        <p className="resultado-count">
          {poemasFiltrados.length} poema{poemasFiltrados.length !== 1 ? 's' : ''} encontrado{poemasFiltrados.length !== 1 ? 's' : ''}
        </p>

        <div className="poemas-grid">
          {poemasFiltrados.length === 0 ? (
            <div className="sem-resultados">
              <p>😔 Nenhum poema encontrado.</p>
            </div>
          ) : (
            poemasFiltrados.map(poema => (
              <PoemaCard key={poema.id} poema={poema} />
            ))
          )}
        </div>

      </div>
    </div>
  )
}

export default Explorar