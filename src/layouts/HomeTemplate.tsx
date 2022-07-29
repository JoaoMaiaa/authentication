import {
  Container,
  Img,
  Box,
  Heading,
  Text,
  useColorMode
} from '@chakra-ui/react'

import Header from '../components/header'
import ButtonLink from '../components/button'
import Footer from '../components/footer'

const HomeTemplate = () => {
  const { colorMode } = useColorMode()
  return (
    <>
      <Container maxW="container.lg" p="4">
        <Header buttonName="Sobre" link="/auth/bem-vindo" />
        <Box display="flex" mt="3rem">
          <Box
            p="5"
            mt="4rem"
            bg={colorMode === 'light' ? '#FAF5FF' : '#151E50'}
            position="absolute"
            ml="3rem"
            w="450px"
            h="390px"
          >
            <Heading display="flex" alignItems="center">
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
            <ButtonLink type="button" link="/auth/login" name="Autentique-se" />
          </Box>
          <Box maxW="40rem" ml="auto">
            <Img objectFit="fill" src="/jeremy-bishop-home.jpg" />
          </Box>
        </Box>
        <Footer />
      </Container>
    </>
  )
}

export default HomeTemplate
