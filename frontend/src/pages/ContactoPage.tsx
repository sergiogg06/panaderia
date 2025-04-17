import { useState } from 'react'
import { enviarMensaje } from '@/services/contactoService'


const ContactoPage = () => {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [exito, setExito] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setExito('')
    try {
      await enviarMensaje(form)
      setExito('Mensaje enviado con éxito 🎉')
      setForm({ nombre: '', email: '', mensaje: '' })
    } catch (err: any) {
      console.error('Error:', err.response || err)
      setError('Hubo un error al enviar el mensaje 😳')
    }
  }

  return (
    <>
      <div className="container py-5">
        <div className="col-md-8 mx-auto p-4 border rounded shadow bg-light">
          <h2 className="text-center mb-4 text-secondary">Contáctanos</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input name="nombre" className="form-control" value={form.nombre} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Correo</label>
              <input type="email" name="email" className="form-control" value={form.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Mensaje</label>
              <textarea name="mensaje" className="form-control" rows={4} value={form.mensaje} onChange={handleChange} required />
            </div>
            <div className="d-grid">
              <button className="btn btn-secondary btn-lg">Enviar</button>
            </div>
          </form>
          {exito && <div className="alert alert-success mt-3 text-center">{exito}</div>}
          {error && <div className="alert alert-danger mt-3 text-center">{error}</div>}
        </div>
      </div>
    </>
  )
}

export default ContactoPage
