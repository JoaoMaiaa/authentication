import {
  Container,
  Button,
  Img,
  Box,
  Heading,
  useToast,
  useColorMode
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FormEvent, useState, useContext, useEffect } from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import Input from '../components/input'

import { LoginContext } from '../contexts/LoginContext'
import { AuthContext } from '../contexts/AuthContext'

import LoginService from '../services/login'
import RegisterService from '../services/register'

const LoginTemplate = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [activeRegister, setActiveRegister] = useState(true)
  const [activeLogin, setActiveLogin] = useState(false)
  const { data, setData } = useContext(AuthContext)

  const router = useRouter()
  const { email, setEmail, name, setName } = useContext(LoginContext)
  const toast = useToast()
  const { colorMode } = useColorMode()

  useEffect(() => {
    if (data) {
      router.push('/auth/bem-vindo')
    } else {
      return
    }
  }, [router, data])

  const handleClickLogin = () => {
    setActiveLogin(!false)
    setActiveRegister(!true)
  }

  const handleClickRegister = () => {
    setActiveRegister(!false)
    setActiveLogin(!true)
  }

  const alertSuccessLogin = () => {
    toast({
      title: 'Successo!',
      description: 'Seja bem-vindo!',
      status: 'success',
      duration: 3000,
      isClosable: true
    })
  }

  const alertSuccessRegister = () => {
    toast({
      title: 'Successo!',
      description: 'Você está inscrito, agora entre com os seus dados',
      status: 'success',
      duration: 3000,
      isClosable: true
    })
  }

  const alertToastError = () => {
    toast({
      title: 'Oooops!',
      description: error ? error : 'Adicione seus dados por favor',
      status: 'error',
      duration: 3000,
      isClosable: true
    })
  }

  if (error) {
    alertToastError()
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (email === '' || name === '') {
      alertToastError()
    } else {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 3500)
      setEmail('')
      setName('')
      if (activeRegister) {
        alertSuccessRegister()
        RegisterService.register({ email: email, name: name })
        handleClickLogin()
      } else {
        LoginService.login({ email: email, name: name }).then((response) => {
          if (response.data.message) {
            setError(response.data.message)
          } else {
            alertSuccessLogin()
          }
        })
        // setTimeout(() => {
        //   router.push('/auth/bem-vindo')
        // }, 3500)
      }
      // setData(localStorage.getItem('user') as string)
    }
  }

  return (
    <>
      <Box display="flex">
        <Img
          objectFit="cover"
          w="50%"
          h="100vh"
          src="/jeremy-bishop-login.jpg"
          display={{ base: 'none', md: 'flex' }}
        />
        <Box w={{ base: '100%', md: '50%' }}>
          <Container p="4" maxW="container.lg">
            <Header buttonName="Início" link="/" />
            <Box
              mx={{ base: '0', lg: '5rem' }}
              borderRadius="sm"
              mt="1.4rem"
              bg={colorMode === 'light' ? 'blue.200' : '#1C2766'}
              w=""
              px="2rem"
              py="2rem"
            >
              <form onSubmit={(e) => handleSubmit(e)}>
                <Heading mb="2rem" as="h1" fontSize="2rem">
                  {activeRegister ? 'Registrar' : 'Login'}
                </Heading>
                <Input
                  type="text"
                  name={name}
                  value={name}
                  placeholder="Seu nome"
                  onChange={(e) => setName(e.target.value)}
                />
                <Box m="1.5rem"></Box>
                <Input
                  type="email"
                  name={email}
                  value={email}
                  placeholder="Seu email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Box m="1.5rem"></Box>
                <Button
                  bg={colorMode === 'light' ? 'blue.300' : 'whiteAlpha.200'}
                  _hover={
                    colorMode === 'light'
                      ? { backgroundColor: 'blue.400' }
                      : { backgroundColor: 'whiteAlpha.300' }
                  }
                  loadingText="Autenticando..."
                  isLoading={loading}
                  w="100%"
                  type="submit"
                >
                  {activeRegister ? 'Registar' : 'Login'}
                </Button>
                <Box m="1.5rem"></Box>
                <Box display="flex" gap="2">
                  <Button
                    bg={colorMode === 'light' ? 'blue.300' : 'whiteAlpha.200'}
                    w="100%"
                    type="button"
                    _active={
                      colorMode === 'light'
                        ? { bg: 'blue.500', color: '#fff' }
                        : { bg: 'whiteAlpha.500' }
                    }
                    _hover={
                      colorMode === 'light'
                        ? { backgroundColor: 'blue.400' }
                        : { backgroundColor: 'whiteAlpha.300' }
                    }
                    isActive={activeRegister}
                    onClick={handleClickRegister}
                  >
                    Registrar
                  </Button>
                  <Button
                    bg={colorMode === 'light' ? 'blue.300' : 'whiteAlpha.200'}
                    w="100%"
                    _active={
                      colorMode === 'light'
                        ? { bg: 'blue.500', color: '#fff' }
                        : { bg: 'whiteAlpha.500' }
                    }
                    _hover={
                      colorMode === 'light'
                        ? { backgroundColor: 'blue.400' }
                        : { backgroundColor: 'whiteAlpha.300' }
                    }
                    type="button"
                    isActive={activeLogin}
                    onClick={handleClickLogin}
                  >
                    Login
                  </Button>
                </Box>
              </form>
            </Box>
            <Box mt="5rem"></Box>
            <Footer />
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default LoginTemplate
