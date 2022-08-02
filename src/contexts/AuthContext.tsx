/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react'

export interface AuthProps {
  setData: (input: string) => void
  data: string
}

export const AuthContext = createContext<AuthProps>({
  data: '',
  setData: () => {}
})
