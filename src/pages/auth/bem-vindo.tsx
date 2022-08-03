import { useContext, useEffect } from 'react'

import { AuthContext } from '../../contexts/AuthContext'
import AuthTemplate from '../../layouts/AuthTemplate'
import ErrorTemplate from '../../layouts/ErrorTemplate'

const BemVindo = () => {
  const { data, setData } = useContext(AuthContext)

  useEffect(() => {
    setData(localStorage.getItem('user') as string)
  }, [data, setData])

  return <>{data ? <AuthTemplate /> : <ErrorTemplate />}</>
}

export default BemVindo
