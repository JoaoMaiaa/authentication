import { Box, useColorMode } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const Footer = () => {
  const router = useRouter()
  const { colorMode } = useColorMode()
  return (
    <>
      <footer>
        <Box
          mt="1.5rem"
          color={colorMode === 'light' ? '#4358CB' : '#FAF5FF'}
          display="flex"
          justifyContent="center"
        >
          Feito por{' '}
          <Box
            ml="1"
            color={colorMode === 'light' ? 'blue.200' : '#4358CB'}
            _hover={{ cursor: 'pointer' }}
            onClick={() => router.push('https://github.com/JoaoMaiaa')}
          >
            João Maia
          </Box>
        </Box>
      </footer>
    </>
  )
}

export default Footer
