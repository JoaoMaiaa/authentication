import { Container, Img, Box, Heading, Text } from '@chakra-ui/react'

import Header from '../components/header'
import ButtonLink from '../components/button'

const HomeTemplate = () => {
  return (
    <>
      <Container maxW="container.lg" p="4">
        <Header />
        <Box display="flex" mt="3rem">
          <Box
            p="4"
            mt="4rem"
            bg="#151E50"
            position="absolute"
            ml="3rem"
            w="450px"
            h="430px"
          >
            <Heading>Bem vindo ao Pro Auth</Heading>
            <Text maxW="20rem" my="2rem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo id
              modi earum in temporibus ab autem deleniti illum ullam
              repudiandae!
            </Text>
            <ButtonLink type="button" link="/" name="Autentique-se" />
          </Box>
          <Box maxW="40rem" ml="auto">
            <Img objectFit="fill" src="/jeremy-bishop-home.jpg" />
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default HomeTemplate
