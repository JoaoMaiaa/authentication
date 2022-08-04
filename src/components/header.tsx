import { Box, Heading, useColorMode } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useContext } from 'react'

import ButtonLink from './button'
import ButtonColorMode from './buttonColorMode'
import DrawerComponent from './drawer'

import { AuthContext } from '../contexts/AuthContext'

export interface HeaderProps {
  buttonName: string
  link: string
}

const Header = ({ buttonName, link }: HeaderProps) => {
  const router = useRouter()
  const { colorMode } = useColorMode()
  const { data } = useContext(AuthContext)

  return (
    <>
      <header>
        <Box display="flex" cursor="pointer">
          <Heading
            onClick={() => router.push('/')}
            fontSize="2rem"
            display="flex"
            color={colorMode === 'light' ? 'blue.200' : '#4358CB'}
            // color="#4358CB"
          >
            Pro
            <Box
              color={colorMode === 'dark' ? '#FAF5FF' : '#4358CB'}
              fontSize="1.5rem"
              mt="0.5rem"
              mb="1rem"
              ml="0.5rem"
            >
              Auth
            </Box>
          </Heading>
          <Box ml="auto">
            <ButtonLink name={buttonName} type="button" link={link} />
            <Box display="inline-flex" m="1.5"></Box>
            <ButtonColorMode />
            <Box display="inline-flex" m="1.5"></Box>
            {data ? <DrawerComponent /> : ''}
          </Box>
        </Box>
      </header>
    </>
  )
}

export default Header
