import api from './api'

export const enviarMensaje = (data: {
  nombre: string
  email: string
  mensaje: string
}) =>
  api.post('/enviarMensaje', data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    transformRequest: [(data) => {
      const params = new URLSearchParams()
      for (let key in data) {
        params.append(key, data[key])
      }
      return params.toString()
    }]
  })
