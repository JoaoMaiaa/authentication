import { NextPage } from 'next'
import { Container } from '@chakra-ui/react'

import HomeTemplate from '../layouts/HomeTemplate'

const Home: NextPage = () => {
  return (
    <>
      <Container maxW="container.xl">
        <HomeTemplate />
      </Container>
    </>
  )
}

export default Home
