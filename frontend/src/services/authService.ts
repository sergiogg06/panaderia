import api from './api'

export const login = (usuario: string, password: string) =>
  api.post('/login', { usuario, password }, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    transformRequest: [(data) => {
      const params = new URLSearchParams()
      for (let key in data) {
        params.append(key, data[key])
      }
      return params.toString()
    }],
  })
