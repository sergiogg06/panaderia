import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await api.post('/auth/login', { username, password })
      localStorage.setItem('token', res.data.token)
      navigate('/dashboard')
    } catch (error) {
      alert('Credenciales inválidas')
    }
  }

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input className="form-control mb-2" type="text" placeholder="Usuario" onChange={e => setUsername(e.target.value)} />
        <input className="form-control mb-2" type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
        <button className="btn btn-primary">Entrar</button>
      </form>
    </div>
  )
}

export default Login
