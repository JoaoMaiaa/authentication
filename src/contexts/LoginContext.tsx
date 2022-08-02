/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react'

export interface LoginContextProps {
  name: string
  email: string
  setEmail: (input: string) => void
  setName: (input: string) => void
}

export const LoginContext = createContext<LoginContextProps>({
  name: '',
  setName: () => {},
  email: '',
  setEmail: () => {}
})
