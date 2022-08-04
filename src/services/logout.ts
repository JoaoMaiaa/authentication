const LogoutService = {
  logout: () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('email')
  }
}

export default LogoutService
