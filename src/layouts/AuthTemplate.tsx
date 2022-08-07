import {
  Container,
  Box,
  Heading,
  Img,
  Text,
  useColorMode
} from '@chakra-ui/react'

import Header from '../components/header'
import Footer from '../components/footer'
import ButtonLink from '../components/button'

const AuthTemplate = () => {
  const { colorMode } = useColorMode()

  return (
    <>
      <Container maxW="container.lg" p="4">
        <Header buttonName="Sair" link="/" />
        <Box display="flex" mt={{ base: '0', md: '3rem' }}>
          <Box
            mr="auto"
            mt={{ base: '20rem', md: '0' }}
            maxW={{ base: '100%', md: '40rem' }}
          >
            <Img objectFit="fill" src="/jeremy-bishop-auth.jpg" />
          </Box>
          <Box
            p="5"
            mt="4rem"
            bg={colorMode === 'light' ? '#FAF5FF' : '#151E50'}
            position="absolute"
            ml={{ base: '0', md: '30rem' }}
            w={{ base: '350px', md: '450px' }}
            h={{ base: '380px', md: '420px' }}
          >
            <Heading display="flex" alignItems="center">
              Parabéns! Você se autenticou!
            </Heading>
            <Text maxW="20rem" my="2rem">
              A autenticação é importante para sistemas como ecommerces que
              precisam de cadastro e login do cliente para acessar o carrinho e
              prosseguir até checkout, sistemas de aula online que precisam
              também de autenticação para acessar as aulas, entre outros.
            </Text>
            <ButtonLink type="button" link="/" name="Início" />
          </Box>
        </Box>
        <main>
          <Box my="10rem">
            <Box display="flex" flexWrap="wrap" gap="4">
              <Box mx="auto" p="1rem">
                <Heading as="h2" fontSize="4rem">
                  JWT
                </Heading>
                <Text
                  my="2rem"
                  fontWeight="light"
                  w={{ base: '100%', md: '30rem' }}
                >
                  Neste projeto foi utlizado a biblioteca JWT que gera o token
                  de autenticação e assim autoriza o acesso do usuário. JSON Web
                  Token (JWT) é um padrão aberto (RFC 7519) que define uma
                  maneira compacta e independente de transmitir informações com
                  segurança entre as partes como um objeto JSON.
                </Text>
              </Box>
              <Img objectFit="cover" m="auto" w="200px" src="/pic_logo.svg" />
            </Box>
            <Box
              my="8rem"
              display="flex"
              justifyContent="center"
              flexWrap="wrap"
              flexDirection="row-reverse"
              mx="auto"
            >
              <Box mx="auto" p="1rem">
                <Heading as="h2" fontSize="4rem">
                  Context Api
                </Heading>
                <Text
                  my="2rem"
                  fontWeight="light"
                  w={{ base: '100%', md: '30rem' }}
                >
                  React faz com que a criação de UIs interativas seja uma tarefa
                  fácil utilizando componentes entre outros benefícios. O
                  contexto (context) fornece a forma de compartilhar dados entre
                  todos componentes da mesma árvore de componentes. Assim sendo,
                  o token de auteticação pode ficar disponível em outros
                  componentes do projeto.
                </Text>
              </Box>
              <Img objectFit="cover" m="auto" w="400px" src="/react-js.png" />
            </Box>
            <Box display="flex" flexWrap="wrap">
              <Box mx="auto" p="1rem">
                <Heading as="h2" fontSize="4rem">
                  Next Js
                </Heading>
                <Text
                  my="2rem"
                  fontWeight="light"
                  w={{ base: '100%', md: '30rem' }}
                >
                  Um framework preparado para a produção. O Next.js oferece a
                  melhor experiência de desenvolvedor com todos os recursos
                  necessários para produção: híbrido-estático, server rendering,
                  smart bundling, suporte ao TypeScript, route pre-fetching, e
                  mais. Não precisa de configuração.
                </Text>
              </Box>
              <Img objectFit="cover" m="auto" w="400px" src="/next.png" />
            </Box>
          </Box>
        </main>
        <Footer />
      </Container>
    </>
  )
}

export default AuthTemplate
