import api from 'axios'

export interface LoginProps {
  email: string
  name: string
}

const LoginService = {
  login: async (params: LoginProps) => {
    return await api.post('/auth/login', params)
  }
}

export default LoginService
