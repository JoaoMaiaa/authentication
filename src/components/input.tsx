import { Input, useColorMode } from '@chakra-ui/react'
import { ChangeEventHandler } from 'react'

export interface InputProps {
  type: string
  name: string
  value: string
  placeholder: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

const InputComponent = ({
  type,
  name,
  value,
  placeholder,
  onChange
}: InputProps) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <Input
        fontWeight="light"
        // isRequired
        bg={colorMode === 'light' ? 'blue.300' : '#151E50'}
        borderRadius="sm"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        size="lg"
        border="none"
        onChange={onChange}
      />
    </>
  )
}

export default InputComponent
