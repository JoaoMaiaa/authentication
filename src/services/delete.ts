import api from 'axios'

export interface DeleteProps {
  email: string
}

const DeleteService = {
  delete: async (params: DeleteProps) => {
    await api.post('/api/delete', params)
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('email')
  }
}

export default DeleteService
