import { createContext, ReactNode } from 'react'

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
		console.log(email, password)
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
