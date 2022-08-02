import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react'

import theme from '../styles/theme'
import Fonts from '../components/fonts'

import { LoginContext } from '../contexts/LoginContext'
import { AuthContext } from '../contexts/AuthContext'

function MyApp({ Component, pageProps }: AppProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [data, setData] = useState('')

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <LoginContext.Provider value={{ name, setName, email, setEmail }}>
        <AuthContext.Provider value={{ data, setData }}>
          <Component {...pageProps} />
        </AuthContext.Provider>
      </LoginContext.Provider>
    </ChakraProvider>
  )
}

export default MyApp
