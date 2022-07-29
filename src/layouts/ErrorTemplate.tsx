import { Container, Img, Box, Heading, Text } from '@chakra-ui/react'

import Header from '../components/header'
import Footer from '../components/footer'
import ButtonLink from '../components/button'

const ErrorTemplate = () => {
  return (
    <>
      <Box display="flex">
        <Img
          objectFit="cover"
          w="50%"
          h="100vh"
          src="/kaspars-upmanis-error.jpg"
        />
        <Box w="50%">
          <Container p="4" maxW="container.lg">
            <Header buttonName="Início" link="/" />
            <Box p="4rem" textAlign="center">
              <Heading as="h1" size="2xl">
                Oooooops 401
              </Heading>
              <Text my="4rem" w="300px" mx="auto" fontSize="2xl">
                Você não está autenticado e não poderá ver está página
              </Text>
              <ButtonLink
                name="Autenticar-se"
                type="button"
                link="/auth/login"
              />
            </Box>
            <Footer />
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default ErrorTemplate
