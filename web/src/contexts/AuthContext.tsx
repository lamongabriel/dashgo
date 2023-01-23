import { createContext, ReactNode } from 'react'
import { api } from '../services/api'

interface SignInCredentials {
	email: string
	password: string
}

interface AuthContextData {
	signIn: (credentials: SignInCredentials) => Promise<void>
	isAuth: boolean
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

interface AuthContextProviderProps {
	children: ReactNode
}

export function AuthContextProvider ({children}: AuthContextProviderProps) {

	const isAuth = false

	async function signIn ({email, password}: SignInCredentials) {
		const response = await api.post('/sessions', {email, password})
	}

	return (
		<AuthContext.Provider value={{
			isAuth,
			signIn
		}}>
			{children}
		</AuthContext.Provider>
	)
}
