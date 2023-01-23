import { createContext, ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { setCookie, parseCookies } from 'nookies'

import { api } from '../services/api'

interface User {
	email: string
	permissions: string[]
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

	useEffect(() => {
		const cookies = parseCookies()

		const {'dashgo@token': token} = cookies

		if(token){
			api.get('/me').then(response => {
				const {email, permissions, roles} = response.data

				setUser({email, permissions, roles})
			})
		}

	}, [])

	async function signIn ({email, password}: SignInCredentials) {
		try {
			const response = await api.post('/sessions', {email, password})

			const {token, refreshToken, permissions, roles} = response.data

			console.log(response.data)

			setCookie(undefined, 'dashgo@token', token, {
				maxAge: 60 * 60 * 24, // 24 hours
				path: '/'
			})

			setCookie(undefined, 'dashgo@refreshToken', refreshToken, {
				maxAge: 60 * 60 * 24, // 24 hours
				path: '/'
			})

			setUser({email, permissions, roles})

			api.defaults.headers['Authorization'] = `Bearer ${token}`

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
