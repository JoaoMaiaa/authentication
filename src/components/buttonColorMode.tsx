import { Button } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode'

import Sun from './sun'
import Moon from './moon'

const ButtonColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? (
          <Moon color="#4358CB" />
        ) : (
          <Sun color="white" />
        )}
      </Button>
    </>
  )
}

export default ButtonColorMode
