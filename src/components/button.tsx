import { Button, useColorMode } from '@chakra-ui/react'
import { useContext } from 'react'
import { useRouter } from 'next/router'

import LogoutService from '../services/logout'
import { AuthContext } from '../contexts/AuthContext'

export interface ButtonProps {
  name: string
  link: string
  type: 'button' | 'submit' | 'reset' | undefined
}

const ButtonLink = ({ name, link, type }: ButtonProps) => {
  const router = useRouter()
  const { colorMode } = useColorMode()
  const { setData } = useContext(AuthContext)

  function pushRouter() {
    if (name === 'Sair') {
      router.push('/')
      setTimeout(() => {
        LogoutService.logout()
        setData('')
      }, 3500)
    } else {
      router.push(link)
    }
  }

  return (
    <>
      <Button
        bg={colorMode === 'light' ? 'blue.300' : 'whiteAlpha.200'}
        _hover={
          colorMode === 'light'
            ? { backgroundColor: 'blue.200' }
            : { backgroundColor: 'whiteAlpha.300' }
        }
        type={type}
        onClick={pushRouter}
      >
        {name}
      </Button>
    </>
  )
}

export default ButtonLink
