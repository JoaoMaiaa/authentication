import api from 'axios'

export interface RegisterProps {
  email: string
  name: string
}

const RgisterService = {
  register: async (params: RegisterProps) => {
    return await api.post('/api/register', params)
  }
}

export default RgisterService
