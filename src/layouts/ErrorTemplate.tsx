import { Container, Img, Box, Heading, Text } from '@chakra-ui/react'

import Header from '../components/header'
import Footer from '../components/footer'
import ButtonLink from '../components/button'

const ErrorTemplate = () => {
  return (
    <>
      <Box display="flex" flexWrap="wrap-reverse">
        <Img
          objectFit="cover"
          w={{ base: '100%', md: '50%' }}
          h={{ base: '50vh', md: '100vh' }}
          src="/kaspars-upmanis-error.jpg"
        />
        <Box w={{ base: '100%', md: '50%' }}>
          <Container p="4" maxW="container.lg">
            <Header buttonName="Início" link="/" />
            <Box p="4rem" textAlign="center">
              <Heading as="h1" size="2xl">
                Oooooops 401
              </Heading>
              <Text
                my="4rem"
                maxW={{ base: '100%', md: '300px' }}
                mx="auto"
                fontSize="2xl"
              >
                Você não está autenticado e não poderá ver está página
              </Text>
              <ButtonLink
                name="Autenticar-se"
                type="button"
                link="/auth/login"
              />
            </Box>
            <Box
              display={{ base: 'none', md: 'flex' }}
              mt="2rem"
              justifyContent="center"
            >
              <Footer />
            </Box>
          </Container>
        </Box>
      </Box>
      <Box
        display={{ base: 'flex', md: 'none' }}
        mt="5rem"
        mb="1rem"
        justifyContent="center"
      >
        <Footer />
      </Box>
    </>
  )
}

export default ErrorTemplate
