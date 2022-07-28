import { Input } from '@chakra-ui/react'

export interface InputProps {
  type: string
  name: string
  value: string
  placeholder: string
}

const InputComponent = ({ type, name, value, placeholder }: InputProps) => {
  return (
    <>
      <Input
        isRequired
        bg="#151E50"
        borderRadius="sm"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        size="lg"
        border="none"
      />
    </>
  )
}

export default InputComponent
