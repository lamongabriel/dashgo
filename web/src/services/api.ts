import axios, { AxiosError } from 'axios'
import { parseCookies, setCookie } from 'nookies'
import { signOut } from '../contexts/AuthContext'

let isRefreshing = false
let failedRequestQueue: any[] = []

export function setupAPIClient (ctx = undefined) {

	let cookies = parseCookies(ctx)

	const api = axios.create({
		baseURL: process.env.NEXT_PUBLIC_API_URL as string,
		headers: {
			Authorization: `Bearer ${cookies['dashgo@token']}`
		}
	})

	api.interceptors.response.use(response => response, (error: AxiosError) => {
		if(error.response?.status === 401){
			if(error.response.data?.code === 'token.expired'){
				// refresh token
				cookies = parseCookies(ctx)
				const {'dashgo@refreshToken': refreshToken} = cookies

				const originalConfig = error.config

				if(!isRefreshing){
					isRefreshing = true

					api.post('/refresh', {refreshToken}).then(response => {
						setCookie(ctx, 'dashgo@token', response.data.token, {
							maxAge: 60 * 60 * 24, // 24 hours
							path: '/'
						})

						setCookie(ctx, 'dashgo@refreshToken', response.data.refreshToken, {
							maxAge: 60 * 60 * 24, // 24 hours
							path: '/'
						})

						api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`

						failedRequestQueue.forEach(request => request.onSuccess(response.data.token))

						failedRequestQueue = []
					}).catch((err) => {
						failedRequestQueue.forEach(request => request.onSuccess(err))
						failedRequestQueue = []

						if(typeof window !== 'undefined') {
							signOut()
						}
					}).finally(() => {
						isRefreshing = false
					})
				}

				return new Promise((resolve, reject) => {
					failedRequestQueue.push({
						onSuccess: (token: string) => {
							originalConfig.headers['Authorization'] = `Bearer ${token }`

							resolve(api(originalConfig))
						},
						onError: (err: AxiosError) => {
							reject(err)
						}
					})
				})
			} else {
				if(typeof window !== 'undefined') {
					signOut()
				}
			}
		}

		return Promise.reject(error)
	})

	return api
}
