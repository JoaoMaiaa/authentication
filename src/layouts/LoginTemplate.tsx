import { Container, Button, Img, Box, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import Header from '../components/header'
import Footer from '../components/footer'
import Input from '../components/input'

const LoginTemplate = () => {
  const router = useRouter()

  function handleSubmit(e) {}

  function handleClick() {}

  return (
    <>
      <Box display="flex">
        <Img
          objectFit="cover"
          w="50%"
          h="100vh"
          src="/jeremy-bishop-login.jpg"
        />
        <Box w="50%">
          <Container p="4" maxW="container.lg">
            <Header />
            <Box
              borderRadius="sm"
              mt="5rem"
              mx="auto"
              bg="#1C2766"
              w="30rem"
              px="4rem"
              py="2rem"
            >
              <form onSubmit={(e) => handleSubmit(e)}>
                <Heading mb="2rem" as="h1" fontSize="2rem">
                  Coloque seus dados
                </Heading>
                <Input type="text" name="" value="" placeholder="Seu nome" />
                <Box m="1.5rem"></Box>
                <Input type="email" name="" value="" placeholder="Seu email" />
                <Box m="1.5rem"></Box>
                <Button w="100%" type="submit" onClick={() => handleClick}>
                  Autenticar
                </Button>
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
