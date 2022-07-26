import { Container } from '@chakra-ui/react'

import ErrorTemplate from '../../layouts/ErrorTemplate'

const Ooops = () => {
  return (
    <>
      <Container maxW="container.xl">
        <ErrorTemplate />
      </Container>
    </>
  )
}

export default Ooops
