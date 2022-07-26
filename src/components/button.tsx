import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export interface ButtonProps {
  name: string
  link: string
  type: 'button' | 'submit' | 'reset' | undefined
}

const ButtonLink = ({ name, link, type }: ButtonProps) => {
  const router = useRouter()

  function pushRouter() {
    router.push(link)
  }

  return (
    <>
      <Button type={type} onClick={pushRouter}>
        {name}
      </Button>
    </>
  )
}

export default ButtonLink
