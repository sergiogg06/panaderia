import { useState } from 'react'
import { login } from '@/services/authService'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      const res = await login(usuario, password)
      localStorage.setItem('usuario', JSON.stringify(res.data))
      navigate('/admin')
    } catch {
      setError('Usuario o contraseña incorrectos')
    }
  }

  return (
    <div className="container py-5">
      <div className="col-md-6 mx-auto p-4 shadow border bg-light rounded">
        <h2 className="mb-4 text-center">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Usuario</label>
            <input className="form-control" value={usuario} onChange={e => setUsuario(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label>Contraseña</label>
            <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <div className="d-grid">
            <button className="btn btn-dark">Entrar</button>
          </div>
        </form>
        {error && <div className="alert alert-danger mt-3 text-center">{error}</div>}
      </div>
    </div>
  )
}

export default LoginPage
