import { createContext, ReactNode, useEffect, useState } from 'react'
import Router from 'next/router'

import { setCookie, parseCookies, destroyCookie } from 'nookies'

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
	signIn: (credentials: SignInCredentials) => Promise<unknown>
	isAuth: boolean
	user: User
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

interface AuthContextProviderProps {
	children: ReactNode
}

export function signOut () {
	destroyCookie(undefined, 'dashgo@token')
	destroyCookie(undefined, 'dashgo@refreshToken')

	Router.push('/')
}

export function AuthContextProvider ({children}: AuthContextProviderProps) {

	const [user, setUser] = useState<User>({} as User)
	const isAuth = !!user

	useEffect(() => {
		const cookies = parseCookies()

		const {'dashgo@token': token} = cookies

		if(token){
			api.get('/me').then(response => {
				const {email, permissions, roles} = response.data

				setUser({email, permissions, roles})
			}).catch(() => {
				signOut()
			})
		}

	}, [])

	async function signIn ({email, password}: SignInCredentials) {
		try {
			const response = await api.post('/sessions', {email, password})

			const {token, refreshToken, permissions, roles} = response.data

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

			Router.push('/dashboard')
		} catch (err){
			return {err}
		}
	}

	return (
		<AuthContext.Provider value={{isAuth, signIn, user}}>
			{children}
		</AuthContext.Provider>
	)
}
