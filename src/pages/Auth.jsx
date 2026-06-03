import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Auth.css'

function Auth() {
  const navigate = useNavigate()
  const [modo,   setModo]  = useState('login')
  const [nome,   setNome]  = useState('')
  const [email,  setEmail] = useState('')
  const [senha,  setSenha] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const usuario = { nome: modo === 'cadastro' ? nome : email.split('@')[0], email }
    localStorage.setItem('usuario', JSON.stringify(usuario))
    navigate('/')
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">📜 VersoMarket</div>
        <h2>{modo === 'login' ? 'Bem-vindo de volta' : 'Criar conta'}</h2>
        <p>{modo === 'login' ? 'Entra na tua conta de poeta' : 'Junta-te à nossa comunidade'}</p>

        <form onSubmit={handleSubmit} className="auth-form">
          {modo === 'cadastro' && (
            <div className="campo">
              <label>Nome completo</label>
              <input type="text" placeholder="O teu nome" value={nome} onChange={e => setNome(e.target.value)} required />
            </div>
          )}
          <div className="campo">
            <label>Email</label>
            <input type="email" placeholder="o-teu@email.com" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="campo">
            <label>Senha</label>
            <input type="password" placeholder="••••••••" value={senha} onChange={e => setSenha(e.target.value)} required />
          </div>
          <button type="submit" className="btn-primary btn-auth-submit">
            {modo === 'login' ? 'Entrar' : 'Criar conta'}
          </button>
        </form>

        <p className="auth-alternar">
          {modo === 'login' ? 'Não tens conta?' : 'Já tens conta?'}
          <span onClick={() => setModo(modo === 'login' ? 'cadastro' : 'login')}>
            {modo === 'login' ? ' Regista-te' : ' Faz login'}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Auth