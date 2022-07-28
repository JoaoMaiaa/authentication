import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react'

import theme from '../styles/theme'
import Fonts from '../components/fonts'

import { AuthContext } from '../contexts/AuthContext'

function MyApp({ Component, pageProps }: AppProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <AuthContext.Provider value={{ name, setName, email, setEmail }}>
        <Component {...pageProps} />
      </AuthContext.Provider>
    </ChakraProvider>
  )
}

export default MyApp
