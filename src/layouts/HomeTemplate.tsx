import {
  Container,
  Img,
  Box,
  Heading,
  Text,
  useColorMode
} from '@chakra-ui/react'
import { useContext } from 'react'

import { AuthContext } from '../contexts/AuthContext'

import { MotionBox, AnimationBox, ItemAnimation } from '../styles/animation'

import Header from '../components/header'
import ButtonLink from '../components/button'
import Footer from '../components/footer'

const HomeTemplate = () => {
  const { colorMode } = useColorMode()
  const { data } = useContext(AuthContext)

  return (
    <>
      <Container maxW="container.lg" p="4">
        <Header buttonName="Sobre" link="/auth/bem-vindo" />
        <Box display="flex" mt={{ base: '0', md: '3rem' }} position="relative">
          <MotionBox
            p="5"
            // mt={{ base: '0', md: '4rem' }}
            mt="4rem"
            bg={colorMode === 'light' ? '#FAF5FF' : '#151E50'}
            position="absolute"
            ml={{ base: '0', md: '3rem' }}
            minW={{ base: '100px', md: '450px' }}
            h={{ base: '310px', md: '390px' }}
            variants={AnimationBox}
            initial="hidden"
            animate="visible"
          >
            <Heading display="flex" flexWrap="wrap" alignItems="center">
              Bem vindo ao
              <Box
                mx="1"
                color={colorMode === 'light' ? 'blue.200' : '#4358CB'}
              >
                Pro
              </Box>
              <Box
                fontSize="1.5rem"
                mt="2"
                color={colorMode === 'light' ? '#4358CB' : '#FAF5FF'}
              >
                {' '}
                Auth
              </Box>
            </Heading>
            <Text maxW="20rem" my="2rem">
              Este é um pequeno projeto que visa trabalhar com autenticação de
              forma global com o contexto do React e o serverles do next.
            </Text>

            {data ? (
              ''
            ) : (
              <ButtonLink
                type="button"
                link="/auth/login"
                name="Autentique-se"
              />
            )}
          </MotionBox>
          <Box
            mt={{ base: '20rem', md: '0' }}
            maxW={{ base: '100%', md: '40rem' }}
            ml="auto"
          >
            <Img objectFit="fill" src="/jeremy-bishop-home.jpg" />
          </Box>
        </Box>
        <Box mt={{ base: '15rem', md: '0rem' }}>
          <Footer />
        </Box>
      </Container>
    </>
  )
}

export default HomeTemplate
