import { Box, Heading, useColorMode } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import ButtonLink from './button'
import ButtonColorMode from './buttonColorMode'

const Header = () => {
  const router = useRouter()
  const { colorMode } = useColorMode()
  return (
    <>
      <header>
        <Box display="flex" onClick={() => router.push('/')} cursor="pointer">
          <Heading
            fontSize="2rem"
            display="flex"
            color={colorMode === 'light' ? 'blue.200' : '#4358CB'}
            // color="#4358CB"
          >
            Pro
            <Box
              color={colorMode === 'dark' ? 'white' : '#4358CB'}
              fontSize="1.5rem"
              mt="0.5rem"
              mb="1rem"
              ml="0.5rem"
            >
              Auth
            </Box>
          </Heading>
          <Box ml="auto">
            <ButtonLink name="Sobre" type="button" link="/auth/bem-vindo" />
            <Box display="inline-flex" m="1.5"></Box>
            <ButtonColorMode />
          </Box>
        </Box>
      </header>
    </>
  )
}

export default Header
