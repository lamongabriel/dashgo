import { useRouter } from 'next/router'
import { createContext, ReactNode, useState } from 'react'
import { api } from '../services/api'

interface User {
	email: string
	permitions: string[]
	roles: string[]
}

interface SignInCredentials {
	email: string
	password: string
}

interface AuthContextData {
	signIn: (credentials: SignInCredentials) => Promise<void>
	isAuth: boolean
	user: User
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

interface AuthContextProviderProps {
	children: ReactNode
}

export function AuthContextProvider ({children}: AuthContextProviderProps) {

	const [user, setUser] = useState<User>({} as User)
	const isAuth = !!user

	const router = useRouter()

	async function signIn ({email, password}: SignInCredentials) {
		try {
			const response = await api.post('/sessions', {email, password})

			const {permitions, roles} = response.data

			setUser({email, permitions, roles})

			router.push('/dashboard')
		} catch (err){
			console.log(err)
		}
	}

	return (
		<AuthContext.Provider value={{isAuth, signIn, user}}>
			{children}
		</AuthContext.Provider>
	)
}
