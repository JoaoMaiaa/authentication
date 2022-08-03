import api from 'axios'

export interface LoginProps {
  email: string
  name: string
}

const LoginService = {
  login: async (params: LoginProps) => {
    const response = await api.post('/api/login', params)
    localStorage.setItem('token', response.data.token)
    localStorage.setItem('user', response.data.name)
    localStorage.setItem('email', response.data.email)
  }
}

export default LoginService
