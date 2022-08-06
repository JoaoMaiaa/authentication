import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Box,
  Text
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useRef, useContext, useEffect, useState } from 'react'

import { AuthContext } from '../contexts/AuthContext'
import LogoutService from '../services/logout'
import DeleteService from '../services/delete'

const DrawerComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)
  const router = useRouter()
  const [button, setButton] = useState(false)

  const { data, setData } = useContext(AuthContext)

  useEffect(() => {
    if (data) {
      setButton(true)
    } else {
      setButton(false)
    }
  }, [data])

  function handleDelete() {
    // const email = localStorage.getItem('email')
    router.push('/')
    setTimeout(() => {
      const email = localStorage.getItem('email') as string
      DeleteService.delete({ email: email })
      setData('')
    }, 3500)
  }

  function handleLogout() {
    router.push('/')
    setTimeout(() => {
      LogoutService.logout()
      setData('')
    }, 3500)
  }

  return (
    <>
      {button ? (
        <Button ref={btnRef} onClick={onOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          </svg>
        </Button>
      ) : (
        ''
      )}
      <Drawer colorScheme="purple" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Seus dados</DrawerHeader>
          <DrawerBody>
            <Box mt="2rem">
              <Text>
                Nome: <Box fontWeight="light">João Maia</Box>
              </Text>
              <Text mt="1rem">
                Email: <Box fontWeight="light">joao@email.com</Box>
              </Text>
            </Box>
          </DrawerBody>
          <DrawerFooter>
            <Button onClick={() => handleLogout()} mr="auto">
              Sair da conta
            </Button>
            <Button
              onClick={() => handleDelete()}
              color="white"
              bg="red.500"
              _hover={{ bg: 'red.600' }}
            >
              Excluir conta
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerComponent
