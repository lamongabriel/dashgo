import axios, { AxiosError } from 'axios'
import { parseCookies, setCookie } from 'nookies'

let cookies = parseCookies()

export const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL as string,
	headers: {
		Authorization: `Bearer ${cookies['dashgo@token']}`
	}
})

api.interceptors.response.use(response => response, (error: AxiosError) => {
	if(error.response?.status === 401){
		if(error.response.data?.code === 'token.expired'){
			// refresh token
			cookies = parseCookies()
			const {'dashgo@refreshToken': refreshToken} = cookies

			api.post('/refresh', refreshToken).then(response => {
				setCookie(undefined, 'dashgo@token', response.data.token, {
					maxAge: 60 * 60 * 24, // 24 hours
					path: '/'
				})

				setCookie(undefined, 'dashgo@refreshToken', response.data.refreshToken, {
					maxAge: 60 * 60 * 24, // 24 hours
					path: '/'
				})

				api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`
			})
		} else {
			// sign out
		}
	}
})
