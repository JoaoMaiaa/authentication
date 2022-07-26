import { Heading, Text } from '@chakra-ui/react'

export interface TextProps {
  title: string
  body: string
}

const Info = ({ title, body }: TextProps) => {
  return (
    <>
      <Heading>{title}</Heading>
      <Text>{body}</Text>
    </>
  )
}

export default Info
