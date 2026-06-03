
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, BookOpen, Users } from 'lucide-react'
import PoemaCard from '../components/PoemaCard'
import { POEMAS_EXEMPLO, CATEGORIAS } from '../data/poemas'
import './Home.css'

function Home() {
  const destaques = POEMAS_EXEMPLO.filter(p => p.destaque)

  return (
    <div className="home">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-conteudo">
          <span className="hero-tag">✨ O marketplace de poesia</span>
          <h1 className="hero-titulo">
            Compra e vende<br />
            <span className="texto-gradiente">poesia de autor</span>
          </h1>
          <p className="hero-subtitulo">
            Descobre poemas únicos escritos por poetas independentes.<br />
            Vende a tua arte e conecta-te com leitores apaixonados.
          </p>
          <div className="hero-acoes">
            <Link to="/explorar" className="btn-primary">
              Explorar Poemas <ArrowRight size={18} />
            </Link>
            <Link to="/publicar" className="btn-secondary">
              Publicar Poesia
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <TrendingUp size={20} color="#7c3aed" />
              <div>
                <strong>+2.400</strong>
                <span>Poemas</span>
              </div>
            </div>
            <div className="stat">
              <Users size={20} color="#ec4899" />
              <div>
                <strong>+800</strong>
                <span>Poetas</span>
              </div>
            </div>
            <div className="stat">
              <BookOpen size={20} color="#f97316" />
              <div>
                <strong>+5.100</strong>
                <span>Leitores</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORIAS ── */}
      <section className="section-categorias">
        <div className="container">
          <h2 className="section-titulo">Explorar por categoria</h2>
          <div className="categorias-grid">
            {CATEGORIAS.map(cat => (
              <Link
                key={cat.nome}
                to={`/explorar?categoria=${cat.nome}`}
                className="categoria-chip"
                style={{ borderColor: `${cat.cor}44`, background: `${cat.cor}11` }}
              >
                <span>{cat.emoji}</span>
                <span style={{ color: cat.cor }}>{cat.nome}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESTAQUES ── */}
      <section className="section-destaques">
        <div className="container">
          <div className="section-header">
            <h2 className="section-titulo">⭐ Poemas em destaque</h2>
            <Link to="/explorar" className="ver-todos">
              Ver todos <ArrowRight size={16} />
            </Link>
          </div>
          <div className="poemas-grid">
            {destaques.map(poema => (
              <PoemaCard key={poema.id} poema={poema} />
            ))}
          </div>
        </div>
      </section>

      
      <section className="section-cta">
        <div className="container">
          <div className="cta-card">
            <h2>És poeta?</h2>
            <p>Publica os teus poemas e começa a ganhar dinheiro com a tua arte.</p>
            <Link to="/auth" className="btn-primary">
              Criar conta grátis <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home