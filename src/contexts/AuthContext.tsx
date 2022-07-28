/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react'

export interface AuthContextProps {
  name: string
  email: string
  setEmail: (input: string) => void
  setName: (input: string) => void
}

export const AuthContext = createContext<AuthContextProps>({
  name: '',
  setName: () => {},
  email: '',
  setEmail: () => {}
})
